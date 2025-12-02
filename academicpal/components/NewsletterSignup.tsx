'use client';

import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 bg-black border border-white/20 text-white text-center rounded-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our <span className="text-blue-500">Newsletter</span></h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow rounded-l-lg px-4 py-3 text-white bg-black border border-white/30 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold px-6 rounded-r-lg hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-lg font-semibold">Thank you for subscribing!</p>
      )}
    </section>
  );
};

export default NewsletterSignup;

