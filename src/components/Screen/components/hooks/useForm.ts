import { inject } from "vue";

export default () => {
    const modelForm = inject<{ [key: string]: unknown }>("modelForm");
    const modelKeyName = inject<string>("modelKeyName") || "";

    return {
        modelForm,
        modelKeyName
    };
};
