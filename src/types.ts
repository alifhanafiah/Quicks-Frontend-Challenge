export type Inbox = {
  id: number;
  text: string;
  owner: {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
  };
};
