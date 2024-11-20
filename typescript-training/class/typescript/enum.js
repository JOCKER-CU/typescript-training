"use strict";
var Role;
(function (Role) {
    Role["USER"] = "User";
    Role["ADMIN"] = "Admin";
    Role["MEMBER"] = "Member";
})(Role || (Role = {}));
let user;
user = { name: 'Han Naung Soe', role: Role.ADMIN };
console.log(user);
