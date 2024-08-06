const headers = () => {
  // @ts-ignore
  const token = import.meta.env.VITE_DEVNIMBLE_API_TOKEN;

  return {
    Authorization: `Bearer ${token}`,
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  };
};

export const fetchContacts = async ({ queryKey, signal }) => {
  const [, sort] = queryKey;
  const queryParams = new URLSearchParams(sort).toString();
  const url = `/api/v1/contacts?${queryParams}`;

  const response = await fetch(url, {
    headers: headers(),
    signal,
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

export const deleteContact = async (contactId) => {
  const url = `/api/v1/contact/${contactId}`;

  const response = await fetch(url, {
    headers: headers(),
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};

export const createContact = async (contactData) => {
  const url = "/api/v1/contact";

  const response = await fetch(url, {
    headers: headers(),
    method: "POST",
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};

export const simulateApiFailure = async () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Simulated API failure after 2 seconds"));
    }, 2000); // 2000 milliseconds = 2 seconds
  });
};
