
export const parseDateTime = myDate => {
    return new Date(myDate).toLocaleTimeString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

export default{
    parseDateTime
}