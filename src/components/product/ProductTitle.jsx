import styled from "styled-components";

export default function ProductTitle({ productName }) {
  return (
    <StHeader>
      <StTitleWrapper>
        <StTitle>{productName}</StTitle>
        <StOrderAlways>상시주문가능</StOrderAlways>
      </StTitleWrapper>
      <StTagWrapper>
        <StTag>#S사이즈</StTag>
        <StTag>#S사이즈</StTag>
        <StTag>#S사이즈</StTag>
        <StTag>#S사이즈</StTag>
        <StTag>#S사이즈</StTag>
      </StTagWrapper>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white300};
  padding-bottom: 2.5rem;

  width: 100%;
`;

const StTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StTitle = styled.h1`
  ${({ theme }) => theme.fonts.header100}
`;

const StOrderAlways = styled.h5`
  margin-left: 1rem;

  ${({ theme }) => theme.fonts.caption100}
  color: ${({ theme }) => theme.colors.magenta300};
`;

const StTagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StTag = styled.h5`
  border-radius: 2rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.magenta100};

  ${({ theme }) => theme.fonts.caption100}

  & + & {
    margin-left: 1rem;
  }
`;
