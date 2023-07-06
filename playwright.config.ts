import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        channel: 'chrome',
        screenshot: 'on',
        video: 'on',
        trace: "on"
    },
    timeout: 180000,
    retries: 0,
    testMatch: ["1Navigation.test.ts"],
    reporter: [["dot"],["allure-playwright"]]

}
export default config;