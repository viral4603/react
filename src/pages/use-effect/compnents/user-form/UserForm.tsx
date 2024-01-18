import { useState } from "react"

function UserForm() {
    /** declare state varible for fisrt name input */
    const [firstName, setFirstName] = useState('')
    /** declare state varible for last name input */
    const [lastName, setLastName] = useState('')

    /** declare state for fullName */
    // const [fullName, setFullName] = useState('')

    //Don't user unnecessary effect 
    /**
     * we dont need effect and state for full name it's depend on other state.
     **/
    // useEffect(() => {
    //     setFullName(firstName + ' ' + lastName)
    // }, [firstName, lastName])

    //fullname is initialize on every render
    const fullName = firstName + ' ' + lastName;

    return (
        <div className="bg-gray-800 w-[50%] mx-auto p-4 mt-5 text-center">
            <h2 className="text-2xl text-white font-bold py-3">User Form</h2>
            <div className="flex flex-col space-y-4 h-64 overflow-y-auto p-4">
                <div className="flex flex-col space-y-2 text-white font-bold text-2xl">
                    {fullName}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="First Name" className="block font-bol text-gray-600 text-md font-semibold mb-2">First Name</label>
                        <input type="text" id="message" onChange={(e) => {
                            setFirstName(e.target.value)
                        }} value={firstName} name="message" placeholder="Type your message..." className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Last Name" className="block font-bol text-gray-600 text-md font-semibold mb-2">Last Name</label>
                        <input type="text" id="message" onChange={(e) => {
                            setLastName(e.target.value)
                        }} value={lastName} name="message" placeholder="Type your message..." className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm