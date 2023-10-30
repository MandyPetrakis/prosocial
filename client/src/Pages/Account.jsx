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

  return <div onClick={() => logOutMutation.mutate()}>Log Out</div>;
}
