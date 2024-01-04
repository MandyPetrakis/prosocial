import { useState } from "react";
import { useCommunities } from "../Store/communityStore";
import { useNavigate } from "react-router-dom";
import { useRequestProcessor } from "../requestProcessor";

export default function Communities() {
  const communities = useCommunities((state) => state.communities);
  const setCommunities = useCommunities((state) => state.setCommunities);
  const [community, setCommmunity] = useState("");
  const [errors, setErrors] = useState("");
  const [added, setAdded] = useState(false);
  const { mutate } = useRequestProcessor();

  let navigate = useNavigate();

  const contactRouteChange = (c) => {
    let path = `/community/${c.id}`;
    navigate(path);
  };

  const addCommunityMutation = mutate(
    ["community"],
    async () => {
      const newCommunity = {
        description: community,
      };
      const response = await fetch("/api/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommunity),
      });
      if (!response.ok) {
        response.json().then((data) => {
          console.log(data.errors);
          setErrors(data.errors);
        });
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        setCommunities(data);
        setCommmunity("");
        setAdded(true);
      },
    }
  );

  function handleAddCommunity(e) {
    e.preventDefault();
    addCommunityMutation.mutate();
  }

  const addCommunity = (
    <form className="" onSubmit={(e) => handleAddCommunity(e)}>
      <label className="block">Add Community</label>
      <input
        value={community}
        onChange={(e) => setCommmunity(e.target.value)}
        className="mr-5 rounded-md p-1"
        type="text"
      />
      <button
        onClick={(e) => handleAddCommunity(e)}
        className="text-2xl font-bold"
        type="submit"
      >
        +
      </button>
    </form>
  );

  const communityRender = communities.map((c) => {
    return (
      <div
        key={c.id}
        onClick={() => contactRouteChange(c)}
        className="font-bold text-3xl mb-5 cursor-pointer group flex justify-between"
      >
        {c.description}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 place-self-center invisible group-hover:visible"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    );
  });

  return (
    <div>
      {addCommunity}
      {errors ? <div className="text-red-500 mb-5">*{errors}</div> : null}
      {added ? (
        <div className="text-gray-400 mb-5">
          Community created successfully.
        </div>
      ) : null}
      {communityRender}
    </div>
  );
}
