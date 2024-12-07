// import { ReviewProps } from "../types";
// import { formatDistanceToNow } from "date-fns";

export const Reviews = ({ name, ratedAt, rating, review }) => {
  return (
    <div className="border-2 rounded-sm p-2 mt-3" key={"default"}>
      <div className="bg-[#28610D] text-white px-1 mb-2 rounded-l-2xl gap-1 text-xs items-center flex rounded-r-2xl w-12">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/star.svg" className="h-3 w-3" alt="" />
        }
        <span>{rating?.toFixed(1)}</span>
      </div>
      <p>{review}</p>
      <div className="flex justify-between">
        <div className="flex gap-3 text-xs mt-2 opacity-25">
          <span>{name || ""}</span>
          <span>ratedAt &&</span>
        </div>
      </div>
    </div>
  );
};
