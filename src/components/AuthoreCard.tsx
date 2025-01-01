import React from "react";
import Image from "next/image";

const AuthoreCard = () => {
  return (
    <div className="bg-[#6fb9eb] shadow-lg rounded-lg p-6">
      <div className="flex items-center animation-fadeIn  ">
        <Image
          src="/image.jpg"
          alt="author image"
          width={100}
          height={100}
          className="w-19 h-19 rounded-full mr-4 object-cover border-2 mb-3 border-[#304b5f]"
        />
        <div  >
          <h3 className="text-xl font-bold mb-2">Tehreem Fatima</h3>
          <p className="text-slate-500">
            {""}
            Frontend Developer | Backend Developer | web development
          </p>
        </div>
      </div>
<p className="text-[#0a1824]">About Me

Hi! Im Tehreem Fatima, a web developer passionate about creating user-friendly websites. Since starting my journey in 2023, Ive developed skills in HTML, CSS, JavaScript, Next.js, and Tailwind CSS.

Through my blog, I share tips and experiences to help aspiring developers grow in their journey.
</p>
<div className="mt-4 flex space-x-3">
  <a href="https://www.linkedin.com/in/tehreem-fatima-3318252ba/" className="px-4 py-2 text-white bg-[#162c3a] rounded-md hover:bg-[#304b5f]">
LinkedIn
  </a>
  <a href="https://github.com/tehreem-fatima-rani123" className="px-4 py-2 text-white bg-[#162c3a] rounded-md hover:bg-[#304b5f]">
Github
  </a>
  <a href="#" className="px-4 py-2 text-white bg-[#162c3a] rounded-md hover:bg-[#304b5f]">
Instagram
  </a>

</div>
    </div>
  );
};

export default AuthoreCard;
