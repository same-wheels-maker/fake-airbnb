import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme?.primaryColor};

  .logo {
    cursor: pointer;
  }
`
