export function useImageUpload() {
  let imageFile = ref("");
  let imageUrl = ref("");

  function handleImageSelected(e) {
    if (e.target.files.length === 0) {
      imageFile.value = "";
      imageUrl.value = "";
    }
    imageFile.value = e.target.files[0];
    console.log(e.target.files);
  }

  watch(imageFile, (imageFile) => {
    if (!(imageFile instanceof File)) {
      return;
    }
    let fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);

    fileReader.addEventListener("load", () => {
      imageUrl.value = fileReader.result;
      console.log(imageUrl.value);
    });
  });

  return {
    imageFile,
    imageUrl,
    handleImageSelected,
  };
}
