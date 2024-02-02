import * as mergeClass from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={mergeClass("sidebar flex flex-col justify-between", { "sidebar-closed": !isOpen })}>
            <div>
                <h1 className="text-primary font-bold text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Demo</h1>
                <ul className="flex flex-col w-full py-3">
                    <li className="w-full pb-1">
                        <NavLink className="link" to="chatbook">Chat Book</NavLink>
                    </li>
                    <li className="w-full pb-1">
                        <NavLink className="link" to="counter">Counter App</NavLink>
                    </li>
                    <li className="w-full pb-1">
                        <NavLink className="link" to="state">State</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col w-full py-3">
                    <li className="w-full pb-1">
                        <NavLink className="link active" to="logout">Log Out</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar