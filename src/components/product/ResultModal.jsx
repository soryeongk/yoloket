import styled from "styled-components";

export default function ResultModal({ optionSelected, onCloseModal }) {
  return (
    <StModalWrapper>
      <StNoticeWrapper>
        <StH1>고객님의 구매 옵션을 안내드립니다.</StH1>
        {Object.entries(optionSelected).map((option, i) => (
          <li key={i}>
            {option[0]}: {option[1]}
          </li>
        ))}
      </StNoticeWrapper>
      <StButton type="button" onClick={onCloseModal}>
        옵션 수정하기
      </StButton>
    </StModalWrapper>
  );
}

const StModalWrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.magenta100}90;

  width: 100%;
  height: 100%;
`;

const StNoticeWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.magenta300};
  background-color: ${({ theme }) => theme.colors.white200};

  width: 50rem;
  height: 25rem;

  ${({ theme }) => theme.fonts.body100}
  color: ${({ theme }) => theme.colors.magenta300};
`;

const StH1 = styled.h1`
  ${({ theme }) => theme.fonts.header200}
  margin: 2rem 0;
`;

const StButton = styled.button`
  margin-top: 3rem;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.magenta300};

  ${({ theme }) => theme.fonts.body300}
  color: ${({ theme }) => theme.colors.white100};
`;
