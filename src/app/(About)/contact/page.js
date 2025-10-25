"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="flex justify-center mt-16  px-4">
            <div className="bg-[#2a2a2c] shadow-md shadow-gray-600 rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-4 text-white">
                    Contact Me
                </h1>
                <p className="text-center text-gray-300 mb-8">
                    Feel free to reach out! I’ll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">Message</label>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
