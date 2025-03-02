import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
export const RatingBlock = ({
  imgSrc,
  rating,
  platform,
}: {
  imgSrc: string;
  rating: number;
  platform: string;
}) => (
  <div className="flex items-center space-x-4">
    <Image src={imgSrc} alt={platform} width={40} height={40} loading="lazy" />
    <div>
      <div className="flex items-center space-x-2 ">
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-bold">
          {rating}
        </h1>
        <div className="flex items-center">
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <BsStarHalf className="w-4 h-4 text-yellow-600" />
        </div>
      </div>
      <p className="text-gray-600 text-small sm:text-base">
        Best rated on {platform}
      </p>
    </div>
  </div>
);
