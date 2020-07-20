import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
	formControl: {
		width: '100px',
		color: "rgb(75, 160, 180)",
		margin: theme.spacing(2),
		'& .MuiInputBase-root': {
			color: "rgb(75, 160, 180)",
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'rgb(75, 160, 180)',
		},
		'& .MuiInputLabel-root': {
			color: "rgb(75, 160, 180)"
		},
	},
}))
