export default function handler(GET, res){
    console.log(123)
    return res.status(200).json('처리완료')
}