export default function updateUniqueItemCounts(itemCounts) {
  if (!(itemCounts instanceof Map)) {
    throw new Error('Invalid input: expected a Map');
  }
  for (const [item, count] of itemCounts.entries()) {
    if (count === 1) {
      itemCounts.set(item, 100);
    }
  }
  return itemCounts;
}
