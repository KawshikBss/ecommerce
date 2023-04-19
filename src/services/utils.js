import users from "@/data/users";

export const searchUser = (phone) => {
    let userFound = false;
    users.forEach((user) => {
        if (user.phone === phone) {
            userFound = user;
        }
    });
    return userFound;
};
