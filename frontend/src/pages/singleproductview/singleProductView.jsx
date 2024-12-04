import React from "react";
import { Ratings } from "../../components/ratings/Ratings";
import { Reviews } from "../../components/reviews/Reviews";
import Popup from "../../components/popup/popup";




export const SingleProductView = (

) => {
 
 const [pop,setPop]=React.useState<boolean>(false)
//   const [active, setActive] = React.useState<number>(0);

  


  return (
    <>
    {pop&&<Popup/>}
    
    <div className="flex sm:w-auto lg:justify-center flex-wrap lg:flex-nowrap py-6 lg:gap-9 md:gap-4 mx-10">
      <div className="grid grid-cols-1 md:w-5/12 h-fit">
        {/* <text className="font-semibold">{service?.name ?? "Service name"}</text> */}
        <div className="pr-6 md:pr-0">
          <p className="py-4 overflow-hidden">
            {/* {service?.shortDescription ?? "Service description"} */}
          </p>
          <div className="border w-64 md:w-full">
     
              <div className="flex w-full">
           
                  <>
                 <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/l/z/c/-original-imah4rnc92jbn8nt.jpeg?q=70" alt="" />
                  <img src="" alt="" />
                   
                      {/* {imageBuffer.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className=" w-full">
                            <UploadImage
                              disabled={true}
                              imageId={item}
                              imgUrlGenerator={(id: any) =>
                                `${configUrl.FILEGET_URL}/${id}`
                              }
                            />
                          </div>
                        </SwiperSlide>
                      ))} */}
                 
                  </>
            
              </div>
           

            <div className="my-3 w-full">
              {/* <Swiper
                pagination={true}
                slidesPerView={4}
                freeMode={true}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
              >
                {imageBuffer.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      firstSwiper?.slideTo(index);
                    }}
                  >
                    <div
                      className={`mr-1.5   ${
                        active === index
                          ? "border-2 border-primary object-scale-down"
                          : " "
                      }`}
                    >
                      <UploadImage
                        disabled={true}
                        imageId={item}
                        imgUrlGenerator={(id: any) =>
                          `${configUrl.FILEGET_URL}/${id}`
                        }
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-6/12 lg:w-7/12 lg:pl-2 ">
        <div className="h-4 sm:h-20"></div>
        <div className="flex flex-col gap-4">
          <div>
         
              <div className="rounded-full border border-slate-300 text-slate-500 inline-block px-1.5 py-1 text-sm ">
                No ratings
              </div>
          
              <p
                className={`px-2 rounded-l-2xl gap-1 text-sm items-center flex rounded-r-2xl w-14`}
              >
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/images/star.svg" className="h-3 w-3" alt="" />
                }
                <text>
                    {/* {service?.averageRating?.toFixed(1)} */}5
                    </text>
              </p>
         
          </div>
          <div className="flex">
            ddsdfasf
            {/* <LabelItem data={description} /> */}
          </div>
          <div>
            {/* {addtionalInfo} */}ddfdsfa
            </div>
          <div className="self-start py-2">
           <button>ddsfdsaf</button>
          </div >


         
    <div className="flex justify-between">
<Ratings

                averageRating={1}
                numberOfRatings={1}
                rating={1}
              />
              <div>
                <button onClick={()=>setPop(true)}>Rate  now</button>
              </div>
    </div>
              
         
        </div>
        
                <Reviews
                  rating={2}
                  review={`good`}
                  name={`sudessh`}
                  ratedAt={Date.now()}
                />
         
      </div>
    </div>
    </>
  );
};
