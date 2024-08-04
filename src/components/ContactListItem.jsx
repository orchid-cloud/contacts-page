import PropTypes from "prop-types";

export default function ContactListItem(props) {
  const getFieldValue = (fields, key) => {
    if (!fields[key]) return "";
    if (!fields[key][0]) return "";

    return fields[key][0].value;
  };

  return (
    <div className="ContactListItem relative flex gap-3 rounded bg-slate-300 p-3 hover:bg-slate-300 dark:bg-slate-500 hover:dark:bg-slate-600">
      <div className="flex min-w-14 items-center justify-center">
        <img
          className="h-14 w-14 rounded-full"
          src={props.contactData.avatar_url}
          alt="user icon"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row flex-wrap gap-1">
          <span className="text-xl font-medium text-gray-900 dark:text-white">
            {getFieldValue(props.contactData.fields, "first name")}
          </span>
          <span className="text-xl font-medium text-gray-900 dark:text-white">
            {getFieldValue(props.contactData.fields, "last name")}
          </span>
        </div>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-200">
          {getFieldValue(props.contactData.fields, "email")}
        </p>
        <div className="flex flex-wrap gap-2">
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
        <span className="material-icons md-dark text text-lg dark:text-slate-300 hover:dark:text-red-300">
          delete
        </span>
      </div>
    </div>
  );
}

ContactListItem.propTypes = {
  contactData: PropTypes.shape({
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
  }).isRequired,
};
