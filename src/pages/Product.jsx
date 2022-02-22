import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { OptionForm, ProductInfo, ProductTitle } from "../components/product";
import { getProductDetail } from "../lib/api";

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({ name: "", price: "", material: "", delivery: "", description: "" });
  const { name, price, material, delivery, description } = productData;

  useEffect(async () => {
    const { data } = await getProductDetail(id);

    setProductData(data);
  }, []);

  return (
    <StMainWrapper>
      <ProductTitle productName={name} />
      <StProductDetailWrapper>
        <ProductInfo />
        <OptionForm productDetail={{ id, price, material, delivery, description }} />
      </StProductDetailWrapper>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  padding: 4.5rem 8rem 8rem 8rem;
  width: 100%;
`;

const StProductDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 2.8rem;
`;
