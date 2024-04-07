import React from 'react'
import { useAddAccountMutation, useDeleteAccountMutation, useGeAccountsQuery, useUpdateAccountMutation } from '../api/adminSlice'

const Admin = () => {


  const {data, error, isLoading, isSuccess} = useGeAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [delAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div style={{width: "100%", height: "100%",padding: "20px", display: "flex",
    flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black"}}>
        <h1>Admin Component</h1>
        {isLoading ? <p>Loading....</p> :
        isSuccess && data.map((account) => <p key={account.id}>{account.id}: {account.amount}
        <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => delAccount(account.id)}> Delete Account </button>
        <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => updateAccount({id: account.id,amount: 717})}> Update Account </button>
        </p>)}
        <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => addAccount(102, data.length+1)}> Get user account</button>
    </div>
  )
}

export default Admin