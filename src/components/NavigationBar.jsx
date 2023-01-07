import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const NavigationBar = (props) => {
    const navigate =useNavigate();
    return (
        <div>
        <TitleArea> 
        <Back>
          {props.isBack && <Backbutton onClick={()=>{
            navigate(-1)
          }}> ◀ </Backbutton>}
        </Back>
        <Title>
          {props.title}
        </Title>
        <Empty>
        </Empty>
      </TitleArea>
        </div>
    );
};

export default NavigationBar;

const TitleArea =styled.div`
border-bottom:1px solid #ddd;
display: flex; //레이아웃
height: 50px;
`

const Back =styled.div`
width : 60px;
display: flex;
justify-content: center;
align-items: center;
`

const Title =styled.div`
font-weight:700;
flex :1;
display: flex;
justify-content: center;
align-items: center;
`

const Empty =styled.div`
width : 60px;
display: flex;
justify-content: center;
align-items: center;
`

const Backbutton = styled.button`
background-color: #fff;
border:none;

`