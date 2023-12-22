export const fetchInbox = async () => {
  const data = await fetch("https://dummyapi.io/data/v1/post", {
    headers: {
      "app-id": "65858f07d2341c3cd9c82b8c",
    },
  });

  const result = data.json();

  return result;
};
