import { makeStyles } from '@material-ui/core';
export default makeStyles({
    cardRoot: {
        margin: "auto",
        width: "800px",
        '@media only screen and (max-width: 768px)': {
            width: "350px"
        },
        marginTop: "50px",
        marginBottom: "30px",
        border: "#4BA0B4 solid",
        borderRadius: "20px",
    },
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '@media only screen and (max-width: 768px)': {
            flexDirection: "column"
        }
    },
    destinations: {
        display: "flex",
        flexDirection: "column",
        margin: "20px",
        padding: "20px"
    },
    actions: {
        display: "flex",
        justifyContent: "center",
        '& svg': {
            color: "#4BA0B4"
        }
    },
    nightAndSubmitContainer: {
        display: "flex",
        flexDirection: "column"
    },
    submitButton: {
        backgroundColor: "#4BA0B4",
        color: "white",
        '&:hover': {
            backgroundColor: "rgba(75, 160, 180, 0.8)",
        }
    }
})