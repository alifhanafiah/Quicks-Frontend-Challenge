import { Inbox } from "../types";

type InboxPreviewProps = {
  inbox: Inbox;
};

const InboxPreview = ({ inbox }: InboxPreviewProps) => {
  return <div>{inbox.text}</div>;
};

export default InboxPreview;
