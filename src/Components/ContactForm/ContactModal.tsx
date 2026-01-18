import { Box } from "@chakra-ui/react";
import { useContact } from "../../context/ContactContext";
import ContactForm from "./ContactForm";
import "./ContactModal.css";

const ContactModal = () => {
  const { open, closeContact } = useContact();

  if (!open) return null;

  return (
    <Box className="contact-overlay" onClick={closeContact}>
      <Box
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactModal;
