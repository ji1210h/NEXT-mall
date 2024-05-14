import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liJpvVw0y6mOF9w0',
      clientSecret: 'c85a136021d8b5630e387b997cc8901530ca7c90',
    }),
  ],
  secret : 'jwt생성시쓰는암호',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 