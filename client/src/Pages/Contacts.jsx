import { useState } from "react";

export default function Contacts() {
  const [query, setQuery] = useState("");

  const searchBar = (
    <input
      className="border-2 border-darkBlue bg-transparent rounded-md px-2 py-1 focus:outline-none"
      type="search"
      value={query}
      placeholder="search"
      onChange={(e) => setQuery(e.target.value)}
    />
  );

  const contactList = (
    <div className="m-2.5 w-1/4">
      <div className="cursor-pointer border-teal border-2 rounded-md p-2 mb-2.5">
        Amanda Petrakis
      </div>
      <div className="cursor-pointer border-teal border-2 rounded-md p-2 mb-2.5">
        Amanda Petrakis
      </div>{" "}
      <div className="cursor-pointer border-teal border-2 rounded-md p-2 mb-2.5">
        Amanda Petrakis
      </div>
    </div>
  );

  const currentContactDisplay = (
    <div className="m-2.5 w-3/4">
      <div>First Last</div>
      <div>Occupation</div>
      <div>Company</div>
      <div>Relationship</div>
      <div>Tags</div>
      <div>Last contact</div>
      <div>Notes</div>
      <div>Connections</div>
    </div>
  );

  const newNoteButton = (
    <div className="absolute bottom-10 left-10 group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-14 h-14 group-hover:text-purple"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );

  return (
    <>
      {searchBar}
      <div className="flex">
        {contactList}
        {currentContactDisplay}
        {newNoteButton}
      </div>
    </>
  );
}
