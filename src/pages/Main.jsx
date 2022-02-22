import { useEffect, useState } from "react";
import styled from "styled-components";

import ProductCard from "../components/main/ProductCard";
import { getProductList } from "../lib/api";

export default function Main() {
  const [productList, setProductList] = useState([]);

  useEffect(async () => {
    const { data } = await getProductList();

    setProductList(data);
  }, []);

  return (
    <StMainWrapper>
      <h1>욜로켓 인기 상품</h1>
      <StSection>
        {productList &&
          productList.map((productDetail, idx) => (
            <ProductCard key={`product-${idx}-${productDetail.id}`} productDetail={productDetail} />
          ))}
      </StSection>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 9.2rem);

  ${({ theme }) => theme.fonts.header100}
`;

const StSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 5.3rem 2rem;

  ${({ theme }) => theme.fonts.header300}
`;
