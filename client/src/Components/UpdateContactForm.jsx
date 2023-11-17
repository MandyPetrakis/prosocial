import { useState } from "react";
import { useRequestProcessor } from "../requestProcessor";
import { useContacts } from "../Store/contactsStore";

export default function UpdateContactForm({
  currentContact,
  setCurrentContact,
  setIsEditing,
}) {
  const { mutate } = useRequestProcessor();
  const setContacts = useContacts((state) => state.setContacts);
  const contacts = useContacts((state) => state.contacts);

  const socialTypes = ["Facebook", "LinkedIn", "Instagram", "X"];

  const [contactInputs, setContactInputs] = useState({
    first_name: currentContact.first_name,
    last_name: currentContact.last_name,
    email: currentContact.email,
    relationship: currentContact.relationship,
    occupation: currentContact.occupation,
    company: currentContact.company,
  });

  const { first_name, last_name, email, relationship, occupation, company } =
    contactInputs;

  const updateContactInputs = (e) => {
    const { name, value } = e.target;

    setContactInputs({
      ...contactInputs,
      [name]: value,
    });
  };

  function setContactPhones() {
    if (currentContact.contact_phone_numbers.length == 0) {
      return [
        {
          phone_number: "",
          phone_number_type: "",
          deleted: "false",
        },
      ];
    } else {
      let phones = currentContact.contact_phone_numbers.map((p) => {
        return {
          phone_number: p.phone_number,
          phone_number_type: p.phone_number_type,
          deleted: "false",
          id: p.id,
        };
      });
      return phones;
    }
  }
  const [phoneInputs, setPhoneInputs] = useState(() => setContactPhones());

  const handlePhoneInputs = (index, event) => {
    let data = [...phoneInputs];
    data[index][event.target.name] = event.target.value;
    data[index].deleted = "false";
    setPhoneInputs(data);
  };

  const addPhoneFields = () => {
    let newField = {
      phone_number: "",
      phone_number_type: "",
      deleted: "false",
    };
    setPhoneInputs([...phoneInputs, newField]);
  };

  const handlePhoneDelete = (index) => {
    let data = [...phoneInputs];
    console.log(data[index]);
    data[index].deleted = "true";
    data[index].phone_number_type = "";
    data[index].phone_number = "";

    setPhoneInputs(data);
  };

  function setSocials() {
    if (currentContact.contact_socials.length == 0) {
      return [
        {
          url: "",
          social_type: "s.social_type",
        },
      ];
    } else {
      let socials = currentContact.contact_socials.map((s) => {
        return {
          url: s.url,
          social_type: s.social_type,
        };
      });
      return socials;
    }
  }

  const [socialInputs, setSocialInputs] = useState(() => setSocials());

  const handleSocialInputs = (index, event) => {
    let data = [...socialInputs];
    data[index][event.target.name] = event.target.value;
    setSocialInputs(data);
  };

  const addSocialFields = () => {
    let newField = { social_type: "", url: "" };
    setSocialInputs([...socialInputs, newField]);
  };

  const styles = {
    fieldStyle: "relative pt-5 mb-2 ",
    inputStyle:
      "border-[1px] border-teal shadow-md rounded-md h-10 w-64 px-3 placeholder-opacity-100 outline-none focus:outline-none focus:placeholder-transparent peer transition-all duration-1000 ease-in-out ",
    labelStyle:
      "block absolute pointer-events-none top-[0] left-[0] peer-placeholder-shown:top-28  peer-placeholder-shown:left-13 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 peer-focus:top-[0] peer-focus:left-[0] [transition:top_0.25s_ease-in-out,_left_0.25s_ease-in-out,_opacity_0.25s_ease-in-out]",
  };

  const updateContactMutation = mutate(
    ["updatedContact"],
    async () => {
      const updatedContact = {
        ...contactInputs,
        phone_numbers: phoneInputs,
        socials: socialInputs,
      };

      console.log(updatedContact);

      const response = await fetch(`/api/contacts/${currentContact.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        const updatedContacts = [...contacts, data];
        setCurrentContact(data);
        setContacts(updatedContacts);
        setIsEditing(false);
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    updateContactMutation.mutate();
  }

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

  return (
    <div
      className="m-2.5 w-31/5 fixed left-260 md:left-290 top-100 overflow-scroll
    "
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="sm:flex">
          <div className={styles.fieldStyle}>
            <input
              type="text"
              placeholder="First"
              name="first_name"
              className={`${styles.inputStyle} sm:w-48 sm:mr-3`}
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
              className={`${styles.inputStyle} sm:w-48`}
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
        {phoneInputs.map((input, index) => {
          return (
            <div key={index} className="flex items-center ">
              <div className={styles.fieldStyle}>
                <select
                  name="phone_number_type"
                  className="rounded h-10 border-[1px] border-teal mr-2 px-1"
                  onChange={(event) => handlePhoneInputs(index, event)}
                  value={input.phone_number_type}
                >
                  <option disabled value="">
                    Type
                  </option>
                  <option value="cell">Cell</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.fieldStyle}>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone_number"
                  className={`${styles.inputStyle} w-44 md:w-64`}
                  value={input.phone_number}
                  onChange={(event) => handlePhoneInputs(index, event)}
                />
                <label htmlFor="phone_number" className={styles.labelStyle}>
                  Phone Number
                </label>
              </div>
              <div className={styles.fieldStyle}>
                <div
                  className="text-2xl font-bold bg-teal w-8 h-8 text-center rounded-full grid place-content-center cursor-pointer ml-2"
                  onClick={() => handlePhoneDelete(index)}
                >
                  x
                </div>
              </div>
              {index === phoneInputs.length - 1 &&
              input.phone_number !== "" &&
              input.phone_number_type !== "" ? (
                <div className={styles.fieldStyle}>
                  <div
                    className="text-2xl font-bold bg-teal w-8 h-8 text-center rounded-full grid place-content-center cursor-pointer ml-2"
                    onClick={addPhoneFields}
                  >
                    +
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        {socialInputs.map((input, index) => {
          return (
            <div key={index} className="flex items-center ">
              <div className={styles.fieldStyle}>
                <select
                  name="social_type"
                  className="rounded h-10 border-[1px] border-teal mr-2 px-1"
                  onChange={(event) => handleSocialInputs(index, event)}
                  defaultValue="type"
                >
                  <option disabled value="type">
                    {" "}
                    Type
                  </option>
                  {socialTypes.map((t) => {
                    return (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.fieldStyle}>
                <input
                  type="text"
                  placeholder="Url"
                  name="url"
                  className={`${styles.inputStyle} w-44 md:w-64`}
                  value={input.url}
                  onChange={(event) => handleSocialInputs(index, event)}
                />
                <label htmlFor="url" className={styles.labelStyle}>
                  Url
                </label>
              </div>
              {index === socialInputs.length - 1 ? (
                <div className={styles.fieldStyle}>
                  <div
                    className="text-2xl font-bold bg-teal w-8 h-8 text-center rounded-full grid place-content-center cursor-pointer ml-2"
                    onClick={addSocialFields}
                  >
                    +
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        <button
          onClick={(e) => handleSubmit(e)}
          className="cursor-pointer mb-5 rounded-md shadow-md bg-purple text-white px-2 py-1 whitespace-nowrap w-full text-center font-semibold hover:shadow-lg hover:bg-gradient-to-r from-purple to-teal"
          type="submit"
        >
          Save
        </button>

        <div
          onClick={handleDelete}
          className="rounded bg-purple px-2 text-white font-semibold m-auto w-48 py-1 text-center cursor-pointer hover:shadow-lg hover:bg-gradient-to-r from-purple to-teal"
        >
          Delete Contact
        </div>
      </form>
    </div>
  );
}
