'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    let url = usePathname() //현재 URL이 출력됨
    let p = useSearchParams() //쿼리스트링, 서치파라미터가 출력됨
    let dr = useParams() //유저가 입력한 Dynamic Router 출력

    return(
        <div>
            <button onClick={()=>{router.push('/list')}}>버튼</button>
        </div>
    )
}