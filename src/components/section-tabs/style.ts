import styled from 'styled-components'

export const TabsWrapper = styled.div`
  display: flex;
  margin: -4px 0 8px;

  .item {
    box-sizing: border-box;
    width: 100px;
    padding: 12px 14px;
    border-radius: 3px;
    color: ${(props) => props.theme?.fontTertiaryColor};
    text-align: center;
    border: 1px solid #d8d8d8;
    margin-right: 16px;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme?.mixin?.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: ${(props) => props.theme?.reverseFontColor};
      background-color: ${(props) => props.theme?.secondaryColor};
    }
  }
`
