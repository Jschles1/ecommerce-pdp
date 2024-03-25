"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageProduct1 from "/public/images/image-product-1.jpg";
import ImageProduct2 from "/public/images/image-product-2.jpg";
import ImageProduct3 from "/public/images/image-product-3.jpg";
import ImageProduct4 from "/public/images/image-product-4.jpg";
import MinusIcon from "/public/images/icon-minus.svg";
import PlusIcon from "/public/images/icon-plus.svg";
import CartIconWhite from "/public/images/icon-cart-white.svg";
import ProductImageGallery from "@/components/product-image-gallery";
import { CartContext } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";

const productImages = [
  ImageProduct1,
  ImageProduct2,
  ImageProduct3,
  ImageProduct4,
];

export default function Home() {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAddToCart() {
    if (cart.length) {
      const newQuantity = cart[0].quantity + quantity;
      setCart([{ ...cart[0], quantity: newQuantity }]);
    } else {
      setCart([{ quantity, name: "Fall Limited Edition Sneakers" }]);
    }
  }

  return (
    <main className="flex flex-col">
      <div className="md:flex md:items-center md:justify-center gap-x-[7.1rem] md:pt-[5.62rem]">
        <div className="md:hidden">
          {/* Mobile Carousel */}
          <Carousel>
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="h-[18.75rem]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="hidden md:block">
          {/* Desktop Layout */}
          <ProductImageGallery />
        </div>
        <div className="px-6 pt-6 pb-[5.5rem] md:p-0 md:max-w-[27.8125rem]">
          <p className="uppercase text-orange text-xs md:text-[0.8125rem] font-bold tracking-[0.11538rem] md:tracking-[0.125rem] mb-[1.19rem] md:mb-[1.68rem]">
            Sneaker Company
          </p>
          <h1 className="text-dark-blue text-[1.75rem] md:text-[2.75rem] leading-[2rem] md:leading-[3rem] font-bold mb-[0.94rem] md:mb-8">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-gray text-[0.9375rem] md:text-base leading-[1.5625rem] md:leading-[1.625rem] mb-6 md:mb-[1.75rem]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="flex items-center justify-between mb-[1.69rem] md:block">
            <div className="flex items-center gap-x-4 md:mb-[0.69rem]">
              <p className="text-dark-blue text-[1.75rem] font-bold">$125.00</p>
              <p className="text-orange px-2 py-[0.4rem] rounded-[0.375rem] bg-serenade font-bold">
                50%
              </p>
            </div>
            <p className="text-light-gray line-through leading-[1.625rem] font-bold">
              $250.00
            </p>
          </div>
          <div className="md:flex md:gap-x-4 md:items-center">
            <div className="rounded-[0.625rem] bg-light-blue py-[1.2rem] px-6 flex items-center justify-between mb-4 md:w-[9.8125rem] md:h-[3.5rem] md:mb-0">
              <Button
                variant="ghost"
                className="p-0 text-orange text-xl"
                onClick={handleDecrement}
              >
                <Image src={MinusIcon} alt="Remove" />
              </Button>
              <p className="text-dark-blue font-bold">{quantity}</p>
              <Button
                variant="ghost"
                className="p-0 text-orange"
                onClick={handleIncrement}
              >
                <Image src={PlusIcon} alt="Add" />
              </Button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-orange h-14 rounded-[0.625rem] text-white justify-center gap-x-[0.97rem] pt-[1.19rem] pb-[1.13rem] w-full font-bold shadow-[0px_20px_50px_-20px_#FF7E1B]"
            >
              <Image
                src={CartIconWhite}
                alt=""
                className="text-white fill-white"
              />{" "}
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
