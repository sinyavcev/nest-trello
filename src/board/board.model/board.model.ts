export class BoardModel {
    _id:string;
    title: string;
    column: {
        _id:string;
      title: string;
      card:{
          _id:string;
          title:string;
          description:string;
          tasks:{
              _id:string;
              title:string;
              status:boolean;
          }[]
      }[]
    }[]
}
