import { makeStyles } from '@material-ui/core';
export default makeStyles({
    root: ({ backgroundColor }: { backgroundColor: string }) => ({
        padding: "5px",
        backgroundColor: backgroundColor,
        minWidth: "50px"
    }),
    link: {
        textDecoration: "none",
        color: "black"
    }
})