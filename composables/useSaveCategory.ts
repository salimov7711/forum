const useSaveCategory = () => {
  const isCategory = useState("category", () => null);
  const saveCategory = (data: any) => {
    isCategory.value = data.value;
  };
  return {
    isCategory,
    saveCategory,
  };
};
export default useSaveCategory;
