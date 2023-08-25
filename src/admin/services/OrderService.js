import axios from "./AxiosCustom";

const fetchAllOrders = (page) => {
  return axios.get(`api/orders/recent?page=${page}&size=6`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjFAZ21haWwuY29tIiwiaWF0IjoxNjkyOTg4ODQzLCJleHAiOjE2OTM4NTI4NDMsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSJ9.nVEN1tOjPOTDIaV3JJ0JXwA05kUfml1JmEYpCGcbTfY",
    },
  });
};

export { fetchAllOrders };
