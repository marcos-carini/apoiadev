"use client"

import { ChangeEvent, useState, useRef } from "react"
import { debounce, set } from "lodash";
import { toast } from "sonner";
import { changeDescription } from "../_actions/change-bio";

export default function Description({initialDescription}: { initialDescription: string }) {
  const [description, setDescription] = useState(initialDescription);
  const [originalDescription] = useState(initialDescription);

  const debouncedSaveName = useRef(
    debounce(async (currentDescription: string) => {
      if (currentDescription.trim() === ""){
        setDescription(originalDescription);
        return;
      }

      if (currentDescription !== description) {
        try {
          const response = await changeDescription({ description: currentDescription });

          if (response.error) {
            setDescription(originalDescription);
            toast.error(response.error);
            return;
          } 

          toast.success("Sua bio foi atualizada com sucesso!");
        } catch (error) {
          console.log(error);
          setDescription(originalDescription);
        }
      }

    }, 500)
  ).current

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setDescription(value);

    debouncedSaveName(value);

  }

  return (
    <textarea
      className="text-base bg-gray-50 border border-gray-100 rounded-md outline-none p-2 w-full max-w-2xl my-3 h-40 resize-none text-center"
      value={description}
      onChange={handleChange}
      placeholder="Digite sua descrição..."
    />
  )
}
