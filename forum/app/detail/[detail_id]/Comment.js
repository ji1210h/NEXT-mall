'use client'
import { useEffect, useState } from "react"

export default function Comment({parent_id}) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(()=>{
        //서버에 보내자
        fetch('/api/commentList?id='+parent_id)
        .then((r)=>{return r.json()})
        .then((result)=>{
            setData(result)
            //console.log(data) //데이터가 비어있다?? 느리게 실행됨 ㅜㅜ
        })
    }, [])

    return (
        <div>
            <hr></hr>
            {
                data.map((a,i)=>{
                    return(
                        <div key={i} style={{display:"flex" }}>
                            <p style={{background:"yellow", margin: "10px", padding: "5px 17px" }}>{a.name}</p>
                            <p>{a.content}</p>
                            
                        </div>
                    ) 
                })
            }
            <input onChange={(e)=> { setComment(e.target.value) }}/> {/* 유저가 쓴 값이 남음 */}
            <button onClick={()=>{ 
                fetch('/api/comment', {
                method: 'POST', 
                body: JSON.stringify({comment: comment, _id: parent_id})
            }) //여까지 성공 이제 서버에서는 바디로 접근하면 됨
            }}>댓글 전송</button>
        </div>
    )

}