//export type NonSensitiveInformationDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">;
export type NonSensitiveInformationDiaryEntry = Omit<DiaryEntry, "comment">;
export type CreateDiaryDto = Omit<DiaryEntry, "id">;

