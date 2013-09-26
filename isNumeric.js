var isNumeric = (function () {
    var isNumeric = {};

    return isNumeric;
})();

if (typeof (exports) !== "undefined") {
    if (typeof (module) !== "undefined" && module.exports) {
        exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
}