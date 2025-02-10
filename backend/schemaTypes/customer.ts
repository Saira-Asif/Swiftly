import { defineType } from "sanity";

export const Customer = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "address", title: "Address", type: "text" },
    { 
      name: "userId", 
      title: "User ID", 
      type: "string", 
      description: "Clerk user ID" 
    },
    { 
      name: "precinct", 
      title: "Precinct", 
      type: "string", 
      description: "User's selected precinct"
    },
    { 
      name: "orders", 
      title: "Orders", 
      type: "array", 
      of: [{ type: "reference", to: [{ type: "order" }] }],
      description: "References to user's orders"
    },
  ],
});
