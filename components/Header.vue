<template>
  <div>
    <header>
      <div
        class="top-nav bg-[#3c3c3c] sm-flex sm:justify-between px-3 py-3 text-[#DDD] text-[13px]"
      >
        <ul
          class="left-links flex items-center justify-between"
          v-click-outside="closeModal"
        >
          <!-- Desktop burger dropdown -->
          <li
            @click="desctopBurger = !desctopBurger"
            class="desctop-burger hidden md:flex items-center ml-3 sm:ml-0 relative hover:text-yellow-200"
          >
            <a href="#" class="menu-bar flex items-center">
              <svg
                class="h-5 w-5 fill-current inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!desctopBurger"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
                <path
                  v-if="desctopBurger"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              </svg>

              <span class="sm:pl-2 font-bold hidden sm:inline"> Форум</span>
            </a>

            <div
              class="dropdown text-[#3c3c3c] absolute left-0 p-0 top-[23px] z-10"
              :class="desctopBurger ? 'block' : 'hidden'"
            >
              <ul class="dropdown-contents py-[10px]">
                <li class="ununswered hover:bg-[#F5F5F5] leading-[1.5px]">
                  <a
                    href="#"
                    class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                    role="menuitem"
                  >
                    <font-awesome-icon
                      icon="fa-regular fa-file"
                      class="mr-[7.5px]"
                    />
                    Не отвеченные темы</a
                  >
                </li>
                <li class="active-topics hover:bg-[#F5F5F5] leading-[1.5px]">
                  <a
                    href="#"
                    class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-fire"
                      class="mr-[7.5px]"
                    />
                    Активные темы</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <!-- Mobile-burger -->
          <li
            class="mobile-burger md:hidden items-center ml-3 sm:ml-0 relative list-none hover:text-yellow-200"
          >
            <a
              href="#"
              class="menu-bar flex items-center"
              @click="mobileBurger = !mobileBurger"
            >
              <svg
                class="h-5 w-5 fill-current inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!mobileBurger"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
                <path
                  v-if="mobileBurger"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              </svg>
              <span class="sm:pl-2 font-bold hidden sm:inline"> Форум</span>
            </a>

            <div
              class="dropdown text-[#3c3c3c] absolute left-0 p-0 top-[23px] z-10"
              :class="mobileBurger ? 'block' : 'hidden'"
            >
              <ul class="dropdown-contents py-[10px]">
                <li class="ununswered hover:bg-[#F5F5F5] leading-[1.5em]">
                  <a
                    href="#"
                    class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                    role="menuitem"
                  >
                    <font-awesome-icon
                      icon="fa-regular fa-file"
                      class="mr-[7.5px]"
                    />
                    Не отвеченные темы</a
                  >
                </li>
                <li class="active-topics hover:bg-[#F5F5F5] leading-[1.5em]">
                  <a
                    href="#"
                    class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-fire"
                      class="mr-[7.5px]"
                    />
                    Активные темы mobile</a
                  >
                </li>

                <li
                  class="separator-menu border-solid border-[1px] border-black/[.12] my-1 mx-[20px]"
                ></li>
                <li class="hover:bg-[#F5F5F5] leading-[1rem]">
                  <a
                    href="#"
                    class="py-[5px] pl-[20px] pr-[30px] inline-block w-full"
                    role="menuitem"
                  >
                    FAQ</a
                  >
                </li>
                <li class="hover:bg-[#F5F5F5] leading-[1rem]">
                  <a
                    href="#"
                    class="py-[5px] pl-[20px] pr-[30px] inline-block w-full"
                    role="menuitem"
                  >
                    Drop Down</a
                  >
                </li>
                <ul class="menu-list text-[1em]">
                  <li class="hover:bg-[#F5F5F5] pl-[18px]">
                    <a class="py-[7px] pl-[20px] inline-block" href="#"
                      >Lorem ipsum</a
                    >
                  </li>
                  <li class="hover:bg-[#F5F5F5] pl-[18px]">
                    <a class="py-[7px] pl-[20px] inline-block" href="#"
                      >Welcome to site</a
                    >
                  </li>
                  <li class="hover:bg-[#F5F5F5] pl-[18px]">
                    <a class="py-[7px] pl-[20px] inline-block" href="#"
                      >Frequently asked questions</a
                    >
                  </li>
                  <li class="hover:bg-[#F5F5F5] pl-[18px]">
                    <a class="py-[7px] pl-[20px] inline-block" href="#"
                      >BB4 code example</a
                    >
                  </li>
                </ul>
              </ul>
            </div>
          </li>
          <!-- <clip-loader
            v-if="false"
            :loading="loading"
            :color="`white`"
            :size="sizeSpinner"
          ></clip-loader> -->
          <!-- user button -->

          <div class="flex">
            <li
              v-if="auth.isLoggedIn"
              class="user-menu relative mr-3 sm:mr-0 cursor-pointer hover:text-yellow-200"
            >
              <span class="sm:pl-1 font-bold sm:inline">{{
                auth.user.name
              }}</span>
              <div
                class="dropdown-user text-[#3c3c3c] hidden absolute left-[-200px] right-0 z-10"
              >
                <ul class="dropdown-contents py-[10px]">
                  <li class="user-profile hover:bg-[#F5F5F5] leading-[1.5px]">
                    <nuxt-link
                      :to="`/profile?id=${auth.user.id}`"
                      class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                      role="menuitem"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-user"
                        class="mr-[7.5px]"
                      />
                      Кабинет</nuxt-link
                    >
                  </li>
                  <li class="user-profile hover:bg-[#F5F5F5] leading-[1.5px]">
                    <nuxt-link
                      to="/messages"
                      class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                      role="menuitem"
                    >
                      <font-awesome-icon
                        :icon="['far', 'envelope']"
                        class="mr-[7.5px]"
                      />
                      Сообщения</nuxt-link
                    >
                  </li>

                  <li
                    class="exit hover:bg-[#F5F5F5] leading-[1.5px]"
                    @click="auth.logout"
                  >
                    <a
                      href="#"
                      class="py-[7.5px] pl-[20px] pr-[30px] inline-block w-full"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-person-walking-arrow-right"
                        class="mr-[7.5px]"
                      />
                      Выйти</a
                    >
                  </li>
                </ul>
              </div>
            </li>

            <!-- Вход -->
            <li v-else class="right-links mr-3 sm:mr-0 hover:text-yellow-200">
              <NuxtLink to="/login">
                <font-awesome-icon
                  icon="fa-solid fa-right-to-bracket"
                  class="text-[16px] sm:text-[14px]"
                />
                <span class="sm:pl-2 font-bold hidden sm:inline">Вход</span>
              </NuxtLink>
            </li>
          </div>
        </ul>
      </div>

      <div class="bottom-nav bg-[#f5f5f5] text-[15px]" role="banner">
        <div
          class="nav-wrapper px-[30px] flex justify-between border-b-2 border-black/[.1]"
        >
          <div class="left-items flex items-center">
            <div
              class="site-logo h-full flex items-center md:mr-[40px] py-[25px] font-bold text-xl"
            >
              <nuxt-link to="/"> Форум </nuxt-link>
            </div>

            <ul class="site-menu h-full hidden md:flex">
              <li class="flex items-center relative mr-10">
                <a href="#">FAQ</a>
              </li>
              <li class="flex items-center relative">
                <a href="#">Drop Down</a>
                <ul
                  class="dropdown-menu z-10 absolute py-2 bg-[#fff] shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                >
                  <li class="hover:bg-[#F5F5F5]">
                    <a class="py-[7.5px] px-[20px]" href="#">Lorem ipsum</a>
                  </li>
                  <li class="hover:bg-[#F5F5F5]">
                    <a class="py-[7.5px] px-[20px]" href="#">Welcome to site</a>
                  </li>
                  <li class="hover:bg-[#F5F5F5]">
                    <a class="py-[7.5px] px-[20px]" href="#"
                      >Frequently asked questions</a
                    >
                  </li>
                  <li class="hover:bg-[#F5F5F5]">
                    <a class="py-[7.5px] px-[20px]" href="#"
                      >BB4 code example</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="site-search py-[25px] whitespace-nowrap">
            <form action="search" method="get">
              <fieldset class="text-[1em] border-[1px] border-[#]">
                <input
                  type="search"
                  class="bg-transparent pl-[20px] text-[#4c4c4c] px-4 py-2"
                  placeholder="Поиск"
                />
                <button
                  type="submit"
                  title="search"
                  class="text-[#4c4c4c] border-left-[1px] w-[40px] h-[40px] min-w-[40px] float-right"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass"
                    class="text-[14px]"
                  />
                </button>
              </fieldset>
            </form>
          </div>
          <ClientOnly
            ><Notivue v-slot="item">
              <MyNotification :item="item as NotivueSlot<CustomProps>" />
            </Notivue>
          </ClientOnly>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
