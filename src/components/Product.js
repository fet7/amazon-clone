import React, { useState } from "react";
import Image from "next/dist/client/image";
import { starIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-format";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="flex">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs mt-2 my-2 line-clam-2">{description}</p>

      <div className="mb-5 ">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img
            className="w-12"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add To Cart</button>
    </div>
  );
}

export default Product;
