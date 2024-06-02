import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"
import ListItem from "./ListItem(errcatch)"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export const dynamic = 'force-dynamic'

export default async function List(){
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })
    let session = await getServerSession(authOptions)
    // console.log("---------------"+session) //null??

    return(
      <div className="list-bg">
        <ListItem result={result} session={session}/>
      </div>
    )
}