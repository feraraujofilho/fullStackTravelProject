import { makeStyles } from '@material-ui/core'

export default makeStyles({
    root: {
        width: '200px',
        '& .MuiOutlinedInput-root': {
            marginBottom: "10px",
            borderRadius: "20px",
            color: "rgb(75, 160, 180)",
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(75, 160, 180)',
            },
        },
        '& .MuiSelect-outlined.MuiSelect-outlined': {
            borderRadius: "20px",
            color: "rgb(75, 160, 180)"
        },
        '& .MuiInputLabel-outlined': {
            color: "rgb(75, 160, 180)"
        },
    },
})
