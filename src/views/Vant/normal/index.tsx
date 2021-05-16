import { linkTo } from "@/utils";
import { defineComponent, reactive } from "vue";
import { RouterView, useRouter } from "vue-router";
import { NormalList } from "./list";

export const VantLayout = defineComponent({
  setup() {
    const router = useRouter();
    const state: any = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    console.log("router::", router.currentRoute.value.path);
    return () => {
      return (
        <div>
          Vant 基础组件
          {router.currentRoute.value.path !== "/vant/normal" ? (
            <RouterView />
          ) : (
            <van-list
              loading={state.loading}
              finished={state.finished}
              finished-text="没有更多了"
            >
              {NormalList.map((item) => {
                return (
                  <van-cell
                    key={item.key}
                    title={item.title}
                    onClick={() => {
                      linkTo(item.url, item);
                    }}
                  />
                );
              })}
            </van-list>
          )}
        </div>
      );
    };
  },
});

export default VantLayout;
