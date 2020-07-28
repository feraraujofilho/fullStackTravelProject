import React, { FC } from "react"
import { Card } from "@material-ui/core";
import useStyles from "./PriceTagStyles"
import { chooseBackgroundColorAccordingToPrice } from "../../app/utils/helpers";


interface PriceTagProps {
    columnValuesArray: any[]
    el?: any
    originAbb?: string | null;
    destinationAbb?: string;
    date?: string
}

const PriceTag: FC<PriceTagProps> = ({ columnValuesArray, el, originAbb, destinationAbb, date }) => {


    const filteredArray = columnValuesArray.filter((price: any) => price);
    const fareLink = `https://www.skyscanner.de/transport/flights/${originAbb}/${destinationAbb}/${date}`;

    // let average = filteredArray.reduce((acc: number, value: number) => acc + value, 0) / filteredArray.length;
    let max = Math.max(...filteredArray);
    let min = Math.min(...filteredArray);

    let backgroundColor = chooseBackgroundColorAccordingToPrice(el, max, min)

    const classes = useStyles({ backgroundColor })

    if (el) {
        return <Card className={classes.root}>
            <a href={fareLink} className={classes.link} target="_blank" rel="noopener noreferrer">
                € {el}
            </a>
        </Card>

    }

    return null
}

export default PriceTag