/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends MuiTheme {}
}
