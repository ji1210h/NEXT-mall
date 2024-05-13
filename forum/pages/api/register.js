import { connectDB } from "@/util/database"

export default async function Register(req, res){

    const db = (await connectDB).db("forum")
    let result = await db.collection("post").findOne({title: req.body.title})

    if (req.body.title == '' || req.body.content == ''){
        return res.status(500).json("아이디나 비밀번호를 입력해주세요")
    }

    else if (result == null) {   
        console.log(result) // 중복이면 중복이름을 가진 DB{}가 출력됨. 중복이 아니면 null이 출력됨.
        result = await db.collection("post").insertOne(req.body)
        return res.status(200).redirect('/list')
}
    console.log(result)
    return res.status(500).json("중복아이디가 있습니다")

}