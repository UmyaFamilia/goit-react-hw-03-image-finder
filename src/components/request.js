import axios from 'axios';
const request = async (query, page) => {
  const result = await axios
    .get('https://pixabay.com/api/', {
      params: {
        q: query,
        page: page,
        key: '38759560-76db7c61ea024fe4bd5e7b79d',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })

    .then(a => a.data)
    .catch(error => console.log(error));
  return result;
};
export default request;
