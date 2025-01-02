import clsx from "clsx";

export default function Input({placeholder, template, full, type, center, onInput, value}) {
  return (
    <input 
      type={type ?? "text"}
      placeholder={placeholder}
      onInput={onInput}
      value={value}
      className={clsx(
        "border-2 rounded-md p-2 transition-all duration-300",
        template == "transparent" 
          ? "bg-transparent border-transparent focus-visible:outline-transparent"
          : [ 
            "dark:bg-neutral-800 dark:border-neutral-700", 
            "focus-visible:outline-lime-500 hover:border-lime-500"
          ]
        , full && "w-full", center && "text-center"
      )}
    />
  )
}