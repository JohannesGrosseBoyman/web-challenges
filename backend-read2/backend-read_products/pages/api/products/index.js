import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

// handler function with error handling and error-log to the terminal console
export default async function handler(request, response) {
  try {

    await dbConnect();


    if (request.method === "GET") {

      const products = await Product.find();


      return response.status(200).json(products);
    } else {
      console.warn("Invalid request method:", request.method);
      return response.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("MongoDB Connection or Query Error:", error);
    return response.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
