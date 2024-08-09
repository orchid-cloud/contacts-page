import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "../api/contacts";
import { queryKey } from "./ContactList";
import { useState } from "react";
import TextInput from "./forms/TextInput";
import Submit from "./forms/Submit";

export const processingContact = {
  avatar_url: "https://live.devnimble.com/api/avatars/person_default",
  id: "processing",
};

const useCreateContact = (queryKey) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContact,
    onMutate: async (contactData) => {
      await queryClient.cancelQueries({ queryKey: [queryKey[0]] });
      const previousContacts = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        const resources = [
          { ...processingContact, ...contactData },
          // @ts-ignore
          ...old.resources,
        ];

        // @ts-ignore
        return { ...old, resources };
      });

      return { previousContacts };
    },
    onError: (_err, _contactData, context) => {
      queryClient.setQueryData(queryKey, context.previousContacts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey[0]] });
    },
  });
};

export default function ContactForm() {
  const { mutate, isPending, isError } = useCreateContact(queryKey);

  const [formErrors, setFormErrors] = useState({});

  const validate = (form) => {
    let valid = true;
    let errors = {};

    if (!form.first_name.value && !form.last_name.value) {
      valid = false;
      errors.first_name = true;
      errors.last_name = true;
    }

    if (!form.email.value) {
      valid = false;
      errors.email = true;
    }

    if (valid && Object.keys(formErrors).length !== 0) setFormErrors({});

    return [valid, errors];
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const [isValid, errors] = validate(form);

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    const contactData = {
      fields: {
        email: [
          {
            value: form.email.value,
          },
        ],
        "first name": [
          {
            value: form.first_name.value,
          },
        ],
        "last name": [
          {
            value: form.last_name.value,
          },
        ],
      },
      record_type: "person",
      tags: [],
    };

    mutate(contactData, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="ContactForm flex flex-col items-center">
      <h2
        id="contact-form-header"
        className="mb-5 pt-6 text-3xl dark:text-slate-200"
      >
        Create Contact
      </h2>
      <div id="form" className="w-full max-w-xs">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200"
              htmlFor="first_name"
            >
              <div className="flex justify-between">
                <span>First Name</span>
                <span
                  hidden={!formErrors["first_name"]}
                  className="ml-3 font-normal italic text-red-500"
                >
                  Some name is required.
                </span>
              </div>
              <TextInput isPending={isPending} name="first_name" />
            </label>
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200"
              htmlFor="last_name"
            >
              <div className="flex justify-between">
                <span>Last Name</span>
                <span
                  hidden={!formErrors["last_name"]}
                  className="ml-3 font-normal italic text-red-500"
                >
                  Some name is required.
                </span>
              </div>
              <TextInput isPending={isPending} name="last_name" />
            </label>
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200"
              htmlFor="email"
            >
              <div className="flex justify-between">
                <span>Email</span>
                <span
                  hidden={!formErrors["email"]}
                  className="ml-1 font-normal italic text-red-500"
                >
                  Please enter valid email address.
                </span>
              </div>
              <TextInput type="email" isPending={isPending} name="email" />
            </label>
          </div>

          <div className="mb-4">
            <Submit
              value="Add Contact"
              pendingValue="Processing Contact..."
              isPending={isPending}
            />
            <p
              hidden={!isError}
              className="text-center text-base italic text-red-500"
            >
              There was a server error. Please try later.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
