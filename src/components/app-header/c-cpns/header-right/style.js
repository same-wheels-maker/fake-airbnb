import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.theme.light.fontPrimaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    padding: 12px;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 21px;
      
      &:hover {
      background-color: #f5f5f5;
    }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    padding: 10px 5px 10px 12px;
    border: 1px solid #DDDDDD;
    border-radius: 21px;
    height: 21px;
    color: #717171;
    cursor: pointer;
    ${props => props.theme.light.mixin.boxShadow}
  }
`
