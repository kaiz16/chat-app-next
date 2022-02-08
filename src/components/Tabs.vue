<template>
  <div class="w-full px-2 py-1 sm:px-0">
    <TabGroup :defaultIndex="activeTab" @change="tabChange">
      <TabList class="flex justify-evenly">
        <Tab
          v-for="(tab, index) in tabs"
          as="div"
          :key="index"
          :disabled="tab.disabled"
          @click="tabChange(index)"
          class="flex flex-col items-center focus:outline-none cursor-pointer"
        >
          <component
            :is="tab.icon"
            class="mt-2 w-6 h-6"
            :class="activeTab === index ? 'text-dark' : 'text-oxford-blue-500'"
          />
          <button
            class="text-xs mt-2 leading-5 font-medium rounded-lg"
            :class="activeTab === index ? 'text-dark' : 'text-oxford-blue-500'"
          >
            {{ tab.label }}
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab } from "@headlessui/vue";
import { CheckCircleIcon, XIcon } from "@heroicons/vue/outline";
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
  },
  props: {
    activeTab: {
      type: Number,
      default: () => 0,
    },
    tabs: {
      type: Array,
      default: () => {
        return [
          {
            icon: CheckCircleIcon,
            label: "Yes",
            disabled: false,
          },
          {
            icon: XIcon,
            label: "No",
            disabled: false,
          },
        ];
      },
    },
  },
  emits: ["change"],
  setup(Props, Context) {
    function tabChange(index) {
      Context.emit("change", index);
    }

    return {
      tabChange,
    };
  },
};
</script>
