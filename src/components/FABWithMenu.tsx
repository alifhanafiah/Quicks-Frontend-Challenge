import { useState } from "react";
import TaskColored from "../assets/icons/chrome_reader_mode_colored.svg";
import Lightning from "../assets/icons/cloud-lightning.svg";
import InboxColored from "../assets/icons/question_answer_colored.svg";
import Menu from "./Menu";

const FABWithMenu = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Menu />

      <div className="fixed bottom-6 right-6 flex flex-row-reverse items-center gap-5 md:gap-8">
        <button
          onClick={() => {
            setShowNav((prev) => !prev);
          }}
          className="relative z-50 grid h-68 w-68 place-items-center rounded-full bg-primary-blue"
        >
          <img src={Lightning} alt="Quicks" />
        </button>

        <div className="relative">
          <p
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white transition-opacity ${
              showNav ? "opacity-0" : "opacity-100"
            }`}
          >
            Inbox
          </p>

          <button
            className={`relative grid h-60 w-60 place-items-center rounded-full bg-[#f2f2f2] transition-transform ${
              showNav ? "translate-x-20 md:translate-x-24" : "translate-x-0"
            }`}
          >
            <img src={InboxColored} alt="Inbox" />
          </button>
        </div>

        <div className="relative">
          <p
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white transition-opacity ${
              showNav ? "opacity-0" : "opacity-100"
            }`}
          >
            Task
          </p>

          <button
            className={`relative grid h-60 w-60 place-items-center rounded-full bg-[#f2f2f2] transition-transform ${
              showNav ? "translate-x-40 md:translate-x-48" : "translate-x-0"
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
