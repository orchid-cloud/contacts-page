import { Link } from "react-router-dom";
import { contacts } from "../data";
import ContactListItem from "./ContactListItem";

export default function ContactList() {
  return (
    <div className="ContactList text-3xl">
      <h2 className="mb-5 pt-6 text-3xl">Contacts</h2>

      <div className="flex flex-col gap-6 pb-5">
        {contacts.map((contact) => (
          <Link key={contact.id} to={`contacts/${contact.id}`}>
            <ContactListItem contactData={contact} />
          </Link>
        ))}
      </div>
    </div>
  );
}
