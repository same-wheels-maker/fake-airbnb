import styled from 'styled-components'

type WrapperProperty = {
  verifyColor: string
}

export const ItemWrapper = styled.div<WrapperProperty>`
  box-sizing: border-box;
  width: calc((100% - 16px * 3) / 4);
  padding: 10px 8px;
  color: ${(props) => props.theme?.fontSecondaryColor};

  .inner {
    width: 100%;
    cursor: pointer;

    .cover {
      position: relative;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      /* color: ${(props) => props.verifyColor}; */
      color: ${(props) => props.theme?.lightFontPrimaryColor};
    }

    .name {
      font-size: 16px;
      font-weight: 600;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }
  }
`
