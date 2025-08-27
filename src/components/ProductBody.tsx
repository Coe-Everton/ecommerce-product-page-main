import ImageOne from "/images/image-product-1.jpg"
import ImageTwo from "/images/image-product-2.jpg"
import ImageThree from "/images/image-product-3.jpg"
import ImageFour from "/images/image-product-4.jpg"
import IconMinus from "/svgs/icon-minus.svg"
import IconNext from "/svgs/icon-next.svg"
import IconPlus from "/svgs/icon-plus.svg"
import IconCartBlack from "/svgs/icon-cart-black.svg"
import { useStore } from "../stores/Store"
import CarouselImagens from "./CarouselImagens"

export default function ProductBody () {
    const { 
      SneakerPrince, 
      SneakerCount, 
      IncrementSneakerCount, 
      DecrementSneakerCount, 
      AddInTheCart, 
      ImageSelect, 
      ChangePhoto, 
      ImagePaths, 
      ViewCarousel, 
      SetViewCarousel, 
      OutlineImageClass, 
      NextViewPhoto, 
      BackViewPhoto
    } = useStore((state) => state);

    return(
        <main className="flex max-sm:flex-col items-center sm:mx-[4dvw] place-content-between font-KumbhSans">
          <section className="relative sm:hidden">
            <img 
              src={IconNext} 
              alt="Icon Back BUT rotate 180" 
              className="bg-LightGrayishBlue absolute top-1/2 left-3 py-3 px-4 rounded-full hover:cursor-pointer rotate-180"
              onClick={BackViewPhoto}
            />
            <img 
              src={ImagePaths[ImageSelect-1]} 
              alt="Carousel"  
            />
            <img 
              src={IconNext}
              alt="Icon Next"
            className="bg-LightGrayishBlue absolute top-1/2 right-3 py-3 px-4 rounded-full hover:cursor-pointer"
              onClick={NextViewPhoto}
            />
          </section>
          <div className="max-sm:hidden xl:w-[40%] place-items-center">
            <img 
              src={ImagePaths[ImageSelect-1]} 
              className="rounded-[5%] my-8" 
              onClick={() => SetViewCarousel(!ViewCarousel)} 
              alt="product select" 
            />
            <ul className="grid grid-flow-col gap-6">
              {[ImageOne, ImageTwo, ImageThree, ImageFour].map((img, index) => (
                <li 
                  key={index} 
                  className={`${ImageSelect === index+1 ? OutlineImageClass : ""} rounded-2xl duration-100`} 
                  onClick={() => ChangePhoto(index+1)}
                >
                  <img 
                    src={img} 
                    alt={`image-product-${index+1}`}
                    className={`${ImageSelect === index+1 ? "rounded-[12%] opacity-30" : "rounded-[12%] hover:opacity-30"} duration-100`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:w-[40dvw] p-6 place-items-start">
              <h3 className="font-bold text-DarkGrayishBlue">SNEAKER COMPANY</h3>
              <h1 className="text-Black font-extrabold max-sm:text-4xl text-6xl py-2">Fall Limited Edition Sneakers</h1>
              <h3 className="text-DarkGrayishBlue py-4">These low-profile sneakers are your perfect casual wear compamon. Featuring a durable rubber outer sole. they'll withstand everythlng the weather can offer</h3>
              <div className="max-sm:flex max-sm:w-full max-sm:justify-between items-center max-sm:mb-4">
              <div className="flex gap-4 place-items-center py-2">
                <h1 className="text-3xl font-bold">${(SneakerPrince).toFixed(2)}</h1>
                <span className="py-1 px-2 text-xs bg-Black text-White rounded-md">50%</span>
              </div>
              <h3 className="text-DarkGrayishBlue font-medium line-through decoration-2 py-2">$250.00</h3>
              </div>
              <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between">
                <span className="bg-LightGrayishBlue flex sm:w-[39%] justify-between rounded-lg p-3 ">
                  <img 
                    src={IconMinus} 
                    className="px-0.5 py-3 hover:cursor-pointer" 
                    onClick={DecrementSneakerCount} 
                    alt="Icon Minus" 
                  />
                  <h1 className="cursor-default">{SneakerCount}</h1>
                  <img 
                    src={IconPlus} 
                    className="px-0.5 py-2 hover:cursor-pointer" 
                    onClick={IncrementSneakerCount} 
                    alt="Icon Plus" 
                  />
                </span>
                <button className="bg-Orange drop-shadow-Orange sm:w-[59%] flex items-center justify-center py-2 rounded-lg gap-4 hover:opacity-40 hover:cursor-pointer duration-100" onClick={AddInTheCart}>
                  <img 
                    src={IconCartBlack} 
                    alt="Icon Cart Black" 
                  />
                  <h1 className="text-Black font-bold">Add to cart</h1>
                </button>
              </div>
          </div>
          {
            ViewCarousel && <CarouselImagens/>
          }
        </main>
    )
}