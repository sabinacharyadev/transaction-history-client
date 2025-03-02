import { toast } from "react-toastify";
import { getTransaction } from "../../axios/transactionAxios";
import { setTransactions } from "./transactionSlice";

export const fetchTransactions = (userId) => async (dispatch) => {
  const response = await getTransaction(userId);
  if (response.status === "error") {
    return toast.error(response.message);
  }
  dispatch(setTransactions(response.data));
};
