import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function Post(req, res) {
    let session = await getServerSession(req, res, authOptions)
    // if (req.body.title == '' || req.body.content == ''){
    //     return res.status(500).json("제목이나 내용이 비어있습니다.")
    // } 
    if (session){
        req.body.author = session.user.email
    }
    console.log(session)

    const db = (await connectDB).db("forum")
    let result = await db.collection("post").insertOne(req.body)
    return res.status(200).redirect('/list')
}