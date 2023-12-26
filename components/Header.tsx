import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-20 flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href={"/"} className="mr-10">
        {/* For using images we need to whitelist the url in next js, in next.config.js*/}
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown/>
        <SearchInput/>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
