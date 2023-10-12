// import { useRequestProcessor } from "../requestProcessor";
// import { useContacts } from "../Store/userStore";

// export function useFetch() {
//   const { query } = useRequestProcessor();
//   const setContacts = useContacts((state) => state.setContacts);

//   function useFetchContacts() {
//     useEffect(() => {
//       const contactsQuery = query(["contacts"], async () => {
//         const response = await fetch("/api/contacts");
//         if (!response.ok) {
//           throw new Error("Unauthorized");
//         }
//         return response.json();
//       });
//       if (!contactsQuery.isSuccess) {
//         return "making connections";
//       }
//       setContacts(contactsQuery.data);
//     }, []);
//   }

//   return { useFetchContacts };
// }
