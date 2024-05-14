import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res){
    // console.log(req.body)
    // let session = await getServerSession(req, res, authOptions)
    // console.log(session.user.email)

    let newBody = {title: req.body.title, content: req.body.content}

    // if (req.body.auth == session.user.email){
    //     console.log("dkdjkjdkjkjjkjk")
    // }

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').updateOne(
        {_id: new ObjectId(req.body._id)}, {$set: newBody})
    return res.status(200).redirect('/list')

}