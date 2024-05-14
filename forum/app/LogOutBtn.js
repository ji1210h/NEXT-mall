'use client'
import {signIn, signOut} from 'next-auth/react'

export default function LogOutBtn(){
    return (
        <div className='logInOut'>
            <button className='nav-btn' onClick={()=>{signOut()}}>로그아웃</button>
        </div>
    )
}