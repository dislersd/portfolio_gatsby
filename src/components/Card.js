import styled from "styled-components"
import { Card as CardRebass } from "rebass"

const MEDIA_QUERY_CARD_HEIGHT = "@media (max-width: 1156px)"

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;
  overflow-y: hidden;
  padding-top: 20px;
  padding-bottom: 12px;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`

export const Card = styled(CardRebass).attrs({
  bg: "white",
  boxShadow: 0,
  border: "1px solid black",
  borderRadius: 8,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 300px;
  /* border: 1px solid black; */
  cursor: ${props => (props.onClick ? "pointer" : "default")};

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  ${MEDIA_QUERY_CARD_HEIGHT} {
    height: 200px;
  }
`

export default Card
