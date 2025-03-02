/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const TransactionTable = () => {
  const { transactions } = useSelector((state) => state.transactions);
  const [selectedTransactionsId, setSelectedTransactionsId] = useState([]);

  const toggleSelectedTransactionIds = (transactionId) => {
    const isIdSelected = selectedTransactionsId.includes(transactionId);

    isIdSelected
      ? setSelectedTransactionsId(
          selectedTransactionsId.filter((item) => item !== transactionId)
        )
      : selectedTransactionsId([...selectedTransactionsId, transactionId]);
  };
  return (
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
          <th>
            {!!selectedTransactionsId.length && (
              <Button variant="outline-danger">Delete Selected</Button>
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
                  onClick={() => toggleSelectedTransactionIds(transaction.id)}
                ></Form.Check>
              </Form>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
