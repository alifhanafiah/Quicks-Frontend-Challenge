import { useState } from "react";
import TaskColored from "../assets/icons/chrome_reader_mode_colored.svg";
import Lightning from "../assets/icons/cloud-lightning.svg";
import InboxWhite from "../assets/icons/question_answer.svg";
import InboxColored from "../assets/icons/question_answer_colored.svg";
import Menu from "./Menu";

const FABWithMenu = () => {
  const [showText, setShowText] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
    setShowText((prev) => !prev);
  };

  const showInboxHandler = () => {
    setShowInbox((prev) => !prev);
    setShowText((prev) => !prev);
  };

  return (
    <>
      {showInbox ? <Menu /> : null}

      <div className="fixed bottom-6 right-6 flex flex-row-reverse items-center gap-5 md:gap-8">
        <button
          onClick={showNavHandler}
          className={`relative z-40 grid h-68 w-68 place-items-center rounded-full 
          ${
            showInbox ? "-translate-x-5 bg-primary-gray-400" : "bg-primary-blue"
          }`}
          disabled={showInbox}
        >
          <img src={Lightning} alt="Quicks" />
        </button>

        <div className="relative" onClick={showInboxHandler}>
          <p
            className={`absolute bottom-9 right-2 text-white transition-opacity md:right-2
            ${showText ? "opacity-100" : "opacity-0"}`}
          >
            Inbox
          </p>
          <button
            // make the styling from shownav gone when showinbox is true
            // TODO Refactor the variable styling
            className={`absolute -bottom-1/2 grid translate-y-1/2 place-items-center rounded-full transition-transform 
            ${
              showInbox
                ? "z-50 h-68 w-68 translate-x-5 bg-indicator-purple md:translate-x-8"
                : `h-60 w-60 bg-[#f2f2f2]
                ${
                  showNav
                    ? "-translate-x-14"
                    : "translate-x-7 md:translate-x-10"
                }`
            }`}
          >
            <img src={showInbox ? InboxWhite : InboxColored} alt="Inbox" />
          </button>
        </div>

        <div className="relative">
          <p
            className={`absolute bottom-9 right-[4.25rem] text-white transition-opacity md:right-[4.5rem]
            ${showText ? "opacity-100" : "opacity-0"}`}
          >
            Task
          </p>
          <button
            // TODO Refactor the variable styling
            className={`absolute -bottom-1/2 grid h-60 w-60 translate-y-1/2 place-items-center rounded-full bg-[#f2f2f2] transition-transform
            ${
              showInbox
                ? "-translate-x-14 md:-translate-x-11"
                : showNav
                  ? "-translate-x-28"
                  : "translate-x-10 md:translate-x-16"
            }`}
          >
            <img src={TaskColored} alt="Task" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FABWithMenu;
