import React from 'react'

const UserRow = () => {
  return (
    <tr className="p-2">
    <td>
      <img
        src="https://via.placeholder.com/50"
        alt="avatar"
        className="rounded-full w-14"
      />
    </td>
    <td>
      {`Kevin`} {`Ceron`}
    </td>
    <td>{"kevinceron@gmial.com"}</td>
  </tr>
  )
}

export default UserRow
