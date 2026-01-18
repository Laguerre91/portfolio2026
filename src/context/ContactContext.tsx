import { createContext, useContext, useState } from "react";

interface ContactContextType {
  open: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const ContactContext = createContext<ContactContextType | null>(null);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        open,
        openContact: () => setOpen(true),
        closeContact: () => setOpen(false),
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used inside ContactProvider");
  return ctx;
};
