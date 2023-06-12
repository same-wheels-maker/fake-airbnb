import styled from 'styled-components'
import React from 'react'

interface Props {
  colorKey: string
}

export const FooterWrapper = styled.div<Props>`
  margin-top: 16px;
  display: flex;

  .info {
    color: ${(props: any) => props.theme?.[props.colorKey]};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    .text {
      margin-right: 6px;
    }
  }
`
