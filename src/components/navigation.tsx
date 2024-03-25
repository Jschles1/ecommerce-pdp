import Image from "next/image";
import Logo from "/public/images/logo.svg";
import MobileMenu from "./mobile-menu";
import Cart from "./cart";
import Avatar from "/public/images/image-avatar.png";
import Link from "next/link";

export default function Navigation() {
  const exampleLinks = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div className="px-[1.5rem] pt-[1.25rem] pb-[1.75rem] md:p-0 md:h-[6.99rem] flex items-center justify-between border-b border-header-border">
      <div className="flex items-center md:gap-x-[3.53rem] md:h-full">
        <div className="flex items-center gap-x-4">
          <MobileMenu />
          <Image src={Logo} alt="Sneakers Logo" />
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-8 md:h-full">
          {exampleLinks.map((link, index) => (
            <Link
              className="block h-full pt-[2.56rem] text-[0.9375rem] leading-[1.625rem] text-gray hover:text-dark-blue focus:text-dark-blue border-b-4 border-b-transparent hover:border-b-orange focus:border-b-orange"
              key={index}
              href="#"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-[1.39rem] md:gap-x-[2.89rem]">
        <Cart />
        <Image
          src={Avatar}
          alt="Avatar"
          className="w-6 h-6 md:h-[3.125rem] md:w-[3.125rem] cursor-pointer hover:border-orange hover:border-2 rounded-full"
        />
      </div>
    </div>
  );
}
