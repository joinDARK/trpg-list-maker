import clsx from "clsx";

export default function Line(props) {
  return (
    <div className={clsx("dark:bg-neutral-700 w-full h-0.5 rounded-md", props.className)}></div>
  )
}