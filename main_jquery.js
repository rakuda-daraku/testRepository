/// <reference path="jquery.d.ts" />
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
})();

var greeter = new Greeter("TypeScript");
$("div").html(greeter.greet());
