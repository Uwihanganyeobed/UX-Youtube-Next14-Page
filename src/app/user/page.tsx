import React from 'react'
import { fetchUsers } from './data/route'

export default async function UsersPage() {
   const users = await fetchUsers();
   console.log(users)
  return (
    <div>
      {users.map((user)=>(
         <div key={user.$id}>
            <p>{user.email}</p>
         </div>
      ))}
      Users
    </div>
  )
}
