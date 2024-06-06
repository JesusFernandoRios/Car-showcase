"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";
import React, { Fragment, useState } from "react";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState("");

  //check if theres currently a query, if there is return all manufacturers with query values
  const filteredManufactured =
    query === ""
      ? manufacturers
      : manufacturers
          .filter((item) => item.toLowerCase().replace(/\s+/g, ""))
          .includes(query.toLowerCase().replace(/\s+/g, ""));

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volskwagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opcaity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufactured.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufactured.map((item) => (
                  <Combobox.Option
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue" : "text-gray-900"
                      } `
                    }
                    key={item}
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
