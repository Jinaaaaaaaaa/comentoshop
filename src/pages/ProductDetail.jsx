import styled from "styled-components";
import {useNavigate, useParams} from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import {useEffect, useState} from 'react';
import { getProductDetail } from "../data/mockData";

const ProductDetail = () => {
  const { productId } = useParams(); 
  const [product, setProduct] =useState();
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
            <Name > {product.name} </Name>
            <Cost> {product.price}원 </Cost>
      </Layout>
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

