function convertFunctionToText(obj) {
    return JSON.stringify(obj, function (key, value) {
        if (typeof value === "function") {
            return "/Function(" + value.toString() + ")/";
        }
        return value;
    });
}
function convertTextToFunction(obj) {
    return JSON.parse(obj, function (key, value) {
        if (typeof value === "string" &&
            value.startsWith("/Function(") &&
            value.endsWith(")/")) {
            value = value.substring(10, value.length - 2);
            return eval("(" + value + ")");
        }
        return value;
    });
}
// var $;
class Processor{
    constructor(loadFunctions){
        if(loadFunctions){
            this.$ = this.convertTextToFunction(loadFunctions);
        }   
    }
    do(obj){
        var f = convertTextToFunction(obj);
        var result = f.Function(this.$,f.params);
        return result;
    }
    convertFunctionToText(obj) {
        return JSON.stringify(obj, function (key, value) {
            if (typeof value === "function") {
                return "/Function(" + value.toString() + ")/";
            }
            return value;
        });
    }
    convertTextToFunction(obj) {
        return JSON.parse(obj, function (key, value) {
            if (typeof value === "string" &&
                value.startsWith("/Function(") &&
                value.endsWith(")/")) {
                value = value.substring(10, value.length - 2);
                return eval("(" + value + ")");
            }
            return value;
        });
    }
}

module.exports = processor;
