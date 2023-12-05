import { useState } from "react";
import { useUser } from "../Store/userStore";
import { useContacts } from "../Store/contactsStore";

import { useRequestProcessor } from "../requestProcessor";

export default function LogIn({ setIsReturningUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const { mutate } = useRequestProcessor();
  const setUser = useUser((state) => state.setUser);
  const setContacts = useContacts((state) => state.setContacts);

  const currentUserMutation = mutate(["currentUser"], () => {
    const user = { email: email, password: password };

    const response = fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      setErrors("Invalid email or password");
      throw new Error("Unauthorized");
    }
    return response.json();
  });

  function handleLogIn(e) {
    e.preventDefault();
    currentUserMutation.mutate();
    if (currentUserMutation.isSuccess) {
      setEmail("");
      setPassword("");
      setUser(currentUserMutation.data);
    }
  }

  const header = (
    <h2 className="text-lg font-medium mb-5">Welcome back to your network.</h2>
  );

  const fieldStyle = "relative pt-5 mb-2 ";
  const inputStyle =
    "border-[1px] border-teal shadow-md rounded-md h-10 w-64 px-3 placeholder-opacity-100 outline-none focus:outline-none focus:placeholder-transparent peer transition-all duration-1000 ease-in-out ";
  const labelStyle =
    "block absolute pointer-events-none top-[0] left-[0] peer-placeholder-shown:top-28  peer-placeholder-shown:left-13 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 peer-focus:top-[0] peer-focus:left-[0] [transition:top_0.25s_ease-in-out,_left_0.25s_ease-in-out,_opacity_0.25s_ease-in-out]";

  const logInForm = (
    <form onSubmit={handleLogIn} className="grid place-items-center">
      <div className={fieldStyle}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email" className={labelStyle}>
          Email
        </label>
      </div>
      <div className={fieldStyle}>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password" className={labelStyle}>
          Password
        </label>
      </div>
      {errors ? <div className="text-red-500">*{errors}</div> : null}

      <div
        className="cursor-pointer rounded-md mt-4 shadow-md bg-darkBlue text-white px-2 py-1 w-1/3 text-center font-semibold hover:shadow-lg hover:bg-gradient-to-r from-purple to-darkBlue"
        onClick={handleLogIn}
      >
        Submit
      </div>
    </form>
  );

  const signUp = (
    <div
      className="cursor-pointer underline underline-offset-2 decoration-1 text-teal hover:text-darkBlue"
      onClick={() => setIsReturningUser(false)}
    >
      New here? Sign up.
    </div>
  );

  return (
    <>
      {header}
      <div className="bg-grey shadow-lg flex place-content-center w-fit px-10 pt-5 pb-10 rounded-md mb-10">
        {logInForm}
      </div>
      {signUp}
    </>
  );
}
