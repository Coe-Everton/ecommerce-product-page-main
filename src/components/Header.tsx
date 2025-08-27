import ImageAvatar from "/images/image-avatar.png"
import IconCart from "/svgs/icon-cart.svg"
import IconMenu from "/svgs/icon-menu.svg"
import { useStore } from "../stores/Store"

export default function Header () {
  const { 
    CartProducts, 
    ToggleCart,
    ToggleSideBarVisibility 
  } = useStore((state) => state);

  return(
    <div>
      <main className="bg-White flex justify-between py-4 md:py-8 mx-6">
        <div className="flex items-center gap-12">
          <div className="min-sm:hidden flex items-center align-middle gap-4">
            <img 
              src={IconMenu}
              alt="Icon Menu" 
              className="w-5 h-4"
              onClick={() => ToggleSideBarVisibility()}
              />
            <h1 className="font-KumbhSans text-Black font-extrabold text-3xl text-center min-sm:hidden">sneakers</h1>
          </div>
          <h1 className="font-KumbhSans text-Black font-bold text-3xl max-sm:text-4xl text-center max-sm:hidden">sneakers</h1>
          <ul className="font-KumbhSans flex gap-6 sm:gap-4 max-sm:hidden">
            <li className="text-DarkGrayishBlue hover:text-Black hover:cursor-pointer hover:underline underline-offset-41 decoration-4 decoration-Orange duration-100">Collections</li>
            <li className="text-DarkGrayishBlue hover:text-Black hover:cursor-pointer hover:underline underline-offset-41 decoration-4 decoration-Orange duration-100">Men</li>
            <li className="text-DarkGrayishBlue hover:text-Black hover:cursor-pointer hover:underline underline-offset-41 decoration-4 decoration-Orange duration-100">Women</li>
            <li className="text-DarkGrayishBlue hover:text-Black hover:cursor-pointer hover:underline underline-offset-41 decoration-4 decoration-Orange duration-100">About</li>
            <li className="text-DarkGrayishBlue hover:text-Black hover:cursor-pointer hover:underline underline-offset-41 decoration-4 decoration-Orange duration-100">Contact</li>
          </ul>
        </div>
          <div className="flex place-items-center gap-6 lg:gap-10 place-content-end">
            <div onClick={ToggleCart} className="relative cursor-pointer">
              <span className="absolute -top-2 -right-2 text-[10px] sm:text-sm bg-Orange px-1.5 text-md text-White rounded-full">{CartProducts.SneakersAmount}</span>
              <img 
                src={IconCart} 
                className="w-4.5 h-4.5 md:w-6 md:h-6" 
                alt="Icon Cart"
              />
            </div>
            <img 
              src={ImageAvatar} 
              className="w-6 md:w-12 hover:outline-2 rounded-full outline-Orange duration-50" 
              alt="Image Avatar" 
            />
          </div>
      </main>
    </div>
  )
}