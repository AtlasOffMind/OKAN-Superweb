import type { CollectionConfig } from "payload";
import { isOwner } from "@/access/isOwner";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  hooks: {
    beforeLogin: [
      ({ user }) => {
        const ownerEmail = process.env.PAYLOAD_OWNER_EMAIL?.trim().toLowerCase();
        if (!ownerEmail || user.email.trim().toLowerCase() !== ownerEmail) {
          throw new Error("This account is not authorized to access the admin panel.");
        }
        return user;
      },
    ],
    beforeOperation: [
      ({ args, context, operation }) => {
        if (operation !== "create") return args;

        if (context.ownerBootstrap !== true) {
          throw new Error("Public account creation is disabled.");
        }

        const ownerEmail = process.env.PAYLOAD_OWNER_EMAIL?.trim().toLowerCase();
        const submittedEmail = String(args.data?.email ?? "").trim().toLowerCase();
        if (!ownerEmail || submittedEmail !== ownerEmail) {
          throw new Error("Only the configured owner account can be created.");
        }
        return args;
      },
    ],
  },
  access: {
    admin: isOwner,
    create: isOwner,
    read: isOwner,
    update: isOwner,
    delete: isOwner,
  },
  fields: [],
};