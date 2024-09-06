import React from 'react'

export default function Page() {
   async function createInvoive(formData: FormData){
      'use server'
      const rawDataForm = {
         customerId: formData.get('customerId'),
      }
   }
  return (
    <div>
      
    </div>
  )
}
