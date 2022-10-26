
<script setup lang="ts" name="SvgEditor">
import { reactive, onMounted, onUnmounted } from "vue";

import scale from "./hooks/scale";

interface IState {
    width: number,
    height: number,
    scale: any,
    lineX: number;
    lineY: number;
};

const state = <IState>reactive({
    width: 1008,
    height: 567,
    // width: 1920,
    // height: 1080,
    lineX: 100,
    lineY: 100,
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

const mousemove = ({ clientX, clientY }: Event | any) => {
    state.lineX = clientX - 180;
    state.lineY = clientY - 50;
}


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
            <!-- <main class=""> -->
            <div class="draw" @mousemove="mousemove">
                <div class="scale">
                    <div class="scale-x-box">
                        <canvas class="scale-x"></canvas>
                    </div>
                    <div class="scale-y-box">
                        <canvas class="scale-y"></canvas>
                    </div>
                </div>
                <div class="canvas">
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" :width="state.width" :height="state.height"
                        viewBox="0 0 1008 567"></svg>
                </div>
                <div class="subline">
                    <div class="subline-x" :style="{top: state.lineY + 'px'}"></div>
                    <div class="subline-y" :style="{left: state.lineX + 'px'}"></div>
                </div>
            </div>
            <aside class="attr">
                <h4>画布大小：</h4>
                <input type="number" :value="state.width" name="width" @input="resize" />
                <input type="number" :value="state.height" name="height" @input="resize" />
            </aside>
            <!-- </main> -->

        </section>
        <footer class="footer">
            <p>
                <b>X：{{state.lineX}}</b>
                <b>Y：{{state.lineY}}</b>
            </p>
        </footer>
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

    .tool {
        flex-basis: 180px;
        height: 100%;
        background-color: rgb(45, 45, 45);
        border-right: 1px solid rgb(100, 100, 100);
    }

    .mu-canvas {
        box-sizing: border-box;
        position: relative;
        display: flex;
        height: calc(100vh - 100px);
        border-top: 1px solid rgb(100, 100, 100);
        overflow: hidden;



        .draw {
            box-sizing: border-box;
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: auto;

            .scale {
                position: relative;
                z-index: 1;

                // &::after {
                //     content: "";
                //     position: absolute;
                //     top: 0;
                //     left: 0;
                //     display: block;
                //     width: 15px;
                //     height: 17px;
                //     background: rgb(70, 70, 70);
                //     box-shadow: 2px 6px 12px 4px rgba(30, 30, 30, .6);
                // }

                &-x-box {
                    position: sticky;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 17px;
                    background: rgb(80, 80, 80);

                    >.scale-x {
                        background: rgb(80, 80, 80);
                        box-shadow: 0px 2px 6px 0px rgba(30, 30, 30, .6);
                    }
                }

                &-y-box {
                    position: sticky;
                    top: 0;
                    left: 0;
                    width: 15px;
                    height: 100%;
                    background: rgb(80, 80, 80);

                    >.scale-y {
                        position: relative;
                        top: -17px;
                        background: rgb(80, 80, 80);
                        box-shadow: 2px 0px 6px 0px rgba(30, 30, 30, .6);
                    }
                }
            }

            .canvas {
                box-sizing: border-box;
                position: absolute;
                top: 50%;
                left: 50%;
                background-image: url(data:image/png;base64,R0lGODlhEAAQAIAAAP///9bW1iH5BAAAAAAALAAAAAAQABAAAAIfjG+gq4jM3IFLJgpswNly/XkcBpIiVaInlLJr9FZWAQA7);
                transform: translate(-50%, -50%);

                svg {
                    transition: all 500ms cubic-bezier(0.16, 0.66, 0.28, 0.96);
                }
            }

            .subline {
                user-select: none;

                &>div {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: blueviolet;
                }

                &-x {
                    top: 0;
                    height: 1px;
                    background: linear-gradient(to right, blueviolet, rgb(0, 124, 204));
                }

                &-y {
                    left: 0;
                    width: 1px;
                    background-image: linear-gradient(blueviolet, rgb(0, 124, 204));
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

    .footer {
        box-sizing: border-box;
        padding: 5px 20px;
        width: 100%;
        height: 30px;
        text-align: center;
        background: wheat;
    }
}
</style>