import Title from "../ui/Title";

export default function Header() {
  return (
    <header>
      <div className="border-2 rounded-md border-lime-500 p-3 flex justify-center dark:bg-zinc-800">
        <Title value="Лист персонажа" color="green"/>
      </div>
    </header>
  )
}