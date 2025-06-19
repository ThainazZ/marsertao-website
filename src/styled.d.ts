import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    sizes: {
      title: string;
      subtitle: string;
      paragraph: string;
      caption: string;
    };
  }
}
