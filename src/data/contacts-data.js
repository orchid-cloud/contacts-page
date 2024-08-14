// @ts-ignore
import data from "./data.json" assert { type: "json" };

export const fetchContactsData = async () => {
  const { resources } = data;

  const contactsData = resources.sort((a, b) =>
    a.created < b.created ? 1 : -1,
  );
  console.log(contactsData);
  return new Promise((resolve) => {
    resolve({ ...data, resources: contactsData });
  });
};
