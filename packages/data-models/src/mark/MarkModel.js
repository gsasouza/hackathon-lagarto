var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        hidden: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    collection: 'user',
});
Schema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified('password')) {
            try {
                this.password = yield this.encryptPassword(this.password);
            }
            catch (e) {
                next(e);
            }
        }
        return next();
    });
});
Schema.methods = {
    authenticate(plainText) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bcrypt.compare(plainText, this.password);
            }
            catch (err) {
                return false;
            }
        });
    },
    encryptPassword(password) {
        return bcrypt.hash(password, 8);
    },
};
export default mongoose.model('User', Schema);
//# sourceMappingURL=MarkModel.js.map