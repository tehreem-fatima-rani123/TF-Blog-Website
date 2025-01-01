import React from "react";

const Feature = () => {
  return (
    <div className="mt-36  bg-[#5B99C2]">
      <section className="py-8 bg-neutral-50 mb-24 md:mb-40">
        <h2 className=" text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-gray-400 text-[#2a495c] mb-5">
          Building the Future with Code: Tehreem Fatima’s Blog on Programming
          and Web Technologies
        </h2>
        <p className="text-center m-4 mt-4 mb-4 text-sm text-black sm:text-base md:mb-12 lg:mb-11 animate-fade-in-up delay-100">
          Hello! Im Tehreem Fatima, a passionate web developer with a love for
          exploring the ever-evolving world of technology. I am on a mission to
          simplify complex programming concepts and make web development
          accessible for everyone. Through this blog, I share my journey,
          learnings, and insights into programming and web technologies to
          inspire and guide others in their tech endeavors. When Im not coding,
          I enjoy learning about innovative tech trends and connecting with
          like-minded individuals to share knowledge and grow together.
        </p>
      </section>
      <div className="mx-auto max-w-7xl px-5 ">
        <h1 className="text-3xl font-bold text-center my-8 text-[#2a495c]  "> Exploring our categoies</h1>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6  animate-fade-in-up sm:pb-10 delay-100">
{[
  "Technologies",
  "Artificial  Intelliigence",
 " HTML",
 "virtual Reality",
 "Next Js",
 "Web Development",
].map((category, index) =>(
<div key={index}
className="reletive group p-6 bg-white rounded-lg shadow-lg hover:bg-[#3998d3]  hover: text-lacl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600 ">
  <p className="text-center text-lg font-semibold">{category}</p>
  <div className=" absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2  "></div>
</div>
))}
        </div>

      </div>
    </div>
  );
};

export default Feature;
