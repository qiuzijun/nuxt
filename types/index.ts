export interface SentenceItem {
    before: string;
    after: string;
    author: string;
}
export interface Sentence {
    title: string;
    zh: SentenceItem;
    en: SentenceItem;
}
interface Userinfo {
    id: string;
    username: string;
    email: string;
    avatar: string;
    birthdate: string;
}
export interface UserCookie {
    user: Userinfo,
    token: string
}