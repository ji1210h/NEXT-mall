import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write(){
    let session = await getServerSession(authOptions)
    // console.log(session)
    
    if (!session) { return ( <div>로그인하세요</div> ) }
    return(
        <div>
            글 작성 페이지
            <form action="/api/post" method="POST">
                <input name="title" placeholder="제목"></input>
                <input name="content" placeholder="내용을 입력하세요"></input>
                <button type="submit">완료</button>
            </form>
        </div>
    )
}