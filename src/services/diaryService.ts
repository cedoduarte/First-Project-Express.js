import { DiaryEntry } from "../interfaces";
import { CreateDiaryDto, NonSensitiveInformationDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export function findAll(): DiaryEntry[] {
    return diaries;
}

export function getEntriesWithoutSensitiveInformation(): NonSensitiveInformationDiaryEntry[] {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
}

export function createDiary(createDiaryDto: CreateDiaryDto): DiaryEntry {
    const newDiary = {
        id: diaries.length + 1,
        date: createDiaryDto.date,
        weather: createDiaryDto.weather,
        visibility: createDiaryDto.visibility,
        comment: createDiaryDto.comment
    };
    diaries.push(newDiary);
    return newDiary;
}

export function findOne(id: number): NonSensitiveInformationDiaryEntry | undefined {
    const foundDiary = diaries.find(x => x.id === id);
    if (foundDiary) {
        const { comment, ...restOfDiary } = foundDiary;
        return restOfDiary;
    }
    return undefined;
}