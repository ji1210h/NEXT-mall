import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res){
    if (req.method == 'POST') {
        let hash = await bcrypt.hash(req.body.password, 10) //아무숫자나 기입
        let db = (await connectDB).db('forum')
        let find = await db.collection('user_cred').findOne({email: req.body.email})
        
        if (req.body.name == '' || req.body.email == '' || req.body.password == ''){
            res.status(500).json('필수항목을 적어주세요')
        }

        else if (find == null) {
            req.body.password = hash
            await db.collection('user_cred').insertOne(req.body)
            res.status(200).json("가입")
        }
        res.status(500).json("중복되었음")
    }
}