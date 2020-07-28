import { makeStyles } from '@material-ui/core';
export default makeStyles({
    cardRoot: {
        margin: "auto",
        width: "700px",
        padding: "20px",
        '@media only screen and (max-width: 960px)': {
            width: "600px",
            minHeight: "200px",
        },
        '@media only screen and (max-width: 768px)': {
            width: "280px",
            minHeight: "200px",
            flexDirection: "column",
        },
        marginTop: "50px",
        marginBottom: "30px",
        borderRadius: "5px"
    },
    plusButton: {
        display: "flex",
        justifyContent: "center",
        '& svg': {
            color: "#4BA0B4"
        }
    },
    originAndNights: {
        display: "flex",
        marginBottom: "20px",
        '@media only screen and (min-width: 960px)': {
            paddingRight: "55px"
        },
    },
    submitButton: {
        marginTop: "10px",
        backgroundColor: "#4BA0B4",
        color: "white",
        '&:hover': {
            backgroundColor: "rgba(75, 160, 180, 0.8)",
        }
    },
    textLink: {
        textDecoration: "none",
        color: "#4BA0B4",
        '& p': {
            marginLeft: "10px",
            textAlign: "left"
        },
        '&:hover': {
            cursor: "pointer"
        }
    },
    actions: {
        marginTop: "15px",
        display: "flex",
        alignItems: "center"
    },
    citiesAndDuration: {
        alignItems: "baseline"
    }
})