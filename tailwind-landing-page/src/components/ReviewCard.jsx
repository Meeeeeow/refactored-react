/* eslint-disable react/prop-types */
import { star } from "../assets/icons";
const ReviewCard = ({ review }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={review.imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{review.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">
          {review.rating}
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {review.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
