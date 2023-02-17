import React from 'react'
import account from "../../assets/icons/account.png"
import personal from "../../assets/icons/personal.png"


const Description = ({ step }) => {
  if (step === 1) {
    return (
      <div className="mt-14">
        <img src={personal} className="w-16 mx-auto mb-4" />
        <div className="text-center">
          <h3 className="text-d-fts-black text-sm font-semibold mb-3">
            Personal information
          </h3>
          <p className="text-d-st-gray text-[13px] leading-7">
            Fill out the form on the left you can always edit the data later in
            the setting menu.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-32">
      <img src={account} className="w-16 mx-auto mb-4 " />
      <div className="text-center">
        <h3 className="text-d-fts-black text-sm font-semibold mb-3">
          Account information
        </h3>
        <p className="text-d-st-gray text-[13px] leading-7">
          Fill out the form on the left you can always edit the data later in
          the setting menu.
        </p>
      </div>
    </div>
  );
};

export default Description