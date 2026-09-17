
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus("EmailJS is not configured yet. Add your keys in the .env file.");
      return;
    }

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
        from_name: form.current.name.value,
        reply_to: form.current.email.value,
      })
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>CONTACT</h2>

      <div className="contact-container">

        {/* Left side */}
        <div className="contact-info">
          <h3>Drop Me a Message</h3>

          <p>
            Have a project or opportunity?
            Let's connect and create something amazing!
          </p>

          <div className="contact-detail">
            <span>☎</span>
            <p>+91 9358961746</p>
          </div>

          <div className="contact-detail">
            <span>✉</span>
            <p>sanchitajain935@gmail.com</p>
          </div>

          <div className="contact-detail">
            <span>📍</span>
            <p>Jaipur, Rajasthan, India</p>
          </div>
        </div>

        {/* Right side */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>

          <p className="form-status">{status}</p>
        </form>

      </div>
    </section>
  );
}

export default Contact;