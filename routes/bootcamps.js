const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ msg: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
    res.status(200).json({ msg: `Show bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
    res.status(200).json({ msg: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ msg: `Update bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
