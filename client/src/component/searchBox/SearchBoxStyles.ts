import { makeStyles } from '@material-ui/core';
export default makeStyles({
    cardRoot: {
        margin: "auto",
        width: "600px",
        padding: "20px",
        '@media only screen and (max-width: 768px)': {
            width: "280px",
            minHeight: "200px",
            flexDirection: "column",
        },
        marginTop: "50px",
        marginBottom: "30px",
        border: "#4BA0B4 solid",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
        '& svg': {
            color: "#4BA0B4"
        }
    },
    originAndNights: {
        display: "flex",
        marginBottom: "20px",
        alignItems: "center"
    },
    submitButton: {
        marginTop: "10px",
        backgroundColor: "#4BA0B4",
        color: "white",
        '&:hover': {
            backgroundColor: "rgba(75, 160, 180, 0.8)",
        }
    }
})