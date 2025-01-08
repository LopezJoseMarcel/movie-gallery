"use client";

import { Input } from "@/interfaces/Inputs";

interface InputSearchProps {
  params: Input<string>;
}

export default function InputSearch({ params }: InputSearchProps) {
  return (
    <div>
      <label
        htmlFor={params.id}
        className="block text-sm/6 text-lg text-white-500 font-[family-name:var(--font-geist-sans)]"
      >
        {params.label}
      </label>
      <input
        id={params.id}
        className="w-60 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-lg border-solid border-2  focus:border-orange-500 focus:border-solid font-semibold text-orange-500	"
        type={params.type}
        value={params.value ?? ""}
        onChange={params.onChange} // Pasamos onChange aquí
      />
    </div>
  );
}
