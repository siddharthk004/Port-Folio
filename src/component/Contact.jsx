import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:siddharthkardile5@gmail.com?subject=Message from ${form.name}&body=${form.message} (${form.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-zinc-800 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block mb-1 text-lg">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-700 text-white focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-lg">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-700 text-white focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-1 text-lg">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-700 text-white focus:outline-none"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
