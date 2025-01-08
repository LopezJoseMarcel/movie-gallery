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
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mt-2 flex justify-center items-center gap-2"
      >
        {params.label}
        {params.icon} 
      </button>
    </>
  );
}
