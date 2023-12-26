import { useLoaderData } from "react-router-dom";
import { useUser } from "../Store/userStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCommunities } from "../Store/communityStore";
import { useContacts } from "../Store/contactsStore";
import { useRequestProcessor } from "../requestProcessor";

export const communityLoader = async ({ params }) => {
  const response = await fetch(`/api/tags/${params.community_id}`);
  if (!response.ok) {
    throw new Error("Unauthorized");
  }
  return response.json();
};

export default function Community() {
  const data = useLoaderData();
  const [community, setCommunity] = useState(data);
  const [communityContacts, setCommunityContacts] = useState(
    community.contacts
  );
  const contacts = useContacts((state) => state.contacts);
  const [description, setDescription] = useState(community.description);
  const contactsTags = useUser((state) => state.user.contacts_tags);
  const [communityCTS, setCommunityCTS] = useState(contactsTags);
  const user = useUser((state) => state.user);
  const [addedContact, setAddedContact] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [moreOption, setMoreOptions] = useState(false);
  const setCommunities = useCommunities((state) => state.setCommunities);
  const { mutate } = useRequestProcessor();
  let navigate = useNavigate();

  const contactRouteChange = (contact) => {
    let path = `/contact/${contact.id}`;
    navigate(path);
  };

  const communityRouteChange = () => {
    let path = `/communities`;
    navigate(path);
  };

  const updateCommunityMutation = mutate(
    ["updateCommunity"],
    async () => {
      const updatedCommunity = {
        description: description,
        id: community.id,
      };

      const response = await fetch(`/api/tags/${community.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCommunity),
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        setCommunity(data);
        setIsEditing(false);
        setMoreOptions(false);
      },
    }
  );

  const deleteCommunityMutation = mutate(
    ["deleteCommunity"],
    async () => {
      const response = await fetch(`/api/tags/${community.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        communityRouteChange();
        setCommunities(data);
      },
    }
  );

  function handleSave(e) {
    e.preventDefault;
    updateCommunityMutation.mutate();
  }

  function handleDelete() {
    deleteCommunityMutation.mutate();
  }

  const saveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer"
      onClick={(e) => handleSave(e)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
      />
    </svg>
  );

  const cancelIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={() => {
        setIsEditing(false);
        setMoreOptions(false);
      }}
      className="w-6 h-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const editIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={() => setIsEditing(true)}
      className="w-6 h-6 invisible group-hover:visible cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );

  const moreOptionsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={() => setMoreOptions(!moreOption)}
      className="w-6 h-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );

  const descriptionInput = (
    <form onSubmit={(e) => handleSave(e)}>
      <input
        type="text"
        value={description}
        className="bg-transparent font-bold outline-1 px-2 py-1 text-3xl mb-3"
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );

  const deleteButton = (
    <button onClick={handleDelete} className="cursor-pointer text-red-500">
      Delete Community
    </button>
  );

  const communityDetails = (
    <>
      <div className="group flex justify-between">
        {isEditing ? (
          <div className="flex">
            {descriptionInput} {moreOptionsIcon}
          </div>
        ) : (
          <div className="font-bold text-3xl mb-3">{community.description}</div>
        )}
        {moreOption ? deleteButton : null}
        {isEditing ? (
          <div className="flex">
            {saveIcon}
            {cancelIcon}
          </div>
        ) : (
          editIcon
        )}
      </div>
      <span className="block">Community size: {community.contacts.length}</span>
    </>
  );

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
        setCommunityContacts(data.contacts);
      },
    }
  );

  function handleContactDelete(c) {
    deleteContactTagMutation.mutate(c);
  }

  const communityMembers = communityContacts.map((c) => {
    const contactTag = communityCTS.find(
      ({ contact_id, tag_id }) => contact_id === c.id && tag_id === community.id
    );
    return (
      <div
        key={c.id}
        className="border-2 px-2 group py-1 rounded-md border-darkBlue mr-1 mb-1 whitespace-nowrap cursor-pointer flex justify-between"
      >
        <div
          className="w-full"
          onClick={() => contactRouteChange(c)}
          key={c.id}
        >
          {c.first_name.charAt(0).toUpperCase() +
            c.first_name.slice(1).toLowerCase()}{" "}
          {c.last_name.charAt(0).toUpperCase() +
            c.last_name.slice(1).toLowerCase()}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => handleContactDelete(contactTag)}
          className="w-6 h-6 cursor-pointer text-red-500 invisible group-hover:visible"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    );
  });

  const nonMemebers = contacts.filter((c) => {
    return !communityContacts.some((cc) => {
      return cc.id === c.id;
    });
  });

  const createContactTagMutation = mutate(
    ["newContactTag"],
    async () => {
      const contactTag = {
        tag_id: community.id,
        contact_id: addedContact,
        user_id: user.id,
      };

      const response = await fetch(`/api/contacts_tags/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactTag),
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        const updatedContactTags = [...communityCTS, data];
        setCommunityCTS(updatedContactTags);
        const addedContact = contacts.find((c) => c.id === data.contact_id);
        const updatedContacts = [...communityContacts, addedContact];
        setCommunityContacts(updatedContacts);
      },
    }
  );

  function handleAdd() {
    createContactTagMutation.mutate();
  }

  const options = nonMemebers.map((m) => {
    return (
      <option key={m.id} value={m.id}>
        {m.first_name} {m.last_name}
      </option>
    );
  });

  const addMember = (
    <>
      <select
        onChange={(e) => setAddedContact(e.target.value)}
        className="border-2 px-2 py-1 rounded-md border-darkBlue mr-2 mb-1 whitespace-nowrap cursor-pointer bg-teal"
      >
        <option defaultValue>Add Member</option>
        {options}
      </select>
      <button className="font-bold text-2xl" onClick={handleAdd}>
        +
      </button>
    </>
  );

  return (
    <div className="max-w-xl m-auto">
      {communityDetails}
      {communityMembers}
      {addMember}
    </div>
  );
}
