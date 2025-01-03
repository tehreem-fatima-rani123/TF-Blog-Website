import React from "react";
import Image from "next/image";

const AuthoreCard = () => {
  return (
    <div className="bg-[#6fb9eb] shadow-lg rounded-lg p-6">
     <div className="flex flex-col items-center sm:flex-row animation-fadeIn">
  <Image
    src="/image.jpg"
    alt="author image"
    width={100}
    height={100}
    className="w-24 h-24 rounded-full sm:w-32 sm:h-32 lg:w-40 lg:h-40 mr-0 sm:mr-4 object-cover border-2 border-[#304b5f] mb-4 sm:mb-0"
  />
  <div className="text-center sm:text-left">
    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Tehreem Fatima</h3>
    <p className="text-sm sm:text-base lg:text-lg text-slate-500">
      Frontend Developer | Backend Developer | Web Development
    </p>
  </div>
</div>

<p className="text-[#0a1824]">About Me

Hi! Im Tehreem Fatima, a web developer passionate about creating user-friendly websites. Since starting my journey in 2023, Ive developed skills in HTML, CSS, JavaScript, Next.js, and Tailwind CSS.

Through my blog, I share tips and experiences to help aspiring developers grow in their journey.
</p>
<div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
  <a
    href="https://www.linkedin.com/in/tehreem-fatima-3318252ba/"
    className="px-4 py-2 text-sm sm:text-base text-white bg-[#162c3a] rounded-md hover:bg-[#304b5f] w-full sm:w-auto text-center"
  >
    LinkedIn
  </a>
  <a
    href="https://github.com/tehreem-fatima-rani123"
    className="px-4 py-2 text-sm sm:text-base text-white bg-[#162c3a] rounded-md hover:bg-[#304b5f] w-full sm:w-auto text-center"
  >
    Github
  </a>
  <a
    href="#"
    className="px-4 py-2 text-sm sm:text-base text-white bg-[#162c3a] rounded-md hover:bg-[#304b5f] w-full sm:w-auto text-center"
  >
    Instagram
  </a>
</div>

    </div>
  );
};

export default AuthoreCard;
