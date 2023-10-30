import { useUser } from "../Store/userStore";

export default function GroupContacts({ description }) {
  const contacts = useUser((state) => state.user.contacts);

  const descriptionContacts = contacts
    .filter((c) => c.tags.some((tag) => tag.description === description))
    .map((c) => (
      <div
        key={c.id}
        className="border-2 px-2 py-1 rounded-md border-darkBlue mr-1 mb-1 whitespace-nowrap cursor-pointer"
      >
        {c.first_name} {c.last_name}
      </div>
    ));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {descriptionContacts}
    </div>
  );
}
