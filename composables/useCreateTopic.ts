type FormData = {
  title: string;
  content: string;
  user_id: number;
  category_id: number;
};

export const useCreateTopic = () => {
  const router = useRouter();
  const createTopic = async (form: FormData) => {
    const { data, error } = await useApiFetch("/api/topic", {
      method: "POST",
      body: form,
    });
    if (!error.value) {
      router.back();
      return;
    }
    alert(error.value?.data.message);
  };

  return { createTopic };
};
