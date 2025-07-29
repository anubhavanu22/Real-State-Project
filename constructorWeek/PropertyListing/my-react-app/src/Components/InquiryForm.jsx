
import { useState } from "react";

export function InquiryForm({ propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) return false;
    if (!email.includes("@") || phone.length < 10) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      alert("Please fill all fields correctly.");
      return;
    }
    setSubmitted(true);
    
    console.log("Form submitted:", formData);
  };

  if (submitted) {
    return (
      <div style={{ marginTop: "20px", color: "green" }}>
        ✅ Thank you for your inquiry about <b>{propertyTitle}</b>!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>📩 Inquire About This Property</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Your Name"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Your Email"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        placeholder="Your Phone Number"
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="message"
        value={formData.message}
        placeholder="Your Message"
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Send Inquiry</button>
    </form>
  );
}
