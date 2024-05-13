import { connectDB } from "@/util/database"

export default async function Home() {
  const db = (await connectDB).db("forum")
  let result = await db.collection("post").find().toArray()
  // console.log(result)
  return (
    <div>안녕</div>
  )
}