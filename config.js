const configKeys = ['domain', 'token_key']
const publicConfig = {}

for (const key of configKeys) {
    publicConfig[key] = process.env[`NUXT_${key.toUpperCase()}`]
}

export default publicConfig;