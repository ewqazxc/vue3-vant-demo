import { Toast } from "vant";
import { defineComponent, reactive } from "vue";
import { onBeforeRouteUpdate, RouterView } from "vue-router";
import { BaseLayoutList } from "@/constants/configList";
import "./index.css";

export const BaseLayout = defineComponent({
  setup() {
    const state = reactive({
      active: 0,
    });

    onBeforeRouteUpdate((to) => {
      console.log("onBeforeRouteUpdate to::", to);
    });

    const onChange = (index) => {
      console.log("index::", index);
      Toast(`${BaseLayoutList[index].title}`);
    };
    return () => {
      return (
        <div>
          <RouterView />
          <van-tabbar
            v-model={state.active}
            onChange={onChange}
            placeholder="底部占位元素"
            route
          >
            {BaseLayoutList.map((item) => {
              return (
                <van-tabbar-item replace to={item.url} icon={item.icon}>
                  {item.title}
                </van-tabbar-item>
              );
            })}
          </van-tabbar>
        </div>
      );
    };
  },
});

export default BaseLayout;
