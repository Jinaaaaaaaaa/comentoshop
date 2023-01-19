import styled from "styled-components";
import {useNavigate, useParams} from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import {useEffect, useState} from 'react';
import { getProductDetail, mockTheme1Products, mockReviews } from "../data/mockData";
import Review from "../components/Review";


const ProductDetail = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(mockTheme1Products);
  
  useEffect(() => {
    const product = getProductDetail(productId)
    setProduct(product)
  }, [productId])

    return (
    product !== undefined &&
    <div>
      <NavigationBar title="코멘토 쇼핑" isBack={true}></NavigationBar>
    
      <div> 
      <Thumbnail src={product.thumbnail} /> 
      </div>
      <Layout> 
            <Name> {product.name} </Name>
            <Cost> {product.price}원 </Cost>
      </Layout>
      <MenuTab> 
            <MenuTab>상품 설명</MenuTab>  <MenuTab>상품 후기</MenuTab>   
       </MenuTab>
       
       <ProductDetailImage src={product.mainImage} alt="사진 설명" />
          

       {activeMenuTab === "review" && (
            <div>
              {mockReviews.map((review) => (
                <Review
                  key={review.id}
                  profileImage={review.profileImage}
                  username={review.username}
                  score={review.score}
                  createdDate={review.createdDate}
                  reviewText={review.reviewText}
                  />
                  ))}
             </div>
        )}
        <AddBasketButton onClick={() =>AddBasketButton(product)}>
        장바구니 담기
       </AddBasketButton>  
       <div active={activeMenuTab === "description" && ( <ProductDetailImage src={product.mainImage} alt="사진 설명" />)}>
      </div>
      </div>

    
    );
  };
  
  export default ProductDetail;

const Layout = styled.div`
padding : 16px;
  `
const Thumbnail =styled.img`
width :100%;
`
const Name = styled.div`
font-weight:700;
font-size:18px;
`
const Cost = styled.div`
padding: 8px 0;
`
const MainImage = styled.div`
  padding : 16px;
`

const MenuTab = styled.div`
  flex: 1;
  border: solid 1px #eaf2cd;
  text-align: center;
  background-color:#eaf2cc;
`;

const onClickButton=styled.button`
margin:4px;
font-size:18px;
padding :13px; 
background-color:#777;
color:#fff;
border-radius:10px;
border:none;
`
const activeMenuTab = styled.div`
padding: 8px 0;
`
const ProductDetailImage = styled.img`
  width: 100%;
`;

const AddBasketButton = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 460px;
  height: 65px;
  background: #eaf2cc;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;