import styled from "styled-components";

import { productImg, store, storeImg } from "../../assets";

export default function ProductInfo() {
  return (
    <StSection>
      <StProductImage src={productImg} alt="제품 이미지" />
      <StArticle>
        <StStoreImage src={storeImg} alt="판매자 대표 사진" />
        <StStoreWrapper>
          <StStoreTitle>
            <img src={store} alt="판매자 아이콘" />
            <StStoreName>욜로마켓</StStoreName>
          </StStoreTitle>
          <StStoreDesc>
            욜로마켓에서 판매하는 모든 제품은 미국 매장에서 직배송해드리는 정품입니다. 언제든 편하게 문의 주시길
            바랍니다!
          </StStoreDesc>
        </StStoreWrapper>
      </StArticle>
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50rem;
`;

const StProductImage = styled.img`
  width: 100%;
  height: 50rem;
`;

const StArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
  width: 100%;
`;

const StStoreImage = styled.img`
  border-radius: 4rem;

  width: 6rem;
  height: 6rem;
`;

const StStoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 3rem;
`;

const StStoreTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StStoreName = styled.h1`
  ${({ theme }) => theme.fonts.body400}
`;

const StStoreDesc = styled.h2`
  ${({ theme }) => theme.fonts.caption200}
`;
