import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
      <TextField hint="Email Address" keyboardType="email"
        autocorrect="false" autocapitalizationType="none" [(ngModel)]="email"></TextField>
      <TextField hint="Password" secure="true"></TextField>

        <Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
<Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  email: string = "joewashington75@gmail.com";
  submit():void{
    console.log(`submit clicked ${this.email}`);
  }
}