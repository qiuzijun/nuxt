import texts from '~/common/text/sentence';
import Hutool from '~/utils/tool';
export default defineEventHandler(async (event) => {
    const maxLen = texts.length;
    const hutool = new Hutool();
    const index = hutool.getRandomNumberInRange(0, maxLen);
    return {
        data: texts[index]
    }

})