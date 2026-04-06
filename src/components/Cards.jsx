import React from "react";
import "./Cards.css";
import { Card, Row, Button } from "antd";

function Cards({ income,expense,totalBalance,showExpenseModal, showIncomeModal }) {
  return (
    <div>
      <Row className="my-row">
        <Card className="my-card" title="Current Balance">
          <p>${totalBalance}</p>
          <Button className="my-btn">Reset Balance</Button>
        </Card>
        <Card className="my-card" title="Add Income">
          <p>${income}</p>
          <Button className="my-btn" onClick={showIncomeModal}>
            Add Income
          </Button>
        </Card>
        <Card className="my-card" title="Add Expense">
          <p>${expense}</p>
          <Button className="my-btn" onClick={showExpenseModal}>
            Add Expense
          </Button>
        </Card>
      </Row>
    </div>
  );
}

export default Cards;
