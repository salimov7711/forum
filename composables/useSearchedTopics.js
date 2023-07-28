export default function useSearchedTopics(allTopics) {
  const searchQuery = ref("");
  const searchedTopics = computed(() => {
    return allTopics.value.filter((topic) =>
      topic.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    searchedTopics,
  };
}
