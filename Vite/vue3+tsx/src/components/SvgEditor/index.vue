
<script setup lang="ts" name="SvgEditor">
import { onDeactivated, onMounted, onUnmounted } from "vue";

class scale {
    private readonly oDraw: HTMLDivElement;
    private readonly oCanvas: HTMLDivElement;

    private readonly cScaleX: HTMLCanvasElement | any;
    private readonly cScaleY: HTMLCanvasElement | any;
    private readonly oScaleX: HTMLCanvasElement;
    private readonly oScaleY: HTMLCanvasElement;

    public scaleXW: number = 0;
    public scaleXH: number = 0;
    public scaleYH: number = 0;
    public scaleYW: number = 0;
    public scaleXZ: number = 0;
    public scaleYZ: number = 0;

    constructor() {
        this.oDraw = document.querySelector(".draw") as HTMLDivElement;
        this.oCanvas = document.querySelector(".canvas") as HTMLDivElement;
        this.oScaleX = document.querySelector(".scale-x") as HTMLCanvasElement;
        this.oScaleY = document.querySelector(".scale-y") as HTMLCanvasElement;
        this.cScaleX = this.oScaleX.getContext("2d") as
            | CanvasRenderingContext2D
            | any;
        this.cScaleY = this.oScaleY.getContext("2d") as
            | CanvasRenderingContext2D
            | any;
        this.init();
    }

    draw() {
        const {
            oDraw,
            cScaleX,
            cScaleY,
            scaleXW,
            scaleYW,
            scaleXH,
            scaleYH,
            scaleXZ,
            scaleYZ,
        } = this;

        cScaleX.clearRect(0, 0, scaleXW, scaleXH);
        cScaleY.clearRect(0, 0, scaleYW, scaleYH);

        for (let i = 0; i < 50; i++) {
            cScaleX.beginPath();
            cScaleY.beginPath();

            if (i === 0) {
                cScaleX.fillStyle = cScaleX.strokeStyle = "rgb(0, 222, 204)";
                cScaleY.fillStyle = cScaleY.strokeStyle = "rgb(0, 222, 204)";
            } else {
                cScaleX.fillStyle = cScaleX.strokeStyle = "rgb(156, 156, 156)";
                cScaleY.fillStyle = cScaleY.strokeStyle = "rgb(156, 156, 156)";
            }
            //
            cScaleY.lineWidth = cScaleX.lineWidth = 0.5;
            // 线宽0.5 模糊解决 scaleXZ + i * 50 - (0.5)
            // 原点向右
            // 0 50 100 150

            cScaleX.moveTo(scaleXZ + i * 50 - 0.5, 0);
            cScaleX.lineTo(scaleXZ + i * 50 - 0.5, scaleXH);

            cScaleY.moveTo(0, scaleYZ + i * 50 - 0.5);
            cScaleY.lineTo(scaleYW, scaleYZ + i * 50 - 0.5);

            // Y
            cScaleY.moveTo(scaleYW * 0.8, scaleYZ + i * 50 + 10 - 0, 5);
            cScaleY.lineTo(scaleYW, scaleYZ + i * 50 + 10 - 0.5);

            cScaleY.moveTo(scaleYW * 0.65, scaleYZ + i * 50 + 20 - 0, 5);
            cScaleY.lineTo(scaleYW, scaleYZ + i * 50 + 20 - 0.5);

            cScaleY.moveTo(scaleYW * 0.8, scaleYZ + i * 50 + 30) - 0, 5;
            cScaleY.lineTo(scaleYW, scaleYZ + i * 50 + 30 - 0.5);

            cScaleY.moveTo(scaleYW * 0.65, scaleYZ + i * 50 + 40 - 0, 5);
            cScaleY.lineTo(scaleYW, scaleYZ + i * 50 + 40 - 0.5);
            // Y

            // X
            cScaleX.moveTo(scaleXZ + i * 50 - 0.5 + 10, scaleXH * 0.8);
            cScaleX.lineTo(scaleXZ + i * 50 - 0.5 + 10, scaleXH);

            cScaleX.moveTo(scaleXZ + i * 50 - 0.5 + 20, scaleXH * 0.65);
            cScaleX.lineTo(scaleXZ + i * 50 - 0.5 + 20, scaleXH);

            cScaleX.moveTo(scaleXZ + i * 50 - 0.5 + 30, scaleXH * 0.8);
            cScaleX.lineTo(scaleXZ + i * 50 - 0.5 + 30, scaleXH);

            cScaleX.moveTo(scaleXZ + i * 50 - 0.5 + 40, scaleXH * 0.65);
            cScaleX.lineTo(scaleXZ + i * 50 - 0.5 + 40, scaleXH);
            // X

            cScaleY.font = cScaleX.font = "9px 微软雅黑";
            cScaleX.fillText(i * 50, scaleXZ + i * 50 + 2, 9);

            let n1 = String(i * 50).split("");
            n1.forEach((item, index) => {
                cScaleY.fillText(item, 3, scaleYZ + i * 50 + 9 * (index + 1));
            });

            // 原点向左
            cScaleX.moveTo(scaleXZ - i * 50 - 0.5, 0);
            cScaleX.lineTo(scaleXZ - i * 50 - 0.5, scaleXH);

            cScaleY.moveTo(scaleYW * 0.8, scaleYZ - i * 50 - 10 - 0.5);
            cScaleY.lineTo(scaleYW, scaleYZ - i * 50 - 10 - 0.5);

            cScaleY.moveTo(scaleYW * 0.65, scaleYZ - i * 50 - 20 - 0.5);
            cScaleY.lineTo(scaleYW, scaleYZ - i * 50 - 20 - 0.5);

            cScaleY.moveTo(scaleYW * 0.8, scaleYZ - i * 50 - 30) - 0.5;
            cScaleY.lineTo(scaleYW, scaleYZ - i * 50 - 30 - 0.5);

            cScaleY.moveTo(scaleYW * 0.65, scaleYZ - i * 50 - 40 - 0.5);
            cScaleY.lineTo(scaleYW, scaleYZ - i * 50 - 40 - 0.5);

            cScaleX.moveTo(scaleXZ - i * 50 - 0.5 - 10, scaleXH * 0.8);
            cScaleX.lineTo(scaleXZ - i * 50 - 0.5 - 10, scaleXH);

            cScaleX.moveTo(scaleXZ - i * 50 - 0.5 - 20, scaleXH * 0.65);
            cScaleX.lineTo(scaleXZ - i * 50 - 0.5 - 20, scaleXH);

            cScaleX.moveTo(scaleXZ - i * 50 - 0.5 - 30, scaleXH * 0.8);
            cScaleX.lineTo(scaleXZ - i * 50 - 0.5 - 30, scaleXH);

            cScaleX.moveTo(scaleXZ - i * 50 - 0.5 - 40, scaleXH * 0.65);
            cScaleX.lineTo(scaleXZ - i * 50 - 0.5 - 40, scaleXH);

            cScaleX.fillText(-i * 50, scaleXZ - i * 50 + 2, 9);

            let n2 = String(-i * 50).split("");
            n2.forEach((item, index) => {
                cScaleY.fillText(item, 3, scaleYZ - i * 50 + 9 * (index + 1));
            });

            cScaleX.stroke();
            cScaleY.stroke();
        }
    }

