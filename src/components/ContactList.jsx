import ContactListItem from "./ContactListItem";

const contacts = [
  {
    id: 1,
    fields: {
      first_name: {
        field_id: 1,
        value: "John",
      },
      last_name: {
        field_id: 2,
        value: "Smith",
      },
      email: {
        field_id: 3,
        value: "example@John.org",
      },
    },
    avatar_url:
      "https://live.staticflickr.com/1305/4680268546_09f37c6391_c.jpg",
    tags: [
      {
        tag: "csv import",
        id: "5049fa0c9b85f62cb4000639",
      },
      {
        tag: "xls import",
        id: "5049fa0c9b85f62cb4000638",
      },
      {
        tag: "txt import",
        id: "5049fa0c9b85f62cb4000637",
      },
      {
        tag: "csv import",
        id: "5049fa0c9b85f62cb4000636",
      },
      {
        tag: "xls import",
        id: "5049fa0c9b85f62cb4000635",
      },
      {
        tag: "txt import",
        id: "5049fa0c9b85f62cb4000634",
      },
      {
        tag: "csv import",
        id: "5049fa0c9b85f62cb4000633",
      },
      {
        tag: "xls import",
        id: "5049fa0c9b85f62cb4000632",
      },
      {
        tag: "txt import",
        id: "5049fa0c9b85f62cb4000631",
      },
    ],
  },
  {
    id: 2,
    fields: {
      first_name: {
        field_id: 1,
        value: "Jack",
      },
      last_name: {
        field_id: 2,
        value: "Black",
      },
      email: {
        field_id: 3,
        value: "example@Jack.org",
      },
    },
    avatar_url:
      "https://live.staticflickr.com/1305/4680268546_09f37c6391_c.jpg",
    tags: [
      {
        tag: "csv import",
        id: "5049fa0c9b85f62cb4000639",
      },

      {
        tag: "txt import",
        id: "5049fa0c9b85f62cb4000637",
      },
    ],
  },
  {
    id: 3,
    fields: {
      first_name: {
        field_id: 1,
        value: "Bill",
      },
      last_name: {
        field_id: 2,
        value: "Lake",
      },
      email: {
        field_id: 3,
        value: "example@Bill.org",
      },
    },
    avatar_url:
      "https://live.staticflickr.com/1305/4680268546_09f37c6391_c.jpg",
    tags: [
      {
        tag: "xls import",
        id: "5049fa0c9b85f62cb4000638",
      },
      {
        tag: "txt import",
        id: "5049fa0c9b85f62cb4000637",
      },
      {
        tag: "xls import",
        id: "5049fa0c9b85f62cb4000636",
      },
      {
        tag: "txt import",
        id: "5049fa0c9b85f62cb4000635",
      },
      {
        tag: "xls import",
        id: "5049fa0c9b85f62cb4000634",
      },
      {
        tag: "txt import",
          id: "5049fa0c9b85f62cb4000633",
      },
    ],
  },
  {
    id: 4,
    fields: {
      first_name: {
        field_id: 1,
        value: "Jill",
      },
      last_name: {
        field_id: 2,
        value: "White",
      },
      email: {
        field_id: 3,
        value: "example@Jill.org",
      },
    },
    avatar_url:
      "https://live.staticflickr.com/1305/4680268546_09f37c6391_c.jpg",
    tags: [
      {
        tag: "csv import",
        id: "5049fa0c9b85f62cb4000639",
      },
    ],
  },
];

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
