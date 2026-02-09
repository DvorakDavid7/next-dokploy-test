import 'dotenv/config';
import { db, usersTable } from './schema';

async function seed() {
    console.log('Seeding database...');

    await db.insert(usersTable).values([
        {
            name: "John Doe",
            age: 30,
            email: "john.doe@example.com",
        },
        {
            name: "Jane Smith",
            age: 25,
            email: "jane.smith@example.com",
        },
    ]).onConflictDoNothing();

    console.log('Seeding completed!');
    process.exit(0);
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
