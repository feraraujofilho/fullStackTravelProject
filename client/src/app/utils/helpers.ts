export const addClasses = (element: any, classes: string[]): any => {
    const newElement = element
    if (newElement) {
        newElement.className = `${element.className} ${classes.join(' ')}`
    }
    return newElement
}

export const convertDateIntoRightFormat = (str: string): string => {
    let arrayOfDates = str.split(" - ")
    let correctDateFormat = arrayOfDates.map((value: string) => {
        return value.split("-").join("").slice(2)
    })
    return correctDateFormat.join("/")

}
