import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Title Section */}
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
        </div>

        {/* Welcome Message */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Singh Bookstore App, your ultimate digital destination for all things books! Whether you're an avid reader, a book collector, a student, or simply looking for something new to dive into, we are here to make your reading journey as easy and enjoyable as possible.
          </p>
        </div>

        {/* About Section */}
        <div className="mt-12">
          <p className="text-base text-gray-700 leading-relaxed">
            Our app offers a vast and diverse selection of books, from timeless classics and gripping bestsellers to academic textbooks and niche genres. With our carefully curated categories, you’ll always find something that piques your interest, whether you're into fiction, non-fiction, self-help, business, fantasy, science, or more.
          </p>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            At Singh Bookstore, we understand that the love of reading transcends all ages and backgrounds. That’s why we’ve designed our app to be user-friendly and accessible, ensuring a seamless experience for readers of all ages. From browsing and discovering new titles to making secure purchases and receiving personalized book recommendations, every step of the process is optimized for your convenience.
          </p>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            With Singh Bookstore App, you can shop confidently with secure payment methods and reliable delivery options that bring your books right to your doorstep. We prioritize customer satisfaction and are dedicated to providing exceptional service, from timely deliveries to addressing any questions or concerns you may have.
          </p>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Our mission is simple: to make books easily accessible to everyone and to cultivate a love for reading that lasts a lifetime.
          </p>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Join the Singh Bookstore community today, explore our extensive library, and embark on your next literary adventure with just a few taps. Your next great read is waiting for you!
          </p>
        </div>

        {/* Back Button Section */}
        <div className="text-center mt-12">
          <Link to="/">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-700 duration-300 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
