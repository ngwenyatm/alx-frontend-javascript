export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (endPoint === null || typeof endPoint !== 'object') {
    throw new Error('Bad endPoint');
  }
  const count = weakMap.get(endPoint) || 0;
  if (count >= 4) {
    throw new Error('Enpoint load is high');
  }
  weakMap.set(endPoint, count + 1);
}
