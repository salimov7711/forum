<template>
  <div class="section-main-category text-[.8em] mb-[20px]">
    <ul
      class="header-topic border-[1px] border-solid border-[#5A7F97] text-white"
    >
      <li class="row">
        <dl class="flex justify-between py-[14px]">
          <dt>
            <div class="list-inner">{{ data.group.title }}</div>
          </dt>
          <div class="description flex mr-10">
            <dd class="topics hidden mmd:block w-[95px]">Темы</dd>
            <dd class="hidden mmd:block w-[95px]">Посты</dd>
            <dd class="last-post hidden xsm:block w-[150px]">Последняя тема</dd>
          </div>
        </dl>
      </li>
    </ul>
    <div v-if="!!data.categories.length">
      <div
        class="topic-list-forum"
        v-for="(category, index) in data.categories"
        :key="index"
      >
        <li class="row bg-[#fafafa] list-none text-[#6c6c6c]">
          <dl class="flex justify-between py-[18px]">
            <dt>
              <div class="list-inner relative ml-[50px]">
                <div
                  class="list-icon absolute left-[-30px] bottom-[2px] px-[15px] py-[15px] bg-[#EEEEEE] border-solid border-[1px] border-black/[0.08]"
                ></div>

                <NuxtLink
                  :to="`/${group}/${category.url}?page=1`"
                  class="forumtitle"
                  >{{ category.title }}</NuxtLink
                ><br />{{ category.desc }}
              </div>
            </dt>
            <div
              v-if="category.last_topic"
              class="description flex w-[30vw] mr-10"
            >
              <dd class="hidden mmd:block w-[95px] mmd:pl-[12px]">
                {{ category.topics_count }}
              </dd>
              <dd class="hidden mmd:block w-[95px] mmd:pl-[10px]">
                {{ category.posts_qty }}
              </dd>
              <dd class="last-post hidden xsm:block w-[150px]">
                <a href="#" class="lastsubject clip">{{
                  category.last_topic.title
                }}</a>
                автор: <a href="#">{{ category.last_topic.user.name }}</a>
                <br />
                <a href="#">{{
                  new Date(category.last_topic.created_at).toLocaleString()
                }}</a>
              </dd>
            </div>
          </dl>
        </li>
      </div>
    </div>
    <div v-else>
      <h3 class="text-red-500">Здесь пока пусто!</h3>
    </div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
const { group } = useRoute().params;
</script>

<style lang="scss" scoped>
.list-inner {
  padding-left: 20px;
  padding-right: 50px;
  box-sizing: border-box;
}

a {
  color: #3c699c;
}
.header-topic {
  background: #477bb8 url("assets/img/newbtn_middle.png");
  background-repeat: repeat-x;

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
  background-image: url("assets/img/forum_read.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
