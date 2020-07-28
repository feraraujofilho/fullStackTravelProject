import { makeStyles } from '@material-ui/core';
export default makeStyles({
    table: {
        width: "80%",
        margin: "auto",
        textAlign: "center"

    },
    elementCard: {
        padding: "5px",
    },
    cardTable: {
        maxWidth: "800px",
        maxHeight: "100vh",
        overflow: "auto",
        '@media only screen and (max-width: 768px)': {
            width: "100vw",
        },
        margin: "auto",
        boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)"
    }
})