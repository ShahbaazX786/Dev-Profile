export function formatThis(date: string) {
  const dateObject: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate: string = dateObject.toLocaleDateString("en-US", options);
  
  return formattedDate;
}
