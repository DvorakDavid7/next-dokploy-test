import { db, usersTable } from "@/lib/schema";

export async function GET() {
    const users = await db.select()
        .from(usersTable)

    return new Response(JSON.stringify(users));
}
