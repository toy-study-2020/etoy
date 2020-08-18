import * as styledComponents from 'styled-components';

interface ITheme {
  blueColor: string;
}

const { default: styled, css, ThemeProvider } = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ITheme
>;
export { css, ThemeProvider };
export default styled;
