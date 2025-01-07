"use client";
import InputSearch from "@/components/common/InputSearch";
import ButtonIcon from "../common/ButtonIcon";
import { FaSearch } from "react-icons/fa";

import ListSection from "./ListSection";

interface SearchMovieFormProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
}

export default function SearchMovieForm({
  query,
  setQuery,
  onSearch,
}: SearchMovieFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <section className="flex flex-col w-full justify-start gap-2">
      <section
        id="section-buscar"
        className="flex flex-col w-full justify-start gap-2"
      >
        <form onSubmit={handleSubmit}>
          <InputSearch
            params={{
              id: "input-search",
              label: "Search Movie",
              type: "search",
              value: query,
              onChange: (event) => {
                setQuery(event.target.value);
              },
            }}
          />
          <div className="flex flex-row flex-start gap-4">
            <ButtonIcon
              params={{
                type: "submit",
                
                icon: <FaSearch />,
              }}
            />
            <ListSection />
          </div>
        </form>
      </section>
    </section>
  );
}
