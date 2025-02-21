async function getData(url: string): Promise<void> {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}