import { useState } from "react";
import { useRequestProcessor } from "../requestProcessor";
import { useContacts } from "../Store/contactsStore";

export default function NewContactForm({ toggleModal, setCurrentContact }) {
  const { mutate } = useRequestProcessor();
  const contacts = useContacts((state) => state.contacts);
  const setContacts = useContacts((state) => state.setContacts);
  const [errors, setErrors] = useState([]);

  const [contactInputs, setContactInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    relationship: "",
    occupation: "",
    company: "",
    phone_number: "",
  });

  const {
    first_name,
    last_name,
    email,
    relationship,
    occupation,
    company,
    phone_number,
  } = contactInputs;

  const updateContactInputs = (e) => {
    const { name, value } = e.target;

    if (name === "first_name" || name === "last_name") {
      setErrors([]);
    }

    setContactInputs({
      ...contactInputs,
      [name]: value,
    });
  };

  const styles = {
    fieldStyle: "relative pt-5 mb-2 ",
    inputStyle:
      "border-[1px] border-teal shadow-md rounded-md h-10 w-64 px-3 placeholder-opacity-100 outline-none focus:outline-none focus:placeholder-transparent peer transition-all duration-1000 ease-in-out",
    labelStyle:
      "block absolute pointer-events-none top-[0] left-[0] peer-placeholder-shown:top-28  peer-placeholder-shown:left-13 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 peer-focus:top-[0] peer-focus:left-[0] [transition:top_0.25s_ease-in-out,_left_0.25s_ease-in-out,_opacity_0.25s_ease-in-out]",
  };

  const addContactMutation = mutate(
    ["newContact"],
    async () => {
      const newContact = {
        ...contactInputs,
      };
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) {
        response.json().then((data) => {
          setErrors(data.errors);
        });
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        console.log(data);
        const updatedContacts = [...contacts, data];
        setCurrentContact(data);
        setContacts(updatedContacts);
        toggleModal();
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    addContactMutation.mutate();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="sm:flex">
        <div className={styles.fieldStyle}>
          <input
            type="text"
            placeholder="First"
            name="first_name"
            className={`${styles.inputStyle} ${
              errors.length !== 0 ? "placeholder-alert" : null
            } sm:w-48 sm:mr-3`}
            value={first_name}
            onChange={updateContactInputs}
          />
          <label htmlFor="first_name" className={styles.labelStyle}>
            First
          </label>
        </div>
        <div className={styles.fieldStyle}>
          <input
            type="text"
            placeholder="Last"
            name="last_name"
            className={`${styles.inputStyle} ${
              errors.length !== 0 ? "placeholder-alert" : null
            } sm:w-48 sm:mr-3`}
            value={last_name}
            onChange={updateContactInputs}
          />
          <label htmlFor="last_name" className={styles.labelStyle}>
            Last
          </label>
        </div>
      </div>
      <div className="sm:flex">
        <div className={styles.fieldStyle}>
          <input
            type="text"
            placeholder="Occupation"
            name="occupation"
            className={`${styles.inputStyle} sm:w-48 sm:mr-3`}
            value={occupation}
            onChange={updateContactInputs}
          />
          <label htmlFor="email" className={styles.labelStyle}>
            Occupation
          </label>
        </div>
        <div className={styles.fieldStyle}>
          <input
            type="text"
            placeholder="Company"
            name="company"
            className={`${styles.inputStyle} sm:w-48 sm:mr-3`}
            value={company}
            onChange={updateContactInputs}
          />
          <label htmlFor="company" className={styles.labelStyle}>
            Company
          </label>
        </div>
      </div>
      <div className={styles.fieldStyle}>
        <input
          type="text"
          placeholder="Relationship"
          name="relationship"
          className={styles.inputStyle}
          value={relationship}
          onChange={updateContactInputs}
        />
        <label htmlFor="relationship" className={styles.labelStyle}>
          Relationship
        </label>
      </div>
      <>
        {/* {tagInputs.map((input, index) => {
        return (
          <div key={index} className="flex items-center ">
            <div className={styles.fieldStyle}>
              <input
                type="text"
                placeholder="Community"
                name="description"
                className={`${styles.inputStyle} w-44 md:w-64`}
                value={input.description}
                onChange={(event) => handleTagInputs(index, event)}
              />
              <label htmlFor="description" className={styles.labelStyle}>
                Community
              </label>
            </div>
            {index === tagInputs.length - 1 ? (
              <div className={styles.fieldStyle}>
                <div
                  className="text-2xl font-bold bg-teal w-8 h-8 text-center rounded-full grid place-content-center cursor-pointer ml-2"
                  onClick={addTagFields}
                >
                  +
                </div>
              </div>
            ) : null}
          </div>
        );
      })} */}
      </>

      <div className={styles.fieldStyle}>
        <input
          type="text"
          placeholder="Phone Number"
          name="phone_number"
          className={`${styles.inputStyle} w-44 md:w-64`}
          value={phone_number}
          onChange={updateContactInputs}
        />
        <label htmlFor="phone_number" className={styles.labelStyle}>
          Phone Number
        </label>
      </div>

      <div className={styles.fieldStyle}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className={styles.inputStyle}
          value={email}
          onChange={updateContactInputs}
        />
        <label htmlFor="email" className={styles.labelStyle}>
          Email
        </label>
      </div>
      {errors.length !== 0 ? (
        <div className="text-red-800">
          {errors.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      ) : null}
      <button
        onClick={(e) => handleSubmit(e)}
        className="cursor-pointer rounded-md shadow-md bg-purple text-white px-2 py-1 whitespace-nowrap w-full text-center font-semibold hover:shadow-lg hover:bg-gradient-to-r from-purple to-teal"
        type="submit"
      >
        Create Contact
      </button>
    </form>
  );
}
