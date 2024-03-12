import newsLettersModel from "@/models/newsLetter";

export function GET() {
  return Response.json({ message: "ddfgdfg" });
}
export async function POST(req) {
 try {
  const reqBody = await req.json()
  const {email} = reqBody;
if (!reqBody.email.trim()){
  return Response.json(
    {message : 'email is not valied'},
    {status:422}
  )
}else{
  await newsLettersModel.create({email});
  return Response.json(
    {message : 'email successfully'},
    {status:201}
  );
}
 }catch (err) {
  console.log(`erooro bego ${err}`);
  return Response.json(
    { message: "UnKnown Internal Server Erorr !!" },
    { status: 500 }
  );
}
}
