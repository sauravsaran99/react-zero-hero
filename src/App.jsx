// import logo from './logo.svg';
import './App.css';
import {Card} from './Components/UI/Card'
import { ExpenseItems } from './Components/Expenses/ExpenseItems';
import { NewExpense } from './Components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {

  const expenseData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
    ];

  const [itemData, setItemData] = useState([...expenseData]);

     const extraData = (data) => {
      setItemData((prev) => {return [data, ...prev]});
    
     }

     
  return (
    <div className="App">
      <Card>
      <NewExpense gettingData={extraData}></NewExpense>
      <ExpenseItems totalData={itemData}></ExpenseItems>
      {/* {itemData.map((item) => <ExpenseItems key={item.id} data={item}/>) } */}
      {/* <ExpenseItems data={expenseData[0]}></ExpenseItems>
      <ExpenseItems data={expenseData[1]}></ExpenseItems>
      <ExpenseItems data={expenseData[2]}></ExpenseItems>
      <ExpenseItems data={expenseData[3]}></ExpenseItems> */}
      </Card>
    </div>
  );
}

export default App;
