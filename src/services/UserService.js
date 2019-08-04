export default {
    getUser,
}



// function getUser() {
//     return {
//         name: "Ochoa Hyde",
//         coins: 100,
//         moves: []
//     }
// }


function getUser() {
    return new Promise((resolve, reject) => {
        resolve({
            name: "Ochoa Hyde",
            coins: 100,
            moves: []
        })
    })
}