import 'dotenv/config';

async function seed() {
    console.log('Seeding database...');
    console.log('Seeding completed!');
    process.exit(0);
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
