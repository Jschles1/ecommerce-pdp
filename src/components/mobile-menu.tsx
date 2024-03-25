import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MenuIcon from "/public/images/icon-menu.svg";
import Link from "next/link";

export default function MobileMenu() {
  const exampleLinks = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0">
          <Image src={MenuIcon} alt="Menu" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pt-[5.75rem] pl-[1.56rem] space-y-5">
        {exampleLinks.map((link, index) => (
          <Link
            className="block text-lg font-bold leading-[1.625rem] text-dark-blue"
            key={index}
            href="#"
          >
            {link}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}
