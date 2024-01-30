import { useContext, useEffect, useState } from "react"
// ------------------------------------------------ //
import createConnection from "./service/connection.service"
import DisplayMessage from "./components/DisplayMessage"
import User from "./components/User"
import { Message } from "../../utilites/useEffetc.model"
import { SeacrhContext } from "../../../../core/Providers/SearchProvider"

function Chatbook() {
    /** declare state varible for messages */
    const [messages, setMessages] = useState<Message[]>([])

    const seacrchTerm = useContext(SeacrhContext)

    // BAD CODE line 14,15
    // Create connection and connect it In rendering logic
    // const connection = createConnection()
    // connection.connect()

    // Good approch for perform side effect
    /**
     * Depnedency [] only run effect during initial render of component
     */
    useEffect(() => {
        /** create connection and connect to the server */
        const connection = createConnection()
        connection.connect()

        /** Cleanup function 
         * It will invoke just before component unmount
         * We can use this clean up function for unsubscribe 
        **/

        /** connect will disconenct before componet remove from display */
        return () => {
            connection.disconnect()
        }

    }, [])

    //We can add multiple effect as well in one component
    /**
     * [Message] dependency will run effect everytime while Message state will change 
     **/
    useEffect(() => {
        /** it will log when user send new message */
        console.log('New message arrived')
        return (() => {
            console.log('unmount updater message')
        })
    }, [messages])

    /** Render list of message */
    const renderMessages: JSX.Element[] = messages.map((message: Message, index: number) => {
        return <DisplayMessage text={message.text} user={message.user} key={index} />
    })

    /** Add message to chat */
    const handleChat = (message: Message): void => {

        setMessages((previousChat: any) => {
            return [...previousChat, message]
        })
    }

    return (
        <div className="bg-gray-800 w-[50%] mx-auto p-4 mt-5 text-center">
            <h2 className="text-2xl text-white font-bold py-3">Chat BooK</h2>
            <div className="flex flex-col space-y-4 h-64 overflow-y-auto p-4">
                <div className="flex flex-col space-y-2">
                    {renderMessages}
                </div>
                <h3>
                    {seacrchTerm}
                </h3>
            </div>
            {/* user-input-start */}
            <div className="flex justify-between">
                <User user="Ajay" handleSubmit={handleChat}>
                </User>
                <User user="Vijay" handleSubmit={handleChat}>
                </User>
            </div>
            {/* user-input-end */}
        </div>
    )
}

export default Chatbook;