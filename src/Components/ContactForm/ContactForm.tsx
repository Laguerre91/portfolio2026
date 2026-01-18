import { Box, Button, Input, Textarea, Field, Text } from "@chakra-ui/react";
import { createToaster } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./ContactForm.css";

export const toaster = createToaster({
  placement: "top-end",
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

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
        toaster.create({
          title: "Message sent",
          description: "Thank you for reaching out",
          type: "success",
        });
        formRef.current?.reset();
      })
      .catch(() => {
        toaster.create({
          title: "Error",
          description: "Something went wrong",
          type: "error",
        });
      });
  };

  return (
    <Box className="contact-form-wrapper">
        <Text className="modal-title">Let's get in touch!</Text>
      <form ref={formRef} onSubmit={sendEmail}>
        <Field.Root required>
          <Field.Label>Name</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root required>
          <Field.Label>Email</Field.Label>
          <Input name="email_id" type="email" />
        </Field.Root>

        <Field.Root required>
          <Field.Label>Message</Field.Label>
          <Textarea name="message" rows={5} />
        </Field.Root>

          <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
            />

        <Button type="submit" className="contact-button">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
