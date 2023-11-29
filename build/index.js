"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors()); // Use this after the variable declaration
app.use(express_1.default.json());
const PORT = 3000;
app.get("/ping", (_req, res) => {
    console.log("Somone pinged");
    res.send("pong");
});
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
app.use('/api/diaries', (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Puedes restringir esto a tu dominio en producción
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // Preflight request, responde con 200 OK
    if (_req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});
app.use('/api/diaries', diaries_1.default);
