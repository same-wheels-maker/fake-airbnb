import styled from 'styled-components'

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: calc((100% - 16px * 3) / 4);
  padding: 10px 8px;
  color: ${(props) => props.theme?.fontSecondaryColor};
`
