import { useState } from "react";
import TaskColored from "../assets/icons/chrome_reader_mode_colored.svg";
import Lightning from "../assets/icons/cloud-lightning.svg";
import InboxColored from "../assets/icons/question_answer_colored.svg";

const QuicksNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-row-reverse items-center gap-5 md:gap-8">
      <button className="h-68 w-68 relative z-50 grid place-items-center rounded-full bg-primary-blue">
        <img src={Lightning} alt="Quicks" />
      </button>

      <div>
        {/* <p className="mb-2 text-center text-white">Inbox</p> */}

        <button className="relative grid h-60 w-60 translate-x-20 place-items-center rounded-full bg-[#f2f2f2] md:translate-x-24">
          <img src={InboxColored} alt="Inbox" />
        </button>
      </div>

      <div>
        {/* <p className="mb-2 text-center text-white">Task</p> */}

        <button className="relative grid h-60 w-60 translate-x-40 place-items-center rounded-full bg-[#f2f2f2] md:translate-x-48">
          <img src={TaskColored} alt="Task" />
        </button>
      </div>
    </div>
  );
};

export default QuicksNav;
