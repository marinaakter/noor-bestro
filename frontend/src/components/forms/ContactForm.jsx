import { useState } from "react";

import { createContactMessage } from "../../api/contact.api";
import { normalizeError } from "../../utils/normalizeError";
import Button from "../common/Button";
import Input from "../common/Input";
import StatusMessage from "../common/StatusMessage";
import Textarea from "../common/Textarea";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await createContactMessage(formData);
      setSuccessMessage("Thank you for reaching out. We will get back to you as soon as possible.");
      setFormData(initialState);
    } catch (error) {
      setErrorMessage(normalizeError(error, "We could not send your message right now."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="premium-card bg-brand-card/98 p-6 sm:p-8 lg:p-9" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Full Name</span>
          <Input id="contact-full-name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" autoComplete="name" required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Email</span>
          <Input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Phone</span>
          <Input id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+880 1XXX-XXXXXX" autoComplete="tel" inputMode="tel" />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Subject</span>
          <Input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Private dining, event, general query" required />
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Message</span>
        <Textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help, and our team will respond with care." minLength={10} required />
      </label>

      <div className="mt-6 space-y-4">
        {successMessage ? <StatusMessage>{successMessage}</StatusMessage> : null}
        {errorMessage ? <StatusMessage type="error">{errorMessage}</StatusMessage> : null}
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
