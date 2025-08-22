import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect("products").find({}).toArray()

  return Response.json(data);
}


export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await dbConnect("products");
    const result = await collection.insertOne(data);

    return new Response(JSON.stringify({ message: "Product added", insertedId: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
