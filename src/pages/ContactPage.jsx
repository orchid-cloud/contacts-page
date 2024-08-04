import { useParams } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import { useQuery } from "@tanstack/react-query";
import { fetchContact } from "../api/contacts";

export default function ContactPage() {
  const { contactId } = useParams();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["contactDetails", contactId],
    queryFn: fetchContact,
  });
  console.log({ isPending, error, data, isFetching });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const contact = data.resources[0];

  return (
    <div className="mx-5 mt-16 flex flex-col gap-8 sm:mx-16 md:mx-20 md:flex-row md:items-start lg:mx-40 2xl:mx-auto 2xl:max-w-screen-xl">
      <ContactCard contact={contact} />
    </div>
  );
}
