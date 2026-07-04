"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { SendIcon } from "@/components/icons";

const initialState: InquiryState = {};

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState
  );

  return (
    <form action={formAction} className="inquiry-form">
      <label className="form-field">
        <span className="sr-only">Your Name</span>
        <input type="text" name="name" placeholder="Your Name" required />
      </label>

      <div className="form-row">
        <label className="form-field">
          <span className="sr-only">Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </label>

        <label className="form-field">
          <span className="sr-only">Phone</span>
          <input type="tel" name="phone" placeholder="Phone (optional)" />
        </label>
      </div>

      <label className="form-field">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          placeholder="Tell us about your group, dates, and retreat goals..."
          rows={6}
          required
        />
      </label>

      {state.error ? <p className="form-message form-error">{state.error}</p> : null}
      {state.success ? (
        <p className="form-message form-success">
          Thank you! We&apos;ll be in touch shortly.
        </p>
      ) : null}

      <button type="submit" className="submit-button" disabled={pending}>
        <SendIcon className="button-icon" />
        {pending ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
