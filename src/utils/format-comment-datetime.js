export default function formatCommentDatetime(dateString) {
  const date = new Date(dateString);

  const optionsDate = { month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('ru-RU', optionsDate);
  const year = date.getFullYear();

  const optionsTime = { hour: '2-digit', minute: '2-digit' };
  const formattedTime = date.toLocaleTimeString('ru-RU', optionsTime);

  const result = `${formattedDate} ${year} в ${formattedTime}`;

  return result;
}
