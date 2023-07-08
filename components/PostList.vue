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
          <span class="node-controls">#</span>
        </div>
        <div class="post-details">
          <div class="user-info bg-[#F2F6F8] pt-[2px] px-[10px] pb-[5px]">
            <div class="username-container text-[.9em] font-bold text-blue">
              <a href="#">{{ post.user.name }}</a>
            </div>
            <div class="user-role text-[0.8em] mb-1">Admin</div>
            <div class="user-role text-[0.8em] mb-1">User</div>
            <div class="user-avatar">
              <img
                class="max-w-[90px]"
                src="/img/default.png"
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
        <div class="post-foot bg-[#c1c1c1]">
          <div
            class="control-answer flex justify-between px-2 items-center text-[.8em] py-[4px]"
          >
            <div class="thanks px-2 text-[.9em] font-medium">
              <a href="#" class="hover:text-[#3c699c]">
                <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                <span class="ml-1">Спасибо</span>
              </a>
            </div>
            <div
              @click="openModal"
              class="reply cursor-pointer text-[#3C3C3C] flex flex-row-reverse gap-2 font-medium items-center"
            >
              <span>Ответить c цитированием</span>
              <font-awesome-icon :icon="['fas', 'quote-left']" />
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
const { posts } = defineProps(["posts"]);
import ModalCreateQuotePost from "@/components/ModalCreateQuotePost.vue";
import { ModalsContainer, useModal } from "vue-final-modal";
const { open: openModal, close: closeModal } = useModal({
  component: ModalCreateQuotePost,
  attrs: {
    title: "Ответить с цитированием!",
    onConfirm() {
      closeModal();
    },
  },
  slots: {
    default: "<p>UseModal: The content of the modal</p>",
  },
});
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
</style>
