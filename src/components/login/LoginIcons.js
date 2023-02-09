import React from 'react'
import google from "../../assets/icons/google.png"
import linkedin from "../../assets/icons/linkedin.png"
import windows from "../../assets/icons/windows.png"

const LoginIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      
      <button className="p-4 md:px-6 md:py-4 shadow-logo rounded w-fit">
        <img src={linkedin} className="w-8" alt="linkedin" />
      </button>

      <button className="p-4 md:px-6 md:py-4 shadow-logo rounded w-fit">
        <img src={google} className="w-8" alt="google" />
      </button>

      <button className="p-4 md:px-6 md:py-4 shadow-logo rounded w-fit">
        <img src={windows} className="w-8" alt="windows" />
      </button>
      
    </div>
  );
}

export default LoginIcons