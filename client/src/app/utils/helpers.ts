export const addClasses = (element: any, classes: string[]): any => {
    const newElement = element
    if (newElement) {
        newElement.className = `${element.className} ${classes.join(' ')}`
    }
    return newElement
}