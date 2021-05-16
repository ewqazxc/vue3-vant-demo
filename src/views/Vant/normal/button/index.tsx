import { linkTo } from "@/utils";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

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
          <h3>Button 按钮</h3>
          <van-list
            loading={state.loading}
            finished={state.finished}
            finished-text="没有更多了"
          >
            adssd
          </van-list>
        </div>
      );
    };
  },
});

export default VantLayout;
