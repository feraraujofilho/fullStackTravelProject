import { makeStyles } from '@material-ui/core';
export default makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(245, 247, 249)"
    },
    sortingMenu: {
        '@media only screen and (max-width: 768px)': {
            width: "90%",
            marginBottom: "5px",
        },
        textAlign: "left",
        marginBottom: "8px",
        '& .MuiSvgIcon-root': {
            marginRight: "8px"
        }
    },
    sortingAndExplanation: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '@media only screen and (max-width: 768px)': {
            fontSize: "0.7rem"
        },
        marginBottom: "7px"

    }
})