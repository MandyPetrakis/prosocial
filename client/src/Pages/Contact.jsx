import { useLoaderData } from "react-router-dom";
import ContactDetails from "../Components/ContactDetails";

export const contactLoader = async ({ params }) => {
  const response = await fetch(`/api/contacts/${params.contact_id}`);
  if (!response.ok) {
    throw new Error("Unauthorized");
  }
  return response.json();
};

export default function Contact() {
  const data = useLoaderData();

  return <ContactDetails currentContact={data} />;
}
