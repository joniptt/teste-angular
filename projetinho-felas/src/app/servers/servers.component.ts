import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'teste';
  serverCreated = false;
  hidden = false;
  servers = ['TestServer1', 'TestServer2'];
  serverCreationStatus = 'No server was created!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  ngOnInit(): void {}
}
