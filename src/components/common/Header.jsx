import styled from "styled-components";

import { logo } from "../../assets";

export default function Header() {
  return (
    <StHeader>
      <img src={logo} alt="욜로켓 로고" />
    </StHeader>
  );
}

const StHeader = styled.header`
  padding: 2.5rem 0;
`;
