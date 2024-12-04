// import { RatingInfo, RatingProps } from "../types";
// import { Progress } from "antd";
// import { COLOR_RATING } from "../utils";

export const Ratings = ({ averageRating, numberOfRatings, rating }) => {
  return (
    <div>
      <text className="font-medium">Ratings and Reviews</text>
      <div className="flex gap-8">
        <div className="grid items-center my-auto">
          <div className="flex text-center items-center justify-center gap-2">
            <text className="text-xl font-medium text-[#000000cc]">
              {averageRating?.toFixed(1)}
            </text>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/black-star.svg" className="h-5 w-5" alt="" />
            }
          </div>
          <text className="bg-[#000000cc] text-xs rounded-l-2xl rounded-r-2xl py-1 w-[4.3rem] text-center text-white">
            {numberOfRatings} ratings
          </text>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-36">
            {rating &&
              rating?.ratings?.aggregates?.map((r, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <text>{r.rating}</text>
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/images/black-star.svg"
                      className="h-3 w-3"
                      alt=""
                    />
                  }
                  <Progress
                    percent={r.percentage}
                    showInfo={false}
                    strokeColor={COLOR_RATING[r.rating]}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
