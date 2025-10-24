


let users = [
    {
        id:1,
        name:"Johan",
        age:25
    }, {
        id:2,
        name:"Carl",
        age:20
    }, {
        id:3,
        name:"Kite",
        age:27
    }
]

let foobar = (item) => {

      for (let user of item) {
          document.write(`<div>
                 ${user.name}
                 ${user.id}
                 ${user.age}


             </div>`)

      }

}

foobar(users)