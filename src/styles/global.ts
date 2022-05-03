import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.neutral.light.pure};
    color: ${props => props.theme.colors.neutral.dark.pure};
    font-family: ${props => props.theme.font.family.base};
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }
`
