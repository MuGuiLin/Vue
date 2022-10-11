
<script setup lang="ts" name="SvgEditor">

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
                    <div class="scale-x"></div>
                    <div class="scale-y"></div>
                </div>
                <div class="canvas">
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="1008" height="567" c>
                        <foreignObject id="background_pattern" width="100%" height="100%" preserveAspectRatio="xMinYMin" style="pointer-events:none"><div style="pointer-events:none;width:100%;height:100%;background-image:url(data:image/gif;base64,R0lGODlhEAAQAIAAAP///9bW1iH5BAAAAAAALAAAAAAQABAAAAIfjG+gq4jM3IFLJgpswNly/XkcBpIiVaInlLJr9FZWAQA7);"></div></foreignObject>
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
                    width: 1920px;
                    height: 15px;
                    border-top: 1px solid rgb(100, 100, 100);
                    background: rgb(80, 80, 80);
                    box-shadow: 0px 2px 6px 0px rgb(30 30 30 / 60%);
                }

                &-y {
                    box-sizing: border-box;
                    position: absolute;
                    top: 15px;
                    left: 0;
                    width: 15px;
                    height: 1920px;
                    border-left: 1px solid rgb(100, 100, 100);
                    background: rgb(80, 80, 80);
                    box-shadow: 2px 0px 6px 0px rgb(30 30 30 / 60%);

                }

            }

            .canvas {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 1008px;
                height: 567px;
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

        .attr{
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