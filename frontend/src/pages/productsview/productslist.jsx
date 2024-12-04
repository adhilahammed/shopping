// import { configUrl } from "../../config";
// import { useUserSessionStore } from "../store/userSession";
// import client from "../ts-rest/client";

import { useQuery } from "@tanstack/react-query";
import { useUserSessionStore } from "../../store/userSession";
import axios from "axios";

// import UploadImage from "./UploadImage";
const productsArray = [
  {
    name: "sky",
    img: "https://rukminim2.flixcart.com/image/416/416/xif0q/backpack/k/3/i/-original-imah4yfgxa533sgf.jpeg?q=70&crop=false",
  },
  {
    name: "star",
    img: "https://rukminim2.flixcart.com/image/416/416/xif0q/backpack/k/o/s/-original-imah4rnchesanhnv.jpeg?q=70&crop=false",
  },
  {
    name: "dell",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/l/z/c/-original-imah4rnc92jbn8nt.jpeg?q=70",
  },
  {
    name: "adidas",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/k/q/l/-original-imah4yfgzqbhns9w.jpeg?q=70",
  },
];

export default function ProductList() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    },
  });

  console.log(data);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2  gap-6">
      {data &&
        data.map((item) => (
          <div
            className="w-60 shadow-md rounded-lg border max-w-xs mx-auto overflow-hidden"
            key={"default"}
          >
            <a href="/products">
              <div className="service-img rounded-lg border border-gray-300 transform object-fill duration-300">
                {/* <UploadImage
                  disabled={true}
                  imageId={1}
                  imgUrlGenerator={(id) => `${configUrl.FILEGET_URL}/${id}`}
                /> */}
                <img src={`${item.image}`} alt="" />
              </div>

              <p className="pb-2 pt-3 font-medium">{item.name}</p>
              <p className="pb-2 text-left text-sm sm:h-12">
                {"A short description of Service"}
              </p>
              <div className="flex gap-2 text-sm items-center w-full">
                <text>{"Flat rate"}</text>
                <text>
                  {"$"}
                  {"500"}
                </text>
                <div className="bg-[#28610D] text-white px-2 rounded-l-2xl gap-1 text-sm items-center flex rounded-r-2xl">
                  <text>4.0</text>
                  {<img src="/images/star.svg" className="h-3 w-3" alt="" />}
                </div>
                <text className="text-gray-300">({"2"})</text>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