    reset() {
        const { oDraw, oCanvas, oScaleX, oScaleY } = this;

        this.scaleXW = oScaleX.width = oDraw.offsetWidth;
        this.scaleYH = oScaleY.height = oDraw.offsetHeight;

        this.scaleXZ = oCanvas.offsetLeft - Math.round(oCanvas.offsetWidth / 2);
        this.scaleYZ = oCanvas.offsetTop - Math.round(oCanvas.offsetHeight / 2);
        this.draw();
    }

    init() {
        const { oDraw, oScaleX, oScaleY } = this;

        this.scaleXW = oScaleX.width = oDraw.offsetWidth;
        this.scaleXH = oScaleX.height = 15;

        this.scaleYH = oScaleY.height = oDraw.offsetHeight;
        this.scaleYW = oScaleY.width = 15;

        window.onresize = () => {
            this.reset();
        };

        this.reset();
    }
}

onMounted(() => {
    new scale();
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
                <div class="canvas">
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <foreignObject id="background_pattern" width="100%" height="100%" preserveAspectRatio="xMinYMin"
                            style="pointer-events: none">
                            <div style="
                  pointer-events: none;
                  width: 100%;
                  height: 100%;
                  background-image: url(data:image/gif;base64,R0lGODlhEAAQAIAAAP///9bW1iH5BAAAAAAALAAAAAAQABAAAAIfjG+gq4jM3IFLJgpswNly/XkcBpIiVaInlLJr9FZWAQA7);
                "></div>
                        </foreignObject>
                    </svg>
                </div>
                <div class="subline">
                    <div class="subline-x"></div>
                    <div class="subline-y"></div>
                </div>
            </main>
            <aside class="attr"></aside>
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
    background: radial-gradient(#1c0e3e -30%, rgb(30, 30, 30) 100%);

    .mu-header {
        height: 50px;
        background-color: rgb(60, 60, 60);
        background-color: white;
    }

    .mu-canvas {
        display: flex;

        height: calc(100vh - 50px);

        .tool {
            flex-basis: 180px;
            height: 100%;
            background-color: rgb(45, 45, 45);
            background-color: white;
            border-top: 1px solid rgb(100, 100, 100);
        }

        .draw {
            box-sizing: border-box;
            position: relative;
            flex: 1;
            min-width: 1008px;
            overflow: auto;

            .scale {
                position: relative;
                z-index: 1;

                &::before {
                    content: "";
                    box-sizing: border-box;
                    display: block;
                    width: 15px;
                    height: 15px;
                    background: rgb(80, 80, 80);
                    border: 1px solid rgb(100, 100, 100);
                    border-bottom: 0;
                    border-right: 0;
                }

                &-x {
                    box-sizing: border-box;
                    position: absolute;
                    top: 0;
                    left: 15px;
                    border-top: 1px solid rgb(100, 100, 100);
                    background: rgb(80, 80, 80);
                    box-shadow: 0px 2px 6px 0px rgb(30 30 30 / 60%);
                }

                &-y {
                    box-sizing: border-box;
                    position: absolute;
                    top: 15px;
                    left: 0;
                    border-left: 1px solid rgb(100, 100, 100);
                    background: rgb(80, 80, 80);
                    box-shadow: 2px 0px 6px 0px rgb(30 30 30 / 60%);
                }
            }

            .canvas {
                box-sizing: border-box;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 1008px;
                height: 567px;
                width: 1920px;
                height: 1080px;
                background: white;
                z-index: 0;
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
            position: relative;
            flex-basis: 300px;
            height: 100%;
            background-color: rgb(80, 80, 80);
            border-top: 1px solid rgb(100, 100, 100);
            border-left: 1px solid rgb(100, 100, 100);
            z-index: 1;
        }
    }
}
</style>