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
    position: relative;
    padding: 10px 5px 10px 12px;
    border: 1px solid #DDDDDD;
    border-radius: 21px;
    color: #717171;
    ${props => props.theme.light.mixin.boxShadow}

    .badge {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 21px;
    }

    .panel {
      position: absolute;
      top: 50px;
      right: 0;
      width: 240px;
      border-radius: 12px;
      background-color: #fff;
      box-shadow:  0 0 6px rgba(0, 0, 0, .12);

      .top, .bottom {
        padding: 8px 0;

        .item {
          height: 44px;
          line-height: 44px;
          font-weight: 500;
          padding: 0 16px;
          cursor: pointer;

          &:hover {
            background-color: #f5f5f5;
          }
        }

        .register {
          color: ${props => props.theme.light.fontPrimaryColor};
          font-weight: 600;
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }

  
`
