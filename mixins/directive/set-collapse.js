const setClassAndStyle = (el, isOpen, maxHeight) => {
    el.classList.toggle("max-h-[var(--max-height)]", isOpen);
    el.classList.toggle("max-h-0", !isOpen);
    el.classList.toggle("opacity-0", !isOpen);
    el.style.setProperty("--max-height", `${maxHeight}px`);
};

const setCollapse = {
    bind(el) {
        el.classList.add(
            "transition-[opacity,max-height]",
            "overflow-hidden",
            "duration-500",
            "ease-easeOutSine",
        );
    },
    inserted(el, binding) {
        const { isOpen, maxHeight } = binding.value;
        setClassAndStyle(el, isOpen, maxHeight);
    },
    update(el, binding) {
        const { isOpen, maxHeight } = binding.value;
        setClassAndStyle(el, isOpen, maxHeight);
    },
};

export { setCollapse };
