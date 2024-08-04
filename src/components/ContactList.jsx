import { Link } from "react-router-dom";
import { deleteContact, fetchContacts } from "../api/contacts";
import ContactListItem from "./ContactListItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useDeleteContact = (queryKey) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContact,
    onMutate: async (contactId) => {
      await queryClient.cancelQueries({ queryKey: [queryKey[0]] });
      const previousContacts = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        // @ts-ignore
        const resources = old.resources.filter(
          (contact) => contact.id !== contactId,
        );

        // @ts-ignore
        return { ...old, resources };
      });

      return { previousContacts };
    },
    onError: (_err, _contactId, context) => {
      queryClient.setQueryData(queryKey, context.previousContacts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey[0]] });
    },
  });
};

export default function ContactList() {
  const queryKey = ["contactsList", { sort: "created:desc" }];

  const { isPending, error, data, isFetching } = useQuery({
    queryKey,
    queryFn: fetchContacts,
  });
  const { mutate: deleteContactsListItem } = useDeleteContact(queryKey);

  const deleteItem = (contactId) => {
    deleteContactsListItem(contactId);
  };

  console.log({ isPending, error, data, isFetching });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const contacts = data.resources;
  return (
    <div className="ContactList">
      <h2 className="mb-9 pt-6 text-3xl dark:text-slate-200">Contacts</h2>

      <div className="flex flex-col gap-6 pb-5">
        {contacts.map((contact) => (
          <div key={contact.id} className="relative">
            <Link to={`contacts/${contact.id}`}>
              <ContactListItem contactData={contact} />
            </Link>
            <div
              className="absolute right-2.5 top-1 cursor-pointer"
              onMouseDown={() => deleteItem(contact.id)}
            >
              <span className="material-icons md-dark text text-lg hover:text-red-500 dark:text-slate-300 hover:dark:text-red-300">
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
