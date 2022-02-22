import styled from "styled-components";

import { OptionForm, ProductInfo, ProductTitle } from "../components/product";

export default function Product() {
  return (
    <StMainWrapper>
      <ProductTitle />
      <div>
        <ProductInfo />
        <OptionForm />
      </div>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  padding: 4.5rem 8rem 8rem 8rem;
  width: 100%;
`;
