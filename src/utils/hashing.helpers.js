import { compare, hash, genSalt } from 'bcrypt';

export class HashingHelpers {
    static generatePassword = async (password) => {
        const salt = await genSalt(10);
        return hash(password, salt);
    };

    static comparePassword = async (password, hashedPassword) => {
        return compare(password, hashedPassword);
    };
}
