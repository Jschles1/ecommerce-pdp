"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CartIcon from "/public/images/icon-cart.svg";
import DeleteIcon from "/public/images/icon-delete.svg";
import { Separator } from "./ui/separator";
import { CartContext } from "@/contexts/cart-context";
import ProductThumbnail from "/public/images/image-product-1-thumbnail.jpg";

export default function Cart() {
  const { cart, setCart } = React.useContext(CartContext);
  const quantity = cart.length ? cart[0].quantity : 0;

  function handleRemoveFromCart() {
    setCart([]);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="p-0 relative">
          <Image src={CartIcon} alt="Menu" />
          {quantity > 0 && (
            <div className="absolute top-0 -right-1 rounded-[0.40625rem] text-white bg-orange text-[0.625rem] font-bold px-[0.3rem]">
              {quantity}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="transform-none w-[calc(100vw-1rem)] md:w-[22.5rem] mr-2 mt-8 md:m-0 rounded-[0.625rem] border-0 shadow-md p-0">
        <div className="p-6 pb-[1.69rem] font-bold text-dark-blue">Cart</div>
        <Separator className="bg-header-border h-[0.1rem]" />
        {cart.length ? (
          <div className="p-6">
            <div className="flex items-center">
              <Image
                src={ProductThumbnail}
                alt="Fall Limited Edition Sneakers"
                className="w-[3.125rem] h-[3.125rem] rounded-[0.25rem] mr-4"
              />
              <div className="mr-4">
                <p className="text-gray leading-[1.625rem]">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-gray leading-[1.625rem]">
                  $125.00{" "}
                  {quantity > 1 ? (
                    <>
                      x {quantity}{" "}
                      <span className="text-black font-bold">
                        ${(quantity * 125).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={handleRemoveFromCart}
                className="flex-1 p-0"
              >
                <Image
                  src={DeleteIcon}
                  alt="Remove"
                  className="w-[0.875rem] h-4"
                />
              </Button>
            </div>
            <Button className="bg-orange text-white w-full rounded-[0.625rem] h-14 mt-6">
              Checkout
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center font-bold text-gray leading-[1.625rem] pb-[5.31rem] pt-[4.81rem]">
            Your cart is empty.
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
