import React from 'react'

const Progress = ({step,mobile}) => {
  if (!mobile) {
    return (
      <div className="flex justify-center gap-4">
        {step === 1 ? (
          <>
            <span className="h-[6px] w-8 bg-d-blue rounded-full"></span>
            <span className="h-[6px] w-[6px] bg-d-p-gray rounded-full"></span>
          </>
        ) : (
          <>
            <span className="h-[6px] w-[6px] bg-d-p-gray rounded-full"></span>
            <span className="h-[6px] w-8 bg-d-blue rounded-full"></span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 mb-6 md:hidden">
      {step === 1 ? (
        <>
          <span className="h-[6px] w-8 bg-d-blue rounded-full"></span>
          <span className="h-[6px] w-[6px] bg-d-p-gray rounded-full"></span>
        </>
      ) : (
        <>
          <span className="h-[6px] w-[6px] bg-d-p-gray rounded-full"></span>
          <span className="h-[6px] w-8 bg-d-blue rounded-full"></span>
        </>
      )}
    </div>
  );
}

export default Progress