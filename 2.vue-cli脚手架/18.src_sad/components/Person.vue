<<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件求和为{{sum}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="ADDLIST">添加</button>
        <button @click="addPersonServer">添加伤感语录</button>
        <ul>
            <li v-for="list in personList " :key="list.id">{{list.name}}---{{list.id}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
// import {mapState} from 'vuex'
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // ...mapState(['personList'])
    personList() {
      // 此时的state里面只有countAbout，personAbout，
      // "students", "sum"这些数据都在countAbout模块里   "personList"在 personAbout模块里
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
  },
  methods: {
    ADDLIST() {
      const peoples = { id: nanoid(), name: this.name };
      // 如果是模块化store 需要在 先找 /前面的分类， 而 / 后面才是需要调用的函数名
      this.$store.commit("personAbout/ADDLIST", peoples);
      this.name = "";
    },
    addPersonServer() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
};
</script>