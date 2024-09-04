<script setup>
import starActive from "~/assets/starActive.png";
import starGray from "~/assets/starGray.png";
definePageMeta({
  layout: "custom",
});

const reviews = ref([]);
const isLoading = ref(true);
const productStore = useProductsStore();

async function loadReviews() {
  isLoading.value = true;
  try {
    const productId = productStore.product_id;
    reviews.value = await productStore.fetchReviews(productId);
  } catch (error) {
    console.error("Failed to load reviews:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadReviews();
});
</script>

<template>
  <div
    class="py-8 px-6 flex flex-col gap-y-4 justify-center items-start w-full rounded-xl bg-white text-secondary tracking-wider"
  >
    <h1 class="text-xl font-semibold">Reviews</h1>

    <div v-if="isLoading" class="text-center w-full">Loading reviews...</div>

    <div v-else>
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="flex flex-col items-start justify-center gap-y-4 py-4 border-b-2 border-b-[#e6e3e3] w-full"
      >
        <div class="flex gap-x-1 items-center justify-center">
          <img
            v-for="star in 5"
            :key="star"
            :src="star <= review.rating ? starActive : starGray"
            alt=""
          />
        </div>
        <p>{{ review.content }}</p>
        <p>
          <span>{{ formatDate(review.created_at) }},</span>
          <span class="text-md font-semibold"> by {{ review.author }}</span>
        </p>
      </div>
    </div>
  </div>
  <RecentProductList />
</template>
