import ThumbnailImageOne from "/images/image-product-1-thumbnail.jpg"
import IconDelete from "/svgs/icon-delete.svg"
import { useStore } from "../stores/Store"

export default function Cart () {
  const { 
    SneakerPrince, 
    ClearCart, 
    CartProducts 
  } = useStore((state) => state);

  return(
    <main className="absolute z-10 max-sm:-translate-x-1/2 top-25 right-25 max-sm:left-1/2 sm:w-[25dvw] w-[95dvw] p-5 shadow-2xl bg-White rounded-2xl">
      <h1 className="font-bold pb-4">Cart</h1>
      <hr className="opacity-20"/>
      {
        !CartProducts?.AccountTotal ? 
        (
          <h1 className="font-bold text-DarkGrayishBlue text-center my-12">Your cart is empty</h1>
        )
        :
        (
          <>
            <div className="grid grid-flow-col text-sm place-items-center font-medium text-DarkGrayishBlue">
            <img 
              src={ThumbnailImageOne} 
              className="rounded-[10%] h-[50%]" 
              alt="Thumbnail Imagem One" 
            />
            <div>
              <h1>Fall Limited Edition Sneakers</h1>
              <span className="flex place-content-between">
                <h1>${(SneakerPrince).toFixed(2)} x {CartProducts.SneakersAmount}</h1>
                <h1 className="font-bold text-Black">${(CartProducts.AccountTotal).toFixed(2)}</h1>
              </span>
            </div>
            <img 
              src={IconDelete} 
              className="hover:cursor-pointer" 
              onClick={ClearCart} 
              alt="Icon Delete"
            />
            </div>  
            <button className="bg-Orange w-full py-4 rounded-lg hover:opacity-70 duration-100 hover:cursor-pointer">
              <h1 className="text-Black font-bold" onClick={() => (alert("Thanks for to buy"),window.location.reload())}>Checkout</h1>
            </button>
          </>
        )
      }
    </main>
  )
}