import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProductCard({ productDetail }) {
  const { id, name, price, country } = productDetail;

  return (
    <StCardWrapper to={`/product/${id}`}>
      <StProductThumbnail src="image" alt="제품 썸네일" />
      <div>
        <StProductName>{name}</StProductName>
        <StPrice>{price}원</StPrice>
        <StCountry>{country}</StCountry>
      </div>
    </StCardWrapper>
  );
}

const StCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1rem;
  padding: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.magenta200};
  }
`;

const StProductThumbnail = styled.img`
  width: 30rem;
  height: 30rem;
`;

const StProductName = styled.h2`
  width: 30rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StPrice = styled.h2`
  margin: 1rem 0;
`;

const StCountry = styled.h3`
  ${({ theme }) => theme.fonts.body200}
  color: ${({ theme }) => theme.colors.magenta300};
`;
