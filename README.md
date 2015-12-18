# Caesar-Cipher-JS
The Caesar Cipher in JavaScript

## Usage
`jcc([string input], [how many rotations], [encrypt or decrypt])`

The output will also be string.

## Rotations
Minimum rotation is **1**, maximum of **25**.

## Encrypt/Decrypt
Encrypt: `0`
Decrypt: `1`

## Example
```
jcc("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD", 23, 1);
// the ROT23 decryption output will be: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
```
