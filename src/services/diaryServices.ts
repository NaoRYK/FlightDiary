import { DiaryEntry, NonSensitiveInfoEntry, newDiaryEntry } from '../types';
import diaryData from './diaries.json'


const diaries:Array<DiaryEntry> = diaryData as Array<DiaryEntry>;


export const getEntries = ():DiaryEntry[] =>diaries;


export const getEntriesWithoutSensitiveInfo = ():NonSensitiveInfoEntry[] => {
  

    return diaries.map(({comment, ...diaries}) => {
        return diaries;
    });
}

export const findById = (id:number):NonSensitiveInfoEntry | undefined => {
    const entry:DiaryEntry | undefined = diaries.find(d => d.id === id)
    if(entry !== undefined) {
        
        return entry;

    }
    return undefined;

}
export const addEntry = (newDiaryEntry:newDiaryEntry):DiaryEntry => {
    const newEntry = {
        id:diaries.length + 1,
        ...newDiaryEntry
    }


    diaries.push(newEntry);
    return newEntry;

};