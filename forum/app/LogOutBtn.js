'use client'
import {signIn, signOut} from 'next-auth/react'

export default function LogOutBtn(){
    return (
        <div>
            <button onClick={()=>{signOut()}}>logout</button>
        </div>
    )
}