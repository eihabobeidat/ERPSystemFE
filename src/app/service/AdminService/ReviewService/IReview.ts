export interface IReview{
    id:number
    time?:Date
    value:number
    objective:number
    competency:number
    imagePath?:string
    firstName:string
    lastName:string
    reviewedBy:string
}