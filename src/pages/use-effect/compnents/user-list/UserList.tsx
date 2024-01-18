import { useEffect, useState } from "react"
//------------------------------------------------//
import { User } from "../../utilites/useEffetc.model"

function UserList() {
    /** Declare state variable for users */
    const [users, setUsers] = useState<User[]>([])

    /** use useEffect hook for perform side effect
     *  use effect for http request, It only send one request after initial render 
    **/
    useEffect(() => {
        fetch('http://localhost:3000/users').then((res: any) => {
            return res.json()
        }).then((data: any) => {
            setUsers(data)
        })
    }, [])

    /**display list of users */
    const renderUserList = users.map((user, index) => {
        return (
            <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{user.name}</td>
                <td className="py-2 px-4 border-b text-center">{user.age}</td>
                <td className="py-2 px-4 border-b text-center">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">{user.role}</td>
            </tr>
        )
    })

    return (
        <div className="w-[50%] mx-auto">

            <h3 className="text-2xl font-semibold mb-4">User List</h3>

            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">id</th>
                        <th className="py-2 px-4 border-b">name</th>
                        <th className="py-2 px-4 border-b">age</th>
                        <th className="py-2 px-4 border-b">email</th>
                        <th className="py-2 px-4 border-b">role</th>
                    </tr>
                </thead>

                <tbody>
                    {renderUserList}
                </tbody>
            </table>

        </div>
    )
}

export default UserList;