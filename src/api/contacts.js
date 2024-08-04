const headers = () => {
  // @ts-ignore
  const token = import.meta.env.VITE_DEVNIMBLE_API_TOKEN;

  return {
    Authorization: `Bearer ${token}`,
    "X-Requested-With": "XMLHttpRequest",
  };
};

export const fetchContacts = async ({ queryKey }) => {
  const [, sort] = queryKey;
  const queryParams = new URLSearchParams(sort).toString();
  const url = `/api/v1/contacts?${queryParams}`;

  const response = await fetch(url, {
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};

export const fetchContact = async ({ queryKey }) => {
  const [, contactId] = queryKey;
  const url = `/api/v1/contact/${contactId}`;

  const response = await fetch(url, {
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};
