import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'reactstrap';
import MiddleForm from '../components/MiddleForm';
import DownForm from '../components/DownForm';
import DownForm2 from '../components/DownForm-2';
import EndingForm from '../components/EndingForm';
import number1 from '../pages/picture/introduce/number1.jpg'
import number2 from '../pages/picture/introduce/number2.jpg'
import number3 from '../pages/picture/introduce/number3.jpg'
import number4 from '../pages/picture/introduce/number4.jpg'
import a from '../pages/picture/introduce/a.jpg';
import b from '../pages/picture/introduce/b.jpg';
import c from '../pages/picture/introduce/c.jpg';
import d from '../pages/picture/introduce/d.jpg';
const Overview = () => {
  return (
    

    <Container>  
   
 <MiddleForm 
 one = {number1}
 two ={ number2}
 three ={number3}
 four ={number4} 

 />
    <DownForm
      link ={a}
      title ="Title 1"
    />
    <DownForm2
      link ={b}
      title ="Title 2"
    />
    <DownForm
      link ={c}
      title ="Title 3"
    />
    <DownForm2
      link ={d}
      title ="Title 4"
    />

    <EndingForm />
    </Container>
    
    
   
  );
};

export default Overview;
