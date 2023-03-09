"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("db/db");
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const port = 5000;
(0, db_1.connect)();
app.use(express_1.default.json());
app.use('/users', users_1.default);
// app.get('/', (req: Request, res: Response) => {
//   res.send('New Express Server with TypeScript');
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map