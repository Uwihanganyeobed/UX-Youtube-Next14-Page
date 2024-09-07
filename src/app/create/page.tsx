import React from "react";

export default function CreatePage() {
  return (
    <div>
      <h2 className=" text-2xl font-bold my-8">Add new Interpretation</h2>
      <form action="" className="flex gap-2 flex-col">
        <input
          type="text"
          name="term"
          placeholder="Term"
          className="py-1 px-4 border rounded-md"
        />
        <textarea
          name="interpretation"
          rows={4}
          placeholder="Interpretation"
          className="py-1 resize-none px-4 border roounded-md"
        ></textarea>
        <button className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer">
          Add interpretation
        </button>
      </form>
    </div>
  );
}
