import { Databases, ID, Query } from "appwrite";
import client from "../../../../lib/appwrite_client";
import { NextResponse } from "next/server";

const database = new Databases(client);


export async function fetchUsers(){
   try {
      const users = await database.listDocuments(
         process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
         process.env.NEXT_PUBLIC_APPWRITE_USERS_ID as string,
         [Query.orderDesc("$createdAt")]
      )
      return users.documents
   } catch (error) {
      console.error('Errror fetching users', error);
      throw new Error('Failed to fetch users')
   }
 }

 export async function GET() {
   try {
      const users = await fetchUsers();
      return NextResponse.json(users);
   } catch (error) {
      return NextResponse.json(
         {error: "Failed to fetch users"},
         {status: 500}
      )
      
   }
}