"use client";

import React from "react";

const blogs = [
  {
    title: "Top 5 Tips to Learn React Fast",
    date: "May 20, 2025",
    excerpt:
      "Discover the best strategies to accelerate your React learning journey.",
    link: "/blog/react-tips",
  },
  {
    title: "Understanding Backend APIs",
    date: "May 10, 2025",
    excerpt: "A beginner-friendly guide to REST and GraphQL APIs.",
    link: "/blog/backend-apis",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-black rounded-xl shadow-lg border border-white/20">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">
        Latest Blog Posts
      </h2>
      <div className="space-y-8">
        {blogs.map(({ title, date, excerpt, link }) => (
          <a
            key={title}
            href={link}
            className="block bg-black border border-white/20 p-6 rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-1 text-white">{title}</h3>
            <p className="text-sm text-blue-400 mb-2">{date}</p>
            <p className="text-gray-400">{excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
