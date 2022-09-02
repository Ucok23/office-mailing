import {Account} from "./account";

interface Mail {
    from: Account;
    to: Account;
    date: string;
    subject: string;
    content: string;
}

export type {Mail}