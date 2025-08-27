require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { z } = require('zod');

const app = express();

/* -------------------- Configuration -------------------- */
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ;

/* -------------------- Middlewares -------------------- */
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // limit each IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "You have exceeded the request limit. Try again after 15 minutes."
  }
});
app.use(limiter);

/* -------------------- Mongoose Model -------------------- */
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    ip: { type: String },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);

/* -------------------- Connect to MongoDB -------------------- */
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

/* -------------------- Zod Schema -------------------- */
const contactZodSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email'),
  message: z.string().min(5, 'Message must be at least 5 characters').max(2000),
});

/* -------------------- Routes -------------------- */
app.get('/api/home', (req, res) => {
  res.json({ ok: true, message: 'Api running successfully', time: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  try {
    // Validate input using Zod
    const parsedData = contactZodSchema.parse(req.body);

    const doc = new Contact({
      ...parsedData,
      ip: req.ip,
    });

    await doc.save();
    return res.status(201).json({ ok: true, message: 'Request submitted successfully.' });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ error: err.errors.map(e => e.message).join(', ') });
    }
    console.error('Error saving contact:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/* -------------------- Fallbacks & Error handling -------------------- */
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

/* -------------------- Start Server -------------------- */
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));
