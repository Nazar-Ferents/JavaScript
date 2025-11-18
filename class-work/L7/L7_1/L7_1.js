

// function User (name,age,status){
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User("John",23,true);
// let user2 = new User("Mike",27,false);
// let user3 = new User("Tony",28,true);
// console.log(user1);


// function User (name,age,status,wife){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
//
// let user1 = new User("John",23,true, {name:'Anna', age:19, status:true});
//
// console.log(user1);

function User (name,age,status,Wifename,Wifeage,Wifestatus,text){
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name:Wifename,age:Wifeage,status:Wifestatus};
    this.greeting = function (){
        console.log((text));
    }
}

let user1 = new User("John",23,true,'Anna',19,true,'hi' );

console.log(user1);


