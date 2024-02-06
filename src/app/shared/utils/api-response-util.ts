
import { IResponseModel, ResponseModel } from "../../models/response/response.model";
import { mensajes } from "../constantes/constantes";


export class ApiResponseUtil {

  public static httpResponseLoginModel(
    status: number,
    statusCode: boolean,
    targetResponseModel: IResponseModel
  ){

    
      if (targetResponseModel == null || targetResponseModel == undefined) {
       // let type: (new () => typeof targetResponseModel);
       let type = ResponseModel;
        targetResponseModel = new type();
      }

      if (statusCode) {
        Object.assign(targetResponseModel);
      } else {
        switch (status) {
          case 200:
            targetResponseModel.message = mensajes.bienvenido;
            break;
          case 401:
            targetResponseModel.message = mensajes.sesionExpirada;
            break;
          default:
            targetResponseModel.message = mensajes.servicioNoDisponible;
            break;
        }
      } 
      targetResponseModel.statusCode = true;

      
  }

  public static httpResponseToModel(

    statusCode: boolean,
    body: any,
    targetResponseModel: IResponseModel
  ): void {

    if (targetResponseModel == null || targetResponseModel == undefined) {
     // let type: (new () => typeof targetResponseModel);
     let type = ResponseModel;
      targetResponseModel = new type();
    }

    if (statusCode) {
      Object.assign(targetResponseModel, body);
    } else {
      switch (body.status) {
        case 0:
          targetResponseModel.message = mensajes.servicioNoDisponible;
          break;
        case 401:
          targetResponseModel.message = mensajes.sesionExpirada;
          break;
        default:
          targetResponseModel.message = body.error.message;
          break;
      }
    }

    targetResponseModel.statusCode = true;

    this.validarToken(body.status);
  }

  private static validarToken(statusCode: number): void {

    if (statusCode == 401) {
      localStorage.clear();
      location.reload();
    }
  }
}
