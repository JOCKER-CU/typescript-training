enum Role {
    USER = 'User',
    ADMIN = 'Admin',
    MEMBER = 'Member'
}

let user: {name: string, role: Role};

user = { name: 'Han Naung Soe', role: Role.ADMIN};
console.log(user)