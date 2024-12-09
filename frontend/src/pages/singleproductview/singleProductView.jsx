import React from "react";
import { Ratings } from "../../components/ratings/Ratings";
import { Reviews } from "../../components/reviews/Reviews";
import Popup from "../../components/popup/popup";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserSessionStore } from "../../store/userSession";
import LoginAlert from "../../components/popup/authalert";

const ratings = true;

const product = {
  name: "Model Name",
  color: "color",
  price: "233",
};

export const SingleProductView = () => {
  const params = useParams();
  const userSession = useUserSessionStore((state) => state.session);

  const [pop, setPop] = React.useState(false);
  const [alert, setLoginAlert] = React.useState(false);

  console.log(userSession?.userId, "userSession");

  const { data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        `https://${import.meta.env.VITE_API}/products/${params.id}`
      );
      return response.data;
    },
  });
  console.log(data?.allProducts?.reviews);
  const filter = data?.allProducts?.reviews?.find((item) => {
    return item?.userId === userSession?.userId;
  });
  console.log(filter);

  const buttonClick = () => {
    if (userSession?.userId) {
      setPop(true);
    } else {
      setLoginAlert(true);
    }
  };

  // const filtered = data?.allProducts?.reviews
  //   .filter((item) => {
  //     return item?.userId === userSession?.userId;
  //   })

  return (
    <>
      {alert && <LoginAlert />}
      {pop && (
        <Popup
          setPop={setPop}
          reviews={filter}
          productId={data?.allProducts?.id}
          userId={userSession?.userId}
          token={userSession?.token}
          refetch={refetch}
        />
      )}

      <div className="flex sm:w-auto lg:justify-center flex-wrap lg:flex-nowrap  lg:gap-9 md:gap-4 mx-10 ">
        <div className="grid grid-cols-1 md:w-5/12 h-fit">
          {/* <text className="font-semibold">{service?.name ?? "Service name"}</text> */}
          <div className="pr-6 md:pr-0">
            <p className="py-4 overflow-hidden">
              {/* {service?.shortDescription ?? "Service description"} */}
            </p>
            <div className="w-64 md:w-full">
              <div className="flex w-full sm:h-[80vh]">
                <>
                  <img src={`${data?.allProducts?.image}`} alt="" />
                  <img src="" alt="" />
                </>
              </div>

              <div className="my-3 w-full"></div>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 lg:w-7/12 lg:pl-2 ">
          <div className="h-4 sm:h-20"></div>
          <div className="flex flex-col gap-4">
            <div>
              {/* <div className="rounded-full border border-slate-300 text-slate-500 inline-block px-1.5 py-1 text-sm ">
                No ratings
              </div> */}
              {ratings && (
                <p
                  className={`${
                    Number(5) > 4
                      ? "bg-[#28610D] text-white"
                      : "bg-red-600 text-white"
                  }  px-2 rounded-l-2xl gap-1 text-sm items-center flex rounded-r-2xl w-14`}
                >
                  <span className="">{data?.averageRating}</span>
                  <div>
                    {
                      // eslint-disable-next-line @next/next/no-img-element
                      <span className="h-3 w-3">&#11088;</span>
                      // <img src="/images/star.svg" className="h-3 w-3" alt="" />
                    }
                  </div>
                </p>
              )}
            </div>
            <div className="">
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    lineHeight: "30px",
                  }}
                >
                  <p>Model Name</p>
                  <p>Color</p>
                  <p>Specifications</p>
                </div>
                <div
                  style={{
                    lineHeight: "30px",
                  }}
                >
                  <p>{data?.allProducts?.name}</p>
                  <p>{data?.allProducts?.color}</p>
                  <p>{data?.allProducts?.price}</p>
                </div>
              </div>
              {/* <LabelItem data={description} /> */}
            </div>
          </div>

          <div className="min-h-[50vh] flex flex-col justify-end ">
            <div
              className=""
              style={{
                display: "flex",

                justifyContent: `${
                  data?.allProducts?.reviews?.length === 0
                    ? `flex-end`
                    : `space-between`
                }`,
              }}
            >
              {data?.allProducts?.reviews?.length !== 0 && (
                <Ratings
                  averageRating={data?.averageRating}
                  numberOfRatings={data?.totalRatingsCount}
                  // rating={1}
                />
              )}

              <div>
                <button
                  onClick={buttonClick}
                  style={{
                    backgroundColor: " #1e3a8a",
                    color: "#ffffff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Rate Now
                </button>
              </div>
            </div>

            <div className="h-[30vh] overflow-y-auto ">
              {data?.allProducts?.reviews?.map((item) => (
                <>
                  <Reviews
                    rating={item?.rateCount}
                    review={item?.review}
                    name={`sudessh`}
                    ratedAt={Date.now()}
                  />
                </>
              ))}
            </div>
          </div>

          {/* <Reviews
            rating={2}
            review={`good`}
            name={`sudessh`}
            ratedAt={Date.now()}
          /> */}
        </div>
      </div>
    </>
  );
};
