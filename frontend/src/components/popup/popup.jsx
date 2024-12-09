import { useMutation } from "@tanstack/react-query";
import { Rate } from "antd";
import axios from "axios";
import React from "react";

import { toast } from "react-toastify";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Popup = ({ setPop, reviews, productId, userId, refetch, token }) => {
  const [value, setValue] = React.useState(0);
  const [description, setDescription] = React.useState("");

  console.log(reviews, "hello");

  React.useEffect(() => {
    setValue(reviews?.rateCount);
    setDescription(reviews?.review);
  }, []);

  const createRating = async (newRating) => {
    const response = await axios.post(
      `https://${import.meta.env.VITE_API}/products/rating`,
      newRating,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  const updateRating = async (updatedRating) => {
    const response = await axios.put(
      `https://${import.meta.env.VITE_API}/products/rating`,
      updatedRating,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation(createRating, {
    onSuccess: (data) => {
      console.log("rated:", data);
      // alert('User created successfully!');
      // Reset the form on success

      toast.success("Thanks for the feedback");
      refetch();
      setPop(false);
    },
    onError: (error) => {
      console.error("Error creating error:", error);
      alert("Failed to rate");
    },
  });

  const update = useMutation(updateRating, {
    onSuccess: (data) => {
      console.log("rated:", data);
      // alert('User created successfully!');
      // Reset the form on success

      toast.success("Updated your  feedback");
      refetch();
      setPop(false);
    },
    onError: (error) => {
      console.error("Error creating error:", error);
      alert("Failed to rate");
    },
  });

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const Submit = (data) => {
    console.log("hai");

    const parsedData = {
      rateCount: value,
      review: description,
      productId: productId,
      userId: userId,
    };

    if (reviews === undefined) {
      mutation.mutate(parsedData);
      // Pass form data to the mutation
    } else {
      const updateData = {
        ...parsedData,
        id: reviews?.id,
      };
      update.mutate(updateData);
      alert("police station");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex w-full h-screen justify-center items-center">
        <div className="bg-white w-full mx-8 max-w-3xl shadow-lg p-4">
          <div
            style={{
              border: "1px solid #ddd",
              padding: "4px 4px",
              borderRadius: "5px",
            }}
          >
            <div>
              <span>Rate this Product</span>
            </div>
            <div
              style={{
                lineHeight: "50px",
              }}
            >
              <Rate tooltips={desc} onChange={setValue} value={value} />
              <span>{desc[value - 1]}</span>
            </div>
          </div>
          <div
            style={{
              // border: "1px solid #ddd",
              // margin: "10px 0px",
              padding: "10px 0px",
            }}
          >
            <div>
              <span>Review the product</span>
            </div>
            <div className="w-full h-48 border p-2">
              <textarea
                placeholder="Description"
                className="w-full h-full"
                name=""
                id=""
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <div>
              <button
                onClick={() => setPop(false)}
                style={{
                  backgroundColor: " #1e3a8a",
                  color: "#ffffff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                Cancel
              </button>
            </div>
            <div
              style={{
                backgroundColor: " #1e3a8a",
                color: "#ffffff",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <button onClick={Submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
