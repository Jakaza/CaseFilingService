import Officer from "../models/officerSchema.js";
import chalk from "chalk";
import bcrypt from "bcrypt";

export async function seedDB() {
  console.log(`${chalk.blue("✓")} ${chalk.blue("Seeding database started")}`);

  try {
    // Check if an admin exists
    const admin = await Officer.findOne({ role: "admin" });

    if (admin) {
      console.log(`${chalk.yellow("✓")} Admin already exists, removing...`);
      await Officer.deleteOne({ _id: admin._id });
    }

    // Hash the password
    const saltRounds = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, saltRounds);

    // Define new admin user with required fields
    const newAdmin = new Officer({
      firstname: "Admin",
      surname: "User",
      email: process.env.ADMIN_EMAIL,
      phone: "0000000000",
      rank: "Administrator",
      badgeNumber: "ADMIN001",
      province: "N/A",
      township: "N/A",
      password: hashedPassword,
      role: "admin", // Ensure this matches expected role structure
    });

    // Save new admin user
    await newAdmin.save();
    console.log(`${chalk.green("✓")} ${chalk.green("Seeding database finished")}`);
  } catch (error) {
    console.error(error);
    console.log(`${chalk.red("x")} ${chalk.red("Error while seeding database")}`);
  }
}
