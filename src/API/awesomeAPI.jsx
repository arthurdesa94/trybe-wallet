export default function awesomeAPI() {
  const baseURL = 'https://economia.awesomeapi.com.br/json/';
  const data = fetch(`${baseURL}all`)
    .then((response) => response.json());

  return data;
}
