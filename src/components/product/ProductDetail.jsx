import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { comment, download } from "../../assets";
import { convertKeyName } from "../../lib";
import { getProductOption } from "../../lib/api";
import { OptionForm } from ".";

const OPTION_DEFAULT = " 옵션을 선택해주세요";

export default function ProductDetail({ productDetail, optionSelected, onSelectOptions, onClickPurchaseBtn }) {
  const { price, material, delivery, description } = productDetail;
  const [optionFrameList, setOptionFrameList] = useState([]);
  const [optionGroupList, setOptionGroupList] = useState([]);

  const btnDisabled = useMemo(() => {
    const selectedValues = Object.values(optionSelected).filter((value) => !value.includes(OPTION_DEFAULT));

    if (!optionFrameList || !optionGroupList) {
      return true;
    } else if (selectedValues.length && optionFrameList.length && selectedValues.length === optionFrameList.length) {
      return false;
    } else {
      return true;
    }
  }, [optionSelected]);

  const selectableOptionList = useMemo(() => {
    const result = {};

    optionGroupList &&
      optionGroupList
        .filter((optionGroup) => optionGroup.remainCount)
        .map((option) => option.optionNameList)
        .map((option) => {
          const key = convertKeyName(option[0]);

          return [key, option[1]];
        })
        .forEach((option) => {
          if (!result[option[0]]) {
            result[option[0]] = [];
          }
          if (!result[option[0]].includes(option[1])) {
            result[option[0]].push(option[1]);
          }
        });

    return result;
  }, [optionGroupList]);

  useEffect(() => {
    optionFrameList.map((option) => {
      onSelectOptions(option.optionTitle, `${option.optionTitle + OPTION_DEFAULT}`);
    });
  }, [optionFrameList]);

  useEffect(async () => {
    const {
      data: { optionGroupFrameList, optionList },
    } = await getProductOption();

    setOptionFrameList(optionGroupFrameList);
    setOptionGroupList(optionList);
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
        <OptionForm
          optionFrameList={optionFrameList}
          selectableOptionList={selectableOptionList}
          optionSelected={optionSelected}
          onSelectOptions={onSelectOptions}
        />
      </div>
      <StBtnWrapper>
        <StComment src={comment} alt="판매자에게 문의하기" />
        <StButton type="button" disabled={btnDisabled} onClick={onClickPurchaseBtn}>
          {price}원 구매하기
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
