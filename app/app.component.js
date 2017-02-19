"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "joewashington75@gmail.com";
    }
    AppComponent.prototype.submit = function () {
        console.log("submit clicked " + this.email);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n      <TextField hint=\"Email Address\" keyboardType=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"email\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n        <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n<Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQWlCMUMsSUFBYSxZQUFZO0lBZnpCO1FBZ0JFLFVBQUssR0FBVywyQkFBMkIsQ0FBQztJQUk5QyxDQUFDO0lBSEMsNkJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLFlBQVk7SUFmeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSx5a0JBVVQ7UUFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO0dBQ1csWUFBWSxDQUt4QjtBQUxZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIFsobmdNb2RlbCldPVwiZW1haWxcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCdcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG48QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXCIgKHRhcCk9XCJ0b2dnbGVEaXNwbGF5KClcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZW1haWw6IHN0cmluZyA9IFwiam9ld2FzaGluZ3Rvbjc1QGdtYWlsLmNvbVwiO1xuICBzdWJtaXQoKTp2b2lke1xuICAgIGNvbnNvbGUubG9nKGBzdWJtaXQgY2xpY2tlZCAke3RoaXMuZW1haWx9YCk7XG4gIH1cbn0iXX0=