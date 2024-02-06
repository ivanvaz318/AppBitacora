export class ResponseModel implements IResponseModel {
    message: string = "";
    statusCode: boolean = false;
   
  }
  
  export interface IResponseModel {
    message: string;
    statusCode: boolean;
  }
  