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
    username: string;
}
export interface UserCookie {
    userinfo: Userinfo,
    token: string
}