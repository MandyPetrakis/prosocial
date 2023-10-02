import { useState } from "react";

export default function LogIn({ setIsReturningUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const header = (
    <h2 className="text-lg font-medium mb-5">Welcome back to your network.</h2>
  );

  const fieldStyle = "relative pt-5 mb-2 ";
  const inputStyle =
    "border-[1px] border-teal shadow-md rounded-md h-10 w-64 px-3 placeholder-opacity-100 outline-none focus:outline-none focus:placeholder-transparent peer transition-all duration-1000 ease-in-out ";
  const labelStyle =
    "block absolute pointer-events-none top-[0] left-[0] peer-placeholder-shown:top-28  peer-placeholder-shown:left-13 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 peer-focus:top-[0] peer-focus:left-[0] [transition:top_0.25s_ease-in-out,_left_0.25s_ease-in-out,_opacity_0.25s_ease-in-out]";

  const logInForm = (
    <form className="grid place-items-center">
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
      <div
        className="cursor-pointer rounded-md mt-4 shadow-md bg-darkBlue text-white px-2 py-1 w-1/3 text-center font-semibold hover:shadow-lg hover:bg-gradient-to-r from-purple to-darkBlue"
        type="submit"
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
      <div className="bg-indigo-50 shadow-lg flex place-content-center w-fit px-10 pt-5 pb-10 rounded-md mb-10">
        {logInForm}
      </div>
      {signUp}
    </>
  );
}
