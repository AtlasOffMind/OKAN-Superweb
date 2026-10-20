import type { CollectionConfig } from "payload";
import { isOwner } from "@/access/isOwner";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: isOwner,
    update: isOwner,
    delete: isOwner,
  },
  upload: true,
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};