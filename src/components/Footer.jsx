import React from "react";
import { CreatedAt, Email } from "../data";

function Footer() {
  return (
    <>
      {/* CAT */}
      <section className=" w-full h-fit flex items-center justify-center flex-col gap-1 py-32 max-md:py-0 px-20 max-md:px-5 z-20 ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 mb-6 max-md:gap-5">
          <h1 className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 text-transparent font-semibold tracking-tight z-10 max-w-[500px]">
            <span className="font-medium text-base text-main-color">
              Let's talk &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;{" "}
            </span>
            <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
              Have an idea? Interested in collaborating?
            </span>
          </h1>
          <p className="text-base leading-6 text-black/70 dark:text-white/40">
            Feel free to reach out to me via email for any inquiries,
            collaborations or just to say hello! drop me a message at{" "}
            <a
              target="_blank"
              href="mailto:mbonimpayekevin@gmail.com"
              className="font-bold opacity-100 break-words text-black dark:text-white cursor-pointer hover:underline hover:text-main-color transition "
            >
              mbonimpayekevin@gmail.com
            </a>
            , Have a great day.
          </p>
        </div>
      </section>

      <div className="flex flex-col items-start justify-start w-full h-full px-20 max-md:px-5">
        <div className="py-6 border-b-[1px] border-stone-300 dark:border-stone-800 w-full flex items-center max-md:flex-col gap-3 max-md:gap-6 flex-wrap max-md:items-start justify-between">
          <a
            target="_blank"
            href="mailto:mbonimpayekevin@gmail.com"
            className="font-medium  break-words max-md:max-w-[100%] line-clamp-1 text-sm text-black/70 dark:text-white/40 hover:text-main-color transition hover:underline"
          >
            {Email}
          </a>
          <div className="flex items-center justify-start gap-5 flex-wrap">
            <a
              href="#"
              className="font-medium text-sm text-black/70 dark:text-white/40 hover:text-main-color transition hover:underline"
            >
              Dribbble
            </a>
            <a
              href="#"
              className="font-medium text-sm text-black/70 dark:text-white/40 hover:text-main-color transition hover:underline"
            >
              Linkedin
            </a>
            <a
              href="#"
              className="font-medium text-sm text-black/70 dark:text-white/40 hover:text-main-color transition hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="py-6 w-full flex items-center justify-between max-md:flex-col max-md:items-start  max-md:gap-5 ">
          <p className="font-medium text-sm text-black/70 dark:text-white/40">
            &copy; {CreatedAt}
          </p>
          <div className="flex items-center justify-end gap-5">
            <a
              href="#"
              className="font-medium text-sm text-black/70 dark:text-white/40 transition hover:text-main-color hover:underline "
            >
              Terms
            </a>
            <a
              href="#"
              className="font-medium text-sm text-black/70 dark:text-white/40 transition hover:text-main-color hover:underline "
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;