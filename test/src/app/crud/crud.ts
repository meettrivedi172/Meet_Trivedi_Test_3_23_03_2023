 export interface Data{
  canDelete : boolean,
  isActive  : boolean,
  isVirtual : boolean,
  programBudget :number,
  programDescription : string,
  programID :string,
  programName:string,
  programNumber:string

 }

 export interface Response {
    success: boolean
    message: string
    programs: Data[]
  }
