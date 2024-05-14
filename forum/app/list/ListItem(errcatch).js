'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({result, session}){
    

    // useEffect(()=>{
    //     // 서버에 부탁해서 DB게시물 가져옴
    //     // result = DB게시물
    //     // 단점: 검색노출 어려움, useEffect는 html전부 실행 후 실행됨
    //     // 검색 엔진 봇도 방문하는데 늦게 렌더링되면 수집못하고 넘어감
    //     // 그래서 list에서 listitem으로 props 방식으로 전송하는 방법!!
    // },[])

    return(
        <div>
            {
                result.map((a,i)=>{
                    return(
                    <div className="list-item" key={i}>
                        <Link href={`./detail/${result[i]._id}`}>
                            <h4>{result[i].title}</h4>
                        </Link>
                        {/* <DetailLink/> */}
                        <p>{result[i].content}</p>
                        {session && result[i].author == session.user.email ?
                        <div>
                            <Link href={`/edit/${result[i]._id}`}>수정</Link> &nbsp;
                            <span className='spanBtn' onClick={()=>
                                fetch('/URL')
                                .then((r)=>{
                                    if(r.status == 200) {
                                    return r.json()
                                    } else {
                                    //서버가 에러코드전송시 실행할코드
                                    }
                                })
                                .then((result)=>{ 
                                //성공시 실행할코드
                                }).catch((error)=>{
                                //인터넷문제 등으로 실패시 실행할코드
                                console.log(error)
                                })
                            }>삭제</span>
                        </div> : console.log('실패')
                    }
                    </div>  
                    )
                })
            }
        </div>
    )

    
}