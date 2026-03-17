import connectDB from "../config/db.js";
import MenuItem from "../models/MenuItem.js";
import menuItems from "./menuItems.js";

const seedDatabase = async () => {
  try {
    await connectDB();

    await MenuItem.deleteMany();
    await MenuItem.insertMany(menuItems);

    console.log(`Seeded ${menuItems.length} menu items.`);
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();
