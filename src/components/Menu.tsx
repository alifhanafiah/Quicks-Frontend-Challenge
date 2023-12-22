import { useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";

type MenuProps = {
  isInbox: boolean;
  isTask: boolean;
};

const Menu = ({ isInbox, isTask }: MenuProps) => {
  const [isLoading] = useState<boolean>(true);

  return (
    <div className="absolute bottom-28 right-6 h-[40rem] w-10/12 rounded-[6px] border border-[#828282] bg-white px-8 py-7 md:h-[46.0625rem] lg:w-[45.875rem]">
      {isInbox ? <SearchBar /> : isTask ? "this is task" : null}

      <div className="h-full pt-6">
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
