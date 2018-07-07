import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit 
{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='';
  userName = '';
  allowReset = false;

  constructor() 
  {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() 
  {
  }


  onCreateServer()
  {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleResetClick(event: Event)
  {
    if((<HTMLInputElement>event.target).value!='')
    {
      this.allowReset = true;
    }
    else
    {
      this.allowReset = false;
    }
    
  }

  onResetClick()
  {
    this.userName = '';
    this.allowReset = false;
  }



}
