import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export default function HomePage() {
  return (
    <>
      <StyledDiv>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents $color="isBlack" />
      </StyledDiv>
    </>
  );
}
