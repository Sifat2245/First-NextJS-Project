import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  const collection = await dbConnect("products");
  const product = await collection.findOne({ _id: new ObjectId(id) });
  
  return Response.json(product);
}
