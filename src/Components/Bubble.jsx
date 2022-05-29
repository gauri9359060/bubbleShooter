import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Bubble.css"
const Bubble = () => {

    const [state , setState] = useState(0)

    const [ball,setBall] = useState([1,2,3,4,5])

    const [number , setNumber] = useState(0)

    const [div, setDiv] = useState([])

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const handleClick = () => {
        setNumber(ball[state-1])
        setDiv(index => [...index, ball[state-1]])
        setBall(ball.filter((item) => item !== ball[state-1]))
        setState("")
    }

    useEffect(() =>{
    ball.sort((a,b) => a-b)
    setBall(ball)
    },[ball])

   


    const popFromDiv = (n) => {
        setDiv(div.filter(item => item !== n))
        setBall(position => [...position , n])
    }

  return (
      <div>
        

            <div className="emptyDiv">

            {div.includes(1) ? <div className="circle RedColor" onClick={() => popFromDiv(1)}></div> : ""}
            {div.includes(2) ? <div className="circle GreenColor" onClick={() => popFromDiv(2)}></div> : ""}
            {div.includes(3) ? <div className="circle YellowColor" onClick={() => popFromDiv(3)}></div> : ""}
            {div.includes(4) ? <div className="circle BlueColor"  onClick={() => popFromDiv(4)}></div> : ""}
            {div.includes(5) ? <div className="circle BlackColor"  onClick={() => popFromDiv(5)}></div> : ""}
            
            </div>

            <div className="circleDiv">
            {!ball.includes(1) ? "" : <div className="circle RedColor" ></div>}
            {!ball.includes(2) ? "" : <div className="circle GreenColor" ></div>}
            {!ball.includes(3) ? "" : <div className="circle YellowColor"  ></div>}
            {!ball.includes(4) ? "" : <div className="circle BlueColor"  ></div>}
            {!ball.includes(5) ? "" : <div className="circle BlackColor"  ></div>}
            </div>

        <div className="inputSelect">
          <input type="text" onChange={handleChange} value={state} className="inputBox"/>
          <br/><br/>
          <button onClick={handleClick} className="ShootBtn">Shoot</button>
        </div>
    </div>    
  )
}

export default Bubble;