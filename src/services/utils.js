import users from "@/data/usersdata";

export const searchUser = (phone) => {
    let userFound = false;
    users.forEach((user) => {
        if (user.phone === phone) {
            userFound = user;
        }
    });
    return userFound;
};
