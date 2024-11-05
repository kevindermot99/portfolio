import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Toolbox, WhoAmI } from "../content/content";
import { Link } from "react-router-dom";
import { img1, img2, img3, img4, img5 } from "../assets/gallery";
import {
  LuArrowUpRight,
  LuCommand,
  LuLaptop2,
  LuMail,
  LuMapPin,
  LuMedal,
  LuPalmtree,
} from "react-icons/lu";
import {
  SoundBoop,
  SoundClick,
  SoundEnter,
  SoundNotification,
} from "../assets/sound";
import { HiArchiveBox } from "react-icons/hi2";
import { FaDribbble, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiLinkedinFill, RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

function Home() {
  const [activeTool, setActiveTool] = useState(Toolbox[0]);
  const [activeTab, setActiveTab] = useState(activeTool.cards[0]);
  const [galleryTab, setGalleryTab] = useState(1);

  let clickAudio1 = new Audio(SoundNotification);
  clickAudio1.volume = 0.3;

  let clickAudio2 = new Audio(SoundBoop);
  clickAudio2.volume = 0.3;

  const playClick = () => {
    clickAudio1.play();
  };

  const playBoop = () => {
    clickAudio2.play();
  };

  const handleMouseEnter = () => {
    playBoop();
  };

  const handleChangeTool = (tool) => {
    playClick();
    setActiveTool(tool);
    setActiveTab(tool.cards[0]);
  };

  const handleGallryTab = (number) => {
    playClick();
    setGalleryTab(number);
  };

  return (
    <div className="">
      <Navbar />
      <h1 className="mt-24 w-full max-w-[1400px] px-12 flex items-center justify-end gap-2 text-sm text-black/40 mx-auto ">
        <HiArchiveBox />
        My Toolbox
      </h1>
      <section className=" grid grid-cols-2 gap-5 max-w-[1400px] mx-auto px-5 py-3">
        <div className="w-full h-full p-8 bg-card_bg rnd">
          <h1 className="text-[31px] leading-[39px] font-semibold">
            {WhoAmI.name}
            <span className="text-black/35"> &mdash; {WhoAmI.status}</span>
          </h1>
          <div className="dividor"></div>
          <h1 className="font-normal text-[20px] leading-[30px] text-[#707070]">
            {WhoAmI.bio.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </h1>
          <Link
            to={"https://www.youtube.com/shorts/K6aZuwH3xfE"}
            target="_blank"
            className="text-sm font-Inter w-fit text-[#707070] flex items-center justify-start gap-2 hover:underline"
          >
            <span className="h-2 w-2 min-w-fit aspect-square rounded-full bg-indigo-400"></span>
            Iron sharpens Iron
          </Link>
          <div className="w-full text-2xl flex items-center justify-start gap-1 mt-5">
            <VscGithubAlt className="h-[30px] w-auto min-w-fit rounded-full aspect-square text-black/40 cursor-pointer outline-none hover:text-black hover:bg-stone-200 p-1" />
            <RiLinkedinLine
              className="h-[30px] w-auto min-w-fit rounded-full aspect-square text-black/40 cursor-pointer outline-none hover:text-black hover:bg-stone-200 p-1"
              e
            />
            <LuMail className="h-[30px] w-auto min-w-fit rounded-full aspect-square text-black/40 cursor-pointer outline-none hover:text-black hover:bg-stone-200 p-1" />
            <FaWhatsapp className="h-[30px] w-auto min-w-fit rounded-full aspect-square text-black/40 cursor-pointer outline-none hover:text-black hover:bg-stone-200 p-1" />
            <FaDribbble className="h-[30px] w-auto min-w-fit rounded-full aspect-square text-black/40 cursor-pointer outline-none hover:text-black hover:bg-stone-200 p-1" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-5">
          <div className="w-full h-fit py-10 pl-10 bg-card_bg rnd flex flex-col gap-2 relative">
            <div className="text-xs text-black/50 uppercase flex items-center justify-start gap-1">
              <img src={activeTool.icon} className="h-5 rounded-md shadow" />
              {activeTool.name}
            </div>
            <div className="h-[90px] w-full border-l border-t border-b rounded-l-2xl ring-stone-100 flex items-center justify-start gap-2 p-[7px] overflow-y-hidden overflow-x-auto hidden_scrollbar">
              {activeTool.cards.map((card, index) => (
                <div
                  onClick={() => setActiveTab(card)}
                  key={index}
                  className={`w-[160px] h-full ring-1 cursor-pointer select-none ring-stone-200/30 rounded-xl shadow-md px-3 py-1 flex flex-col items-center justify-between 
              ${
                activeTab.title === card.title
                  ? "border-[3px] border-indigo-400 bg-indigo-100/50"
                  : "border-[3px] border-transparent bg-white"
              }`}
                >
                  <h1 className="text-base font-medium overflow-clip w-full h-full flex items-center justify-start gap-2 whitespace-nowrap">
                    <img src={card.favicon} className="w-4 min-w-4" />
                    {card.title}
                  </h1>
                  <div className="w-full h-[1px] bg-stone-200/80"></div>
                  <h1 className="text-base text-black/50 overflow-clip w-full h-full flex items-center justify-start whitespace-nowrap">
                    {card.desc}
                  </h1>
                </div>
              ))}
            </div>
            <div className="h-[90px] mt-2 ring-1 ring-stone-200/30 w-full rounded-l-2xl shadow-xl shadow-[#eeeeee] flex items-center justify-start bg-white p-[10px] gap-2 overflow-x-clip">
              {Toolbox.map((tool, index) => (
                <button
                  key={index}
                  onClick={() => handleChangeTool(tool)}
                  className={`h-full w-auto min-w-fit aspect-square flex items-center justify-center rounded-xl p-[7px] transition outline-none select-none
                  ${
                    activeTool.name === tool.name
                      ? "ring-[4px] bg-indigo-600/20 ring-indigo-500/80 tool_indicator "
                      : "hover:bg-stone-300/70 bg-transparent"
                  }`}
                >
                  <img
                    src={tool.icon}
                    className="rounded-lg shadow-md ring-1 ring-stone-100"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-2 gap-5">
            <div className="group w-full h-full p-6 bg-card_bg rnd flex flex-col-reverse gap-2 relative overflow-hidden">
              <Link
                to={"/"}
                className="bg-[#0288d1] w-14 rounded-2xl absolute top-4 right-4 z-20"
              >
                <img
                  src="https://img.icons8.com/color/144/linkedin.png"
                  className=""
                />
              </Link>

              <Link
                to={"/"}
                onMouseEnter={handleMouseEnter}
                className="w-full h-[45px] flex items-center justify-center gap-2 z-20 ring-1 ring-stone-200 rounded-full font-medium hover:bg-white hover:ring-transparent hover:text-black transition duration-300 peer"
              >
                View more posts <LuArrowUpRight className="text-lg" />
              </Link>

              <div className="bg-[#0288d1] w-14 z-10 peer-hover:w-[200%] peer-hover:top-[-50%] peer-hover:right-[-50%] transition-all duration-500 ease-in-out aspect-square rounded-full shadow-xl absolute top-4 right-4"></div>

              <div className="w-full flex-1 z-10 peer-hover:text-white">
                <div className="flex items-center justify-start gap-2">
                  <div className="h-12 w-12 aspect-square min-w-fit rounded-full overflow-hidden">
                    <img
                      src={img4}
                      className="w-fit h-fit min-h-12 object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col transition duration-500">
                    {/* Change text color to white on hover of the 'peer' link */}
                    <h1 className="font-medium leading-tight truncate max-w-[80%] ">
                      Kevin K. Mbonimpaye
                    </h1>
                    <h1 className="text-sm opacity-50 leading-tight truncate max-w-[80%]">
                      @kanezakevin
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col flex-1 w-full py-5 transition duration-500">
                  <h1 className="font-medium text-xl leading-tight break-all">
                    I’ve obtained a new certificate of Recognition from
                    <span className="text-blue-400 ">
                      {" "}
                      #AfrikanBabyBookProject
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="group w-full h-full bg-card_bg rnd flex flex-col gap-2 relative overflow-hidden">
              <Link
                to={"/"}
                className="bg-white w-14 rounded-2xl shadow-xl absolute top-4 right-4"
              >
                <img
                  src="https://img.icons8.com/color/144/ios-photos.png"
                  className=""
                />
              </Link>
              <div className="w-full h-[320px] cursor-pointer">
                {galleryTab === 1 ? (
                  <img src={img1} className="w-full h-full object-cover" />
                ) : galleryTab === 2 ? (
                  <img src={img2} className="w-full h-full object-cover" />
                ) : galleryTab === 3 ? (
                  <img src={img3} className="w-full h-full object-cover" />
                ) : (
                  <img src={img4} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="w-[85%] h-[50px] rounded-full shadow-lg bg-white/35 backdrop-blur-xl absolute bottom-[-100px] group-hover:bottom-6 right-0 left-0 mx-auto transition-all duration-300 ease-in-out flex gap-1 p-[5px]">
                <button
                  onClick={() => handleGallryTab(1)}
                  className={`w-full outline-none select-none flex items-center justify-center text-2xl transition text-black rounded-full 
                    ${
                      galleryTab === 1
                        ? "bg-white text-orange-500"
                        : "hover:bg-white/20 bg-transparent"
                    }`}
                >
                  <LuCommand />
                </button>
                <button
                  onClick={() => handleGallryTab(2)}
                  className={`w-full outline-none select-none flex items-center justify-center text-2xl transition text-black rounded-full 
                    ${
                      galleryTab === 2
                        ? "bg-white text-violet-500"
                        : "hover:bg-white/20 bg-transparent"
                    }`}
                >
                  <LuLaptop2 />
                </button>
                <button
                  onClick={() => handleGallryTab(3)}
                  className={`w-full outline-none select-none flex items-center justify-center text-2xl transition text-black rounded-full 
                    ${
                      galleryTab === 3
                        ? "bg-white text-emerald-500 -500"
                        : "hover:bg-white/20 bg-transparent"
                    }`}
                >
                  <LuPalmtree />
                </button>
                <button
                  onClick={() => handleGallryTab(4)}
                  className={`w-full outline-none select-none flex items-center justify-center text-2xl transition text-black rounded-full  
                    ${
                      galleryTab === 4
                        ? "bg-white text-blue-400"
                        : "hover:bg-white/20 bg-transparent"
                    }`}
                >
                  <LuMapPin />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
