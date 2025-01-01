import React from "react";
import BlogCard from "../components/BlogCard";

const Mega = () => {
  const post = [
    {
      id: "1",
      title: "Python: A Gateway to Backend Development",
      description: "Dive into Python, a high-level programming language renowned for its simplicity, versatility, and its widespread use in various fields like AI, web development, and data analysis.",
      date: "2024-12-30",
      imageUrl: "/python.webp",
    },
    {
      id: "2",
      title: "Next.js: The React Framework for Production",
      description: "Discover Next.js, a React framework designed for building fast, SEO-friendly, and scalable web applications with server-side rendering (SSR).",
      date: "2024-12-31",
      imageUrl: "/nextjs.jpeg",
    },
    {
      id: "3",
      title: "Tailwind CSS: Utility-First Framework",
      description: "Learn Tailwind CSS, the utility-first CSS framework enabling developers to create elegant, responsive, and customizable designs quickly without writing repetitive CSS code manually.",
      date: "2024-12-30",
      imageUrl: "/images.jpeg",
    },
    {
      id: "4",
      title: "TypeScript: Enhancing JavaScript",
      description: "Explore TypeScript, a statically-typed superset of JavaScript that enhances code reliability, maintainability, and productivity for developers working on large-scale applications.",
      date: "2024-12-30",
      imageUrl: "/images.png",
    },
    {
      id: "5",
      title: "Java: Powering Enterprise Applications",
      description: "Dive into Java, a platform-independent programming language loved for its robustness and versatility in building scalable enterprise solutions and Android mobile applications.",
      date: "2024-12-30",
      imageUrl: "/javas.jpeg",
    },
    {
      id: "6",
      title: "HTML: The Backbone of Web Development",
      description: "Learn HTML, the building block of the World Wide Web, a markup language essential for creating the structure of web pages and enabling multimedia-rich web experiences.",
      date: "2024-12-30",
      imageUrl: "/html.png",
    },
    {
      id: "7",
      title: "CSS: Styling the Web",
      description: "Master CSS, the language used to add style and layout to web pages, enabling developers to craft visually stunning, interactive, and responsive user interfaces for websites.",
      date: "2024-12-30",
      imageUrl: "/css.jpeg",
    },
    {
      id: "8",
      title: "APIs: Connecting the Web",
      description: "Learn about APIs, the technology that allows seamless communication between software applications, enabling integration of services, automation, and innovative web solutions globally.",
      date: "2024-12-30",
      imageUrl: "/download (1).jpeg",
    },
    {
      id: "9",
      title: "Artificial Intelligence: Shaping the Future",
      description: "Discover Artificial Intelligence (AI), a groundbreaking field that empowers machines to mimic human intelligence, solve complex problems, and revolutionize modern industries worldwide.",
      date: "2024-12-30",
      imageUrl: "/images (2).jpeg",
    },
  ];

  return (
    <div id="mega-page" className="my-8 bg-[#5B99C2]">
   <h1 className="text-5xl text-center my-8 pt-7  text-black font-bold">
  Exploring the World of Programming and Web Technologies
</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in text-slate-500 " key={post.id}>
            <div className="blog-card bg-black text-white p-4 rounded-lg">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
