import { useRequestProcessor } from "../requestProcessor";
import { useUser } from "../Store/userStore";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { mutate } = useRequestProcessor();
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const logOutMutation = mutate(
    ["currentUser"],
    async () => {
      const response = await fetch("/api/logout", {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      onSuccess: () => {
        routeChange(), setUser("");
      },
    }
  );

  const userDetails = (
    <>
      <div className="font-bold mb-5">
        {user.first_name} {user.last_name}
      </div>
      <div>{user.phone_number}</div>
      <div className="mb-5">{user.email}</div>
      <div>Contacts: {user.contacts.length}</div>
      <div>Communities: {user.tags.length}</div>
    </>
  );

  const logOutButton = (
    <button
      className="bg-teal px-2 py1 rounded-md border-2 mt-10 border-darkBlue"
      onClick={() => logOutMutation.mutate()}
    >
      Log Out
    </button>
  );

  return (
    <div>
      {userDetails}
      {logOutButton}
    </div>
  );
}
