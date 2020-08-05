const users = [{ id: "1", email: "123@gmail.com", message: [] }];
const messages = [
  { id: "1", body: "what", createdAt: "2020-08-05T07:12:23.542Z", user: "1" },
];
let USER_ID = 1;
let MSG_ID = 1;

module.exports = {
  users: () => users,
  user: ({ id }) => {
    console.log(id);
    return users.find((user) => user.id === id);
  },
  messages: () =>
    messages.map((message) => ({
      ...message,
      user: users.find((u) => u.id === message.user),
    })),
  createUser: ({ email, name }) => {
    USER_ID++;
    const newUser = { email: email, name: name, id: `${USER_ID}` };
    users.push(newUser);
    return newUser;
  },
  createMessage: ({ messageInput: { body, userId } }) => {
    MSG_ID++;
    const newMessage = {
      id: `${MSG_ID}`,
      body,
      user: `${userId}`,
      createdAt: new Date().toISOString(),
    };
    messages.push(newMessage);
    return { ...newMessage, user: users.find((u) => u.id === newMessage.user) };
  },
};
