import router from "@/router";

export const linkTo = (url: string, item?: any) => {
  console.log("url::", url);
  console.log("item::", item);
  // document.title = item.title;
  router.push(url);
  // router.push({ name: item.name });
};
