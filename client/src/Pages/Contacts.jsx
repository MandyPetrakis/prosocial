import { useState, useEffect } from "react";
import { useContacts } from "../Store/contactsStore";
import ContactDetails from "../Components/ContactDetails";
import NewContactForm from "../Components/NewContactForm";

export default function Contacts() {
  const [currentContact, setCurrentContact] = useState();
  const contacts = useContacts((state) => state.contacts);
  const [modal, setModal] = useState();

  function toggleModal() {
    setModal(!modal);
  }

  function toggleContactDetails(c) {
    if (currentContact && currentContact === c) setCurrentContact(null);
    else setCurrentContact(c);
  }

  const addContactButton = (
    <div
      onClick={toggleModal}
      className="text-7xl fixed bottom-0 left-48 cursor-pointer w-52 bg-background bg-opacity-80"
    >
      +
    </div>
  );

  const modalRender = () => {
    return (
      <div className="absolute w-full h-full">
        <div
          onClick={toggleModal}
          className="z-10 w-full h-full top-0 left-0 right-0 bottom-0 fixed"
        ></div>
        <div className="z-20 fixed top-50 sm:top-100 right-50 left-50  bottom-50 left 1/2  bg-darkBlue bg-opacity-90 px-20 py-10 rounded-md grid place-content-center overflow-scroll">
          <NewContactForm
            toggleModal={toggleModal}
            setCurrentContact={setCurrentContact}
          />
        </div>
      </div>
    );
  };

  if (contacts.length === 0)
    return (
      <div>
        <span className="text-xl font-bold ml-13 mb-5 block">
          Nothing to see here!
        </span>
        Click the + below to start adding contacts.
        {modal ? modalRender() : null}
        {addContactButton}
      </div>
    );

  return (
    <div className="relative">
      <div className="relative">
        <div className="m-2.5 w-1/4 min-w-fit pb-10">
          {contacts
            .sort(function (a, b) {
              if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
                return -1;
              }
              if (a.first_name > b.first_name) {
                return 1;
              }
              return 0;
            })
            .map((c) => {
              return (
                <div
                  key={c.id}
                  onClick={() => {
                    toggleContactDetails(c);
                  }}
                  className={` ${
                    currentContact === c
                      ? "font-semibold bg-purple text-grey"
                      : ""
                  } cursor-pointer whitespace-nowrap border-teal border-2 rounded-md px-3 py-2 mb-2.5 min-w-fit hover:font-semibold`}
                >
                  {c.first_name.charAt(0).toUpperCase() +
                    c.first_name.slice(1).toLowerCase() +
                    " " +
                    c.last_name.charAt(0).toUpperCase() +
                    c.last_name.slice(1).toLowerCase()}
                </div>
              );
            })}
        </div>
        {currentContact ? (
          <ContactDetails
            toggleModal={toggleModal}
            currentContact={currentContact}
            setCurrentContact={setCurrentContact}
          />
        ) : null}
      </div>
      {modal ? modalRender() : null}
      {addContactButton}
    </div>
  );
}
