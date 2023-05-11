import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme?.fontPrimaryColor};
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
        background-color: ${(props) => props.theme?.fontPrimaryBackgroundColor};
      }
    }
  }

  .profile {
    position: relative;
    padding: 10px 5px 10px 12px;
    border: 2px solid #dddddd;
    border-radius: 21px;
    color: ${(props) => props.theme?.fontTertiaryColor};
    ${(props) => props.theme?.mixin?.boxShadow}

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
      background-color: ${(props) => props.theme?.backgroundColor};
      box-shadow: 0 0 6px ${(props) => props.theme?.boxShadowPrimaryColor};

      .top,
      .bottom {
        padding: 8px 0;

        .item {
          height: 44px;
          line-height: 44px;
          font-weight: 500;
          padding: 0 16px;
          cursor: pointer;

          &:hover {
            background-color: ${(props) => props.theme?.fontPrimaryBackgroundColor};
          }
        }

        .register {
          color: ${(props) => props.theme?.fontPrimaryColor};
          font-weight: 600;
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`
