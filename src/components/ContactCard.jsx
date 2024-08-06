import PropTypes from "prop-types";
import { getContactFieldValue } from "../utils/contacts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addContactTag } from "../api/contacts";
import TextInput from "./forms/TextInput";
import Submit from "./forms/Submit";
import { queryKey } from "../pages/ContactPage";

const useCreateTags = (queryKey) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addContactTag,
    onMutate: async ({ tags }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });
      const previousContacts = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        const details = {
          // @ts-ignore
          ...previousContacts.resources[0],
          tags2: tags,
        };
        // @ts-ignore
        return { ...old, resources: [details] };
      });

      return { previousContacts };
    },
    onError: (_err, _contactData, context) => {
      queryClient.setQueryData(queryKey, context.previousContacts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });
};

export default function ContactCard(props) {
  const { mutate, isPending, isError } = useCreateTags(
    queryKey(props.contact.id),
  );

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const currentTags = props.contact.tags.map((tagItem) => tagItem.tag);

    const newTags = form.tags.value.split(",").map((e) => e.trim());

    const tags = Array.from(new Set(currentTags.concat(newTags)));

    mutate(
      { contactId: props.contact.id, tags },
      {
        onSuccess: () => {
          form.reset();
        },
      },
    );
  };

  return (
    <div className="ContactCard m-auto flex min-w-[300px] max-w-xl grow flex-col gap-9 overflow-hidden p-2.5">
      <div className="flex gap-4">
        <div className="min-w-14">
          <img
            className="h-14 w-14 rounded-full"
            src={props.contact.avatar_url}
            alt="user icon"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row flex-wrap gap-1">
            <span className="text-xl font-medium text-gray-900 dark:text-white">
              {getContactFieldValue(props.contact.fields, "first name")}
            </span>
            <span className="text-xl font-medium text-gray-900 dark:text-white">
              {getContactFieldValue(props.contact.fields, "last name")}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {getContactFieldValue(props.contact.fields, "email")}
          </p>
        </div>
      </div>
      {props.contact.tags2.length > 0 && (
        <div>
          <h3 className="mb-3 dark:text-white">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {props.contact.tags2.map((tag, index) => (
              <span
                className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <TextInput
            name="tags"
            placeholder="Add new tags"
            isPending={isPending}
          />
        </div>
        <div className="mb-4">
          <Submit value="Add Tag" isPending={isPending} />
          <p
            hidden={!isError}
            className="text-center text-base italic text-red-500"
          >
            There was a server error. Please try later.
          </p>
        </div>
      </form>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      "first name": PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
        }),
      ),
      "last name": PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
        }),
      ),
      email: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }).isRequired,
    avatar_url: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        tag: PropTypes.string.isRequired,
      }),
    ),
    tags2: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
