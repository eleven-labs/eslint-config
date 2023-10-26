module.exports = {
  extends: [
    './base',
  ].map((fileName) => require.resolve(fileName)),
}
