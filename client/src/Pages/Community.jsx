import { useLoaderData } from "react-router-dom";
import { useUser } from "../Store/userStore";
import { useState } from "react";
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
  const user = useUser((state) => state.user);
  const [addedContact, setAddedContact] = useState();
  const { mutate } = useRequestProcessor();

  const communityDetails = (
    <div>
      <span className="font-bold text-3xl mb-3">{community.description}</span>
      <span className="block">Community size: {community.contacts.length}</span>
    </div>
  );

  const communityMembers = community.contacts.map((c) => {
    return (
      <div
        key={c.id}
        className="border-2 px-2 py-1 rounded-md border-darkBlue mr-1 mb-1 whitespace-nowrap cursor-pointer flex justify-between"
      >
        {c.first_name.charAt(0).toUpperCase() +
          c.first_name.slice(1).toLowerCase()}{" "}
        {c.last_name.charAt(0).toUpperCase() +
          c.last_name.slice(1).toLowerCase()}
      </div>
    );
  });

  const nonMemebers = user.contacts.filter((c) => {
    return !community.contacts.some((cc) => {
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
        setCommunity(data);
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
    <div>
      {communityDetails}
      {communityMembers}
      {addMember}
    </div>
  );
}
