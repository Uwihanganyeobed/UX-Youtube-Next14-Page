import { Databases} from "appwrite";
import client from "../../../../../lib/appwrite_client";
import { NextResponse } from "next/server";


const database = new Databases(client);

//create interpretations

async function fetchInterpretation(id: string) {
  try {
    const interpretation = await database.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
      id,
    );
    return interpretation;
  } catch (error) {
   console.error('Errror fetching interpretation', error);
   throw new Error('Failed to fetch interpretation')
  }
}
//delete specific interpretation

async function deleteInterpretation(id: string){
   try {
      const response = await database.deleteDocument(
         process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
         id,
      )
      return response
   } catch (error) {
      console.error('Errror deleting interpretation', error);
      throw new Error('Failed to delete interpretation')
   }
}

//update interpretation

async function updateInterpretation(id: string, data: {term: string, interpretation: string}){
   try {
      const response = await database.updateDocument(
         process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
         id,
         data
      )
      return response
   } catch (error) {
      console.error('Errror deleting interpretation', error);
      throw new Error('Failed to delete interpretation')
   }
}


export async function GET(req: Request, {params}: {params: {id: string}}){
   try {
      const id = params.id
      const interpretation = await fetchInterpretation(id);
      return NextResponse.json({
         interpretation
      })
   } catch (error) {
      return NextResponse.json({
         error: "Failed to fetch Interpretation"
      },{
         status: 500
      })
   }
}

export async function DELETE(req: Request, {params}: {params: {id: string}}){
   try {
      const id = params.id
      await deleteInterpretation(id);
      return NextResponse.json({
         message: 'interpretation deleted succesfully'
      })
   } catch (error) {
      return NextResponse.json({
         error: "Failed to delete Interpretation"
      },{
         status: 500
      })
   }
}

export  async function PUT(req: Request, {params}: {params: {id: string}}){
   try {
      const id = params.id
      const interpretation = await req.json();
      await updateInterpretation(id, interpretation)
      return NextResponse.json({
         message: 'interpretation updated successfully'
      })
   } catch (error) {
      return NextResponse.json({
         error: "Failed to update Interpretation"
      },{
         status: 500
      })
   }
}