const accounts=[
{
  'name':'Arun',
  'accountNo':'001',
},
{
    'name':'Babu',
    'accountNo':'002',
},
{
    'name':'Chandra',
    'accountNo':'003',
},
];

const balances={
// accountNo: balance
'001': 5000,
'002':2000,
'003':0,
};

const transactions=[
{
    'accountNo':'001',
    'type':'withdrawal',
    'amount':1000,
},
{
    'accountNo':'001',
    'type':'deposit',
    'amount':500,
},
{
    'accountNo':'001',
    'type':'withdrawal',
    'amount':1000,
},
{
    'accountNo':'002',
    'type':'deposit',
    'amount':300,
},
{
    'accountNo':'002',
    'type':'withdrawal',
    'amount':200,
},
{
    'accountNo':'003',
    'type':'deposit',
    'amount':200,
},
];


  const display=()=>{
    const accountDetails=accounts.map((details) =>({
        accountNo:details.accountNo,
        name:details.name,
        balance:balances[details.accountNo],
  }));
  console.table(accountDetails);
};
  
const updateBalancesWithTransactions=() =>
{
transactions.map((transaction)=>
(transaction.type ==="withdrawl" ? balances[transaction.accountNo] += transaction.amount:
balances[transaction.accountNo] -= transaction.amount)); 
};
const main=()=>{

    console.log("Before Transactions");
    display();
    updateBalancesWithTransactions();
    console.table("after ");
    display();
}
main();