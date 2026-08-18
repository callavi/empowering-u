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
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
        >
            <label className="flex flex-col gap-2">
                <span className={styles.label}>Name *</span>

                <input
                    className={styles.field}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                    <span className={styles.label}>Phone *</span>

                    <input
                        className={styles.field}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="flex flex-col gap-2">
                    <span className={styles.label}>Email</span>

                    <input
                        className={styles.field}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <label className="flex flex-col gap-2">
                <span className={styles.label}>Service</span>

                <select
                    className={styles.field}
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                >
                    <option value="">
                        Select a service
                    </option>

                    {services.map((service) => (
                        <option
                            key={service}
                            value={service}
                        >
                            {service}
                        </option>
                    ))}
                </select>
            </label>

            <label className="flex flex-col gap-2">
                <span className={styles.label}>Message *</span>

                <textarea
                    className={styles.field}
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </label>

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
            

            {status === "success" && (
                <p
                    className="text-sm text-center"
                    role="status"
                    aria-live="polite"
                >
                    Thanks! We've received your message and will get back to
                    you soon.
                </p>
            )}

            {status === "error" && (
                <p
                    className="text-sm text-center"
                    role="alert"
                >
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}