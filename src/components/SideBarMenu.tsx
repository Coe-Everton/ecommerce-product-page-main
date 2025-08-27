import IconClose from "/svgs/icon-close.svg"
import { useStore } from "../stores/Store"

export default function SideBarMenu() {
    const { 
      ToggleSideBarVisibility 
    } = useStore((state) => state);
  
    return(
    <main className="fixed z-30 top-0 left-0 h-full w-full  backdrop-brightness-30 hover:cursor-pointer">
      <div className="w-2/3 p-6 h-[100dvh] bg-white">
        <img 
          src={IconClose}
          alt="Icon Delete" 
          className="mb-8"
          onClick={() => ToggleSideBarVisibility()}
          />
        <ul className="flex flex-col gap-4 font-bold">
         <li>Collections</li>
         <li>Men</li>
         <li>Women</li>
         <li>About</li>
         <li>Contact</li>
        </ul>
      </div>
    </main>
  )
}