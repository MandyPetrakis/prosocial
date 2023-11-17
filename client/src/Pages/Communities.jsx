import GroupContacts from "../Components/GroupContacts";
import { useUser } from "../Store/userStore";
import { useNavigate } from "react-router-dom";
import { useCommunities } from "../Store/communityStore";

export default function Communities() {
  const communities = useCommunities((state) => state.communities);
  const navigate = useNavigate();

  const communityRender = communities.map((c) => {
    return (
      <div className="mb-5">
        <div className="font-bold mb-3">{c.description}</div>
        <GroupContacts description={c.description} />
      </div>
    );
  });

  return (
    <div>
      {communityRender}
      <div
        onClick={() => navigate("/community_manager")}
        className="fixed bottom-13 right-13 bg-purple rounded-md px-2 py-1 text-white font-bold cursor-pointer"
      >
        Manage Communities
      </div>
    </div>
  );
}
