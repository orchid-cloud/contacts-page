import { useParams } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import { useQuery } from "@tanstack/react-query";
import { fetchContact } from "../api/contacts";

export const queryKey = (contactId) => ["contactDetails", contactId];

export default function ContactPage() {
  const { contactId } = useParams();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: queryKey(contactId),
    queryFn: fetchContact,
  });
  console.log({ isPending, error, data, isFetching });

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mx-5 mt-16 flex flex-col gap-8 overflow-hidden sm:mx-16 md:mx-20 md:flex-row md:items-start lg:mx-40 2xl:mx-auto 2xl:max-w-screen-xl">
      {error ? (
        <div className="m-auto flex min-w-[300px] max-w-xl grow flex-col items-center gap-9 overflow-hidden p-2.5">
          {"An error has occurred: " + error.message}
        </div>
      ) : isPending ? (
        <div className="m-auto flex min-w-[300px] max-w-xl grow flex-col items-center gap-9 overflow-hidden p-2.5">
          Loading..
        </div>
      ) : data.resources[0] ? (
        <ContactCard contact={data.resources[0]} />
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}
