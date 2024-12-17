import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
    const products = getAllProducts(); //call the function to get the products
    response.status(200).json( products ); // return the array directly
}