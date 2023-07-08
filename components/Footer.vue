<template>
  <footer class="footer-section text-[.8em] mt-[15px] text-[#dcdcdc]">
    <div class="container-wrapper px-[10px]">
      <div class="container-flex flex space-between">
        <div class="item-left w-[33%]">
          <h2 class="text-[1.2em] mb-[15px]">About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            recusandae sunt corporis vitae totam eligendi omnis nihil repellat!
            Cumque tempora reiciendis commodi nostrum dolorum atque. Dolore
            error consequatur non amet, cum harum, maxime earum modi
            perspiciatis voluptates minus quo nobis, ducimus illo reprehenderit
            libero accusantium quam veritatis doloribus consequuntur voluptas
            asperiores. Magnam ipsam, ipsa vel distinctio labore dolore,
            quisquam accusantium,
          </p>
        </div>
        <div class="item-middle w-[33%]">
          <h2 class="text-[1.2em] mb-[15px]">You Must Know</h2>
          <ul>
            <li><a href="#">Our Rules</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">BBCode example</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Welcome to phpBB3</a></li>
          </ul>
        </div>
        <div class="item-right w-[33%]">
          <div class="contact-us">
            <h2 class="text-[1.2em] mb-[15px]">Contact Us</h2>
            <p>Administrator e-mail: avera@domain.localhost</p>
            <p>Administrator e-mail: avera@domain.localhost</p>
          </div>

          <div class="social-links">
            <h2 class="text-2xl mb-[25px]">Social links</h2>
            <ul>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-facebook-f"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-twitter"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-instagram"
                /></a>
              </li>
              <li>
                <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-discord"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="footer-nav px-[20px] bg-[#2c2c2c]">
      <div class="privacy-board flex py-[20px] justify-between">
        <div class="board-index">
          <a href="#">Board index</a>
        </div>
        <div class="privacy">
          <ul>
            <li><a href="#">Term</a></li>
            <li><a href="#">Privace</a></li>
            <li><a href="#">Admin</a></li>
          </ul>
        </div>
      </div>
      <div class="powered-by flex justify-between pt-[10px] pb-[40px]">
        <div class="left">
          <a href="#" class="opacity-[.3]"
            >Powered by AVERA Forum Software © phpBB Limited company Theme by
            AVERA</a
          >
        </div>
        <div class="right opacity-[.3]">
          <span>All times are UTC</span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-section {
  background: #323232;
  color: #dcdcdc;
	h2 {
		color: #5C5C5C;
	}

  .container-flex > div {
    color: #dcdcdc;
    padding: 20px;
  }
}
.privacy-board {
  font-size: 1em;
}
.privacy {
  ul {
    li {
      display: inline-block;
      margin-right: 20px;
    }
  }
}

.social-links {
  ul {
    li {
      float: left;
      a {
        height: 30px;
        width: 30px;
        background-color: #2b2b2b;
        display: block;
        line-height: 30px;
        text-align: center;
        margin-right: 5px;
        &:hover {
          background-color: darken(#2b2b2b, 3%);
        }
      }
    }
  }
}
</style>
