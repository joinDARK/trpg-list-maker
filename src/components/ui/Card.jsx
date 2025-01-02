import clsx from "clsx";
import Title from "./Title";

export default function Card(props) {
  return (
    <div className={
      clsx(
        "border-2 rounded-md p-4 dark:bg-neutral-800 dark:border-neutral-700",
        props.className
      )
    }>
      <div className={clsx(props.title ? "mb-3" : "", "text-lg")}>
        <Title value={props.title} color="white" size="lg"/>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}