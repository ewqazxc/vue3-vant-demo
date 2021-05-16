import { defineComponent, reactive } from "vue";
import { Toast } from "vant";
import logo from "@/assets/logo.png";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <img alt="Vue logo" src={logo} />
          <h2>404</h2>
        </div>
      );
    };
  },
});
