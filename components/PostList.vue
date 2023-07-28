<template>
  <!-- Topic Posts -->

  <div class="post-list" v-for="(post, index) in posts" :key="post.id">
    <ol class="posts mb-5">
      <li class="post-container">
        <div
          class="post-head flex justify-between text-white py-[4px] text-[12px] px-[10px] border-[1px] border-solid border-blue"
        >
          <span class="post-date">{{
            new Date(post.created_at).toLocaleString()
          }}</span>
          <span class="node-controls">#{{ index + 1 }}</span>
        </div>
        <div class="post-details">
          <div
            class="user-info relative bg-[#F2F6F8] pt-[2px] px-[10px] pb-[5px]"
          >
            <div
              class="username-container relative text-[.9em] font-bold text-blue hover:text-black"
            >
              <a href="#" class="user_link">{{ post.user.name }}</a>
              <div
                class="dropdown-user text-[#3c3c3c] hidden text-[.8em] absolute w-[200px] bg-[#e8e8e8]"
              >
                <ul class="dropdown-contents py-[10px]">
                  <li class="user-profile hover:bg-[#F5F5F5] leading-[1.5px]">
                    <nuxt-link
                      :to="`/profile?id=${post.user.id}`"
                      class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                      role="menuitem"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-user"
                        class="mr-[7.5px]"
                      />
                      Профиль</nuxt-link
                    >
                  </li>
                  <li class="user-profile hover:bg-[#F5F5F5] leading-[1.5px]">
                    <nuxt-link
                      :to="`/messages?id=${post.user.id}`"
                      class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                      role="menuitem"
                    >
                      <font-awesome-icon :icon="['far', 'envelope']" />
                      <span class="ml-2">Написать сообщение</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Dropdow user -->

            <div
              v-if="post.user.user_role_id == 1"
              class="user-role text-[0.8em] mb-1 text-red-500"
            >
              Admin
            </div>
            <div
              v-else-if="post.user.user_role_id == 2"
              class="user-role text-[0.8em] mb-1 text-yellow-500"
            >
              Moderator
            </div>
            <div v-else class="user-role text-[0.8em] mb-1">User</div>
            <div
              class="user-avatar h-[80px] w-[100px] shrink-0 inline-flex items-center justify-center overflow-hidden"
            >
              <img
                class="h-full w-full object-cover"
                :src="`${config.public.BASE_URL}/api/get/image?name=${post.user.icon}`"
                alt="image"
                format="webp"
                sizes="sm:500px md:700px"
              />
            </div>
            <dl class="user-info-extra">
              <dt class="text-[0.7em] font-bold inline-block">Адрес:</dt>
              <dd class="text-[0.8em] inline-block ml-2">
                {{ post.user.address }}
              </dd>
              <br />
              <dt class="text-[0.7em] font-bold inline-block">Регистрация:</dt>
              <dd class="text-[0.8em] inline-block ml-2">
                {{ new Date(post.user.created_at).toLocaleDateString() }}
              </dd>
            </dl>
          </div>
          <div class="post-body bg-[#FAFAFA] px-2">
            <div
              class="post-title border-b-[1px] border-solid border-[#c8c8c8] py-1 mb-2"
            >
              <h2 class="text-[.8em] font-bold">{{ post.title }}</h2>
            </div>
            <div class="post-content text-[14px]">
              <blockquote
                v-if="post.reply_to"
                class="quote py-3 px-3 mt-[5px] mx-[20px] mb-[20px] border-[#67e8f9] border-[1px]"
              >
                <div class="quote-container">
                  <div class="quote-icon"></div>
                  <div class="postedby">
                    <font-awesome-icon :icon="['fas', 'quote-left']" />
                    <span class="ml-2">Сообщение от: </span>
                    <a class="font-bold" href="#">{{
                      post.reply_to.user.name
                    }}</a>
                  </div>
                  <div class="message">
                    <p>{{ post.reply_to.content }}</p>
                  </div>
                </div>
              </blockquote>
              <p>{{ post.content }}</p>
            </div>
          </div>
        </div>
        <div
          class="post-foot h-[25px] bg-[#c1c1c1] relative control-answer mb-4 px-2 text-[.8em] py-[4px]"
        >
          <div
            v-if="!isLiked(post)"
            class="thanks-button px-2 text-[.9em] font-medium"
          >
            <button @click="addlike(post, index)" class="hover:text-[#3c699c]">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              <span class="ml-1">Спасибо</span>
            </button>
          </div>

          <div
            class="reply cursor-pointer text-[#3C3C3C] absolute right-[5px] top-1 flex gap-2 font-medium items-center"
          >
            <font-awesome-icon
              :icon="['fas', 'quote-left']"
              class="invisible md:visible"
            />

            <button @click="handlePost(post)">
              <span>Цитировать</span>
            </button>
          </div>
        </div>
        <div
          v-if="post.likes.length"
          class="post-likes bg-[#e1e1e1]/[.3] px-[10px] py-[10px] mt-3"
        >
          <div class="thx-said">
            <h4 class="text-[.8em] font-bold border-b-[1px] border-[#C8C8C8]">
              Спасибо сказали:
            </h4>
          </div>
          <div
            class="users-like text-[.8em] mt-2 inline-block mr-2"
            v-for="(like, index) in post.likes"
            :key="like.id"
          >
            <span class="text-blue mr-1">{{ like.user.name }}</span>
            <span class="text-black"
              >({{ new Date(like.created_at).toLocaleDateString() }}),</span
            >
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
<!-- v-if="!check(post.likes)" -->
<!-- v-if="post.user_id !== auth.user.id" -->
<script setup>
const config = useRuntimeConfig();
const { posts } = defineProps(["posts"]);
const emit = defineEmits(["refresh"]);
const post = ref("");
const likes = ref([]);
const auth = useAuthStore();
import { storeToRefs } from "pinia";
const { user } = storeToRefs(auth);

