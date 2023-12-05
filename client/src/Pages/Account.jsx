import { useRequestProcessor } from "../requestProcessor";
import { useUser } from "../Store/userStore";

export default function Account() {
  const { mutate } = useRequestProcessor();
  const user = useUser((state) => state.user);

  const logOutMutation = mutate(["currentUser"], async () => {
    const response = await fetch("/api/logout", {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Unauthorized");
    }
    return response;
  });

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
