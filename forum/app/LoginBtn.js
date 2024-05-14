'use client'
import {signIn, signOut} from 'next-auth/react'

export default function LoginBtn(){
    return (
        <div className="logInOut">
            <a className='nav-btn' href='/register'>회원가입</a>
            <button className='nav-btn' onClick={()=>{signIn()}}>로그인</button>
        </div>
    )
}