import ModalCreateQuotePost from "@/components/ModalCreateQuotePost.vue";
import { ModalsContainer, useModal } from "vue-final-modal";
const { open: openModal, close: closeModal } = useModal({
  component: ModalCreateQuotePost,
  attrs: {
    title: "Ответить с цитированием!",
    onConfirm() {
      closeModal();
      emit("refresh");
    },
    post: post,
  },
  slots: {
    default: "<p>UseModal: The content of the modal</p>",
  },
});

const date = new Date();
const addlike = async (post, index) => {
  if (!auth.isLoggedIn) {
    navigateTo("/login");
    return;
  }
  await use$fetch("/api/post/like", {
    method: "POST",
    body: {
      post_id: post.id,
      user_id: user.value.id,
    },
  }).then((res) => {
    posts[index].likes.push(res);
    console.log(res);
  });
};

const isLiked = (post) => {
  return post.likes.some((item) => {
    return item.user_id !== user.id;
  });
};

const handlePost = (data) => {
  if (!auth.isLoggedIn) {
    navigateTo("/login");
    return;
  } else if (data.user.id === auth.user.id) {
    return;
  }
  post.value = data;
  openModal();
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
.post-container {
  .post-head {
    background: #477bb8 url("assets/img/newbtn_middle.png");
    background-repeat: repeat-x;
  }
}

.reply {
  &:hover {
    color: #3c699c;
  }
}
.post-details {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

.post-body {
  color: rgb(51, 51, 51);
}

.quote {
  background-color: lighten(#cffafe, 5%);
  border-radius: 5px;
  position: relative;
  .quote-icon {
    background: transparent url("assets/img/quote-left.png") no-repeat left;
    width: 9px;
    height: 13px;
    left: -10px;
    position: absolute;
  }
}
.username-container {
  &:hover {
    .dropdown-user {
      display: block;
    }
  }
}
</style>
