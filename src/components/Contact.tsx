
import { ContactForm } from "./contact/ContactForm";

export const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
