<template>
  <div class="active-topics text-[.8em] mb-[20px]">
    <ul class="header-topic bg-[#477BB8] text-white">
      <li class="row">
        <dl class="flex justify-between py-[15px]">
          <dt>
            <div class="list-inner">Активные темы</div>
          </dt>
          <div class="description flex mr-[120px]">
            <dd class="topics hidden mmd:block w-[95px]">Ответы</dd>
            <dd class="hidden mmd:block w-[95px]">Просмотры</dd>
            <dd class="last-post hidden xsm:block w-[150px]">Последний пост</dd>
          </div>
        </dl>
      </li>
    </ul>
    <div
      class="topic-list-forum"
      v-for="(topic, index) in topics"
      :key="topic.id"
    >
      <li class="row bg-[#fafafa] list-none text-[#6c6c6c]">
        <dl class="flex justify-between py-[18px]">
          <dt>
            <div class="list-inner relative ml-[50px]">
              <div
                class="list-icon absolute left-[-30px] bottom-[2px] px-[15px] py-[15px] bg-[#EEEEEE] border-solid border-[1px] border-black/[0.08]"
              ></div>
              <NuxtLink
                :to="`/${route.group}/${route.category}/${topic.url}`"
                class="forumtitle"
                >{{ topic.title }}</NuxtLink
              ><br />
              автор: <a href="#">{{ topic.user.name }}</a> >>
              <time>{{ new Date(topic.created_at).toLocaleString() }}</time>
            </div>
          </dt>
          <div class="description flex mr-[120px]">
            <dd class="hidden mmd:block w-[95px] pl-[15px]">
              <!-- ответы -->
              {{ topic.posts_count }}
            </dd>

            <!-- кол-во просмотров -->
            <dd class="hidden mmd:block w-[95px] pl-[10px]"></dd>

            <!-- Последний пост кем и когда -->
            <dd class="last-post hidden xsm:block w-[150px]">
              <a href="#" class="lastsubject" v-if="topic.last_post !== null">
                <span>автор: </span
                ><font-awesome-icon
                  class="ml-1 mr-2"
                  :icon="['fas', 'arrow-right']"
                />{{ topic.last_post.user.name }}
                <br />
              </a>

              <div v-else class="text-[red]">НЕ отвечено!</div>

              <a v-if="topic.last_post != null">{{
                new Date(topic.last_post.created_at).toLocaleString()
              }}</a>
            </dd>
          </div>
        </dl>
      </li>
    </div>
  </div>
</template>

<script setup>
const route = useRoute().params;
const props = defineProps(["topics"]);
import ModalCreateQuotePostVue from "./ModalCreateQuotePost.vue";
import { useModal } from "vue-final-modal";
console.log(route);
</script>

<style lang="scss" scoped>
a {
  color: #3c699c;
}
.list-inner {
  padding-left: 20px;
  padding-right: 50px;
  box-sizing: border-box;
}
.header-topic {
  background: #477bb8 url("assets/img/newbtn_middle.png");
  background-repeat: repeat-x;
  a {
    color: #3c699c;
  }

  .row {
    &:hover {
      transition: 0.02s ease all;
    }
  }
}

.forums {
  .list-inner {
    margin-left: 50px;
  }
}
.topic-list-forum {
  .row {
    transition: background-color 0.3s ease;
    &:hover {
      background-color: lighten($color: #000000, $amount: 96%);
    }
  }
}
.list-icon {
  background-image: url("assets/img/topic_read.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
