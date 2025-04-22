"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import BookingForm from "../components/BookingForm";

interface BookingFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const BookingFormContext = createContext<BookingFormContextType | undefined>(undefined);

export function BookingFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <BookingFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
      <BookingForm isOpen={isOpen} onClose={closeForm} />
    </BookingFormContext.Provider>
  );
}

export function useBookingForm() {
  const context = useContext(BookingFormContext);
  if (context === undefined) {
    throw new Error("useBookingForm must be used within a BookingFormProvider");
  }
  return context;
} 