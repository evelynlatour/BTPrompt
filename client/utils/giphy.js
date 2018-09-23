/* helper functions */

// put together http requests
const composeRequest = (
  searchString,
  base = `https://api.giphy.com`,
  endpoint = `/v1/gifs/search`,
  key = `rJVJ5cXQNf9S6FK9mtsafkoHfSJ6QIvT`,
  qualifiers = `limit=20`,
) => {
  // turn spaces into '+' as required by api endpoint
  const plusString = searchString.split(` `).join(`+`);
  // compose url
  const request = `${base + endpoint}?q=${plusString}&api_key=${key}&${qualifiers}`;
  return request;
};

// grab select data back from objects returned by api; return array of objs
const getSelectData = giphyObject =>
  giphyObject.map(gif => ({
    title: gif.title,
    imageBig: gif.images.original.url,
    imageSmall: gif.images.downsized.url,
    url: gif.url,
    embedUrl: gif.embed_url,
  }));

export { composeRequest, getSelectData };
