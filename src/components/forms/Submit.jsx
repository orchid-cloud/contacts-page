import PropTypes from "prop-types";

export default function Submit({
  isPending = false,
  value,
  pendingValue = "",
}) {
  const pendingText = pendingValue.length ? pendingValue : value;
  return (
    <input
      className="focus:shadow-outline w-full cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:animate-pulse dark:bg-sky-700 dark:text-gray-100 hover:dark:bg-sky-600"
      type="submit"
      value={isPending ? pendingText : value}
      disabled={isPending}
    />
  );
}

Submit.propTypes = {
  isPending: PropTypes.bool,
  pendingValue: PropTypes.string,
  value: PropTypes.string.isRequired,
};
