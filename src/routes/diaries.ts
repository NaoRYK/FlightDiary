import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils/utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/comments", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);

  return diary != null ? res.send(diary) : res.sendStatus(404);
});

export default router;
