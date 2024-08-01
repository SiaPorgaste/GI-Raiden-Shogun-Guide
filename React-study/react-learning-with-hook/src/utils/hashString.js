// Pure JavaScript function that hashes any string provided as a parameter
const hashString = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;

  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = (h1 ^ ch) * 0x5bd1e995;
    h2 = (h2 ^ ch) * 0x27d4eb2d;
  }

  h1 = (h1 ^ (h1 >>> 16)) * 0x85ebca6b;
  h2 = (h2 ^ (h2 >>> 16)) * 0x85ebca6b;

  return (h1 + (h2 >>> 0)) >>> 0;
};

export default hashString;
