import type { CollectionConfig } from "payload";
import { isOwner } from "@/access/isOwner";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "updatedAt"],
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
      name: "summary",
      type: "textarea",
      localized: true,
    },
    {
      name: "date",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
  ],
};