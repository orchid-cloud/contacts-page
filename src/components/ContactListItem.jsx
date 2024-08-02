export default function ContactListItem(props) {
  // console.log({ contactData });
  return (
    <div>
      <img src="" alt="user icon" />
      <p>{props.contactData.fields.first_name.value}</p>
      <p>{props.contactData.fields.last_name.value}</p>
      <p>{props.contactData.fields.email.value}</p>
      {props.contactData.tags.map((tag) => (
        <p key={tag.id}>{tag.tag}</p>
      ))}
    </div>
  );
}
