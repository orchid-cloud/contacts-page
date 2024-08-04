import { Link } from "react-router-dom";
// import { contacts } from "../data";
import { fetchContacts } from "../api/contacts";
import ContactListItem from "./ContactListItem";
import { useQuery } from "@tanstack/react-query";

export default function ContactList() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["contactsList"],
    queryFn: fetchContacts,
  });
  console.log({ isPending, error, data, isFetching });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const contacts = data.resources;
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
