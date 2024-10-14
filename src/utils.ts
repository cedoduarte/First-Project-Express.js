import { Visibility, Weather } from "./enums";
import { CreateDiaryDto } from "./types";

export function isString(input: string): boolean {
    return typeof input === "string";
}

export function isDate(input: string): boolean {
    return Boolean(Date.parse(input));
}

export function isWeather(input: any): boolean {
    return Object.values(Weather).includes(input);
}

export function isVisibility(input: any): boolean {
    return Object.values(Visibility).includes(input);
}

export function parseDate(input: any): string {
    if (!isString(input) || !isDate(input)) {
        throw new Error("Incorrect or missing date");
    }
    return input;
}

export function parseComment(input: any): string {
    if (!isString(input)) {
        throw new Error("Incorrect or missing comment");
    }
    return input;
}

export function parseWeather(input: any): Weather {
    if (!isString(input) || !isWeather(input)) {
        throw new Error("Incorrect or missing weather");
    }
    return input;
}

export function parseVisibility(input: any): Visibility {
    if (!isString(input) || !isVisibility(input)) {
        throw new Error("Incorrect or missing visibility");
    }
    return input;
}

export function toCreateDiaryDto(input: any): CreateDiaryDto {
    const dto: CreateDiaryDto = {
        comment: parseComment(input.comment),
        date: parseDate(input.date),
        weather: parseWeather(input.weather),
        visibility: parseVisibility(input.visibility)        
    };
    return dto;
}