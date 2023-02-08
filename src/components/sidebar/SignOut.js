import React from "react";
import MenuItem from "./MenuItem";
import signout from "../../assets/icons/signout.png"
const SignOut = ({mini}) => {
  return (
    <div className={`border-t-[0.1px]  border-t-gray-600  py-4 ${mini ? "px-3 mx-4" : "px-5"}`}>
      <MenuItem mini={mini} arrow={false} name="Sign out" icon={signout} />
    </div>
  );
};

export default SignOut;
