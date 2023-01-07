import styled from "styled-components";

const ShopItem = (props) => {
    return (
        <Layout> 
            <div> <Image src={props.image} /> </div>
            <Title > {props.title} </Title>
            <Description> {props.description} </Description>
        </Layout>
    );
};

export default ShopItem;


const Layout = styled.div`
padding : 16px;
`
const Image =styled.img`
width :100%;
`
const Title = styled.div`
font-weight:700;
font-size:18px;
padding: 8px 0;
`
const Description = styled.div`
font-size:18px;
`