import { Box, Button, Input, Textarea, Field, Text } from "@chakra-ui/react";
import { createToaster } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useContact } from "../../context/ContactContext";
import "./ContactForm.css";

export const toaster = createToaster({
  placement: "top-end",
});

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
        <Field.Root required>
          <Field.Label>Your Name</Field.Label>
          <Input name="name" required/>
        </Field.Root>

        <Field.Root required>
          <Field.Label>Your Email</Field.Label>
          <Input name="email_id" type="email" required/>
        </Field.Root>

        <Field.Root required>
          <Field.Label>Message</Field.Label>
          <Textarea name="message" rows={5} required/>
        </Field.Root>

          <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
            />

            {confirmationMessage && (
                    <Text className="confirmation-message" mt={4}>
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
