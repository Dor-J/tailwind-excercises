import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

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
import rawLogo from "../../../public/assets/images/shortly/logo.svg";
const logo = rawLogo as unknown as StaticImageData;
import heroSectionImageRaw from "../../../public/assets/images/shortly/illustration-working.svg";
const heroSectionImage = heroSectionImageRaw as unknown as StaticImageData;

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
              <a href="#" className="text-violet-600 hover:text-violet-800">
                Features
              </a>
              <a href="#" className="text-violet-600 hover:text-violet-800">
                Pricing
              </a>
              <a href="#" className="text-violet-600 hover:text-violet-800">
                Recources
              </a>
            </div>
          </div>

          {/* Right buttons menu */}
          <div className="hidden items-center space-x-6 font-bold text-violet-600 lg:flex">
            <div className="hover:text-violet-800">Login</div>
            <a
              href="#"
              className="rounded-full bg-cyan-400 px-8 py-3 font-bold text-white capitalize hover:opacity-70"
            >
              Sign Up
            </a>
          </div>
          {/* Hambutger Menu */}
          <button
            id="menu-btn"
            className="hamburger block focus:outline-none lg:hidden"
            type="button"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* TODOs Mobile Menu */}
      </nav>

      {/* -----------Hero Section----------- */}

      <section id="shortly-hero">
        {/* Hero Container */}
        <div className="container mx-auto flex flex-col-reverse p-6 lg:flex-row">
          {/* Content container */}
          <div className="mb-44 flex flex-col space-y-10 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-center text-5xl font-bold lg:max-w-md lg:text-left lg:text-6xl">
              More than just shorter links
            </h1>
            <p className="text-center text-2xl text-gray-400 lg:max-w-md lg:text-left">
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href="#"
                className="bg-cyan rounded-full px-10 py-5 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
              >
                Get Started
              </a>
            </div>
          </div>

          {/*  Image  */}
          <div className="mx-auto mb-24 md:w-180 lg:mb-0 lg:w-1/2">
            <Image src={heroSectionImage} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
