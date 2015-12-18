function jcc(a, b, c) {
    "use strict";
    var uc_a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lc_a = "abcdefghijklmnopqrstuvwxyz",
        z;
    if (typeof a === "string" && !isNaN(Number(b)) && !isNaN(Number(c))) {
        z = a.split("");
        b = Number(b);
        c = Number(c);
        uc_a = uc_a.split("");
        lc_a = lc_a.split("");
        // shifting each letter
        z.forEach(function (v, i) {
            var rui, rli;
            // matching and shifting uppercase [rui]
            uc_a.forEach(function (iv, ii) {
                if (v === iv) {
                    if (c === 0) {
                        rui = ii + b;
                        if (rui > 25) {
                            rui = rui % 26;
                        }
                        z[i] = uc_a[rui];
                    } else {
                        rui = ii - b;
                        if (rui < 0) {
                            rui = 26 + rui;
                        }
                        z[i] = uc_a[rui];
                    }
                }
            });
            // matching and shifting lowercase [rli]
            lc_a.forEach(function (iv, ii) {
                if (v === iv) {
                    if (c === 0) {
                        rli = ii + b;
                        if (rli > 25) {
                            rli = rli % 26;
                        }
                        z[i] = lc_a[rli];
                    } else {
                        rli = ii - b;
                        if (rli < 0) {
                            rli = 26 + rli;
                        }
                        z[i] = lc_a[rli];
                    }
                }
            });
        });
        z = z.join("");
    } else {
        z = "ERROR INPUT";
    }
    return z;
}
