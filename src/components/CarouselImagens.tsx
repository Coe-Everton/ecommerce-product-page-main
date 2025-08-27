import ImageOne from "/images/image-product-1.jpg"
import ImageTwo from "/images/image-product-2.jpg"
import ImageThree from "/images/image-product-3.jpg"
import ImageFour from "/images/image-product-4.jpg"
import IconClose from "/svgs/icon-close.svg"
import IconNext from "/svgs/icon-next.svg"
import { useStore } from "../stores/Store";

export default function CarouselImagens () {
    const { 
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
    <main className="fixed inset-0 flex flex-col gap-8 justify-center items-center backdrop-brightness-30">
      <div className="relative w-[35dvw]">
        <img 
          src={IconClose}
          alt="Icon Close" 
          className="absolute cursor-pointer -top-8 w-6 right-0"
          onClick={() => SetViewCarousel(!ViewCarousel)}
        />
        <img 
          src={IconNext}
          alt="Icon Back - Icon Next BUT rotate 180" 
          className="bg-LightGrayishBlue absolute top-1/2 -left-8 p-6 max-lg:p-4 max-lg:-left-5 rounded-full hover:cursor-pointer rotate-180" 
          onClick={BackViewPhoto}
        />
        <img 
          src={ImagePaths[ImageSelect-1]}  
          alt="Carousel" 
          className="rounded-2xl"
          />
        <img 
          src={IconNext}
          alt="Icon Next" 
          className="bg-LightGrayishBlue absolute top-1/2 -right-8 p-6 max-lg:p-4 max-lg:-right-5 rounded-full hover:cursor-pointer" 
          onClick={NextViewPhoto}
        />
      </div>
      <ul className="flex place-self-center gap-8 w-[30%]">
        {[ImageOne, ImageTwo, ImageThree, ImageFour].map((img, index) => (
          <li 
            key={index} 
            className={`${ImageSelect === index+1 && OutlineImageClass} rounded-2xl duration-100`} 
            onClick={() => ChangePhoto(index+1)}
          >
            <div className="relative">
              <img 
                src={img} 
                alt={`image-product-${index+1}`}
                className={`${ImageSelect === index+1 && "hover:opacity-30"} rounded-[12%] duration-100`}
              />
              {
                ImageSelect === index+1 && <span className="absolute inset-0 bg-white opacity-40 rounded-[12%]"></span>
              }
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}