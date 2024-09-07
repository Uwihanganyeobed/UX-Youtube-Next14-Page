import { Databases, ID, Query } from "appwrite";
import client from "../../../../lib/appwrite_client";

import { NextResponse } from "next/server";

const database = new Databases(client);

//create interpretations

export async function createInterpretation(data: {
  term: string;
  interpretation: string;
}) {
  try {
    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
      ID.unique(),
      data,
    );
    return response;
  } catch (error) {
   console.error('Errror creating interpretation', error);
   throw new Error('Failed to create interpretation')
  }
}
//fetch interpretation

export async function fetchInterpretations() {
   try {
     const response = await database.listDocuments(
       process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
       process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
       [Query.orderDesc("$createdAt")]
     );
     return response.documents;
   } catch (error) {
    console.error('Errror fetching interpretation', error);
    throw new Error('Failed to fetch interpretation')
   }
 }

 //post
export async function POST(req: Request) {
   try {
      const {term, interpretation} = await req.json();
      const data = {term, interpretation};
      const response = await createInterpretation(data);
      return NextResponse.json({message: "interpretation created"})
   } catch (error) {
      return NextResponse.json({
         error: "Failed to create interpretation",
      },
   {
      status: 500
   })
   }
}

export async function GET() {
   try {
      const interpretations = await fetchInterpretations();
      return NextResponse.json(interpretations);
   } catch (error) {
      return NextResponse.json(
         {error: "Failed to fetch interpretation"},
         {status: 500}
      )
      
   }
}