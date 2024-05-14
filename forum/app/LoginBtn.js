'use client'
import {signIn, signOut} from 'next-auth/react'

export default function LoginBtn(){
    return (
        <div>
            <button onClick={()=>{signIn()}}>login</button>
        </div>
    )
}