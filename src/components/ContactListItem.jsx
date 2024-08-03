import PropTypes from "prop-types";

export default function ContactListItem(props) {
  // console.log({ contactData });
  return (
    <div className="ContactListItem relative flex gap-4 rounded bg-slate-300 p-2.5">
      <div className="flex min-w-14 items-center justify-center">
        <img
          className="h-14 w-14 rounded-full"
          src={props.contactData.avatar_url}
          alt="user icon"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row gap-1">
          <span className="text-xl font-medium text-gray-900 dark:text-white">
            {props.contactData.fields.first_name.value}
          </span>
          <span className="text-xl font-medium text-gray-900 dark:text-white">
            {props.contactData.fields.last_name.value}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {props.contactData.fields.email.value}
        </p>
        <div className="flex flex-wrap gap-2 pr-6">
          {props.contactData.tags.map((tag) => (
            <span
              className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
              key={tag.id}
            >
              {tag.tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-2.5 top-1">
        <span className="material-icons md-dark">delete</span>
      </div>
    </div>
  );
}

ContactListItem.propTypes = {
  contactData: PropTypes.shape({
    fields: PropTypes.shape({
      first_name: PropTypes.shape({
        value: PropTypes.string.isRequired,
      }).isRequired,
      last_name: PropTypes.shape({
        value: PropTypes.string.isRequired,
      }).isRequired,
      email: PropTypes.shape({
        value: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    avatar_url: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        tag: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
