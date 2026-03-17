import { useState } from "react";

import { createReservation } from "../../api/reservation.api";
import { normalizeError } from "../../utils/normalizeError";
import Button from "../common/Button";
import Input from "../common/Input";
import StatusMessage from "../common/StatusMessage";
import Textarea from "../common/Textarea";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  specialRequest: ""
};

function ReservationForm() {
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
      await createReservation({ ...formData, guests: Number(formData.guests) });
      setSuccessMessage("Your reservation request has been received. Our team will confirm shortly.");
      setFormData(initialState);
    } catch (error) {
      setErrorMessage(normalizeError(error, "We could not submit your reservation right now."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="premium-card bg-brand-card/98 p-6 sm:p-8 lg:p-9" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Full Name</span>
          <Input id="reservation-full-name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" autoComplete="name" required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Phone</span>
          <Input id="reservation-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+880 1XXX-XXXXXX" autoComplete="tel" inputMode="tel" required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Email</span>
          <Input id="reservation-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Guests</span>
          <Input id="reservation-guests" type="number" min="1" max="30" name="guests" value={formData.guests} onChange={handleChange} required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Date</span>
          <Input id="reservation-date" type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Time</span>
          <Input id="reservation-time" type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">Special Request</span>
        <Textarea id="reservation-special-request" name="specialRequest" value={formData.specialRequest} onChange={handleChange} placeholder="Let us know if you're celebrating, need a quiet corner, or have a dietary preference." />
      </label>

      <div className="mt-6 space-y-4">
        {successMessage ? <StatusMessage>{successMessage}</StatusMessage> : null}
        {errorMessage ? <StatusMessage type="error">{errorMessage}</StatusMessage> : null}
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? "Sending Request..." : "Confirm Reservation Request"}
        </Button>
      </div>
    </form>
  );
}

export default ReservationForm;
