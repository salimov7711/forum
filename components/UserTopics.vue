<template>
  <div class="active-topics text-[.8em] mb-[20px] h-[32vw] overflow-scroll">
    <TransitionGroup name="topic-list-forum">
      <div
        class="topic-list-forum"
        v-for="(topic, index) in topics"
        :key="topic"
      >
        <li
          class="row bg-[#f5f5f5] list-none text-[#6c6c6c]"
          :style="index % 2 === 0 ? { background: '#f0f0f0' } : ''"
        >
          <dl class="flex justify-between py-[18px]">
            <dt>
              <div class="list-inner relative ml-[50px]">
                <div
                  class="list-icon absolute left-[-30px] bottom-[2px] px-[15px] py-[15px] bg-[#EEEEEE] border-solid border-[1px] border-black/[0.08]"
                ></div>
                <NuxtLink
                  :to="`/${route.group}/${route.category}/${topic.url}`"
                >
                  <WordHighlighter :query="query">
                    <a class="forumtitle">{{ topic.title }}</a>
                  </WordHighlighter>
                </NuxtLink>

                ><br />

                <time>{{ new Date(topic.created_at).toLocaleString() }}</time>
              </div>
            </dt>
            <div class="description flex mr-[120px]">
              <dd class="hidden mmd:block w-[95px] pl-[15px]"></dd>

              <dd class="hidden mmd:block w-[95px] pl-[10px]"></dd>
            </div>
          </dl>
        </li>
      </div>
    </TransitionGroup>
  </div>
</template>
<script setup>
const route = useRoute().params;
const props = defineProps(["topics", "query"]);
import ModalCreateQuotePostVue from "./ModalCreateQuotePost.vue";
import { useModal } from "vue-final-modal";
import WordHighlighter from "vue-word-highlighter";

const description = "Tropical birds scattered as Drake veered the Jeep ";
const queries = ["birds", "scatt"];
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

.topic-list-forum-item {
  display: inline-block;
  margin-right: 10px;
}
.topic-list-forum-enter-active,
.topic-list-forum-leave-active {
  transition: all 0.4s ease;
}
.topic-list-forum-enter-from,
.topic-list-forum-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
