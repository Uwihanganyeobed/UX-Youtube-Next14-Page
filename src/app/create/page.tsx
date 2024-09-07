'use client'
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export default function CreatePage() {

  const router = useRouter();

  const [formData, setformData] = useState({term: "", interpretation: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setformData((prevData)=> (
      {
        ...prevData, [e.target.name]: e.target.value
      }
    ))
  }

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault();

    if(!formData.interpretation || !formData.interpretation){
      setError("Please fill in all fields");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      
      const response = await fetch('/api/interpretations', {
        method: 'POST', 
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if(!response.ok){
        throw new Error("Failed to be created");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.")
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h2 className=" text-2xl font-bold my-8">Add new Interpretation</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          type="text"
          name="term"
          placeholder="Term"
          value={formData.term}
          className="py-1 px-4 border rounded-md"
          onChange={handleInputChange}
        />
        <textarea
          name="interpretation"
          rows={4}
          placeholder="Interpretation"
          className="py-1 resize-none px-4 border roounded-md"
          value={formData.interpretation}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer">
         {isLoading ? (
          "Adding"
         ): "Add interpretation" } 
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
