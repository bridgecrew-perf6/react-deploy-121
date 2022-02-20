import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Card, CardImg, CardBody, CardTitle,CardText,Button} from 'reactstrap';
import {FaShoppingCart} from 'react-icons/fa'
import styled from "styled-components";
import { useContext } from "react";
import { Shipper } from "./Shipper";
const Space = styled.div`
margin:10px`
const DownFormPr = (props) =>{
  const context = useContext(Shipper);
 

  
    return (
       <Space>
       <Card>
       <CardImg
         alt="Card image cap"
         src={props.link}
         top
         width="100%"
         height ="500px"
       />
       <CardBody>
         <CardTitle tag="h5">
           {props.productname}
         </CardTitle>
         
         <CardText> 
             {props.price}$
         </CardText>
         <Button onClick={()=>context.addData( props.link,props.productname , props.price)}>
             <FaShoppingCart />
             Add to Cart
         </Button>
       </CardBody>
     </Card>
       
       
       </Space>

    )

}
export default DownFormPr;