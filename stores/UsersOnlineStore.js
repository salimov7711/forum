export const UsersOnlineStore = defineStore("userStore", () => {
  const usersOnline = ref([]);

  const addUser = (data) => {
    if (data.status) {
      if (checkUser(data.user.id)) {
        return;
      }
      usersOnline.value.push(data.user);
    } else {
      let index = usersOnline.value.findIndex((el) => el.id === data.user.id);
      usersOnline.value.splice(index, 1);
    }
  };
  const checkUser = (data) => {
    return usersOnline.value.some((el) => el.id === data);
  };
  return { usersOnline, addUser };
});
