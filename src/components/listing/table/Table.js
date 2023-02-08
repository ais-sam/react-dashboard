import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import {users} from "../../../constants"

const Table = () => {
  return (

    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <TableHeader/>
              <tbody>
                {users.map(user=><TableRow key={user.id} user={user}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Table