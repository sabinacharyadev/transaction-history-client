import { toast } from "react-toastify";
import {
  getTransaction,
  deleteTransactions,
} from "../../axios/transactionAxios";
import { setTransactions } from "./transactionSlice";

export const fetchTransactions = (userId) => async (dispatch) => {
  const response = await getTransaction(userId);
  if (response.status === "error") {
    return toast.error(response.message);
  }
  dispatch(setTransactions(response.data));
};

export const deleteSelectedTransactions =
  (userId, selectedIds) => async (dispatch) => {
    const response = await deleteTransactions(userId, selectedIds);
    if (response.status === "error") {
      return toast.error(response.message);
    }

    toast.success(response.data.deletedCount + " " + response.message);
    dispatch(fetchTransactions(userId));
  };
