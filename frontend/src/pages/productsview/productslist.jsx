// import { configUrl } from "../../config";
// import { useUserSessionStore } from "../store/userSession";
// import client from "../ts-rest/client";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

// import UploadImage from "./UploadImage";

export default function ProductList() {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(
        `https://${import.meta.env.VITE_API}/products`
      );
      return response.data;
    },
  });

  console.log(data);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-6">
      {data &&
        data?.map((item, index) => (
          <div
            className="w-60 shadow-md rounded-lg border max-w-xs mx-auto overflow-hidden"
            key={item?.id || index} // Use item.id if available; fallback to index
          >
            <a href={`/products/${item?.id}`}>
              <div className="service-img rounded-lg border border-gray-300 transform object-fill duration-300">
                <img src={item?.image} alt={item?.name} />
              </div>
              <div className="px-2">
                <p className="pb-2 pt-3 font-medium">{item?.name}</p>
                <p className="pb-2 text-left text-sm sm:h-19">{item?.color}</p>
                <div className="flex gap-2 text-sm items-center w-full">
                  <span>
                    {"$"}
                    {item?.price}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
