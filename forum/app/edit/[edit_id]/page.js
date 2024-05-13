import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").findOne({_id: new ObjectId(props.params.edit_id)})
    
    return(
        <div>
            수정페이지
            <form action="/api/edit" method="POST">
                <input name="title" defaultValue={result.title}></input>
                <input name="content" defaultValue={result.content}></input>
                <input style={{display: 'none'}} name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">완료</button>
            </form>
        </div>
    )
}