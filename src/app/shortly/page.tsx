import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shortly",
  description: "Shortly is a website for shortening URLs",
  icons: [
    {
      rel: "icon",
      url: "favicon-32x32-shortly.png",
    },
  ],
};
import logo from "../../../public/assets/images/shortly/logo.svg";

export default function ShortlyPage() {
  return (
    <main className="">
      {/* Nav container */}
      <nav className="relative container mx-auto p-6">
        {/* Flex container for all items */}
        <div className="flex items-center justify-between">
          {/* Flex container for logo/menu */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <Image src={logo} alt="shortly logo" />
            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
