export default function cleanSet(inputSet, prefix) {
  const cleanedStrings = [];
  if (prefix === '' || typeof prefix !== 'string') return '';
  inputSet.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(prefix)) {
      cleanedStrings.push(item.slice(prefix.length));
  }
  });
  return cleanedStrings.join('-');
}
