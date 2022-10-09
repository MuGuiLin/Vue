import type { ExtractPropTypes, PropType } from 'vue';

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error';

export const buttonType = {
    type: String as PropType<ButtonType>,
};

export default buttonType;

