import { Message } from "../../../utilites/useEffetc.model"

function DisplayMessage({ text, user }: Message) {

    return (
        <div className="flex items-end">
            <div className={`text-white p-2 rounded ${user === 'Ajay' ? 'bg-blue-500' : 'bg-gray-300 text-black'}`}>
                <span className="font-bold">{user}</span> : <span className="pl-2">{text}</span>
            </div>
        </div>
    )
}

export default DisplayMessage