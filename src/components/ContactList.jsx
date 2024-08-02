import ContactListItem from './ContactListItem';

const contacts = [
  {
    id: 1,
    fields: {
      first_name: {
        field_id: 1,
        value: 'John',
      },
      last_name: {
        field_id: 2,
        value: 'Smith',
      },
      email: {
        field_id: 3,
        value: 'example@John.org',
      },
    },
    tags: [
      {
        'tag': 'csv import',
        'id': '5049fa0c9b85f62cb4000639',
      },
      {
        'tag': 'xls import',
        'id': '5049fa0c9b85f62cb4000638',
      },
      {
        'tag': 'txt import',
        'id': '5049fa0c9b85f62cb4000637',
      },
    ],
  },
  {
    id: 2,
    fields: {
      first_name: {
        field_id: 1,
        value: 'Jack',
      },
      last_name: {
        field_id: 2,
        value: 'Black',
      },
      email: {
        field_id: 3,
        value: 'example@Jack.org',
      },
    },
    tags: [
      {
        'tag': 'csv import',
        'id': '5049fa0c9b85f62cb4000639',
      },

      {
        'tag': 'txt import',
        'id': '5049fa0c9b85f62cb4000637',
      },
    ],
  },
  {
    id: 3,
    fields: {
      first_name: {
        field_id: 1,
        value: 'Bill',
      },
      last_name: {
        field_id: 2,
        value: 'Lake',
      },
      email: {
        field_id: 3,
        value: 'example@Bill.org',
      },
    },
    tags: [
      {
        'tag': 'xls import',
        'id': '5049fa0c9b85f62cb4000638',
      },
      {
        'tag': 'txt import',
        'id': '5049fa0c9b85f62cb4000637',
      },
    ],
  },
  {
    id: 4,
    fields: {
      first_name: {
        field_id: 1,
        value: 'Jill',
      },
      last_name: {
        field_id: 2,
        value: 'White',
      },
      email: {
        field_id: 3,
        value: 'example@Jill.org',
      },
    },
    tags: [
      {
        'tag': 'csv import',
        'id': '5049fa0c9b85f62cb4000639',
      },
    ],
  },
];

export default function ContactList() {
  return (
    <div className="ContactList">
      <h2>Contacts</h2>
      {contacts.map((item, index) => (
        <ContactListItem key={index} contactData={item} />
      ))}
    </div>
  );
}
