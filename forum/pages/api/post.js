import { connectDB } from "@/util/database"

export default async function Post(req, res) {
    console.log(req.body)

    if (req.body.title == '' || req.body.content == ''){
        return res.status(500).json("제목이나 내용이 비어있습니다.")
    } 

    const db = (await connectDB).db("forum")
    let result = await db.collection("post").insertOne(req.body)
    return res.status(200).redirect('/list')
}