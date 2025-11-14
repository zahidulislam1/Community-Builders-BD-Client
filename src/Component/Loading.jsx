import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-[#3bd671] w-16 h-16 mb-6"></div>

      <div className="text-xl font-semibold text-[#3bd671] animate-pulse">
        Loading....
      </div>
    </div>
  );
};

export default Loading;
