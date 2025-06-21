"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

const ContactSection = () => {
    const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/xovwnrrz', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (res.ok) {
      alert('Thanks for reaching out! I\'ll get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong. Please try again later.');
    }
  };
  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-4 md:px-12 py-16 flex flex-col justify-center gap-20"
    >
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            I’m open to work, full-time opportunities, or collaborations. Feel
            free to reach out!
          </p>

          <div className="flex items-center gap-3">
            <CiMail />
            <a
              href="mailto:anmolruhella23@gmail.com"
              className="hover:underline"
            >
              anmolruhella23@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <IoLogoGithub />
            <a
              href="https://github.com/AnmolRuhella"
              target="_blank"
              className="hover:underline"
            >
              My GitHub Account
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin />

            <a
              href="https://www.linkedin.com/in/anmolruhella/"
              target="_blank"
              className="hover:underline"
            >
              My LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="flex gap-2 items-center">
            Send Message <IoIosSend />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
