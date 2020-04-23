import React, { useState } from "react";
import logo from "./logo.svg";
import Icons from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");
const App = () =>{
  

  const [isCross, setIsCross] = useState(false);
  const [winMessage ,setWinMessage] = useState("")

  const reloadGame = ()=>{
       setIsCross(false);
       setWinMessage("")
       itemArray.fill("empty",0,9)
  }
  const checkIsWinner = () =>{
          if (itemArray[0] ==itemArray[1] && itemArray[1] ==itemArray[2] &&itemArray[0]!="empty"){
                    setWinMessage(`${itemArray[0]} wins`)
          }
          else if (itemArray[3] ==itemArray[4] && itemArray[3] ==itemArray[5] &&itemArray[3]!="empty"){
            setWinMessage(`${itemArray[3]} wins`)
  }
  else if (itemArray[6] ==itemArray[7] && itemArray[6] ==itemArray[8] &&itemArray[6]!="empty"){
    setWinMessage(`${itemArray[6]} wins`)
}
else if (itemArray[0] ==itemArray[3] && itemArray[0] ==itemArray[6] &&itemArray[0]!="empty"){
  setWinMessage(`${itemArray[0]} wins`)
}
else if (itemArray[1] ==itemArray[4] && itemArray[1] ==itemArray[7] &&itemArray[7]!="empty"){
  setWinMessage(`${itemArray[4]} wins`)
}
else if (itemArray[2] ==itemArray[5] && itemArray[2] ==itemArray[8] &&itemArray[5]!="empty"){
  setWinMessage(`${itemArray[5]} wins`)
}
else if (itemArray[3] ==itemArray[4] && itemArray[3] ==itemArray[5] &&itemArray[5]!="empty"){
  setWinMessage(`${itemArray[0]} wins`)
}
else if (itemArray[0] ==itemArray[4] && itemArray[0] ==itemArray[8] &&itemArray[8]!="empty"){
  setWinMessage(`${itemArray[0]} wins`)
}
else if (itemArray[3] ==itemArray[4] && itemArray[3] ==itemArray[5] &&itemArray[5]!="empty"){
  setWinMessage(`${itemArray[0]} wins`)
}
else if (itemArray[2] ==itemArray[4] && itemArray[2] ==itemArray[6] &&itemArray[4]!="empty"){
  setWinMessage(`${itemArray[2]} wins`)
}
else if (itemArray[0]!="empty" && itemArray[1]!="empty"&& itemArray[2]!="empty" &&itemArray[3]!="empty" 
&&itemArray[4]!="empty" &&itemArray[5]!="empty" &&itemArray[6]!="empty" &&itemArray[7]!="empty" &&itemArray[8]!="empty"
){
        setWinMessage('Game draw')
  }
}
  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
     <Container className = "p-5">
     
        <ToastContainer position =  "bottom-center"/>
        <Row>
           <Col md={6} className = "offset-md-3">
           {/* <h1 className = "text-center text-uppercase" style = {{color :"lightblue"}}>TIC-TAC-TOE</h1> */}
             {winMessage ? (
               <div className = "mb-2 mt-2">
                 
                 <h1 className = "text-success text-uppercase text-center">{winMessage}</h1>
                 <Button color = "success" block onClick = {reloadGame}>Reload the game

</Button>
               </div>
             ):(
            <h1 className = "text-center text-warning">
              {isCross ? "cross ": "circle "  } turns
            </h1>
             )}
             <div className = "grid">
                   {itemArray.map((item, index)=>(
                     <Card onClick={() => changeItem(index)}>
                       <CardBody className ="box">
                         <Icons name = {item} />
                       </CardBody>
                     </Card>
                   ))}
             </div>
           </Col>
        </Row>
     </Container>
  );
}

export default App;
