import ContactListItem from "./ContactListItem";
import { contacts } from "../data";

export default function ContactList() {
  return (
    <div className="ContactList text-3xl">
      <h2 className="mb-5 pt-6 text-3xl">Contacts</h2>
      <div className="flex flex-col gap-6 pb-5">
        {contacts.map((item, index) => (
          <ContactListItem key={index} contactData={item} />
        ))}
      </div>
    </div>
  );
}
