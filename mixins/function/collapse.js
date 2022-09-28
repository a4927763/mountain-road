import {
    useEventListener,
    useMutationObserver,
    useResizeObserver,
} from "@vueuse/core";
import { ref, onMounted, nextTick, watch } from "vue";

export function useCollapse() {
    // for single element
    const wrapperEl = ref(null);
    const maxHeight = ref(0);
    async function calcHeight() {
        await nextTick();
        maxHeight.value = wrapperEl.value?.scrollHeight;
    }
    useMutationObserver(wrapperEl, calcHeight, {
        subtree: true,
        characterData: true,
    });
    useResizeObserver(wrapperEl, calcHeight);
    onMounted(() => {
        useEventListener(window, "resize", calcHeight);
        calcHeight();
    });

    // for multiple elements
    const wrapperEls = ref([]);
    const maxHeights = ref([]);

    async function calcHeights() {
        if (wrapperEls.value.length < 0) return;
        await nextTick();
        const arr = [];
        wrapperEls.value.forEach((el, idx) => {
            arr[idx] = el.scrollHeight;
        });
        maxHeights.value = arr;
    }
    watch(wrapperEls, calcHeights);
    onMounted(() => {
        useEventListener(window, "resize", calcHeights);
        calcHeights();
    });

    return {
        // for single element
        wrapperEl,
        maxHeight,
        calcHeight,
        // for multiple elements
        wrapperEls,
        maxHeights,
        calcHeights,
    };
}
