import type { CollectionConfig } from "payload";
import { isOwner } from "@/access/isOwner";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "startDate", "updatedAt"],
  },
  access: {
    create: isOwner,
    read: () => true,
    update: isOwner,
    delete: isOwner,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "location",
      type: "text",
      localized: true,
    },
    {
      name: "startDate",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
  ],
};