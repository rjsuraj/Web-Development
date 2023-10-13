const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                userName: "suraj",
                email: "rjsurajmandal@gmail.com",
                password: 1234
            })
        }
        else {
            reject('ERROR something went wrong')
        }
    }, 2000)
})

promiseOne
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error)
    })

// -------------------------------------------

// const response = fetch("https://jsonplaceholder.typicode.com/users")

// response
//     .then(function (response) {
//         // let data = response.json()  //response.json also takes time
//         // console.log(data)
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch(function (error) {
//         console.log("Error is : ", error);
//     })


// async function getUsersData(){
//     try {
//         const response = await fetch('https://api.github.com/users/rjsuraj')
//         const data = await response.json()
//         console.log(`followers: ${data.followers} \nfollowing: ${data.following}`)
//     }
//     catch (error) {
//         console.log("Error is :",error)
//     }
// }

// getUsersData()
