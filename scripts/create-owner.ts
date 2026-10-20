import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const email = process.env.PAYLOAD_OWNER_EMAIL?.trim().toLowerCase();
const password = process.env.PAYLOAD_OWNER_INITIAL_PASSWORD;

if (!email || !password || password.length < 12) {
    throw new Error(
        "Set PAYLOAD_OWNER_EMAIL and PAYLOAD_OWNER_INITIAL_PASSWORD (at least 12 characters).",
    );
}

const [{ getPayload }, { default: config }] = await Promise.all([
    import("payload"),
    import("@payload-config"),
]);

const payload = await getPayload({ config });

try {
    const existingOwner = await payload.find({
        collection: "users",
        where: { email: { equals: email } },
        limit: 1,
        overrideAccess: true,
    });

    if (existingOwner.docs.length > 0) {
        throw new Error(`An account already exists for ${email}. No account was created.`);
    }

    await payload.create({
        collection: "users",
        data: { email, password },
        context: { ownerBootstrap: true },
        overrideAccess: true,
    });

    console.info(`Payload owner account created for ${email}.`);
} finally {
    await payload.destroy();
}
