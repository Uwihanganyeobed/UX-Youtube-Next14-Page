"use server";

import { FormState, setFormSchema } from "@/app/lib";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function createUser(prevState: any, formData: FormData) {
   const value = cookies().get('name')?.value
   cookies().set('name', 'Delba')
   cookies().delete('name')
  try {
   const res = await fetch("");
   const json = res.json();
 
  } catch (error) {
   return { message: "Error creating user" };
   
  }
  
  revalidateTag("posts");
  redirect("/dashboard");
}



export default function userMapper(state: FormState, formData: FormData) {
  const validatedFields = setFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
  try {
    const {name, email, password} = validatedFields.data

    const hashedPassword = await bcrypt.hash(password,10)
  } catch (error) {
    
  }
  if(!validatedFields.success){
    return{
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
}
