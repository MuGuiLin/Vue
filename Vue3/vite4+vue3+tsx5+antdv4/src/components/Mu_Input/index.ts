export { Input } from 'ant-design-vue';

import { install, getAssetsFile } from "@/utils";
import mu_input from './mu_input.vue'

export const MuInput = install(mu_input)
export const GetAssetsFile = getAssetsFile;

export default MuInput;