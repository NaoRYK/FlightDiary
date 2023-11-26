
export enum weatherEnum {
    Sunny = "sunny",
    Rainy = "rainy",
    Cloudy = "cloudy",
    Windy = "windy",
    Stormy = "stormy",
    Clear = "clear",
  }

  export enum Visibility {
    Excellent = "excellent",
    Great = "great",
    Good = "good",
    Ok = "ok",
    Poor = "poor",
    Bad = "bad",
    SoBad = "so bad",
    Zero = "zero",
  }
  
  // Uso del enum
  

export interface DiaryEntry{

    id:number,
    date:string,
    weather:weatherEnum,
    visibility:Visibility,
    comment:string
}
export type NonSensitiveInfoEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>;

export type newDiaryEntry = Omit<DiaryEntry, 'id'>
