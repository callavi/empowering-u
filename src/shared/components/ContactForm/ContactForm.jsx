import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./ContactForm.module.css";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm({ services, onSubmit }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");

    try {
      await onSubmit?.(form);

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.fieldGroup}>
        <label className={styles.control}>
          <span className={styles.label}>
            Name <span aria-hidden="true">*</span>
          </span>

          <input
            className={styles.field}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.control}>
          <span className={styles.label}>
            Phone <span aria-hidden="true">*</span>
          </span>

          <input
            className={styles.field}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />
        </label>

        <label className={styles.control}>
          <span className={styles.label}>Email</span>

          <input
            className={styles.field}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
      </div>

      <label className={styles.control}>
        <span className={styles.label}>Service</span>

        <select
          className={styles.field}
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Select a service</option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.control}>
        <span className={styles.label}>
          Message <span aria-hidden="true">*</span>
        </span>

        <textarea
          className={`${styles.field} ${styles.textarea}`}
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      <div className={styles.submit}>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Sending..."
            : "Send Message"}
        </Button>
      </div>

      {status === "success" && (
        <p
          className={styles.success}
          role="status"
          aria-live="polite"
        >
          Thanks! We've received your message and will get back
          to you soon.
        </p>
      )}

      {status === "error" && (
        <p
          className={styles.error}
          role="alert"
        >
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}