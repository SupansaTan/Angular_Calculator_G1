import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { EventData } from "@nativescript/core";
import { Label } from "tns-core-modules/ui/label";
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    @ViewChild("display_num", { static: false }) expLabel: ElementRef;
    @ViewChild("display_result", { static: false }) resultLabel: ElementRef;

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

    clear_btn() {
        this.expLabel.nativeElement.text = "0";
        this.resultLabel.nativeElement.text = "=";
    }

    backspace_btn() {
        let text_label = this.expLabel.nativeElement.text;
        let slice_text = text_label.slice(0, text_label.length - 1);

        if (slice_text == "" || text_label == "0") {
            this.expLabel.nativeElement.text = "0";
        }
        else {
            this.expLabel.nativeElement.text = slice_text;
        }
    }

    pressed_btn(args: EventData) {
        var button = <Button>args.object;
        var value = button.text;
        var text_label = this.expLabel.nativeElement.text;
        var result_label = this.resultLabel.nativeElement.text;

        if (text_label == "0") {
            this.expLabel.nativeElement.text = value;
        }
        else {
            this.expLabel.nativeElement.text = text_label + value;
        }
    }
}
