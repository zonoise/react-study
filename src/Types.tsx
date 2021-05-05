
export type LightProps = {
    id:number;
    name:string,
    discription?:string,
    lat:number;//latitude
    long:number;//longitude
    status?:string;
    checked:boolean;
    handleClick?:(targetId:any)=>void
};