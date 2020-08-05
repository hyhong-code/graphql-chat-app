const users = [{ id: 1, email: "123@gmail.com" }];
let ID = 1;

module.exports = {
  users: () => users,
  createUser: (args) => {
    ID++;
    const newUser = { email: args.email, name: args.name, id: ID };
    users.push(newUser);
    return newUser;
  },
};
