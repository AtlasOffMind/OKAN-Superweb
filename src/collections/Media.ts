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
  upload: process.env.PAYLOAD_MEDIA_DIR
    ? { staticDir: process.env.PAYLOAD_MEDIA_DIR }
    : true,
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};