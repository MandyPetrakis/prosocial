import { useLoaderData } from "react-router-dom";
import ContactDetails from "../Components/ContactDetails";
import { useState } from "react";

export const contactLoader = async ({ params }) => {
  const response = await fetch(`/api/contacts/${params.contact_id}`);
  if (!response.ok) {
    throw new Error("Unauthorized");
  }
  return response.json();
};

export default function Contact() {
  const data = useLoaderData();
  const [currentContact, setCurrentContact] = useState(data);

  return (
    <ContactDetails
      currentContact={currentContact}
      setCurrentContact={setCurrentContact}
    />
  );
}
