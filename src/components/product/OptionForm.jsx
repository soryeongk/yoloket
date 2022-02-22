import { useEffect, useState } from "react";
import styled from "styled-components";

import { comment, download } from "../../assets";
import { getProductOption } from "../../lib/api";
import { Selection } from ".";

export default function OptionForm({ productDetail }) {
  const { id, price, material, delivery, description } = productDetail;
  const [optionList, setOptionList] = useState([]);

  useEffect(async () => {
    const {
      data: { optionGroupFrameList },
    } = await getProductOption(id);

    setOptionList(optionGroupFrameList);
  }, []);

  return (
    <StForm>
      <div>
        <StArticle>
          <StH1>
            이 상품 구매 시, <strong>사용 가능 쿠폰 확인하기</strong>
          </StH1>
          <img src={download} alt="쿠폰 다운로드 아이콘" />
        </StArticle>
        <StDetail>
          <strong>소재</strong>
          <h2>{material}</h2>
        </StDetail>
        <StDetail>
          <strong>배송</strong>
          <h2>{delivery}</h2>
        </StDetail>
        <StDescription>
          <strong>제품 간단 소개</strong>
          <h2>{description}</h2>
        </StDescription>
        <StOptionWrapper>
          <StH3>옵션</StH3>
          {optionList && optionList.map((options, idx) => <Selection key={idx} options={options} />)}
        </StOptionWrapper>
      </div>
      <StBtnWrapper>
        <StComment src={comment} alt="판매자에게 문의하기" />
        <StButton type="submit" disabled={true}>
          {price} 구매하기
        </StButton>
      </StBtnWrapper>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 52rem;
`;

const StArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
  padding: 1.8rem 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.magenta200};
`;

const StH1 = styled.h1`
  ${({ theme }) => theme.fonts.body400}

  & > strong {
    font-weight: 600;
  }
`;

const StDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.white300};

  ${({ theme }) => theme.fonts.caption200}

  & > strong {
    ${({ theme }) => theme.fonts.body100}
  }
`;

const StDescription = styled(StDetail)`
  flex-direction: column;
  align-items: flex-start;
  height: 14.1rem;

  & > strong {
    margin-bottom: 1.5rem;
  }
`;

const StOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1.5rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.white300};
`;

const StH3 = styled.h3`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.fonts.body200}
`;

const StBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const StComment = styled.img`
  width: 6rem;
  height: 6rem;
`;

const StButton = styled.button`
  flex: 1;

  margin-left: 3rem;
  border-radius: 1.5rem;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.colors.magenta300};

  ${({ theme }) => theme.fonts.header200}
  color: ${({ theme }) => theme.colors.white100};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
