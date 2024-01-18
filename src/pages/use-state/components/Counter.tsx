import { useState } from "react";

function Counter() {
    // BAD CODE line 5 (interms of reactivity)
    // let count:number = 0;

    /**
     * initalize varible in react will re initlize for each render and that will not be changed and always set as initial value
     * we have to decalre state varible if that value is changed and that will be reflact on display.
     * state is store outside of component,and it will not re initalize instade of initalize it provide a updated value of state
     **/

    /** declare state varibale for count */
    const [count, setCount] = useState<number>(0);

     /**
     * increase count by 1
     */
    const handleIncreseCount = () => {
        setCount(count + 1)
        console.log('increase click', count)
    }

    /**
     * decrease count by 1
     */
    const handleDecreaseCount = () => {
        setCount(count - 1)
        console.log('decrease click', count)
    }

    return (
        <div className="w-[20%] mx-auto mt-5">
            <h2 className="font-bold text-2xl mb-5">Counter Update</h2>

            <h6 className="mb-5 text-center text-xl font-bold">Count:{count}</h6>

            <div className="flex justify-between pt-5">
                <button className="btn bg-blue-400 hover:bg-blue-300" onClick={handleIncreseCount}>Increase</button>
                <button className="btn bg-red-400 hover:bg-red-300" onClick={handleDecreaseCount}>Decrease</button>
            </div>
        </div>
    )
}

export default Counter