import { IconButton } from "@/interfaces/Button";
import React from "react";

interface IconButtonProps {
  params: IconButton;
}

export default function ButtonIcon({ params }: IconButtonProps) {
  return (
    <>
      <button
        type={params.type}
        className="bg-orange-500 text-white px-3 py-1 text-xs rounded-lg hover:bg-orange-600 mt-2 flex justify-center items-center gap-2 
  sm:px-4 sm:py-2 sm:text-base"
      >
        {params.label}
        {params.icon}
      </button>
    </>
  );
}
