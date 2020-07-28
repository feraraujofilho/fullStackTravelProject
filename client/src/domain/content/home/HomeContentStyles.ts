import { makeStyles } from '@material-ui/core';
import backgroundImage from "../../../images/background_homepage.png"


export default makeStyles({
    root: {
        minHeight: "100vh",
    },
    content: {
        minHeight: "calc(100vh - 64px)",
        backgroundImage: `URL(${backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
    },
    pageHeadings: {
        marginTop: "20px",
        maxWidth: "80%",
        textAlign: "center",
        color: "white"
    },
    logo: {
        width: "200px",
        marginTop: "20px"
    },
    text: {
        textShadow: "rgba(0, 0, 0, 0.25) 0px 4px 10px"
    },
})