const auth = useAuthStore();
const { isLoggedIn } = storeToRefs(auth);
import { usePush } from "notivue";
import { Notivue, type NotivueSlot } from "notivue";
import MyNotification, {
  type CustomProps,
} from "@/components/MyNotification.vue";
const push = usePush();
import Pusher from "pusher-js";
import { log } from "console";
const desctopBurger = ref(false);

const mobileBurger = ref(false);

function closeModal() {
  if (desctopBurger) {
    desctopBurger.value = false;
    mobileBurger.value = false;
  }
}

const userStore = UsersOnlineStore();
const pusher = new Pusher("08ef1eaceb678d0ebc8f", {
  cluster: "mt1",
});

const channel2 = pusher.subscribe(`online_users`);
channel2.bind("showUserStatus.event", (data) => {
  userStore.addUser(data);
});
Pusher.logToConsole = true;

const config = useRuntimeConfig();

watch(isLoggedIn, (value) => {
  if (value) {
    const channel = pusher.subscribe(`channel_message_${auth.user.id}`);
    channel.bind("message.event", (data) => {
      console.log(data.user.icon);
      push.success<CustomProps>({
        title: "У вас новое сообщение",
        message: "This is a custom notification",

        props: {
          avatarUrl: `${config.public.BASE_URL}/api/get/image?name=${data.user.icon}`,
          postUrl: "https://social.com/my-post",
          routeData: data.topic,
        },
      });
    });
  }

  console.log("isLoggedIn ref changed, do something!" + value);
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.dropdown-contents {
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  // padding: 10px 0;
  a {
    white-space: nowrap;
  }
  li {
    transition: 0.2s ease;
  }
}

.site-menu {
  :first-child::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.5px;
    background-color: teal;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s linear;
  }

  li:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
  :hover {
    .dropdown-menu {
      display: block;
    }
  }
}

.dropdown-menu {
  display: none;
  // display: block;
  min-width: 100%;
  top: 92px;

  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;

  li {
    white-space: nowrap;
    line-height: 27px;
    display: list-item;
    font-size: 13px;

    a {
      display: inline-block;
      width: 100%;
      line-height: 1.5rem;
    }
  }
}

.user-menu {
  &:hover {
    .dropdown-user {
      display: block;
      right: 0;
      left: -200px;
    }
  }
}
</style>
