"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IInterpretations {
  $id: string;
  term: string;
  interpretation: string;
}

const Home = () => {
  const [interPretations, setInterPretations] = useState<IInterpretations[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterpretations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/interpretations");
        if (!response.ok) {
          throw new Error("Failed to fetch interpretations");
        }
        const data = await response.json();
        setInterPretations(data);
      } catch (error) {
        console.log("error", error);
        setError(
          "Failed to load interpretations, Please try reloading the page"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchInterpretations();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/interpretations/${id}`, {method: "DELETE"});
      setInterPretations((prevInterpretations) => prevInterpretations?.filter((i)=> i.$id !== id)  
      )
    } catch (error) {
      setError('Failed to delete interpretation, please try again')
    }
  }

  return (
    <div>
      {error && <p className="py-4 text-red-500">{error}</p>}
      {isLoading ? (
        <p>Loading interpretations....</p>
      ) : interPretations?.length > 0 ? (
        interPretations?.map((interpretation) => (
          <div key={interpretation.$id} className="p-4 my-2 rounded-md border-b leading-8">
            <div className="font-bold">{interpretation.term}</div>
            <div>{interpretation.interpretation}</div>
            <div className="flex gap-4 mt-4 justify-end">
              <Link
                className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
                href={`/edit/${interpretation.$id}`}
              >
                Edit
              </Link>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" onClick={()=> handleDelete(interpretation.$id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ): (
        <p>No Interpretations found......</p>
      )}
    </div>
  );
};

export default Home;
