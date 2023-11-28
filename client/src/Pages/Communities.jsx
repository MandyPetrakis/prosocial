import { useCommunities } from "../Store/communityStore";
import CommunityBlock from "../Components/CommunityBlock";

export default function Communities() {
  const communities = useCommunities((state) => state.communities);

  const communityRender = communities.map((c) => {
    return <CommunityBlock community={c} key={c.id} />;
  });

  return <div>{communityRender}</div>;
}
