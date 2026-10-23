import type { CollectionConfig } from "payload";
import { isOwner } from "@/access/isOwner";

export const Submissions: CollectionConfig = {
  slug: "submissions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "createdAt"],
  },
  access: {
    create: () => false,
    read: isOwner,
    update: isOwner,
    delete: isOwner,
  },
  fields: [
    {
      name: "completedHighSchool",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
    {
      name: "parentalPermission",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
    {
      name: "privacyConsent",
      type: "checkbox",
      required: true,
      defaultValue: false,
      admin: { position: "sidebar" },
    },
    {
      name: "privacyNoticeVersion",
      type: "text",
      required: true,
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "consentedAt",
      type: "date",
      required: true,
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "age",
      type: "number",
      required: true,
      min: 17,
      max: 120,
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
      name: "admissionDate",
      type: "select",
      options: [
        { label: "Enero 2027", value: "january-2027" },
        { label: "Septiembre 2027", value: "september-2027" },
        { label: "Enero 2028", value: "january-2028" },
        { label: "Estoy pensándolo", value: "considering" },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
};
