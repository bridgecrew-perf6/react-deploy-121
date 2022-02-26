import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled from 'styled-components';
import r1 from './picture/report/r1.jpg';
import r2 from './picture/report/r2.jpg';
import r3 from './picture/report/r3.jpg';
import r4 from './picture/report/r4.jpg';
import r5 from './picture/report/r5.jpg';
import r6 from './picture/report/r6.jpg';
import r7 from './picture/report/r7.jpg';
import EndingForm from '../components/EndingForm';
const Container = styled.div`
 background-color:whitesmoke;
`;
const Title = styled.div`
 text-align:center;
 padding :30px;
 font-weight:bold;
 font-size : 30px;
 word-spacing:10px;
`;

const Image = styled.img`
width :50%;
height:80%;
padding:auto;
display: block;
  margin-left: auto;
  margin-right: auto;
`
const Article = styled.div`
text-align:center;
font-weight:bold;
padding:20px;
`;

 const Reports = () => {
  return (
   <Container className='container'>
      <Title>
        MAKE  YOUR  OWN  STYLE  IN  STREETWEAR  LIFE
      </Title>
     <div> <Image src ={r1} /> </div>
     <Article> article 1</Article>
     <div> <Image src ={r2} /> </div>
     <Article> article 2</Article>

     <div> <Image src ={r3} /> </div>
     <Article> article 3</Article>
     <div> <Image src ={r4} /> </div>
     <Article> article 4</Article>
     <div> <Image src ={r5} /> </div>
     <Article> article 5</Article>
     <div> <Image src ={r6} /> </div>
     <Article> article 6</Article>
     <div> <Image src ={r7} /> </div>
     <Article> article 7</Article>
     <EndingForm />
   </Container>
  );
};

export default Reports;