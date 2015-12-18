# Caesar Cipher JS
The Mr Juli Caesar Cipher in JavaScript

## Usage
`jcc([string input], [how many rotations], [encrypt or decrypt])`

The output will also be string.

## Rotations
Minimum rotation is **1**, maximum of **25**.

## Encrypt/Decrypt
Encrypt: `0`

Decrypt: `1`

The "Encrypt" means shift **forward** (increases the index reference).
The "Decrypt" means shift **backward** (reduces the index reference).

## Usage Example
```
//jcc([string input], [how many rotations], [encrypt or decrypt])
```
```
var output = jcc("AbC", 1, 0);
// the ROT1 encryption [output] will be: "BcD"
```
```
var output = jcc("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 23, 0);
// the ROT23 encryption [output] will be: "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"
```
```
var output = jcc("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD", 23, 1);
// the ROT23 decryption [output] will be: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
```
