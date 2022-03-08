import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  winUrl
  winUrl1
  ngOnInit(): void {
    this.toViewer()
    this.getdata()
  }
  public toViewer() {

    let url = '/iframepage';
    let url1 ='/iframepage2'
    this.winUrl=this.sanitizer.bypassSecurityTrustResourceUrl(url)
    this.winUrl1=this.sanitizer.bypassSecurityTrustResourceUrl(url1)
  }
  getdata()
  {window.addEventListener('message', function (e) {
    // Get the sent data
    const data = e.data;

   console.log(e.data)
   document.getElementsByTagName("iframe")[0].contentWindow.postMessage(data, '*');
   document.getElementsByTagName("iframe")[1].contentWindow.postMessage(data, '*');
});
window.addEventListener("message", this.receiveMessage, false);
window.addEventListener('message', function (e) {
    // Get the sent data
    const data = e.data;

   console.log(e.data)
  
})

}
popup=false
receiveMessage = (event: any) => {
    const message = event;

    console.log(message.data)
   
    if(message.data==true){
        this.popup=true
      }


}
reset(){
    document.getElementsByTagName("iframe")[0].contentWindow.postMessage("reset", '*');
    document.getElementsByTagName("iframe")[1].contentWindow.postMessage("reset", '*');
    this.popup=false
}

}
