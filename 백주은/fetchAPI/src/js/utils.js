export const getFetch = async API => {
  const response = await fetch(`https://baekcode.github.io/APIs/${API}.json`);
  const data = await response.json();
  return data;
};

export const connecComponents = (root, elementObj) => {
  const template = Object.keys(elementObj).reduce((html, element) => {
    return (html += elementObj[element]);
  }, '');
  return root.insertAdjacentHTML('beforeend', template);
};
