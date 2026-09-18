import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

// ===============================
// EmailJS Configuration
// ===============================

const serviceId = "service_6sypkf6";

// Main template
// This email will come to you
const templateId = "template_kp7qwfd";

// Auto-reply template
// This email will go to the person who fills the form
const autoReplyTemplateId = "template_8i3c07z";

// EmailJS Public Key
const publicKey = "Nn-TGQpwim88SCkGA";


function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    // Get form values
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();


    try {

      // ==========================================
      // 1. SEND MESSAGE TO YOU
      // ==========================================

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: name,
          email: email,
          message: message,

          // These are useful for EmailJS template
          from_name: name,
          reply_to: email,
        },
        {
          publicKey: publicKey,
        }
      );


      // ==========================================
      // 2. SEND AUTO-REPLY TO VISITOR
      // ==========================================

      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          name: name,
          email: email,
          message: message,

          from_name: name,
          reply_to: email,
        },
        {
          publicKey: publicKey,
        }
      );


      // Success message
      setStatus("Message sent successfully!");

      // Clear form
      form.current.reset();

    } catch (error) {

      console.error("EmailJS error:", error);

      setStatus(
        error?.text ||
          "Failed to send message. Please check the EmailJS configuration."
      );

    } finally {

      setIsSending(false);

    }
  };


  return (
    <section className="contact" id="contact">

      <h2>CONTACT</h2>

      <div className="contact-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="contact-info">

          <h3>Drop Me a Message</h3>

          <p>
            Have a project or opportunity?
            Let's connect and create something amazing!
          </p>


          <div className="contact-detail">

            <span>☎</span>

            <p>
              +91 9358961746
            </p>

          </div>


          <div className="contact-detail">

            <span>✉</span>

            <p>
              sanchitajain935@gmail.com
            </p>

          </div>


          <div className="contact-detail">

            <span>📍</span>

            <p>
              Jaipur, Rajasthan, India
            </p>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE - FORM
        ========================== */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          {/* Name */}

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />


          {/* Email */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />


          {/* Message */}

          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea>


          {/* Send Button */}

          <button
            type="submit"
            disabled={isSending}
          >

            {isSending ? "Sending..." : "Send"}

          </button>


          {/* Status */}

          <p className="form-status">
            {status}
          </p>

        </form>

      </div>

    </section>
  );
}

export default Contact;

