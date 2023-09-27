import ContactSummaryCard from "../Components/ContactSummaryCard";

export default function Dashboard() {
  const focusStatement = (
    <div className="border-2 border-teal p-3 rounded-md w-1/4 mr-5">
      <h2 className="text-darkBlue font-extrabold">Focus</h2>
      <div>Grow my tech network and expand my girl friend group.</div>
    </div>
  );

  const dashboardReminders = (
    <div className=" p-3 border-2 w-3/4 border-teal rounded-md mr-5">
      <h2 className="text-darkBlue font-extrabold">Coming Up</h2>
      <div>Date: Reminder @location</div>
      <div>Date: Reminder @location</div>
      <div>Date: Reminder</div>
    </div>
  );

  const dashboardContacts = (
    <div className="flex">
      <ContactSummaryCard />
      <ContactSummaryCard />
      <ContactSummaryCard />
    </div>
  );
  const dashboardReports = (
    <div className="border-2 border-darkBlue rounded-md w-1/4 p-3">
      You had 13 interactions and added 4 new connections last week.
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
      <div className="flex mb-5">
        {focusStatement}
        {dashboardReminders}
        {dashboardReports}
      </div>
      {dashboardContacts}
      {newNoteButton}
    </>
  );
}
