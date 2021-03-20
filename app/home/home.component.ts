import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    constructor() {
    }

    ngOnInit(): void {
    }

    precedence(op) {
        // precedence of operator
        if (op == '+' || op == '-') {
            return 1;
        }
        if (op == 'x' || op == '/') {
            return 2;
        }
        return 0;
    }

    calculate(num1, num2, op) {
        if (op == '+') { return num1 + num2 }
        if (op == '-') { return num1 - num2 }
        if (op == 'x') { return num1 * num2 }
        if (op == '/') { return num1 / num2 }
    }
}
