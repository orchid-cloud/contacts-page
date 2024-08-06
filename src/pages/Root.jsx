import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

export default function Root() {
  return (
    <div className="mx-5 flex flex-col gap-8 sm:mx-16 md:mx-20 md:flex-row md:items-start lg:mx-40 2xl:mx-auto 2xl:max-w-screen-xl">
      <div className="md:sticky md:top-0 md:min-w-64 md:max-w-64">
        <ContactForm />
      </div>
      <div className="grow overflow-hidden">
        <ContactList />
      </div>
    </div>
  );
}
