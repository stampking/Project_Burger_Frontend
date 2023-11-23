import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useOrder from "../hooks/use-order";
import QRcode from "../../public/img/QRcode.jpg";
import Loading from "../components/Loading";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { createOrderList, createOrder } = useOrder();

  const [input, setInput] = useState({
    image: "",
    totalPrice: createOrderList.totalPrice,
    orderDetail: createOrderList.orderDetail,
  });

  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const loadingMessage = "PROCESSING ...";

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    setInput({ ...input, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(input);

      const formData = new FormData();
      // formData.append("totalPrice", input.totalPrice);
      formData.append("itemId", createOrderList.id);
      formData.append("slipURL", input.image);

      setLoading(true);

      await createOrder(formData);
      navigate("/order");
      setLoading(false);
      console.log("finish PaymentPage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  bg-black min-h-screen">
      <div>
        <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold text-white">
          <button onClick={() => navigate("/cart")}> &lt; Payment</button>
        </div>
      </div>
      {!isLoading ? (
        <div>
          <div className="flex flex-row justify-evenly my-6">
            <div className="bg-white p-4 rounded-md text-blackColor">
              <div>
                <div className="text-2xl font-semibold">Transfer</div>
                <div>
                  <span className="font-semibold">Name :</span> John Doe
                </div>
                <div>
                  {" "}
                  <span className="font-semibold">Bank Name :</span> Thai Bank
                </div>
                <div>
                  {" "}
                  <span className="font-semibold">Account No.</span>{" "}
                  123-456789-0
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xl font-semibold">QRcode</div>
                <div className="p-2">
                  <img src={QRcode} alt="Qrcode" width={350} />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md">
              <form>
                <div className="mb-4">
                  <label className="text-xl text-gray-500 font-semibold">
                    upload slip image
                  </label>
                </div>
                <input type="file" name="image" onChange={handleChangeImage} />
                {image ? (
                  <div className="p-4">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="product"
                      width={300}
                    />
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
          {image ? (
            <div className="flex justify-end m-4 y-2 pt-8 mr-72">
              <button
                className="btn btn-warning btn-wide text-2xl  bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 font-semibold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex justify-end m-4 y-2 pt-8 mr-[300px]">
              <button
                className="btn btn-warning btn-wide text-2xl  bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 font-semibold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="h-screen bg-transparent ">
          <div className="min-[900px]:pt-[19.25rem] min-[900px]:pl-[1.25rem]">
            <Loading message={loadingMessage} />
          </div>
        </div>
      )}
    </div>
  );
}
