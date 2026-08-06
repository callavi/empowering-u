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

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit?.(form);
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

            <Button type="submit" variant="primary" fullWidth>
                Send Message
            </Button>
        </form>
    );
}