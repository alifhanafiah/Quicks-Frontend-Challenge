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
          className="relative z-50 grid h-68 w-68 place-items-center rounded-full bg-primary-blue"
          disabled={showInbox}
        >
          <img src={Lightning} alt="Quicks" />
        </button>

        <div className="relative" onClick={showInboxHandler}>
          <p
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white transition-opacity
            ${showText ? "opacity-100" : "opacity-0"}`}
          >
            Inbox
          </p>

          <button
            className={`relative grid place-items-center rounded-full transition-transform 
            ${showNav ? "translate-x-0" : "translate-x-20 md:translate-x-24"}
            ${
              showInbox
                ? "bg-indicator-purple h-68 w-68"
                : "h-60 w-60 bg-[#f2f2f2]"
            }`}
          >
            <img src={showInbox ? InboxWhite : InboxColored} alt="Inbox" />
          </button>
        </div>

        <div className="relative">
          <p
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white transition-opacity
            ${showText ? "opacity-100" : "opacity-0"}`}
          >
            Task
          </p>

          <button
            className={`relative grid h-60 w-60 place-items-center rounded-full bg-[#f2f2f2] transition-transform
            ${showNav ? "translate-x-0" : "translate-x-40 md:translate-x-48"}`}
          >
            <img src={TaskColored} alt="Task" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FABWithMenu;
