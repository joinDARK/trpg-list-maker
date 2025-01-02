import { createEffect, createSignal } from "solid-js";
import Input from "../ui/Input";

export default function Field({className, type, center, name}) {
  const [value, setValue] = createSignal(localStorage.getItem(name) || "");
  
  const saveToLS = () => {
    localStorage.setItem(name, value());
  };
  
  createEffect(() => {
    saveToLS();
  });
  
  return (
    <div className={className}>
      <Input 
        full 
        type={type} 
        center={center} 
        onInput={(e) => setValue(e.target.value)}
        value={value()}
      />
    </div>
  )
}