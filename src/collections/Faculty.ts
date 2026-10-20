import type { CollectionConfig } from "payload";
import { isOwner } from "@/access/isOwner";

export const Faculty: CollectionConfig = {
  slug: "faculty",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "updatedAt"],
  },
  access: {
    create: isOwner,
    read: () => true,
    update: isOwner,
    delete: isOwner,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      localized: true,
    },
    {
      name: "bio",
      type: "textarea",
      localized: true,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
};