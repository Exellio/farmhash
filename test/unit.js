'use strict';

const assert = require('assert');
const farmhash = require('../index');

const input = 'The quick brown fox jumped over the lazy sleeping dog';
const seed = 123;

/*******************************************************************************
 * HASH32
******************************************************************************/

// hash32 - valid
const hash32 = farmhash.hash32(input);
assert.strictEqual('number', typeof hash32);
assert.strictEqual(true, hash32 > 0);

// hash32 - invalid
assert.throws(function () {
  farmhash.hash32(seed);
});

// hash32WithSeed - valid
const hash32WithSeed = farmhash.hash32WithSeed(input, seed);
assert.strictEqual('number', typeof hash32WithSeed);
assert.strictEqual(true, hash32WithSeed > 0);

// hash32WithSeed - invalid
assert.throws(function () {
  farmhash.hash32WithSeed(input);
});
assert.throws(function () {
  farmhash.hash32WithSeed(seed, seed);
});
assert.throws(function () {
  farmhash.hash32WithSeed(input, input);
});


/*******************************************************************************
 * HASH64
******************************************************************************/

// hash64 - valid
const hash64 = farmhash.hash64(input);
assert.strictEqual('string', typeof hash64);
assert.strictEqual(true, /^[0-9]{1,20}$/.test(hash64));

// hash64 - invalid
assert.throws(function () {
  farmhash.hash64(seed);
});

// hash64WithSeed - valid
const hash64WithSeed = farmhash.hash64WithSeed(input, seed);
assert.strictEqual('string', typeof hash64WithSeed);
assert.strictEqual(true, /^[0-9]{1,20}$/.test(hash64WithSeed));

// hash64WithSeed - invalid
assert.throws(function () {
  farmhash.hash64WithSeed(input);
});
assert.throws(function () {
  farmhash.hash64WithSeed(seed, seed);
});
assert.throws(function () {
  farmhash.hash32WithSeed(input, input);
});

// hash64WithSeeds - valid
const hash64WithSeeds = farmhash.hash64WithSeeds(input, seed, seed);
assert.strictEqual('string', typeof hash64WithSeeds);
assert.strictEqual(true, /^[0-9]{1,20}$/.test(hash64WithSeeds));

// hash64WithSeeds - invalid
assert.throws(function () {
  farmhash.hash64WithSeeds(input);
});
assert.throws(function () {
  farmhash.hash64WithSeeds(input, seed);
});
assert.throws(function () {
  farmhash.hash64WithSeeds(input, input, input);
});
assert.throws(function () {
  farmhash.hash64WithSeeds(seed, seed, seed);
});


/*******************************************************************************
 * HASH128
******************************************************************************/

// hash128 - valid
const hash128 = farmhash.hash128(input);
console.log(hash128);
assert.strictEqual('bigint', typeof hash128);
assert.strictEqual(true, /^[0-9]{1,39}$/.test(hash128));

// hash128 - invalid
assert.throws(function () {
  farmhash.hash128(seed);
});

// hash128WithSeed - valid
const hash128WithSeed = farmhash.hash128WithSeed(input, seed);
console.log(hash128WithSeed);
assert.strictEqual('bigint', typeof hash128WithSeed);
assert.strictEqual(true, /^[0-9]{1,39}$/.test(hash128WithSeed));

// hash128WithSeed - invalid
assert.throws(function () {
  farmhash.hash128WithSeed(input);
});
assert.throws(function () {
  farmhash.hash128WithSeed(seed, seed);
});


/*******************************************************************************
 * FINGERPRINT32
******************************************************************************/

// fingerprint32 - valid
const fingerprint32 = farmhash.fingerprint32(input);
assert.strictEqual('number', typeof fingerprint32);
assert.strictEqual(2280764877, fingerprint32);

// fingerprint32 - invalid
assert.throws(function () {
  farmhash.fingerprint32(seed);
});


/*******************************************************************************
 * FINGERPRINT64
******************************************************************************/

// fingerprint64 - valid
const fingerprint64 = farmhash.fingerprint64(input);
assert.strictEqual('string', typeof fingerprint64);
assert.strictEqual('17097846426514660294', fingerprint64);

// fingerprint64 - invalid
assert.throws(function () {
  farmhash.fingerprint64(seed);
});
