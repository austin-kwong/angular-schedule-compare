import {Component, OnInit} from '@angular/core';

import {FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';

const URL = '/api/visualize';

@Component({
  selector: 'upload-visualize',
  templateUrl: './upload-visualize.component.html',
  styleUrls: ['./upload-visualize.component.css']
})
// })

export class UploadVisualizeComponent implements OnInit {
  public availability: Object;
  public error: string;
  public uploader: FileUploader;
  ngOnInit(): void {
    this.uploader = new FileUploader({url: URL});

    // mocking behaviour
    //this.availability = {"0":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTTIME":"2017-09-04T15:00:00.000Z","ENDTIME":"2017-09-04T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-04T15:00:00.000Z","ENDTIME":"2017-09-04T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-04T16:00:00.000Z","ENDTIME":"2017-09-04T17:00:00.000Z","LOCATION":"Forest Sciences Centre\\, Room 1001","CLASSNAME":"CPSC 320 T1E"},{"STARTIME":"2017-09-04T16:00:00.000Z","ENDTIME":"2017-09-04T17:00:00.000Z","LOCATION":"Forest Sciences Centre\\, Room 1001","CLASSNAME":"CPSC 320 T1E"},0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-04T21:00:00.000Z","ENDTIME":"2017-09-04T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},{"STARTIME":"2017-09-04T21:00:00.000Z","ENDTIME":"2017-09-04T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"1":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-05T16:30:00.000Z","ENDTIME":"2017-09-05T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-05T16:30:00.000Z","ENDTIME":"2017-09-05T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-05T16:30:00.000Z","ENDTIME":"2017-09-05T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},0,0,0,0,0,0],"2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-06T15:00:00.000Z","ENDTIME":"2017-09-06T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-06T15:00:00.000Z","ENDTIME":"2017-09-06T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-06T21:00:00.000Z","ENDTIME":"2017-09-06T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},{"STARTIME":"2017-09-06T21:00:00.000Z","ENDTIME":"2017-09-06T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"3":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-07T16:30:00.000Z","ENDTIME":"2017-09-07T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-07T16:30:00.000Z","ENDTIME":"2017-09-07T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-07T16:30:00.000Z","ENDTIME":"2017-09-07T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},0,0,0,0,0,0,{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"4":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-08T15:00:00.000Z","ENDTIME":"2017-09-08T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-08T15:00:00.000Z","ENDTIME":"2017-09-08T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-08T21:00:00.000Z","ENDTIME":"2017-09-08T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},{"STARTIME":"2017-09-08T21:00:00.000Z","ENDTIME":"2017-09-08T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};

  }
  collectFile(): void {
    const self = this;
    this.uploader.onCompleteItem = function (item, response, status, headers) {
      self.uploader.clearQueue();
      if (status === 200) {
        console.log('New availability received...', JSON.stringify(response));
        self.availability = JSON.parse(response);
        self.error = null;

      } else if (status === 500) {
        console.log('Received Error from api', response);
        self.error = response;

      }
    };
    for (const file of this.uploader.queue){

      console.log('Uploading file: ' + file.toString());
      file.upload();
    }
  }
}
//
