export default function ContactSummaryCard({ contact }) {
  return (
    <div className="border-2 border-purple rounded-md p-3 w-1/3 mx-2.5">
      <div>Amanda Petrakis</div>
      <div>Software Developer</div>
      <div>Last Interaction: 9/9/23 (2 weeks)</div>
      <div>
        Notes
        <div>Heading</div>
        <div className="h-40 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur
        </div>
      </div>
    </div>
  );
}
