import dotenv from "dotenv";
import cowsay from "cowsay";

// Load environment variables from .env
dotenv.config();

// Generate the cow message
const message = cowsay.say({
  text: `Hello, I'm ${process.env.NAME} from ${process.env.CAMPUS}!`,
  e: "oo", // Cow's eyes
  T: "U ", // Cow's tongue
});

console.log(message);
