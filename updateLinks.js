import fetch from "node-fetch"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let data = require("./src/info.json")
const fs = require('fs');



const main = async () => {

    const USERNAME = process.env.BUILD_LINKS_USERNAME;
    const PASSWORD = process.env.BUILD_LINKS_PASSWORD
    const URL = process.env.BUILD_LINKS_URL
    try {
        const re = await fetch(URL, {
            method: "GET", headers: {
                'Authorization': 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`, 'binary').toString('base64')
            }
        })

        const links = await re.json()
        console.log(links)

        data.links = links;

        await fs.promises.writeFile('./src/data.json', JSON.stringify(data), 'utf-8')
        console.log("Updated data.json")
    } catch (err) {
        if (err.code === 'ERR_INVALID_URL') {
            console.log("ERR_INVALID_URL");
            process.exit(0)
        }
        console.log(err)
        process.exit(0)
    }

    process.exit(0)
}

main();