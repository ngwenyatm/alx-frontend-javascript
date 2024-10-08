export default function createInt8TypedArray(length, position, item) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, item);
  return buffer;
}
