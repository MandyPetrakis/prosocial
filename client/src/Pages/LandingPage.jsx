import Authentication from "./Authentication";
import { useState } from "react";

export default function LandingPage() {
  const [onLanding, setOnLanding] = useState(true);

  const landing = (
    <div className="flex place-items-center p-10 w-screen h-screen bg-cyan-100">
      <div className="flex flex-col place-items-center w-1/2 mr-3 font-medium text-darkBlue">
        <div className="text-md text-nowrap">Store your contacts and</div>
        <h2 className="text-md text-nowrap">visualize your communities with</h2>
        <h1 className="inline-block lg:font-medium font-bold lg:text-8xl md:text-7xl text-6xl my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple via-teal to-darkBlue">
          Prosocial
        </h1>
        <h3 className="text-md text-nowrap">because being antisocial</h3>
        <h3 className="text-md text-nowrap mb-5">was so 2020.</h3>
        <div
          onClick={() => setOnLanding(false)}
          className="text-nowrap cursor-pointer rounded-md shadow-md bg-darkBlue text-white px-4 py-2 text-center font-semibold hover:shadow-lg hover:bg-gradient-to-r from-purple to-darkBlue"
        >
          Start now
        </div>
      </div>
      <img
        className="max-h-full w-1/2 shadow-lg rounded-md"
        src="../public/image.jpg"
      />
    </div>
  );

  return <>{onLanding ? landing : <Authentication />}</>;
}
