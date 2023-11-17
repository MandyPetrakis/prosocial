import { useState } from "react";
import UpdateContactForm from "./UpdateContactForm";

export default function ContactDetails({ currentContact, setCurrentContact }) {
  const [isEditing, setIsEditing] = useState(false);

  //Data renders

  const contactTags = currentContact.tags.map((t) => (
    <div
      key={t.id}
      className="mr-1 rounded-lg border-2 px-2 bg-darkBlue whitespace-nowrap min-w-fit"
    >
      {t.description.charAt(0).toUpperCase() +
        t.description.slice(1).toLowerCase()}
    </div>
  ));

  const contactPhones = currentContact.contact_phone_numbers.map((p) => (
    <div key={p.id}>
      <span className="mr-1 font-semibold">{p.phone_number_type}:</span>
      {p.phone_number}
    </div>
  ));

  const contactSocials = currentContact.contact_socials.map((s) => (
    <div key={s.id} className="mr-1">
      <a href={s.url}>{s.social_type}</a>
    </div>
  ));

  // Buttons

  const editButton = (
    <div
      onClick={() => {
        setIsEditing(true);
      }}
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

  const styles = {
    names: "flex font-bold text-3xl mb-5",
    add: "text-lightBlue opacity-50 mr-3 font-semilbold cursor-pointer hover:opacity-100 hover:text-purple",
    work: "font-semibold flex",
    relationship: "text-purple mb-5",
    tags: "mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    phone_numbers: "mb-5",
    emails: "mb-5",
    socials: "grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  };

  const detailRender = (
    <div className="m-2.5 w-31/5 fixed left-260 md:left-290 top-100">
      <div className={styles.names}>
        {currentContact.first_name === "" ? (
          <div className={styles.add}>+ First</div>
        ) : (
          <div className="mr-1">
            {currentContact.first_name.charAt(0).toUpperCase() +
              currentContact.first_name.slice(1).toLowerCase()}
          </div>
        )}

        {currentContact.first_name === "" ? (
          <div className={styles.add}>+ Last</div>
        ) : (
          <div>
            {currentContact.last_name.charAt(0).toUpperCase() +
              currentContact.last_name.slice(1).toLowerCase()}
          </div>
        )}
      </div>

      <div className={styles.work}>
        {currentContact.occupation === "" ? (
          <div className={styles.add}>+ Job</div>
        ) : (
          <div className="mr-1">{currentContact.occupation}</div>
        )}

        {currentContact.occupation === "" && currentContact.company === ""
          ? null
          : " @ "}
        {currentContact.company === "" ? (
          <div className={styles.add}>+ Company</div>
        ) : (
          <div className="ml-1">{currentContact.company}</div>
        )}
      </div>

      <div className={styles.relationship}>
        {currentContact.relationship === "" ? (
          <div className={styles.add}>+ Relationship</div>
        ) : (
          <div>{currentContact.relationship.toLowerCase()}</div>
        )}
      </div>

      <div className={styles.tags}>
        {contactTags.length !== 0 ? (
          <>{contactTags}</>
        ) : (
          <div className={styles.add}>+ Tags</div>
        )}
      </div>

      <div className={styles.phone_numbers}>
        {contactPhones.length !== 0 ? (
          <>{contactPhones}</>
        ) : (
          <div className={styles.add}>+ Phone Numbers</div>
        )}
      </div>

      <div className={styles.emails}>
        {currentContact.email === "" ? (
          <div className={styles.add}>+ Email</div>
        ) : (
          <div className="ml-1">{currentContact.email}</div>
        )}
      </div>

      <div className={styles.socials}>
        {contactSocials.length !== 0 ? (
          <>{contactSocials}</>
        ) : (
          <div className={styles.add}>+ Social Media</div>
        )}
      </div>

      {isEditing ? <div>{saveButton}</div> : editButton}
    </div>
  );

  return (
    <>
      {isEditing ? (
        <UpdateContactForm
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>{detailRender}</>
      )}
    </>
  );
}
