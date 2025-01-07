'use client'
import ButtonIcon from "@/components/common/ButtonIcon";
import { GoHeartFill } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import Link from "next/link";

export default function ListSection() {
  return (
    <section className="flex flex-row justify-center gap-4">
      <Link href={`/favoriteMovies/favorites`} >
        <ButtonIcon
        params={{
          type: "button",
          label: "Favorites",
          icon: <GoHeartFill color="white" />,
        }}
      />
      </Link>
      <Link href={`/favoriteMovies/to_watch`}>
        <ButtonIcon
          params={{
            type: "button",
            label: "To Watch",
            icon: <FaBookmark color="white" />,
          }}
        />
      </Link>
      <Link href={`/favoriteMovies/watched`} >
        <ButtonIcon
          params={{
            type: "button",
            label: "Watched",
            icon: <FaEye color="white" />,
          }}
        />
      </Link>
      
    </section>
  );
}
