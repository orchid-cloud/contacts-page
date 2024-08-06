import { Link } from "react-router-dom";
import { deleteContact, fetchContacts } from "../api/contacts";
import ContactListItem from "./ContactListItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteButton from "./DeleteButton";

const useDeleteContact = (queryKey) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContact,
    // @ts-ignore
    onMutate: async ({ contactId, callback }) => {
      await queryClient.cancelQueries({ queryKey: [queryKey[0]] });
      const previousContacts = queryClient.getQueryData(queryKey);

      callback();
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

export const queryKey = ["contactsList", { sort: "created:desc" }];

export default function ContactList() {
  const { isPending, error, data } = useQuery({
    queryKey,
    queryFn: fetchContacts,
  });
  const { mutate: deleteContactsListItem } = useDeleteContact(queryKey);

  const deleteItem = (contactId, callback) => {
    // @ts-ignore
    deleteContactsListItem({ contactId, callback });
  };

  return (
    <div className="ContactList">
      <h2 className="mb-9 pt-6 text-3xl dark:text-slate-200">Contacts</h2>

      {error ? (
        <div className="flex flex-col gap-6 pb-5">
          {"An error has occurred: " + error.message}
        </div>
      ) : isPending ? (
        <div className="dark:text-slate-200">Loading...</div>
      ) : (
        <div className="flex flex-col gap-6 pb-5">
          {data.resources.map((contact) => (
            <div key={contact.id} className="relative">
              <Link to={`contacts/${contact.id}`}>
                <ContactListItem contactData={contact} />
              </Link>
              <DeleteButton
                action={(callback) => deleteItem(contact.id, callback)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
