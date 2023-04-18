import users from "@/data/users";

export const searchUser = (phone) => {
    users.forEach((user) => {
        if (user.phone === phone) return user;
    });
    return false;
};
