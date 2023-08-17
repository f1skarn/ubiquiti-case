export function getDevices() {
  const url = ' https://static.ui.com/fingerprint/ui/public.json';
  return fetch(url, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}
