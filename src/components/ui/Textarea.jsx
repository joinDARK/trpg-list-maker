import clsx from "clsx";
import { createEffect, createSignal } from "solid-js";

export default function Textarea({ cols, rows, full, name }) {
  const [text, setText] = createSignal(localStorage.getItem(name) || "");
  
  createEffect(() => {
    localStorage.setItem(name, text());
  });
  
  return (
    <textarea
      value={text()}
      onInput={(e) => setText(e.target.value)}
      className={clsx(
        "border-2 rounded-md p-2 transition-all duration-300",
        "dark:bg-neutral-800 dark:border-neutral-700 focus-visible:outline-lime-500 hover:border-lime-500",
        full && "w-full"
      )} 
      cols={cols} 
      rows={rows}
    />
  )
}