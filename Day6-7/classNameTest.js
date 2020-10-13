function classNameTest(...args) {
    let args2 = [];
    for (let i of args) {
        if (typeof (i) === "object") {
            for (let [key, value] of Object.entries(i)) {
                // value && args2.push(key);
                args2.push(key);
            }
        }
        else {
            args2.push(i);
        }
    }
    return args2;
}

let bordered = true;
let classes = classNameTest("Button", { "Bordered": bordered });
console.log(classes.join(" "));