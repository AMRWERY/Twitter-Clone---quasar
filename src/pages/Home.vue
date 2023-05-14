<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-height full-width">
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
                <img
                  src="https://justfields.com/storage/projects/7M5rV059/photo_2023-05-14_16-32-00.jpg"
                />
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
                <img
                  src="https://justfields.com/storage/projects/7M5rV059/photo_2023-05-14_16-32-00.jpg"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Janet Smith</strong>
                <span class="text-grey-7">
                  @janet__smith
                  <br class="lt-md" />
                  &bull; {{ new Date(tweet.date).toLocaleString() }}
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
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fa-solid fa-arrow-up-from-bracket"
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
import db from "../boot/firebase";
import {
  getDocs,
  collection,
  query,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default {
  name: "Home",

  data() {
    return {
      text: "",
      tweets: [],
    };
  },

  methods: {
    async addNewTweet() {
      const colRef = collection(db, "tweets");
      const dataObj = {
        content: this.text,
        date: Date.now(),
      };
      const docRef = await addDoc(colRef, dataObj);
      console.log("Document was created with ID:", docRef.id);
      const newTweet = {
        id: docRef.id,
        ...dataObj,
      };
      this.tweets.unshift(newTweet);
      this.text = "";
    },
    async deleteTweet(tweet) {
      await deleteDoc(doc(db, "tweets", tweet.id));

      const index = this.tweets.findIndex((t) => t.id === tweet.id);
      if (index !== -1) {
        this.tweets.splice(index, 1);
      }
    },
    async getData() {
      const querySnap = await getDocs(query(collection(db, "tweets")));

      querySnap.forEach((doc) => {
        let tweet = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        console.log(doc.id);
        this.tweets.push(tweet);
      });
    },
  },

  mounted() {
    this.getData();
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
