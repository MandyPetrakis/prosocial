import { useCommunities } from "../Store/communityStore";
import { useNavigate } from "react-router-dom";

export default function Communities() {
  const communities = useCommunities((state) => state.communities);
  let navigate = useNavigate();

  const contactRouteChange = (c) => {
    let path = `/community/${c.id}`;
    navigate(path);
  };

  const communityRender = communities.map((c) => {
    return (
      <div
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

  return <div>{communityRender}</div>;
}
