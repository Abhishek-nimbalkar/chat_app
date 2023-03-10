"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../../models/user"));
const jwtTokenValidation_1 = require("../../utils/jwtTokenValidation");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find();
    //   console.log(jwtKey);
    res.send(users);
}));
router.post("/signUp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailId, userName, phone, password } = req.body;
        const newUserData = new user_1.default({
            emailId: emailId,
            userName: userName,
            phone: phone,
            password: password,
        });
        const userExist = yield user_1.default.findOne({ emailId: emailId });
        // console.log(emailId);
        if (userExist)
            throw new Error("User Alredy Existed");
        let newUser = user_1.default.create(newUserData);
        //   res.send(newUser);
        res.status(201).send("New User Added");
    }
    catch (err) {
        res.status(505).send({ Error: true, message: err === null || err === void 0 ? void 0 : err.message });
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { emailId, password } = req.body;
    const user = {
        userId: emailId
    };
    try {
        if (!user_1.default.findOne({ emailId: emailId }))
            throw new Error("User Not Found Try to Login ");
        const token = (0, jwtTokenValidation_1.generateJwt)(user);
        res.json({ token });
    }
    catch (err) {
        res.status(500).send({ error: true, message: err === null || err === void 0 ? void 0 : err.message } || "Problem in Login");
    }
}));
exports.default = router;
//# sourceMappingURL=index.js.map