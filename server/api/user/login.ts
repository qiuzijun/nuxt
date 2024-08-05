import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const user = {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate()
    };
    return {
        data: {
            user,
            token: jwt.sign({ id: user.id, username: user.username }, config.public.token_key as string)
        }
    }

})