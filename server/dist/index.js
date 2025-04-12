"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
// Đọc file JSON và chuyển đổi dữ liệu về dạng Vocabulary
app.get("/read-text-file", (req, res) => {
    const filePath = path.join(__dirname, "data/index.txt");
    // Kiểm tra xem file có tồn tại không
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }
    // Đọc file và gửi nội dung về client
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the file" });
        }
        try {
            // Chuyển đổi dữ liệu từ string thành đối tượng JSON
            const parsedData = JSON.parse(data);
            // Chuyển đổi từng phần tử trong parsedData thành Vocabulary
            const vocabularies = {};
            for (const key in parsedData) {
                if (parsedData.hasOwnProperty(key)) {
                    const vocab = parsedData[key];
                    vocabularies[key] = {
                        vocabulary: vocab.vocabulary,
                        meaning: vocab.meaning,
                        read: vocab.read,
                        classification: vocab.classification,
                    };
                }
            }
            // Gửi dữ liệu dạng JSON về phía client
            res.json({ data: vocabularies });
        }
        catch (parseError) {
            return res.status(500).json({ error: "Error parsing the file content" });
        }
    });
});
app.post("/write-text-file", (req, res) => {
    const filePath = path.join(__dirname, "data/index.txt");
    // Kiểm tra xem file có tồn tại không
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }
    // Đọc file và gửi nội dung về client
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the file" });
        }
        try {
            // Chuyển đổi dữ liệu từ string thành đối tượng JSON
            const parsedData = JSON.parse(data);
            // Chuyển đổi từng phần tử trong parsedData thành Vocabulary
            const vocabularies = {};
            for (const key in parsedData) {
                if (parsedData.hasOwnProperty(key)) {
                    const vocab = parsedData[key];
                    vocabularies[key] = {
                        vocabulary: vocab.vocabulary,
                        meaning: vocab.meaning,
                        read: vocab.read,
                        classification: vocab.classification,
                    };
                }
            }
            const newData = req.body.data; // Dữ liệu gửi từ client (phải là JSON)
            const updatedVocabularies = Object.assign(Object.assign({}, vocabularies), newData);
            // Kiểm tra dữ liệu đầu vào
            if (!updatedVocabularies) {
                return res.status(400).json({ error: "No data provided to write" });
            }
            // Ghi dữ liệu vào file
            fs.writeFile(filePath, JSON.stringify(updatedVocabularies, null, 2), "utf8", (err) => {
                if (err) {
                    return res.status(500).json({ error: "Error writing to the file" });
                }
                res.status(200).json({ data: updatedVocabularies });
            });
        }
        catch (parseError) {
            return res.status(500).json({ error: "Error parsing the file content" });
        }
    });
});
app.put("/update-vocabulary", (req, res) => {
    const filePath = path.join(__dirname, "data/index.txt");
    const newData = req.body.data; // Dữ liệu mới gửi từ client (phải là JSON)
    const key = Object.keys(newData)[0];
    // Kiểm tra xem file có tồn tại không
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }
    // Đọc file và gửi nội dung về client
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the file" });
        }
        try {
            // Chuyển đổi dữ liệu từ string thành đối tượng JSON
            const parsedData = JSON.parse(data);
            // Kiểm tra xem key có tồn tại trong dữ liệu không
            if (!parsedData[key]) {
                return res
                    .status(404)
                    .json({ error: `Vocabulary with key "${key}" not found` });
            }
            // Cập nhật đối tượng trong parsedData
            parsedData[key] = newData[key];
            // Ghi lại dữ liệu đã cập nhật vào file
            fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), "utf8", (err) => {
                if (err) {
                    return res.status(500).json({ error: "Error writing to the file" });
                }
                res.status(200).json({ data: parsedData });
            });
        }
        catch (parseError) {
            return res.status(500).json({ error: "Error parsing the file content" });
        }
    });
});
app.delete("/delete-vocabulary/:key", (req, res) => {
    const removeToKey = (obj, keyToRemove) => {
        const _a = obj, _b = keyToRemove, _ = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]); // Sử dụng destructuring để xóa key
        return rest;
    };
    const filePath = path.join(__dirname, "data/index.txt");
    const key = req.params.key;
    // Kiểm tra xem file có tồn tại không
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }
    // Đọc file và gửi nội dung về client
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the file" });
        }
        try {
            // Chuyển đổi dữ liệu từ string thành đối tượng JSON
            const parsedData = JSON.parse(data);
            // Kiểm tra xem key có tồn tại trong dữ liệu không
            if (!parsedData[key]) {
                return res
                    .status(404)
                    .json({ error: `Vocabulary with key "${key}" not found` });
            }
            // Cập nhật đối tượng trong parsedData
            parsedData[key] = key;
            const removeKey = removeToKey(parsedData, key);
            // Ghi lại dữ liệu đã cập nhật vào file
            fs.writeFile(filePath, JSON.stringify(removeKey, null, 2), "utf8", (err) => {
                if (err) {
                    return res.status(500).json({ error: "Error writing to the file" });
                }
                res.status(200).json({ data: removeKey });
            });
        }
        catch (parseError) {
            return res.status(500).json({ error: "Error parsing the file content" });
        }
    });
});
app.listen(PORT, () => { });
