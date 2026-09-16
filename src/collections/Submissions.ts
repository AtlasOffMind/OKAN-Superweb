import type { CollectionConfig } from "payload";

export const Submissions: CollectionConfig = {
  slug: "submissions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "createdAt"],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "gender",
      type: "select",
      required: true,
      options: [
        { label: "Masculino", value: "male" },
        { label: "Femenino", value: "female" },
        { label: "Otro", value: "other" },
      ],
    },
    {
      name: "interest",
      type: "select",
      required: true,
      options: [
        { label: "Actuación", value: "acting" },
        { label: "Danza contemporánea", value: "dance" },
        { label: "Estudios continuos", value: "continuingEd" },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
};