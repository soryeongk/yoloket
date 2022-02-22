import styled from "styled-components";

import { arrow, comment, download } from "../../assets";

function toggleMenu(e) {
  const optionWrapper = e.currentTarget.lastChild;

  if (!optionWrapper) return;

  const visibility = optionWrapper.style.visibility;

  if (visibility === "hidden") {
    optionWrapper.style.visibility = "visible";
  } else {
    optionWrapper.style.visibility = "hidden";
  }

  return;
}

export default function OptionForm() {
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
          <h2>50% COTTON, 50% POLYESTER</h2>
        </StDetail>
        <StDetail>
          <strong>배송</strong>
          <h2>해외 무료 배송 | 주문 후 최대 3일 내로 발송 가능</h2>
        </StDetail>
        <StDescription>
          <strong>제품 간단 소개</strong>
          <h2>
            제품의 소개가 들어갈 예정입니다💕 판매자가 직접 작성한 제품의 설명이 들어갈 예정입니다.😎 제품의 특징과
            강점을 잘 살린 소개가 들어가는 것이 좋을 것 같습니다. 어떤 상황, 분위기, 장소에서 활용하면 좋은 제품인지에
            대한 설명도 있으면 좋을 듯합니다. 간결하고 직관적이면서 구체적인 설명이 들어간다면 더욱 구매를 유도할 수
            있을 것으로 보입니다.
          </h2>
        </StDescription>
        <StOptionWrapper>
          <StH3>옵션</StH3>
          <StSelectWrapper onClick={toggleMenu}>
            <label>사이즈를 선택해주세요</label>
            <StSelect>
              <StOption value="S">S</StOption>
              <StOption value="M">M</StOption>
            </StSelect>
          </StSelectWrapper>
          <StSelectWrapper onClick={toggleMenu}>
            <label>색상을 선택해주세요</label>
            <StSelect>
              <StOption value="검정">검정</StOption>
              <StOption value="하양">하양</StOption>
              <StOption value="빨강">빨강</StOption>
            </StSelect>
          </StSelectWrapper>
        </StOptionWrapper>
      </div>
      <StBtnWrapper>
        <StComment src={comment} alt="판매자에게 문의하기" />
        <StButton type="submit" disabled={true}>
          구매하기
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

const StSelectWrapper = styled.div`
  position: relative;
  border: 0.05rem solid ${({ theme }) => theme.colors.gray200};
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.white100};
  width: 100%;
  ${({ theme }) => theme.fonts.caption200}

  &::after {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    content: url(${arrow});
  }

  & + & {
    margin-top: 1rem;
  }
`;

const StSelect = styled.ul`
  /* visibility: hidden; */

  position: absolute;
  top: 3.95rem;
  left: 0;
  z-index: 5;

  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.white200};

  width: 100%;
`;

const StOption = styled.li`
  padding: 0.5rem 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.magenta100};
    color: ${({ theme }) => theme.colors.magenta300};
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
