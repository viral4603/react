import { useState } from "react"

function User({ user, handleSubmit }: { user: string, handleSubmit: any }) {
    /** decalare state varible for userInput */
    const [userInput, setUserInput] = useState('')
    /** update message user input */
    const handleOnchange = (e: any) => {
        setUserInput(e.target.value)
    }

    /** submit message on chat */
    const submitUserMessage = (): void => {
        handleSubmit({ user: user, text: userInput })
        setUserInput('')
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="message" className="block font-bol text-gray-600 text-md font-semibold mb-2">{user}</label>
                    <input type="text" id="message" onChange={handleOnchange} value={userInput} name="message" placeholder="Type your message..." className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500" onClick={submitUserMessage}>Send</button>
            </div>
        </div>
    )
}

export default User