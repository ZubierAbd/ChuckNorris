import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Chuck Norris App";
  quote = "";
  iconUrl = "";
  url = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) {}
  getQuote() {
    console.log("Get quote");
    return this.http.get(this.url).subscribe(res => {
      console.log(res);
      this.quote = res["value"];
      this.iconUrl = res["icon_url"];
    });
  }

  ngOnInit() {
    this.getQuote();
  }
}
