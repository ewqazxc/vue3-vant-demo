import { defineComponent, reactive, watch } from "vue";
import { RouterView, useRouter, onBeforeRouteUpdate } from "vue-router";
import "./index.css";

export const PageLayout = defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      metaDta: router.currentRoute.value.meta,
      count: 0,
    });
    console.log("router::", router);
    const onClickLeft = () => {
      router.back();
    };
    console.log("router::", router);
    onBeforeRouteUpdate((to, from, next) => {
      console.log("to,from,next::", to, from, next);
      next();
    });
    watch(
      () => state.count,
      () => {
        console.log("count改变了");
      }
    );
    return () => {
      return (
        <div>
          <van-nav-bar
            title={state.metaDta.title || "--"}
            left-text="返回"
            left-arrow
            onClickLeft={onClickLeft}
            clickRight="onClickRight"
          />
          {/* <span
            onClick={() => {
              state.count += 1;
            }}
          >
            Count ++ {state.count}
          </span> */}
          <RouterView />
        </div>
      );
    };
  },
});

export default PageLayout;
