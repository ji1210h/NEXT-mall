import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    console.log(req.body)
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').deleteOne({_id:new ObjectId(req.body)})
    console.log(result)
    res.status(200).json('삭제완료')
}
