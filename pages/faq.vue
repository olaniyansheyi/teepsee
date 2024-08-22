<script setup>
import cancel from "~/assets/cancel.png";
import plus from "~/assets/plus.png";

const faqs = ref([
  {
    question: "Does Teepsee offer delivery across all states in Nigeria? ",
    answer:
      "The techniques we use to recover our clients’ accounts vary widely from case to case. In the event of a password recovery we will walk our clients through extracting an encrypted private key backup and building a comprehensive list of possible password guesses.",
  },
  {
    question: "Can I trust you?",
    answer:
      "We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. .",
  },
  {
    question: "Do i need to Sign up to place an order on Teepsee?",
    answer:
      "We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. .",
  },
  {
    question: "How does Teepsee’s gift order work?",
    answer:
      "We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. .",
  },
  {
    question: "Does Teepsee offer wholesale delivery?",
    answer:
      "We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. .",
  },
]);

const activeIndex = ref(null);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div
    class="py-4 px-6 md:px-10 h-[370px] bg-faqImg bg-cover bg-center bg-no-repeat relative"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative">
      <HeroHeader />
    </div>

    <div
      class="w-full h-full justify-center items-center flex-col text-white tracking-wider text-center relative flex gap-y-4"
    >
      <h1 class="font-semibold text-2xl">Frequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper sit
        facilisi turpis nullam orci id at.
      </p>
    </div>
  </div>
  <div class="my-10 mx-auto bg-white rounded-xl w-[90%] sm:w-[75%] p-6">
    <div class="w-[90%] flex flex-col gap-y-5 mx-auto cursor-pointer">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        @click="toggleFAQ(index)"
        class="flex justify-center items-center border-b-2 border-gray-500 py-3 flex-wrap"
      >
        <div
          class="flex justify-between items-center w-full text-gray-600 font-semibold text-2xl"
        >
          <h1 class="text-secondary font-semibold text-lg">
            {{ faq.question }}
          </h1>
          <img
            class="w-[20px] cursor-pointer"
            :src="activeIndex === index ? cancel : plus"
            alt=""
          />
        </div>
        <div v-if="activeIndex === index" class="text-gray-600 w-full py-5">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
