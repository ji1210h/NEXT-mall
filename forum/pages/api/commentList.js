import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    // console.log(req.query.id) //{ id: '6642de1136d5bfd408e17467' }
    
    const db = (await connectDB).db("forum")
    let commentList = await db.collection("comment").find({parent: new ObjectId(req.query.id)}).toArray()
    //find에 조건 입력가능
    res.status(200).json(commentList)
}










