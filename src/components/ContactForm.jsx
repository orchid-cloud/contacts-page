export default function ContactForm() {
  return (
    <div className="ContactForm">
      <h2 className="text-3xl font-bold underline">Create Contact</h2>
      <form>
        <label>
          First Name
          <input type="text" name="first_name" />
        </label>

        <label>
          Last Name
          <input type="text" name="last_name" />
        </label>

        <label>
          Email
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
}
