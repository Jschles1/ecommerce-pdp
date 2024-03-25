"use client";

import * as React from "react";
import Image, { StaticImageData } from "next/image";
import ImageProduct1 from "/public/images/image-product-1.jpg";
import ImageProduct1Thumbnail from "/public/images/image-product-1-thumbnail.jpg";
import ImageProduct2 from "/public/images/image-product-2.jpg";
import ImageProduct2Thumbnail from "/public/images/image-product-2-thumbnail.jpg";
import ImageProduct3 from "/public/images/image-product-3.jpg";
import ImageProduct3Thumbnail from "/public/images/image-product-3-thumbnail.jpg";
import ImageProduct4 from "/public/images/image-product-4.jpg";
import ImageProduct4Thumbnail from "/public/images/image-product-4-thumbnail.jpg";
import IconNext from "/public/images/icon-next.svg";
import IconPrevious from "/public/images/icon-previous.svg";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const productImages = [
  { id: 1, src: ImageProduct1, thumbnail: ImageProduct1Thumbnail },
  { id: 2, src: ImageProduct2, thumbnail: ImageProduct2Thumbnail },
  { id: 3, src: ImageProduct3, thumbnail: ImageProduct3Thumbnail },
  { id: 4, src: ImageProduct4, thumbnail: ImageProduct4Thumbnail },
];

type ImageId = (typeof productImages)[number]["id"];

export default function ProductImageGallery() {
  const [activeMainImage, setActiveMainImage] = React.useState<StaticImageData>(
    productImages[0].src
  );
  const [activeGalleryImage, setActiveGalleryImage] =
    React.useState<StaticImageData>(productImages[0].src);

  function handleThumbnailClick(_: React.SyntheticEvent, id: ImageId) {
    const newImage = productImages.find((image) => image.id === id)!;
    setActiveMainImage(newImage.src);
  }

  function handleGalleryThumbnailClick(_: React.SyntheticEvent, id: ImageId) {
    const newImage = productImages.find((image) => image.id === id)!;
    setActiveGalleryImage(newImage.src);
  }

  function handlePreviousGalleryClick() {
    const currentIndex = productImages.findIndex(
      (image) => image.src === activeGalleryImage
    );
    const previousIndex = currentIndex - 1;
    const previousImage = productImages[previousIndex];
    if (previousImage) {
      setActiveGalleryImage(previousImage.src);
    } else {
      setActiveGalleryImage(productImages[productImages.length - 1].src);
    }
  }

  function handleNextGalleryClick() {
    const currentIndex = productImages.findIndex(
      (image) => image.src === activeGalleryImage
    );
    const nextIndex = currentIndex + 1;
    const nextImage = productImages[nextIndex];
    if (nextImage) {
      setActiveGalleryImage(nextImage.src);
    } else {
      setActiveGalleryImage(productImages[0].src);
    }
  }

  return (
    <div className="pl-12 w-[27.8125rem]">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="h-auto p-0 mb-8">
            <Image
              src={activeMainImage}
              alt="Fall Limited Edition Sneakers"
              className="object-cover rounded-[0.625rem]"
            />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="relative">
            <Image
              src={activeGalleryImage}
              alt="Fall Limited Edition Sneakers"
              className="object-cover rounded-[0.625rem]"
            />
            <Button
              variant="ghost"
              className="absolute -left-7 bg-white rounded-full w-[3.5rem] h-[3.5rem] top-[45%]"
              onClick={handlePreviousGalleryClick}
            >
              <Image src={IconPrevious} alt="Previous" />
            </Button>
            <Button
              variant="ghost"
              className="absolute -right-7 bg-white rounded-full w-[3.5rem] h-[3.5rem] top-[45%]"
              onClick={handleNextGalleryClick}
            >
              <Image src={IconNext} alt="Next" />
            </Button>
          </div>
          <div className="flex items-center gap-x-[1.94rem] pt-[2.5rem] px-[3.31rem]">
            {productImages.map((image, index) => (
              <Button
                variant="ghost"
                className="h-auto p-0"
                key={image.id}
                onClick={(e) => handleGalleryThumbnailClick(e, image.id)}
              >
                <Image
                  src={image.thumbnail}
                  alt={`Product Image ${index + 1}`}
                  className={cn(
                    "object-cover rounded-[0.625rem]",
                    image.src == activeGalleryImage && "border-2 border-orange"
                  )}
                />
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex items-center gap-x-[1.94rem]">
        {productImages.map((image, index) => (
          <Button
            variant="ghost"
            className="h-auto p-0"
            key={image.id}
            onClick={(e) => handleThumbnailClick(e, image.id)}
          >
            <Image
              src={image.thumbnail}
              alt={`Product Image ${index + 1}`}
              className={cn(
                "object-cover rounded-[0.625rem]",
                image.src == activeMainImage && "border-2 border-orange"
              )}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
