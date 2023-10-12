import { useState, useEffect } from "react";
import { useCurrentUser } from "../Store/userStore";
import { useRequestProcessor } from "../requestProcessor";

export default function Contacts() {
  const { query } = useRequestProcessor();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentContact, setCurrentContact] = useState();
  const contacts = useCurrentUser((state) => state.contacts);

  const contactCards = contacts.map((c) => {
    return (
      <div
        key={c.id}
        className="cursor-pointer whitespace-nowrap border-teal border-2 rounded-md p-2 mb-2.5 min-w-fit"
      >
        {c.first_name + " " + c.last_name}
      </div>
    );
  });

  const searchBar = (
    <input
      className="border-2 border-darkBlue bg-transparent rounded-md px-2 py-1 focus:outline-none"
      type="search"
      value={searchQuery}
      placeholder="search"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
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
        <div className="m-2.5 w-1/4 min-w-fit">{contactCards}</div>
        {currentContactDisplay}
      </div>
    </>
  );
}
