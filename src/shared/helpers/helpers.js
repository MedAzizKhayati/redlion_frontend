export const formatDateToView = (date) => {
    const dateFormatted = new Date(date);
    const day = dateFormatted.getDate();
    const month = dateFormatted.getMonth() + 1;
    const year = dateFormatted.getFullYear();
    return `${month}/${day}/${year}`;
}

export const formatDateToApi = (date) => {
    const dateFormatted = new Date(date);
    const day = dateFormatted.getDate();
    const month = dateFormatted.getMonth() + 1;
    const year = dateFormatted.getFullYear();
    return `${year}-${month}-${day}`;
}