import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #ebebeb;
  margin-top: 100px;

  .wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 48px 24px;

    .service {
      display: flex;
      justify-content: space-around;

      .footer-item {
        .name {
          color: ${(props) => props.theme.fontPrimaryColor};
          font-weight: 700;
          margin-bottom: 20px;
        }

        .list-item {
          color: ${(props) => props.theme?.fontTertiaryColor};
          margin-bottom: 8px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .statement {
      border-top: 1px solid #eee;
      font-size: 12px;
      color: ${(props) => props.theme?.fontTertiaryColor};
      margin-top: 30px;
      padding-top: 32px;
      text-align: center;
    }
  }
`
