export { Input } from 'ant-design-vue';

import { install, getAssetsFile } from "@/utils";
import muinput from './MuInput.vue'

export const MuInputSetup = install(muinput)
export const GetAssetsFile = getAssetsFile;

export default MuInputSetup;