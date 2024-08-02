export default function ContactForm() {
  return (
    <div className="ContactForm flex flex-col items-center">
      <h2 className="mb-5 pt-6 text-3xl">Create Contact</h2>
      <div className="w-full max-w-xs">
        <form className="">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="first_name"
            >
              First Name
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                name="first_name"
                id="first_name"
              />
            </label>
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="last_name"
            >
              Last Name
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                name="last_name"
                id="last_name"
              />
            </label>
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                type="email"
                name="email"
                id="email"
              />
            </label>
          </div>

          <div className="mb-4">
            <input
              className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
              value="Add Contact"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
