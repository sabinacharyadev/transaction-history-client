import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import { useEffect, useState } from "react";
import { getTransaction } from "../axios/transactionAxios";

/* eslint-disable react/prop-types */
const TransactionPage = (props) => {
  const { user } = props;
  const [transactions, setTransactions] = useState([{}]);

  const fetchTransactions = async () => {
    const response = await getTransaction(user.id);
    if (response.status === "error") {
      console.log(response.error);
      return;
    }
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  });
  return (
    <Container>
      <TopNavBar userName={user.name} />

      {/* Transaction Form */}
      <TransactionForm userId={user.id} fetchTransactions={fetchTransactions} />
      <TransactionTable transactions={transactions} />
    </Container>
  );
};

export default TransactionPage;
