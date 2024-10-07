import React, { useEffect, useState } from "react";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import pfp from "../assets/me/pfp.jpeg";
import { LuCheck, LuSendHorizonal, LuX } from "react-icons/lu";
import { animate } from "framer-motion";
import { PiCheckCircleDuotone, PiCheckCircleLight } from "react-icons/pi";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { BsEnvelopeCheckFill } from "react-icons/bs";

function BookCall({ handleBookCancel }) {
  const [time, setTime] = useState("");
  const [app, setApp] = useState("");
  const [subject, setSubject] = useState(``);
  const [message, setMessage] = useState(``);
  const [visitorNames, setVisitorNames] = useState("");
  const [filled, setFilled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    setMessage(`Hello Kevin,

I would like to request a call ${time === "" ? "[Chosen Time]" : time} via ${
      app === "" ? "[App]" : app
    }.

Best regards,
${visitorNames === "" ? "~ Your Name ~" : visitorNames}`);
    setSubject(
      `${
        visitorNames === "" ? "~Your Name~" : visitorNames
      } Proposed Meeting Time`
    );
  }, [time, app, visitorNames]);

  const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateX(40px);
      filter: blur(4px)
    }
  
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        handleQuit();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleQuit = () => {
    setAnimate(false);
    setTimeout(() => {
      handleBookCancel();
      setGenerating(false)
    }, 500);
  };

  const label = `flex items-center w-full h-[45px] select-none gap-3 font-medium ring-1 rounded-2xl ring-stone-200 cursor-pointer dark:ring-stone-700 p-4 peer-checked:ring-main-color dark:peer-checked:ring-text-white`;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex z-30 items-center justify-center overscroll-contain">
      <div
        onClick={handleQuit}
        className={`fixed top-0 left-0 w-full h-full bg-black/30 dark:bg-black/60 flex z-0 backdrop-blur-sm transition duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div className="w-fit h-fit">
      {!generating ? (
        <div
          className={`bg-white dark:bg-[#181818] z-10 absolute top-0 left-0 bottom-0 right-0 m-auto w-fit h-[680px] max-md:h-full max-h-[90%] max-w-[900px] max-md:max-w-[90%] rounded-3xl shadow-xl p-3 ring-2 ring-stone-100 dark:ring-[#191919] transition duration-300 ${
            animate ? "opacity-100" : "opacity-0 scale-75 blur-xl"
          }`}
        >
          <div className=" text-text-black dark:text-text-white w-full h-full grid grid-cols-2 gap-6 max-lg:grid-cols-1 overflow-y-auto custom-scrollbar overflow-x-hidden p-5">
            <div className="w-full flex flex-col items-start justify-start text-left gap-3">
              <Reveal
                keyframes={customAnimation}
                triggerOnce
                duration={400}
                cascade
                damping={0.1}
                className="w-full"
              >
                <h1 className="w-fit text-lg font-medium ">
                  Request a quick call
                </h1>
                {/* time */}
                <div className="flex flex-col w-full gap-3 rounded-2xl p-2">
                  <h1 className="text-sm font-medium">
                    1. Provide your name <span className="text-red-500">*</span>
                  </h1>
                  <input
                    type="text"
                    autoFocus
                    value={visitorNames}
                    onChange={(e) => setVisitorNames(e.target.value)}
                    className="accent-main-color dark:accent-text-white peer bg-stone-200/70 dark:bg-stone-600/30 rounded-xl outline-none text-sm py-3 px-4 font-medium "
                  />
                  <h1 className="text-sm font-medium">
                    2. Select the best time for the meeting{" "}
                    <span className="text-red-500">*</span>
                  </h1>
                  <label
                    className={`${label} ${
                      time === "Tomorrow at 10:00 AM" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      time !== "" &&
                      time !== "Tomorrow at 10:00 AM" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={"Tomorrow at 10:00 AM"}
                      onChange={(e) => setTime(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <p className="text-sm">Tomorrow at 10:00 AM</p>
                  </label>
                  <label
                    className={`${label} ${
                      time === "In 2 days at 2:00 PM" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      time !== "" &&
                      time !== "In 2 days at 2:00 PM" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={"In 2 days at 2:00 PM"}
                      onChange={(e) => setTime(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <p className="text-sm">In 2 days at 2:00 PM</p>
                  </label>
                  <label
                    className={`${label} ${
                      time === "Next Monday at 9:30 AM" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      time !== "" &&
                      time !== "Next Monday at 9:30 AM" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={"Next Monday at 9:30 AM"}
                      onChange={(e) => setTime(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <p className="text-sm">Next Monday at 9:30 AM</p>
                  </label>
                </div>
                {/* app */}
                <div className="flex flex-col w-full gap-3 rounded-2xl p-2">
                  <h1 className="text-sm font-medium">
                    3. Select the app you'd like to use for the meeting{" "}
                    <span className="text-red-500">*</span>
                  </h1>
                  <label
                    className={`${label} ${
                      app === "Google Meet" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      app !== "" &&
                      app !== "Google Meet" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="app"
                      value={"Google Meet"}
                      onChange={(e) => setApp(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <img
                      src="https://img.icons8.com/fluency/48/google-meet.png"
                      className="h-7"
                    />
                    <p className="text-sm">Google Meet</p>
                  </label>
                  <label
                    className={`${label} ${
                      app === "Zoom" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      app !== "" &&
                      app !== "Zoom" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="app"
                      value={"Zoom"}
                      onChange={(e) => setApp(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <img
                      src="https://img.icons8.com/color/48/zoom.png"
                      className="h-7"
                    />
                    <p className="text-sm">Zoom</p>
                  </label>
                  <label
                    className={`${label} ${
                      app === "Discord" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      app !== "" &&
                      app !== "Discord" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="app"
                      value={"Discord"}
                      onChange={(e) => setApp(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <img
                      src="https://img.icons8.com/color/48/discord--v2.png"
                      className="h-7"
                    />
                    <p className="text-sm">Discord</p>
                  </label>
                  <label
                    className={`${label} ${
                      app === "FaceTime" &&
                      "ring-offset-1 ring-offset-transparent ring-main-color/60 dark:ring-text-white/50 bg-stone-100 dark:bg-stone-700/40"
                    } ${
                      app !== "" &&
                      app !== "FaceTime" &&
                      "opacity-70 dark:opacity-50 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="app"
                      value={"FaceTime"}
                      onChange={(e) => setApp(e.target.value)}
                      className="accent-main-color dark:accent-text-white peer "
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/FaceTime_iOS.svg/768px-FaceTime_iOS.svg.png"
                      className="h-7"
                    />
                    <p className="text-sm">FaceTime</p>
                  </label>
                </div>
              </Reveal>
            </div>
            <div className="w-full flex flex-col items-start justify-start text-left gap-3 max-lg:mt-5">
              <Reveal
                keyframes={customAnimation}
                triggerOnce
                duration={400}
                cascade
                damping={0.1}
                className="w-full"
              >
                <h1 className="w-fit text-lg font-medium ">Details</h1>
                {/* time */}
                <div className="flex flex-col w-full gap-3 rounded-2xl p-2">
                  <h1 className="text-sm flex items-center gap-1">
                    From:
                    <div className="w-6 h-6 min-w-6 ml-2 bg-blue-700 text-white dark:text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                      You
                    </div>
                    You
                  </h1>
                  <h1 className="text-sm flex items-center gap-1">
                    To:
                    <div className="ml-2 w-fit h-fit flex items-center justify-start bg-stone-200/70 dark:bg-stone-600/30 rounded-full p-1">
                      <div className="w-6 h-6 min-w-6 flex items-center justify-center rounded-full">
                        <img src={pfp} className="w-full h-full rounded-full" />
                      </div>
                      <span className="text-sm px-2">
                        mbonimpayekevin@gmail.com
                      </span>
                    </div>
                  </h1>
                </div>
                {/* app */}
                <div className="flex flex-col w-full gap-3 rounded-2xl p-2">
                  <h1 className="text-sm font-medium ">
                    4. Subject (Fell free to modify)
                  </h1>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="accent-main-color dark:accent-text-white bg-stone-200/70 dark:bg-stone-600/30 rounded-xl outline-none text-sm py-3 px-4 "
                  />
                  <h1 className="text-sm font-medium mt-3">
                    5. Message/body (add your name or modify everything)
                  </h1>
                  <div className="w-full h-[170px] z-10">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      tabIndex={0}
                      className="bg-stone-200/70 dark:bg-stone-600/30 rounded-xl outline-none text-sm py-3 px-4 resize-none h-full w-full overscroll-contain z-10 "
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between gap-2 py-2 opacity-75">
                    <h1 className="text-xs font-medium flex gap-1 items-center justify-start ">
                      {visitorNames === "" ? (
                        <LuX className="text-xl" />
                      ) : (
                        <LuCheck className="text-xl text-green-600" />
                      )}
                      Names provided
                    </h1>
                    <h1 className="text-xs font-medium flex gap-1 items-center justify-start ">
                      {time === "" ? (
                        <LuX className="text-xl" />
                      ) : (
                        <LuCheck className="text-xl text-green-600" />
                      )}
                      Time selected
                    </h1>
                    <h1 className="text-xs font-medium flex gap-1 items-center justify-start ">
                      {app === "" ? (
                        <LuX className="text-xl" />
                      ) : (
                        <LuCheck className="text-xl text-green-600" />
                      )}
                      App selected
                    </h1>
                  </div>
                  <a
                    href={`${
                      visitorNames === ""
                        ? "#"
                        : `mailto:mbonimpayekevin@gmail.com?subject=${subject}&body=${message}`
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setGenerating(true)
                    }}
                    className={`w-full h-[45px] bg-dark-body dark:bg-white text-text-white dark:text-text-black transition active:scale-[.98] font-semibold flex items-center justify-center gap-2 rounded-2xl text-sm 
                    ${
                      visitorNames !== "" && time !== "" && app !== ""
                        ? ""
                        : "opacity-70 cursor-not-allowed"
                    }
                    `}
                  >
                    Create Request
                    <LuSendHorizonal className="text-lg" />
                  </a>
                  <button
                    onClick={handleQuit}
                    className={`w-full h-[45px] bg-stone-200 dark:bg-stone-600/60 text-text-black dark:text-white transition active:scale-[.98] font-semibold hidden max-lg:flex items-center justify-center gap-2 rounded-2xl text-sm `}
                  >
                    Cancel
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`bg-white dark:bg-[#181818] z-10 absolute top-0 left-0 bottom-0 right-0 m-auto w-[220px] h-fit text-center flex flex-col items-center justify-between text-text-black dark:text-text-white  max-md:max-w-[90%] rounded-3xl shadow-xl p-4 ring-2 ring-stone-100 dark:ring-[#191919] transition duration-300 ${
            animate ? "opacity-100" : "opacity-0 scale-75 blur-xl"
          }`}
        >
          <div className="flex flex-col flex-1 items-center justify-center mb-4">
          <BsEnvelopeCheckFill className="text-[60px] opacity-20" />
          <h1 className="font-medium text-base px">Request Generated</h1>
          </div>
          <button
            onClick={handleQuit}
            className={`w-full h-[45px] bg-text-black dark:bg-text-white text-text-white dark:text-text-black transition active:scale-[.98] font-semibold items-center justify-center gap-2 rounded-2xl text-sm `}
          >
            Close
          </button>
        </div>
      )}
      </div>
    </div>
  );
}

export default BookCall;
