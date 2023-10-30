import { useState } from "react";
import { useRequestProcessor } from "../requestProcessor";
import { useContacts } from "../Store/contactsStore";

export default function ContactDetails({ currentContact, setCurrentContact }) {
  // const [modal, setModal] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { mutate } = useRequestProcessor();
  const contacts = useContacts((state) => state.contacts);
  const setContacts = useContacts((state) => state.setContacts);

  const deleteContactMutation = mutate(
    ["contact", currentContact.id],
    async () => {
      const response = await fetch(`/api/contacts/${currentContact.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      } else {
        const updatedContacts = contacts.filter(
          (c) => c.id !== currentContact.id
        );
        setContacts(updatedContacts);
      }
    }
  );

  function handleDelete() {
    deleteContactMutation.mutate();
    setCurrentContact("");
  }

  const contactTags = currentContact.tags.map((t) => (
    <div
      key={t.id}
      className="mr-1 rounded-lg border-2 px-2 bg-darkBlue whitespace-nowrap min-w-fit"
    >
      {t.description}
    </div>
  ));

  const contactSocials = currentContact.contact_socials.map((s) => (
    <div key={s.id} className="mr-1">
      <a href={s.url}>{s.social_type}</a>
    </div>
  ));

  const contactPhones = currentContact.contact_phone_numbers.map((p) => (
    <div key={p.id}>
      <span className="mr-1 font-semibold">{p.phone_number_type}:</span>
      {p.phone_number}
    </div>
  ));

  // const optionButton = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     strokeWidth={1.5}
  //     stroke="currentColor"
  //     className="w-10 h-10 text-purple hover:text-white hover:bg-purple rounded-full p-1 cursor-pointer"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
  //     />
  //   </svg>
  // );

  // function toggleModal() {
  //   setModal(!modal);
  // }

  // const modalRender = () => {
  //   return (
  //     <div className="absolute w-full h-full">
  //       <div
  //         onClick={toggleModal}
  //         className="z-10 w-full h-full top-0 left-0 right-0 bottom-0 fixed"
  //       ></div>
  //       <div className="z-20 fixed top-100 left-100 right-100 bottom-100 left 1/2  bg-darkBlue bg-opacity-90 px-20 py-10 rounded-md grid place-content-center">
  //         <div>Edit</div>
  //         <div>Delete Contact</div>
  //       </div>
  //     </div>
  //   );
  // };

  const editButton = (
    <div
      onClick={() => setIsEditing(true)}
      className="rounded bg-purple px-2 text-white font-semibold m-auto w-11 cursor-pointer"
    >
      Edit
    </div>
  );

  const saveButton = (
    <div className="rounded bg-purple px-2 text-white font-semibold m-auto w-14 text-center cursor-pointer">
      Save
    </div>
  );
  const deleteButton = (
    <div
      onClick={handleDelete}
      className="rounded bg-purple px-2 text-white font-semibold m-auto w-16 text-center cursor-pointer"
    >
      Delete
    </div>
  );

  return (
    <div className="m-2.5 w-31/5 fixed left-260 md:left-290 top-158">
      <div className="flex font-bold text-3xl">
        <div className="mr-1">{currentContact.first_name}</div>
        <div className="">{currentContact.last_name}</div>
      </div>
      <div className="flex">
        <div className="mr-1 font-semibold">{currentContact.occupation}</div>@
        <div className="ml-1">{currentContact.company}</div>
      </div>
      <div className="text-slate-400 mb-5">{currentContact.relationship}</div>
      <div className="mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {contactTags}
      </div>
      <div>{contactPhones}</div>
      <div className="mb-5">{currentContact.email}</div>
      <div className="flex mb-10">{contactSocials}</div>
      {isEditing ? (
        <div>
          {" "}
          {saveButton} {deleteButton}{" "}
        </div>
      ) : (
        editButton
      )}
    </div>
  );
}
