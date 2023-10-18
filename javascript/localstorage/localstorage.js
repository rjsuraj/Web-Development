const obj = {
    name: "Dillion",
    color_scheme: "dark"
}


const stringifiedObj = JSON.stringify(obj)

localStorage.setItem(
    "userInfo",
    stringifiedObj
)

let userInfoParsed = localStorage.getItem('userInfo')

console.log(JSON.parse(userInfoParsed));

console.log(localStorage);