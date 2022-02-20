import styled from "styled-components"

const Ending = styled.div`
background-color:#15171c;

height:300px;
margin-top : 20px;

`

const Title = styled.div`
text-align:center ;
color:white;
padding:auto;
font-size :100px
`

export default  function EndingForm(){
 return (
    <Ending className="row ">
        <Title>   Ending Title</Title> 
    </Ending>
 )
}