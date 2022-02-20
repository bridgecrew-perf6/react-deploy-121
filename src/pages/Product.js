import React from "react"
import { Container} from 'reactstrap';
import MiddleForm from "../components/MiddleForm";
import EndingForm from "../components/EndingForm";
import DownFormPr from "../components/Downformproduct";
import a from './picture/production/a.jpeg'
import b from './picture/production/b.jpeg'
import c from './picture/production/c.jpeg'
import e from './picture/production/e.jpeg'
import z1 from './picture/production/z1.jpg'
import z2 from './picture/production/z2.jpg'
import z3 from './picture/production/z3.jpg'
import z4 from './picture/production/z4.jpg'
import z5 from './picture/production/z5.jpg'
import z6 from './picture/production/z6.jpg'
import z7 from './picture/production/z7.jpg'
import z8 from './picture/production/z8.jpg'
import z9 from './picture/production/z9.jpg'

const Produce = () => {
    return (
      <Container>
       <MiddleForm 
       one = {a}
       caption1 ='New release'
       two ={ b}
       caption2 ='New release'
       three ={c}
       caption3 ='Best selled'
       four = {e}
       caption4 ='Best selled'
       
       />
       <div class= 'row'>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z1} price ={"1400"} productname={"Airmax 97 Sean Wotherspoon"} /></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z2} price ={'240'} productname={'Air Force 1 Lightweight '}/></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z3} price ={'270'} productname={'Air force 1 original'}/></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z4} price ={'1700'} productname={'Off White x Air Jordan 4'}/></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z5} price ={'330'} productname={'Nike Air Jordan 1 Fragmnet'}/></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z6} price ={'720'} productname={'Nike LD waffle sacai '}/></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z7} price ={'450'} productname={'Sb dunk low retro "Ceramic"'}/></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z8} price ={"370"} productname={'Vin Air jordan 1 mid '} /></div>
           <div class = 'col-12 col-lg-6 col-xl-4 col-xxl-4'> <DownFormPr link = {z9} price ={'199'} productname={'CMD x Converse '}/></div>
           
       </div>
       
       <EndingForm />
      </Container>
        
  
    );
  };
  
  export default  Produce;