import GroupContacts from "./GroupContacts";
import { useState } from "react";
import { useCommunities } from "../Store/communityStore";
import { useRequestProcessor } from "../requestProcessor";
import { useNavigate } from "react-router-dom";

export default function CommunityBlock({ community }) {
  const [isEditing, setIsEditing] = useState(false);
  const [moreOption, setMoreOptions] = useState(false);
  const [description, setDescription] = useState(community.description);
  const { mutate } = useRequestProcessor();
  const setCommunities = useCommunities((state) => state.setCommunities);
  const communities = useCommunities((state) => state.communities);
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/community/${community.id}`;
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
        setIsEditing(false);
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
      return response;
    },
    {
      onSuccess: () => {
        const updatedCommunities = communities.filter(
          (c) => c.id !== community.id
        );
        setCommunities(updatedCommunities);
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
      onClick={() => setIsEditing(false)}
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
        className="bg-transparent font-bold outline-1 px-2 py-1"
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );

  const deleteButton = (
    <button onClick={handleDelete} className="cursor-pointer text-red-500">
      Delete Community
    </button>
  );

  return (
    <div key={community.id} className="mb-5 group">
      <div className="font-bold mb-3 flex justify-between">
        {isEditing ? (
          <div className="flex">
            {descriptionInput} {moreOptionsIcon}
          </div>
        ) : (
          <div onClick={() => routeChange()}>{community.description}</div>
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
      <GroupContacts community={community} isEditing={isEditing} />
    </div>
  );
}
