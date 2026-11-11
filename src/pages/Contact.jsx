import { useState } from "react";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) e.name = "Full name is required.";
    if (!values.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid email address.";
    if (!values.subject.trim()) e.subject = "Subject is required.";
    if (!values.message.trim()) e.message = "Message is required.";
    else if (values.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  return (
    <>
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <section className="section two-col">
        <div>
          <h2>Get in touch</h2>
          <p>📍 12 Market Road, Sample City</p>
          <p>📞 +234 800 000 0000 (sample)</p>
          <p>✉️ hello@caifuskitchen.example</p>
          <p>🕒 Mon - Sun: 9:00am - 9:00pm</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="form">
          {submitted && (
            <p className="success">✅ Thank you! Your message has been sent.</p>
          )}

          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" value={form.subject} onChange={handleChange} />
          {errors.subject && <span className="error">{errors.subject}</span>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
    </>
  );
}
