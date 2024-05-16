import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res){
    req.body = JSON.parse(req.body)
    let session = await getServerSession(req, res, authOptions)

    let saveComment = {
        content: req.body.comment,
        parent: new ObjectId(req.body._id),
        author: session.user.email, //서버에서 출력가능
        name: session.user.name
    }

    const db = (await connectDB).db("forum")
    let result = await db.collection("comment").insertOne(saveComment)
    return res.status(200).json('저장완료')
    

    
    

    // if (method=="POST"){
    //     res.status(200).json('댓글')
    // }
}
