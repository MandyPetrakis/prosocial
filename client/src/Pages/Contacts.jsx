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

  return (
    <>
      {searchBar}
      <div className="flex">
        {contactList}
        {currentContactDisplay}
      </div>
    </>
  );
}
