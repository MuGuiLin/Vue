
<script setup lang="ts" name="SvgEditor">
import { Class } from "@babel/types";
import { reactive, onMounted, onUnmounted } from "vue";

import scale from "./hooks/scale";

interface IState {
    width: number,
    height: number,
    scale: any,
};

const state = <IState>reactive({
    width: 1008,
    height: 567,
    scale: null,
});

const resize = ({ target }: Event | any) => {
    if ('width' === target.name) {
        state.width = target.value;
    } else if ('height' === target.name) {
        state.height = target.value;
    }
    setTimeout(() => {
        state.scale.reset();
    }, 300);
};


onMounted(() => {
    state.scale = new scale({
        draw: '.draw',
        canvas: '.canvas',
        scale_x: '.scale-x',
        scale_y: '.scale-y'
    });
});

onUnmounted(() => {
    window.onresize = null;
});
</script>

<template>
    <article class="mu-editor">
        <header class="mu-header">
            <menu></menu>
        </header>

        <section class="mu-canvas">
            <aside class="tool"></aside>
            <main class="draw">
                <div class="scale">
                    <canvas class="scale-x"></canvas>
                    <canvas class="scale-y"></canvas>
                </div>
                <div class="workarea">
                    <div class="canvas">
                        <svg id="svg" xmlns="http://www.w3.org/2000/svg" :width="state.width" :height="state.height"
                            viewBox="0 0 1008 567"></svg>
                    </div>
                </div>
                <div class="subline">
                    <div class="subline-x"></div>
                    <div class="subline-y"></div>
                </div>
            </main>
            <aside class="attr">
                <h4>画布大小：</h4>
                <input type="number" :value="state.width" name="width" @input="resize" />
                <input type="number" :value="state.height" name="height" @input="resize" />
            </aside>
        </section>
    </article>
</template>


<style scoped lang="less">
.mu-editor {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(30, 30, 30);
    background: radial-gradient(#0229A0 -150%, rgb(30, 30, 30) 100%);

    .mu-header {
        height: 50px;
        background-color: rgb(60, 60, 60);

    }

    .mu-canvas {
        box-sizing: border-box;
        position: relative;
        display: flex;
        height: calc(100vh - 50px);
        border-top: 1px solid rgb(100, 100, 100);
        overflow: hidden;

        .tool {
            flex-basis: 180px;
            height: 100%;
            background-color: rgb(45, 45, 45);
            border-right: 1px solid rgb(100, 100, 100);
        }

        .draw {
            box-sizing: border-box;
            position: relative;
            flex: 1;
            overflow: hidden;

            .scale {
                position: relative;
                z-index: 1;

                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 15px;
                    height: 15px;
                    background: rgb(70, 70, 70);
                    box-shadow: 2px 6px 12px 4px rgba(30, 30, 30, .6);
                }

                &-x {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: rgb(80, 80, 80);
                    box-shadow: 0px 2px 6px 0px rgba(30, 30, 30, .6);
                }

                &-y {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: rgb(80, 80, 80);
                    box-shadow: 2px 0px 6px 0px rgba(30, 30, 30, .6);
                }
            }

            .workarea {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                overflow: auto;

                .canvas {
                    box-sizing: border-box;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    // width: 1008px;
                    // height: 567px;
                    // width: 1920px;
                    // height: 1080px;
                    background-image: url(data:image/png;base64,R0lGODlhEAAQAIAAAP///9bW1iH5BAAAAAAALAAAAAAQABAAAAIfjG+gq4jM3IFLJgpswNly/XkcBpIiVaInlLJr9FZWAQA7);
                    transform: translate(-50%, -50%);
                    z-index: 0;

                    svg {
                        transition: all 500ms cubic-bezier(0.16, 0.66, 0.28, 0.96);
                    }
                }
            }

            .subline {
                position: absolute;
                top: 0;
                left: 0;

                &-x {
                    width: 0px;
                    height: 1px;
                    background: linear-gradient(to right, blueviolet, rgb(0, 124, 204));
                }

                &-y {
                    width: 1px;
                    height: 0px;
                    background: rgb(80, 80, 80);
                }
            }
        }

        .attr {
            box-sizing: border-box;
            padding: 10px;
            flex-basis: 300px;
            width: 300px;
            height: 100%;
            background-color: rgb(80, 80, 80);
            border-left: 1px solid rgb(100, 100, 100);
            box-shadow: -2px 0px 6px 0px rgba(30, 30, 30, .6);
            z-index: 1;
        }
    }
}
</style>