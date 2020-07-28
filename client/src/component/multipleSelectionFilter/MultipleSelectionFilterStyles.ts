import { makeStyles } from '@material-ui/core';
export default makeStyles({
    root: {
        width: "50%",
        '& .MuiInputLabel-animated': {
            color: "rgb(75, 160, 180)",
            fontSize: "0.85rem",
        },
        '& .MuiSelect-select.MuiSelect-select': {
            color: "rgb(75, 160, 180)",
            padding: "10px"
        },

    },
    checkbox: {
        color: "rgb(75, 160, 180)",
        '& .Mui-checked': {
            color: "rgb(75, 160, 180)"
        },
    }
})