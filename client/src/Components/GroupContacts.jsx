import { useUser } from "../Store/userStore";

export default function GroupContacts({ description }) {
  const contacts = useUser((state) => state.user.contacts);

  const groupContacts = contacts
    .filter((c) => c.uniq_tags.some((tag) => tag.description === description))
    .map((c) => (
      <div
        key={c.id}
        className="border-2 px-2 py-1 rounded-md border-darkBlue mr-1 mb-1 whitespace-nowrap cursor-pointer"
      >
        {c.first_name.charAt(0).toUpperCase() +
          c.first_name.slice(1).toLowerCase()}{" "}
        {c.last_name.charAt(0).toUpperCase() +
          c.last_name.slice(1).toLowerCase()}
      </div>
    ));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {groupContacts}
    </div>
  );
}
