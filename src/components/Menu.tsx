import { useQuery } from "@tanstack/react-query";
import { fetchInbox } from "../api/queries";
import { Inbox } from "../types";
import InboxPreview from "./InboxPreview";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import TaskBar from "./TaskBar";

type MenuProps = {
  isInbox: boolean;
  isTask: boolean;
};

const Menu = ({ isInbox, isTask }: MenuProps) => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["inbox-pre"],
    queryFn: fetchInbox,
  });

  if (isError) <span>{error.message}</span>;

  return (
    <div className="absolute bottom-28 right-6 h-[36rem] w-10/12 rounded-[0.3125rem] border border-[#828282] bg-white px-8 py-7 md:h-[46.0625rem] lg:w-[45.875rem]">
      {isInbox ? <SearchBar /> : isTask ? <TaskBar /> : null}

      <div className="h-full pt-[1.375rem]">
        {/* checking at what nav */}
        {!isPending && isInbox ? (
          data.data.map((inbox: Inbox) => (
            <InboxPreview key={inbox.id} inbox={inbox} />
          ))
        ) : !isPending && isTask ? (
          <p>content for task is here</p>
        ) : isPending ? (
          <Loading
            content={
              isInbox
                ? "Loading Chats ..."
                : isTask
                  ? "Loading Task List ..."
                  : null
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
