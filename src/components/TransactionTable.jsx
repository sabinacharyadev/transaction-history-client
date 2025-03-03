/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedTransactions } from "../redux/transaction/transactionActions";

const TransactionTable = () => {
  const { transactions } = useSelector((state) => state.transactions);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedTransactionsId, setSelectedTransactionsId] = useState([]);

  const toggleSelectedTransactionIds = (transactionId) => {
    const isIdSelected = selectedTransactionsId.some(
      (item) => item === transactionId
    );

    isIdSelected
      ? setSelectedTransactionsId(
          selectedTransactionsId.filter((item) => item !== transactionId)
        )
      : setSelectedTransactionsId([...selectedTransactionsId, transactionId]);
  };

  const handleOnDelete = () => {
    dispatch(deleteSelectedTransactions(user.id, selectedTransactionsId));
  };
  return (
    <>
      <h2 className="m-3">Transactions</h2>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr
            style={{
              height: "4rem",
            }}
          >
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th style={{ width: "20rem" }}>
              {!!selectedTransactionsId.length && (
                <Button variant="outline-danger" onClick={handleOnDelete}>
                  Delete Selected
                </Button>
              )}
              {!selectedTransactionsId.length && (
                <span className="text-danger">Delete</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Empty State */}
          {!transactions.length && (
            <tr>No records found! Please add a transaction</tr>
          )}
          {transactions.map((transaction, index) => (
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{transaction.title}</td>
              <td>{transaction.type}</td>
              <td>
                {
                  <td>
                    {transaction.type === "expense" ? (
                      <span className="text-danger"> {transaction.amount}</span>
                    ) : (
                      <span className="text-success">{transaction.amount}</span>
                    )}
                  </td>
                }
              </td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>

              <td>
                <Form>
                  <Form.Check
                    type="checkbox"
                    name={transaction._id}
                    onClick={() =>
                      toggleSelectedTransactionIds(transaction._id)
                    }
                  ></Form.Check>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionTable;
