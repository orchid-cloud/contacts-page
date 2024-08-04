import PropTypes from "prop-types";
import { getContactFieldValue } from "../utils/contacts";

export default function ContactCard(props) {
  return (
    <div className="ContactCard m-auto flex max-w-xl flex-col gap-9 p-2.5">
      <div className="flex gap-4">
        <div className="min-w-14">
          <img
            className="h-14 w-14 rounded-full"
            src={props.contact.avatar_url}
            alt="user icon"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
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
      <div>
        <h3 className="mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {props.contact.tags.map((tag) => (
            <span
              className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
              key={tag.id}
            >
              {tag.tag}
            </span>
          ))}
        </div>
      </div>

      <form>
        <div className="mb-4">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Add new tag"
          />
        </div>
        <div className="mb-4">
          <input
            className="focus:shadow-outline w-full rounded bg-sky-400 px-4 py-2 font-bold text-white hover:bg-sky-600 focus:outline-none"
            type="submit"
            value="Add Tag"
          />
        </div>
      </form>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
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
