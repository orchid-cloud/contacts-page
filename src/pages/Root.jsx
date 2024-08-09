import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import fallbackRender from "../components/fallbackRender";
import { ErrorBoundary } from "react-error-boundary";

export default function Root() {
  return (
    <div className="mx-5 flex flex-col gap-8 sm:mx-16 md:mx-20 md:flex-row md:items-start lg:mx-40 2xl:mx-auto 2xl:max-w-screen-xl">
      <div
        id="contact-form"
        className="md:sticky md:top-0 md:min-w-64 md:max-w-64"
      >
        <ErrorBoundary fallbackRender={fallbackRender}>
          <ContactForm />
        </ErrorBoundary>
      </div>
      <div className="grow overflow-hidden">
        <ErrorBoundary fallbackRender={fallbackRender}>
          <ContactList />
        </ErrorBoundary>
      </div>
    </div>
  );
}
