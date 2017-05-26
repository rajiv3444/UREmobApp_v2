import {Injectable} from '@angular/core';
//import { Log, Level } from 'ng2-logger'

@Injectable()
export class Logger {
    
    debuggerMode:boolean = true;

    LogError(content?:string)
    {
        if(this.debuggerMode)
        {
            console.error("URE Error: " + content);
        }        
    }

    LogInfo(content?:string)
    {
        if(this.debuggerMode)
        {
            console.log("URE Info: " + content);
            //log.info('ng info: this is by angular logger');
        }        
    }

    LogWarn(content?:string)
    {
        if(this.debuggerMode)
        {
            console.warn("URE warn: " + content);
        }        
    }

}

// const log = Log.create('books', Level.ERROR, Level.WARN); 
//  log.color = 'green'; 

