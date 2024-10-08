'use client'
import EditPageSkeleton from '@/skeletons/EditSkeleton';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

export default function EditPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [formData, setformData] = useState({ term: "", interpretation: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/interpretations/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch interpretations");
        }
        const data = await response.json();
        setformData({
          term: data.interpretation.term,
          interpretation: data.interpretation.interpretation,
        });
      } catch (error) {
        setError("Failed to load interpretations");
      } finally {
        setIsLoading(false); // Stop showing the skeleton
      }
    };
    fetchData();
  }, [params.id]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.interpretation || !formData.term) {
      setError("Please fill in all fields");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/interpretations/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to be updated");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render skeleton while loading
  if (isLoading) return <EditPageSkeleton />;

  return (
    <div>
      <h2 className=" text-2xl font-bold my-8">Edit the Interpretation</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          type="text"
          name="term"
          placeholder="Term"
          className="py-1 px-4 border rounded-md"
          onChange={handleInputChange}
          value={formData.term}
        />
        <textarea
          name="interpretation"
          rows={4}
          placeholder="Interpretation"
          className="py-1 resize-none px-4 border rounded-md"
          value={formData.interpretation}
          onChange={handleInputChange}
        ></textarea>
        <button
          className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer"
          type="submit"
        >
          {isLoading ? "Updating..." : "Update interpretation"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
