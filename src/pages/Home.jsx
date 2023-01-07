import ShopItem from "../components/ShopItem"
import styled from "styled-components";

const Home = () => {
  return (
    <div> 
        <Title> 
            코멘토 쇼핑
         </Title>
         <Category> 
            <CategoryButton>#겨울 방한템 </CategoryButton>
            <CategoryButton>#따순 머그컵 </CategoryButton>   
         </Category>
         <ShopItem 
         image="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg" 
         title="비숑 블랙 머그잔" 
         description="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."> </ShopItem>
         <ShopItem 
         image="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg" 
         title="가열 보온 티코스터 온열 원터치 컵 받침대" 
         description="언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."> </ShopItem>
         <ShopItem 
         image="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg" 
         title="벨루즈까사 솜사탕 파스텔 머그 4종 세트" 
         description="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그."> </ShopItem>
    </div>
  );
};

export default Home;

const Title =styled.div`
font-size: 20px;
font-weight:700;
border-bottom:1px solid #ddd;
display: flex;
height: 50px;
justify-content: center;
align-items: center;
`

const Category = styled.div`
display: flex;
height: 70px;
justify-content: center;
align-items: center;
border-bottom:10px solid #ddd
`

const CategoryButton=styled.button`
margin:4px;
font-size:18px;
padding :13px; 
background-color:#777;
color:#fff;
border-radius:10px;
border:none;
`