import { createMuiTheme } from '@material-ui/core/styles';

const dateBlack= "#100B00";
const datePurple= "#561AB9";
const dateGreen= "#85CB33";

export default createMuiTheme({
    palette:{
        common:{
            black: `${dateBlack}`,
            blue: `${datePurple}`
        },
        primary:{
            main:`${dateBlack}`
        },
        secondary: {
            main:`${datePurple}`
        },
        success:{
            main:`${dateGreen}`
        }
    },
    typography:{
        h3: {
            fontWeight: 300
        }
    }
});