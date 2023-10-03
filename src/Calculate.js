import React,{useState} from "react";
import "./Calculate.css";

const Calculate = () => {
    const [operations,setOperations]=useState(0);
    const [button,setButton]=useState('+');
    const [input1,setInput1]=useState(0);
    const [input2,setInput2]=useState(0);
    const [equal,setEqual]=useState('');

    const changeSymbol = (symbol)=> {
        console.log('target', symbol);
        setButton(symbol);
    }
     
     const calculate = ()=>{
        setOperations((prev)=>prev+1);
        if (input1 && input2 && button) {
            const n1 = parseFloat(input1);
            const n2 = parseFloat(input2);
      
            switch (button) {
              case '+':
                setEqual(n1 + n2);
                break;
              case '-':
                setEqual(n1 - n2);
                break;
              case '*':
                setEqual(n1 * n2);
                break;
              case '/':
                if (n2 !== 0) {
                  setEqual(n1 / n2);
                } else {
                  setEqual('Division by zero');
                }
                break;
              default:
                setEqual('Invalid operator');
                break;
            }
          } else {
            setEqual('Please enter valid values');
          }
     } 

     const resetAll = ()=> {
        setInput1(0);
        setInput2(0);
     }

  return (
    <div className="container">
      <div className="block1">
        <h1>Total operations : {operations}</h1>
      </div>
      <div className="block2">
        <input type="number" className="block2_input1" value={input1} onChange={(e)=>setInput1(e.target.value)}/>
        <h2>{button}</h2>
        <input type="number" className="block2_input2" value={input2} onChange={(e)=>setInput2(e.target.value)}/>
        <button onClick={()=>calculate()}><h2>=</h2></button>
      </div>
      <div className="block3">
        <button className="block3_btn" onClick={()=>changeSymbol('+')}>
          <h2>+</h2>
        </button>
        <button className="block3_btn" onClick={()=>changeSymbol('-')}>
          <h2>-</h2>
        </button>
        <button className="block3_btn" onClick={()=>changeSymbol('*')}>
          <h2>*</h2>
        </button>
        <button className="block3_btn" onClick={()=>changeSymbol('/')}>
          <h2>/</h2>
        </button>
      </div>
      <div className="block4">
        <button onClick={resetAll}>Reset</button>
        {input1 && input2 ? <h4> Result    :   {equal}</h4> :null}
        {/* <h4>Result : {equal}</h4> */}
      </div>
    </div>
  );
};

export default Calculate;
