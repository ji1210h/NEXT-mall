'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({result}){

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
                        <Link href={`/edit/${result[i]._id}`}>수정</Link>
                        {/* <form method="DELETE"> */}
                        <span className='spanBtn' onClick={(e)=>
                            fetch('/api/delete', { method: 'DELETE', body: result[i]._id}) 
                            //POST 요청은 body 필요, 정보를 서버에 보내고 싶을 때 body를 쓰기때문에 id전송에 필요
                            //서버로 array, object보낼땐 JSON.stringify()사용
                            .then((r)=>{return r.json()}) //Ajax로 서버에 요청, GET요청 날려줌, form으로 하면 항상 새로고침 but Ajax는 안함
                            .then(()=>{
                                e.target.parentElement.style.opacity = 0;

                                //1초 지나면 안에 코드 실행해라
                                setTimeout(()=>{
                                    e.target.parentElement.style.display = 'none';
                                },1000)
                            })
                        }>삭제</span>
                    </div>  
                    )
                })
            }
        </div>
    )

    
}