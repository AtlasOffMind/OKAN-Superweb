export function isOwner({ req }: { req: { user?: { email?: string } | null } }) {
    const ownerEmail = process.env.PAYLOAD_OWNER_EMAIL?.trim().toLowerCase();
    const userEmail = req.user?.email?.trim().toLowerCase();

    return Boolean(ownerEmail && userEmail && userEmail === ownerEmail);
}
