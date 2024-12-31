import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formStatus, setFormStatus] = useState(null); // State for form status
    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submitting state

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            setFormStatus({ success: false, message: "All fields are required!" });
            return;
        }
        
        if (!validateEmail(email)) {
            setFormStatus({ success: false, message: "Please enter a valid email address." });
            return;
        }

        setIsSubmitting(true);  // Set submitting state

        // Simulate an API call or form submission
        setTimeout(() => {
            console.log({ name, email, message });

            // Simulate a successful submission
            setFormStatus({ success: true, message: "Message sent successfully!" });

            // Reset the form fields
            setName("");
            setEmail("");
            setMessage("");

            setIsSubmitting(false);  // Reset submitting state
        }, 2000); // Simulate a network request
    };

    return (
        <>
            <Navbar />
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-20 border-2">
                <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                
                {formStatus && (
                    <div
                        className={`mb-4 text-center p-3 ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                        aria-live="assertive"
                    >
                        {formStatus.message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            placeholder='Enter your name'
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleName}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            placeholder='Enter your email'
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessage}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
