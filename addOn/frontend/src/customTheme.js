import { createTheme } from '@material-ui/core/styles';
import theme from './config/theme';


//Change this color to change AppBar color
const primary = '#a6a6a6';


let customTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: primary,
    }
  },
});

export default customTheme;
