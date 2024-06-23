// Options to format a blog post's date
const options: Intl.DateTimeFormatOptions = {
  year: "numeric", // 2024
  month: "short", // 'Mar' instead of 'March'
};

const formatDateToString = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const formatStartAndEndDates = (startDate: Date, endDate?: Date) => {
  let formattedDateString = formatDateToString(startDate);
  if (endDate) {
    formattedDateString += ` - ${formatDateToString(endDate)}`;
  }
  return formattedDateString;
};

export { formatStartAndEndDates };
