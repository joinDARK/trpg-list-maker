import clsx from "clsx";

export default function Title({color, value, size}) {
  return (
    <p className={clsx( "font-semibold" ,{
      "text-lime-500": color == "green",
      "text-white": color == "white",
      "text-lg": size == "lg"
    })}>{value}</p>
  )
}