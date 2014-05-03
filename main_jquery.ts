/// <reference path="jquery.d.ts" />

class Greeter {
	private greeting : string;
	constructor(message: string) {
	    this.greeting = message;
	}
	public greet(): string {
		return "Hello," + this.greeting;
	}
}

var greeter: Greeter = new Greeter("TypeScript");
$("div").html(greeter.greet());