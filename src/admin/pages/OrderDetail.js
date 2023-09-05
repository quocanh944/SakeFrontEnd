import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../services/UserService";
import BillInfomation from "../components/BillInfomation";
import { ProductsOfOrder } from "../components/List";
import SubSummary from "../components/SubSummary";
import { getOrderById } from "../services/OrderService";
import { Button } from "bootstrap";

const OrderDetail = (props) => {
  const { id } = useParams();
  const styles__font = "text-orange-500 font-semibold";
  const styles__header = "text-lg font-bold h-[10%]";
  const [customer, setCustomer] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);
  const getOrder = async () => {
    let res = await getOrderById(id);
    // console.log(res);
    if (res && res.data) {
      setCustomer(res.data);
      setProduct(res.data.orderDetailList);
    }
  };

  return (
    <>
      <section className="w-full shadow-lg h-full bg-white rounded-lg p-4 flex flex-col justify-between gap-3">
        <header className="font-bold text-xl mb-3">
          <div>Order Detail</div>
        </header>
        <div className="mb-[20px] flex flex-col gap-2">
          <div>
            Order id: <span className={styles__font}>{id}</span>
          </div>
          <div>
            Created:
            <span className={styles__font}>{customer.created_date}</span>
          </div>
        </div>
        <div className="flex gap-8 mb-4">
          <div className="w-[150px] h-[150px] rounded-full">
            <div class="w-full h-full overflow-hidden bg-gray-200 rounded-full ">
              {customer.avatar ? (
                <img src={customer.avatar} alt=""></img>
              ) : (
                <svg
                  class=" text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="w-full h-[500px] mt-6 grid grid-cols-4 gap-4">
          <ProductsOfOrder products={product} styles={styles__header} />
          <BillInfomation
            guestName={customer.name}
            guestAddress={customer.address}
            guestPhoneNumber={customer.phoneNumber}
            createdDate={customer.created_date}
            styles={styles__header}
          />
          <SubSummary total={customer.total} styles={styles__header} />
          <div className="hidden"></div>
        </div>
        <footer className="w-full h-[50px] flex items-center">
          <Link
            to={`/order/`}
            className="bg-orange-300 text-center hover:bg-orange-700 hover:text-orange-200 text-orange-500 font-bold py-1 px-4 rounded-lg w-[100px] cursor-pointer"
          >
            Back
          </Link>
        </footer>
      </section>
    </>
  );
};

export default OrderDetail;
