import { useUser } from "../Store/userStore";
import { useContacts } from "../Store/contactsStore";
import { useNavigate } from "react-router-dom";
import { useRequestProcessor } from "../requestProcessor";

export default function GroupContacts({ community, isEditing }) {
  const contacts = useContacts((state) => state.contacts);
  const setContacts = useContacts((state) => state.setContacts);
  const contactsTags = useUser((state) => state.user.contacts_tags);
  const { mutate } = useRequestProcessor();
  let navigate = useNavigate();

  const routeChange = (contact) => {
    let path = `/contact/${contact.id}`;
    navigate(path);
  };

  const deleteContactTagMutation = mutate(
    ["contactTag"],
    async (contactTag) => {
      const response = await fetch(`/api/contacts_tags/${contactTag.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        setContacts(data);
      },
    }
  );

  function handleDelete(c) {
    deleteContactTagMutation.mutate(c);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {contacts
        .filter((c) =>
          c.uniq_tags.some((tag) => tag.description === community.description)
        )
        .map((c) => {
          const tag = c.uniq_tags.find(
            (t) => t.description === community.description
          );

          const contactTag = contactsTags.find(
            ({ contact_id, tag_id }) => contact_id === c.id && tag_id === tag.id
          );

          return (
            <div
              onClick={isEditing ? null : () => routeChange(c)}
              key={c.id}
              className="border-2 px-2 py-1 rounded-md border-darkBlue mr-1 mb-1 whitespace-nowrap cursor-pointer flex justify-between"
            >
              <div>
                {c.first_name.charAt(0).toUpperCase() +
                  c.first_name.slice(1).toLowerCase()}{" "}
                {c.last_name.charAt(0).toUpperCase() +
                  c.last_name.slice(1).toLowerCase()}
              </div>
              {isEditing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => handleDelete(contactTag)}
                  className="w-6 h-6 cursor-pointer text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}
