import ShopItem from "../components/ShopItem"
import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
    const [products, setProducts] =useState(mockTheme1Products);
    const navigate = useNavigate()
  return (
    <div> 
        <NavigationBar title="코멘토 쇼핑" isBack={false}></NavigationBar>
         <Category> 
            <CategoryButton onClick={() => {
                setProducts(mockTheme2Products)
            }}>#여름 냉방템 </CategoryButton>
            <CategoryButton onClick={() => {
                setProducts(mockTheme1Products)
            }}>#겨울 방한템 </CategoryButton>   
         </Category>
         {
         products.map((item, index )=>  
         <ShopItem 
         key={index}
         thumbnail={item.thumbnail} 
         name={item.name} 
         description={item.description}
         onClick={() => {
            navigate("/product/" + item.id)
         }}>
         </ShopItem>)
         }

        
    </div>
  );
};

export default Home;


const Category = styled.div`
display: flex;
height: 70px;
justify-content: center;
align-items: center;
border-bottom:10px solid #ddd
`

const CategoryButton=styled.button`
margin:2px;
font-size:18px;
padding :13px; 
background-color:#777;
color:#fff;
border-radius:10px;
border:none;
`