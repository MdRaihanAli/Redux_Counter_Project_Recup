import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, addNum } from '../Redux/feauters/counterSlices'


function Counter() {
    const [num, setNum ] = useState(0)
    const despatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
    return (
        <div>
            <div className="card w-96 bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        {count}
                    </h2>
                    <input onChange={(e)=>setNum(parseInt(e.target.value))} className="badge badge-secondary" />

                    <div className="card-actions justify-end">
                        <button onClick={()=>despatch(dec())} className="badge btn btn-warning badge-outline">Dec </button>
                        <button onClick={ ()=>despatch(inc())} className="badge btn btn-success badge-outline">Inc</button>
                        <button onClick={()=>despatch(addNum(num))} className="badge btn btn-primary badge-outline">Num</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter