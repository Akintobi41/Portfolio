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
        // console.log(res)
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
// export const data = await client.getEntries({
//     content_type: 'project',
// });


// let numTimes = 0

// export async function apiCall(endpoint) {
//     ++numTimes
//     try {
//         const data = await fetch(endpoint)
//         return data
//     } catch (e) {
//         if (numTimes < 4) {
//             await apiCall()
//             return;
//         }

//         console.log(e)

//     }
// }


