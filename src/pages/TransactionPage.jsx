import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../redux/transaction/transactionActions";

/* eslint-disable react/prop-types */
const TransactionPage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions(user.id));
  }, [dispatch, transactions, user.id]);
  return (
    <Container>
      <TopNavBar />
      <TransactionForm />
      <TransactionTable />
    </Container>
  );
};

export default TransactionPage;
