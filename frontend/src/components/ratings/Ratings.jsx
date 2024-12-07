export const Ratings = ({ averageRating, numberOfRatings, rating }) => {
  return (
    <div>
      <span className="font-medium">Ratings and Reviews</span>
      <div className="flex gap-8">
        <div className="grid items-center my-auto">
          <div className="flex text-center items-center justify-center gap-2">
            <span className="text-lg font-medium text-[#000000cc]">
              {averageRating?.toFixed(1)}
            </span>
            <div>
              {
                // eslint-disable-next-line @next/next/no-img-element
                <span className="h-3 w-3">&#11088;</span>
                // <img src="/images/star.svg" className="h-3 w-3" alt="" />
              }
            </div>
          </div>
          <span className="bg-[#000000cc] text-xs rounded-l-2xl rounded-r-2xl py-1 w-[4.3rem] text-center text-white">
            {numberOfRatings} ratings
          </span>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-36">
            {rating &&
              rating?.ratings?.aggregates?.map((r, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <span>{r.rating}</span>
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
