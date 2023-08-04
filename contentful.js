var client = contentful.createClient({
    space: '6hoi4gahctlw',
    accessToken: 'wFlBiUTBviloGmCvJaViFjJozDrUCjxb0svrT9gQHc0',
});
let numTimes = 0;
export async function data() {
    ++numTimes
    try {
        const res = await client.getEntries({
            content_type: 'project',
        })
        if (!res) throw Error()
        return res.items
    } catch (e) {
        console.log(e)
        if (numTimes < 4) {
            await data();
            return;
        }
    }
}
