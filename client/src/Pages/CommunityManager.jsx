import { useCommunities } from "../Store/communityStore";
import { useState } from "react";

export default function CommunityManager() {
  const communities = useCommunities((state) => state.communities);
  console.log(communities);

  const communityEditor = communities
    .sort((a, b) => {
      if (a.description.toLowerCase() < b.description.toLowerCase()) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    })
    .map((c) => {
      const [isEditing, setIsEditing] = useState(false);
      const [description, setDescription] = useState(c.description);

      return (
        <div>
          <input className="bg-inherit" type="text" value={description} />
        </div>
      );
    });

  return <>{communityEditor}</>;
}
