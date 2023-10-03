import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp.Jsx";
import { useState } from "react";

export default function Authentication({ setIsUserValid }) {
  const [isReturningUser, setIsReturningUser] = useState(false);

  const logo = (
    <h1 className="inline-block font-medium text-9xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple via-teal to-darkBlue">
      Prosocial
    </h1>
  );

  return (
    <div className="grid place-items-center">
      {logo}
      <div className="grid place-items-center">
        {isReturningUser ? (
          <LogIn
            setIsReturningUser={setIsReturningUser}
            setIsUserValid={setIsUserValid}
          />
        ) : (
          <SignUp setIsReturningUser={setIsReturningUser} />
        )}
      </div>
    </div>
  );
}
