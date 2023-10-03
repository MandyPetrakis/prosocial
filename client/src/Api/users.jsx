import api from "./api";
import { useRequestProcessor } from "../requestProcessor";
import { useState } from "react";

export function CurrentUser() {
  const { query } = useRequestProcessor();

  const user = query(
    "user",
    api.get("/me").then((r) => r.data)
  );

  if (isLoading) return "loading";
  if (isError) return <p>Error :</p>;
  return user;
}

export const logUserIn = (userDetails) => {
  const { mutate } = useRequestProcessor();

  mutate("logUserIn", (user) =>
    api.post("/login", { userDetails }).then((res) => res.data)
  );
};
