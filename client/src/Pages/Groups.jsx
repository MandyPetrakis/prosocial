import GroupContacts from "../Components/GroupContacts";
import { useUser } from "../Store/userStore";
import { useNavigate } from "react-router-dom";

function GroupHeaders({ group }) {
  const tagList = useUser((state) => state.user.tag_list);

  let navigate = useNavigate();

  const routeChange = (id) => {
    let path = `/groups/${id}`;
    navigate(path);
  };

  const groupDescriptions = tagList
    .filter((tag) => tag.tag_type === group)
    .map((type) => (
      <div
        onClick={() => routeChange(`${type.id}`)}
        key={type.id}
        className="mb-5 cursor-pointer"
      >
        <span className="font-bold"> {type.description}</span>
        <GroupContacts description={type.description} />
      </div>
    ));

  return (
    <div className="mb-5">
      <div>{group}</div>
      {groupDescriptions}
    </div>
  );
}

export default function Groups() {
  const tagTypes = useUser((state) => state.user.tag_types);

  const groupRender = tagTypes.map((type) => <GroupHeaders group={type} />);

  return <div>{groupRender}</div>;
}
