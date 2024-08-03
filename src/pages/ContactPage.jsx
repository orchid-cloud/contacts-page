import { useParams } from "react-router-dom";
import { contacts } from "../data";
import ContactCard from "../components/ContactCard";

export default function ContactPage() {
  const { contactId } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(contactId));

  return (
    <div className="mx-5 mt-16 flex flex-col gap-8 sm:mx-16 md:mx-20 md:flex-row md:items-start lg:mx-40 2xl:mx-auto 2xl:max-w-screen-xl">
      <ContactCard contact={contact} />
    </div>
  );
}
