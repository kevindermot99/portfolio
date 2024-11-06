import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { FavMusic, Toolbox, WhoAmI } from "../content/content";
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
  LuPlusCircle,
  LuVolume2,
  LuVolumeX,
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
import { IoHeadsetOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { PiPlaylistDuotone, PiSpotifyLogoLight } from "react-icons/pi";
import {
  GiNextButton,
  GiPauseButton,
  GiPlayButton,
  GiPreviousButton,
} from "react-icons/gi";
import { RxLoop } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";
import { CgMusicNote } from "react-icons/cg";

function About() {
  const [activeTool, setActiveTool] = useState(Toolbox[0]);
  const [activeTab, setActiveTab] = useState(activeTool.cards[0]);
  const [galleryTab, setGalleryTab] = useState(1);
  const [playing, setPlaying] = useState(false);
  const songRef = useRef(new Audio(FavMusic[0].audioSrc));
  const [muted, setMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(FavMusic[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [animatePlaylist, setAnimatePlaylist] = useState(true);

  let clickAudio1 = new Audio(SoundClick);
  clickAudio1.volume = 0.5;

  const playClick = () => {
    clickAudio1.play();
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

  const handlePlay = () => {
    setPlaying(true);
    songRef.current.play();
    songRef.current.onended = () => {
      setPlaying(false);  // This will stop the song when it ends
    };
  };

  const handleStop = () => {
    setPlaying(false);
    songRef.current.pause();
    // songRef.current.currentTime = 0;
  };

  const handleMute = () => {
    setMuted(!muted);
    songRef.current.volume = muted ? 1 : 0;
  };

  const handleNext = () => {
    setPlaying(true);
    const nextIndex = (currentTrackIndex + 1) % FavMusic.length;
    setCurrentTrackIndex(nextIndex);
    songRef.current.src = FavMusic[nextIndex].audioSrc;
    songRef.current.play();
    songRef.current.onended = () => {
      setPlaying(false);  // This will stop the song when it ends
    };
    setCurrentTrack(FavMusic[nextIndex]);
  };

  const handlePrevious = () => {
    setPlaying(true);
    const prevIndex =
      (currentTrackIndex - 1 + FavMusic.length) % FavMusic.length;
    setCurrentTrackIndex(prevIndex);
    songRef.current.src = FavMusic[prevIndex].audioSrc;
    songRef.current.play();
    songRef.current.onended = () => {
      setPlaying(false);  // This will stop the song when it ends
    };
    setCurrentTrack(FavMusic[prevIndex]);
  };

  const handleShowPlaylist = () => {
    setShowPlaylist(true);
    setTimeout(() => {
      setAnimatePlaylist(false);
    }, 50);
  };

  const handleClosePlaylist = () => {
    setAnimatePlaylist(true);
    setTimeout(() => {
      setShowPlaylist(false);
    }, 50);
  };

  

  return (
    <div className="">
      <Navbar />
      <h1 className="mt-[80px] max-lg:mt-14 w-full max-w-[1400px] px-12 flex items-center justify-end gap-2 text-sm text-black/40 mx-auto max-lg:hidden ">
        <HiArchiveBox />
        My Toolbox
      </h1>
      {/* Hero Section */}
      <section className="max-lg:mt-16 mb-10 grid grid-cols-2 max-lg:grid-cols-1 gap-5 max-w-[1400px] mx-auto px-5 py-3">
        {/* Who Am I */}
        <div className="w-full h-full p-8 bg-card_bg rnd">
          <h1 className="text-[31px] leading-[39px] font-semibold">
            Who am I?
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
        {/* spotify socials and photos */}
        <div className="w-full h-fit flex max-lg:flex-col gap-5">
          {/* Social & Photos */}
          <div className="w-full h-fit grid grid-cols-1 max-md:grid-cols-1 gap-5">
            {/* Social */}
            <div className="group w-full h-full min-h-[320px] p-6 max-md:p-8 bg-card_bg rnd flex flex-col-reverse gap-2 relative overflow-hidden">
              <Link
                to={"/"}
                className="bg-[#0288d1] w-14 rounded-2xl absolute top-5 right-5 z-20"
              >
                <img
                  src="https://img.icons8.com/color/144/linkedin.png"
                  className=""
                />
              </Link>

              <Link
                to={"/"}
                className="w-full h-[45px] text-lg flex items-center justify-center gap-2 z-20 ring-1 ring-stone-200 rounded-full font-medium hover:bg-white hover:ring-transparent hover:text-black/80 transition duration-300 peer"
              >
                View more posts <LuArrowUpRight className="text-lg" />
              </Link>

              <div className="bg-[#0288d1] w-14 z-10 peer-hover:w-[200%] peer-hover:top-[-50%] peer-hover:right-[-50%] transition-all duration-500 ease-in-out aspect-square rounded-2xl shadow-xl absolute top-5 right-5"></div>

              <div className="w-full flex-1 z-10 peer-hover:text-white text-black/70">
                <div className="flex items-center justify-start gap-2">
                  <div className="h-12 w-12 aspect-square min-w-fit rounded-full overflow-hidden">
                    <img
                      src={img4}
                      className="w-fit h-fit min-h-12 object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col transition duration-500">
                    {/* Change text color to white on hover of the 'peer' link */}
                    <h1 className="font-medium text-lg leading-tight truncate max-w-[80%] ">
                      Kevin K. Mbonimpaye
                    </h1>
                    <h1 className="text-base opacity-50 leading-tight truncate max-w-[80%]">
                      @kanezakevin
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col flex-1 w-full py-5 transition duration-500">
                  <h1 className=" text-[22px] font-Outfit leading-tight break-all">
                    New certificate of Recognition from
                    <span className="text-blue-300">
                      {" "}
                      @AfrikanBabyBookProject
                    </span>
                    , Thank you!
                  </h1>
                </div>
              </div>
            </div>
            {/* Photos */}
            <div className="group w-full h-full bg-card_bg rnd flex flex-col gap-2 relative overflow-hidden">
              <Link
                to={"/"}
                className="bg-white w-14 rounded-2xl shadow-xl absolute top-5 right-5"
              >
                <img
                  src="https://img.icons8.com/color/144/ios-photos.png"
                  className=""
                />
              </Link>
              {/* Images */}
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
              {/* bottom navbar */}
              <div className="w-[84%] h-[50px] rounded-full shadow-lg bg-white/35 backdrop-blur-xl absolute bottom-[-100px] max-lg:bottom-5 group-hover:bottom-5 right-0 left-0 mx-auto transition-all duration-300 ease-in-out flex gap-1 p-[5px]">
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
          {/* Spotify */}
          <div className="w-full h-fit grid grid-cols-1 max-md:grid-cols-1 gap-5">
            {/* Spotify */}
            <div className="group w-full h-full min-h-[320px] p-6 max-md:p-8 bg-card_bg rnd flex flex-col gap-2 relative overflow-hidden">
              {showPlaylist && (
                <div
                  onClick={handleClosePlaylist}
                  className={`absolute top-0 left-0 z-30 bg-black/20 w-full h-full flex transition-all duration-300
                  ${animatePlaylist ? "opacity-0" : "opacity-100"}
                  `}
                ></div>
              )}
              {showPlaylist && (
                <div
                  className={`absolute left-2 right-2 backdrop-blur-md rounded-3xl mx-auto z-30  max-h-[50%] w-auto h-fit p-2 flex flex-col transition-all duration-300 
                ${animatePlaylist ? "bottom-[-300px]" : "bottom-2"}
                ${playing ? 'bg-[#1f1d1dad] text-white' : 'bg-white text-black'}
                `}
                >
                  {FavMusic.map((music, index) => (
                    <div className={`w-full h-[55px] flex items-center justify-start gap-2 py-0 px-3 cursor-pointer rounded-2xl
                    ${playing ? 'hover:bg-stone-100/10' : 'hover:bg-stone-200/60'}
                    `}>
                      <CgMusicNote className="text-2xl opacity-30" />
                      <div className="flex-1 flex flex-col">
                        <h1 className="text-base leading-tight">
                          {music.name}
                        </h1>
                        <h1 className="text-sm truncate opacity-50 leading-tight">
                          {music.singer}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <Link
                to={"/"}
                className="bg-transparent w-14 rounded-2xl absolute top-5 right-5 z-20"
              >
                <img
                  src="https://img.icons8.com/fluency/96/spotify.png"
                  className=""
                />
              </Link>

              <div
                className={`bg-gradient-to-b from-[#817d7a] to-[#292726] z-10 transition-all duration-500 ease-in-out aspect-square rounded-2xl shadow-xl absolute
                ${
                  playing
                    ? "w-[200%] top-[-50%] right-[-50%]"
                    : "w-5 top-9 right-9"
                }
                `}
              ></div>

              <div
                className={`w-full flex-1 z-10 ${
                  playing ? "text-white" : "text-black/70"
                } `}
              >
                <div className="flex items-start justify-start  flex-col gap-4">
                  <img
                    src={currentTrack.poster}
                    className="w-36 rounded-xl shadow-lg h-fit aspect-square  object-cover object-center"
                  />
                  <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col gap-1 transition duration-500">
                      {/* Change text color to white on hover of the 'peer' link */}
                      <h1 className="font-bold text-lg leading-tight truncate ">
                        {currentTrack.name}
                      </h1>
                      <h1 className="text-base font-medium opacity-60 leading-tight truncate ">
                        {currentTrack.singer}
                      </h1>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <IoHeadsetOutline className="text-2xl cursor-pointer hover:scale-105 transition duration-300" />
                      <LuPlusCircle className="text-2xl cursor-pointer hover:scale-105 transition duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`w-full h-[45px] text-lg flex items-center justify-around gap-1 p-2 z-20 ring-1 rounded-full font-medium transition duration-300 ${
                  playing
                    ? "bg-[#29272675] ring-black/20 text-white"
                    : "ring-stone-200"
                }`}
              >
                <button
                  onClick={handleShowPlaylist}
                  className="w-fit flex items-center justify-center text-xl"
                >
                  <PiPlaylistDuotone />
                </button>
                <button
                  onClick={handlePrevious}
                  className="w-fit flex items-center justify-center text-xl"
                >
                  <GiPreviousButton />
                </button>
                {playing ? (
                  <button
                    onClick={handleStop}
                    className="w-fit flex items-center justify-center text-xl"
                  >
                    <GiPauseButton />
                  </button>
                ) : (
                  <button
                    onClick={handlePlay}
                    className="w-fit flex items-center justify-center text-xl"
                  >
                    <GiPlayButton />
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="w-fit flex items-center justify-center text-xl"
                >
                  <GiNextButton />
                </button>
                <button
                  onClick={handleMute}
                  className="w-fit flex items-center justify-center text-xl"
                >
                  {muted ? <LuVolumeX /> : <LuVolume2 />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
