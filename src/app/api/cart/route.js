import cartModel from "@/models/cart";

export function GET (){
    return Response.json({message:"cart"})
  }

export async function POST (req){
   try{
    const reqBody = await req.json()
    const {product} = reqBody;
    console.log(product);
    await cartModel.create(product );
    return Response.json(
        {message : 'add to cart successfully'},
        {status:201}
      );
   }catch(err){
    console.log(`erooro bego ${err}`);
    return Response.json(
      { message: "UnKnown Internal Server Erorr !!" },
      { status: 500 }
    );
   }
  }