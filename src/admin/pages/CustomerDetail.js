import Avatar from "../components/Avatar";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../services/UserService";
import { ProductPusrchased } from "../components/List";

const CustomerDetail = () => {
  const { id } = useParams();
  const styles__font = "text-blue-500 font-semibold";
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState();
  useEffect(() => {
    getCustomer();
  }, []);
  const getCustomer = async () => {
    let res = await getUser(id);
    let totals = 0;
    if (res && res.data) {
      setCustomer(res.data);
      setOrder(res.data.orderDTO);
      res.data.orderDTO.map((item) => {
        totals += item.total;
      });
      setTotalExpenses(totals);
    }
  };

  return (
    <>
      <section className="w-full shadow-lg h-[800px] bg-white rounded-lg p-4 ">
        <header className="font-bold text-xl mb-3">
          <div>Customer Detail</div>
        </header>
        <div className="mb-[20px] flex flex-col gap-2">
          <div>
            Customer id: <span className={styles__font}>{id}</span>
          </div>
          <div>
            Email: <span className={styles__font}>{customer.email}</span>
          </div>
          <div>
            Created:{" "}
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
          <div className="flex flex-col gap-2">
            <div>
              Name: <span className={styles__font}>{customer.fullName}</span>
            </div>
            <div>
              PhoneNumber:{" "}
              <span className={styles__font}>{customer.phoneNumber}</span>
            </div>
            <div>
              address: <span className={styles__font}>{customer.address}</span>
            </div>
            <div>
              The total of orders:{" "}
              <span className={styles__font}>{order.length}</span>
            </div>
            <div>
              Expenses: <span className={styles__font}>{totalExpenses} đ</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="flex justify-between h-[400px] mt-6">
          {/* <ListOrder />
          <Cart /> */}
          <div className="flex-1 ">
            <ProductPusrchased id={id} order={order} />
          </div>
          <div className="flex-1 ml-4">Cart </div>
        </div>
      </section>
    </>
  );
};

export default CustomerDetail;
