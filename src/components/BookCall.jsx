import React, { useEffect, useState } from "react";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import pfp from "../assets/me/pfp.jpeg";

function BookCall({ handleBookCancel }) {
  const [time, setTime] = useState("");
  const [app, setApp] = useState("");
  const [subject, setSubject] = useState(``);
  const [message, setMessage] = useState(``);
  const [visitorNames, setVisitorNames] = useState("");

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

  const label = `flex items-center w-full h-[45px] select-none gap-3 font-medium ring-1 rounded-2xl ring-stone-200 cursor-pointer dark:ring-stone-700 p-4 peer-checked:ring-main-color dark:peer-checked:ring-text-white`;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex z-30 items-center justify-center">
      <div
        onClick={handleBookCancel}
        className="fixed top-0 left-0 w-full h-full bg-black/30 flex z-0"
      ></div>
      <div className="bg-light-body dark:bg-text-black text-text-black dark:text-text-white w-[90%] h-fit max-h-[90%] max-w-[900px] z-10 rounded-3xl shadow-xl grid grid-cols-2 overflow-y-auto overflow-x-hidden p-6">
        <div className="w-full flex flex-col items-start justify-start text-left gap-3">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={400}
            cascade
            damping={0.1}
            className="w-full"
          >
            <h1 className="w-fit text-lg font-medium ">Request a quick call</h1>
            {/* time */}
            <div className="flex flex-col w-full gap-3 rounded-2xl p-2">
              <h1 className="text-sm opacity-75">
                1. Provide your name <span className="text-red-500">*</span>
              </h1>
              <input
                type="text"
                value={visitorNames}
                placeholder="~ Your Name ~"
                onChange={(e) => setVisitorNames(e.target.value)}
                className="accent-main-color dark:accent-text-white peer bg-stone-200/70 dark:bg-stone-600/30 rounded-xl outline-none text-sm py-3 px-4 font-medium "
              />
              <h1 className="text-sm opacity-75">
                2. Select the best time for the meeting
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
              <h1 className="text-sm opacity-75">
                3. Select the app you'd like to use for the meeting
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
            </div>
          </Reveal>
        </div>
        <div className="w-full flex flex-col items-start justify-start text-left gap-3">
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
              <h1 className="text-sm font-medium opacity-75">
                4. Subject (Fell free to modify)
              </h1>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="accent-main-color dark:accent-text-white peer bg-stone-200/70 dark:bg-stone-600/30 rounded-xl outline-none text-sm py-3 px-4 "
              />
              <h1 className="text-sm opacity-75 mt-3">
                5. Message/body (add your name or modify everything)
              </h1>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                tabIndex="0"
                cols="20"
                rows="5"
                wrap="hard"
                maxlength="150"
                className="accent-main-color dark:accent-text-white peer bg-stone-200/70 dark:bg-stone-600/30 rounded-xl outline-none text-sm py-3 px-4 resize-none h-[170px] max-h-[170px] overscroll-contain "
              ></textarea>
              <a href={`mailto:mbonimpayekevin@gmail.com?subject=${subject}&body=${message}`}>
                Send Email
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default BookCall;
