<template>
  <div class="grid grid-cols-[300px_minmax(40vw,_1fr)]">
    <AsideMessages></AsideMessages>
    <div class="p-4">
      <div
        class="messages-field bg-white w-[40vw] mx-auto h-[30vw] py-4 overflow-scroll"
      >
        <ul class="mt-3" :key="message">
          <li
            class="mt-4 flex"
            :class="
              message.user_id === auth.user.id
                ? 'justify-end mr-4 '
                : 'justify-start ml-4'
            "
            v-for="(message, index) in messages"
          >
            <span
              :class="
                message.user_id === auth.user.id
                  ? 'rounded-t-lg rounded-bl-lg'
                  : 'rounded-t-lg rounded-br-lg bg-yellow-400'
              "
              class="user-resp bg-[#8dd9d5] text-black text-[.8em] mt-4 px-2"
              >{{ message.user_message }}</span
            >
          </li>
        </ul>
      </div>
      <form @submit.prevent="submit" class="w-[40vw] mx-auto mt-4">
        <input
          v-model="message"
          type="text"
          placeholder="write message"
          class="w-[320px] border-1 px-3 py-1 ml-2"
        />
        <button
          type="submit"
          class="bg-[#477bb8] text-[#f5f5f5] px-[1em] h-[1.9em] ml-1"
        >
          отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore();

import Pusher from "pusher-js";
const messages = ref([]);
const message = ref("");
const channel_name = ref("channel_message");
import { Notivue, Notifications } from "notivue";
import { usePush } from "notivue";
console.log(useRoute().query);
const submit = async () => {
  if (message.value === "") return;
  // messages.value.push({ user_message: message.value, user_id: auth.user.id });
  await useApiFetch("/api/chat/message", {
    method: "POST",
    body: {
      user_id: auth.user.id,
      user_message: message.value,
      channel_name: channel_name.value,
    },
  });

  message.value = "";
  console.log(messages);
};
onMounted(() => {
  Pusher.logToConsole = true;

  const pusher = new Pusher("08ef1eaceb678d0ebc8f", {
    cluster: "mt1",
  });

  const channel = pusher.subscribe(`channel_message_${auth.user.id}`);
  channel.bind("message.event", (data) => {
		console.log(data);
  });
});
</script>

<style lang="scss" scoped></style>
