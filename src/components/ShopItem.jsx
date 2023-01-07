import styled from "styled-components";


const ShopItem = (props) => {
    return (
        <Layout onClick={props.onClick}> 
            <div> <Thumbnail src={props.thumbnail} /> </div>
            <Name > {props.name} </Name>
            <Description> {props.description} </Description>
        </Layout>
    );
};

export default ShopItem;


const Layout = styled.div`
padding : 16px;
`
const Thumbnail =styled.img`
width :100%;
`
const Name = styled.div`
font-weight:700;
font-size:18px;
padding: 8px 0;
`
const Description = styled.div`
font-size:18px;
`