import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onOut, onOn, lightsSum}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={ lightsSum === 0 ? true : false }
        onClick={() =>  onOut()
        }
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={ lightsSum === 8 ? true : false }
        onClick={() => onOn()}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
