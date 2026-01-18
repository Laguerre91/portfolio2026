import { Box, Button, Input, Textarea, Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useContact } from "../../context/ContactContext";
import "./ContactForm.css";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const { closeContact } = useContact();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_2jsiljl",
        "template_ah98s3e",
        formRef.current,
        "DcoIdTZT3xfOm5lCO"
      )
      .then(() => {
        setConfirmationMessage("✅ Your message was sent successfully!");
        formRef.current?.reset();
        setTimeout(() => {
          setConfirmationMessage(null);
          closeContact();
        }, 2000);
      })
      .catch(() => {
        setConfirmationMessage("❌ Something went wrong, please try again.");
      });
  };

  return (
    <Box className="contact-form-wrapper">
      <Button className="close-btn" onClick={closeContact}>X</Button>
      <Text className="modal-title">Let's get in touch!</Text>

      <form ref={formRef} onSubmit={sendEmail}>
        <label htmlFor="name">Your Name</label>
        <Input id="name" name="name" required />

        <label htmlFor="email_id">Your Email</label>
        <Input id="email_id" name="email_id" type="email" required />

        <label htmlFor="message">Message</label>
        <Textarea id="message" name="message" rows={5} required />

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        {confirmationMessage && (
          <Text className="confirmation-message">
            {confirmationMessage}
          </Text>
        )}

        <Button type="submit" className="contact-button">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
