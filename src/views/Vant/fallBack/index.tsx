import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { BaseLayoutList, VantV3List } from "@/constants/configList";
import { linkTo } from "@/utils";

export const VantLayout = defineComponent({
  setup() {
    const router = useRouter();
    const state: any = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    return () => {
      return (
        <div>
          Vant 反馈组件
          <van-list
            loading={state.loading}
            finished={state.finished}
            finished-text="没有更多了"
          >
            {VantV3List.map((item) => {
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
        </div>
      );
    };
  },
});

export default VantLayout;
