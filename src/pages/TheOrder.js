import { useContext } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Shipper } from "../components/Shipper";
import 'bootstrap/dist/css/bootstrap.min.css';
import EndingForm from "../components/EndingForm";
const DivWrap = styled.div `
background-color: whitesmoke;
border : solid 1px;
`;

const Img = styled.img`
width:25%;
height:30%;
padding: 30px;

`;
const Name = styled.p`

font-size : 40px;   
`
const Button = styled.button`

height:50px;

background-color: black;     
color :white;
border-radius: 10px;
float:right;
margin:20px;
`
const Anounce = styled.h1 `
text-align:center;
`;
const Total = styled.div`
font-size :50px;
text-align:center;

`
function TheOrder(){
 const context = useContext(Shipper);
 const orders =  context.data;
 const handlecancle =(x)=>{
         orders.splice(x,1)
        context.readd(orders)
}



 if(orders.length === 0){
     return(<Anounce >
        Your cart have nothing , please order first 
        <EndingForm />
     </Anounce >)
 }else
return (
   <Container>
       <div>
        {orders.map((order,index)=>(
        <DivWrap key ={index} className = 'row'>
            <Img className = 'col-12 col-lg-4 col-xl-3' src = {order.x} /> 
            <Name className =' col-12 col-lg-4 col-xl-3' >{order.y} /{order.z}$</Name>
            <Button className = 'col-4 col-lg-4 col-xl-3' onClick={()=>handlecancle(index)}>Cancel</Button>
            
        </DivWrap>
    )) }
       </div>
  

    <Total> Total : {orders.reduce((total, orders )=>(total+parseInt(orders.z)), 0)} $</Total>
    <EndingForm />
</Container>
)
}
export default TheOrder;
