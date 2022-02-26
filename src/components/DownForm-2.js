

import styled from 'styled-components'


const Image = styled.img`
width :100%;
heigh:80%;
margin-left: auto;
margin-right: auto;
`
const Locker = styled.div`
margin-left: auto;
margin-right: auto;
margin-top:10px;
`;
const Title = styled.p`
text-align:center;
font-weigh:bold;
font-size:80px;
padding-top:100px;
`
export default function DownForm2(props){
    return(
 
     <div className='row'>
      <Locker className='col-12 col-lg-10 col-xxl-6'>
      <Title>{props.title}</Title>
     
     </Locker>
     <Locker className='col-12 col-lg-10 col-xxl-6'>
     <Image 
      src={props.link}
     />
     </Locker>
     
 
     </div>
    )
}