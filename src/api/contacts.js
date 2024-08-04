const headers = () => {
  // @ts-ignore
  const token = import.meta.env.VITE_DEVNIMBLE_API_TOKEN;

  return {
    Authorization: `Bearer ${token}`,
    "X-Requested-With": "XMLHttpRequest",
  };
};

export const fetchContacts = async (_a, params = { sort: "created:desc" }) => {
  const queryParams = new URLSearchParams(params).toString();
  const url = `/api/v1/contacts?${queryParams}`;
  console.log({ queryParams, url });

  const response = await fetch(url, {
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};
