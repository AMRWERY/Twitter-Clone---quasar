<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="row q-py-lg q-px-md items-end q-gutter-md">
        <div class="col">
          <q-input
            class="tweet"
            bottom-slots
            v-model="text"
            placeholder="What's happening?"
            autogrow
            counter
            maxlength="280"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            unelevated
            rounded
            no-caps
            :disable="!text"
            class="q-mb-lg"
            color="primary"
            label="Tweet"
            @click="addNewTweet"
          />
        </div>
      </div>
      <q-separator class="divider" size="10px" color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slower"
        >
          <q-item v-for="tweet in tweets" :key="tweet.date">
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Janet Smith</strong>
                <span class="text-grey-7">
                  @janet__smith
                  <br class="lt-md" />
                  &bull; {{ tweet.date }}
                </span>
              </q-item-label>
              <q-item-label class="text-body1">{{
                tweet.content
              }}</q-item-label>
              <div class="row tweet-icons justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fa-regular fa-comment"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fa-solid fa-retweet"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fa-regular fa-heart"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fa-solid fa-trash"
                  @click="deleteTweet(tweet)"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>

        <q-separator inset="item" />
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      text: "",
      tweets: [
        {
          content:
            "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
          date: new Date().toLocaleTimeString(),
        },
        {
          content:
            "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
          date: new Date().toLocaleTimeString(),
        },
      ],
    };
  },

  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.text,
        date: Date.now(),
      };
      this.tweets.unshift(newTweet);
      this.text = "";
    },
    deleteTweet(tweet) {
      let dateToDelete = tweet.date;
      let index = this.tweets.findIndex((tweet) => tweet.date === dateToDelete);
      this.tweets.splice(index, 1);
    },
  },
};
</script>

<style lang="sass" scoped>
.tweet
  textarea
    font-size: 19px
    line-height: 6.4 !important

  .divider
    border-top: 0.7px solid
    border-bottom: 0.7px solid
    border-color: #FFFFFF

    .tweet-content
      white-space: pre-line
  .tweet-icons
    margin-left: -5px
</style>
