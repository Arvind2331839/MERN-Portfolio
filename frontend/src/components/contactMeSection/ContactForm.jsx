import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await axios.post("https://backend.arvindkumar.xyz/api/contact", { name, email, message });
      if (res.data.ok) {
        toast.success(res.data.message || "Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            fontSize: '0.8rem',
            padding: '0.5rem 1rem',
            minWidth: '200px',
            maxWidth: '300px',
          },
        });
        // setName("");
        // setEmail("");
        // setMessage("");
      }
    } catch (err) {
      const errMsg = err.response?.data?.error || "Something went wrong. Try again later.";
      toast.error(errMsg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          fontSize: '0.8rem',
          padding: '0.5rem 1rem',
          minWidth: '200px',
          maxWidth: '300px',
        },
      });
    }
  };

  return (
    <div>
      <ToastContainer 
        toastStyle={{ fontSize: '0.8rem', padding: '0.5rem 1rem', maxWidth: '300px' }}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
