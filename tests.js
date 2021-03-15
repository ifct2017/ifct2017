const assert = require('assert');
const ifct2017 = require('./');




async function testAll() {
  await ifct2017.compositions.load();

  var a = ifct2017.compositions('pineapple');
  var b = ifct2017.compositions('ananas comosus');
  assert.deepStrictEqual(a[0].code, 'E053');
  assert.deepStrictEqual(b[0].code, 'E053');

  var a = ifct2017.columns('vitamin c');
  var b = ifct2017.columns('c-vitamin');
  assert.deepStrictEqual(a[0].code, 'vitc');
  assert.deepStrictEqual(b[0].code, 'vitc');

  var a = ifct2017.pictures.unpkg('A001');
  var b = 'https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg';
  assert.deepStrictEqual(a, b);

  var a = ifct2017.intakes('his');
  var b = ifct2017.intakes('Histidine');
  var c = [{
    code: 'his', whorda: -0.01, usear: NaN, usrdam: -0.014, usrdaf: NaN,
    euprim: NaN, euprif: NaN, ulus: NaN, uleu: NaN, uljapan: NaN
  }];
  assert.deepStrictEqual(a, c);
  assert.deepStrictEqual(b, c);
}
testAll();
