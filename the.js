// README: https://github.com/monkeyraptor/Caesar-Cipher-JS
// With HTML interface: http://portraptor.johanpaul.net/2015/12/online-caesar-cipher-calculator.html
function jcc(a, b, c) {
    "use strict";
    var uc_a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // uppercase English alphabets (26 letters)
        lc_a = "abcdefghijklmnopqrstuvwxyz", // lowercase English alphabets (26 letters)
        z;
    b = Number(b); // how many rotations
    c = Number(c); // 0: shift forward || 1: shift backward
    if (typeof a === "string" && b > 0 && b < 26 && /^(0|1)$/.test(c)) {
        z = a.split(""); // a is input string; z is a to array of chars
        uc_a = uc_a.split(""); // uppercase alphabets to array of chars
        lc_a = lc_a.split(""); // lowercase alphabets to array of chars
        // shifting each letter
        z.forEach(function (v, i) {
            var rui, rli;
            // matching and shifting uppercase [rui]
            uc_a.forEach(function (iv, ii) {
                if (v === iv) {
                    if (c === 0) { // forward shift
                        rui = ii + b; // normal shift
                        if (rui > 25) { // use modulo operation to rotate
                            rui = rui % 26;
                        }
                        z[i] = uc_a[rui]; // the uppercase forward shift/rotation
                    } else { // backward shift
                        rui = ii - b; // normal shift
                        if (rui < 0) { // use addition to rotate
                            rui = 26 + rui;
                        }
                        z[i] = uc_a[rui]; // the uppercase backward shift/rotation
                    }
                }
            });
            // matching and shifting lowercase [rli]
            lc_a.forEach(function (iv, ii) {
                if (v === iv) {
                    if (c === 0) { // forward shift
                        rli = ii + b; // normal shift
                        if (rli > 25) { // use modulo operation to rotate
                            rli = rli % 26;
                        }
                        z[i] = lc_a[rli]; // the lowercase forward shift/rotation
                    } else { // backward shift
                        rli = ii - b; // normal shift
                        if (rli < 0) { // use addition to rotate
                            rli = 26 + rli;
                        }
                        z[i] = lc_a[rli]; // the lowercase backward shift/rotation
                    }
                }
            });
        });
        z = z.join(""); // for valid inputs
    } else {
        z = "ERROR INPUT"; // for invalid input(s)
    }
    return z; // final output
}
