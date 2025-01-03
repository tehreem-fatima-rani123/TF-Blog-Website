"use client";
import React from "react";
import CommintSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import Image from "next/image";

const posts = [
  {
    id: "1",
    title: "Python: The Ultimate Guide to Programming Excellence",
    description: "Python is a high-level, general-purpose programming language renowned for its simplicity and power. It is one of the most popular languages today, used by beginners and professionals alike for a variety of applications. Python is designed to be easy to learn and use, making it perfect for beginners while still powerful enough for advanced developers. Its syntax is straightforward, resembling natural language, which allows you to focus on problem-solving rather than getting bogged down by complex code structures. Python excels in many domains, including web development, data science, machine learning, automation, game development, backend development, and even IoT and embedded systems. Frameworks like Django and Flask enable developers to create dynamic and robust websites, while libraries like Pandas, NumPy, and TensorFlow make it a top choice for analyzing data and building machine learning models. Python’s ability to automate repetitive tasks through scripting saves time and effort, and its use in game development is facilitated by libraries like Pygame. It also shines in backend development by providing tools for creating APIs and server-side logic. Python’s versatility extends to powering small devices with libraries like MicroPython and support for Raspberry Pi. Key features of Python include its ease of use, cross-platform compatibility, extensive libraries, and robust community support. Its simple syntax makes it accessible for beginners, while its ability to run on multiple platforms, including Windows, macOS, and Linux, ensures flexibility. Python's libraries cater to a wide range of needs, from web frameworks to scientific computing. Moreover, its large and active community ensures that developers can find guidance and resources whenever needed. Python also integrates seamlessly with other languages like C, C++, and Java, making it an ideal choice for various projects. Getting started with Python is simple: download it from the official website, choose a code editor like VS Code or PyCharm, and begin with basic programs such as printing text or performing calculations before moving on to advanced topics like file handling, classes, and modules. Python continues to dominate the programming world due to its versatility and adaptability. It is a language that grows with you, adapting to your needs as you transition from a beginner to an expert. More than just a programming language, Python is a gateway to endless opportunities, whether you aim to build websites, analyze data, create intelligent systems, or automate tasks.",
    image: "/python.webp",
  },
  {
    "id": "2",
    "title": "Next.js: The React Framework for Production",
    "description": "Next.js is a React-based framework that empowers developers to create high-performance, scalable web applications with ease. Its built-in support for server-side rendering (SSR) and static site generation (SSG) enhances SEO and improves user experience by delivering faster load times. Next.js simplifies routing with a file-based system, allowing developers to build dynamic and flexible applications without extensive configuration. It comes with powerful features like API routes, incremental static regeneration, and built-in CSS and Sass support, making it a go-to choice for modern web development. Whether you're building a personal blog, an e-commerce site, or an enterprise-level application, Next.js provides the tools and flexibility to meet your needs efficiently.",
    "image": "/nextjs.jpeg"
  },
  
  {
    "id": "3",
    "title": "Tailwind CSS: Utility-First Framework",
    "description": "Tailwind CSS is a utility-first CSS framework that enables developers to create custom designs quickly without writing repetitive CSS code. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that can be combined to create any design, allowing for highly customizable, flexible layouts. It emphasizes a more functional approach to styling, where instead of writing custom CSS rules, you apply utility classes directly in HTML. This results in faster development and smaller CSS file sizes by eliminating unused styles. Tailwind supports responsive design out of the box, allowing developers to create fully responsive websites by adding breakpoint classes. Additionally, Tailwind includes features like hover, focus, and active states, as well as options for customizing themes, colors, and spacing, making it a powerful tool for building modern web applications efficiently.",
    "image": "/images.jpeg"
  },
  
  {
    "id": "4",
    "title": "TypeScript: Enhancing JavaScript",
    "description": "TypeScript is a statically-typed superset of JavaScript that compiles to plain JavaScript. It enhances the development experience by providing optional static typing, interfaces, and other features that improve code reliability, maintainability, and productivity, especially for large-scale applications. TypeScript helps developers catch errors early in the development process by performing type-checking at compile time, which can prevent many common JavaScript issues such as undefined variables or function argument mismatches. With TypeScript, developers can define types for variables, function parameters, and return values, providing better documentation and making the code easier to understand. TypeScript also supports modern JavaScript features like classes, modules, and async/await, while also allowing developers to use cutting-edge features even if they aren't yet supported by all browsers. By integrating seamlessly with existing JavaScript code, TypeScript allows developers to gradually adopt it into their projects. TypeScript is widely used in frameworks like Angular and React, providing strong tooling, code completion, and refactoring capabilities, which significantly boost development productivity.",
    "image": "/images.png"
  },
  
  {
    "id": "5",
    "title": "Java: Powering Enterprise Applications",
    "description": "Java is a widely-used, platform-independent programming language known for its robustness, scalability, and versatility. Originally developed by Sun Microsystems and now owned by Oracle, Java is a staple for building large-scale enterprise applications. One of its key features is the 'write once, run anywhere' philosophy, meaning that Java code can be compiled into bytecode and run on any platform that supports the Java Virtual Machine (JVM). This makes Java ideal for cross-platform development, whether for desktop applications, web applications, or mobile applications. Java is also a popular language for Android development, offering a rich set of libraries and frameworks for building mobile applications. Its strong object-oriented principles, extensive standard libraries, and powerful tools like Spring, Hibernate, and JavaFX make it a top choice for building secure, high-performance applications. With a vibrant developer community and support for multithreading, memory management, and concurrency, Java remains a top choice for developers working on scalable, reliable enterprise solutions.",
    "image": "/javas.jpeg"
  },
  
  {
    "id": "6",
    "title": "HTML: The Backbone of Web Development",
    "description": "HTML (HyperText Markup Language) is the foundational language used to create the structure of web pages and web applications. It is a markup language that defines the elements on a webpage, such as headings, paragraphs, links, images, forms, and other content. HTML uses a system of tags to organize and present content in a way that can be interpreted by web browsers. Every webpage you see on the internet is built using HTML, and it serves as the backbone of web development, providing the basic structure upon which styles (CSS) and functionality (JavaScript) are applied. HTML has evolved over the years, with HTML5 being the latest major version, introducing new elements and attributes that improve accessibility, multimedia support (like audio and video), and interactivity. HTML5 also provides features like forms, geolocation, local storage, and APIs for embedding complex content like maps, 3D graphics, and animations. A good understanding of HTML is essential for web developers as it is the starting point for creating all web content and ensures that web pages are structured properly for both users and search engines.",
    "image": "/html.png"
  },
  
  {
    "id": "7",
    "title": "CSS: Styling the Web",
    "description": "CSS (Cascading Style Sheets) is the language used to style and lay out web pages, making them visually appealing and user-friendly. It allows developers to define the appearance of HTML elements, such as fonts, colors, spacing, positioning, and layout. CSS enhances the user experience by creating visually stunning designs, from simple websites to complex web applications. Through CSS, developers can control how elements are displayed on different screen sizes and devices, making websites responsive and mobile-friendly. CSS supports features like animations, transitions, and transformations, which enable the creation of dynamic, interactive interfaces. It also works seamlessly with HTML to create modern designs and layouts, using techniques like Flexbox and CSS Grid for flexible, grid-based layouts. With the introduction of CSS3, developers gained even more powerful tools, including media queries for responsive design, as well as advanced styling options such as gradients, shadows, and custom fonts. A solid understanding of CSS is essential for web developers as it allows them to build polished, professional, and user-friendly websites that adapt to different screen sizes and devices.",
    "image": "/css.jpeg"
  },
  
  {
    "id": "8",
    "title": "APIs: Connecting the Web",
    "description": "An API (Application Programming Interface) is a set of protocols, routines, and tools that allow different software applications to communicate with each other. APIs enable integration between various systems, allowing them to share data and functionality in a seamless and efficient manner. By exposing certain functions, APIs make it possible for external applications to interact with a system without needing to understand the internal workings of that system. APIs are crucial in modern web development, enabling the integration of third-party services like payment gateways, social media platforms, data storage, and cloud services. They allow developers to automate processes, retrieve data in real time, and build innovative solutions without reinventing the wheel. There are different types of APIs, such as REST APIs, SOAP APIs, and GraphQL APIs, each offering unique benefits and use cases. REST APIs, for instance, use HTTP methods to perform operations like GET, POST, PUT, and DELETE, making them lightweight and easy to use. APIs have become a fundamental part of modern web applications, allowing businesses to connect services, share data, and create rich, dynamic user experiences across platforms and devices.",
    "image": "/download (1).jpeg"
  },
  
  {
    "id": "9",
    "title": "Artificial Intelligence: Shaping the Future",
    "description": "Artificial Intelligence (AI) is a rapidly advancing field of computer science focused on creating systems that can perform tasks that typically require human intelligence. AI enables machines to analyze data, recognize patterns, make decisions, and learn from experience without explicit programming. It encompasses various subfields, including machine learning (ML), deep learning, natural language processing (NLP), computer vision, and robotics. Machine learning, a subset of AI, involves training algorithms on large datasets to allow systems to make predictions or decisions. Deep learning, a specialized form of machine learning, uses neural networks to analyze vast amounts of data, powering applications like image recognition, speech recognition, and autonomous vehicles. AI is transforming industries such as healthcare, finance, education, transportation, and entertainment by automating tasks, enhancing decision-making, and improving efficiency. For example, AI-powered systems can assist doctors in diagnosing diseases, predict stock market trends, or optimize supply chain management. As AI continues to evolve, it holds the potential to solve complex problems, revolutionize industries, and change the way we live and work. However, it also raises ethical concerns, such as data privacy, bias in algorithms, and the future of employment, making it an important area of research and debate.",
    "image": "/images (2).jpeg"
  }
  
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h1 className="text-2xl font-bold text-center mt-10">Post Not Found</h1>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p
        key={index}
        className="mt-4 text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed sm:leading-normal md:leading-loose"
      >
        {para.trim()}
      </p>
    ));
  };
  
  
  return (
    <div className="max-w-3xl mx-auto p-5 mt-40 ">
      <h1 className="md:text-4xl text-3xl font-bold text-center text-[#274f69]">
        {""}
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
          width={100}
          height={100}
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <a
          href={`/posts/${post.id}`}
          className={`w-full px-8 py-2 h-12 text-white rounded hover:bg-slate-500 
          `}
        >
          Read More
        </a>

      <CommintSection postid={post.id} />
      <AuthoreCard />
    </div>
  );
}
