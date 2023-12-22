import { useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import TaskBar from "./TaskBar";

type MenuProps = {
  isInbox: boolean;
  isTask: boolean;
};

const Menu = ({ isInbox, isTask }: MenuProps) => {
  const [isLoading] = useState<boolean>(true);

  return (
    <div className="absolute bottom-28 right-6 h-[36rem] w-10/12 rounded-[0.3125rem] border border-[#828282] bg-white px-8 py-7 md:h-[46.0625rem] lg:w-[45.875rem]">
      {isInbox ? <SearchBar /> : isTask ? <TaskBar /> : null}

      <div className="h-full pt-[1.375rem]">
        {isLoading ? (
          <Loading
            content={
              isInbox
                ? "Loading Chats ..."
                : isTask
                  ? "Loading Task List ..."
                  : null
            }
          />
        ) : (
          <p>halo, ini adalah content</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
