import PropTypes from "prop-types";

export default function TextInput({
  type = "text",
  isPending = false,
  name,
  placeholder = "",
}) {
  return (
    <input
      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 font-normal leading-tight text-gray-700 shadow focus:outline-none dark:bg-slate-300"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      disabled={isPending}
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.oneOf(["email", "text"]),
  isPending: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
