import React from "react";
import MenuItem from "../sidebar/MenuItem";
import google from "../../assets/icons/google.png"
const SignOut = () => {
  return (
    <div className="border-t-[0.1px]  border-t-gray-600 px-5 py-4">
      <MenuItem arrow={false} name="Sign out" icon={google} />
    </div>
  );
};

export default SignOut;
