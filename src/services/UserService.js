export default {
    getUser,
    signup,
    addMove,
    saveToSrorage,
    loadFromStorage
}


function getUser() {
       const user =  loadFromStorage('user')
       if(user) {
          return user
       }
       else{
           return null
       }
}

function signup(name) {
    let newUser = {
        name: name,
        coins: 100,
        moves: []
    }
    saveToSrorage('user' , newUser)
    return newUser

}

function addMove(contact, amount) {
    return new Promise((resolve, reject) => {
        resolve({
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount: amount
        })
    })
}


function saveToSrorage(key, value){
    var strValue = JSON.stringify(value)
    localStorage.setItem(key, strValue)
}

function loadFromStorage(key){
    return JSON.parse(localStorage.getItem(key))
}