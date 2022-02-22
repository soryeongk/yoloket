import styled from "styled-components";

import { OptionForm, ProductInfo, ProductTitle } from "../components/product";

export default function Product() {
  return (
    <StMainWrapper>
      <ProductTitle />
      <StProductDetailWrapper>
        <ProductInfo />
        <OptionForm />
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
