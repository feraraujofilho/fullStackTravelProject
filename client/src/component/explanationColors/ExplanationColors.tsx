import React, { FC } from "react"
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import useStyles from "./ExplanationColorsStyles"


const ExplanationColors: FC = () => {
    const classes = useStyles()

    return <div className={classes.root}>
        <TurnedInIcon className={classes.cheap} /><p>Cheap</p>
        <TurnedInIcon className={classes.normal} /><p>Normal</p>
        <TurnedInIcon className={classes.expensive} /><p>Expensive</p>
    </div>
}

export default ExplanationColors;