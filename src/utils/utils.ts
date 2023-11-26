import { Visibility, newDiaryEntry, weatherEnum } from "../types";

const parseComment = (commentFromRequest:any):string =>{
    if(!isString(commentFromRequest)){
        throw new Error("Incorrect or missing comment")
    }
    return commentFromRequest
}

const isString = (string:string):boolean =>{
        return typeof string === 'string'
    
}

const parseDate = (dateFromRequest :any):string =>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Invalid date')
    }
    return dateFromRequest;
}

const isDate = (date:string):boolean =>{
    return Boolean(Date.parse(date))
}

const parseWeather = (weatherFromRequest:any):weatherEnum =>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error("Missing weather data");
    }
    return weatherFromRequest;
}

const isWeather= (param:any):boolean=>{
    return Object.values(weatherEnum).includes(param)
}

const parseVisibility = (visiblilityFromRequest :any):Visibility =>{
    if(!isString(visiblilityFromRequest) || !isVisibility(visiblilityFromRequest)){
        throw new Error ("Incorrect or missing Visibility")
    }
    return visiblilityFromRequest;
    
}

const isVisibility =  (param:any):boolean =>{
    return Object.values(Visibility).includes(param)
}
 
const toNewDiaryEntry = (object:any):newDiaryEntry =>{
    const newEntry:newDiaryEntry = {
        comment:parseComment(object.comment),
        date:parseDate(object.date),
        weather:parseWeather(object.weather),
        visibility:parseVisibility(object.visibility)
    }
    return newEntry;
}

export default toNewDiaryEntry