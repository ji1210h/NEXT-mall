export default function handler(req, res) {
    if (req.method=='GET'){
        console.log("session!!!!!!!!!!!!!")
        res.status(200).json("세션받음")
      }
  }