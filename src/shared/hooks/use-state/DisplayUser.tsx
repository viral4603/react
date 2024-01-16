import { useState } from "react"
// ------------------------------------------- //
import User from "../model/hooks.model"

const userList: User[] = [
    {
        name: 'viral',
        age: 28,
        location: 'valsad'
    },
    {
        name: 'ajay',
        age: 25,
        location: 'surat'
    },
    {
        name: 'vijay',
        age: 30,
        location: 'vapi'
    },
    {
        name: 'mehul',
        age: 26,
        location: 'navasri'
    },

]

function DisplayUser() {
    /**declare users as state */
    const [users, setUser] = useState<User[]>(userList)

    /**declare acive user as state  */
    const [activeUser, setActiveUser] = useState<User>(userList[0])

    /**
     * Chanage activeUser state by call setter function
     */
    const handleRenameActiveUser = () => {
        setActiveUser({ ...activeUser, name: 'john' })
    }
    
    /**
     * remove user from user list
     * @param id index of user that will be remove
    */
   const handleRemoveUser = (id: number) => {
       const newUser = users.filter((_: User, index: number) => index !== id)
           
       setUser(newUser) //trigger 1
       setActiveUser({ ...activeUser, name: 'john' }) //trigger 2
    }

    /**display list of users */
    const renderUserList = users.map((user, index) => {
        return (
            <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.age}</td>
                <td className="text-center">{user.location}</td>
                <td className="text-center">
                    <button className="btn bg-red-400 hover:bg-red-300" onClick={() => {
                        handleRemoveUser(index)
                    }}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="w-[50%] mx-auto">
            <h3 className="font-bold text-3xl my-3">User List</h3>

            <div className="flex justify-between my-3">
                <h3 className="text-2xl">{activeUser.name}</h3>
                <button className="btn" onClick={handleRenameActiveUser}>Rename</button>
            </div>

            <table className="border-collapse table-fixed w-full text-sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>location</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUserList}
                </tbody>
            </table>

        </div>
    )
}

export default DisplayUser