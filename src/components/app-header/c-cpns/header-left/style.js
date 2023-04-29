import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.light.primaryColor};

  .logo {
    cursor: pointer;
  }
`
