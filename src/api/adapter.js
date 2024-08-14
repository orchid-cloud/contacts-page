import { deleteContact, fetchContacts } from "../api/contacts";
import { fetchContactsData } from "../data/contacts-data";

const api = false;

export const fetchAdapterContacts = (args) => {
  if (api) return fetchContacts(args);

  return fetchContactsData();
};

export const deleteAdapterContact = (args) => {
  return deleteContact(args);
};
