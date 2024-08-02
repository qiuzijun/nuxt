class Hutool {
    constructor() { }

    /**
     * 生成随机数
     */
    getRandomNumberInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
export default Hutool;