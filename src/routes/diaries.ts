import express from "express";
import * as diaryService from "../services/diaryService";
import { toCreateDiaryDto } from "../utils";

const router = express.Router();

router.get("/diaries", (_req, res) => {
    const diaryArray = diaryService.findAll();
    res.send(diaryArray);
});

router.get("/diaries-without-sensitive-information", (_req, res) => {
    const entryArray = diaryService.getEntriesWithoutSensitiveInformation();
    res.send(entryArray);
});

router.get("/diary/:id", (req, res) => {
    const foundDiary = diaryService.findOne(+req.params.id);
    if (foundDiary) {
        res.send(foundDiary);
    } else {
        res.sendStatus(404);
    }    
});

router.post("/diary", (req, res) => {
    try {
        const createDiaryDto = toCreateDiaryDto(req.body);
        const addedDiaryEntry = diaryService.createDiary(createDiaryDto);
        res.send(addedDiaryEntry);
    } catch (ex: any) {
        res.status(400).send(ex.message);
    }
});

export default router;