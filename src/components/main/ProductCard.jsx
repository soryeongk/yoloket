import styled from "styled-components";

export default function ProductCard() {
  return (
    <StArticle>
      <StProductThumbnail src="image" alt="제품 썸네일" />
      <div>
        <StProductName>[인기 상품 1위] 욜로켓 시그니처 디자인 제품</StProductName>
        <StPrice>18,900원</StPrice>
        <StCountry>미국 | 해외 무료 배송</StCountry>
      </div>
    </StArticle>
  );
}

const StArticle = styled.article`
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
