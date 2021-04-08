import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#D32F2F",
        secondary: "#607D8B",
        success: "#00BCD4"
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "white",
        textColor: "black" 
    }
  });
  
  export default theme;