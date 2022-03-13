import ListView from './ListView.vue';
import bus from '../utils/bus.ts';

export default function createListView(name) {
  return {
    name,
    mounted() {
      bus.$emit('off:progress');
    },
    render(h) {
      return h(ListView);
    },
  };
}