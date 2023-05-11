import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    border: 2px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    box-shadow: 0 1px 2px ${(props) => props.theme?.boxShadowSecondaryColor},
      0 4px 12px ${(props) => props.theme?.boxShadowTertiaryColor};
    ${(props) => props.theme?.mixin?.boxShadow}

    .text {
      padding: 0 16px;
      color: ${(props) => props.theme.fontPrimaryColor};
      font-weight: 600;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;

      background-color: ${(props) => props.theme?.primaryColor};
    }
  }
`
