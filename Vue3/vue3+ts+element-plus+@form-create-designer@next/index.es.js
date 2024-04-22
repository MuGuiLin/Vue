/*!
 * form-create 可视化表单设计器
 * @form-create/designer v3.1.1
 * (c) 2021-2023 xaboy
 * Github https://github.com/xaboy/form-create-designer
 * Released under the MIT License.
 */
(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode('._fc-designer{cursor:default;height:100%;min-height:500px;overflow:hidden;position:relative}._fc-designer>.el-main{bottom:0;left:0;padding:0;position:absolute;right:0;top:0}._fc-m .form-create ._fc-l-item{background:#2e73ff;height:10px;overflow:hidden;transition:all .3s ease;width:100%}._fc-l,._fc-m,._fc-r{border-top:1px solid #ececec;box-sizing:border-box}._fc-l-group{padding:0 12px}._fc-l-title{font-size:14px;font-weight:600;margin:18px 0 5px}._fc-l-item{background:#fff;color:#000;cursor:pointer;display:inline-block;height:70px;line-height:1;min-width:70px;text-align:center;transition:all .2s ease;width:33.33%}._fc-l-item i{display:inline-block;font-size:21px}._fc-l-item ._fc-l-name{font-size:12px}._fc-l-item ._fc-l-icon{padding:10px 5px 12px}._fc-l-item:hover{background:#2e73ff;color:#fff}._fc-m-tools{align-items:center;border:1px solid #ececec;border-top:0;display:flex;height:40px;justify-content:flex-end}._fc-m-tools button.el-button{align-items:center;display:flex;padding:5px 14px}._fc-m-tools .fc-icon{font-size:14px;margin-right:2px}._fc-r .el-tabs__nav-wrap:after{background-color:#ececec;height:1px}._fc-r ._fc-r-tabs{border-bottom:1px solid #ececec;display:flex;padding:0}._fc-r ._fc-r-tab{box-sizing:border-box;color:#303133;display:inline-block;flex:1;font-size:14px;font-weight:600;height:40px;line-height:40px;list-style:none;position:relative;text-align:center}._fc-r ._fc-r-tab.active{border-bottom:2px solid #409eff;color:#409eff}.drag-box{min-height:60px;width:100%}._fc-m-drag{box-sizing:border-box;overflow:auto;padding:2px}._fc-m-drag,.draggable-drag{background:#fff;height:100%;position:relative}._fc-m-drag>form,._fc-m-drag>form>.el-row{height:100%}.drag-tool{word-wrap:break-word;box-sizing:border-box;min-height:20px;outline:1px dashed #2e73ff;overflow:hidden;padding:2px;position:relative;word-break:break-all}.drag-tool .drag-tool{margin:5px}.drag-tool+.drag-tool{margin-top:5px}.drag-tool.active{outline:2px solid #2e73ff}.drag-tool.active>div>.drag-btn{display:flex}.drag-tool .drag-btn{display:none}.drag-r{bottom:2px;right:2px}.drag-l,.drag-r{position:absolute;z-index:2}.drag-l{left:0;top:0}.drag-btn{background-color:#2e73ff;color:#fff;cursor:pointer;float:left;height:18px;justify-content:center;line-height:20px;padding-bottom:1px;text-align:center;width:18px}.drag-btn+.drag-btn{margin-left:2px}.drag-btn-danger{background-color:#ff2e2e}.drag-btn i{font-size:13px}.drag-mask{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}.CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}.CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{background:#fff;overflow:hidden;position:relative}.CodeMirror-scroll{height:100%;margin-bottom:-50px;margin-right:-50px;outline:none;overflow:scroll!important;padding-bottom:50px;position:relative;z-index:0}.CodeMirror-sizer{border-right:50px solid transparent;position:relative}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{display:none;outline:none;position:absolute;z-index:5}.CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}.CodeMirror-scrollbar-filler{bottom:0;right:0}.CodeMirror-gutter-filler{bottom:0;left:0}.CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}.CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-50px;vertical-align:top;white-space:normal}.CodeMirror-gutter-wrapper{background:none!important;border:none!important;position:absolute;z-index:4}.CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}.CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{word-wrap:normal;-webkit-tap-highlight-color:transparent;background:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;z-index:2}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}.CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.CodeMirror-cursor{pointer-events:none;position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}._fc_struct{width:100%}._fc_struct .CodeMirror{height:450px}._fc_struct .CodeMirror-line{font-size:13px!important;line-height:16px!important}.CodeMirror-lint-tooltip{z-index:1!important}._fc_struct .el-dialog__body{padding:0 20px}._fc_err{color:red;float:left;text-align:left;width:65%}._fc_fetch .el-form-item__label{display:inline-block;float:left;padding-right:5px;text-align:right}._fc_fetch{background-color:#bfdaf7;padding:10px}._fc-validate .form-create .el-form-item{margin-bottom:22px!important}._fc-validate .append-msg{cursor:pointer}._fc-validate .el-input-group__append{padding:0 10px}._fc-required{align-items:center;display:flex}._fc-required .el-input{margin-left:15px}._fc-required .el-switch{height:28px}._fc_table_opt[data-v-ed69f8be]{width:100%}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,d09GRgABAAAAABVIAAsAAAAAIgwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY95kmJY21hcAAAAYAAAAEVAAADLrSidCRnbHlmAAACmAAAD74AABiY14gyPGhlYWQAABJYAAAALgAAADYcO5CZaGhlYQAAEogAAAAeAAAAJAfeBAJobXR4AAASqAAAABIAAAB8fGIAAGxvY2EAABK8AAAAQAAAAEBgbGZebWF4cAAAEvwAAAAdAAAAIAEzALZuYW1lAAATHAAAAUUAAAJtPlT+fXBvc3QAABRkAAAA4gAAAULN3M8heJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWacwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeFzyfwtzwv4EhhrmBoQEozAiSAwDydAzseJzt0kdOQ0EQhOH/OZFMTib5BCw4GpYRRgKZHC0yB2HFleoYUONiwSEY6bM0I3U/ubuAJlC3XWtA9UVFOZ9+rcbvdabH7w2ufJ9jkhot9XSggU400sf3N2hffR3qWEM9lvufU7lmgSVWWGPP9w022WKbHbruXXPfJi0m3HfKX5qhzawrKuZdtei6ZVeuunadjpu1+D/t8lMd/d66Zfrh2aJeeMqoH543OghPHh2Gd4AGMe5zHCUROglvCA2jJESnUZKjs/D+0Hl4k+givFN0Gd4uuoqSKF2HN45uovwz3YZTgO7CeUD3UVKph3BG0CicFvQYzg16CicIPYezhF7CqUKv4Xyht3DS0Hs4c+gj6PwAdVJxugAAAHicdTgLkBTlmf/3/9OP7Z7u6d7pnp6Z3ZnZmWZ7WJbdHXdeHggcLN4JaBFQHhE5SFCIRDfokSzxcWpSxGARAaGwSKQOAz7iXa4K75LgA59V1J13VrBMQsRIikqZWPjgEqty5yXd3Pd3z8wuSmp3vu/r7//+R3/vvwkQcuE8+w5TiEsIzIXmMJSLOkh5cGz85WF2i+kicxjmAD2z6EZKb1wULEQMM8vwufnWtfVnF62ndP2iZ2vLLMOCk3T12NhqgNVjM69M/ftVtzpDdeAcCpcNaDMyTxNCGOHgGfoA0UieDOLerV2L4XbCXBjNU0unpWFaa4A7F2peuYrDOtCng59u2cfYvi1wWYj91/OLr118RV/fFRGCs3sq9Xplz/VbKZ2gO+i+LVv2MrZ3y5Z9t+f7+uYsXr54TqHAUfCCd8udt3jsa6s+v5UfRwnPtI3+iThkJplD5pNFZBm5jmwiW8l9eEKuEyvlFPNgm5YoFVErJp7W4aoxW0c3uf7w15+HHFiiWyx5c1CD1aKNf4Lt2m7drRcdt+xKbtMpS81GShLxD6enbEsSB6HuVBvNuVD3ysMwCHZ1lD/h23tlF/4p4TDbgIH+SqXfPzatAlCZ9sYbyATboEsjHLxeGGBwpDuVNoLT3Q6kDfCC0/j72/n5+WAuKZnLzdKSkXzhvXwOQOxKqDpTLLOwslCxRYGCKMSVSlOJC7IoiIrVpH/CRe8zUgwq/cH2aE96NeKZyPePRpvCP6BAbEbuadxuRTKVMZZ3p6av/GPPE0/0vFKpvDKxYsUE5JKmqopUkhU7l1BeWQ4ii4sJgcV2xhjTDI2J6Iyx0Abj9CP0iavIF8hdqHe35NUaoR/WW95pc79soDMMAnLqOFLkxtEBuGi1iDqrc+2VGuhLsyEak/rrtcZoCm0ocqPUvJIomTpf3SmNgFdrNkYLkNLpCK4pWgWcpQNLP6/phvq8ZgIkVf9khHt6AAy1p38EYKSfVkIcXMkFYbncDdAtv6emKLW63isMAwyWgp2VxSNgpGUnlQFBFTQzryjbHSe7oGdIFCElN+W0IW0XRVmDm4y0ilucjXY6q5uQ0XTc5ky021l3OPghX0ndojqqohrIuw2NcfITd3jYfVHTTeVFNZlUg48Fqj+v7MqMpbPZalcPFaWqzIyCvFM0jS5ChI6eE6SA3v5X5JpWDE7xZIaPbS/nCmZuSbRSs2G0Ua95Erp954FxF0Vnx2GnalopZJrM9M+UawC1Mi2FGLjDnDFsjmkJ8ea9qmGoexXTVDrUIcUwlOB9/nibkTLohzh/6jr+N6cswN39PZQyVE3/Nhg2LqQl0HCcQqcMTvClYVYn32wO3zdJhvBd0RPM6P3qJvqMUDSL/RhpeUgAS0DJdqsuegXmoQJtsmo6D5BP+/udQsGhm/39dHOw/1SXbTCZfcAouKokbUT9pmS24hT9sOD4+6MZdLNTaPj7X/8EB5NKLDjPgEnfkG1DZhs/IaG/XwjYNxglKmYdl4ygaVDjqPAw2ZWj5BumxuZf4FPy2Fux2FuPRfDB47HY8QcjOL6X0r3jCIXd46swG25dxeHtNBIWTh9+7K2RjvCDx5ewh8a/8hBjD31ly57LWsIcctXRUH/3M4a6W0ZIP0aMJGLoYJKaBwhQc/Mo5jnUah4KNE/FBGY0UcKjpqpOqtkYQbmGN0K9UoKWdEgVUM/oJ/Mg5dCXTefAAdPRs2rSoMVthirI0zJPXq0OZNS0rBp00ZOZkq6Z23JiMimmbRaLCaIa60/cr6jKyTViWlxzUhaBCQfUafE4HE8sSyvXXKPIoj6UOXKbMZTKFFjuQCojyYKlHsix4tCQddvhzKAB4iwGIAjmf+n3KrYw7QVVfbm/S1WFB7t/HFdj6+QZRAzfexM9F8aJS6pkNplHSLJVBHh+5+HhRIHDMw96k1cWzKrpYLav1nnG57BaBwQm/iR8PEtn9Q0O9vknCoOYIAqKBqApdJaqaar/bvXV7c81luIPCpsffXTz5u3b6TkU8k/wKXRWYXAUhf0TXJjOwqnbghvgyMwdf1iR//YfVhSCY014uvlEs22zzfQYetZ09PimaY02TQeDs4aeLZXQRKLlpAQxB8W6V5JsrG2YOD04eM0oXCNZCWmiSxFU9jVZTsBrGX83jAJk6KEMxChZH/wwk4Fr10sJS9odA8Z2y5akHoPM449nMi9lUPClDG4vtfLM70g36SUeuYwsIMvJF3n8OVyFUzOM0Mo+VRPaldRkKTykx1N8AXj7wQsBz+E89dthGm80q1F+d6XouS3gMmmgkEjA5TP88zMuB8RU988n+dGSz8HnIyJ4+x5RnCPIALLwR1GWxbMRffYv0PS3ec2zfb+1IENcxWX8/8Pl6Hr/ENJURNo/CG8KQoXGhBvEGFuOM3v4KnlR3imLPdFayNklC72CHIJ2Tr6OngpzFO+KLg/zVNvRJvMU1j6MLRDLngCNPFgS15FXYxc99KVyuZR/nEM65h8Pf24+0RVL+O/kE0kwYHGXkewKftxldkkXYJGCCSr4iWJ0yfQXkxNTuap/PEfdXFKxdf+dXDIRx3kUi0jwTBcWcxPz+t8o+KwEzypU7jJDm1/4X3aYpUkO68oCsgR7qLVkI76gWHbRql53Y5rDbZbi6cFDgE+SWK6mmpWaN5c6aNBmo8wlxWiQ8YoyTEVMfui8WLg7hPMZAt7J5NnGe2LrGq9C9wMrFkJ6QfMuA48vCArIfYdif5/TleJIjgmbBitJOm/Rtv9esby5kt7yhezMLPRM721w0Du9ZxfH2ZmZf2zhpS2+CLHU3drDkDza96Ule5TYt8aGqBCz4lklPZBYVE2O2cPVAYOymFu5NX7v3OvzV191frc4DsNWT8/0HsjezXFv7xURmmP19pZ7e/dGqFWnxlt1auDS9meuyXuYuum22p08iO4oq2RdN+sf4pBu8L9LNx680+wx79RMU4Oq1o02EuiHHYn1WXeW/134l+BkKFBBUfwnF9UkEy1YJjU8hc6sPB2dS2s845fDGiSF9QgJTIFYJlNSFHalMFopGbtjbW103R3f4qgycsdYu+Jgkfo5pPuSDIE9wtscM8sB/Sm0xTkaqYzW2vJYrY4Ztm3g72ZT+5ifF0GrV9xMX0CtdWO8zMC8bBbN/uJkaS+bNYc3fXaksGTYAJr8kPUTdMIfp0/JcYC47K9EfEYz4nFD+yBucJ4Rpw/6p6k3gqNHIil6g5Xnm/vHOKRXTdKt2F1BnyJdaDeutct4lUhZUtFr1hrJKlIup4odyu1QEsqhgZF6jd5cLPoPF8FMIHEzYtomft/GHRH6VJiQ9fgFEhJx/WLkwyjCdu+zqdXrNSarV6Qhr/GZ6uU0eb5NWTz3hq0x2tmzphYtOliaWrSCgWeOiUmRyfLrsim8hhktqVDs3WZ0ShxtlgbrF9etH504IYHAZEd5W6LCKcQKSJS2au4O+jJSGupyALPIleiDksMrabJZ5oWVtW5d4b3AbHjMwnYfT4/Z3+7HMXy/1OxWHZk6BueXLFm/3rr66nXrXtyf8wD6e/bnXKBut7pfUfar8MnDvdO8LAIAz1AeVvCfzmvM6veCQ7MQwhlwc76fm4YTKcu5/jOKQiVFmQ9e9hLsyXsl7z0NUsIO4krsoNaSm8lX8Vb5A7RGGDTtyoVW6e/cUTBbcm6K91UW3g0jMXRhQZRat6LwTpMDkXt9lCawIk6h+ztTeaW8NC1hf9K6FIVn4DfXcHt7ihDeSl8FzUbj7dJ0tKAngm5rE9yau0T/yxOKriu78MnWgB4SVU6qExq+m38cjvLBYClnTaFhaFd7knoJ6mQl3O0VvqZeSfOxDYqGHqfQ4xP8CA9Fuw2I0ZwJfjrw1/JZym7OOTL1iAd0S8f/dXzY1u6M0PqLmKde7eGyIx2QfhW3xiUocBNGfvll+ptWjHvYrV/Oo2m0HeWT8d7h9Q+HFrNE9hniR3Sv6/q3utBtXIKi0zFN11z3dxE6FyF6vA6QTWj+WeAE3na0iPEcengJ/4OPPk20zv3P9J0w/m8gt5C7yXf4bW8ub6jCaxs6UKoZlpJU+7NFXQj5xXo1unijF+Bj635XLdpRvmgvINnFetHmA5zX8KZ4EnefeqssTPKESX/mTBt+DU8mbDsRrE7Y1OqVBZjgjVGwA3ul7wW/TNjBe45hAVjGF7mYE5dxMUxQ08NJv0xYELwLaTtkUCt4Uxb+h89HENyLrRL2F7P582y6Z3KEDuMKG/gCGxLW7Zx5OQf7LMPZx0e6bbt7A195oRTHzXFrDpxfOOGUuBW80pkDfovAXT7ucAmRO/W8gJHfJGNkKVlDvoSxT8BFrUaa431LDj71HUmwedczB4otXEVBwOov8EtWGP/1MIrtkC5PoWsNoRO49amhjnWaVTaEBTf4WXfWXJkuAhTTdANi1uf/FhsAGDKz3Rv9nXTcf4jeFphV1QDo4fDfOMhyIP5rmzSCn1V5oCCpP1HlMcdHmE5/kuZlMR1BKDn+ydZWlWyhYemmqVsR3LjR/w84uFHXeiChZeEinNUPmjZGOl4/Wvii+3IOK36D9ybhh8PwRpzU6TCtzaWjeYpFDaZ2JMlWwuS6CK/M7e5i8cjX7//639VG1yNaWwM2Gvxmsis5tJe/AYIkm3pt9vcO1yCcEU4cm38HPG4q73LZdxUzOIO6RTWSsKe/8Ge2lcWITfpJncwJv7OUvUHA2xe/EEZh1DTxfshtFH2NCCMiGX3eaj875SZaEu/Nn+bTY0sTzo60/rnnroNiBv4TFb0yyMhCXpRCsBt9P8cvHzmMg90ztfRCR585ayqT7rrRBOPGIf/nmWIxQweH/I9EGQVggksEO6Y8fK/JtdK8SKD1feCCz+5j/I278A1NTAdmGbsxdp9/GM43/cN0j3/LOPXGkVobyf+ZPYJ6sXjf1s+/BDS4Wkz8lSTsbEVHcMPg8Moct9ONB58wmd2F1hCWgbxAhmWCwKiNhL8lfAZLp7/HoP0VY48IMQG2dnUFO5XYV0F+6il+7TqdsKzEabl15l+zR1kf+tL0T/kRt0VYE8v1qYXW4RWRkqPnBOHc0aPvx2IfKEl9WzLXDRN6skN1s77W8PtHj54LbtKT26LR3jbR6snupS+F3336oq/LU3rqzkmQ4MeoNSg5jN769qOH3hZib31//iqAVfMXrKR01V8XBwcXDA7Sl+Q3Nt30piy/edOmNx6m1y9cuAZgzcKF1y+FoYVD+E/4t/4j7FfsBjI79EGecurV0QZ2eCXs9LBdsl1MRYnw62cqzDiYkpDktkEr1KtoBSRr7NRBUb+wWhaFe2Jq7B5BklcFmvSIIDwiaciWkB1vsUETD8bggbbMwVjs4KVlYgdFDYJV0QD5fyJtOt8AAHicY2BkYGAAYu+uxoJ4fpuvDNwsDCBwp0/ND0H/X8LCwBwD5HIwMIFEAQ3oCUMAAHicY2BkYGBu+N/AEMOSxAAELAwMjAyoQB4AULcC6gAAeJxjYWBgYKEFTiKsBgAs4gDfAAAAAAAAADwAhgFIAfwCdALAAxQDkAPuBDAExgUqBcgGCgZeBqQG8gdKB7IIlgjyCbAKWAqwCyQLPAt+C7wL9gxMeJxjYGRgYJBnWMXAxQACTEDMBWb/B/MZAB0PAeoAAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxtT9lywyAQQ6kxjnvfd5Mf2I/CsJ0wxYbB2Gn/vjB9rV72kLSaFRvxh178jx02OEEDiRYKHbbocYoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzvsRU/aWjIH562i+eiyOTSU9aBoWHIOU0tuikveFgmbryF8t5S0dUGWklnRtIwDJ0VL9EHbItOz0ZZTS3PUhlsywYck61Ruac8pN5TCsSPrVmerdWbPpiTkpKf5s27Yuhwq46tCFoZZki2BpXdjibXFUycT4o8iN8ZQ75ZXOoqJV8dHSWNYWYhfJs5MYQAA) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-add-child:before{content:"\\e789"}.icon-switch:before{content:"\\e77c"}.icon-tab:before{content:"\\e77b"}.icon-button:before{content:"\\e77e"}.icon-input:before{content:"\\e77f"}.icon-checkbox:before{content:"\\e780"}.icon-radio:before{content:"\\e781"}.icon-rate:before{content:"\\e782"}.icon-number:before{content:"\\e783"}.icon-upload:before{content:"\\e784"}.icon-cascader:before{content:"\\e785"}.icon-space:before{content:"\\e786"}.icon-color:before{content:"\\e787"}.icon-span:before{content:"\\e788"}.icon-alert:before{content:"\\e78a"}.icon-row:before{content:"\\e78b"}.icon-divider:before{content:"\\e78d"}.icon-select:before{content:"\\e78e"}.icon-transfer:before{content:"\\e78f"}.icon-editor:before{content:"\\e790"}.icon-slider:before{content:"\\e791"}.icon-tree:before{content:"\\e792"}.icon-date:before{content:"\\e793"}.icon-time:before{content:"\\e794"}.icon-delete:before{content:"\\e770"}.icon-copy:before{content:"\\e771"}.icon-import:before{content:"\\e773"}.icon-add:before{content:"\\e774"}.icon-preview:before{content:"\\e776"}.icon-move:before{content:"\\e777"}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent, openBlock, createElementBlock, createElementVNode, markRaw, computed, unref, isRef, ref, resolveComponent, TransitionGroup, h, nextTick, toRefs, getCurrentInstance, provide, reactive, watch, createBlock, normalizeStyle, withCtx, createVNode, Fragment, renderList, toDisplayString, normalizeClass, renderSlot, createTextVNode, createCommentVNode, withDirectives, vShow, inject, withModifiers, pushScopeId, popScopeId, mergeProps } from "vue";
import formCreate from "@form-create/element-ui";
function form({ t: g }) {
  return [
    {
      type: "radio",
      field: "labelPosition",
      value: "left",
      title: g("form.labelPosition"),
      options: [
        { value: "right", label: "right" },
        { value: "left", label: "left" },
        { value: "top", label: "top" }
      ]
    },
    {
      type: "radio",
      field: "size",
      value: "small",
      title: g("form.size"),
      options: [
        { value: "large", label: "large" },
        { value: "default", label: "default" },
        { value: "small", label: "small" }
      ]
    },
    {
      type: "input",
      field: "labelWidth",
      value: "125px",
      title: g("form.labelWidth")
    },
    {
      type: "switch",
      field: "hideRequiredAsterisk",
      value: !1,
      title: g("form.hideRequiredAsterisk")
    },
    {
      type: "switch",
      field: "showMessage",
      value: !0,
      title: g("form.showMessage")
    },
    {
      type: "switch",
      field: "inlineMessage",
      value: !1,
      title: g("form.inlineMessage")
    },
    {
      type: "switch",
      field: "formCreateSubmitBtn",
      value: !0,
      title: g("form.submitBtn")
    },
    {
      type: "switch",
      field: "formCreateResetBtn",
      value: !1,
      title: g("form.resetBtn")
    }
  ];
}
const _export_sfc = (g, b) => {
  const l = g.__vccOpts || g;
  for (const [o, t] of b)
    l[o] = t;
  return l;
}, _sfc_main$8 = defineComponent({
  name: "IconRefresh"
}), _hoisted_1$6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$7(g, b, l, o, t, s) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$4);
}
const IconRefresh = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
function field({ t: g }) {
  return [
    {
      type: "input",
      field: "field",
      value: "",
      title: g("form.field")
    },
    {
      type: "input",
      field: "title",
      value: "",
      title: g("form.title")
    },
    {
      type: "input",
      field: "info",
      value: "",
      title: g("form.info")
    },
    {
      type: "switch",
      field: "show",
      value: !0,
      title: g("form.show")
    },
    {
      type: "Struct",
      field: "_control",
      value: [],
      title: g("form.control"),
      props: {
        defaultValue: [],
        validate(b) {
          return Array.isArray(b) ? b.length ? !b.some(({ rule: l }) => !Array.isArray(l)) : !0 : !1;
        }
      }
    },
    {
      type: "col",
      props: {
        span: 24
      },
      children: [
        {
          type: "el-button",
          props: {
            type: "primary",
            size: "small"
          },
          inject: !0,
          on: {
            click({ $f: b }) {
              const l = b.activeRule;
              l && (l.__fc__.updateKey(), l.value = void 0, l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [{ type: "i", class: "fc-icon icon-delete" }, g("form.clear")]
        },
        {
          type: "el-button",
          props: {
            type: "success",
            size: "small",
            icon: markRaw(IconRefresh)
          },
          inject: !0,
          on: {
            click({ $f: b }) {
              const l = b.activeRule;
              l && (l.__fc__.updateKey(!0), l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [g("form.refresh")]
        }
      ]
    }
  ];
}
function validate() {
  return [
    {
      type: "validate",
      field: "validate",
      value: []
    }
  ];
}
function $set(g, b, l) {
  g[b] = l;
}
const is = {
  type(g, b) {
    return Object.prototype.toString.call(g) === "[object " + b + "]";
  },
  Undef(g) {
    return g == null;
  },
  Element(g) {
    return typeof g == "object" && g !== null && g.nodeType === 1 && !is.Object(g);
  },
  trueArray(g) {
    return Array.isArray(g) && g.length > 0;
  },
  Function(g) {
    const b = this.getType(g);
    return b === "Function" || b === "AsyncFunction";
  },
  getType(g) {
    const b = Object.prototype.toString.call(g);
    return /^\[object (.*)\]$/.exec(b)[1];
  },
  empty(g) {
    return g == null || Array.isArray(g) && Array.isArray(g) && !g.length ? !0 : typeof g == "string" && !g;
  }
};
["Date", "Object", "String", "Boolean", "Array", "Number"].forEach((g) => {
  is[g] = function(b) {
    return is.type(b, g);
  };
});
function hasProperty(g, b) {
  return {}.hasOwnProperty.call(g, b);
}
function deepExtend(g, b = {}, l) {
  let o = !1;
  for (let t in b)
    if (Object.prototype.hasOwnProperty.call(b, t)) {
      let s = b[t];
      if ((o = Array.isArray(s)) || is.Object(s)) {
        let u = g[t] === void 0;
        if (o)
          o = !1, u && $set(g, t, []);
        else if (s._clone && l !== void 0)
          if (l)
            s = s.getRule(), u && $set(g, t, {});
          else {
            $set(g, t, s._clone());
            continue;
          }
        else
          u && $set(g, t, {});
        g[t] = deepExtend(g[t], s, l);
      } else
        $set(g, t, s), is.Undef(s) || (is.Undef(s.__json) || (g[t].__json = s.__json), is.Undef(s.__origin) || (g[t].__origin = s.__origin));
    }
  return l !== void 0 && Array.isArray(g) ? g.filter((t) => !t || !t.__ctrl) : g;
}
function deepCopy(g) {
  return deepExtend({}, { value: g }).value;
}
function toCase(g) {
  const b = g.replace(/(-[a-z])/g, function(l) {
    return l.replace("-", "").toLocaleUpperCase();
  });
  return lower(b);
}
function lower(g) {
  return g.replace(g[0], g[0].toLowerCase());
}
let id = 0;
function uniqueId() {
  return "F" + Math.random().toString(36).substr(3, 3) + Number(`${Date.now()}${++id}`).toString(36);
}
function format(g, b, l) {
  return `[form-create ${g}]: ${b}` + (l ? `

rule: ` + JSON.stringify(l.getRule ? l.getRule() : l) : "");
}
function err(g, b) {
  console.error(format("err", g, b));
}
const PREFIX = "[[FORM-CREATE-PREFIX-", SUFFIX = "-FORM-CREATE-SUFFIX]]", $T = "$FN:", $TX = "$FNX:", FUNCTION = "function";
function makeFn(fn) {
  return eval("(" + FUNCTION + "(){return " + fn + " })()");
}
function parseFn(g, b) {
  if (g && is.String(g) && g.length > 4) {
    let l = g.trim(), o = !1;
    try {
      if (l.indexOf(SUFFIX) > 0 && l.indexOf(PREFIX) === 0)
        l = l.replace(SUFFIX, "").replace(PREFIX, ""), o = !0;
      else if (l.indexOf($T) === 0)
        l = l.replace($T, ""), o = !0;
      else {
        if (l.indexOf($TX) === 0)
          return l = makeFn("function($inject){" + l.replace($TX, "") + "}"), l.__json = g, l.__inject = !0, l;
        !b && l.indexOf(FUNCTION) === 0 && l !== FUNCTION && (o = !0);
      }
      if (!o)
        return g;
      const t = makeFn(l.indexOf(FUNCTION) === -1 && l.indexOf("(") !== 0 ? FUNCTION + " " + l : l);
      return t.__json = g, t;
    } catch (t) {
      err(`\u89E3\u6790\u5931\u8D25:${l}

err: ${t}`);
      return;
    }
  }
  return g;
}
const ZhCn = {
  name: "zh-cn",
  form: {
    field: "\u5B57\u6BB5 ID",
    title: "\u5B57\u6BB5\u540D\u79F0",
    info: "\u63D0\u793A\u4FE1\u606F",
    show: "\u5728\u5217\u8868\u6807\u9898\u4E2D\u663E\u793A",
    control: "\u8054\u52A8\u6570\u636E",
    clear: "\u6E05\u7A7A\u503C",
    refresh: "\u5237\u65B0",
    labelPosition: "\u6807\u7B7E\u4F4D\u7F6E",
    size: "\u8868\u5355\u5C3A\u5BF8",
    labelWidth: "\u6807\u7B7E\u5BBD\u5EA6",
    hideRequiredAsterisk: "\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7",
    showMessage: "\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F",
    inlineMessage: "\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F",
    submitBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u63D0\u4EA4\u6309\u94AE",
    resetBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u91CD\u7F6E\u6309\u94AE",
    submit: "\u63D0\u4EA4",
    reset: "\u91CD\u7F6E"
  },
  validate: {
    type: "\u5B57\u6BB5\u7C7B\u578B",
    typePlaceholder: "\u8BF7\u9009\u62E9",
    trigger: "\u89E6\u53D1\u65B9\u5F0F",
    mode: "\u9A8C\u8BC1\u65B9\u5F0F",
    modes: {
      required: "\u5FC5\u586B",
      pattern: "\u6B63\u5219\u8868\u8FBE\u5F0F",
      min: "\u6700\u5C0F\u503C",
      max: "\u6700\u5927\u503C",
      len: "\u957F\u5EA6"
    },
    message: "\u9519\u8BEF\u4FE1\u606F",
    auto: "\u81EA\u52A8\u83B7\u53D6",
    autoRequired: "\u8BF7\u8F93\u5165{title}",
    autoMode: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684{title}",
    requiredPlaceholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u8BED"
  },
  tableOptions: {
    handle: "\u64CD\u4F5C",
    add: "\u6DFB\u52A0"
  },
  struct: {
    title: "\u7F16\u8F91\u6570\u636E",
    submit: "\u786E \u5B9A",
    cancel: "\u53D6 \u6D88",
    error: "\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u6709\u8BEF"
  },
  fetch: {
    action: "\u63A5\u53E3",
    actionRequired: "\u8BF7\u6570\u636E\u63A5\u53E3",
    method: "\u8BF7\u6C42\u65B9\u5F0F",
    dataType: "\u63D0\u4EA4\u65B9\u5F0F",
    data: "\u9644\u5E26\u6570\u636E",
    headers: "header\u4FE1\u606F",
    parse: "\u89E3\u6790\u51FD\u6570",
    parseInfo: "\u89E3\u6790\u63A5\u53E3\u6570\u636E\uFF0C\u8FD4\u56DE\u7EC4\u4EF6\u6240\u9700\u7684\u6570\u636E\u7ED3\u6784",
    parseValidate: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u89E3\u6790\u51FD\u6570"
  },
  designer: {
    preview: "\u9884 \u89C8",
    clear: "\u6E05 \u7A7A",
    clearConfirm: "\u6E05\u7A7A",
    clearCancel: "\u53D6\u6D88",
    clearConfirmTitle: "\u6E05\u7A7A\u540E\u5C06\u4E0D\u80FD\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u6E05\u7A7A\u5417\uFF1F",
    config: {
      component: "\u7EC4\u4EF6\u914D\u7F6E",
      form: "\u8868\u5355\u914D\u7F6E",
      rule: "\u57FA\u7840\u914D\u7F6E",
      props: "\u5C5E\u6027\u914D\u7F6E",
      validate: "\u9A8C\u8BC1\u914D\u7F6E"
    }
  },
  menu: {
    main: "\u8868\u5355\u7EC4\u4EF6",
    aide: "\u8F85\u52A9\u7EC4\u4EF6",
    layout: "\u5E03\u5C40\u7EC4\u4EF6"
  },
  props: {
    required: "\u662F\u5426\u5FC5\u586B",
    options: "\u9009\u9879\u6570\u636E",
    option: "\u9009\u9879",
    optionsType: {
      json: "JSON\u6570\u636E",
      fetch: "\u63A5\u53E3\u6570\u636E",
      struct: "\u9759\u6001\u6570\u636E"
    }
  },
  components: {
    radio: {
      name: "\u5355\u9009\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        type: "\u6309\u94AE\u5F62\u5F0F",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    checkbox: {
      name: "\u591A\u9009\u6846",
      props: {
        type: "\u6309\u94AE\u7C7B\u578B",
        disabled: "\u662F\u5426\u7981\u7528",
        min: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        max: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    input: {
      name: "\u8F93\u5165\u6846",
      props: {
        type: "\u7C7B\u578B",
        maxlength: "\u6700\u5927\u8F93\u5165\u957F\u5EA6",
        minlength: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
        showWordLimit: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        clearable: "\u662F\u5426\u53EF\u6E05\u7A7A",
        showPassword: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807",
        disabled: "\u7981\u7528",
        prefixIcon: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807",
        suffixIcon: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807",
        rowInfo: '\u53EA\u5BF9 type="textarea" \u6709\u6548',
        rows: "\u8F93\u5165\u6846\u884C\u6570",
        autocomplete: "\u81EA\u52A8\u8865\u5168",
        readonly: "\u662F\u5426\u53EA\u8BFB",
        resize: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
        autofocus: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"
      }
    },
    inputNumber: {
      name: "\u8BA1\u6570\u5668",
      props: {
        min: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C",
        max: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C",
        step: "\u8BA1\u6570\u5668\u6B65\u957F",
        stepStrictly: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570",
        disabled: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668",
        controls: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
        controlsPosition: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
        placeholder: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder"
      }
    },
    select: {
      name: "\u9009\u62E9\u5668",
      props: {
        multiple: "\u662F\u5426\u591A\u9009",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879",
        collapseTags: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A",
        multipleLimit: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236",
        autocomplete: "autocomplete \u5C5E\u6027",
        placeholder: "\u5360\u4F4D\u7B26",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        allowCreate: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE",
        noMatchText: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57",
        noDataText: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57",
        reserveKeyword: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD",
        defaultFirstOption: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879",
        popperAppendToBody: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        automaticDropdown: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355"
      }
    },
    switch: {
      name: "\u5F00\u5173",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        width: "\u5BBD\u5EA6\uFF08px\uFF09",
        activeText: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        inactiveText: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        activeValue: "switch \u6253\u5F00\u65F6\u7684\u503C",
        inactiveValue: "switch \u5173\u95ED\u65F6\u7684\u503C",
        activeColor: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272",
        inactiveColor: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
      }
    },
    slider: {
      name: "\u6ED1\u5757",
      props: {
        min: "\u6700\u5C0F\u503C",
        max: "\u6700\u5927\u503C",
        disabled: "\u662F\u5426\u7981\u7528",
        step: "\u6B65\u957F",
        showInput: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548",
        showInputControls: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
        showStops: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9",
        range: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9",
        vertical: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F",
        height: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
      }
    },
    timePicker: {
      name: "\u65F6\u95F4\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        isRange: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9",
        arrowControl: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    datePicker: {
      name: "\u65E5\u671F\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        type: "\u663E\u793A\u7C7B\u578B",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        format: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        rangeSeparator: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26",
        unlinkPanels: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    rate: {
      name: "\u8BC4\u5206",
      props: {
        max: "\u6700\u5927\u5206\u503C",
        disabled: "\u662F\u5426\u4E3A\u53EA\u8BFB",
        allowHalf: "\u662F\u5426\u5141\u8BB8\u534A\u9009",
        voidColor: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        disabledVoidColor: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        voidIconClass: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        disabledVoidIconClass: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        showScore: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F",
        textColor: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272",
        scoreTemplate: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    },
    colorPicker: {
      name: "\u989C\u8272\u9009\u62E9\u5668",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        showAlpha: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9",
        colorFormat: "\u989C\u8272\u7684\u683C\u5F0F"
      }
    },
    row: {
      name: "\u6805\u683C\u5E03\u5C40",
      props: {
        gutter: "\u6805\u683C\u95F4\u9694",
        type: "flex\u5E03\u5C40\u6A21\u5F0F",
        justify: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
        align: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F"
      }
    },
    col: {
      name: "\u683C\u5B50",
      props: {
        span: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570",
        offset: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570",
        push: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570",
        pull: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570"
      }
    },
    tab: {
      name: "\u6807\u7B7E\u9875",
      props: {
        type: "\u98CE\u683C\u7C7B\u578B",
        closable: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED",
        tabPosition: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
        stretch: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00"
      }
    },
    "tab-pane": {
      name: "\u6807\u7B7E\u9875",
      props: {
        label: "\u9009\u9879\u5361\u6807\u9898",
        disabled: "\u662F\u5426\u7981\u7528",
        name: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D",
        lazy: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
      }
    },
    "el-divider": {
      name: "\u5206\u5272\u7EBF",
      props: {
        direction: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
        formCreateChild: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848",
        contentPosition: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E"
      }
    },
    cascader: {
      name: "\u7EA7\u8054\u9009\u62E9\u5668",
      props: {
        props: "\u914D\u7F6E\u9009\u9879",
        size: "\u5C3A\u5BF8",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879",
        showAllLevels: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        collapseTags: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag",
        separator: "\u9009\u9879\u5206\u9694\u7B26"
      }
    },
    upload: {
      name: "\u4E0A\u4F20",
      props: {
        uploadType: "\u4E0A\u4F20\u7C7B\u578B",
        action: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)",
        headers: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
        multiple: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6",
        data: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
        name: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D",
        withCredentials: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F",
        accept: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09",
        autoUpload: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
        disabled: "\u662F\u5426\u7981\u7528",
        limit: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570"
      }
    },
    "el-transfer": {
      name: "\u7A7F\u68AD\u6846",
      props: {
        data: "Transfer \u7684\u6570\u636E\u6E90",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        filterPlaceholder: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26",
        targetOrder: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
        titles: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
        buttonTexts: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
        format: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
        props: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
        leftDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
        rightDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4"
      }
    },
    tree: {
      name: "\u6811\u5F62\u63A7\u4EF6",
      props: {
        emptyText: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C",
        props: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        renderAfterExpand: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9",
        defaultExpandAll: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9",
        expandOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        checkOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002",
        autoExpandParent: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9",
        checkStrictly: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false",
        accordion: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00",
        indent: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20",
        iconClass: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807",
        nodeKey: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    },
    "el-alert": {
      name: "\u63D0\u793A",
      description: "description",
      props: {
        title: "\u6807\u9898",
        type: "\u4E3B\u9898",
        description: "\u8F85\u52A9\u6027\u6587\u5B57",
        closable: "\u662F\u5426\u53EF\u5173\u95ED",
        center: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D",
        closeText: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C",
        showIcon: "\u662F\u5426\u663E\u793A\u56FE\u6807",
        effect: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898"
      }
    },
    span: {
      name: "\u6587\u5B57",
      props: {
        formCreateTitle: "\u6807\u9898",
        formCreateChild: "\u5185\u5BB9"
      }
    },
    div: {
      name: "\u95F4\u8DDD",
      props: {
        height: "\u9AD8\u5EA6"
      }
    },
    "el-button": {
      name: "\u6309\u94AE",
      props: {
        formCreateChild: "\u5185\u5BB9",
        size: "\u5C3A\u5BF8",
        type: "\u7C7B\u578B",
        plain: "\u662F\u5426\u6734\u7D20\u6309\u94AE",
        round: "\u662F\u5426\u5706\u89D2\u6309\u94AE",
        circle: "\u662F\u5426\u5706\u5F62\u6309\u94AE",
        loading: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001",
        disabled: "\u662F\u5426\u7981\u7528\u72B6\u6001",
        icon: "\u56FE\u6807\u7C7B\u540D"
      }
    },
    "fc-editor": {
      name: "\u5BCC\u6587\u672C\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528"
      }
    }
  }
};
function makeRequiredRule() {
  return {
    type: "Required",
    field: "formCreate$required",
    title: "\u662F\u5426\u5FC5\u586B"
  };
}
function makeOptionsRule(g, b, l) {
  const o = [
    { label: g("props.optionsType.json"), value: 0 },
    { label: g("props.optionsType.fetch"), value: 1 }
  ], t = [
    {
      value: 0,
      rule: [
        {
          type: "Struct",
          field: "formCreate" + upper(b).replace(".", ">"),
          props: { defaultValue: [] }
        }
      ]
    },
    {
      value: 1,
      rule: [
        {
          type: "Fetch",
          field: "formCreateEffect>fetch",
          props: {
            to: b
          }
        }
      ]
    }
  ];
  return l !== !1 && (o.splice(0, 0, { label: g("props.optionsType.struct"), value: 2 }), t.push({
    value: 2,
    rule: [
      {
        type: "TableOptions",
        field: "formCreate" + upper(b).replace(".", ">"),
        props: { defaultValue: [] }
      }
    ]
  })), {
    type: "radio",
    title: g("props.options"),
    field: "_optionType",
    value: l !== !1 ? 2 : 0,
    options: o,
    props: {
      type: "button"
    },
    control: t
  };
}
function upper(g) {
  return g.replace(g[0], g[0].toLocaleUpperCase());
}
const toJSON = function(g) {
  const b = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(g));
  return b && _toJSON[b[1].toLowerCase()] ? _toJSON[b[1].toLowerCase()](g) : g;
}, _toJSON = {
  object: function(g) {
    var b = [];
    for (var l in g)
      !hasProperty(g, l) || b.push(
        toJSON(l) + ": " + (g[l] != null ? toJSON(g[l]) : "null")
      );
    return `{
 ` + b.join(`,
 `) + `
}`;
  },
  array: function(g) {
    for (var b = 0, l = []; b < g.length; b++)
      l[b] = g[b] != null ? toJSON(g[b]) : "null";
    return "[" + l.join(", ") + "]";
  },
  string: function(g) {
    for (var b = g.split(""), l = 0; l < b.length; l++) {
      var o = b[l];
      o >= " " ? o === "\\" ? b[l] = "\\\\" : o === '"' && (b[l] = '\\"') : b[l] = o === `
` ? "\\n" : o === "\r" ? "\\r" : o === "	" ? "\\t" : o === "\b" ? "\\b" : o === "\f" ? "\\f" : (o = o.charCodeAt(), "\\u00" + (o > 15 ? 1 : 0) + o % 16);
    }
    return '"' + b.join("") + '"';
  }
}, deepParseFn = function(g) {
  for (let b in g)
    if (Object.prototype.hasOwnProperty.call(g, b)) {
      let l = g[b];
      (Array.isArray(l) || is.Object(l)) && deepParseFn(l), is.String(l) && (g[b] = parseFn(l));
    }
  return g;
};
function get(g, b, l) {
  b = (b || "").split(".");
  let o = 0, t = b.length;
  for (; g != null && o < t; )
    g = g[b[o++]];
  return o && o === t && g !== void 0 ? g : l;
}
const buildTranslator = (g) => (b, l) => translate(b, l, unref(g)), translate = (g, b, l) => get(l, g, "").replace(
  /\{(\w+)\}/g,
  (o, t) => {
    var s;
    return `${(s = b == null ? void 0 : b[t]) != null ? s : `{${t}}`}`;
  }
), buildLocaleContext = (g) => {
  const b = computed(() => unref(g).name), l = computed(() => upper(toCase(b.value || ""))), o = isRef(g) ? g : ref(g);
  return {
    lang: b,
    name: l,
    locale: o,
    t: buildTranslator(g)
  };
}, useLocale = (g) => buildLocaleContext(computed(() => g.value || ZhCn)), localeProps = (g, b, l) => l.map((o) => (o.field === "formCreate$required" ? o.title = g("props.required") || o.title : o.field && o.field !== "_optionType" && (o.title = g("components." + b + "." + o.field) || o.title), o)), label$n = "\u5355\u9009\u6846", name$o = "radio", radio = {
  icon: "icon-radio",
  label: label$n,
  name: name$o,
  rule({ t: g }) {
    const b = g("props.option");
    return {
      type: name$o,
      field: uniqueId(),
      title: g("components.radio.name"),
      info: "",
      show: !1,
      effect: {
        fetch: ""
      },
      props: {},
      options: [1, 2].map((l) => ({
        label: b + l,
        value: l
      }))
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$o + ".props", [
      makeRequiredRule(),
      makeOptionsRule(b, "options"),
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u5F62\u5F0F",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "input", field: "textColor", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272" },
      {
        type: "input",
        field: "fill",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    ]);
  }
}, label$m = "\u591A\u9009\u6846", name$n = "checkbox", checkbox = {
  icon: "icon-checkbox",
  label: label$m,
  name: name$n,
  rule({ t: g }) {
    const b = g("props.option");
    return {
      type: name$n,
      field: uniqueId(),
      title: g("components.checkbox.name"),
      info: "",
      show: !1,
      effect: {
        fetch: ""
      },
      props: {},
      options: [1, 2].map((l) => ({
        label: b + l,
        value: l
      }))
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$n + ".props", [
      makeRequiredRule(),
      makeOptionsRule(b, "options"),
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u7C7B\u578B",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "inputNumber",
        field: "min",
        title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        props: { min: 0 }
      },
      { type: "inputNumber", field: "max", title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF", props: { min: 0 } },
      {
        type: "input",
        field: "textColor",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272"
      },
      { type: "input", field: "fill", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272" }
    ]);
  }
}, label$l = "\u8F93\u5165\u6846", name$m = "input", input = {
  icon: "icon-input",
  label: label$l,
  name: name$m,
  rule({ t: g }) {
    return {
      type: name$m,
      field: uniqueId(),
      title: g("components.input.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$m + ".props", [makeRequiredRule(), {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "text", value: "text" }, {
        label: "textarea",
        value: "textarea"
      }, { label: "number", value: "number" }, { label: "password", value: "password" }]
    }, { type: "inputNumber", field: "maxlength", title: "\u6700\u5927\u8F93\u5165\u957F\u5EA6", props: { min: 0 } }, {
      type: "inputNumber",
      field: "minlength",
      title: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
      props: { min: 0 }
    }, { type: "switch", field: "showWordLimit", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1" }, {
      type: "input",
      field: "placeholder",
      title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C"
    }, { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u6E05\u7A7A" }, {
      type: "switch",
      field: "showPassword",
      title: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807"
    }, { type: "switch", field: "disabled", title: "\u7981\u7528" }, {
      type: "input",
      field: "prefixIcon",
      title: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807"
    }, { type: "input", field: "suffixIcon", title: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807" }, {
      type: "inputNumber",
      field: "rows",
      info: b("components.input.props.rowsInfo"),
      title: "\u8F93\u5165\u6846\u884C\u6570",
      props: { min: 0 }
    }, {
      type: "select",
      field: "autocomplete",
      title: "\u81EA\u52A8\u8865\u5168",
      options: [{ label: "on", value: "on" }, { label: "off", value: "off" }]
    }, { type: "switch", field: "readonly", title: "\u662F\u5426\u53EA\u8BFB" }, {
      type: "select",
      field: "resize",
      title: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
      options: [{ label: "none", value: "none" }, { label: "both", value: "both" }, {
        label: "horizontal",
        value: "horizontal"
      }, { label: "vertical", value: "vertical" }]
    }, { type: "switch", field: "autofocus", title: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9" }]);
  }
}, label$k = "\u8BA1\u6570\u5668", name$l = "inputNumber", number = {
  icon: "icon-number",
  label: label$k,
  name: name$l,
  rule({ t: g }) {
    return {
      type: name$l,
      field: uniqueId(),
      title: g("components.inputNumber.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$l + ".props", [makeRequiredRule(), {
      type: "inputNumber",
      field: "min",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C"
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C"
    }, { type: "inputNumber", field: "step", title: "\u8BA1\u6570\u5668\u6B65\u957F", props: { min: 0 } }, {
      type: "switch",
      field: "stepStrictly",
      title: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668" }, {
      type: "switch",
      field: "controls",
      title: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
      value: !0
    }, {
      type: "select",
      field: "controlsPosition",
      title: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
      options: [{ label: "default", value: "" }, { label: "right", value: "right" }]
    }, { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder" }]);
  }
}, label$j = "\u9009\u62E9\u5668", name$k = "select", select = {
  icon: "icon-select",
  label: label$j,
  name: name$k,
  rule({ t: g }) {
    const b = g("props.option");
    return {
      type: name$k,
      field: uniqueId(),
      title: g("components.select.name"),
      info: "",
      show: !1,
      effect: {
        fetch: ""
      },
      props: {},
      options: [1, 2].map((l) => ({
        label: b + l,
        value: l
      }))
    };
  },
  watch: {
    multiple({ rule: g }) {
      g.key = uniqueId();
    }
  },
  props(g, { t: b }) {
    return localeProps(b, name$k + ".props", [
      makeRequiredRule(),
      makeOptionsRule(b, "options"),
      { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "collapseTags",
        title: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A"
      },
      { type: "inputNumber", field: "multipleLimit", title: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236", props: { min: 0 } },
      {
        type: "input",
        field: "autocomplete",
        title: "autocomplete \u5C5E\u6027"
      },
      { type: "input", field: "placeholder", title: "\u5360\u4F4D\u7B26" },
      {
        type: "switch",
        field: "filterable",
        title: "\u662F\u5426\u53EF\u641C\u7D22"
      },
      { type: "switch", field: "allowCreate", title: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE" },
      {
        type: "input",
        field: "noMatchText",
        title: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57"
      },
      {
        type: "switch",
        field: "remote",
        title: "\u5176\u4E2D\u7684\u9009\u9879\u662F\u5426\u4ECE\u670D\u52A1\u5668\u8FDC\u7A0B\u52A0\u8F7D"
      },
      {
        type: "Struct",
        field: "remoteMethod",
        title: "\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5"
      },
      { type: "input", field: "noDataText", title: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57" },
      {
        type: "switch",
        field: "reserveKeyword",
        title: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD"
      },
      { type: "switch", field: "defaultFirstOption", title: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879" },
      {
        type: "switch",
        field: "popperAppendToBody",
        title: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        value: !0
      },
      { type: "switch", field: "automaticDropdown", title: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355" }
    ]);
  }
}, label$i = "\u5F00\u5173", name$j = "switch", _switch = {
  icon: "icon-switch",
  label: label$i,
  name: name$j,
  rule({ t: g }) {
    return {
      type: name$j,
      field: uniqueId(),
      title: g("components.switch.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$j + ".props", [makeRequiredRule(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "width",
      title: "\u5BBD\u5EA6\uFF08px\uFF09",
      props: { min: 0 }
    }, { type: "input", field: "activeText", title: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0" }, {
      type: "input",
      field: "inactiveText",
      title: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"
    }, { type: "input", field: "activeValue", title: "switch \u6253\u5F00\u65F6\u7684\u503C" }, {
      type: "input",
      field: "inactiveValue",
      title: "switch \u5173\u95ED\u65F6\u7684\u503C"
    }, { type: "input", field: "activeColor", title: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272" }, {
      type: "input",
      field: "inactiveColor",
      title: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
    }]);
  }
}, label$h = "\u6ED1\u5757", name$i = "slider", slider = {
  icon: "icon-slider",
  label: label$h,
  name: name$i,
  rule({ t: g }) {
    return {
      type: name$i,
      field: uniqueId(),
      title: g("components.slider.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$i + ".props", [makeRequiredRule(), {
      type: "inputNumber",
      field: "min",
      title: "\u6700\u5C0F\u503C",
      props: { min: 0 }
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u6700\u5927\u503C",
      props: { min: 0 }
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" }, {
      type: "inputNumber",
      field: "step",
      title: "\u6B65\u957F",
      props: { min: 0 }
    }, { type: "switch", field: "showInput", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548" }, {
      type: "switch",
      field: "showInputControls",
      title: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
      value: !0
    }, { type: "switch", field: "showStops", title: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9" }, {
      type: "switch",
      field: "range",
      title: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "vertical", title: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F" }, {
      type: "input",
      field: "height",
      title: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
    }]);
  }
}, label$g = "\u65F6\u95F4\u9009\u62E9\u5668", name$h = "timePicker", time = {
  icon: "icon-time",
  label: label$g,
  name: name$h,
  rule({ t: g }) {
    return {
      type: name$h,
      field: uniqueId(),
      title: g("components.timePicker.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$h + ".props", [makeRequiredRule(), {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "switch",
      field: "isRange",
      title: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "arrowControl", title: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9" }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }]
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, label$f = "\u65E5\u671F\u9009\u62E9\u5668", name$g = "datePicker", date = {
  icon: "icon-date",
  label: label$f,
  name: name$g,
  rule({ t: g }) {
    return {
      type: name$g,
      field: uniqueId(),
      title: g("components.datePicker.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$g + ".props", [makeRequiredRule(), {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, {
      type: "select",
      field: "type",
      title: "\u663E\u793A\u7C7B\u578B",
      options: [{ label: "year", value: "year" }, { label: "month", value: "month" }, {
        label: "date",
        value: "date"
      }, { label: "dates", value: "dates" }, { label: "week", value: "week" }, {
        label: "datetime",
        value: "datetime"
      }, { label: "datetimerange", value: "datetimerange" }, {
        label: "daterange",
        value: "daterange"
      }, { label: "monthrange", value: "monthrange" }]
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "format",
      title: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"
    }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }, { label: "left", value: "left" }]
    }, { type: "input", field: "rangeSeparator", title: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26" }, {
      type: "switch",
      field: "unlinkPanels",
      title: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8"
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, label$e = "\u8BC4\u5206", name$f = "rate", rate = {
  icon: "icon-rate",
  label: label$e,
  name: name$f,
  rule({ t: g }) {
    return {
      type: name$f,
      field: uniqueId(),
      title: g("components.rate.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$f + ".props", [
      makeRequiredRule(),
      { type: "inputNumber", field: "max", title: "\u6700\u5927\u5206\u503C", props: { min: 0 } },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u4E3A\u53EA\u8BFB"
      },
      { type: "switch", field: "allowHalf", title: "\u662F\u5426\u5141\u8BB8\u534A\u9009" },
      {
        type: "input",
        field: "voidColor",
        title: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272"
      },
      { type: "input", field: "disabledVoidColor", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272" },
      {
        type: "input",
        field: "voidIconClass",
        title: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D"
      },
      { type: "input", field: "disabledVoidIconClass", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D" },
      {
        type: "switch",
        field: "showScore",
        title: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F"
      },
      { type: "input", field: "textColor", title: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272" },
      {
        type: "input",
        field: "scoreTemplate",
        title: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    ]);
  }
}, label$d = "\u989C\u8272\u9009\u62E9\u5668", name$e = "colorPicker", color = {
  icon: "icon-color",
  label: label$d,
  name: name$e,
  rule({ t: g }) {
    return {
      type: name$e,
      field: uniqueId(),
      title: g("components.colorPicker.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$e + ".props", [makeRequiredRule(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "switch",
      field: "showAlpha",
      title: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9"
    }, {
      type: "select",
      field: "colorFormat",
      title: "\u989C\u8272\u7684\u683C\u5F0F",
      options: [{ label: "hsl", value: "hsl" }, { label: "hsv", value: "hsv" }, {
        label: "hex",
        value: "hex"
      }, { label: "rgb", value: "rgb" }]
    }]);
  }
}, label$c = "\u6805\u683C\u5E03\u5C40", name$d = "row", row = {
  icon: "icon-row",
  label: label$c,
  name: name$d,
  mask: !1,
  rule() {
    return {
      type: "FcRow",
      props: {},
      children: []
    };
  },
  children: "col",
  props(g, { t: b }) {
    return localeProps(b, name$d + ".props", [{
      type: "inputNumber",
      field: "gutter",
      title: "\u6805\u683C\u95F4\u9694",
      props: { min: 0 }
    }, {
      type: "switch",
      field: "type",
      title: "flex\u5E03\u5C40\u6A21\u5F0F",
      props: { activeValue: "flex", inactiveValue: "default" }
    }, {
      type: "select",
      field: "justify",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "start", value: "start" }, { label: "end", value: "end" }, {
        label: "center",
        value: "center"
      }, { label: "space-around", value: "space-around" }, { label: "space-between", value: "space-between" }]
    }, {
      type: "select",
      field: "align",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "top", value: "top" }, { label: "middle", value: "middle" }, {
        label: "bottom",
        value: "bottom"
      }]
    }]);
  }
}, name$c = "col", col = {
  name: name$c,
  label: "\u683C\u5B50",
  drag: !0,
  dragBtn: !1,
  inside: !0,
  mask: !1,
  rule() {
    return {
      type: name$c,
      props: { span: 12 },
      children: []
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$c + ".props", [
      { type: "slider", field: "span", title: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570", value: 12, props: { min: 0, max: 24 } },
      { type: "slider", field: "offset", title: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "push", title: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "pull", title: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } }
    ]);
  }
}, label$b = "\u6807\u7B7E\u9875", name$b = "tab-pane", tabPane = {
  label: label$b,
  name: name$b,
  inside: !0,
  drag: !0,
  dragBtn: !1,
  mask: !1,
  rule({ t: g }) {
    return {
      type: "el-tab-pane",
      props: { label: g("components.el-transfer.name") },
      children: []
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$b + ".props", [{ type: "input", field: "label", title: "\u9009\u9879\u5361\u6807\u9898" }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, { type: "input", field: "name", title: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D" }, {
      type: "switch",
      field: "lazy",
      title: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
    }]);
  }
}, label$a = "\u5206\u5272\u7EBF", name$a = "el-divider", divider = {
  icon: "icon-divider",
  label: label$a,
  name: name$a,
  rule() {
    return {
      type: name$a,
      props: {},
      wrap: { show: !1 },
      native: !1,
      children: [""]
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$a + ".props", [{
      type: "select",
      field: "direction",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
      options: [{ label: "horizontal", value: "horizontal" }, { label: "vertical", value: "vertical" }]
    }, {
      type: "input",
      field: "formCreateChild",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848"
    }, {
      type: "select",
      field: "contentPosition",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E",
      options: [{ label: "left", value: "left" }, { label: "right", value: "right" }, {
        label: "center",
        value: "center"
      }]
    }]);
  }
}, label$9 = "\u7EA7\u8054\u9009\u62E9\u5668", name$9 = "cascader", cascader = {
  icon: "icon-cascader",
  label: label$9,
  name: name$9,
  rule({ t: g }) {
    const b = g("props.option");
    return {
      type: name$9,
      field: uniqueId(),
      title: g("components.cascader.name"),
      info: "",
      show: !1,
      effect: {
        fetch: ""
      },
      props: {
        options: [1, 2].map((l) => ({
          label: b + l,
          value: l,
          children: []
        }))
      }
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$9 + ".props", [
      makeRequiredRule(),
      makeOptionsRule(b, "props.options", !1),
      {
        type: "Object",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879",
        props: {
          rule: localeProps(b, name$9 + ".propsOpt", [{
            type: "select",
            field: "expandTrigger",
            title: "\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F",
            options: [{ label: "click", value: "click" }, { label: "hover", value: "hover" }]
          }, { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" }, {
            type: "switch",
            field: "checkStrictly",
            title: "\u662F\u5426\u4E25\u683C\u7684\u9075\u5B88\u7236\u5B50\u8282\u70B9\u4E0D\u4E92\u76F8\u5173\u8054"
          }, {
            type: "switch",
            field: "emitPath",
            title: "\u5728\u9009\u4E2D\u8282\u70B9\u6539\u53D8\u65F6\uFF0C\u662F\u5426\u8FD4\u56DE\u7531\u8BE5\u8282\u70B9\u6240\u5728\u7684\u5404\u7EA7\u83DC\u5355\u7684\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u82E5\u8BBE\u7F6E false\uFF0C\u5219\u53EA\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C",
            value: !0
          }, { type: "input", field: "value", title: "\u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "value" }, {
            type: "input",
            field: "label",
            title: "\u6307\u5B9A\u9009\u9879\u6807\u7B7E\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "label"
          }, { type: "input", field: "children", title: "\u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "children" }, {
            type: "input",
            field: "disabled",
            title: "\u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "disabled"
          }, { type: "input", field: "leaf", title: "\u6307\u5B9A\u9009\u9879\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C" }])
        }
      },
      {
        type: "select",
        field: "size",
        title: "\u5C3A\u5BF8",
        options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
          label: "small",
          value: "small"
        }]
      },
      { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "showAllLevels",
        title: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        value: !0
      },
      { type: "switch", field: "collapseTags", title: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag" },
      {
        type: "input",
        field: "separator",
        title: "\u9009\u9879\u5206\u9694\u7B26"
      }
    ]);
  }
}, label$8 = "\u4E0A\u4F20", name$8 = "upload", upload = {
  icon: "icon-upload",
  label: label$8,
  name: name$8,
  rule({ t: g }) {
    return {
      type: name$8,
      field: uniqueId(),
      title: g("components.upload.name"),
      info: "",
      show: !1,
      props: {
        action: "",
        onSuccess(b, l) {
          l.url = b.data.url;
        }
      }
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$8 + ".props", [makeRequiredRule(), {
      type: "select",
      field: "uploadType",
      title: "\u4E0A\u4F20\u7C7B\u578B",
      value: "image",
      options: [{ label: "\u56FE\u7247", value: "image" }, {
        label: "\u6587\u4EF6",
        value: "file"
      }]
    }, { type: "input", field: "action", title: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)" }, {
      type: "Struct",
      field: "headers",
      title: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
      props: { defaultValue: {} }
    }, { type: "switch", field: "multiple", title: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6" }, {
      type: "Struct",
      field: "data",
      title: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
      props: { defaultValue: {} }
    }, { type: "input", field: "name", title: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D" }, {
      type: "switch",
      field: "withCredentials",
      title: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F"
    }, { type: "input", field: "accept", title: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09" }, {
      type: "switch",
      field: "autoUpload",
      title: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
      value: !0
    }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "limit",
      title: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570",
      props: { min: 0 }
    }]);
  }
}, label$7 = "\u7A7F\u68AD\u6846", name$7 = "el-transfer", generateData = () => {
  const g = [];
  for (let b = 1; b <= 15; b++)
    g.push({
      key: b,
      label: `\u5907\u9009\u9879 ${b}`,
      disabled: b % 4 === 0
    });
  return g;
}, transfer = {
  icon: "icon-transfer",
  label: label$7,
  name: name$7,
  rule({ t: g }) {
    return {
      type: name$7,
      field: uniqueId(),
      title: g("components.el-transfer.name"),
      info: "",
      show: !1,
      props: {
        data: generateData()
      }
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$7 + ".props", [{
      type: "Struct",
      field: "data",
      title: "Transfer \u7684\u6570\u636E\u6E90",
      props: { defaultValue: [] }
    }, { type: "switch", field: "filterable", title: "\u662F\u5426\u53EF\u641C\u7D22" }, {
      type: "input",
      field: "filterPlaceholder",
      title: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26"
    }, {
      type: "select",
      field: "targetOrder",
      title: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
      info: "\u82E5\u4E3A original\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A push\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A unshift\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D",
      options: [{ label: "original", value: "original" }, {
        label: "push",
        value: "push"
      }, { label: "unshift", value: "unshift" }]
    }, {
      type: "Struct",
      field: "titles",
      title: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "buttonTexts",
      title: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "format",
      title: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "props",
      title: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "leftDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "rightDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }]);
  }
}, label$6 = "\u6811\u5F62\u63A7\u4EF6", name$6 = "tree", tree = {
  icon: "icon-tree",
  label: label$6,
  name: name$6,
  rule({ t: g }) {
    const b = g("props.option");
    return {
      type: name$6,
      field: uniqueId(),
      title: g("components.tree.name"),
      info: "",
      show: !1,
      effect: {
        fetch: ""
      },
      props: {
        props: {
          label: "label"
        },
        showCheckbox: !0,
        nodeKey: "id",
        data: [1, 2].map((l) => ({
          label: b + l,
          id: l,
          children: []
        }))
      }
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$6 + ".props", [
      makeRequiredRule(),
      makeOptionsRule(b, "props.data", !1),
      { type: "input", field: "emptyText", title: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C" },
      {
        type: "Struct",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        props: { defaultValue: {} }
      },
      { type: "switch", field: "renderAfterExpand", title: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "defaultExpandAll",
        title: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9"
      },
      {
        type: "switch",
        field: "expandOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        value: !0
      },
      {
        type: "switch",
        field: "checkOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002"
      },
      { type: "switch", field: "autoExpandParent", title: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "checkStrictly",
        title: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false"
      },
      { type: "switch", field: "accordion", title: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00" },
      {
        type: "inputNumber",
        field: "indent",
        title: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20"
      },
      { type: "input", field: "iconClass", title: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807" },
      {
        type: "input",
        field: "nodeKey",
        title: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    ]);
  }
}, label$5 = "\u63D0\u793A", name$5 = "el-alert", alert = {
  icon: "icon-alert",
  label: label$5,
  name: name$5,
  rule({ t: g }) {
    return {
      type: name$5,
      props: {
        title: g("components.el-alert.name"),
        description: g("components.el-alert.description"),
        type: "success",
        effect: "dark"
      },
      children: []
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$5 + ".props", [{ type: "input", field: "title", title: "\u6807\u9898" }, {
      type: "select",
      field: "type",
      title: "\u4E3B\u9898",
      options: [{ label: "success", value: "success" }, { label: "warning", value: "warning" }, {
        label: "info",
        value: "info"
      }, { label: "error", value: "error" }]
    }, { type: "input", field: "description", title: "\u8F85\u52A9\u6027\u6587\u5B57" }, {
      type: "switch",
      field: "closable",
      title: "\u662F\u5426\u53EF\u5173\u95ED",
      value: !0
    }, { type: "switch", field: "center", title: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D", value: !0 }, {
      type: "input",
      field: "closeText",
      title: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C"
    }, { type: "switch", field: "showIcon", title: "\u662F\u5426\u663E\u793A\u56FE\u6807" }, {
      type: "select",
      field: "effect",
      title: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898",
      options: [{ label: "light", value: "light" }, { label: "dark", value: "dark" }]
    }]);
  }
}, label$4 = "\u6587\u5B57", name$4 = "span", span = {
  icon: "icon-span",
  label: label$4,
  name: name$4,
  rule({ t: g }) {
    return {
      type: name$4,
      title: g("components.span.name"),
      native: !1,
      children: [g("components.span.name")]
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$4 + ".props", [
      {
        type: "input",
        field: "formCreateTitle",
        title: "title"
      },
      {
        type: "input",
        field: "formCreateChild",
        title: "\u5185\u5BB9",
        props: {
          type: "textarea"
        }
      }
    ]);
  }
}, label$3 = "\u95F4\u8DDD", name$3 = "div", space = {
  icon: "icon-space",
  label: label$3,
  name: name$3,
  rule() {
    return {
      type: name$3,
      wrap: {
        show: !1
      },
      native: !1,
      style: {
        width: "100%",
        height: "20px"
      },
      children: []
    };
  },
  props(g, { t: b }) {
    return [
      {
        type: "object",
        field: "formCreateStyle",
        native: !0,
        props: {
          rule: localeProps(b, name$3 + ".props", [
            {
              type: "input",
              field: "height",
              title: "height"
            }
          ])
        }
      }
    ];
  }
}, label$2 = "\u6807\u7B7E\u9875", name$2 = "tab", tab = {
  icon: "icon-tab",
  label: label$2,
  name: name$2,
  children: "tab-pane",
  mask: !1,
  rule() {
    return {
      type: "el-tabs",
      style: "width:100%;",
      children: []
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$2 + ".props", [{
      type: "select",
      field: "type",
      title: "\u98CE\u683C\u7C7B\u578B",
      options: [{
        label: "card",
        value: "card"
      }, { label: "border-card", value: "border-card" }]
    }, { type: "switch", field: "closable", title: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED" }, {
      type: "select",
      field: "tabPosition",
      title: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
      options: [{ label: "top", value: "top" }, { label: "right", value: "right" }, {
        label: "left",
        value: "left"
      }]
    }, { type: "switch", field: "stretch", title: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00" }]);
  }
}, label$1 = "\u6309\u94AE", name$1 = "el-button", button = {
  icon: "icon-button",
  label: label$1,
  name: name$1,
  mask: !1,
  rule({ t: g }) {
    return {
      type: name$1,
      props: {},
      children: [g("components.el-button.name")]
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name$1 + ".props", [{
      type: "input",
      field: "formCreateChild",
      title: "\u5185\u5BB9"
    }, {
      type: "select",
      field: "size",
      title: "\u5C3A\u5BF8",
      options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
        label: "small",
        value: "small"
      }]
    }, {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "primary", value: "primary" }, {
        label: "success",
        value: "success"
      }, { label: "warning", value: "warning" }, { label: "danger", value: "danger" }, {
        label: "info",
        value: "info"
      }]
    }, { type: "switch", field: "plain", title: "\u662F\u5426\u6734\u7D20\u6309\u94AE" }, {
      type: "switch",
      field: "round",
      title: "\u662F\u5426\u5706\u89D2\u6309\u94AE"
    }, { type: "switch", field: "circle", title: "\u662F\u5426\u5706\u5F62\u6309\u94AE" }, {
      type: "switch",
      field: "loading",
      title: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u72B6\u6001" }, {
      type: "input",
      field: "icon",
      title: "\u56FE\u6807\u7C7B\u540D"
    }]);
  }
}, label = "\u5BCC\u6587\u672C\u6846", name = "fc-editor", editor = {
  icon: "icon-editor",
  label,
  name,
  rule({ t: g }) {
    return {
      type: name,
      field: uniqueId(),
      title: g("components.fc-editor.name"),
      info: "",
      show: !1,
      props: {}
    };
  },
  props(g, { t: b }) {
    return localeProps(b, name + ".props", [makeRequiredRule(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }]);
  }
}, ruleList = {
  [radio.name]: radio,
  [checkbox.name]: checkbox,
  [input.name]: input,
  [number.name]: number,
  [select.name]: select,
  [_switch.name]: _switch,
  [slider.name]: slider,
  [time.name]: time,
  [date.name]: date,
  [rate.name]: rate,
  [color.name]: color,
  [row.name]: row,
  [col.name]: col,
  [tab.name]: tab,
  [tabPane.name]: tabPane,
  [divider.name]: divider,
  [cascader.name]: cascader,
  [upload.name]: upload,
  [transfer.name]: transfer,
  [tree.name]: tree,
  [alert.name]: alert,
  [span.name]: span,
  [space.name]: space,
  [button.name]: button,
  [editor.name]: editor
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys$1(g, b) {
  var l = Object.keys(g);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(g);
    b && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(g, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function _objectSpread2$1(g) {
  for (var b = 1; b < arguments.length; b++) {
    var l = arguments[b] != null ? arguments[b] : {};
    b % 2 ? ownKeys$1(Object(l), !0).forEach(function(o) {
      _defineProperty$1(g, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(l)) : ownKeys$1(Object(l)).forEach(function(o) {
      Object.defineProperty(g, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return g;
}
function _typeof$1(g) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(b) {
    return typeof b;
  } : _typeof$1 = function(b) {
    return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
  }, _typeof$1(g);
}
function _defineProperty$1(g, b, l) {
  return b in g ? Object.defineProperty(g, b, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : g[b] = l, g;
}
function _extends$1() {
  return _extends$1 = Object.assign || function(g) {
    for (var b = 1; b < arguments.length; b++) {
      var l = arguments[b];
      for (var o in l)
        Object.prototype.hasOwnProperty.call(l, o) && (g[o] = l[o]);
    }
    return g;
  }, _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(g, b) {
  if (g == null)
    return {};
  var l = {}, o = Object.keys(g), t, s;
  for (s = 0; s < o.length; s++)
    t = o[s], !(b.indexOf(t) >= 0) && (l[t] = g[t]);
  return l;
}
function _objectWithoutProperties(g, b) {
  if (g == null)
    return {};
  var l = _objectWithoutPropertiesLoose(g, b), o, t;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(g);
    for (t = 0; t < s.length; t++)
      o = s[t], !(b.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(g, o) || (l[o] = g[o]));
  }
  return l;
}
var version = "1.14.0";
function userAgent(g) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(g);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Edge = userAgent(/Edge/i), FireFox = userAgent(/firefox/i), Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i), IOS = userAgent(/iP(ad|od|hone)/i), ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i), captureMode = {
  capture: !1,
  passive: !1
};
function on(g, b, l) {
  g.addEventListener(b, l, !IE11OrLess && captureMode);
}
function off(g, b, l) {
  g.removeEventListener(b, l, !IE11OrLess && captureMode);
}
function matches(g, b) {
  if (!!b) {
    if (b[0] === ">" && (b = b.substring(1)), g)
      try {
        if (g.matches)
          return g.matches(b);
        if (g.msMatchesSelector)
          return g.msMatchesSelector(b);
        if (g.webkitMatchesSelector)
          return g.webkitMatchesSelector(b);
      } catch {
        return !1;
      }
    return !1;
  }
}
function getParentOrHost(g) {
  return g.host && g !== document && g.host.nodeType ? g.host : g.parentNode;
}
function closest(g, b, l, o) {
  if (g) {
    l = l || document;
    do {
      if (b != null && (b[0] === ">" ? g.parentNode === l && matches(g, b) : matches(g, b)) || o && g === l)
        return g;
      if (g === l)
        break;
    } while (g = getParentOrHost(g));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(g, b, l) {
  if (g && b)
    if (g.classList)
      g.classList[l ? "add" : "remove"](b);
    else {
      var o = (" " + g.className + " ").replace(R_SPACE, " ").replace(" " + b + " ", " ");
      g.className = (o + (l ? " " + b : "")).replace(R_SPACE, " ");
    }
}
function css(g, b, l) {
  var o = g && g.style;
  if (o) {
    if (l === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? l = document.defaultView.getComputedStyle(g, "") : g.currentStyle && (l = g.currentStyle), b === void 0 ? l : l[b];
    !(b in o) && b.indexOf("webkit") === -1 && (b = "-webkit-" + b), o[b] = l + (typeof l == "string" ? "" : "px");
  }
}
function matrix(g, b) {
  var l = "";
  if (typeof g == "string")
    l = g;
  else
    do {
      var o = css(g, "transform");
      o && o !== "none" && (l = o + " " + l);
    } while (!b && (g = g.parentNode));
  var t = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return t && new t(l);
}
function find(g, b, l) {
  if (g) {
    var o = g.getElementsByTagName(b), t = 0, s = o.length;
    if (l)
      for (; t < s; t++)
        l(o[t], t);
    return o;
  }
  return [];
}
function getWindowScrollingElement() {
  var g = document.scrollingElement;
  return g || document.documentElement;
}
function getRect(g, b, l, o, t) {
  if (!(!g.getBoundingClientRect && g !== window)) {
    var s, u, d, f, c, S, p;
    if (g !== window && g.parentNode && g !== getWindowScrollingElement() ? (s = g.getBoundingClientRect(), u = s.top, d = s.left, f = s.bottom, c = s.right, S = s.height, p = s.width) : (u = 0, d = 0, f = window.innerHeight, c = window.innerWidth, S = window.innerHeight, p = window.innerWidth), (b || l) && g !== window && (t = t || g.parentNode, !IE11OrLess))
      do
        if (t && t.getBoundingClientRect && (css(t, "transform") !== "none" || l && css(t, "position") !== "static")) {
          var C = t.getBoundingClientRect();
          u -= C.top + parseInt(css(t, "border-top-width")), d -= C.left + parseInt(css(t, "border-left-width")), f = u + s.height, c = d + s.width;
          break;
        }
      while (t = t.parentNode);
    if (o && g !== window) {
      var A = matrix(t || g), y = A && A.a, E = A && A.d;
      A && (u /= E, d /= y, p /= y, S /= E, f = u + S, c = d + p);
    }
    return {
      top: u,
      left: d,
      bottom: f,
      right: c,
      width: p,
      height: S
    };
  }
}
function isScrolledPast(g, b, l) {
  for (var o = getParentAutoScrollElement(g, !0), t = getRect(g)[b]; o; ) {
    var s = getRect(o)[l], u = void 0;
    if (l === "top" || l === "left" ? u = t >= s : u = t <= s, !u)
      return o;
    if (o === getWindowScrollingElement())
      break;
    o = getParentAutoScrollElement(o, !1);
  }
  return !1;
}
function getChild(g, b, l, o) {
  for (var t = 0, s = 0, u = g.children; s < u.length; ) {
    if (u[s].style.display !== "none" && u[s] !== Sortable.ghost && (o || u[s] !== Sortable.dragged) && closest(u[s], l.draggable, g, !1)) {
      if (t === b)
        return u[s];
      t++;
    }
    s++;
  }
  return null;
}
function lastChild(g, b) {
  for (var l = g.lastElementChild; l && (l === Sortable.ghost || css(l, "display") === "none" || b && !matches(l, b)); )
    l = l.previousElementSibling;
  return l || null;
}
function index$1(g, b) {
  var l = 0;
  if (!g || !g.parentNode)
    return -1;
  for (; g = g.previousElementSibling; )
    g.nodeName.toUpperCase() !== "TEMPLATE" && g !== Sortable.clone && (!b || matches(g, b)) && l++;
  return l;
}
function getRelativeScrollOffset(g) {
  var b = 0, l = 0, o = getWindowScrollingElement();
  if (g)
    do {
      var t = matrix(g), s = t.a, u = t.d;
      b += g.scrollLeft * s, l += g.scrollTop * u;
    } while (g !== o && (g = g.parentNode));
  return [b, l];
}
function indexOfObject(g, b) {
  for (var l in g)
    if (!!g.hasOwnProperty(l)) {
      for (var o in b)
        if (b.hasOwnProperty(o) && b[o] === g[l][o])
          return Number(l);
    }
  return -1;
}
function getParentAutoScrollElement(g, b) {
  if (!g || !g.getBoundingClientRect)
    return getWindowScrollingElement();
  var l = g, o = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var t = css(l);
      if (l.clientWidth < l.scrollWidth && (t.overflowX == "auto" || t.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (t.overflowY == "auto" || t.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body)
          return getWindowScrollingElement();
        if (o || b)
          return l;
        o = !0;
      }
    }
  while (l = l.parentNode);
  return getWindowScrollingElement();
}
function extend(g, b) {
  if (g && b)
    for (var l in b)
      b.hasOwnProperty(l) && (g[l] = b[l]);
  return g;
}
function isRectEqual(g, b) {
  return Math.round(g.top) === Math.round(b.top) && Math.round(g.left) === Math.round(b.left) && Math.round(g.height) === Math.round(b.height) && Math.round(g.width) === Math.round(b.width);
}
var _throttleTimeout;
function throttle(g, b) {
  return function() {
    if (!_throttleTimeout) {
      var l = arguments, o = this;
      l.length === 1 ? g.call(o, l[0]) : g.apply(o, l), _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, b);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout), _throttleTimeout = void 0;
}
function scrollBy(g, b, l) {
  g.scrollLeft += b, g.scrollTop += l;
}
function clone(g) {
  var b = window.Polymer, l = window.jQuery || window.Zepto;
  return b && b.dom ? b.dom(g).cloneNode(!0) : l ? l(g).clone(!0)[0] : g.cloneNode(!0);
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var g = [], b;
  return {
    captureAnimationState: function() {
      if (g = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(t) {
          if (!(css(t, "display") === "none" || t === Sortable.ghost)) {
            g.push({
              target: t,
              rect: getRect(t)
            });
            var s = _objectSpread2$1({}, g[g.length - 1].rect);
            if (t.thisAnimationDuration) {
              var u = matrix(t, !0);
              u && (s.top -= u.f, s.left -= u.e);
            }
            t.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(o) {
      g.push(o);
    },
    removeAnimationState: function(o) {
      g.splice(indexOfObject(g, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var t = this;
      if (!this.options.animation) {
        clearTimeout(b), typeof o == "function" && o();
        return;
      }
      var s = !1, u = 0;
      g.forEach(function(d) {
        var f = 0, c = d.target, S = c.fromRect, p = getRect(c), C = c.prevFromRect, A = c.prevToRect, y = d.rect, E = matrix(c, !0);
        E && (p.top -= E.f, p.left -= E.e), c.toRect = p, c.thisAnimationDuration && isRectEqual(C, p) && !isRectEqual(S, p) && (y.top - p.top) / (y.left - p.left) === (S.top - p.top) / (S.left - p.left) && (f = calculateRealTime(y, C, A, t.options)), isRectEqual(p, S) || (c.prevFromRect = S, c.prevToRect = p, f || (f = t.options.animation), t.animate(c, y, p, f)), f && (s = !0, u = Math.max(u, f), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, f), c.thisAnimationDuration = f);
      }), clearTimeout(b), s ? b = setTimeout(function() {
        typeof o == "function" && o();
      }, u) : typeof o == "function" && o(), g = [];
    },
    animate: function(o, t, s, u) {
      if (u) {
        css(o, "transition", ""), css(o, "transform", "");
        var d = matrix(this.el), f = d && d.a, c = d && d.d, S = (t.left - s.left) / (f || 1), p = (t.top - s.top) / (c || 1);
        o.animatingX = !!S, o.animatingY = !!p, css(o, "transform", "translate3d(" + S + "px," + p + "px,0)"), this.forRepaintDummy = repaint(o), css(o, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), css(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          css(o, "transition", ""), css(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, u);
      }
    }
  };
}
function repaint(g) {
  return g.offsetWidth;
}
function calculateRealTime(g, b, l, o) {
  return Math.sqrt(Math.pow(b.top - g.top, 2) + Math.pow(b.left - g.left, 2)) / Math.sqrt(Math.pow(b.top - l.top, 2) + Math.pow(b.left - l.left, 2)) * o.animation;
}
var plugins = [], defaults = {
  initializeByDefault: !0
}, PluginManager = {
  mount: function g(b) {
    for (var l in defaults)
      defaults.hasOwnProperty(l) && !(l in b) && (b[l] = defaults[l]);
    plugins.forEach(function(o) {
      if (o.pluginName === b.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(b.pluginName, " more than once");
    }), plugins.push(b);
  },
  pluginEvent: function g(b, l, o) {
    var t = this;
    this.eventCanceled = !1, o.cancel = function() {
      t.eventCanceled = !0;
    };
    var s = b + "Global";
    plugins.forEach(function(u) {
      !l[u.pluginName] || (l[u.pluginName][s] && l[u.pluginName][s](_objectSpread2$1({
        sortable: l
      }, o)), l.options[u.pluginName] && l[u.pluginName][b] && l[u.pluginName][b](_objectSpread2$1({
        sortable: l
      }, o)));
    });
  },
  initializePlugins: function g(b, l, o, t) {
    plugins.forEach(function(d) {
      var f = d.pluginName;
      if (!(!b.options[f] && !d.initializeByDefault)) {
        var c = new d(b, l, b.options);
        c.sortable = b, c.options = b.options, b[f] = c, _extends$1(o, c.defaults);
      }
    });
    for (var s in b.options)
      if (!!b.options.hasOwnProperty(s)) {
        var u = this.modifyOption(b, s, b.options[s]);
        typeof u < "u" && (b.options[s] = u);
      }
  },
  getEventProperties: function g(b, l) {
    var o = {};
    return plugins.forEach(function(t) {
      typeof t.eventProperties == "function" && _extends$1(o, t.eventProperties.call(l[t.pluginName], b));
    }), o;
  },
  modifyOption: function g(b, l, o) {
    var t;
    return plugins.forEach(function(s) {
      !b[s.pluginName] || s.optionListeners && typeof s.optionListeners[l] == "function" && (t = s.optionListeners[l].call(b[s.pluginName], o));
    }), t;
  }
};
function dispatchEvent(g) {
  var b = g.sortable, l = g.rootEl, o = g.name, t = g.targetEl, s = g.cloneEl, u = g.toEl, d = g.fromEl, f = g.oldIndex, c = g.newIndex, S = g.oldDraggableIndex, p = g.newDraggableIndex, C = g.originalEvent, A = g.putSortable, y = g.extraEventProperties;
  if (b = b || l && l[expando], !!b) {
    var E, x = b.options, w = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !IE11OrLess && !Edge ? E = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (E = document.createEvent("Event"), E.initEvent(o, !0, !0)), E.to = u || l, E.from = d || l, E.item = t || l, E.clone = s, E.oldIndex = f, E.newIndex = c, E.oldDraggableIndex = S, E.newDraggableIndex = p, E.originalEvent = C, E.pullMode = A ? A.lastPutMode : void 0;
    var T = _objectSpread2$1(_objectSpread2$1({}, y), PluginManager.getEventProperties(o, b));
    for (var R in T)
      E[R] = T[R];
    l && l.dispatchEvent(E), x[w] && x[w].call(b, E);
  }
}
var _excluded = ["evt"], pluginEvent = function g(b, l) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = o.evt, s = _objectWithoutProperties(o, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(b, l, _objectSpread2$1({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent: t,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function() {
      cloneHidden = !0;
    },
    cloneNowShown: function() {
      cloneHidden = !1;
    },
    dispatchSortableEvent: function(d) {
      _dispatchEvent({
        sortable: l,
        name: d,
        originalEvent: t
      });
    }
  }, s));
};
function _dispatchEvent(g) {
  dispatchEvent(_objectSpread2$1({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, g));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = !1, ignoreNextClick = !1, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = !1, isCircumstantialInvert = !1, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = !1, savedInputChecked = [], documentExists = typeof document < "u", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!!documentExists) {
    if (IE11OrLess)
      return !1;
    var g = document.createElement("x");
    return g.style.cssText = "pointer-events:auto", g.style.pointerEvents === "auto";
  }
}(), _detectDirection = function g(b, l) {
  var o = css(b), t = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), s = getChild(b, 0, l), u = getChild(b, 1, l), d = s && css(s), f = u && css(u), c = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + getRect(s).width, S = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + getRect(u).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && d.float && d.float !== "none") {
    var p = d.float === "left" ? "left" : "right";
    return u && (f.clear === "both" || f.clear === p) ? "vertical" : "horizontal";
  }
  return s && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || c >= t && o[CSSFloatProperty] === "none" || u && o[CSSFloatProperty] === "none" && c + S > t) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function g(b, l, o) {
  var t = o ? b.left : b.top, s = o ? b.right : b.bottom, u = o ? b.width : b.height, d = o ? l.left : l.top, f = o ? l.right : l.bottom, c = o ? l.width : l.height;
  return t === d || s === f || t + u / 2 === d + c / 2;
}, _detectNearestEmptySortable = function g(b, l) {
  var o;
  return sortables.some(function(t) {
    var s = t[expando].options.emptyInsertThreshold;
    if (!(!s || lastChild(t))) {
      var u = getRect(t), d = b >= u.left - s && b <= u.right + s, f = l >= u.top - s && l <= u.bottom + s;
      if (d && f)
        return o = t;
    }
  }), o;
}, _prepareGroup = function g(b) {
  function l(s, u) {
    return function(d, f, c, S) {
      var p = d.options.group.name && f.options.group.name && d.options.group.name === f.options.group.name;
      if (s == null && (u || p))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (u && s === "clone")
        return s;
      if (typeof s == "function")
        return l(s(d, f, c, S), u)(d, f, c, S);
      var C = (u ? d : f).options.group.name;
      return s === !0 || typeof s == "string" && s === C || s.join && s.indexOf(C) > -1;
    };
  }
  var o = {}, t = b.group;
  (!t || _typeof$1(t) != "object") && (t = {
    name: t
  }), o.name = t.name, o.checkPull = l(t.pull, !0), o.checkPut = l(t.put), o.revertClone = t.revertClone, b.group = o;
}, _hideGhostForTarget = function g() {
  !supportCssPointerEvents && ghostEl && css(ghostEl, "display", "none");
}, _unhideGhostForTarget = function g() {
  !supportCssPointerEvents && ghostEl && css(ghostEl, "display", "");
};
documentExists && document.addEventListener("click", function(g) {
  if (ignoreNextClick)
    return g.preventDefault(), g.stopPropagation && g.stopPropagation(), g.stopImmediatePropagation && g.stopImmediatePropagation(), ignoreNextClick = !1, !1;
}, !0);
var nearestEmptyInsertDetectEvent = function g(b) {
  if (dragEl) {
    b = b.touches ? b.touches[0] : b;
    var l = _detectNearestEmptySortable(b.clientX, b.clientY);
    if (l) {
      var o = {};
      for (var t in b)
        b.hasOwnProperty(t) && (o[t] = b[t]);
      o.target = o.rootEl = l, o.preventDefault = void 0, o.stopPropagation = void 0, l[expando]._onDragOver(o);
    }
  }
}, _checkOutsideTargetEl = function g(b) {
  dragEl && dragEl.parentNode[expando]._isOutsideThisEl(b.target);
};
function Sortable(g, b) {
  if (!(g && g.nodeType && g.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(g));
  this.el = g, this.options = b = _extends$1({}, b), g[expando] = this;
  var l = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(g.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return _detectDirection(g, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(u, d) {
      u.setData("Text", d.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== !1 && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, g, l);
  for (var o in l)
    !(o in b) && (b[o] = l[o]);
  _prepareGroup(b);
  for (var t in this)
    t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  this.nativeDraggable = b.forceFallback ? !1 : supportDraggable, this.nativeDraggable && (this.options.touchStartThreshold = 1), b.supportPointer ? on(g, "pointerdown", this._onTapStart) : (on(g, "mousedown", this._onTapStart), on(g, "touchstart", this._onTapStart)), this.nativeDraggable && (on(g, "dragover", this), on(g, "dragenter", this)), sortables.push(this.el), b.store && b.store.get && this.sort(b.store.get(this) || []), _extends$1(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function g(b) {
    !this.el.contains(b) && b !== this.el && (lastTarget = null);
  },
  _getDirection: function g(b, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, b, l, dragEl) : this.options.direction;
  },
  _onTapStart: function g(b) {
    if (!!b.cancelable) {
      var l = this, o = this.el, t = this.options, s = t.preventOnFilter, u = b.type, d = b.touches && b.touches[0] || b.pointerType && b.pointerType === "touch" && b, f = (d || b).target, c = b.target.shadowRoot && (b.path && b.path[0] || b.composedPath && b.composedPath()[0]) || f, S = t.filter;
      if (_saveInputCheckedState(o), !dragEl && !(/mousedown|pointerdown/.test(u) && b.button !== 0 || t.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Safari && f && f.tagName.toUpperCase() === "SELECT") && (f = closest(f, t.draggable, o, !1), !(f && f.animated) && lastDownEl !== f)) {
        if (oldIndex = index$1(f), oldDraggableIndex = index$1(f, t.draggable), typeof S == "function") {
          if (S.call(this, b, f, this)) {
            _dispatchEvent({
              sortable: l,
              rootEl: c,
              name: "filter",
              targetEl: f,
              toEl: o,
              fromEl: o
            }), pluginEvent("filter", l, {
              evt: b
            }), s && b.cancelable && b.preventDefault();
            return;
          }
        } else if (S && (S = S.split(",").some(function(p) {
          if (p = closest(c, p.trim(), o, !1), p)
            return _dispatchEvent({
              sortable: l,
              rootEl: p,
              name: "filter",
              targetEl: f,
              fromEl: o,
              toEl: o
            }), pluginEvent("filter", l, {
              evt: b
            }), !0;
        }), S)) {
          s && b.cancelable && b.preventDefault();
          return;
        }
        t.handle && !closest(c, t.handle, o, !1) || this._prepareDragStart(b, d, f);
      }
    }
  },
  _prepareDragStart: function g(b, l, o) {
    var t = this, s = t.el, u = t.options, d = s.ownerDocument, f;
    if (o && !dragEl && o.parentNode === s) {
      var c = getRect(o);
      if (rootEl = s, dragEl = o, parentEl = dragEl.parentNode, nextEl = dragEl.nextSibling, lastDownEl = o, activeGroup = u.group, Sortable.dragged = dragEl, tapEvt = {
        target: dragEl,
        clientX: (l || b).clientX,
        clientY: (l || b).clientY
      }, tapDistanceLeft = tapEvt.clientX - c.left, tapDistanceTop = tapEvt.clientY - c.top, this._lastX = (l || b).clientX, this._lastY = (l || b).clientY, dragEl.style["will-change"] = "all", f = function() {
        if (pluginEvent("delayEnded", t, {
          evt: b
        }), Sortable.eventCanceled) {
          t._onDrop();
          return;
        }
        t._disableDelayedDragEvents(), !FireFox && t.nativeDraggable && (dragEl.draggable = !0), t._triggerDragStart(b, l), _dispatchEvent({
          sortable: t,
          name: "choose",
          originalEvent: b
        }), toggleClass(dragEl, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(S) {
        find(dragEl, S.trim(), _disableDraggable);
      }), on(d, "dragover", nearestEmptyInsertDetectEvent), on(d, "mousemove", nearestEmptyInsertDetectEvent), on(d, "touchmove", nearestEmptyInsertDetectEvent), on(d, "mouseup", t._onDrop), on(d, "touchend", t._onDrop), on(d, "touchcancel", t._onDrop), FireFox && this.nativeDraggable && (this.options.touchStartThreshold = 4, dragEl.draggable = !0), pluginEvent("delayStart", this, {
        evt: b
      }), u.delay && (!u.delayOnTouchOnly || l) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(d, "mouseup", t._disableDelayedDrag), on(d, "touchend", t._disableDelayedDrag), on(d, "touchcancel", t._disableDelayedDrag), on(d, "mousemove", t._delayedDragTouchMoveHandler), on(d, "touchmove", t._delayedDragTouchMoveHandler), u.supportPointer && on(d, "pointermove", t._delayedDragTouchMoveHandler), t._dragStartTimer = setTimeout(f, u.delay);
      } else
        f();
    }
  },
  _delayedDragTouchMoveHandler: function g(b) {
    var l = b.touches ? b.touches[0] : b;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function g() {
    dragEl && _disableDraggable(dragEl), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function g() {
    var b = this.el.ownerDocument;
    off(b, "mouseup", this._disableDelayedDrag), off(b, "touchend", this._disableDelayedDrag), off(b, "touchcancel", this._disableDelayedDrag), off(b, "mousemove", this._delayedDragTouchMoveHandler), off(b, "touchmove", this._delayedDragTouchMoveHandler), off(b, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function g(b, l) {
    l = l || b.pointerType == "touch" && b, !this.nativeDraggable || l ? this.options.supportPointer ? on(document, "pointermove", this._onTouchMove) : l ? on(document, "touchmove", this._onTouchMove) : on(document, "mousemove", this._onTouchMove) : (on(dragEl, "dragend", this), on(rootEl, "dragstart", this._onDragStart));
    try {
      document.selection ? _nextTick(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function g(b, l) {
    if (awaitingDragStarted = !1, rootEl && dragEl) {
      pluginEvent("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && on(document, "dragover", _checkOutsideTargetEl);
      var o = this.options;
      !b && toggleClass(dragEl, o.dragClass, !1), toggleClass(dragEl, o.ghostClass, !0), Sortable.active = this, b && this._appendGhost(), _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function g() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX, this._lastY = touchEvt.clientY, _hideGhostForTarget();
      for (var b = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY), l = b; b && b.shadowRoot && (b = b.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY), b !== l); )
        l = b;
      if (dragEl.parentNode[expando]._isOutsideThisEl(b), l)
        do {
          if (l[expando]) {
            var o = void 0;
            if (o = l[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: b,
              rootEl: l
            }), o && !this.options.dragoverBubble)
              break;
          }
          b = l;
        } while (l = l.parentNode);
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function g(b) {
    if (tapEvt) {
      var l = this.options, o = l.fallbackTolerance, t = l.fallbackOffset, s = b.touches ? b.touches[0] : b, u = ghostEl && matrix(ghostEl, !0), d = ghostEl && u && u.a, f = ghostEl && u && u.d, c = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), S = (s.clientX - tapEvt.clientX + t.x) / (d || 1) + (c ? c[0] - ghostRelativeParentInitialScroll[0] : 0) / (d || 1), p = (s.clientY - tapEvt.clientY + t.y) / (f || 1) + (c ? c[1] - ghostRelativeParentInitialScroll[1] : 0) / (f || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (o && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < o)
          return;
        this._onDragStart(b, !0);
      }
      if (ghostEl) {
        u ? (u.e += S - (lastDx || 0), u.f += p - (lastDy || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: S,
          f: p
        };
        var C = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        css(ghostEl, "webkitTransform", C), css(ghostEl, "mozTransform", C), css(ghostEl, "msTransform", C), css(ghostEl, "transform", C), lastDx = S, lastDy = p, touchEvt = s;
      }
      b.cancelable && b.preventDefault();
    }
  },
  _appendGhost: function g() {
    if (!ghostEl) {
      var b = this.options.fallbackOnBody ? document.body : rootEl, l = getRect(dragEl, !0, PositionGhostAbsolutely, !0, b), o = this.options;
      if (PositionGhostAbsolutely) {
        for (ghostRelativeParent = b; css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document; )
          ghostRelativeParent = ghostRelativeParent.parentNode;
        ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement ? (ghostRelativeParent === document && (ghostRelativeParent = getWindowScrollingElement()), l.top += ghostRelativeParent.scrollTop, l.left += ghostRelativeParent.scrollLeft) : ghostRelativeParent = getWindowScrollingElement(), ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(!0), toggleClass(ghostEl, o.ghostClass, !1), toggleClass(ghostEl, o.fallbackClass, !0), toggleClass(ghostEl, o.dragClass, !0), css(ghostEl, "transition", ""), css(ghostEl, "transform", ""), css(ghostEl, "box-sizing", "border-box"), css(ghostEl, "margin", 0), css(ghostEl, "top", l.top), css(ghostEl, "left", l.left), css(ghostEl, "width", l.width), css(ghostEl, "height", l.height), css(ghostEl, "opacity", "0.8"), css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed"), css(ghostEl, "zIndex", "100000"), css(ghostEl, "pointerEvents", "none"), Sortable.ghost = ghostEl, b.appendChild(ghostEl), css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function g(b, l) {
    var o = this, t = b.dataTransfer, s = o.options;
    if (pluginEvent("dragStart", this, {
      evt: b
    }), Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent("setupClone", this), Sortable.eventCanceled || (cloneEl = clone(dragEl), cloneEl.draggable = !1, cloneEl.style["will-change"] = "", this._hideClone(), toggleClass(cloneEl, this.options.chosenClass, !1), Sortable.clone = cloneEl), o.cloneId = _nextTick(function() {
      pluginEvent("clone", o), !Sortable.eventCanceled && (o.options.removeCloneOnHide || rootEl.insertBefore(cloneEl, dragEl), o._hideClone(), _dispatchEvent({
        sortable: o,
        name: "clone"
      }));
    }), !l && toggleClass(dragEl, s.dragClass, !0), l ? (ignoreNextClick = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (off(document, "mouseup", o._onDrop), off(document, "touchend", o._onDrop), off(document, "touchcancel", o._onDrop), t && (t.effectAllowed = "move", s.setData && s.setData.call(o, t, dragEl)), on(document, "drop", o), css(dragEl, "transform", "translateZ(0)")), awaitingDragStarted = !0, o._dragStartId = _nextTick(o._dragStarted.bind(o, l, b)), on(document, "selectstart", o), moved = !0, Safari && css(document.body, "user-select", "none");
  },
  _onDragOver: function g(b) {
    var l = this.el, o = b.target, t, s, u, d = this.options, f = d.group, c = Sortable.active, S = activeGroup === f, p = d.sort, C = putSortable || c, A, y = this, E = !1;
    if (_silent)
      return;
    function x(Z, te) {
      pluginEvent(Z, y, _objectSpread2$1({
        evt: b,
        isOwner: S,
        axis: A ? "vertical" : "horizontal",
        revert: u,
        dragRect: t,
        targetRect: s,
        canSort: p,
        fromSortable: C,
        target: o,
        completed: T,
        onMove: function(ne, fe) {
          return _onMove(rootEl, l, dragEl, t, ne, getRect(ne), b, fe);
        },
        changed: R
      }, te));
    }
    function w() {
      x("dragOverAnimationCapture"), y.captureAnimationState(), y !== C && C.captureAnimationState();
    }
    function T(Z) {
      return x("dragOverCompleted", {
        insertion: Z
      }), Z && (S ? c._hideClone() : c._showClone(y), y !== C && (toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : c.options.ghostClass, !1), toggleClass(dragEl, d.ghostClass, !0)), putSortable !== y && y !== Sortable.active ? putSortable = y : y === Sortable.active && putSortable && (putSortable = null), C === y && (y._ignoreWhileAnimating = o), y.animateAll(function() {
        x("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== C && (C.animateAll(), C._ignoreWhileAnimating = null)), (o === dragEl && !dragEl.animated || o === l && !o.animated) && (lastTarget = null), !d.dragoverBubble && !b.rootEl && o !== document && (dragEl.parentNode[expando]._isOutsideThisEl(b.target), !Z && nearestEmptyInsertDetectEvent(b)), !d.dragoverBubble && b.stopPropagation && b.stopPropagation(), E = !0;
    }
    function R() {
      newIndex = index$1(dragEl), newDraggableIndex = index$1(dragEl, d.draggable), _dispatchEvent({
        sortable: y,
        name: "change",
        toEl: l,
        newIndex,
        newDraggableIndex,
        originalEvent: b
      });
    }
    if (b.preventDefault !== void 0 && b.cancelable && b.preventDefault(), o = closest(o, d.draggable, l, !0), x("dragOver"), Sortable.eventCanceled)
      return E;
    if (dragEl.contains(b.target) || o.animated && o.animatingX && o.animatingY || y._ignoreWhileAnimating === o)
      return T(!1);
    if (ignoreNextClick = !1, c && !d.disabled && (S ? p || (u = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, c, dragEl, b)) && f.checkPut(this, c, dragEl, b))) {
      if (A = this._getDirection(b, o) === "vertical", t = getRect(dragEl), x("dragOverValid"), Sortable.eventCanceled)
        return E;
      if (u)
        return parentEl = rootEl, w(), this._hideClone(), x("revert"), Sortable.eventCanceled || (nextEl ? rootEl.insertBefore(dragEl, nextEl) : rootEl.appendChild(dragEl)), T(!0);
      var I = lastChild(l, d.draggable);
      if (!I || _ghostIsLast(b, A, this) && !I.animated) {
        if (I === dragEl)
          return T(!1);
        if (I && l === b.target && (o = I), o && (s = getRect(o)), _onMove(rootEl, l, dragEl, t, o, s, b, !!o) !== !1)
          return w(), l.appendChild(dragEl), parentEl = l, R(), T(!0);
      } else if (I && _ghostIsFirst(b, A, this)) {
        var P = getChild(l, 0, d, !0);
        if (P === dragEl)
          return T(!1);
        if (o = P, s = getRect(o), _onMove(rootEl, l, dragEl, t, o, s, b, !1) !== !1)
          return w(), l.insertBefore(dragEl, P), parentEl = l, R(), T(!0);
      } else if (o.parentNode === l) {
        s = getRect(o);
        var F = 0, H, W = dragEl.parentNode !== l, j = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || t, o.animated && o.toRect || s, A), z = A ? "top" : "left", L = isScrolledPast(o, "top", "top") || isScrolledPast(dragEl, "top", "top"), $ = L ? L.scrollTop : void 0;
        lastTarget !== o && (H = s[z], pastFirstInvertThresh = !1, isCircumstantialInvert = !j && d.invertSwap || W), F = _getSwapDirection(b, o, s, A, j ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, isCircumstantialInvert, lastTarget === o);
        var B;
        if (F !== 0) {
          var k = index$1(dragEl);
          do
            k -= F, B = parentEl.children[k];
          while (B && (css(B, "display") === "none" || B === ghostEl));
        }
        if (F === 0 || B === o)
          return T(!1);
        lastTarget = o, lastDirection = F;
        var M = o.nextElementSibling, Y = !1;
        Y = F === 1;
        var Q = _onMove(rootEl, l, dragEl, t, o, s, b, Y);
        if (Q !== !1)
          return (Q === 1 || Q === -1) && (Y = Q === 1), _silent = !0, setTimeout(_unsilent, 30), w(), Y && !M ? l.appendChild(dragEl) : o.parentNode.insertBefore(dragEl, Y ? M : o), L && scrollBy(L, 0, $ - L.scrollTop), parentEl = dragEl.parentNode, H !== void 0 && !isCircumstantialInvert && (targetMoveDistance = Math.abs(H - getRect(o)[z])), R(), T(!0);
      }
      if (l.contains(dragEl))
        return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function g() {
    off(document, "mousemove", this._onTouchMove), off(document, "touchmove", this._onTouchMove), off(document, "pointermove", this._onTouchMove), off(document, "dragover", nearestEmptyInsertDetectEvent), off(document, "mousemove", nearestEmptyInsertDetectEvent), off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function g() {
    var b = this.el.ownerDocument;
    off(b, "mouseup", this._onDrop), off(b, "touchend", this._onDrop), off(b, "pointerup", this._onDrop), off(b, "touchcancel", this._onDrop), off(document, "selectstart", this);
  },
  _onDrop: function g(b) {
    var l = this.el, o = this.options;
    if (newIndex = index$1(dragEl), newDraggableIndex = index$1(dragEl, o.draggable), pluginEvent("drop", this, {
      evt: b
    }), parentEl = dragEl && dragEl.parentNode, newIndex = index$1(dragEl), newDraggableIndex = index$1(dragEl, o.draggable), Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = !1, isCircumstantialInvert = !1, pastFirstInvertThresh = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), _cancelNextTick(this.cloneId), _cancelNextTick(this._dragStartId), this.nativeDraggable && (off(document, "drop", this), off(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Safari && css(document.body, "user-select", ""), css(dragEl, "transform", ""), b && (moved && (b.cancelable && b.preventDefault(), !o.dropBubble && b.stopPropagation()), ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl), (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") && cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl), dragEl && (this.nativeDraggable && off(dragEl, "dragend", this), _disableDraggable(dragEl), dragEl.style["will-change"] = "", moved && !awaitingDragStarted && toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, !1), toggleClass(dragEl, this.options.chosenClass, !1), _dispatchEvent({
      sortable: this,
      name: "unchoose",
      toEl: parentEl,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: b
    }), rootEl !== parentEl ? (newIndex >= 0 && (_dispatchEvent({
      rootEl: parentEl,
      name: "add",
      toEl: parentEl,
      fromEl: rootEl,
      originalEvent: b
    }), _dispatchEvent({
      sortable: this,
      name: "remove",
      toEl: parentEl,
      originalEvent: b
    }), _dispatchEvent({
      rootEl: parentEl,
      name: "sort",
      toEl: parentEl,
      fromEl: rootEl,
      originalEvent: b
    }), _dispatchEvent({
      sortable: this,
      name: "sort",
      toEl: parentEl,
      originalEvent: b
    })), putSortable && putSortable.save()) : newIndex !== oldIndex && newIndex >= 0 && (_dispatchEvent({
      sortable: this,
      name: "update",
      toEl: parentEl,
      originalEvent: b
    }), _dispatchEvent({
      sortable: this,
      name: "sort",
      toEl: parentEl,
      originalEvent: b
    })), Sortable.active && ((newIndex == null || newIndex === -1) && (newIndex = oldIndex, newDraggableIndex = oldDraggableIndex), _dispatchEvent({
      sortable: this,
      name: "end",
      toEl: parentEl,
      originalEvent: b
    }), this.save()))), this._nulling();
  },
  _nulling: function g() {
    pluginEvent("nulling", this), rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null, savedInputChecked.forEach(function(b) {
      b.checked = !0;
    }), savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function g(b) {
    switch (b.type) {
      case "drop":
      case "dragend":
        this._onDrop(b);
        break;
      case "dragenter":
      case "dragover":
        dragEl && (this._onDragOver(b), _globalDragOver(b));
        break;
      case "selectstart":
        b.preventDefault();
        break;
    }
  },
  toArray: function g() {
    for (var b = [], l, o = this.el.children, t = 0, s = o.length, u = this.options; t < s; t++)
      l = o[t], closest(l, u.draggable, this.el, !1) && b.push(l.getAttribute(u.dataIdAttr) || _generateId(l));
    return b;
  },
  sort: function g(b, l) {
    var o = {}, t = this.el;
    this.toArray().forEach(function(s, u) {
      var d = t.children[u];
      closest(d, this.options.draggable, t, !1) && (o[s] = d);
    }, this), l && this.captureAnimationState(), b.forEach(function(s) {
      o[s] && (t.removeChild(o[s]), t.appendChild(o[s]));
    }), l && this.animateAll();
  },
  save: function g() {
    var b = this.options.store;
    b && b.set && b.set(this);
  },
  closest: function g(b, l) {
    return closest(b, l || this.options.draggable, this.el, !1);
  },
  option: function g(b, l) {
    var o = this.options;
    if (l === void 0)
      return o[b];
    var t = PluginManager.modifyOption(this, b, l);
    typeof t < "u" ? o[b] = t : o[b] = l, b === "group" && _prepareGroup(o);
  },
  destroy: function g() {
    pluginEvent("destroy", this);
    var b = this.el;
    b[expando] = null, off(b, "mousedown", this._onTapStart), off(b, "touchstart", this._onTapStart), off(b, "pointerdown", this._onTapStart), this.nativeDraggable && (off(b, "dragover", this), off(b, "dragenter", this)), Array.prototype.forEach.call(b.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), sortables.splice(sortables.indexOf(this.el), 1), this.el = b = null;
  },
  _hideClone: function g() {
    if (!cloneHidden) {
      if (pluginEvent("hideClone", this), Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none"), this.options.removeCloneOnHide && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl), cloneHidden = !0;
    }
  },
  _showClone: function g(b) {
    if (b.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      if (pluginEvent("showClone", this), Sortable.eventCanceled)
        return;
      dragEl.parentNode == rootEl && !this.options.group.revertClone ? rootEl.insertBefore(cloneEl, dragEl) : nextEl ? rootEl.insertBefore(cloneEl, nextEl) : rootEl.appendChild(cloneEl), this.options.group.revertClone && this.animate(dragEl, cloneEl), css(cloneEl, "display", ""), cloneHidden = !1;
    }
  }
};
function _globalDragOver(g) {
  g.dataTransfer && (g.dataTransfer.dropEffect = "move"), g.cancelable && g.preventDefault();
}
function _onMove(g, b, l, o, t, s, u, d) {
  var f, c = g[expando], S = c.options.onMove, p;
  return window.CustomEvent && !IE11OrLess && !Edge ? f = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (f = document.createEvent("Event"), f.initEvent("move", !0, !0)), f.to = b, f.from = g, f.dragged = l, f.draggedRect = o, f.related = t || b, f.relatedRect = s || getRect(b), f.willInsertAfter = d, f.originalEvent = u, g.dispatchEvent(f), S && (p = S.call(c, f, u)), p;
}
function _disableDraggable(g) {
  g.draggable = !1;
}
function _unsilent() {
  _silent = !1;
}
function _ghostIsFirst(g, b, l) {
  var o = getRect(getChild(l.el, 0, l.options, !0)), t = 10;
  return b ? g.clientX < o.left - t || g.clientY < o.top && g.clientX < o.right : g.clientY < o.top - t || g.clientY < o.bottom && g.clientX < o.left;
}
function _ghostIsLast(g, b, l) {
  var o = getRect(lastChild(l.el, l.options.draggable)), t = 10;
  return b ? g.clientX > o.right + t || g.clientX <= o.right && g.clientY > o.bottom && g.clientX >= o.left : g.clientX > o.right && g.clientY > o.top || g.clientX <= o.right && g.clientY > o.bottom + t;
}
function _getSwapDirection(g, b, l, o, t, s, u, d) {
  var f = o ? g.clientY : g.clientX, c = o ? l.height : l.width, S = o ? l.top : l.left, p = o ? l.bottom : l.right, C = !1;
  if (!u) {
    if (d && targetMoveDistance < c * t) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? f > S + c * s / 2 : f < p - c * s / 2) && (pastFirstInvertThresh = !0), pastFirstInvertThresh)
        C = !0;
      else if (lastDirection === 1 ? f < S + targetMoveDistance : f > p - targetMoveDistance)
        return -lastDirection;
    } else if (f > S + c * (1 - t) / 2 && f < p - c * (1 - t) / 2)
      return _getInsertDirection(b);
  }
  return C = C || u, C && (f < S + c * s / 2 || f > p - c * s / 2) ? f > S + c / 2 ? 1 : -1 : 0;
}
function _getInsertDirection(g) {
  return index$1(dragEl) < index$1(g) ? 1 : -1;
}
function _generateId(g) {
  for (var b = g.tagName + g.className + g.src + g.href + g.textContent, l = b.length, o = 0; l--; )
    o += b.charCodeAt(l);
  return o.toString(36);
}
function _saveInputCheckedState(g) {
  savedInputChecked.length = 0;
  for (var b = g.getElementsByTagName("input"), l = b.length; l--; ) {
    var o = b[l];
    o.checked && savedInputChecked.push(o);
  }
}
function _nextTick(g) {
  return setTimeout(g, 0);
}
function _cancelNextTick(g) {
  return clearTimeout(g);
}
documentExists && on(document, "touchmove", function(g) {
  (Sortable.active || awaitingDragStarted) && g.cancelable && g.preventDefault();
});
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function g(b, l) {
    return !!closest(b, l, b, !1);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index: index$1,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(g) {
  return g[expando];
};
Sortable.mount = function() {
  for (var g = arguments.length, b = new Array(g), l = 0; l < g; l++)
    b[l] = arguments[l];
  b[0].constructor === Array && (b = b[0]), b.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Sortable.utils = _objectSpread2$1(_objectSpread2$1({}, Sortable.utils), o.utils)), PluginManager.mount(o);
  });
};
Sortable.create = function(g, b) {
  return new Sortable(g, b);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = !1, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function g() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var b in this)
      b.charAt(0) === "_" && typeof this[b] == "function" && (this[b] = this[b].bind(this));
  }
  return g.prototype = {
    dragStarted: function(l) {
      var o = l.originalEvent;
      this.sortable.nativeDraggable ? on(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? on(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? on(document, "touchmove", this._handleFallbackAutoScroll) : on(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var o = l.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? off(document, "dragover", this._handleAutoScroll) : (off(document, "pointermove", this._handleFallbackAutoScroll), off(document, "touchmove", this._handleFallbackAutoScroll), off(document, "mousemove", this._handleFallbackAutoScroll)), clearPointerElemChangedInterval(), clearAutoScrolls(), cancelThrottle();
    },
    nulling: function() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null, autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, o) {
      var t = this, s = (l.touches ? l.touches[0] : l).clientX, u = (l.touches ? l.touches[0] : l).clientY, d = document.elementFromPoint(s, u);
      if (touchEvt$1 = l, o || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(l, this.options, d, o);
        var f = getParentAutoScrollElement(d, !0);
        scrolling && (!pointerElemChangedInterval || s !== lastAutoScrollX || u !== lastAutoScrollY) && (pointerElemChangedInterval && clearPointerElemChangedInterval(), pointerElemChangedInterval = setInterval(function() {
          var c = getParentAutoScrollElement(document.elementFromPoint(s, u), !0);
          c !== f && (f = c, clearAutoScrolls()), autoScroll(l, t.options, c, o);
        }, 10), lastAutoScrollX = s, lastAutoScrollY = u);
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(d, !0) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(l, this.options, getParentAutoScrollElement(d, !1), !1);
      }
    }
  }, _extends$1(g, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(g) {
    clearInterval(g.pid);
  }), autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(g, b, l, o) {
  if (!!b.scroll) {
    var t = (g.touches ? g.touches[0] : g).clientX, s = (g.touches ? g.touches[0] : g).clientY, u = b.scrollSensitivity, d = b.scrollSpeed, f = getWindowScrollingElement(), c = !1, S;
    scrollRootEl !== l && (scrollRootEl = l, clearAutoScrolls(), scrollEl = b.scroll, S = b.scrollFn, scrollEl === !0 && (scrollEl = getParentAutoScrollElement(l, !0)));
    var p = 0, C = scrollEl;
    do {
      var A = C, y = getRect(A), E = y.top, x = y.bottom, w = y.left, T = y.right, R = y.width, I = y.height, P = void 0, F = void 0, H = A.scrollWidth, W = A.scrollHeight, j = css(A), z = A.scrollLeft, L = A.scrollTop;
      A === f ? (P = R < H && (j.overflowX === "auto" || j.overflowX === "scroll" || j.overflowX === "visible"), F = I < W && (j.overflowY === "auto" || j.overflowY === "scroll" || j.overflowY === "visible")) : (P = R < H && (j.overflowX === "auto" || j.overflowX === "scroll"), F = I < W && (j.overflowY === "auto" || j.overflowY === "scroll"));
      var $ = P && (Math.abs(T - t) <= u && z + R < H) - (Math.abs(w - t) <= u && !!z), B = F && (Math.abs(x - s) <= u && L + I < W) - (Math.abs(E - s) <= u && !!L);
      if (!autoScrolls[p])
        for (var k = 0; k <= p; k++)
          autoScrolls[k] || (autoScrolls[k] = {});
      (autoScrolls[p].vx != $ || autoScrolls[p].vy != B || autoScrolls[p].el !== A) && (autoScrolls[p].el = A, autoScrolls[p].vx = $, autoScrolls[p].vy = B, clearInterval(autoScrolls[p].pid), ($ != 0 || B != 0) && (c = !0, autoScrolls[p].pid = setInterval(function() {
        o && this.layer === 0 && Sortable.active._onTouchMove(touchEvt$1);
        var M = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * d : 0, Y = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * d : 0;
        typeof S == "function" && S.call(Sortable.dragged.parentNode[expando], Y, M, g, touchEvt$1, autoScrolls[this.layer].el) !== "continue" || scrollBy(autoScrolls[this.layer].el, Y, M);
      }.bind({
        layer: p
      }), 24))), p++;
    } while (b.bubbleScroll && C !== f && (C = getParentAutoScrollElement(C, !1)));
    scrolling = c;
  }
}, 30), drop = function g(b) {
  var l = b.originalEvent, o = b.putSortable, t = b.dragEl, s = b.activeSortable, u = b.dispatchSortableEvent, d = b.hideGhostForTarget, f = b.unhideGhostForTarget;
  if (!!l) {
    var c = o || s;
    d();
    var S = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, p = document.elementFromPoint(S.clientX, S.clientY);
    f(), c && !c.el.contains(p) && (u("spill"), this.onSpill({
      dragEl: t,
      putSortable: o
    }));
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function g(b) {
    var l = b.oldDraggableIndex;
    this.startIndex = l;
  },
  onSpill: function g(b) {
    var l = b.dragEl, o = b.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var t = getChild(this.sortable.el, this.startIndex, this.options);
    t ? this.sortable.el.insertBefore(l, t) : this.sortable.el.appendChild(l), this.sortable.animateAll(), o && o.animateAll();
  },
  drop
};
_extends$1(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function g(b) {
    var l = b.dragEl, o = b.putSortable, t = o || this.sortable;
    t.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), t.animateAll();
  },
  drop
};
_extends$1(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
function removeNode(g) {
  g.parentElement !== null && g.parentElement.removeChild(g);
}
function insertNodeAt(g, b, l) {
  const o = l === 0 ? g.children[0] : g.children[l - 1].nextSibling;
  g.insertBefore(b, o);
}
function getConsole() {
  return typeof window < "u" ? window.console : global.console;
}
const console$1 = getConsole();
function cached(g) {
  const b = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return b[o] || (b[o] = g(o));
  };
}
const regex = /-(\w)/g, camelize = cached((g) => g.replace(regex, (b, l) => l.toUpperCase())), manageAndEmit$1 = ["Start", "Add", "Remove", "Update", "End"], emit$1 = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], manage$1 = ["Move"], eventHandlerNames = [manage$1, manageAndEmit$1, emit$1].flatMap((g) => g).map((g) => `on${g}`), events = {
  manage: manage$1,
  manageAndEmit: manageAndEmit$1,
  emit: emit$1
};
function isReadOnly(g) {
  return eventHandlerNames.indexOf(g) !== -1;
}
const tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function isHtmlTag(g) {
  return tags.includes(g);
}
function isTransition(g) {
  return ["transition-group", "TransitionGroup"].includes(g);
}
function isHtmlAttribute(g) {
  return ["id", "class", "role", "style"].includes(g) || g.startsWith("data-") || g.startsWith("aria-") || g.startsWith("on");
}
function project(g) {
  return g.reduce((b, [l, o]) => (b[l] = o, b), {});
}
function getComponentAttributes({ $attrs: g, componentData: b = {} }) {
  return {
    ...project(
      Object.entries(g).filter(([o, t]) => isHtmlAttribute(o))
    ),
    ...b
  };
}
function createSortableOption({ $attrs: g, callBackBuilder: b }) {
  const l = project(getValidSortableEntries(g));
  Object.entries(b).forEach(([t, s]) => {
    events[t].forEach((u) => {
      l[`on${u}`] = s(u);
    });
  });
  const o = `[data-draggable]${l.draggable || ""}`;
  return {
    ...l,
    draggable: o
  };
}
function getValidSortableEntries(g) {
  return Object.entries(g).filter(([b, l]) => !isHtmlAttribute(b)).map(([b, l]) => [camelize(b), l]).filter(([b, l]) => !isReadOnly(b));
}
const getHtmlElementFromNode = ({ el: g }) => g, addContext = (g, b) => g.__draggable_context = b, getContext = (g) => g.__draggable_context;
class ComponentStructure {
  constructor({
    nodes: { header: b, default: l, footer: o },
    root: t,
    realList: s
  }) {
    this.defaultNodes = l, this.children = [...b, ...l, ...o], this.externalComponent = t.externalComponent, this.rootTransition = t.transition, this.tag = t.tag, this.realList = s;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(b, l) {
    const { tag: o, children: t, _isRootComponent: s } = this;
    return b(o, l, s ? { default: () => t } : t);
  }
  updated() {
    const { defaultNodes: b, realList: l } = this;
    b.forEach((o, t) => {
      addContext(getHtmlElementFromNode(o), {
        element: l[t],
        index: t
      });
    });
  }
  getUnderlyingVm(b) {
    return getContext(b);
  }
  getVmIndexFromDomIndex(b, l) {
    const { defaultNodes: o } = this, { length: t } = o, s = l.children, u = s.item(b);
    if (u === null)
      return t;
    const d = getContext(u);
    if (d)
      return d.index;
    if (t === 0)
      return 0;
    const f = getHtmlElementFromNode(o[0]), c = [...s].findIndex(
      (S) => S === f
    );
    return b < c ? 0 : t;
  }
}
function getSlot(g, b) {
  const l = g[b];
  return l ? l() : [];
}
function computeNodes({ $slots: g, realList: b, getKey: l }) {
  const o = b || [], [t, s] = ["header", "footer"].map(
    (f) => getSlot(g, f)
  ), { item: u } = g;
  if (!u)
    throw new Error("draggable element must have an item slot");
  const d = o.flatMap(
    (f, c) => u({ element: f, index: c }).map((S) => (S.key = l(f), S.props = { ...S.props || {}, "data-draggable": !0 }, S))
  );
  if (d.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: t,
    footer: s,
    default: d
  };
}
function getRootInformation(g) {
  const b = isTransition(g), l = !isHtmlTag(g) && !b;
  return {
    transition: b,
    externalComponent: l,
    tag: l ? resolveComponent(g) : b ? TransitionGroup : g
  };
}
function computeComponentStructure({ $slots: g, tag: b, realList: l, getKey: o }) {
  const t = computeNodes({ $slots: g, realList: l, getKey: o }), s = getRootInformation(b);
  return new ComponentStructure({ nodes: t, root: s, realList: l });
}
function emit(g, b) {
  nextTick(() => this.$emit(g.toLowerCase(), b));
}
function manage(g) {
  return (b, l) => {
    if (this.realList !== null)
      return this[`onDrag${g}`](b, l);
  };
}
function manageAndEmit(g) {
  const b = manage.call(this, g);
  return (l, o) => {
    b.call(this, l, o), emit.call(this, g, l);
  };
}
let draggingElement = null;
const props = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (g) => g
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, emits = [
  "update:modelValue",
  "change",
  ...[...events.manageAndEmit, ...events.emit].map((g) => g.toLowerCase())
], draggableComponent = defineComponent({
  name: "draggable",
  inheritAttrs: !1,
  props,
  emits,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: g, $attrs: b, tag: l, componentData: o, realList: t, getKey: s } = this, u = computeComponentStructure({
        $slots: g,
        tag: l,
        realList: t,
        getKey: s
      });
      this.componentStructure = u;
      const d = getComponentAttributes({ $attrs: b, componentData: o });
      return u.render(h, d);
    } catch (g) {
      return this.error = !0, h("pre", { style: { color: "red" } }, g.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && console$1.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: g, $el: b, componentStructure: l } = this;
    l.updated();
    const o = createSortableOption({
      $attrs: g,
      callBackBuilder: {
        manageAndEmit: (s) => manageAndEmit.call(this, s),
        emit: (s) => emit.bind(this, s),
        manage: (s) => manage.call(this, s)
      }
    }), t = b.nodeType === 1 ? b : b.parentElement;
    this._sortable = new Sortable(t, o), this.targetDomElement = t, t.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: g } = this;
      return g || this.modelValue;
    },
    getKey() {
      const { itemKey: g } = this;
      return typeof g == "function" ? g : (b) => b[g];
    }
  },
  watch: {
    $attrs: {
      handler(g) {
        const { _sortable: b } = this;
        !b || getValidSortableEntries(g).forEach(([l, o]) => {
          b.option(l, o);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(g) {
      return this.componentStructure.getUnderlyingVm(g) || null;
    },
    getUnderlyingPotencialDraggableComponent(g) {
      return g.__draggable_component__;
    },
    emitChanges(g) {
      nextTick(() => this.$emit("change", g));
    },
    alterList(g) {
      if (this.list) {
        g(this.list);
        return;
      }
      const b = [...this.modelValue];
      g(b), this.$emit("update:modelValue", b);
    },
    spliceList() {
      const g = (b) => b.splice(...arguments);
      this.alterList(g);
    },
    updatePosition(g, b) {
      const l = (o) => o.splice(b, 0, o.splice(g, 1)[0]);
      this.alterList(l);
    },
    getRelatedContextFromMoveEvent({ to: g, related: b }) {
      const l = this.getUnderlyingPotencialDraggableComponent(g);
      if (!l)
        return { component: l };
      const o = l.realList, t = { list: o, component: l };
      return g !== b && o ? { ...l.getUnderlyingVm(b) || {}, ...t } : t;
    },
    getVmIndexFromDomIndex(g) {
      return this.componentStructure.getVmIndexFromDomIndex(
        g,
        this.targetDomElement
      );
    },
    onDragStart(g) {
      this.context = this.getUnderlyingVm(g.item), g.item._underlying_vm_ = this.clone(this.context.element), draggingElement = g.item;
    },
    onDragAdd(g) {
      const b = g.item._underlying_vm_;
      if (b === void 0)
        return;
      removeNode(g.item);
      const l = this.getVmIndexFromDomIndex(g.newIndex);
      this.spliceList(l, 0, b);
      const o = { element: b, newIndex: l };
      this.emitChanges({ added: o });
    },
    onDragRemove(g) {
      if (insertNodeAt(this.$el, g.item, g.oldIndex), g.pullMode === "clone") {
        removeNode(g.clone);
        return;
      }
      const { index: b, element: l } = this.context;
      this.spliceList(b, 1);
      const o = { element: l, oldIndex: b };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(g) {
      removeNode(g.item), insertNodeAt(g.from, g.item, g.oldIndex);
      const b = this.context.index, l = this.getVmIndexFromDomIndex(g.newIndex);
      this.updatePosition(b, l);
      const o = { element: this.context.element, oldIndex: b, newIndex: l };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(g, b) {
      if (!g.element)
        return 0;
      const l = [...b.to.children].filter(
        (u) => u.style.display !== "none"
      ), o = l.indexOf(b.related), t = g.component.getVmIndexFromDomIndex(
        o
      );
      return l.indexOf(draggingElement) !== -1 || !b.willInsertAfter ? t : t + 1;
    },
    onDragMove(g, b) {
      const { move: l, realList: o } = this;
      if (!l || !o)
        return !0;
      const t = this.getRelatedContextFromMoveEvent(g), s = this.computeFutureIndex(t, g), u = {
        ...this.context,
        futureIndex: s
      }, d = {
        ...g,
        relatedContext: t,
        draggedContext: u
      };
      return l(d, b);
    },
    onDragEnd() {
      draggingElement = null;
    }
  }
});
function createMenu({ t: g }) {
  return [
    {
      name: "main",
      title: g("menu.main"),
      list: [
        input,
        number,
        radio,
        checkbox,
        select,
        _switch,
        time,
        date,
        slider,
        rate,
        color,
        cascader,
        upload,
        transfer,
        tree,
        editor
      ]
    },
    {
      name: "aide",
      title: g("menu.aide"),
      list: [
        alert,
        button,
        span,
        divider
      ]
    },
    {
      name: "layout",
      title: g("menu.layout"),
      list: [
        row,
        tab,
        space
      ]
    }
  ];
}
const viewForm = formCreate, designerForm = formCreate.factory(), FcDesigner_vue_vue_type_style_index_0_lang = "", _sfc_main$7 = defineComponent({
  name: "FcDesigner",
  components: {
    draggable: draggableComponent,
    DragForm: designerForm.$form(),
    ViewForm: viewForm.$form()
  },
  props: ["menu", "height", "config", "mask", "locale"],
  setup(g) {
    const { menu: b, height: l, config: o, mask: t, locale: s } = toRefs(g), u = getCurrentInstance();
    provide("fcx", ref({ active: null })), provide("designer", u);
    const d = computed(() => {
      const p = l.value;
      return p ? is.Number(p) ? `${p}px` : p : "100%";
    }), f = useLocale(s).t, c = reactive({
      cacheProps: {},
      moveRule: null,
      addRule: null,
      added: null,
      activeTab: "form",
      activeRule: null,
      children: ref([]),
      menuList: b.value || createMenu({ t: f }),
      showBaseRule: !1,
      visible: {
        preview: !1
      },
      preview: {
        state: !1,
        rule: [],
        option: {}
      },
      dragForm: ref({
        rule: [],
        api: {}
      }),
      form: {
        rule: form({ t: f }),
        api: {},
        option: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1
        },
        value: {
          form: {
            inline: !1,
            hideRequiredAsterisk: !1,
            labelPosition: "right",
            size: "small",
            labelWidth: "125px",
            formCreateSubmitBtn: !0,
            formCreateResetBtn: !1
          },
          submitBtn: !1
        }
      },
      baseForm: {
        rule: field({ t: f }),
        api: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = c.activeRule, p.setValue(p.options.formData || {});
          }
        }
      },
      validateForm: {
        rule: validate(),
        api: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = c.activeRule, p.setValue(p.options.formData || {});
          }
        }
      },
      propsForm: {
        rule: [],
        api: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = c.activeRule, p.setValue(p.options.formData || {});
          }
        }
      }
    });
    watch(() => c.preview.state, function(p) {
      p || nextTick(() => {
        c.preview.rule = c.preview.option = null;
      });
    }), watch(() => s.value, () => {
      const p = c.form.api.formData && c.form.api.formData(), C = c.baseForm.api.formData && c.baseForm.api.formData(), A = c.validateForm.api.formData && c.validateForm.api.formData();
      c.validateForm.rule = validate(), c.baseForm.rule = field({ t: f }), c.form.rule = form({ t: f }), nextTick(() => {
        p && c.form.api.setValue(p), C && c.baseForm.api.setValue(C), A && c.validateForm.api.setValue(A);
      });
    });
    const S = {
      makeChildren(p) {
        return reactive({ children: p }).children;
      },
      addMenu(p) {
        if (!p.name || !p.list)
          return;
        let C = !0;
        c.menuList.forEach((A, y) => {
          A.name === p.name && (c.menuList[y] = p, C = !1);
        }), C && c.menuList.push(p);
      },
      removeMenu(p) {
        [...c.menuList].forEach((C, A) => {
          C.name === p && c.menuList.splice(A, 1);
        });
      },
      setMenuItem(p, C) {
        c.menuList.forEach((A) => {
          A.name === p && (A.list = C);
        });
      },
      appendMenuItem(p, C) {
        c.menuList.forEach((A) => {
          A.name === p && A.list.push(C);
        });
      },
      removeMenuItem(p) {
        c.menuList.forEach((C) => {
          let A;
          is.String(p) ? [...C.list].forEach((y, E) => {
            y.name === p && C.list.splice(E, 1);
          }) : (A = C.list.indexOf(p)) > -1 && C.list.splice(A, 1);
        });
      },
      addComponent(p) {
        Array.isArray(p) ? p.forEach((C) => {
          ruleList[C.name] = C;
        }) : ruleList[p.name] = p;
      },
      getParent(p) {
        let C = p.__fc__.parent.rule;
        const A = C.config;
        return A && A.config.inside && (p = C, C = C.__fc__.parent.rule), { root: C, parent: p };
      },
      makeDrag(p, C, A, y) {
        return {
          type: "DragBox",
          wrap: {
            show: !1
          },
          col: {
            show: !1
          },
          inject: !0,
          props: {
            rule: {
              props: {
                tag: "el-col",
                group: p === !0 ? "default" : p,
                ghostClass: "ghost",
                animation: 150,
                handle: "._fc-drag-btn",
                emptyInsertThreshold: 0,
                direction: "vertical",
                itemKey: "type"
              }
            },
            tag: C
          },
          children: A,
          on: y
        };
      },
      clearDragRule() {
        S.setRule([]);
      },
      makeDragRule(p) {
        return S.makeChildren([S.makeDrag(!0, "draggable", p, {
          add: (C, A) => S.dragAdd(p, A),
          end: (C, A) => S.dragEnd(p, A),
          start: (C, A) => S.dragStart(p, A),
          unchoose: (C, A) => S.dragUnchoose(p, A)
        })]);
      },
      previewFc() {
        c.preview.state = !0, c.preview.rule = S.getRule(), c.preview.option = S.getOption();
      },
      getRule() {
        return S.parseRule(deepCopy(c.dragForm.api.rule[0].children));
      },
      getJson() {
        return designerForm.toJson(S.getRule());
      },
      getOption() {
        const p = deepCopy(c.form.value);
        return p.submitBtn = {
          show: p.form.formCreateSubmitBtn,
          innerText: f("form.submit")
        }, p.resetBtn = {
          show: p.form.formCreateResetBtn,
          innerText: f("form.reset")
        }, delete p.form.formCreateSubmitBtn, delete p.form.formCreateResetBtn, p;
      },
      setRule(p) {
        p || (p = []), c.children = S.makeChildren(S.loadRule(is.String(p) ? designerForm.parseJson(p) : deepCopy(p))), S.clearActiveRule(), c.dragForm.rule = S.makeDragRule(c.children);
      },
      clearActiveRule() {
        c.activeRule = null, c.activeTab = "form";
      },
      setOption(p) {
        let C = { ...p };
        C.form.formCreateSubmitBtn = !!C.submitBtn, C.form.formCreateResetBtn = !!C.resetBtn, C.submitBtn = !1, delete C.resetBtn, c.form.value = C;
      },
      loadRule(p) {
        const C = [];
        return p.forEach((A) => {
          if (is.String(A))
            return C.push(A);
          const y = ruleList[A._fc_drag_tag] || ruleList[A.type], E = A.children;
          if (A.children = [], A.control && (A._control = A.control, delete A.control), y) {
            if (A = S.makeRule(y, A), E) {
              let x = A.children[0].children;
              y.drag && (x = x[0].children), x.push(...S.loadRule(E));
            }
          } else
            E && (A.children = S.loadRule(E));
          C.push(A);
        }), C;
      },
      parseRule(p) {
        return [...p].reduce((C, A) => is.String(A) ? (C.push(A), C) : A.type === "DragBox" ? (C.push(...S.parseRule(A.children)), C) : A.type === "DragTool" && (A = A.children[0], A.type === "DragBox") ? (C.push(...S.parseRule(A.children)), C) : (A && (A = { ...A }, A.children.length && (A.children = S.parseRule(A.children)), delete A._id, delete A.key, A.config && delete A.config.config, A.effect && (delete A.effect._fc, delete A.effect._fc_tool), A._control && (A.control = A._control, delete A._control), Object.keys(A).filter((y) => Array.isArray(A[y]) && A[y].length === 0 || is.Object(A[y]) && Object.keys(A[y]).length === 0).forEach((y) => {
          delete A[y];
        }), C.push(A)), C), []);
      },
      baseChange(p, C, A, y) {
        var E, x, w;
        c.activeRule && y[c.activeRule._id] === c.activeRule && (c.activeRule[p] = C, (w = (x = (E = c.activeRule.config.config) == null ? void 0 : E.watch) == null ? void 0 : x["$" + p]) == null || w.call(x, {
          field: p,
          value: C,
          api: y,
          rule: c.activeRule
        }));
      },
      propRemoveField(p, C, A) {
        var y, E, x;
        if (c.activeRule && A[c.activeRule._id] === c.activeRule) {
          const w = p;
          if (c.dragForm.api.sync(c.activeRule), p.indexOf("formCreate") === 0) {
            if (p = p.replace("formCreate", ""), !p)
              return;
            p = lower(p), p.indexOf("effect") === 0 && p.indexOf(">") > -1 ? delete c.activeRule.effect[p.split(">")[1]] : p.indexOf("props") === 0 && p.indexOf(">") > -1 ? delete c.activeRule.props[p.split(">")[1]] : p === "child" ? delete c.activeRule.children[0] : p && (c.activeRule[p] = void 0);
          } else
            delete c.activeRule.props[p];
          (x = (E = (y = c.activeRule.config.config) == null ? void 0 : y.watch) == null ? void 0 : E[w]) == null || x.call(E, {
            field: w,
            value: void 0,
            api: A,
            rule: c.activeRule
          });
        }
      },
      propChange(p, C, A, y) {
        var E, x, w;
        if (c.activeRule && y[c.activeRule._id] === c.activeRule) {
          const T = p;
          if (p.indexOf("formCreate") === 0) {
            if (p = p.replace("formCreate", ""), !p)
              return;
            p = lower(p), p.indexOf("effect") === 0 && p.indexOf(">") > -1 ? c.activeRule.effect[p.split(">")[1]] = C : p.indexOf("props") === 0 && p.indexOf(">") > -1 ? c.activeRule.props[p.split(">")[1]] = C : p === "child" ? c.activeRule.children[0] = C : c.activeRule[p] = C;
          } else
            c.activeRule.props[p] = C;
          (w = (x = (E = c.activeRule.config.config) == null ? void 0 : E.watch) == null ? void 0 : x[T]) == null || w.call(x, {
            field: T,
            value: C,
            api: y,
            rule: c.activeRule
          });
        }
      },
      validateChange(p) {
        !c.activeRule || c.validateForm.api[c.activeRule._id] !== c.activeRule || (c.activeRule.validate = p.validate || [], c.dragForm.api.refreshValidate(), c.dragForm.api.nextTick(() => {
          c.dragForm.api.clearValidateState(c.activeRule.field);
        }));
      },
      toolActive(p) {
        c.activeRule && (delete c.propsForm.api[c.activeRule._id], delete c.baseForm.api[c.activeRule._id], delete c.validateForm.api[c.activeRule._id], delete c.dragForm.api.activeRule), c.activeRule = p, c.dragForm.api.activeRule = p, nextTick(() => {
          c.activeTab = "props", nextTick(() => {
            c.propsForm.api[c.activeRule._id] = c.activeRule, c.baseForm.api[c.activeRule._id] = c.activeRule, c.validateForm.api[c.activeRule._id] = c.activeRule;
          });
        }), c.cacheProps[p._id] || (c.cacheProps[p._id] = p.config.config.props(p, { t: f, api: c.dragForm.api })), c.propsForm.rule = c.cacheProps[p._id];
        const C = { ...p.props, formCreateChild: p.children[0] };
        Object.keys(p).forEach((A) => {
          ["effect", "config", "payload", "id", "type"].indexOf(A) < 0 && (C["formCreate" + upper(A)] = p[A]);
        }), ["props", "effect"].forEach((A) => {
          p[A] && Object.keys(p[A]).forEach((y) => {
            C["formCreate" + upper(A) + ">" + y] = p[A][y];
          });
        }), c.propsForm.options.formData = C, c.showBaseRule = hasProperty(p, "field") && p.input !== !1 && (!o.value || o.value.showBaseForm !== !1), c.showBaseRule && (c.baseForm.options.formData = {
          field: p.field,
          title: p.title || "",
          info: p.info,
          show: p.show || !1,
          _control: p._control
        }, c.validateForm.options.formData = { validate: p.validate ? [...p.validate] : [] });
      },
      dragStart(p) {
        c.moveRule = p, c.added = !1;
      },
      dragUnchoose(p, C) {
        c.addRule = {
          children: p,
          oldIndex: C.oldIndex
        };
      },
      dragAdd(p, C) {
        const A = C.newIndex, y = C.item._underlying_vm_;
        if (!y || y.__fc__) {
          if (c.addRule) {
            const E = c.addRule.children.splice(c.addRule.oldIndex, 1);
            p.splice(A, 0, E[0]);
          }
        } else {
          const E = S.makeRule(ruleList[y.name]);
          p.splice(A, 0, E);
        }
        c.added = !0;
      },
      dragEnd(p, { newIndex: C, oldIndex: A }) {
        if (!c.added && !(c.moveRule === p && C === A)) {
          const y = c.moveRule.splice(A, 1);
          p.splice(C, 0, y[0]);
        }
        c.moveRule = null, c.addRule = null, c.added = !1;
      },
      makeRule(p, C) {
        const A = C || p.rule({ t: f });
        A.config = { config: p }, A.effect || (A.effect = {}), A.effect._fc = !0, A._fc_drag_tag = p.name;
        let y;
        if (p.drag && A.children.push(y = S.makeDrag(p.drag, A.type, S.makeChildren([]), {
          end: (x, w) => S.dragEnd(x.self.children, w),
          add: (x, w) => S.dragAdd(x.self.children, w),
          start: (x, w) => S.dragStart(x.self.children, w),
          unchoose: (x, w) => S.dragUnchoose(x.self.children, w)
        })), p.children && !C) {
          const x = S.makeRule(ruleList[p.children]);
          (y || A).children.push(x);
        }
        const E = t.value !== void 0 ? t.value !== !1 : p.mask !== !1;
        return p.inside ? (A.children = S.makeChildren([{
          type: "DragTool",
          props: {
            dragBtn: p.dragBtn !== !1,
            children: p.children,
            mask: E
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: x }) => {
              const w = S.getParent(x).parent;
              w.__fc__.rm(), u.emit("delete", w), S.clearActiveRule();
            },
            create: ({ self: x }) => {
              const w = S.getParent(x);
              u.emit("create", w.parent), w.root.children.splice(w.root.children.indexOf(w.parent) + 1, 0, S.makeRule(w.parent.config.config));
            },
            addChild: ({ self: x }) => {
              const w = S.getParent(x), T = w.parent.config.config, R = ruleList[T.children];
              !R || (T.drag ? w.parent.children[0] : w.parent).children[0].children.push(S.makeRule(R));
            },
            copy: ({ self: x }) => {
              const w = S.getParent(x);
              u.emit("copy", w.parent), w.root.children.splice(w.root.children.indexOf(w.parent) + 1, 0, designerForm.copyRule(w.parent));
            },
            active: ({ self: x }) => {
              const w = S.getParent(x);
              u.emit("active", w.parent), S.toolActive(w.parent);
            }
          },
          children: A.children
        }]), A) : {
          type: "DragTool",
          props: {
            dragBtn: p.dragBtn !== !1,
            children: p.children,
            mask: E
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: x }) => {
              u.emit("delete", x.children[0]), x.__fc__.rm(), S.clearActiveRule();
            },
            create: ({ self: x }) => {
              u.emit("create", x.children[0]);
              const w = S.getParent(x);
              w.root.children.splice(w.root.children.indexOf(w.parent) + 1, 0, S.makeRule(x.children[0].config.config));
            },
            addChild: ({ self: x }) => {
              const w = x.children[0].config.config, T = ruleList[w.children];
              !T || (w.drag ? x.children[0] : x).children[0].children.push(S.makeRule(T));
            },
            copy: ({ self: x }) => {
              u.emit("copy", x.children[0]);
              const w = S.getParent(x);
              w.root.children.splice(w.root.children.indexOf(w.parent) + 1, 0, designerForm.copyRule(w.parent));
            },
            active: ({ self: x }) => {
              u.emit("active", x.children[0]), S.toolActive(x.children[0]);
            }
          },
          children: S.makeChildren([A])
        };
      }
    };
    return c.dragForm.rule = S.makeDragRule(S.makeChildren(c.children)), {
      ...toRefs(c),
      ...S,
      dragHeight: d,
      t: f
    };
  },
  created() {
    document.body.ondrop = (g) => {
      g.preventDefault(), g.stopPropagation();
    };
  }
}), _hoisted_1$5 = { class: "_fc-l-title" }, _hoisted_2$3 = { class: "_fc-l-item" }, _hoisted_3$3 = { class: "_fc-l-icon" }, _hoisted_4$2 = { class: "_fc-l-name" }, _hoisted_5$1 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-preview" }, null, -1), _hoisted_6$1 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-delete" }, null, -1), _hoisted_7$1 = { class: "_fc-m-drag" };
function _sfc_render$6(g, b, l, o, t, s) {
  const u = resolveComponent("draggable"), d = resolveComponent("el-aside"), f = resolveComponent("el-button"), c = resolveComponent("el-popconfirm"), S = resolveComponent("el-header"), p = resolveComponent("DragForm"), C = resolveComponent("ElMain"), A = resolveComponent("ElContainer"), y = resolveComponent("ElDivider"), E = resolveComponent("ElAside"), x = resolveComponent("ViewForm"), w = resolveComponent("ElDialog");
  return openBlock(), createBlock(A, {
    class: "_fc-designer",
    style: normalizeStyle("height:" + g.dragHeight)
  }, {
    default: withCtx(() => [
      createVNode(C, null, {
        default: withCtx(() => [
          createVNode(A, { style: { height: "100%" } }, {
            default: withCtx(() => [
              createVNode(d, {
                class: "_fc-l",
                width: "266px"
              }, {
                default: withCtx(() => [
                  (openBlock(!0), createElementBlock(Fragment, null, renderList(g.menuList, (T, R) => (openBlock(), createElementBlock("div", {
                    key: R,
                    class: "_fc-l-group"
                  }, [
                    createElementVNode("h4", _hoisted_1$5, toDisplayString(T.title), 1),
                    createVNode(u, {
                      group: { name: "default", pull: "clone", put: !1 },
                      sort: !1,
                      itemKey: "name",
                      list: T.list
                    }, {
                      item: withCtx(({ element: I }) => [
                        createElementVNode("div", _hoisted_2$3, [
                          createElementVNode("div", _hoisted_3$3, [
                            createElementVNode("i", {
                              class: normalizeClass(["fc-icon", I.icon || "icon-input"])
                            }, null, 2)
                          ]),
                          createElementVNode("span", _hoisted_4$2, toDisplayString(g.t("components." + I.name + ".name") || I.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["list"])
                  ]))), 128))
                ]),
                _: 1
              }),
              createVNode(A, { class: "_fc-m" }, {
                default: withCtx(() => [
                  createVNode(S, {
                    class: "_fc-m-tools",
                    height: "45"
                  }, {
                    default: withCtx(() => [
                      renderSlot(g.$slots, "handle"),
                      createVNode(f, {
                        type: "primary",
                        plain: "",
                        round: "",
                        size: "small",
                        onClick: g.previewFc
                      }, {
                        default: withCtx(() => [
                          _hoisted_5$1,
                          createTextVNode(" " + toDisplayString(g.t("designer.preview")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(c, {
                        title: g.t("designer.clearConfirmTitle"),
                        width: "200px",
                        "confirm-button-text": g.t("designer.clearConfirm"),
                        "cancel-button-text": g.t("designer.clearCancel"),
                        onConfirm: g.clearDragRule
                      }, {
                        reference: withCtx(() => [
                          createVNode(f, {
                            type: "danger",
                            plain: "",
                            round: "",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              _hoisted_6$1,
                              createTextVNode(toDisplayString(g.t("designer.clear")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title", "confirm-button-text", "cancel-button-text", "onConfirm"])
                    ]),
                    _: 3
                  }),
                  createVNode(C, { style: { background: "#F5F5F5", padding: "20px" } }, {
                    default: withCtx(() => [
                      createElementVNode("div", _hoisted_7$1, [
                        createVNode(p, {
                          rule: g.dragForm.rule,
                          option: g.form.value,
                          api: g.dragForm.api,
                          "onUpdate:api": b[0] || (b[0] = (T) => g.dragForm.api = T)
                        }, null, 8, ["rule", "option", "api"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }),
              createVNode(E, {
                class: "_fc-r",
                width: "320px"
              }, {
                default: withCtx(() => [
                  createVNode(A, { style: { height: "100%" } }, {
                    default: withCtx(() => [
                      createVNode(S, {
                        height: "40px",
                        class: "_fc-r-tabs"
                      }, {
                        default: withCtx(() => [
                          g.activeRule ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: normalizeClass(["_fc-r-tab", { active: g.activeTab === "props" }]),
                            onClick: b[1] || (b[1] = (T) => g.activeTab = "props")
                          }, toDisplayString(g.t("designer.config.component")), 3)) : createCommentVNode("", !0),
                          createElementVNode("div", {
                            class: normalizeClass(["_fc-r-tab", { active: g.activeTab === "form" && !!g.activeRule }]),
                            onClick: b[2] || (b[2] = (T) => g.activeTab = "form")
                          }, toDisplayString(g.t("designer.config.form")), 3)
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(C, null, {
                        default: withCtx(() => [
                          createVNode(p, {
                            rule: g.form.rule,
                            option: g.form.option,
                            modelValue: g.form.value.form,
                            "onUpdate:modelValue": b[3] || (b[3] = (T) => g.form.value.form = T),
                            api: g.form.api,
                            "onUpdate:api": b[4] || (b[4] = (T) => g.form.api = T)
                          }, null, 8, ["rule", "option", "modelValue", "api"])
                        ]),
                        _: 1
                      }, 512), [
                        [vShow, g.activeTab === "form"]
                      ]),
                      withDirectives((openBlock(), createBlock(C, {
                        style: { padding: "0 20px" },
                        key: g.activeRule ? g.activeRule._id : ""
                      }, {
                        default: withCtx(() => [
                          createElementVNode("div", null, [
                            g.showBaseRule ? (openBlock(), createBlock(y, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(g.t("designer.config.rule")), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", !0),
                            withDirectives(createVNode(p, {
                              api: g.baseForm.api,
                              "onUpdate:api": b[5] || (b[5] = (T) => g.baseForm.api = T),
                              rule: g.baseForm.rule,
                              option: g.baseForm.options,
                              onChange: g.baseChange
                            }, null, 8, ["api", "rule", "option", "onChange"]), [
                              [vShow, g.showBaseRule]
                            ]),
                            createVNode(y, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(g.t("designer.config.props")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(p, {
                              api: g.propsForm.api,
                              "onUpdate:api": b[6] || (b[6] = (T) => g.propsForm.api = T),
                              rule: g.propsForm.rule,
                              option: g.propsForm.options,
                              onChange: g.propChange,
                              onRemoveField: g.propRemoveField
                            }, null, 8, ["api", "rule", "option", "onChange", "onRemoveField"]),
                            g.showBaseRule ? (openBlock(), createBlock(y, { key: 1 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(g.t("designer.config.validate")), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", !0),
                            withDirectives(createVNode(p, {
                              api: g.validateForm.api,
                              "onUpdate:api": b[7] || (b[7] = (T) => g.validateForm.api = T),
                              rule: g.validateForm.rule,
                              option: g.validateForm.options,
                              "onUpdate:modelValue": g.validateChange
                            }, null, 8, ["api", "rule", "option", "onUpdate:modelValue"]), [
                              [vShow, g.showBaseRule]
                            ])
                          ])
                        ]),
                        _: 1
                      })), [
                        [vShow, g.activeTab === "props"]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(w, {
                class: "el-dialog-form-preview",
                modelValue: g.preview.state,
                "onUpdate:modelValue": b[8] || (b[8] = (T) => g.preview.state = T),
                width: "400px",
                "append-to-body": ""
              }, {
                default: withCtx(() => [
                  g.preview.state ? (openBlock(), createBlock(x, {
                    key: 0,
                    rule: g.preview.rule,
                    option: g.preview.option
                  }, null, 8, ["rule", "option"])) : createCommentVNode("", !0)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["style"]);
}
const FcDesigner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]), DragTool_vue_vue_type_style_index_0_lang = "";
let uni$1 = 1;
const _sfc_main$6 = defineComponent({
  name: "DragTool",
  props: ["dragBtn", "children", "unique", "mask"],
  setup(g) {
    const { unique: b } = toRefs(g), l = computed(() => b.value || uni$1++), o = inject("fcx");
    return {
      id: l,
      state: o
    };
  },
  methods: {
    active() {
      this.state.active !== this.id && (this.state.active = this.id, this.$emit("active"));
    }
  },
  beforeDestroy() {
    this.state = {};
  }
}), _hoisted_1$4 = {
  key: 0,
  class: "drag-mask"
}, _hoisted_2$2 = { class: "drag-l" }, _hoisted_3$2 = {
  key: 0,
  class: "drag-btn _fc-drag-btn",
  style: { cursor: "move" }
}, _hoisted_4$1 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-move" }, null, -1), _hoisted_5 = [
  _hoisted_4$1
], _hoisted_6 = { class: "drag-r" }, _hoisted_7 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-add" }, null, -1), _hoisted_8 = [
  _hoisted_7
], _hoisted_9 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-copy" }, null, -1), _hoisted_10 = [
  _hoisted_9
], _hoisted_11 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-add-child" }, null, -1), _hoisted_12 = [
  _hoisted_11
], _hoisted_13 = /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-delete" }, null, -1), _hoisted_14 = [
  _hoisted_13
];
function _sfc_render$5(g, b, l, o, t, s) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["drag-tool", { active: g.state.active === g.id }]),
    onClick: b[4] || (b[4] = withModifiers((...u) => g.active && g.active(...u), ["stop"]))
  }, [
    g.mask ? (openBlock(), createElementBlock("div", _hoisted_1$4)) : createCommentVNode("", !0),
    createElementVNode("div", _hoisted_2$2, [
      g.state.active === g.id && g.dragBtn !== !1 ? (openBlock(), createElementBlock("div", _hoisted_3$2, _hoisted_5)) : createCommentVNode("", !0)
    ]),
    createElementVNode("div", _hoisted_6, [
      createElementVNode("div", {
        class: "drag-btn",
        onClick: b[0] || (b[0] = (u) => g.$emit("create"))
      }, _hoisted_8),
      createElementVNode("div", {
        class: "drag-btn",
        onClick: b[1] || (b[1] = (u) => g.$emit("copy"))
      }, _hoisted_10),
      g.children ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "drag-btn",
        onClick: b[2] || (b[2] = (u) => g.$emit("addChild"))
      }, _hoisted_12)) : createCommentVNode("", !0),
      createElementVNode("div", {
        class: "drag-btn drag-btn-danger",
        onClick: b[3] || (b[3] = (u) => g.$emit("delete"))
      }, _hoisted_14)
    ]),
    renderSlot(g.$slots, "default")
  ], 2);
}
const DragTool = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]), codemirror$1 = "";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, codemirror = { exports: {} }, hasRequiredCodemirror;
function requireCodemirror() {
  return hasRequiredCodemirror || (hasRequiredCodemirror = 1, function(g, b) {
    (function(l, o) {
      g.exports = o();
    })(commonjsGlobal, function() {
      var l = navigator.userAgent, o = navigator.platform, t = /gecko\/\d/i.test(l), s = /MSIE \d/.test(l), u = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(l), d = /Edge\/(\d+)/.exec(l), f = s || u || d, c = f && (s ? document.documentMode || 6 : +(d || u)[1]), S = !d && /WebKit\//.test(l), p = S && /Qt\/\d+\.\d+/.test(l), C = !d && /Chrome\/(\d+)/.exec(l), A = C && +C[1], y = /Opera\//.test(l), E = /Apple Computer/.test(navigator.vendor), x = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(l), w = /PhantomJS/.test(l), T = E && (/Mobile\/\w+/.test(l) || navigator.maxTouchPoints > 2), R = /Android/.test(l), I = T || R || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(l), P = T || /Mac/.test(o), F = /\bCrOS\b/.test(l), H = /win/i.test(o), W = y && l.match(/Version\/(\d*\.\d*)/);
      W && (W = Number(W[1])), W && W >= 15 && (y = !1, S = !0);
      var j = P && (p || y && (W == null || W < 12.11)), z = t || f && c >= 9;
      function L(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var $ = function(e, n) {
        var i = e.className, r = L(n).exec(i);
        if (r) {
          var a = i.slice(r.index + r[0].length);
          e.className = i.slice(0, r.index) + (a ? r[1] + a : "");
        }
      };
      function B(e) {
        for (var n = e.childNodes.length; n > 0; --n)
          e.removeChild(e.firstChild);
        return e;
      }
      function k(e, n) {
        return B(e).appendChild(n);
      }
      function M(e, n, i, r) {
        var a = document.createElement(e);
        if (i && (a.className = i), r && (a.style.cssText = r), typeof n == "string")
          a.appendChild(document.createTextNode(n));
        else if (n)
          for (var m = 0; m < n.length; ++m)
            a.appendChild(n[m]);
        return a;
      }
      function Y(e, n, i, r) {
        var a = M(e, n, i, r);
        return a.setAttribute("role", "presentation"), a;
      }
      var Q;
      document.createRange ? Q = function(e, n, i, r) {
        var a = document.createRange();
        return a.setEnd(r || e, i), a.setStart(e, n), a;
      } : Q = function(e, n, i) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", n), r;
      };
      function Z(e, n) {
        if (n.nodeType == 3 && (n = n.parentNode), e.contains)
          return e.contains(n);
        do
          if (n.nodeType == 11 && (n = n.host), n == e)
            return !0;
        while (n = n.parentNode);
      }
      function te(e) {
        var n;
        try {
          n = e.activeElement;
        } catch {
          n = e.body || null;
        }
        for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
          n = n.shadowRoot.activeElement;
        return n;
      }
      function q(e, n) {
        var i = e.className;
        L(n).test(i) || (e.className += (i ? " " : "") + n);
      }
      function ne(e, n) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          i[r] && !L(i[r]).test(n) && (n += " " + i[r]);
        return n;
      }
      var fe = function(e) {
        e.select();
      };
      T ? fe = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : f && (fe = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function me(e) {
        return e.display.wrapper.ownerDocument;
      }
      function pe(e) {
        return me(e).defaultView;
      }
      function ve(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, n);
        };
      }
      function se(e, n, i) {
        n || (n = {});
        for (var r in e)
          e.hasOwnProperty(r) && (i !== !1 || !n.hasOwnProperty(r)) && (n[r] = e[r]);
        return n;
      }
      function ae(e, n, i, r, a) {
        n == null && (n = e.search(/[^\s\u00a0]/), n == -1 && (n = e.length));
        for (var m = r || 0, D = a || 0; ; ) {
          var N = e.indexOf("	", m);
          if (N < 0 || N >= n)
            return D + (n - m);
          D += N - m, D += i - D % i, m = N + 1;
        }
      }
      var ue = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = ve(this.onTimeout, this);
      };
      ue.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
      }, ue.prototype.set = function(e, n) {
        this.f = n;
        var i = +new Date() + e;
        (!this.id || i < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = i);
      };
      function ce(e, n) {
        for (var i = 0; i < e.length; ++i)
          if (e[i] == n)
            return i;
        return -1;
      }
      var Fe = 50, De = { toString: function() {
        return "CodeMirror.Pass";
      } }, Be = { scroll: !1 }, gt = { origin: "*mouse" }, Nt = { origin: "+move" };
      function Ze(e, n, i) {
        for (var r = 0, a = 0; ; ) {
          var m = e.indexOf("	", r);
          m == -1 && (m = e.length);
          var D = m - r;
          if (m == e.length || a + D >= n)
            return r + Math.min(D, n - a);
          if (a += m - r, a += i - a % i, r = m + 1, a >= n)
            return r;
        }
      }
      var dt = [""];
      function vt(e) {
        for (; dt.length <= e; )
          dt.push(Me(dt) + " ");
        return dt[e];
      }
      function Me(e) {
        return e[e.length - 1];
      }
      function mt(e, n) {
        for (var i = [], r = 0; r < e.length; r++)
          i[r] = n(e[r], r);
        return i;
      }
      function Wt(e, n, i) {
        for (var r = 0, a = i(n); r < e.length && i(e[r]) <= a; )
          r++;
        e.splice(r, 0, n);
      }
      function xt() {
      }
      function gn(e, n) {
        var i;
        return Object.create ? i = Object.create(e) : (xt.prototype = e, i = new xt()), n && se(n, i), i;
      }
      var Xt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function Lt(e) {
        return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || Xt.test(e));
      }
      function Ft(e, n) {
        return n ? n.source.indexOf("\\w") > -1 && Lt(e) ? !0 : n.test(e) : Lt(e);
      }
      function Jt(e) {
        for (var n in e)
          if (e.hasOwnProperty(n) && e[n])
            return !1;
        return !0;
      }
      var Ot = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function $t(e) {
        return e.charCodeAt(0) >= 768 && Ot.test(e);
      }
      function rt(e, n, i) {
        for (; (i < 0 ? n > 0 : n < e.length) && $t(e.charAt(n)); )
          n += i;
        return n;
      }
      function je(e, n, i) {
        for (var r = n > i ? -1 : 1; ; ) {
          if (n == i)
            return n;
          var a = (n + i) / 2, m = r < 0 ? Math.ceil(a) : Math.floor(a);
          if (m == n)
            return e(m) ? n : i;
          e(m) ? i = m : n = m + r;
        }
      }
      function It(e, n, i, r) {
        if (!e)
          return r(n, i, "ltr", 0);
        for (var a = !1, m = 0; m < e.length; ++m) {
          var D = e[m];
          (D.from < i && D.to > n || n == i && D.to == n) && (r(Math.max(D.from, n), Math.min(D.to, i), D.level == 1 ? "rtl" : "ltr", m), a = !0);
        }
        a || r(n, i, "ltr");
      }
      var $e = null;
      function xe(e, n, i) {
        var r;
        $e = null;
        for (var a = 0; a < e.length; ++a) {
          var m = e[a];
          if (m.from < n && m.to > n)
            return a;
          m.to == n && (m.from != m.to && i == "before" ? r = a : $e = a), m.from == n && (m.from != m.to && i != "before" ? r = a : $e = a);
        }
        return r != null ? r : $e;
      }
      var ye = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", n = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function i(U) {
          return U <= 247 ? e.charAt(U) : 1424 <= U && U <= 1524 ? "R" : 1536 <= U && U <= 1785 ? n.charAt(U - 1536) : 1774 <= U && U <= 2220 ? "r" : 8192 <= U && U <= 8203 ? "w" : U == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, a = /[stwN]/, m = /[LRr]/, D = /[Lb1n]/, N = /[1n]/;
        function O(U, G, K) {
          this.level = U, this.from = G, this.to = K;
        }
        return function(U, G) {
          var K = G == "ltr" ? "L" : "R";
          if (U.length == 0 || G == "ltr" && !r.test(U))
            return !1;
          for (var ee = U.length, _ = [], oe = 0; oe < ee; ++oe)
            _.push(i(U.charCodeAt(oe)));
          for (var le = 0, de = K; le < ee; ++le) {
            var he = _[le];
            he == "m" ? _[le] = de : de = he;
          }
          for (var Ae = 0, ge = K; Ae < ee; ++Ae) {
            var Se = _[Ae];
            Se == "1" && ge == "r" ? _[Ae] = "n" : m.test(Se) && (ge = Se, Se == "r" && (_[Ae] = "R"));
          }
          for (var Re = 1, Ie = _[0]; Re < ee - 1; ++Re) {
            var He = _[Re];
            He == "+" && Ie == "1" && _[Re + 1] == "1" ? _[Re] = "1" : He == "," && Ie == _[Re + 1] && (Ie == "1" || Ie == "n") && (_[Re] = Ie), Ie = He;
          }
          for (var Ge = 0; Ge < ee; ++Ge) {
            var ut = _[Ge];
            if (ut == ",")
              _[Ge] = "N";
            else if (ut == "%") {
              var Je = void 0;
              for (Je = Ge + 1; Je < ee && _[Je] == "%"; ++Je)
                ;
              for (var Mt = Ge && _[Ge - 1] == "!" || Je < ee && _[Je] == "1" ? "1" : "N", Tt = Ge; Tt < Je; ++Tt)
                _[Tt] = Mt;
              Ge = Je - 1;
            }
          }
          for (var tt = 0, wt = K; tt < ee; ++tt) {
            var ct = _[tt];
            wt == "L" && ct == "1" ? _[tt] = "L" : m.test(ct) && (wt = ct);
          }
          for (var ot = 0; ot < ee; ++ot)
            if (a.test(_[ot])) {
              var nt = void 0;
              for (nt = ot + 1; nt < ee && a.test(_[nt]); ++nt)
                ;
              for (var _e = (ot ? _[ot - 1] : K) == "L", Dt = (nt < ee ? _[nt] : K) == "L", lr = _e == Dt ? _e ? "L" : "R" : K, Pn = ot; Pn < nt; ++Pn)
                _[Pn] = lr;
              ot = nt - 1;
            }
          for (var ht = [], rn, ft = 0; ft < ee; )
            if (D.test(_[ft])) {
              var vo = ft;
              for (++ft; ft < ee && D.test(_[ft]); ++ft)
                ;
              ht.push(new O(0, vo, ft));
            } else {
              var hn = ft, Un = ht.length, zn = G == "rtl" ? 1 : 0;
              for (++ft; ft < ee && _[ft] != "L"; ++ft)
                ;
              for (var At = hn; At < ft; )
                if (N.test(_[At])) {
                  hn < At && (ht.splice(Un, 0, new O(1, hn, At)), Un += zn);
                  var sr = At;
                  for (++At; At < ft && N.test(_[At]); ++At)
                    ;
                  ht.splice(Un, 0, new O(2, sr, At)), Un += zn, hn = At;
                } else
                  ++At;
              hn < ft && ht.splice(Un, 0, new O(1, hn, ft));
            }
          return G == "ltr" && (ht[0].level == 1 && (rn = U.match(/^\s+/)) && (ht[0].from = rn[0].length, ht.unshift(new O(0, 0, rn[0].length))), Me(ht).level == 1 && (rn = U.match(/\s+$/)) && (Me(ht).to -= rn[0].length, ht.push(new O(0, ee - rn[0].length, ee)))), G == "rtl" ? ht.reverse() : ht;
        };
      }();
      function Pe(e, n) {
        var i = e.order;
        return i == null && (i = e.order = ye(e.text, n)), i;
      }
      var Ee = [], re = function(e, n, i) {
        if (e.addEventListener)
          e.addEventListener(n, i, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + n, i);
        else {
          var r = e._handlers || (e._handlers = {});
          r[n] = (r[n] || Ee).concat(i);
        }
      };
      function we(e, n) {
        return e._handlers && e._handlers[n] || Ee;
      }
      function be(e, n, i) {
        if (e.removeEventListener)
          e.removeEventListener(n, i, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + n, i);
        else {
          var r = e._handlers, a = r && r[n];
          if (a) {
            var m = ce(a, i);
            m > -1 && (r[n] = a.slice(0, m).concat(a.slice(m + 1)));
          }
        }
      }
      function Ce(e, n) {
        var i = we(e, n);
        if (!!i.length)
          for (var r = Array.prototype.slice.call(arguments, 2), a = 0; a < i.length; ++a)
            i[a].apply(null, r);
      }
      function Oe(e, n, i) {
        return typeof n == "string" && (n = { type: n, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), Ce(e, i || n.type, e, n), mn(n) || n.codemirrorIgnore;
      }
      function Et(e) {
        var n = e._handlers && e._handlers.cursorActivity;
        if (!!n)
          for (var i = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < n.length; ++r)
            ce(i, n[r]) == -1 && i.push(n[r]);
      }
      function Xe(e, n) {
        return we(e, n).length > 0;
      }
      function Qe(e) {
        e.prototype.on = function(n, i) {
          re(this, n, i);
        }, e.prototype.off = function(n, i) {
          be(this, n, i);
        };
      }
      function We(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function Ut(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function mn(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function Vt(e) {
        We(e), Ut(e);
      }
      function St(e) {
        return e.target || e.srcElement;
      }
      function ur(e) {
        var n = e.which;
        return n == null && (e.button & 1 ? n = 1 : e.button & 2 ? n = 3 : e.button & 4 && (n = 2)), P && e.ctrlKey && n == 1 && (n = 3), n;
      }
      var Ai = function() {
        if (f && c < 9)
          return !1;
        var e = M("div");
        return "draggable" in e || "dragDrop" in e;
      }(), zt;
      function xi(e) {
        if (zt == null) {
          var n = M("span", "\u200B");
          k(e, M("span", [n, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (zt = n.offsetWidth <= 1 && n.offsetHeight > 2 && !(f && c < 8));
        }
        var i = zt ? M("span", "\u200B") : M("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""), i;
      }
      var jn;
      function Ur(e) {
        if (jn != null)
          return jn;
        var n = k(e, document.createTextNode("A\u062EA")), i = Q(n, 0, 1).getBoundingClientRect(), r = Q(n, 1, 2).getBoundingClientRect();
        return B(e), !i || i.left == i.right ? !1 : jn = r.right - i.right < 3;
      }
      var fr = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var n = 0, i = [], r = e.length; n <= r; ) {
          var a = e.indexOf(`
`, n);
          a == -1 && (a = e.length);
          var m = e.slice(n, e.charAt(a - 1) == "\r" ? a - 1 : a), D = m.indexOf("\r");
          D != -1 ? (i.push(m.slice(0, D)), n += D + 1) : (i.push(m), n = a + 1);
        }
        return i;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, yn = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return !1;
        }
      } : function(e) {
        var n;
        try {
          n = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !n || n.parentElement() != e ? !1 : n.compareEndPoints("StartToEnd", n) != 0;
      }, Zt = function() {
        var e = M("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), qt = null;
      function zr(e) {
        if (qt != null)
          return qt;
        var n = k(e, M("span", "x")), i = n.getBoundingClientRect(), r = Q(n, 0, 1).getBoundingClientRect();
        return qt = Math.abs(i.left - r.left) > 1;
      }
      var kt = {}, An = {};
      function jr(e, n) {
        arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), kt[e] = n;
      }
      function Wn(e, n) {
        An[e] = n;
      }
      function Rt(e) {
        if (typeof e == "string" && An.hasOwnProperty(e))
          e = An[e];
        else if (e && typeof e.name == "string" && An.hasOwnProperty(e.name)) {
          var n = An[e.name];
          typeof n == "string" && (n = { name: n }), e = gn(n, e), e.name = n.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Rt("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Rt("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function an(e, n) {
        n = Rt(n);
        var i = kt[n.name];
        if (!i)
          return an(e, "text/plain");
        var r = i(e, n);
        if (xn.hasOwnProperty(n.name)) {
          var a = xn[n.name];
          for (var m in a)
            !a.hasOwnProperty(m) || (r.hasOwnProperty(m) && (r["_" + m] = r[m]), r[m] = a[m]);
        }
        if (r.name = n.name, n.helperType && (r.helperType = n.helperType), n.modeProps)
          for (var D in n.modeProps)
            r[D] = n.modeProps[D];
        return r;
      }
      var xn = {};
      function Wr(e, n) {
        var i = xn.hasOwnProperty(e) ? xn[e] : xn[e] = {};
        se(n, i);
      }
      function ln(e, n) {
        if (n === !0)
          return n;
        if (e.copyState)
          return e.copyState(n);
        var i = {};
        for (var r in n) {
          var a = n[r];
          a instanceof Array && (a = a.concat([])), i[r] = a;
        }
        return i;
      }
      function En(e, n) {
        for (var i; e.innerMode && (i = e.innerMode(n), !(!i || i.mode == e)); )
          n = i.state, e = i.mode;
        return i || { mode: e, state: n };
      }
      function dr(e, n, i) {
        return e.startState ? e.startState(n, i) : !0;
      }
      var qe = function(e, n, i) {
        this.pos = this.start = 0, this.string = e, this.tabSize = n || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = i;
      };
      qe.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, qe.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, qe.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, qe.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, qe.prototype.eat = function(e) {
        var n = this.string.charAt(this.pos), i;
        if (typeof e == "string" ? i = n == e : i = n && (e.test ? e.test(n) : e(n)), i)
          return ++this.pos, n;
      }, qe.prototype.eatWhile = function(e) {
        for (var n = this.pos; this.eat(e); )
          ;
        return this.pos > n;
      }, qe.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, qe.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, qe.prototype.skipTo = function(e) {
        var n = this.string.indexOf(e, this.pos);
        if (n > -1)
          return this.pos = n, !0;
      }, qe.prototype.backUp = function(e) {
        this.pos -= e;
      }, qe.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = ae(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? ae(this.string, this.lineStart, this.tabSize) : 0);
      }, qe.prototype.indentation = function() {
        return ae(this.string, null, this.tabSize) - (this.lineStart ? ae(this.string, this.lineStart, this.tabSize) : 0);
      }, qe.prototype.match = function(e, n, i) {
        if (typeof e == "string") {
          var r = function(D) {
            return i ? D.toLowerCase() : D;
          }, a = this.string.substr(this.pos, e.length);
          if (r(a) == r(e))
            return n !== !1 && (this.pos += e.length), !0;
        } else {
          var m = this.string.slice(this.pos).match(e);
          return m && m.index > 0 ? null : (m && n !== !1 && (this.pos += m[0].length), m);
        }
      }, qe.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, qe.prototype.hideFirstChars = function(e, n) {
        this.lineStart += e;
        try {
          return n();
        } finally {
          this.lineStart -= e;
        }
      }, qe.prototype.lookAhead = function(e) {
        var n = this.lineOracle;
        return n && n.lookAhead(e);
      }, qe.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function Te(e, n) {
        if (n -= e.first, n < 0 || n >= e.size)
          throw new Error("There is no line " + (n + e.first) + " in the document.");
        for (var i = e; !i.lines; )
          for (var r = 0; ; ++r) {
            var a = i.children[r], m = a.chunkSize();
            if (n < m) {
              i = a;
              break;
            }
            n -= m;
          }
        return i.lines[n];
      }
      function sn(e, n, i) {
        var r = [], a = n.line;
        return e.iter(n.line, i.line + 1, function(m) {
          var D = m.text;
          a == i.line && (D = D.slice(0, i.ch)), a == n.line && (D = D.slice(n.ch)), r.push(D), ++a;
        }), r;
      }
      function Vn(e, n, i) {
        var r = [];
        return e.iter(n, i, function(a) {
          r.push(a.text);
        }), r;
      }
      function jt(e, n) {
        var i = n - e.height;
        if (i)
          for (var r = e; r; r = r.parent)
            r.height += i;
      }
      function Ve(e) {
        if (e.parent == null)
          return null;
        for (var n = e.parent, i = ce(n.lines, e), r = n.parent; r; n = r, r = r.parent)
          for (var a = 0; r.children[a] != n; ++a)
            i += r.children[a].chunkSize();
        return i + n.first;
      }
      function _t(e, n) {
        var i = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var a = e.children[r], m = a.height;
              if (n < m) {
                e = a;
                continue e;
              }
              n -= m, i += a.chunkSize();
            }
            return i;
          } while (!e.lines);
        for (var D = 0; D < e.lines.length; ++D) {
          var N = e.lines[D], O = N.height;
          if (n < O)
            break;
          n -= O;
        }
        return i + D;
      }
      function V(e, n) {
        return n >= e.first && n < e.first + e.size;
      }
      function X(e, n) {
        return String(e.lineNumberFormatter(n + e.firstLineNumber));
      }
      function J(e, n, i) {
        if (i === void 0 && (i = null), !(this instanceof J))
          return new J(e, n, i);
        this.line = e, this.ch = n, this.sticky = i;
      }
      function ie(e, n) {
        return e.line - n.line || e.ch - n.ch;
      }
      function Ne(e, n) {
        return e.sticky == n.sticky && ie(e, n) == 0;
      }
      function Ue(e) {
        return J(e.line, e.ch);
      }
      function ze(e, n) {
        return ie(e, n) < 0 ? n : e;
      }
      function it(e, n) {
        return ie(e, n) < 0 ? e : n;
      }
      function Bt(e, n) {
        return Math.max(e.first, Math.min(n, e.first + e.size - 1));
      }
      function Le(e, n) {
        if (n.line < e.first)
          return J(e.first, 0);
        var i = e.first + e.size - 1;
        return n.line > i ? J(i, Te(e, i).text.length) : vl(n, Te(e, n.line).text.length);
      }
      function vl(e, n) {
        var i = e.ch;
        return i == null || i > n ? J(e.line, n) : i < 0 ? J(e.line, 0) : e;
      }
      function ho(e, n) {
        for (var i = [], r = 0; r < n.length; r++)
          i[r] = Le(e, n[r]);
        return i;
      }
      var Vr = function(e, n) {
        this.state = e, this.lookAhead = n;
      }, en = function(e, n, i, r) {
        this.state = n, this.doc = e, this.line = i, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      en.prototype.lookAhead = function(e) {
        var n = this.doc.getLine(this.line + e);
        return n != null && e > this.maxLookAhead && (this.maxLookAhead = e), n;
      }, en.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var n = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: n && n.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, en.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, en.fromSaved = function(e, n, i) {
        return n instanceof Vr ? new en(e, ln(e.mode, n.state), i, n.lookAhead) : new en(e, ln(e.mode, n), i);
      }, en.prototype.save = function(e) {
        var n = e !== !1 ? ln(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new Vr(n, this.maxLookAhead) : n;
      };
      function go(e, n, i, r) {
        var a = [e.state.modeGen], m = {};
        So(
          e,
          n.text,
          e.doc.mode,
          i,
          function(U, G) {
            return a.push(U, G);
          },
          m,
          r
        );
        for (var D = i.state, N = function(U) {
          i.baseTokens = a;
          var G = e.state.overlays[U], K = 1, ee = 0;
          i.state = !0, So(e, n.text, G.mode, i, function(_, oe) {
            for (var le = K; ee < _; ) {
              var de = a[K];
              de > _ && a.splice(K, 1, _, a[K + 1], de), K += 2, ee = Math.min(_, de);
            }
            if (!!oe)
              if (G.opaque)
                a.splice(le, K - le, _, "overlay " + oe), K = le + 2;
              else
                for (; le < K; le += 2) {
                  var he = a[le + 1];
                  a[le + 1] = (he ? he + " " : "") + "overlay " + oe;
                }
          }, m), i.state = D, i.baseTokens = null, i.baseTokenPos = 1;
        }, O = 0; O < e.state.overlays.length; ++O)
          N(O);
        return { styles: a, classes: m.bgClass || m.textClass ? m : null };
      }
      function mo(e, n, i) {
        if (!n.styles || n.styles[0] != e.state.modeGen) {
          var r = cr(e, Ve(n)), a = n.text.length > e.options.maxHighlightLength && ln(e.doc.mode, r.state), m = go(e, n, r);
          a && (r.state = a), n.stateAfter = r.save(!a), n.styles = m.styles, m.classes ? n.styleClasses = m.classes : n.styleClasses && (n.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return n.styles;
      }
      function cr(e, n, i) {
        var r = e.doc, a = e.display;
        if (!r.mode.startState)
          return new en(r, !0, n);
        var m = pl(e, n, i), D = m > r.first && Te(r, m - 1).stateAfter, N = D ? en.fromSaved(r, D, m) : new en(r, dr(r.mode), m);
        return r.iter(m, n, function(O) {
          Ei(e, O.text, N);
          var U = N.line;
          O.stateAfter = U == n - 1 || U % 5 == 0 || U >= a.viewFrom && U < a.viewTo ? N.save() : null, N.nextLine();
        }), i && (r.modeFrontier = N.line), N;
      }
      function Ei(e, n, i, r) {
        var a = e.doc.mode, m = new qe(n, e.options.tabSize, i);
        for (m.start = m.pos = r || 0, n == "" && yo(a, i.state); !m.eol(); )
          Si(a, m, i.state), m.start = m.pos;
      }
      function yo(e, n) {
        if (e.blankLine)
          return e.blankLine(n);
        if (!!e.innerMode) {
          var i = En(e, n);
          if (i.mode.blankLine)
            return i.mode.blankLine(i.state);
        }
      }
      function Si(e, n, i, r) {
        for (var a = 0; a < 10; a++) {
          r && (r[0] = En(e, i).mode);
          var m = e.token(n, i);
          if (n.pos > n.start)
            return m;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var Ao = function(e, n, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = n || null, this.state = i;
      };
      function xo(e, n, i, r) {
        var a = e.doc, m = a.mode, D;
        n = Le(a, n);
        var N = Te(a, n.line), O = cr(e, n.line, i), U = new qe(N.text, e.options.tabSize, O), G;
        for (r && (G = []); (r || U.pos < n.ch) && !U.eol(); )
          U.start = U.pos, D = Si(m, U, O.state), r && G.push(new Ao(U, D, ln(a.mode, O.state)));
        return r ? G : new Ao(U, D, O.state);
      }
      function Eo(e, n) {
        if (e)
          for (; ; ) {
            var i = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!i)
              break;
            e = e.slice(0, i.index) + e.slice(i.index + i[0].length);
            var r = i[1] ? "bgClass" : "textClass";
            n[r] == null ? n[r] = i[2] : new RegExp("(?:^|\\s)" + i[2] + "(?:$|\\s)").test(n[r]) || (n[r] += " " + i[2]);
          }
        return e;
      }
      function So(e, n, i, r, a, m, D) {
        var N = i.flattenSpans;
        N == null && (N = e.options.flattenSpans);
        var O = 0, U = null, G = new qe(n, e.options.tabSize, r), K, ee = e.options.addModeClass && [null];
        for (n == "" && Eo(yo(i, r.state), m); !G.eol(); ) {
          if (G.pos > e.options.maxHighlightLength ? (N = !1, D && Ei(e, n, r, G.pos), G.pos = n.length, K = null) : K = Eo(Si(i, G, r.state, ee), m), ee) {
            var _ = ee[0].name;
            _ && (K = "m-" + (K ? _ + " " + K : _));
          }
          if (!N || U != K) {
            for (; O < G.start; )
              O = Math.min(G.start, O + 5e3), a(O, U);
            U = K;
          }
          G.start = G.pos;
        }
        for (; O < G.pos; ) {
          var oe = Math.min(G.pos, O + 5e3);
          a(oe, U), O = oe;
        }
      }
      function pl(e, n, i) {
        for (var r, a, m = e.doc, D = i ? -1 : n - (e.doc.mode.innerMode ? 1e3 : 100), N = n; N > D; --N) {
          if (N <= m.first)
            return m.first;
          var O = Te(m, N - 1), U = O.stateAfter;
          if (U && (!i || N + (U instanceof Vr ? U.lookAhead : 0) <= m.modeFrontier))
            return N;
          var G = ae(O.text, null, e.options.tabSize);
          (a == null || r > G) && (a = N - 1, r = G);
        }
        return a;
      }
      function hl(e, n) {
        if (e.modeFrontier = Math.min(e.modeFrontier, n), !(e.highlightFrontier < n - 10)) {
          for (var i = e.first, r = n - 1; r > i; r--) {
            var a = Te(e, r).stateAfter;
            if (a && (!(a instanceof Vr) || r + a.lookAhead < n)) {
              i = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, i);
        }
      }
      var bo = !1, un = !1;
      function gl() {
        bo = !0;
      }
      function ml() {
        un = !0;
      }
      function kr(e, n, i) {
        this.marker = e, this.from = n, this.to = i;
      }
      function vr(e, n) {
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.marker == n)
              return r;
          }
      }
      function yl(e, n) {
        for (var i, r = 0; r < e.length; ++r)
          e[r] != n && (i || (i = [])).push(e[r]);
        return i;
      }
      function Al(e, n, i) {
        var r = i && window.WeakSet && (i.markedSpans || (i.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(n) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([n]) : [n], r && r.add(e.markedSpans)), n.marker.attachLine(e);
      }
      function xl(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var m = e[a], D = m.marker, N = m.from == null || (D.inclusiveLeft ? m.from <= n : m.from < n);
            if (N || m.from == n && D.type == "bookmark" && (!i || !m.marker.insertLeft)) {
              var O = m.to == null || (D.inclusiveRight ? m.to >= n : m.to > n);
              (r || (r = [])).push(new kr(D, m.from, O ? null : m.to));
            }
          }
        return r;
      }
      function El(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var m = e[a], D = m.marker, N = m.to == null || (D.inclusiveRight ? m.to >= n : m.to > n);
            if (N || m.from == n && D.type == "bookmark" && (!i || m.marker.insertLeft)) {
              var O = m.from == null || (D.inclusiveLeft ? m.from <= n : m.from < n);
              (r || (r = [])).push(new kr(
                D,
                O ? null : m.from - n,
                m.to == null ? null : m.to - n
              ));
            }
          }
        return r;
      }
      function bi(e, n) {
        if (n.full)
          return null;
        var i = V(e, n.from.line) && Te(e, n.from.line).markedSpans, r = V(e, n.to.line) && Te(e, n.to.line).markedSpans;
        if (!i && !r)
          return null;
        var a = n.from.ch, m = n.to.ch, D = ie(n.from, n.to) == 0, N = xl(i, a, D), O = El(r, m, D), U = n.text.length == 1, G = Me(n.text).length + (U ? a : 0);
        if (N)
          for (var K = 0; K < N.length; ++K) {
            var ee = N[K];
            if (ee.to == null) {
              var _ = vr(O, ee.marker);
              _ ? U && (ee.to = _.to == null ? null : _.to + G) : ee.to = a;
            }
          }
        if (O)
          for (var oe = 0; oe < O.length; ++oe) {
            var le = O[oe];
            if (le.to != null && (le.to += G), le.from == null) {
              var de = vr(N, le.marker);
              de || (le.from = G, U && (N || (N = [])).push(le));
            } else
              le.from += G, U && (N || (N = [])).push(le);
          }
        N && (N = Co(N)), O && O != N && (O = Co(O));
        var he = [N];
        if (!U) {
          var Ae = n.text.length - 2, ge;
          if (Ae > 0 && N)
            for (var Se = 0; Se < N.length; ++Se)
              N[Se].to == null && (ge || (ge = [])).push(new kr(N[Se].marker, null, null));
          for (var Re = 0; Re < Ae; ++Re)
            he.push(ge);
          he.push(O);
        }
        return he;
      }
      function Co(e) {
        for (var n = 0; n < e.length; ++n) {
          var i = e[n];
          i.from != null && i.from == i.to && i.marker.clearWhenEmpty !== !1 && e.splice(n--, 1);
        }
        return e.length ? e : null;
      }
      function Sl(e, n, i) {
        var r = null;
        if (e.iter(n.line, i.line + 1, function(_) {
          if (_.markedSpans)
            for (var oe = 0; oe < _.markedSpans.length; ++oe) {
              var le = _.markedSpans[oe].marker;
              le.readOnly && (!r || ce(r, le) == -1) && (r || (r = [])).push(le);
            }
        }), !r)
          return null;
        for (var a = [{ from: n, to: i }], m = 0; m < r.length; ++m)
          for (var D = r[m], N = D.find(0), O = 0; O < a.length; ++O) {
            var U = a[O];
            if (!(ie(U.to, N.from) < 0 || ie(U.from, N.to) > 0)) {
              var G = [O, 1], K = ie(U.from, N.from), ee = ie(U.to, N.to);
              (K < 0 || !D.inclusiveLeft && !K) && G.push({ from: U.from, to: N.from }), (ee > 0 || !D.inclusiveRight && !ee) && G.push({ from: N.to, to: U.to }), a.splice.apply(a, G), O += G.length - 3;
            }
          }
        return a;
      }
      function To(e) {
        var n = e.markedSpans;
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function wo(e, n) {
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.attachLine(e);
          e.markedSpans = n;
        }
      }
      function Yr(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function Gr(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function Ci(e, n) {
        var i = e.lines.length - n.lines.length;
        if (i != 0)
          return i;
        var r = e.find(), a = n.find(), m = ie(r.from, a.from) || Yr(e) - Yr(n);
        if (m)
          return -m;
        var D = ie(r.to, a.to) || Gr(e) - Gr(n);
        return D || n.id - e.id;
      }
      function Do(e, n) {
        var i = un && e.markedSpans, r;
        if (i)
          for (var a = void 0, m = 0; m < i.length; ++m)
            a = i[m], a.marker.collapsed && (n ? a.from : a.to) == null && (!r || Ci(r, a.marker) < 0) && (r = a.marker);
        return r;
      }
      function Io(e) {
        return Do(e, !0);
      }
      function Qr(e) {
        return Do(e, !1);
      }
      function bl(e, n) {
        var i = un && e.markedSpans, r;
        if (i)
          for (var a = 0; a < i.length; ++a) {
            var m = i[a];
            m.marker.collapsed && (m.from == null || m.from < n) && (m.to == null || m.to > n) && (!r || Ci(r, m.marker) < 0) && (r = m.marker);
          }
        return r;
      }
      function Ro(e, n, i, r, a) {
        var m = Te(e, n), D = un && m.markedSpans;
        if (D)
          for (var N = 0; N < D.length; ++N) {
            var O = D[N];
            if (!!O.marker.collapsed) {
              var U = O.marker.find(0), G = ie(U.from, i) || Yr(O.marker) - Yr(a), K = ie(U.to, r) || Gr(O.marker) - Gr(a);
              if (!(G >= 0 && K <= 0 || G <= 0 && K >= 0) && (G <= 0 && (O.marker.inclusiveRight && a.inclusiveLeft ? ie(U.to, i) >= 0 : ie(U.to, i) > 0) || G >= 0 && (O.marker.inclusiveRight && a.inclusiveLeft ? ie(U.from, r) <= 0 : ie(U.from, r) < 0)))
                return !0;
            }
          }
      }
      function Yt(e) {
        for (var n; n = Io(e); )
          e = n.find(-1, !0).line;
        return e;
      }
      function Cl(e) {
        for (var n; n = Qr(e); )
          e = n.find(1, !0).line;
        return e;
      }
      function Tl(e) {
        for (var n, i; n = Qr(e); )
          e = n.find(1, !0).line, (i || (i = [])).push(e);
        return i;
      }
      function Ti(e, n) {
        var i = Te(e, n), r = Yt(i);
        return i == r ? n : Ve(r);
      }
      function Po(e, n) {
        if (n > e.lastLine())
          return n;
        var i = Te(e, n), r;
        if (!Sn(e, i))
          return n;
        for (; r = Qr(i); )
          i = r.find(1, !0).line;
        return Ve(i) + 1;
      }
      function Sn(e, n) {
        var i = un && n.markedSpans;
        if (i) {
          for (var r = void 0, a = 0; a < i.length; ++a)
            if (r = i[a], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && wi(e, n, r))
                return !0;
            }
        }
      }
      function wi(e, n, i) {
        if (i.to == null) {
          var r = i.marker.find(1, !0);
          return wi(e, r.line, vr(r.line.markedSpans, i.marker));
        }
        if (i.marker.inclusiveRight && i.to == n.text.length)
          return !0;
        for (var a = void 0, m = 0; m < n.markedSpans.length; ++m)
          if (a = n.markedSpans[m], a.marker.collapsed && !a.marker.widgetNode && a.from == i.to && (a.to == null || a.to != i.from) && (a.marker.inclusiveLeft || i.marker.inclusiveRight) && wi(e, n, a))
            return !0;
      }
      function dn(e) {
        e = Yt(e);
        for (var n = 0, i = e.parent, r = 0; r < i.lines.length; ++r) {
          var a = i.lines[r];
          if (a == e)
            break;
          n += a.height;
        }
        for (var m = i.parent; m; i = m, m = i.parent)
          for (var D = 0; D < m.children.length; ++D) {
            var N = m.children[D];
            if (N == i)
              break;
            n += N.height;
          }
        return n;
      }
      function Kr(e) {
        if (e.height == 0)
          return 0;
        for (var n = e.text.length, i, r = e; i = Io(r); ) {
          var a = i.find(0, !0);
          r = a.from.line, n += a.from.ch - a.to.ch;
        }
        for (r = e; i = Qr(r); ) {
          var m = i.find(0, !0);
          n -= r.text.length - m.from.ch, r = m.to.line, n += r.text.length - m.to.ch;
        }
        return n;
      }
      function Di(e) {
        var n = e.display, i = e.doc;
        n.maxLine = Te(i, i.first), n.maxLineLength = Kr(n.maxLine), n.maxLineChanged = !0, i.iter(function(r) {
          var a = Kr(r);
          a > n.maxLineLength && (n.maxLineLength = a, n.maxLine = r);
        });
      }
      var kn = function(e, n, i) {
        this.text = e, wo(this, n), this.height = i ? i(this) : 1;
      };
      kn.prototype.lineNo = function() {
        return Ve(this);
      }, Qe(kn);
      function wl(e, n, i, r) {
        e.text = n, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), To(e), wo(e, i);
        var a = r ? r(e) : 1;
        a != e.height && jt(e, a);
      }
      function Dl(e) {
        e.parent = null, To(e);
      }
      var Il = {}, Rl = {};
      function Mo(e, n) {
        if (!e || /^\s*$/.test(e))
          return null;
        var i = n.addModeClass ? Rl : Il;
        return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function No(e, n) {
        var i = Y("span", null, null, S ? "padding-right: .1px" : null), r = {
          pre: Y("pre", [i], "CodeMirror-line"),
          content: i,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        n.measure = {};
        for (var a = 0; a <= (n.rest ? n.rest.length : 0); a++) {
          var m = a ? n.rest[a - 1] : n.line, D = void 0;
          r.pos = 0, r.addToken = Ml, Ur(e.display.measure) && (D = Pe(m, e.doc.direction)) && (r.addToken = Ll(r.addToken, D)), r.map = [];
          var N = n != e.display.externalMeasured && Ve(m);
          Fl(m, r, mo(e, m, N)), m.styleClasses && (m.styleClasses.bgClass && (r.bgClass = ne(m.styleClasses.bgClass, r.bgClass || "")), m.styleClasses.textClass && (r.textClass = ne(m.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(xi(e.display.measure))), a == 0 ? (n.measure.map = r.map, n.measure.cache = {}) : ((n.measure.maps || (n.measure.maps = [])).push(r.map), (n.measure.caches || (n.measure.caches = [])).push({}));
        }
        if (S) {
          var O = r.content.lastChild;
          (/\bcm-tab\b/.test(O.className) || O.querySelector && O.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return Ce(e, "renderLine", e, n.line, r.pre), r.pre.className && (r.textClass = ne(r.pre.className, r.textClass || "")), r;
      }
      function Pl(e) {
        var n = M("span", "\u2022", "cm-invalidchar");
        return n.title = "\\u" + e.charCodeAt(0).toString(16), n.setAttribute("aria-label", n.title), n;
      }
      function Ml(e, n, i, r, a, m, D) {
        if (!!n) {
          var N = e.splitSpaces ? Nl(n, e.trailingSpace) : n, O = e.cm.state.specialChars, U = !1, G;
          if (!O.test(n))
            e.col += n.length, G = document.createTextNode(N), e.map.push(e.pos, e.pos + n.length, G), f && c < 9 && (U = !0), e.pos += n.length;
          else {
            G = document.createDocumentFragment();
            for (var K = 0; ; ) {
              O.lastIndex = K;
              var ee = O.exec(n), _ = ee ? ee.index - K : n.length - K;
              if (_) {
                var oe = document.createTextNode(N.slice(K, K + _));
                f && c < 9 ? G.appendChild(M("span", [oe])) : G.appendChild(oe), e.map.push(e.pos, e.pos + _, oe), e.col += _, e.pos += _;
              }
              if (!ee)
                break;
              K += _ + 1;
              var le = void 0;
              if (ee[0] == "	") {
                var de = e.cm.options.tabSize, he = de - e.col % de;
                le = G.appendChild(M("span", vt(he), "cm-tab")), le.setAttribute("role", "presentation"), le.setAttribute("cm-text", "	"), e.col += he;
              } else
                ee[0] == "\r" || ee[0] == `
` ? (le = G.appendChild(M("span", ee[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), le.setAttribute("cm-text", ee[0]), e.col += 1) : (le = e.cm.options.specialCharPlaceholder(ee[0]), le.setAttribute("cm-text", ee[0]), f && c < 9 ? G.appendChild(M("span", [le])) : G.appendChild(le), e.col += 1);
              e.map.push(e.pos, e.pos + 1, le), e.pos++;
            }
          }
          if (e.trailingSpace = N.charCodeAt(n.length - 1) == 32, i || r || a || U || m || D) {
            var Ae = i || "";
            r && (Ae += r), a && (Ae += a);
            var ge = M("span", [G], Ae, m);
            if (D)
              for (var Se in D)
                D.hasOwnProperty(Se) && Se != "style" && Se != "class" && ge.setAttribute(Se, D[Se]);
            return e.content.appendChild(ge);
          }
          e.content.appendChild(G);
        }
      }
      function Nl(e, n) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var i = n, r = "", a = 0; a < e.length; a++) {
          var m = e.charAt(a);
          m == " " && i && (a == e.length - 1 || e.charCodeAt(a + 1) == 32) && (m = "\xA0"), r += m, i = m == " ";
        }
        return r;
      }
      function Ll(e, n) {
        return function(i, r, a, m, D, N, O) {
          a = a ? a + " cm-force-border" : "cm-force-border";
          for (var U = i.pos, G = U + r.length; ; ) {
            for (var K = void 0, ee = 0; ee < n.length && (K = n[ee], !(K.to > U && K.from <= U)); ee++)
              ;
            if (K.to >= G)
              return e(i, r, a, m, D, N, O);
            e(i, r.slice(0, K.to - U), a, m, null, N, O), m = null, r = r.slice(K.to - U), U = K.to;
          }
        };
      }
      function Lo(e, n, i, r) {
        var a = !r && i.widgetNode;
        a && e.map.push(e.pos, e.pos + n, a), !r && e.cm.display.input.needsContentAttribute && (a || (a = e.content.appendChild(document.createElement("span"))), a.setAttribute("cm-marker", i.id)), a && (e.cm.display.input.setUneditable(a), e.content.appendChild(a)), e.pos += n, e.trailingSpace = !1;
      }
      function Fl(e, n, i) {
        var r = e.markedSpans, a = e.text, m = 0;
        if (!r) {
          for (var D = 1; D < i.length; D += 2)
            n.addToken(n, a.slice(m, m = i[D]), Mo(i[D + 1], n.cm.options));
          return;
        }
        for (var N = a.length, O = 0, U = 1, G = "", K, ee, _ = 0, oe, le, de, he, Ae; ; ) {
          if (_ == O) {
            oe = le = de = ee = "", Ae = null, he = null, _ = 1 / 0;
            for (var ge = [], Se = void 0, Re = 0; Re < r.length; ++Re) {
              var Ie = r[Re], He = Ie.marker;
              if (He.type == "bookmark" && Ie.from == O && He.widgetNode)
                ge.push(He);
              else if (Ie.from <= O && (Ie.to == null || Ie.to > O || He.collapsed && Ie.to == O && Ie.from == O)) {
                if (Ie.to != null && Ie.to != O && _ > Ie.to && (_ = Ie.to, le = ""), He.className && (oe += " " + He.className), He.css && (ee = (ee ? ee + ";" : "") + He.css), He.startStyle && Ie.from == O && (de += " " + He.startStyle), He.endStyle && Ie.to == _ && (Se || (Se = [])).push(He.endStyle, Ie.to), He.title && ((Ae || (Ae = {})).title = He.title), He.attributes)
                  for (var Ge in He.attributes)
                    (Ae || (Ae = {}))[Ge] = He.attributes[Ge];
                He.collapsed && (!he || Ci(he.marker, He) < 0) && (he = Ie);
              } else
                Ie.from > O && _ > Ie.from && (_ = Ie.from);
            }
            if (Se)
              for (var ut = 0; ut < Se.length; ut += 2)
                Se[ut + 1] == _ && (le += " " + Se[ut]);
            if (!he || he.from == O)
              for (var Je = 0; Je < ge.length; ++Je)
                Lo(n, 0, ge[Je]);
            if (he && (he.from || 0) == O) {
              if (Lo(
                n,
                (he.to == null ? N + 1 : he.to) - O,
                he.marker,
                he.from == null
              ), he.to == null)
                return;
              he.to == O && (he = !1);
            }
          }
          if (O >= N)
            break;
          for (var Mt = Math.min(N, _); ; ) {
            if (G) {
              var Tt = O + G.length;
              if (!he) {
                var tt = Tt > Mt ? G.slice(0, Mt - O) : G;
                n.addToken(
                  n,
                  tt,
                  K ? K + oe : oe,
                  de,
                  O + tt.length == _ ? le : "",
                  ee,
                  Ae
                );
              }
              if (Tt >= Mt) {
                G = G.slice(Mt - O), O = Mt;
                break;
              }
              O = Tt, de = "";
            }
            G = a.slice(m, m = i[U++]), K = Mo(i[U++], n.cm.options);
          }
        }
      }
      function Fo(e, n, i) {
        this.line = n, this.rest = Tl(n), this.size = this.rest ? Ve(Me(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = Sn(e, n);
      }
      function Xr(e, n, i) {
        for (var r = [], a, m = n; m < i; m = a) {
          var D = new Fo(e.doc, Te(e.doc, m), m);
          a = m + D.size, r.push(D);
        }
        return r;
      }
      var Yn = null;
      function Ol(e) {
        Yn ? Yn.ops.push(e) : e.ownsGroup = Yn = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function Bl(e) {
        var n = e.delayedCallbacks, i = 0;
        do {
          for (; i < n.length; i++)
            n[i].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var a = e.ops[r];
            if (a.cursorActivityHandlers)
              for (; a.cursorActivityCalled < a.cursorActivityHandlers.length; )
                a.cursorActivityHandlers[a.cursorActivityCalled++].call(null, a.cm);
          }
        } while (i < n.length);
      }
      function Hl(e, n) {
        var i = e.ownsGroup;
        if (!!i)
          try {
            Bl(i);
          } finally {
            Yn = null, n(i);
          }
      }
      var pr = null;
      function at(e, n) {
        var i = we(e, n);
        if (!!i.length) {
          var r = Array.prototype.slice.call(arguments, 2), a;
          Yn ? a = Yn.delayedCallbacks : pr ? a = pr : (a = pr = [], setTimeout($l, 0));
          for (var m = function(N) {
            a.push(function() {
              return i[N].apply(null, r);
            });
          }, D = 0; D < i.length; ++D)
            m(D);
        }
      }
      function $l() {
        var e = pr;
        pr = null;
        for (var n = 0; n < e.length; ++n)
          e[n]();
      }
      function Oo(e, n, i, r) {
        for (var a = 0; a < n.changes.length; a++) {
          var m = n.changes[a];
          m == "text" ? zl(e, n) : m == "gutter" ? Ho(e, n, i, r) : m == "class" ? Ii(e, n) : m == "widget" && jl(e, n, r);
        }
        n.changes = null;
      }
      function hr(e) {
        return e.node == e.text && (e.node = M("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), f && c < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function Ul(e, n) {
        var i = n.bgClass ? n.bgClass + " " + (n.line.bgClass || "") : n.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), n.background)
          i ? n.background.className = i : (n.background.parentNode.removeChild(n.background), n.background = null);
        else if (i) {
          var r = hr(n);
          n.background = r.insertBefore(M("div", null, i), r.firstChild), e.display.input.setUneditable(n.background);
        }
      }
      function Bo(e, n) {
        var i = e.display.externalMeasured;
        return i && i.line == n.line ? (e.display.externalMeasured = null, n.measure = i.measure, i.built) : No(e, n);
      }
      function zl(e, n) {
        var i = n.text.className, r = Bo(e, n);
        n.text == n.node && (n.node = r.pre), n.text.parentNode.replaceChild(r.pre, n.text), n.text = r.pre, r.bgClass != n.bgClass || r.textClass != n.textClass ? (n.bgClass = r.bgClass, n.textClass = r.textClass, Ii(e, n)) : i && (n.text.className = i);
      }
      function Ii(e, n) {
        Ul(e, n), n.line.wrapClass ? hr(n).className = n.line.wrapClass : n.node != n.text && (n.node.className = "");
        var i = n.textClass ? n.textClass + " " + (n.line.textClass || "") : n.line.textClass;
        n.text.className = i || "";
      }
      function Ho(e, n, i, r) {
        if (n.gutter && (n.node.removeChild(n.gutter), n.gutter = null), n.gutterBackground && (n.node.removeChild(n.gutterBackground), n.gutterBackground = null), n.line.gutterClass) {
          var a = hr(n);
          n.gutterBackground = M(
            "div",
            null,
            "CodeMirror-gutter-background " + n.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(n.gutterBackground), a.insertBefore(n.gutterBackground, n.text);
        }
        var m = n.line.gutterMarkers;
        if (e.options.lineNumbers || m) {
          var D = hr(n), N = n.gutter = M("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (N.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(N), D.insertBefore(N, n.text), n.line.gutterClass && (N.className += " " + n.line.gutterClass), e.options.lineNumbers && (!m || !m["CodeMirror-linenumbers"]) && (n.lineNumber = N.appendChild(
            M(
              "div",
              X(e.options, i),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), m)
            for (var O = 0; O < e.display.gutterSpecs.length; ++O) {
              var U = e.display.gutterSpecs[O].className, G = m.hasOwnProperty(U) && m[U];
              G && N.appendChild(M(
                "div",
                [G],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[U] + "px; width: " + r.gutterWidth[U] + "px"
              ));
            }
        }
      }
      function jl(e, n, i) {
        n.alignable && (n.alignable = null);
        for (var r = L("CodeMirror-linewidget"), a = n.node.firstChild, m = void 0; a; a = m)
          m = a.nextSibling, r.test(a.className) && n.node.removeChild(a);
        $o(e, n, i);
      }
      function Wl(e, n, i, r) {
        var a = Bo(e, n);
        return n.text = n.node = a.pre, a.bgClass && (n.bgClass = a.bgClass), a.textClass && (n.textClass = a.textClass), Ii(e, n), Ho(e, n, i, r), $o(e, n, r), n.node;
      }
      function $o(e, n, i) {
        if (Uo(e, n.line, n, i, !0), n.rest)
          for (var r = 0; r < n.rest.length; r++)
            Uo(e, n.rest[r], n, i, !1);
      }
      function Uo(e, n, i, r, a) {
        if (!!n.widgets)
          for (var m = hr(i), D = 0, N = n.widgets; D < N.length; ++D) {
            var O = N[D], U = M("div", [O.node], "CodeMirror-linewidget" + (O.className ? " " + O.className : ""));
            O.handleMouseEvents || U.setAttribute("cm-ignore-events", "true"), Vl(O, U, i, r), e.display.input.setUneditable(U), a && O.above ? m.insertBefore(U, i.gutter || i.text) : m.appendChild(U), at(O, "redraw");
          }
      }
      function Vl(e, n, i, r) {
        if (e.noHScroll) {
          (i.alignable || (i.alignable = [])).push(n);
          var a = r.wrapperWidth;
          n.style.left = r.fixedPos + "px", e.coverGutter || (a -= r.gutterTotalWidth, n.style.paddingLeft = r.gutterTotalWidth + "px"), n.style.width = a + "px";
        }
        e.coverGutter && (n.style.zIndex = 5, n.style.position = "relative", e.noHScroll || (n.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function gr(e) {
        if (e.height != null)
          return e.height;
        var n = e.doc.cm;
        if (!n)
          return 0;
        if (!Z(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + n.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + n.display.wrapper.clientWidth + "px;"), k(n.display.measure, M("div", [e.node], null, i));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function cn(e, n) {
        for (var i = St(n); i != e.wrapper; i = i.parentNode)
          if (!i || i.nodeType == 1 && i.getAttribute("cm-ignore-events") == "true" || i.parentNode == e.sizer && i != e.mover)
            return !0;
      }
      function Jr(e) {
        return e.lineSpace.offsetTop;
      }
      function Ri(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function zo(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var n = k(e.measure, M("pre", "x", "CodeMirror-line-like")), i = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle, r = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function tn(e) {
        return Fe - e.display.nativeBarWidth;
      }
      function Mn(e) {
        return e.display.scroller.clientWidth - tn(e) - e.display.barWidth;
      }
      function Pi(e) {
        return e.display.scroller.clientHeight - tn(e) - e.display.barHeight;
      }
      function kl(e, n, i) {
        var r = e.options.lineWrapping, a = r && Mn(e);
        if (!n.measure.heights || r && n.measure.width != a) {
          var m = n.measure.heights = [];
          if (r) {
            n.measure.width = a;
            for (var D = n.text.firstChild.getClientRects(), N = 0; N < D.length - 1; N++) {
              var O = D[N], U = D[N + 1];
              Math.abs(O.bottom - U.bottom) > 2 && m.push((O.bottom + U.top) / 2 - i.top);
            }
          }
          m.push(i.bottom - i.top);
        }
      }
      function jo(e, n, i) {
        if (e.line == n)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == n)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var a = 0; a < e.rest.length; a++)
            if (Ve(e.rest[a]) > i)
              return { map: e.measure.maps[a], cache: e.measure.caches[a], before: !0 };
        }
      }
      function Yl(e, n) {
        n = Yt(n);
        var i = Ve(n), r = e.display.externalMeasured = new Fo(e.doc, n, i);
        r.lineN = i;
        var a = r.built = No(e, r);
        return r.text = a.pre, k(e.display.lineMeasure, a.pre), r;
      }
      function Wo(e, n, i, r) {
        return nn(e, Gn(e, n), i, r);
      }
      function Mi(e, n) {
        if (n >= e.display.viewFrom && n < e.display.viewTo)
          return e.display.view[Fn(e, n)];
        var i = e.display.externalMeasured;
        if (i && n >= i.lineN && n < i.lineN + i.size)
          return i;
      }
      function Gn(e, n) {
        var i = Ve(n), r = Mi(e, i);
        r && !r.text ? r = null : r && r.changes && (Oo(e, r, i, Bi(e)), e.curOp.forceUpdate = !0), r || (r = Yl(e, n));
        var a = jo(r, n, i);
        return {
          line: n,
          view: r,
          rect: null,
          map: a.map,
          cache: a.cache,
          before: a.before,
          hasHeights: !1
        };
      }
      function nn(e, n, i, r, a) {
        n.before && (i = -1);
        var m = i + (r || ""), D;
        return n.cache.hasOwnProperty(m) ? D = n.cache[m] : (n.rect || (n.rect = n.view.text.getBoundingClientRect()), n.hasHeights || (kl(e, n.view, n.rect), n.hasHeights = !0), D = Ql(e, n, i, r), D.bogus || (n.cache[m] = D)), {
          left: D.left,
          right: D.right,
          top: a ? D.rtop : D.top,
          bottom: a ? D.rbottom : D.bottom
        };
      }
      var Vo = { left: 0, right: 0, top: 0, bottom: 0 };
      function ko(e, n, i) {
        for (var r, a, m, D, N, O, U = 0; U < e.length; U += 3)
          if (N = e[U], O = e[U + 1], n < N ? (a = 0, m = 1, D = "left") : n < O ? (a = n - N, m = a + 1) : (U == e.length - 3 || n == O && e[U + 3] > n) && (m = O - N, a = m - 1, n >= O && (D = "right")), a != null) {
            if (r = e[U + 2], N == O && i == (r.insertLeft ? "left" : "right") && (D = i), i == "left" && a == 0)
              for (; U && e[U - 2] == e[U - 3] && e[U - 1].insertLeft; )
                r = e[(U -= 3) + 2], D = "left";
            if (i == "right" && a == O - N)
              for (; U < e.length - 3 && e[U + 3] == e[U + 4] && !e[U + 5].insertLeft; )
                r = e[(U += 3) + 2], D = "right";
            break;
          }
        return { node: r, start: a, end: m, collapse: D, coverStart: N, coverEnd: O };
      }
      function Gl(e, n) {
        var i = Vo;
        if (n == "left")
          for (var r = 0; r < e.length && (i = e[r]).left == i.right; r++)
            ;
        else
          for (var a = e.length - 1; a >= 0 && (i = e[a]).left == i.right; a--)
            ;
        return i;
      }
      function Ql(e, n, i, r) {
        var a = ko(n.map, i, r), m = a.node, D = a.start, N = a.end, O = a.collapse, U;
        if (m.nodeType == 3) {
          for (var G = 0; G < 4; G++) {
            for (; D && $t(n.line.text.charAt(a.coverStart + D)); )
              --D;
            for (; a.coverStart + N < a.coverEnd && $t(n.line.text.charAt(a.coverStart + N)); )
              ++N;
            if (f && c < 9 && D == 0 && N == a.coverEnd - a.coverStart ? U = m.parentNode.getBoundingClientRect() : U = Gl(Q(m, D, N).getClientRects(), r), U.left || U.right || D == 0)
              break;
            N = D, D = D - 1, O = "right";
          }
          f && c < 11 && (U = Kl(e.display.measure, U));
        } else {
          D > 0 && (O = r = "right");
          var K;
          e.options.lineWrapping && (K = m.getClientRects()).length > 1 ? U = K[r == "right" ? K.length - 1 : 0] : U = m.getBoundingClientRect();
        }
        if (f && c < 9 && !D && (!U || !U.left && !U.right)) {
          var ee = m.parentNode.getClientRects()[0];
          ee ? U = { left: ee.left, right: ee.left + Kn(e.display), top: ee.top, bottom: ee.bottom } : U = Vo;
        }
        for (var _ = U.top - n.rect.top, oe = U.bottom - n.rect.top, le = (_ + oe) / 2, de = n.view.measure.heights, he = 0; he < de.length - 1 && !(le < de[he]); he++)
          ;
        var Ae = he ? de[he - 1] : 0, ge = de[he], Se = {
          left: (O == "right" ? U.right : U.left) - n.rect.left,
          right: (O == "left" ? U.left : U.right) - n.rect.left,
          top: Ae,
          bottom: ge
        };
        return !U.left && !U.right && (Se.bogus = !0), e.options.singleCursorHeightPerLine || (Se.rtop = _, Se.rbottom = oe), Se;
      }
      function Kl(e, n) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !zr(e))
          return n;
        var i = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: n.left * i,
          right: n.right * i,
          top: n.top * r,
          bottom: n.bottom * r
        };
      }
      function Yo(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var n = 0; n < e.rest.length; n++)
            e.measure.caches[n] = {};
      }
      function Go(e) {
        e.display.externalMeasure = null, B(e.display.lineMeasure);
        for (var n = 0; n < e.display.view.length; n++)
          Yo(e.display.view[n]);
      }
      function mr(e) {
        Go(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function Qo(e) {
        return C && R ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function Ko(e) {
        return C && R ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function Ni(e) {
        var n = Yt(e), i = n.widgets, r = 0;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].above && (r += gr(i[a]));
        return r;
      }
      function Zr(e, n, i, r, a) {
        if (!a) {
          var m = Ni(n);
          i.top += m, i.bottom += m;
        }
        if (r == "line")
          return i;
        r || (r = "local");
        var D = dn(n);
        if (r == "local" ? D += Jr(e.display) : D -= e.display.viewOffset, r == "page" || r == "window") {
          var N = e.display.lineSpace.getBoundingClientRect();
          D += N.top + (r == "window" ? 0 : Ko(me(e)));
          var O = N.left + (r == "window" ? 0 : Qo(me(e)));
          i.left += O, i.right += O;
        }
        return i.top += D, i.bottom += D, i;
      }
      function Xo(e, n, i) {
        if (i == "div")
          return n;
        var r = n.left, a = n.top;
        if (i == "page")
          r -= Qo(me(e)), a -= Ko(me(e));
        else if (i == "local" || !i) {
          var m = e.display.sizer.getBoundingClientRect();
          r += m.left, a += m.top;
        }
        var D = e.display.lineSpace.getBoundingClientRect();
        return { left: r - D.left, top: a - D.top };
      }
      function qr(e, n, i, r, a) {
        return r || (r = Te(e.doc, n.line)), Zr(e, r, Wo(e, r, n.ch, a), i);
      }
      function Gt(e, n, i, r, a, m) {
        r = r || Te(e.doc, n.line), a || (a = Gn(e, r));
        function D(oe, le) {
          var de = nn(e, a, oe, le ? "right" : "left", m);
          return le ? de.left = de.right : de.right = de.left, Zr(e, r, de, i);
        }
        var N = Pe(r, e.doc.direction), O = n.ch, U = n.sticky;
        if (O >= r.text.length ? (O = r.text.length, U = "before") : O <= 0 && (O = 0, U = "after"), !N)
          return D(U == "before" ? O - 1 : O, U == "before");
        function G(oe, le, de) {
          var he = N[le], Ae = he.level == 1;
          return D(de ? oe - 1 : oe, Ae != de);
        }
        var K = xe(N, O, U), ee = $e, _ = G(O, K, U == "before");
        return ee != null && (_.other = G(O, ee, U != "before")), _;
      }
      function Jo(e, n) {
        var i = 0;
        n = Le(e.doc, n), e.options.lineWrapping || (i = Kn(e.display) * n.ch);
        var r = Te(e.doc, n.line), a = dn(r) + Jr(e.display);
        return { left: i, right: i, top: a, bottom: a + r.height };
      }
      function Li(e, n, i, r, a) {
        var m = J(e, n, i);
        return m.xRel = a, r && (m.outside = r), m;
      }
      function Fi(e, n, i) {
        var r = e.doc;
        if (i += e.display.viewOffset, i < 0)
          return Li(r.first, 0, null, -1, -1);
        var a = _t(r, i), m = r.first + r.size - 1;
        if (a > m)
          return Li(r.first + r.size - 1, Te(r, m).text.length, null, 1, 1);
        n < 0 && (n = 0);
        for (var D = Te(r, a); ; ) {
          var N = Xl(e, D, a, n, i), O = bl(D, N.ch + (N.xRel > 0 || N.outside > 0 ? 1 : 0));
          if (!O)
            return N;
          var U = O.find(1);
          if (U.line == a)
            return U;
          D = Te(r, a = U.line);
        }
      }
      function Zo(e, n, i, r) {
        r -= Ni(n);
        var a = n.text.length, m = je(function(D) {
          return nn(e, i, D - 1).bottom <= r;
        }, a, 0);
        return a = je(function(D) {
          return nn(e, i, D).top > r;
        }, m, a), { begin: m, end: a };
      }
      function qo(e, n, i, r) {
        i || (i = Gn(e, n));
        var a = Zr(e, n, nn(e, i, r), "line").top;
        return Zo(e, n, i, a);
      }
      function Oi(e, n, i, r) {
        return e.bottom <= i ? !1 : e.top > i ? !0 : (r ? e.left : e.right) > n;
      }
      function Xl(e, n, i, r, a) {
        a -= dn(n);
        var m = Gn(e, n), D = Ni(n), N = 0, O = n.text.length, U = !0, G = Pe(n, e.doc.direction);
        if (G) {
          var K = (e.options.lineWrapping ? Zl : Jl)(e, n, i, m, G, r, a);
          U = K.level != 1, N = U ? K.from : K.to - 1, O = U ? K.to : K.from - 1;
        }
        var ee = null, _ = null, oe = je(function(Re) {
          var Ie = nn(e, m, Re);
          return Ie.top += D, Ie.bottom += D, Oi(Ie, r, a, !1) ? (Ie.top <= a && Ie.left <= r && (ee = Re, _ = Ie), !0) : !1;
        }, N, O), le, de, he = !1;
        if (_) {
          var Ae = r - _.left < _.right - r, ge = Ae == U;
          oe = ee + (ge ? 0 : 1), de = ge ? "after" : "before", le = Ae ? _.left : _.right;
        } else {
          !U && (oe == O || oe == N) && oe++, de = oe == 0 ? "after" : oe == n.text.length ? "before" : nn(e, m, oe - (U ? 1 : 0)).bottom + D <= a == U ? "after" : "before";
          var Se = Gt(e, J(i, oe, de), "line", n, m);
          le = Se.left, he = a < Se.top ? -1 : a >= Se.bottom ? 1 : 0;
        }
        return oe = rt(n.text, oe, 1), Li(i, oe, de, he, r - le);
      }
      function Jl(e, n, i, r, a, m, D) {
        var N = je(function(K) {
          var ee = a[K], _ = ee.level != 1;
          return Oi(Gt(
            e,
            J(i, _ ? ee.to : ee.from, _ ? "before" : "after"),
            "line",
            n,
            r
          ), m, D, !0);
        }, 0, a.length - 1), O = a[N];
        if (N > 0) {
          var U = O.level != 1, G = Gt(
            e,
            J(i, U ? O.from : O.to, U ? "after" : "before"),
            "line",
            n,
            r
          );
          Oi(G, m, D, !0) && G.top > D && (O = a[N - 1]);
        }
        return O;
      }
      function Zl(e, n, i, r, a, m, D) {
        var N = Zo(e, n, r, D), O = N.begin, U = N.end;
        /\s/.test(n.text.charAt(U - 1)) && U--;
        for (var G = null, K = null, ee = 0; ee < a.length; ee++) {
          var _ = a[ee];
          if (!(_.from >= U || _.to <= O)) {
            var oe = _.level != 1, le = nn(e, r, oe ? Math.min(U, _.to) - 1 : Math.max(O, _.from)).right, de = le < m ? m - le + 1e9 : le - m;
            (!G || K > de) && (G = _, K = de);
          }
        }
        return G || (G = a[a.length - 1]), G.from < O && (G = { from: O, to: G.to, level: G.level }), G.to > U && (G = { from: G.from, to: U, level: G.level }), G;
      }
      var Nn;
      function Qn(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Nn == null) {
          Nn = M("pre", null, "CodeMirror-line-like");
          for (var n = 0; n < 49; ++n)
            Nn.appendChild(document.createTextNode("x")), Nn.appendChild(M("br"));
          Nn.appendChild(document.createTextNode("x"));
        }
        k(e.measure, Nn);
        var i = Nn.offsetHeight / 50;
        return i > 3 && (e.cachedTextHeight = i), B(e.measure), i || 1;
      }
      function Kn(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var n = M("span", "xxxxxxxxxx"), i = M("pre", [n], "CodeMirror-line-like");
        k(e.measure, i);
        var r = n.getBoundingClientRect(), a = (r.right - r.left) / 10;
        return a > 2 && (e.cachedCharWidth = a), a || 10;
      }
      function Bi(e) {
        for (var n = e.display, i = {}, r = {}, a = n.gutters.clientLeft, m = n.gutters.firstChild, D = 0; m; m = m.nextSibling, ++D) {
          var N = e.display.gutterSpecs[D].className;
          i[N] = m.offsetLeft + m.clientLeft + a, r[N] = m.clientWidth;
        }
        return {
          fixedPos: Hi(n),
          gutterTotalWidth: n.gutters.offsetWidth,
          gutterLeft: i,
          gutterWidth: r,
          wrapperWidth: n.wrapper.clientWidth
        };
      }
      function Hi(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function _o(e) {
        var n = Qn(e.display), i = e.options.lineWrapping, r = i && Math.max(5, e.display.scroller.clientWidth / Kn(e.display) - 3);
        return function(a) {
          if (Sn(e.doc, a))
            return 0;
          var m = 0;
          if (a.widgets)
            for (var D = 0; D < a.widgets.length; D++)
              a.widgets[D].height && (m += a.widgets[D].height);
          return i ? m + (Math.ceil(a.text.length / r) || 1) * n : m + n;
        };
      }
      function $i(e) {
        var n = e.doc, i = _o(e);
        n.iter(function(r) {
          var a = i(r);
          a != r.height && jt(r, a);
        });
      }
      function Ln(e, n, i, r) {
        var a = e.display;
        if (!i && St(n).getAttribute("cm-not-content") == "true")
          return null;
        var m, D, N = a.lineSpace.getBoundingClientRect();
        try {
          m = n.clientX - N.left, D = n.clientY - N.top;
        } catch {
          return null;
        }
        var O = Fi(e, m, D), U;
        if (r && O.xRel > 0 && (U = Te(e.doc, O.line).text).length == O.ch) {
          var G = ae(U, U.length, e.options.tabSize) - U.length;
          O = J(O.line, Math.max(0, Math.round((m - zo(e.display).left) / Kn(e.display)) - G));
        }
        return O;
      }
      function Fn(e, n) {
        if (n >= e.display.viewTo || (n -= e.display.viewFrom, n < 0))
          return null;
        for (var i = e.display.view, r = 0; r < i.length; r++)
          if (n -= i[r].size, n < 0)
            return r;
      }
      function bt(e, n, i, r) {
        n == null && (n = e.doc.first), i == null && (i = e.doc.first + e.doc.size), r || (r = 0);
        var a = e.display;
        if (r && i < a.viewTo && (a.updateLineNumbers == null || a.updateLineNumbers > n) && (a.updateLineNumbers = n), e.curOp.viewChanged = !0, n >= a.viewTo)
          un && Ti(e.doc, n) < a.viewTo && Cn(e);
        else if (i <= a.viewFrom)
          un && Po(e.doc, i + r) > a.viewFrom ? Cn(e) : (a.viewFrom += r, a.viewTo += r);
        else if (n <= a.viewFrom && i >= a.viewTo)
          Cn(e);
        else if (n <= a.viewFrom) {
          var m = _r(e, i, i + r, 1);
          m ? (a.view = a.view.slice(m.index), a.viewFrom = m.lineN, a.viewTo += r) : Cn(e);
        } else if (i >= a.viewTo) {
          var D = _r(e, n, n, -1);
          D ? (a.view = a.view.slice(0, D.index), a.viewTo = D.lineN) : Cn(e);
        } else {
          var N = _r(e, n, n, -1), O = _r(e, i, i + r, 1);
          N && O ? (a.view = a.view.slice(0, N.index).concat(Xr(e, N.lineN, O.lineN)).concat(a.view.slice(O.index)), a.viewTo += r) : Cn(e);
        }
        var U = a.externalMeasured;
        U && (i < U.lineN ? U.lineN += r : n < U.lineN + U.size && (a.externalMeasured = null));
      }
      function bn(e, n, i) {
        e.curOp.viewChanged = !0;
        var r = e.display, a = e.display.externalMeasured;
        if (a && n >= a.lineN && n < a.lineN + a.size && (r.externalMeasured = null), !(n < r.viewFrom || n >= r.viewTo)) {
          var m = r.view[Fn(e, n)];
          if (m.node != null) {
            var D = m.changes || (m.changes = []);
            ce(D, i) == -1 && D.push(i);
          }
        }
      }
      function Cn(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function _r(e, n, i, r) {
        var a = Fn(e, n), m, D = e.display.view;
        if (!un || i == e.doc.first + e.doc.size)
          return { index: a, lineN: i };
        for (var N = e.display.viewFrom, O = 0; O < a; O++)
          N += D[O].size;
        if (N != n) {
          if (r > 0) {
            if (a == D.length - 1)
              return null;
            m = N + D[a].size - n, a++;
          } else
            m = N - n;
          n += m, i += m;
        }
        for (; Ti(e.doc, i) != i; ) {
          if (a == (r < 0 ? 0 : D.length - 1))
            return null;
          i += r * D[a - (r < 0 ? 1 : 0)].size, a += r;
        }
        return { index: a, lineN: i };
      }
      function ql(e, n, i) {
        var r = e.display, a = r.view;
        a.length == 0 || n >= r.viewTo || i <= r.viewFrom ? (r.view = Xr(e, n, i), r.viewFrom = n) : (r.viewFrom > n ? r.view = Xr(e, n, r.viewFrom).concat(r.view) : r.viewFrom < n && (r.view = r.view.slice(Fn(e, n))), r.viewFrom = n, r.viewTo < i ? r.view = r.view.concat(Xr(e, r.viewTo, i)) : r.viewTo > i && (r.view = r.view.slice(0, Fn(e, i)))), r.viewTo = i;
      }
      function ea(e) {
        for (var n = e.display.view, i = 0, r = 0; r < n.length; r++) {
          var a = n[r];
          !a.hidden && (!a.node || a.changes) && ++i;
        }
        return i;
      }
      function yr(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function ta(e, n) {
        n === void 0 && (n = !0);
        var i = e.doc, r = {}, a = r.cursors = document.createDocumentFragment(), m = r.selection = document.createDocumentFragment(), D = e.options.$customCursor;
        D && (n = !0);
        for (var N = 0; N < i.sel.ranges.length; N++)
          if (!(!n && N == i.sel.primIndex)) {
            var O = i.sel.ranges[N];
            if (!(O.from().line >= e.display.viewTo || O.to().line < e.display.viewFrom)) {
              var U = O.empty();
              if (D) {
                var G = D(e, O);
                G && Ui(e, G, a);
              } else
                (U || e.options.showCursorWhenSelecting) && Ui(e, O.head, a);
              U || _l(e, O, m);
            }
          }
        return r;
      }
      function Ui(e, n, i) {
        var r = Gt(e, n, "div", null, null, !e.options.singleCursorHeightPerLine), a = i.appendChild(M("div", "\xA0", "CodeMirror-cursor"));
        if (a.style.left = r.left + "px", a.style.top = r.top + "px", a.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var m = qr(e, n, "div", null, null), D = m.right - m.left;
          a.style.width = (D > 0 ? D : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var N = i.appendChild(M("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
          N.style.display = "", N.style.left = r.other.left + "px", N.style.top = r.other.top + "px", N.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function ei(e, n) {
        return e.top - n.top || e.left - n.left;
      }
      function _l(e, n, i) {
        var r = e.display, a = e.doc, m = document.createDocumentFragment(), D = zo(e.display), N = D.left, O = Math.max(r.sizerWidth, Mn(e) - r.sizer.offsetLeft) - D.right, U = a.direction == "ltr";
        function G(ge, Se, Re, Ie) {
          Se < 0 && (Se = 0), Se = Math.round(Se), Ie = Math.round(Ie), m.appendChild(M("div", null, "CodeMirror-selected", "position: absolute; left: " + ge + `px;
                             top: ` + Se + "px; width: " + (Re == null ? O - ge : Re) + `px;
                             height: ` + (Ie - Se) + "px"));
        }
        function K(ge, Se, Re) {
          var Ie = Te(a, ge), He = Ie.text.length, Ge, ut;
          function Je(tt, wt) {
            return qr(e, J(ge, tt), "div", Ie, wt);
          }
          function Mt(tt, wt, ct) {
            var ot = qo(e, Ie, null, tt), nt = wt == "ltr" == (ct == "after") ? "left" : "right", _e = ct == "after" ? ot.begin : ot.end - (/\s/.test(Ie.text.charAt(ot.end - 1)) ? 2 : 1);
            return Je(_e, nt)[nt];
          }
          var Tt = Pe(Ie, a.direction);
          return It(Tt, Se || 0, Re == null ? He : Re, function(tt, wt, ct, ot) {
            var nt = ct == "ltr", _e = Je(tt, nt ? "left" : "right"), Dt = Je(wt - 1, nt ? "right" : "left"), lr = Se == null && tt == 0, Pn = Re == null && wt == He, ht = ot == 0, rn = !Tt || ot == Tt.length - 1;
            if (Dt.top - _e.top <= 3) {
              var ft = (U ? lr : Pn) && ht, vo = (U ? Pn : lr) && rn, hn = ft ? N : (nt ? _e : Dt).left, Un = vo ? O : (nt ? Dt : _e).right;
              G(hn, _e.top, Un - hn, _e.bottom);
            } else {
              var zn, At, sr, po;
              nt ? (zn = U && lr && ht ? N : _e.left, At = U ? O : Mt(tt, ct, "before"), sr = U ? N : Mt(wt, ct, "after"), po = U && Pn && rn ? O : Dt.right) : (zn = U ? Mt(tt, ct, "before") : N, At = !U && lr && ht ? O : _e.right, sr = !U && Pn && rn ? N : Dt.left, po = U ? Mt(wt, ct, "after") : O), G(zn, _e.top, At - zn, _e.bottom), _e.bottom < Dt.top && G(N, _e.bottom, null, Dt.top), G(sr, Dt.top, po - sr, Dt.bottom);
            }
            (!Ge || ei(_e, Ge) < 0) && (Ge = _e), ei(Dt, Ge) < 0 && (Ge = Dt), (!ut || ei(_e, ut) < 0) && (ut = _e), ei(Dt, ut) < 0 && (ut = Dt);
          }), { start: Ge, end: ut };
        }
        var ee = n.from(), _ = n.to();
        if (ee.line == _.line)
          K(ee.line, ee.ch, _.ch);
        else {
          var oe = Te(a, ee.line), le = Te(a, _.line), de = Yt(oe) == Yt(le), he = K(ee.line, ee.ch, de ? oe.text.length + 1 : null).end, Ae = K(_.line, de ? 0 : null, _.ch).start;
          de && (he.top < Ae.top - 2 ? (G(he.right, he.top, null, he.bottom), G(N, Ae.top, Ae.left, Ae.bottom)) : G(he.right, he.top, Ae.left - he.right, he.bottom)), he.bottom < Ae.top && G(N, he.bottom, null, Ae.top);
        }
        i.appendChild(m);
      }
      function zi(e) {
        if (!!e.state.focused) {
          var n = e.display;
          clearInterval(n.blinker);
          var i = !0;
          n.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? n.blinker = setInterval(function() {
            e.hasFocus() || Xn(e), n.cursorDiv.style.visibility = (i = !i) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (n.cursorDiv.style.visibility = "hidden");
        }
      }
      function na(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Wi(e));
      }
      function ji(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Xn(e));
        }, 100);
      }
      function Wi(e, n) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (Ce(e, "focus", e, n), e.state.focused = !0, q(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), S && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), zi(e));
      }
      function Xn(e, n) {
        e.state.delayingBlurEvent || (e.state.focused && (Ce(e, "blur", e, n), e.state.focused = !1, $(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function ti(e) {
        for (var n = e.display, i = n.lineDiv.offsetTop, r = Math.max(0, n.scroller.getBoundingClientRect().top), a = n.lineDiv.getBoundingClientRect().top, m = 0, D = 0; D < n.view.length; D++) {
          var N = n.view[D], O = e.options.lineWrapping, U = void 0, G = 0;
          if (!N.hidden) {
            if (a += N.line.height, f && c < 8) {
              var K = N.node.offsetTop + N.node.offsetHeight;
              U = K - i, i = K;
            } else {
              var ee = N.node.getBoundingClientRect();
              U = ee.bottom - ee.top, !O && N.text.firstChild && (G = N.text.firstChild.getBoundingClientRect().right - ee.left - 1);
            }
            var _ = N.line.height - U;
            if ((_ > 5e-3 || _ < -5e-3) && (a < r && (m -= _), jt(N.line, U), ra(N.line), N.rest))
              for (var oe = 0; oe < N.rest.length; oe++)
                ra(N.rest[oe]);
            if (G > e.display.sizerWidth) {
              var le = Math.ceil(G / Kn(e.display));
              le > e.display.maxLineLength && (e.display.maxLineLength = le, e.display.maxLine = N.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(m) > 2 && (n.scroller.scrollTop += m);
      }
      function ra(e) {
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n) {
            var i = e.widgets[n], r = i.node.parentNode;
            r && (i.height = r.offsetHeight);
          }
      }
      function ni(e, n, i) {
        var r = i && i.top != null ? Math.max(0, i.top) : e.scroller.scrollTop;
        r = Math.floor(r - Jr(e));
        var a = i && i.bottom != null ? i.bottom : r + e.wrapper.clientHeight, m = _t(n, r), D = _t(n, a);
        if (i && i.ensure) {
          var N = i.ensure.from.line, O = i.ensure.to.line;
          N < m ? (m = N, D = _t(n, dn(Te(n, N)) + e.wrapper.clientHeight)) : Math.min(O, n.lastLine()) >= D && (m = _t(n, dn(Te(n, O)) - e.wrapper.clientHeight), D = O);
        }
        return { from: m, to: Math.max(D, m + 1) };
      }
      function es(e, n) {
        if (!Oe(e, "scrollCursorIntoView")) {
          var i = e.display, r = i.sizer.getBoundingClientRect(), a = null, m = i.wrapper.ownerDocument;
          if (n.top + r.top < 0 ? a = !0 : n.bottom + r.top > (m.defaultView.innerHeight || m.documentElement.clientHeight) && (a = !1), a != null && !w) {
            var D = M("div", "\u200B", null, `position: absolute;
                         top: ` + (n.top - i.viewOffset - Jr(e.display)) + `px;
                         height: ` + (n.bottom - n.top + tn(e) + i.barHeight) + `px;
                         left: ` + n.left + "px; width: " + Math.max(2, n.right - n.left) + "px;");
            e.display.lineSpace.appendChild(D), D.scrollIntoView(a), e.display.lineSpace.removeChild(D);
          }
        }
      }
      function ts(e, n, i, r) {
        r == null && (r = 0);
        var a;
        !e.options.lineWrapping && n == i && (i = n.sticky == "before" ? J(n.line, n.ch + 1, "before") : n, n = n.ch ? J(n.line, n.sticky == "before" ? n.ch - 1 : n.ch, "after") : n);
        for (var m = 0; m < 5; m++) {
          var D = !1, N = Gt(e, n), O = !i || i == n ? N : Gt(e, i);
          a = {
            left: Math.min(N.left, O.left),
            top: Math.min(N.top, O.top) - r,
            right: Math.max(N.left, O.left),
            bottom: Math.max(N.bottom, O.bottom) + r
          };
          var U = Vi(e, a), G = e.doc.scrollTop, K = e.doc.scrollLeft;
          if (U.scrollTop != null && (xr(e, U.scrollTop), Math.abs(e.doc.scrollTop - G) > 1 && (D = !0)), U.scrollLeft != null && (On(e, U.scrollLeft), Math.abs(e.doc.scrollLeft - K) > 1 && (D = !0)), !D)
            break;
        }
        return a;
      }
      function ns(e, n) {
        var i = Vi(e, n);
        i.scrollTop != null && xr(e, i.scrollTop), i.scrollLeft != null && On(e, i.scrollLeft);
      }
      function Vi(e, n) {
        var i = e.display, r = Qn(e.display);
        n.top < 0 && (n.top = 0);
        var a = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : i.scroller.scrollTop, m = Pi(e), D = {};
        n.bottom - n.top > m && (n.bottom = n.top + m);
        var N = e.doc.height + Ri(i), O = n.top < r, U = n.bottom > N - r;
        if (n.top < a)
          D.scrollTop = O ? 0 : n.top;
        else if (n.bottom > a + m) {
          var G = Math.min(n.top, (U ? N : n.bottom) - m);
          G != a && (D.scrollTop = G);
        }
        var K = e.options.fixedGutter ? 0 : i.gutters.offsetWidth, ee = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : i.scroller.scrollLeft - K, _ = Mn(e) - i.gutters.offsetWidth, oe = n.right - n.left > _;
        return oe && (n.right = n.left + _), n.left < 10 ? D.scrollLeft = 0 : n.left < ee ? D.scrollLeft = Math.max(0, n.left + K - (oe ? 0 : 10)) : n.right > _ + ee - 3 && (D.scrollLeft = n.right + (oe ? 0 : 10) - _), D;
      }
      function ki(e, n) {
        n != null && (ri(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + n);
      }
      function Jn(e) {
        ri(e);
        var n = e.getCursor();
        e.curOp.scrollToPos = { from: n, to: n, margin: e.options.cursorScrollMargin };
      }
      function Ar(e, n, i) {
        (n != null || i != null) && ri(e), n != null && (e.curOp.scrollLeft = n), i != null && (e.curOp.scrollTop = i);
      }
      function rs(e, n) {
        ri(e), e.curOp.scrollToPos = n;
      }
      function ri(e) {
        var n = e.curOp.scrollToPos;
        if (n) {
          e.curOp.scrollToPos = null;
          var i = Jo(e, n.from), r = Jo(e, n.to);
          ia(e, i, r, n.margin);
        }
      }
      function ia(e, n, i, r) {
        var a = Vi(e, {
          left: Math.min(n.left, i.left),
          top: Math.min(n.top, i.top) - r,
          right: Math.max(n.right, i.right),
          bottom: Math.max(n.bottom, i.bottom) + r
        });
        Ar(e, a.scrollLeft, a.scrollTop);
      }
      function xr(e, n) {
        Math.abs(e.doc.scrollTop - n) < 2 || (t || Gi(e, { top: n }), oa(e, n, !0), t && Gi(e), br(e, 100));
      }
      function oa(e, n, i) {
        n = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, n)), !(e.display.scroller.scrollTop == n && !i) && (e.doc.scrollTop = n, e.display.scrollbars.setScrollTop(n), e.display.scroller.scrollTop != n && (e.display.scroller.scrollTop = n));
      }
      function On(e, n, i, r) {
        n = Math.max(0, Math.min(n, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((i ? n == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - n) < 2) && !r) && (e.doc.scrollLeft = n, fa(e), e.display.scroller.scrollLeft != n && (e.display.scroller.scrollLeft = n), e.display.scrollbars.setScrollLeft(n));
      }
      function Er(e) {
        var n = e.display, i = n.gutters.offsetWidth, r = Math.round(e.doc.height + Ri(e.display));
        return {
          clientHeight: n.scroller.clientHeight,
          viewHeight: n.wrapper.clientHeight,
          scrollWidth: n.scroller.scrollWidth,
          clientWidth: n.scroller.clientWidth,
          viewWidth: n.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? i : 0,
          docHeight: r,
          scrollHeight: r + tn(e) + n.barHeight,
          nativeBarWidth: n.nativeBarWidth,
          gutterWidth: i
        };
      }
      var Bn = function(e, n, i) {
        this.cm = i;
        var r = this.vert = M("div", [M("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), a = this.horiz = M("div", [M("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = a.tabIndex = -1, e(r), e(a), re(r, "scroll", function() {
          r.clientHeight && n(r.scrollTop, "vertical");
        }), re(a, "scroll", function() {
          a.clientWidth && n(a.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, f && c < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      Bn.prototype.update = function(e) {
        var n = e.scrollWidth > e.clientWidth + 1, i = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (i) {
          this.vert.style.display = "block", this.vert.style.bottom = n ? r + "px" : "0";
          var a = e.viewHeight - (n ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + a) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (n) {
          this.horiz.style.display = "block", this.horiz.style.right = i ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var m = e.viewWidth - e.barLeft - (i ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + m) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: i ? r : 0, bottom: n ? r : 0 };
      }, Bn.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, Bn.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, Bn.prototype.zeroWidthHack = function() {
        var e = P && !x ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new ue(), this.disableVert = new ue();
      }, Bn.prototype.enableZeroWidthBar = function(e, n, i) {
        e.style.visibility = "";
        function r() {
          var a = e.getBoundingClientRect(), m = i == "vert" ? document.elementFromPoint(a.right - 1, (a.top + a.bottom) / 2) : document.elementFromPoint((a.right + a.left) / 2, a.bottom - 1);
          m != e ? e.style.visibility = "hidden" : n.set(1e3, r);
        }
        n.set(1e3, r);
      }, Bn.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Sr = function() {
      };
      Sr.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Sr.prototype.setScrollLeft = function() {
      }, Sr.prototype.setScrollTop = function() {
      }, Sr.prototype.clear = function() {
      };
      function Zn(e, n) {
        n || (n = Er(e));
        var i = e.display.barWidth, r = e.display.barHeight;
        aa(e, n);
        for (var a = 0; a < 4 && i != e.display.barWidth || r != e.display.barHeight; a++)
          i != e.display.barWidth && e.options.lineWrapping && ti(e), aa(e, Er(e)), i = e.display.barWidth, r = e.display.barHeight;
      }
      function aa(e, n) {
        var i = e.display, r = i.scrollbars.update(n);
        i.sizer.style.paddingRight = (i.barWidth = r.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = r.bottom) + "px", i.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = r.bottom + "px", i.scrollbarFiller.style.width = r.right + "px") : i.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = r.bottom + "px", i.gutterFiller.style.width = n.gutterWidth + "px") : i.gutterFiller.style.display = "";
      }
      var la = { native: Bn, null: Sr };
      function sa(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && $(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new la[e.options.scrollbarStyle](function(n) {
          e.display.wrapper.insertBefore(n, e.display.scrollbarFiller), re(n, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), n.setAttribute("cm-not-content", "true");
        }, function(n, i) {
          i == "horizontal" ? On(e, n) : xr(e, n);
        }, e), e.display.scrollbars.addClass && q(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var os = 0;
      function Hn(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++os,
          markArrays: null
        }, Ol(e.curOp);
      }
      function $n(e) {
        var n = e.curOp;
        n && Hl(n, function(i) {
          for (var r = 0; r < i.ops.length; r++)
            i.ops[r].cm.curOp = null;
          as(i);
        });
      }
      function as(e) {
        for (var n = e.ops, i = 0; i < n.length; i++)
          ls(n[i]);
        for (var r = 0; r < n.length; r++)
          ss(n[r]);
        for (var a = 0; a < n.length; a++)
          us(n[a]);
        for (var m = 0; m < n.length; m++)
          fs(n[m]);
        for (var D = 0; D < n.length; D++)
          ds(n[D]);
      }
      function ls(e) {
        var n = e.cm, i = n.display;
        vs(n), e.updateMaxLine && Di(n), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && n.options.lineWrapping, e.update = e.mustUpdate && new ii(n, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function ss(e) {
        e.updatedDisplay = e.mustUpdate && Yi(e.cm, e.update);
      }
      function us(e) {
        var n = e.cm, i = n.display;
        e.updatedDisplay && ti(n), e.barMeasure = Er(n), i.maxLineChanged && !n.options.lineWrapping && (e.adjustWidthTo = Wo(n, i.maxLine, i.maxLine.text.length).left + 3, n.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(i.scroller.clientWidth, i.sizer.offsetLeft + e.adjustWidthTo + tn(n) + n.display.barWidth), e.maxScrollLeft = Math.max(0, i.sizer.offsetLeft + e.adjustWidthTo - Mn(n))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = i.input.prepareSelection());
      }
      function fs(e) {
        var n = e.cm;
        e.adjustWidthTo != null && (n.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < n.doc.scrollLeft && On(n, Math.min(n.display.scroller.scrollLeft, e.maxScrollLeft), !0), n.display.maxLineChanged = !1);
        var i = e.focus && e.focus == te(me(n));
        e.preparedSelection && n.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != n.doc.height) && Zn(n, e.barMeasure), e.updatedDisplay && Ki(n, e.barMeasure), e.selectionChanged && zi(n), n.state.focused && e.updateInput && n.display.input.reset(e.typing), i && na(e.cm);
      }
      function ds(e) {
        var n = e.cm, i = n.display, r = n.doc;
        if (e.updatedDisplay && ua(n, e.update), i.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (i.wheelStartX = i.wheelStartY = null), e.scrollTop != null && oa(n, e.scrollTop, e.forceScroll), e.scrollLeft != null && On(n, e.scrollLeft, !0, !0), e.scrollToPos) {
          var a = ts(
            n,
            Le(r, e.scrollToPos.from),
            Le(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          es(n, a);
        }
        var m = e.maybeHiddenMarkers, D = e.maybeUnhiddenMarkers;
        if (m)
          for (var N = 0; N < m.length; ++N)
            m[N].lines.length || Ce(m[N], "hide");
        if (D)
          for (var O = 0; O < D.length; ++O)
            D[O].lines.length && Ce(D[O], "unhide");
        i.wrapper.offsetHeight && (r.scrollTop = n.display.scroller.scrollTop), e.changeObjs && Ce(n, "changes", n, e.changeObjs), e.update && e.update.finish();
      }
      function Pt(e, n) {
        if (e.curOp)
          return n();
        Hn(e);
        try {
          return n();
        } finally {
          $n(e);
        }
      }
      function lt(e, n) {
        return function() {
          if (e.curOp)
            return n.apply(e, arguments);
          Hn(e);
          try {
            return n.apply(e, arguments);
          } finally {
            $n(e);
          }
        };
      }
      function yt(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          Hn(this);
          try {
            return e.apply(this, arguments);
          } finally {
            $n(this);
          }
        };
      }
      function st(e) {
        return function() {
          var n = this.cm;
          if (!n || n.curOp)
            return e.apply(this, arguments);
          Hn(n);
          try {
            return e.apply(this, arguments);
          } finally {
            $n(n);
          }
        };
      }
      function br(e, n) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(n, ve(cs, e));
      }
      function cs(e) {
        var n = e.doc;
        if (!(n.highlightFrontier >= e.display.viewTo)) {
          var i = +new Date() + e.options.workTime, r = cr(e, n.highlightFrontier), a = [];
          n.iter(r.line, Math.min(n.first + n.size, e.display.viewTo + 500), function(m) {
            if (r.line >= e.display.viewFrom) {
              var D = m.styles, N = m.text.length > e.options.maxHighlightLength ? ln(n.mode, r.state) : null, O = go(e, m, r, !0);
              N && (r.state = N), m.styles = O.styles;
              var U = m.styleClasses, G = O.classes;
              G ? m.styleClasses = G : U && (m.styleClasses = null);
              for (var K = !D || D.length != m.styles.length || U != G && (!U || !G || U.bgClass != G.bgClass || U.textClass != G.textClass), ee = 0; !K && ee < D.length; ++ee)
                K = D[ee] != m.styles[ee];
              K && a.push(r.line), m.stateAfter = r.save(), r.nextLine();
            } else
              m.text.length <= e.options.maxHighlightLength && Ei(e, m.text, r), m.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+new Date() > i)
              return br(e, e.options.workDelay), !0;
          }), n.highlightFrontier = r.line, n.modeFrontier = Math.max(n.modeFrontier, r.line), a.length && Pt(e, function() {
            for (var m = 0; m < a.length; m++)
              bn(e, a[m], "text");
          });
        }
      }
      var ii = function(e, n, i) {
        var r = e.display;
        this.viewport = n, this.visible = ni(r, e.doc, n), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Mn(e), this.force = i, this.dims = Bi(e), this.events = [];
      };
      ii.prototype.signal = function(e, n) {
        Xe(e, n) && this.events.push(arguments);
      }, ii.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          Ce.apply(null, this.events[e]);
      };
      function vs(e) {
        var n = e.display;
        !n.scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = tn(e) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = tn(e) + "px", n.scrollbarsClipped = !0);
      }
      function ps(e) {
        if (e.hasFocus())
          return null;
        var n = te(me(e));
        if (!n || !Z(e.display.lineDiv, n))
          return null;
        var i = { activeElt: n };
        if (window.getSelection) {
          var r = pe(e).getSelection();
          r.anchorNode && r.extend && Z(e.display.lineDiv, r.anchorNode) && (i.anchorNode = r.anchorNode, i.anchorOffset = r.anchorOffset, i.focusNode = r.focusNode, i.focusOffset = r.focusOffset);
        }
        return i;
      }
      function hs(e) {
        if (!(!e || !e.activeElt || e.activeElt == te(e.activeElt.ownerDocument)) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && Z(document.body, e.anchorNode) && Z(document.body, e.focusNode))) {
          var n = e.activeElt.ownerDocument, i = n.defaultView.getSelection(), r = n.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), i.removeAllRanges(), i.addRange(r), i.extend(e.focusNode, e.focusOffset);
        }
      }
      function Yi(e, n) {
        var i = e.display, r = e.doc;
        if (n.editorIsHidden)
          return Cn(e), !1;
        if (!n.force && n.visible.from >= i.viewFrom && n.visible.to <= i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && ea(e) == 0)
          return !1;
        da(e) && (Cn(e), n.dims = Bi(e));
        var a = r.first + r.size, m = Math.max(n.visible.from - e.options.viewportMargin, r.first), D = Math.min(a, n.visible.to + e.options.viewportMargin);
        i.viewFrom < m && m - i.viewFrom < 20 && (m = Math.max(r.first, i.viewFrom)), i.viewTo > D && i.viewTo - D < 20 && (D = Math.min(a, i.viewTo)), un && (m = Ti(e.doc, m), D = Po(e.doc, D));
        var N = m != i.viewFrom || D != i.viewTo || i.lastWrapHeight != n.wrapperHeight || i.lastWrapWidth != n.wrapperWidth;
        ql(e, m, D), i.viewOffset = dn(Te(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
        var O = ea(e);
        if (!N && O == 0 && !n.force && i.renderedView == i.view && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo))
          return !1;
        var U = ps(e);
        return O > 4 && (i.lineDiv.style.display = "none"), gs(e, i.updateLineNumbers, n.dims), O > 4 && (i.lineDiv.style.display = ""), i.renderedView = i.view, hs(U), B(i.cursorDiv), B(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, N && (i.lastWrapHeight = n.wrapperHeight, i.lastWrapWidth = n.wrapperWidth, br(e, 400)), i.updateLineNumbers = null, !0;
      }
      function ua(e, n) {
        for (var i = n.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || n.oldDisplayWidth == Mn(e)) {
            if (i && i.top != null && (i = { top: Math.min(e.doc.height + Ri(e.display) - Pi(e), i.top) }), n.visible = ni(e.display, e.doc, i), n.visible.from >= e.display.viewFrom && n.visible.to <= e.display.viewTo)
              break;
          } else
            r && (n.visible = ni(e.display, e.doc, i));
          if (!Yi(e, n))
            break;
          ti(e);
          var a = Er(e);
          yr(e), Zn(e, a), Ki(e, a), n.force = !1;
        }
        n.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (n.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Gi(e, n) {
        var i = new ii(e, n);
        if (Yi(e, i)) {
          ti(e), ua(e, i);
          var r = Er(e);
          yr(e), Zn(e, r), Ki(e, r), i.finish();
        }
      }
      function gs(e, n, i) {
        var r = e.display, a = e.options.lineNumbers, m = r.lineDiv, D = m.firstChild;
        function N(oe) {
          var le = oe.nextSibling;
          return S && P && e.display.currentWheelTarget == oe ? oe.style.display = "none" : oe.parentNode.removeChild(oe), le;
        }
        for (var O = r.view, U = r.viewFrom, G = 0; G < O.length; G++) {
          var K = O[G];
          if (!K.hidden)
            if (!K.node || K.node.parentNode != m) {
              var ee = Wl(e, K, U, i);
              m.insertBefore(ee, D);
            } else {
              for (; D != K.node; )
                D = N(D);
              var _ = a && n != null && n <= U && K.lineNumber;
              K.changes && (ce(K.changes, "gutter") > -1 && (_ = !1), Oo(e, K, U, i)), _ && (B(K.lineNumber), K.lineNumber.appendChild(document.createTextNode(X(e.options, U)))), D = K.node.nextSibling;
            }
          U += K.size;
        }
        for (; D; )
          D = N(D);
      }
      function Qi(e) {
        var n = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = n + "px", at(e, "gutterChanged", e);
      }
      function Ki(e, n) {
        e.display.sizer.style.minHeight = n.docHeight + "px", e.display.heightForcer.style.top = n.docHeight + "px", e.display.gutters.style.height = n.docHeight + e.display.barHeight + tn(e) + "px";
      }
      function fa(e) {
        var n = e.display, i = n.view;
        if (!(!n.alignWidgets && (!n.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = Hi(n) - n.scroller.scrollLeft + e.doc.scrollLeft, a = n.gutters.offsetWidth, m = r + "px", D = 0; D < i.length; D++)
            if (!i[D].hidden) {
              e.options.fixedGutter && (i[D].gutter && (i[D].gutter.style.left = m), i[D].gutterBackground && (i[D].gutterBackground.style.left = m));
              var N = i[D].alignable;
              if (N)
                for (var O = 0; O < N.length; O++)
                  N[O].style.left = m;
            }
          e.options.fixedGutter && (n.gutters.style.left = r + a + "px");
        }
      }
      function da(e) {
        if (!e.options.lineNumbers)
          return !1;
        var n = e.doc, i = X(e.options, n.first + n.size - 1), r = e.display;
        if (i.length != r.lineNumChars) {
          var a = r.measure.appendChild(M(
            "div",
            [M("div", i)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), m = a.firstChild.offsetWidth, D = a.offsetWidth - m;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(m, r.lineGutter.offsetWidth - D) + 1, r.lineNumWidth = r.lineNumInnerWidth + D, r.lineNumChars = r.lineNumInnerWidth ? i.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Qi(e.display), !0;
        }
        return !1;
      }
      function Xi(e, n) {
        for (var i = [], r = !1, a = 0; a < e.length; a++) {
          var m = e[a], D = null;
          if (typeof m != "string" && (D = m.style, m = m.className), m == "CodeMirror-linenumbers")
            if (n)
              r = !0;
            else
              continue;
          i.push({ className: m, style: D });
        }
        return n && !r && i.push({ className: "CodeMirror-linenumbers", style: null }), i;
      }
      function ca(e) {
        var n = e.gutters, i = e.gutterSpecs;
        B(n), e.lineGutter = null;
        for (var r = 0; r < i.length; ++r) {
          var a = i[r], m = a.className, D = a.style, N = n.appendChild(M("div", null, "CodeMirror-gutter " + m));
          D && (N.style.cssText = D), m == "CodeMirror-linenumbers" && (e.lineGutter = N, N.style.width = (e.lineNumWidth || 1) + "px");
        }
        n.style.display = i.length ? "" : "none", Qi(e);
      }
      function Cr(e) {
        ca(e.display), bt(e), fa(e);
      }
      function ms(e, n, i, r) {
        var a = this;
        this.input = i, a.scrollbarFiller = M("div", null, "CodeMirror-scrollbar-filler"), a.scrollbarFiller.setAttribute("cm-not-content", "true"), a.gutterFiller = M("div", null, "CodeMirror-gutter-filler"), a.gutterFiller.setAttribute("cm-not-content", "true"), a.lineDiv = Y("div", null, "CodeMirror-code"), a.selectionDiv = M("div", null, null, "position: relative; z-index: 1"), a.cursorDiv = M("div", null, "CodeMirror-cursors"), a.measure = M("div", null, "CodeMirror-measure"), a.lineMeasure = M("div", null, "CodeMirror-measure"), a.lineSpace = Y(
          "div",
          [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var m = Y("div", [a.lineSpace], "CodeMirror-lines");
        a.mover = M("div", [m], null, "position: relative"), a.sizer = M("div", [a.mover], "CodeMirror-sizer"), a.sizerWidth = null, a.heightForcer = M("div", null, null, "position: absolute; height: " + Fe + "px; width: 1px;"), a.gutters = M("div", null, "CodeMirror-gutters"), a.lineGutter = null, a.scroller = M("div", [a.sizer, a.heightForcer, a.gutters], "CodeMirror-scroll"), a.scroller.setAttribute("tabIndex", "-1"), a.wrapper = M("div", [a.scrollbarFiller, a.gutterFiller, a.scroller], "CodeMirror"), C && A >= 105 && (a.wrapper.style.clipPath = "inset(0px)"), a.wrapper.setAttribute("translate", "no"), f && c < 8 && (a.gutters.style.zIndex = -1, a.scroller.style.paddingRight = 0), !S && !(t && I) && (a.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(a.wrapper) : e(a.wrapper)), a.viewFrom = a.viewTo = n.first, a.reportedViewFrom = a.reportedViewTo = n.first, a.view = [], a.renderedView = null, a.externalMeasured = null, a.viewOffset = 0, a.lastWrapHeight = a.lastWrapWidth = 0, a.updateLineNumbers = null, a.nativeBarWidth = a.barHeight = a.barWidth = 0, a.scrollbarsClipped = !1, a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null, a.alignWidgets = !1, a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null, a.maxLine = null, a.maxLineLength = 0, a.maxLineChanged = !1, a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null, a.shift = !1, a.selForContextMenu = null, a.activeTouch = null, a.gutterSpecs = Xi(r.gutters, r.lineNumbers), ca(a), i.init(a);
      }
      var oi = 0, vn = null;
      f ? vn = -0.53 : t ? vn = 15 : C ? vn = -0.7 : E && (vn = -1 / 3);
      function va(e) {
        var n = e.wheelDeltaX, i = e.wheelDeltaY;
        return n == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (n = e.detail), i == null && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : i == null && (i = e.wheelDelta), { x: n, y: i };
      }
      function ys(e) {
        var n = va(e);
        return n.x *= vn, n.y *= vn, n;
      }
      function pa(e, n) {
        C && A == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var i = va(n), r = i.x, a = i.y, m = vn;
        n.deltaMode === 0 && (r = n.deltaX, a = n.deltaY, m = 1);
        var D = e.display, N = D.scroller, O = N.scrollWidth > N.clientWidth, U = N.scrollHeight > N.clientHeight;
        if (!!(r && O || a && U)) {
          if (a && P && S) {
            e:
              for (var G = n.target, K = D.view; G != N; G = G.parentNode)
                for (var ee = 0; ee < K.length; ee++)
                  if (K[ee].node == G) {
                    e.display.currentWheelTarget = G;
                    break e;
                  }
          }
          if (r && !t && !y && m != null) {
            a && U && xr(e, Math.max(0, N.scrollTop + a * m)), On(e, Math.max(0, N.scrollLeft + r * m)), (!a || a && U) && We(n), D.wheelStartX = null;
            return;
          }
          if (a && m != null) {
            var _ = a * m, oe = e.doc.scrollTop, le = oe + D.wrapper.clientHeight;
            _ < 0 ? oe = Math.max(0, oe + _ - 50) : le = Math.min(e.doc.height, le + _ + 50), Gi(e, { top: oe, bottom: le });
          }
          oi < 20 && n.deltaMode !== 0 && (D.wheelStartX == null ? (D.wheelStartX = N.scrollLeft, D.wheelStartY = N.scrollTop, D.wheelDX = r, D.wheelDY = a, setTimeout(function() {
            if (D.wheelStartX != null) {
              var de = N.scrollLeft - D.wheelStartX, he = N.scrollTop - D.wheelStartY, Ae = he && D.wheelDY && he / D.wheelDY || de && D.wheelDX && de / D.wheelDX;
              D.wheelStartX = D.wheelStartY = null, Ae && (vn = (vn * oi + Ae) / (oi + 1), ++oi);
            }
          }, 200)) : (D.wheelDX += r, D.wheelDY += a));
        }
      }
      var Ht = function(e, n) {
        this.ranges = e, this.primIndex = n;
      };
      Ht.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, Ht.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var n = 0; n < this.ranges.length; n++) {
          var i = this.ranges[n], r = e.ranges[n];
          if (!Ne(i.anchor, r.anchor) || !Ne(i.head, r.head))
            return !1;
        }
        return !0;
      }, Ht.prototype.deepCopy = function() {
        for (var e = [], n = 0; n < this.ranges.length; n++)
          e[n] = new ke(Ue(this.ranges[n].anchor), Ue(this.ranges[n].head));
        return new Ht(e, this.primIndex);
      }, Ht.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, Ht.prototype.contains = function(e, n) {
        n || (n = e);
        for (var i = 0; i < this.ranges.length; i++) {
          var r = this.ranges[i];
          if (ie(n, r.from()) >= 0 && ie(e, r.to()) <= 0)
            return i;
        }
        return -1;
      };
      var ke = function(e, n) {
        this.anchor = e, this.head = n;
      };
      ke.prototype.from = function() {
        return it(this.anchor, this.head);
      }, ke.prototype.to = function() {
        return ze(this.anchor, this.head);
      }, ke.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function Qt(e, n, i) {
        var r = e && e.options.selectionsMayTouch, a = n[i];
        n.sort(function(ee, _) {
          return ie(ee.from(), _.from());
        }), i = ce(n, a);
        for (var m = 1; m < n.length; m++) {
          var D = n[m], N = n[m - 1], O = ie(N.to(), D.from());
          if (r && !D.empty() ? O > 0 : O >= 0) {
            var U = it(N.from(), D.from()), G = ze(N.to(), D.to()), K = N.empty() ? D.from() == D.head : N.from() == N.head;
            m <= i && --i, n.splice(--m, 2, new ke(K ? G : U, K ? U : G));
          }
        }
        return new Ht(n, i);
      }
      function Tn(e, n) {
        return new Ht([new ke(e, n || e)], 0);
      }
      function wn(e) {
        return e.text ? J(
          e.from.line + e.text.length - 1,
          Me(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function ha(e, n) {
        if (ie(e, n.from) < 0)
          return e;
        if (ie(e, n.to) <= 0)
          return wn(n);
        var i = e.line + n.text.length - (n.to.line - n.from.line) - 1, r = e.ch;
        return e.line == n.to.line && (r += wn(n).ch - n.to.ch), J(i, r);
      }
      function Ji(e, n) {
        for (var i = [], r = 0; r < e.sel.ranges.length; r++) {
          var a = e.sel.ranges[r];
          i.push(new ke(
            ha(a.anchor, n),
            ha(a.head, n)
          ));
        }
        return Qt(e.cm, i, e.sel.primIndex);
      }
      function ga(e, n, i) {
        return e.line == n.line ? J(i.line, e.ch - n.ch + i.ch) : J(i.line + (e.line - n.line), e.ch);
      }
      function As(e, n, i) {
        for (var r = [], a = J(e.first, 0), m = a, D = 0; D < n.length; D++) {
          var N = n[D], O = ga(N.from, a, m), U = ga(wn(N), a, m);
          if (a = N.to, m = U, i == "around") {
            var G = e.sel.ranges[D], K = ie(G.head, G.anchor) < 0;
            r[D] = new ke(K ? U : O, K ? O : U);
          } else
            r[D] = new ke(O, O);
        }
        return new Ht(r, e.sel.primIndex);
      }
      function Zi(e) {
        e.doc.mode = an(e.options, e.doc.modeOption), Tr(e);
      }
      function Tr(e) {
        e.doc.iter(function(n) {
          n.stateAfter && (n.stateAfter = null), n.styles && (n.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, br(e, 100), e.state.modeGen++, e.curOp && bt(e);
      }
      function ma(e, n) {
        return n.from.ch == 0 && n.to.ch == 0 && Me(n.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function qi(e, n, i, r) {
        function a(Ae) {
          return i ? i[Ae] : null;
        }
        function m(Ae, ge, Se) {
          wl(Ae, ge, Se, r), at(Ae, "change", Ae, n);
        }
        function D(Ae, ge) {
          for (var Se = [], Re = Ae; Re < ge; ++Re)
            Se.push(new kn(U[Re], a(Re), r));
          return Se;
        }
        var N = n.from, O = n.to, U = n.text, G = Te(e, N.line), K = Te(e, O.line), ee = Me(U), _ = a(U.length - 1), oe = O.line - N.line;
        if (n.full)
          e.insert(0, D(0, U.length)), e.remove(U.length, e.size - U.length);
        else if (ma(e, n)) {
          var le = D(0, U.length - 1);
          m(K, K.text, _), oe && e.remove(N.line, oe), le.length && e.insert(N.line, le);
        } else if (G == K)
          if (U.length == 1)
            m(G, G.text.slice(0, N.ch) + ee + G.text.slice(O.ch), _);
          else {
            var de = D(1, U.length - 1);
            de.push(new kn(ee + G.text.slice(O.ch), _, r)), m(G, G.text.slice(0, N.ch) + U[0], a(0)), e.insert(N.line + 1, de);
          }
        else if (U.length == 1)
          m(G, G.text.slice(0, N.ch) + U[0] + K.text.slice(O.ch), a(0)), e.remove(N.line + 1, oe);
        else {
          m(G, G.text.slice(0, N.ch) + U[0], a(0)), m(K, ee + K.text.slice(O.ch), _);
          var he = D(1, U.length - 1);
          oe > 1 && e.remove(N.line + 1, oe - 1), e.insert(N.line + 1, he);
        }
        at(e, "change", e, n);
      }
      function Dn(e, n, i) {
        function r(a, m, D) {
          if (a.linked)
            for (var N = 0; N < a.linked.length; ++N) {
              var O = a.linked[N];
              if (O.doc != m) {
                var U = D && O.sharedHist;
                i && !U || (n(O.doc, U), r(O.doc, a, U));
              }
            }
        }
        r(e, null, !0);
      }
      function ya(e, n) {
        if (n.cm)
          throw new Error("This document is already in use.");
        e.doc = n, n.cm = e, $i(e), Zi(e), Aa(e), e.options.direction = n.direction, e.options.lineWrapping || Di(e), e.options.mode = n.modeOption, bt(e);
      }
      function Aa(e) {
        (e.doc.direction == "rtl" ? q : $)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function xs(e) {
        Pt(e, function() {
          Aa(e), bt(e);
        });
      }
      function ai(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function _i(e, n) {
        var i = { from: Ue(n.from), to: wn(n), text: sn(e, n.from, n.to) };
        return Sa(e, i, n.from.line, n.to.line + 1), Dn(e, function(r) {
          return Sa(r, i, n.from.line, n.to.line + 1);
        }, !0), i;
      }
      function xa(e) {
        for (; e.length; ) {
          var n = Me(e);
          if (n.ranges)
            e.pop();
          else
            break;
        }
      }
      function Es(e, n) {
        if (n)
          return xa(e.done), Me(e.done);
        if (e.done.length && !Me(e.done).ranges)
          return Me(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), Me(e.done);
      }
      function Ea(e, n, i, r) {
        var a = e.history;
        a.undone.length = 0;
        var m = +new Date(), D, N;
        if ((a.lastOp == r || a.lastOrigin == n.origin && n.origin && (n.origin.charAt(0) == "+" && a.lastModTime > m - (e.cm ? e.cm.options.historyEventDelay : 500) || n.origin.charAt(0) == "*")) && (D = Es(a, a.lastOp == r)))
          N = Me(D.changes), ie(n.from, n.to) == 0 && ie(n.from, N.to) == 0 ? N.to = wn(n) : D.changes.push(_i(e, n));
        else {
          var O = Me(a.done);
          for ((!O || !O.ranges) && li(e.sel, a.done), D = {
            changes: [_i(e, n)],
            generation: a.generation
          }, a.done.push(D); a.done.length > a.undoDepth; )
            a.done.shift(), a.done[0].ranges || a.done.shift();
        }
        a.done.push(i), a.generation = ++a.maxGeneration, a.lastModTime = a.lastSelTime = m, a.lastOp = a.lastSelOp = r, a.lastOrigin = a.lastSelOrigin = n.origin, N || Ce(e, "historyAdded");
      }
      function Ss(e, n, i, r) {
        var a = n.charAt(0);
        return a == "*" || a == "+" && i.ranges.length == r.ranges.length && i.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function bs(e, n, i, r) {
        var a = e.history, m = r && r.origin;
        i == a.lastSelOp || m && a.lastSelOrigin == m && (a.lastModTime == a.lastSelTime && a.lastOrigin == m || Ss(e, m, Me(a.done), n)) ? a.done[a.done.length - 1] = n : li(n, a.done), a.lastSelTime = +new Date(), a.lastSelOrigin = m, a.lastSelOp = i, r && r.clearRedo !== !1 && xa(a.undone);
      }
      function li(e, n) {
        var i = Me(n);
        i && i.ranges && i.equals(e) || n.push(e);
      }
      function Sa(e, n, i, r) {
        var a = n["spans_" + e.id], m = 0;
        e.iter(Math.max(e.first, i), Math.min(e.first + e.size, r), function(D) {
          D.markedSpans && ((a || (a = n["spans_" + e.id] = {}))[m] = D.markedSpans), ++m;
        });
      }
      function Cs(e) {
        if (!e)
          return null;
        for (var n, i = 0; i < e.length; ++i)
          e[i].marker.explicitlyCleared ? n || (n = e.slice(0, i)) : n && n.push(e[i]);
        return n ? n.length ? n : null : e;
      }
      function Ts(e, n) {
        var i = n["spans_" + e.id];
        if (!i)
          return null;
        for (var r = [], a = 0; a < n.text.length; ++a)
          r.push(Cs(i[a]));
        return r;
      }
      function ba(e, n) {
        var i = Ts(e, n), r = bi(e, n);
        if (!i)
          return r;
        if (!r)
          return i;
        for (var a = 0; a < i.length; ++a) {
          var m = i[a], D = r[a];
          if (m && D) {
            e:
              for (var N = 0; N < D.length; ++N) {
                for (var O = D[N], U = 0; U < m.length; ++U)
                  if (m[U].marker == O.marker)
                    continue e;
                m.push(O);
              }
          } else
            D && (i[a] = D);
        }
        return i;
      }
      function qn(e, n, i) {
        for (var r = [], a = 0; a < e.length; ++a) {
          var m = e[a];
          if (m.ranges) {
            r.push(i ? Ht.prototype.deepCopy.call(m) : m);
            continue;
          }
          var D = m.changes, N = [];
          r.push({ changes: N });
          for (var O = 0; O < D.length; ++O) {
            var U = D[O], G = void 0;
            if (N.push({ from: U.from, to: U.to, text: U.text }), n)
              for (var K in U)
                (G = K.match(/^spans_(\d+)$/)) && ce(n, Number(G[1])) > -1 && (Me(N)[K] = U[K], delete U[K]);
          }
        }
        return r;
      }
      function eo(e, n, i, r) {
        if (r) {
          var a = e.anchor;
          if (i) {
            var m = ie(n, a) < 0;
            m != ie(i, a) < 0 ? (a = n, n = i) : m != ie(n, i) < 0 && (n = i);
          }
          return new ke(a, n);
        } else
          return new ke(i || n, n);
      }
      function si(e, n, i, r, a) {
        a == null && (a = e.cm && (e.cm.display.shift || e.extend)), pt(e, new Ht([eo(e.sel.primary(), n, i, a)], 0), r);
      }
      function Ca(e, n, i) {
        for (var r = [], a = e.cm && (e.cm.display.shift || e.extend), m = 0; m < e.sel.ranges.length; m++)
          r[m] = eo(e.sel.ranges[m], n[m], null, a);
        var D = Qt(e.cm, r, e.sel.primIndex);
        pt(e, D, i);
      }
      function to(e, n, i, r) {
        var a = e.sel.ranges.slice(0);
        a[n] = i, pt(e, Qt(e.cm, a, e.sel.primIndex), r);
      }
      function Ta(e, n, i, r) {
        pt(e, Tn(n, i), r);
      }
      function ws(e, n, i) {
        var r = {
          ranges: n.ranges,
          update: function(a) {
            this.ranges = [];
            for (var m = 0; m < a.length; m++)
              this.ranges[m] = new ke(
                Le(e, a[m].anchor),
                Le(e, a[m].head)
              );
          },
          origin: i && i.origin
        };
        return Ce(e, "beforeSelectionChange", e, r), e.cm && Ce(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != n.ranges ? Qt(e.cm, r.ranges, r.ranges.length - 1) : n;
      }
      function wa(e, n, i) {
        var r = e.history.done, a = Me(r);
        a && a.ranges ? (r[r.length - 1] = n, ui(e, n, i)) : pt(e, n, i);
      }
      function pt(e, n, i) {
        ui(e, n, i), bs(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i);
      }
      function ui(e, n, i) {
        (Xe(e, "beforeSelectionChange") || e.cm && Xe(e.cm, "beforeSelectionChange")) && (n = ws(e, n, i));
        var r = i && i.bias || (ie(n.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Da(e, Ra(e, n, r, !0)), !(i && i.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Jn(e.cm);
      }
      function Da(e, n) {
        n.equals(e.sel) || (e.sel = n, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, Et(e.cm)), at(e, "cursorActivity", e));
      }
      function Ia(e) {
        Da(e, Ra(e, e.sel, null, !1));
      }
      function Ra(e, n, i, r) {
        for (var a, m = 0; m < n.ranges.length; m++) {
          var D = n.ranges[m], N = n.ranges.length == e.sel.ranges.length && e.sel.ranges[m], O = fi(e, D.anchor, N && N.anchor, i, r), U = D.head == D.anchor ? O : fi(e, D.head, N && N.head, i, r);
          (a || O != D.anchor || U != D.head) && (a || (a = n.ranges.slice(0, m)), a[m] = new ke(O, U));
        }
        return a ? Qt(e.cm, a, n.primIndex) : n;
      }
      function _n(e, n, i, r, a) {
        var m = Te(e, n.line);
        if (m.markedSpans)
          for (var D = 0; D < m.markedSpans.length; ++D) {
            var N = m.markedSpans[D], O = N.marker, U = "selectLeft" in O ? !O.selectLeft : O.inclusiveLeft, G = "selectRight" in O ? !O.selectRight : O.inclusiveRight;
            if ((N.from == null || (U ? N.from <= n.ch : N.from < n.ch)) && (N.to == null || (G ? N.to >= n.ch : N.to > n.ch))) {
              if (a && (Ce(O, "beforeCursorEnter"), O.explicitlyCleared))
                if (m.markedSpans) {
                  --D;
                  continue;
                } else
                  break;
              if (!O.atomic)
                continue;
              if (i) {
                var K = O.find(r < 0 ? 1 : -1), ee = void 0;
                if ((r < 0 ? G : U) && (K = Pa(e, K, -r, K && K.line == n.line ? m : null)), K && K.line == n.line && (ee = ie(K, i)) && (r < 0 ? ee < 0 : ee > 0))
                  return _n(e, K, n, r, a);
              }
              var _ = O.find(r < 0 ? -1 : 1);
              return (r < 0 ? U : G) && (_ = Pa(e, _, r, _.line == n.line ? m : null)), _ ? _n(e, _, n, r, a) : null;
            }
          }
        return n;
      }
      function fi(e, n, i, r, a) {
        var m = r || 1, D = _n(e, n, i, m, a) || !a && _n(e, n, i, m, !0) || _n(e, n, i, -m, a) || !a && _n(e, n, i, -m, !0);
        return D || (e.cantEdit = !0, J(e.first, 0));
      }
      function Pa(e, n, i, r) {
        return i < 0 && n.ch == 0 ? n.line > e.first ? Le(e, J(n.line - 1)) : null : i > 0 && n.ch == (r || Te(e, n.line)).text.length ? n.line < e.first + e.size - 1 ? J(n.line + 1, 0) : null : new J(n.line, n.ch + i);
      }
      function Ma(e) {
        e.setSelection(J(e.firstLine(), 0), J(e.lastLine()), Be);
      }
      function Na(e, n, i) {
        var r = {
          canceled: !1,
          from: n.from,
          to: n.to,
          text: n.text,
          origin: n.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return i && (r.update = function(a, m, D, N) {
          a && (r.from = Le(e, a)), m && (r.to = Le(e, m)), D && (r.text = D), N !== void 0 && (r.origin = N);
        }), Ce(e, "beforeChange", e, r), e.cm && Ce(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function er(e, n, i) {
        if (e.cm) {
          if (!e.cm.curOp)
            return lt(e.cm, er)(e, n, i);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((Xe(e, "beforeChange") || e.cm && Xe(e.cm, "beforeChange")) && (n = Na(e, n, !0), !n))) {
          var r = bo && !i && Sl(e, n.from, n.to);
          if (r)
            for (var a = r.length - 1; a >= 0; --a)
              La(e, { from: r[a].from, to: r[a].to, text: a ? [""] : n.text, origin: n.origin });
          else
            La(e, n);
        }
      }
      function La(e, n) {
        if (!(n.text.length == 1 && n.text[0] == "" && ie(n.from, n.to) == 0)) {
          var i = Ji(e, n);
          Ea(e, n, i, e.cm ? e.cm.curOp.id : NaN), wr(e, n, i, bi(e, n));
          var r = [];
          Dn(e, function(a, m) {
            !m && ce(r, a.history) == -1 && (Ha(a.history, n), r.push(a.history)), wr(a, n, null, bi(a, n));
          });
        }
      }
      function di(e, n, i) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !i)) {
          for (var a = e.history, m, D = e.sel, N = n == "undo" ? a.done : a.undone, O = n == "undo" ? a.undone : a.done, U = 0; U < N.length && (m = N[U], !(i ? m.ranges && !m.equals(e.sel) : !m.ranges)); U++)
            ;
          if (U != N.length) {
            for (a.lastOrigin = a.lastSelOrigin = null; ; )
              if (m = N.pop(), m.ranges) {
                if (li(m, O), i && !m.equals(e.sel)) {
                  pt(e, m, { clearRedo: !1 });
                  return;
                }
                D = m;
              } else if (r) {
                N.push(m);
                return;
              } else
                break;
            var G = [];
            li(D, O), O.push({ changes: G, generation: a.generation }), a.generation = m.generation || ++a.maxGeneration;
            for (var K = Xe(e, "beforeChange") || e.cm && Xe(e.cm, "beforeChange"), ee = function(le) {
              var de = m.changes[le];
              if (de.origin = n, K && !Na(e, de, !1))
                return N.length = 0, {};
              G.push(_i(e, de));
              var he = le ? Ji(e, de) : Me(N);
              wr(e, de, he, ba(e, de)), !le && e.cm && e.cm.scrollIntoView({ from: de.from, to: wn(de) });
              var Ae = [];
              Dn(e, function(ge, Se) {
                !Se && ce(Ae, ge.history) == -1 && (Ha(ge.history, de), Ae.push(ge.history)), wr(ge, de, null, ba(ge, de));
              });
            }, _ = m.changes.length - 1; _ >= 0; --_) {
              var oe = ee(_);
              if (oe)
                return oe.v;
            }
          }
        }
      }
      function Fa(e, n) {
        if (n != 0 && (e.first += n, e.sel = new Ht(mt(e.sel.ranges, function(a) {
          return new ke(
            J(a.anchor.line + n, a.anchor.ch),
            J(a.head.line + n, a.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          bt(e.cm, e.first, e.first - n, n);
          for (var i = e.cm.display, r = i.viewFrom; r < i.viewTo; r++)
            bn(e.cm, r, "gutter");
        }
      }
      function wr(e, n, i, r) {
        if (e.cm && !e.cm.curOp)
          return lt(e.cm, wr)(e, n, i, r);
        if (n.to.line < e.first) {
          Fa(e, n.text.length - 1 - (n.to.line - n.from.line));
          return;
        }
        if (!(n.from.line > e.lastLine())) {
          if (n.from.line < e.first) {
            var a = n.text.length - 1 - (e.first - n.from.line);
            Fa(e, a), n = {
              from: J(e.first, 0),
              to: J(n.to.line + a, n.to.ch),
              text: [Me(n.text)],
              origin: n.origin
            };
          }
          var m = e.lastLine();
          n.to.line > m && (n = {
            from: n.from,
            to: J(m, Te(e, m).text.length),
            text: [n.text[0]],
            origin: n.origin
          }), n.removed = sn(e, n.from, n.to), i || (i = Ji(e, n)), e.cm ? Ds(e.cm, n, r) : qi(e, n, r), ui(e, i, Be), e.cantEdit && fi(e, J(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function Ds(e, n, i) {
        var r = e.doc, a = e.display, m = n.from, D = n.to, N = !1, O = m.line;
        e.options.lineWrapping || (O = Ve(Yt(Te(r, m.line))), r.iter(O, D.line + 1, function(_) {
          if (_ == a.maxLine)
            return N = !0, !0;
        })), r.sel.contains(n.from, n.to) > -1 && Et(e), qi(r, n, i, _o(e)), e.options.lineWrapping || (r.iter(O, m.line + n.text.length, function(_) {
          var oe = Kr(_);
          oe > a.maxLineLength && (a.maxLine = _, a.maxLineLength = oe, a.maxLineChanged = !0, N = !1);
        }), N && (e.curOp.updateMaxLine = !0)), hl(r, m.line), br(e, 400);
        var U = n.text.length - (D.line - m.line) - 1;
        n.full ? bt(e) : m.line == D.line && n.text.length == 1 && !ma(e.doc, n) ? bn(e, m.line, "text") : bt(e, m.line, D.line + 1, U);
        var G = Xe(e, "changes"), K = Xe(e, "change");
        if (K || G) {
          var ee = {
            from: m,
            to: D,
            text: n.text,
            removed: n.removed,
            origin: n.origin
          };
          K && at(e, "change", e, ee), G && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(ee);
        }
        e.display.selForContextMenu = null;
      }
      function tr(e, n, i, r, a) {
        var m;
        r || (r = i), ie(r, i) < 0 && (m = [r, i], i = m[0], r = m[1]), typeof n == "string" && (n = e.splitLines(n)), er(e, { from: i, to: r, text: n, origin: a });
      }
      function Oa(e, n, i, r) {
        i < e.line ? e.line += r : n < e.line && (e.line = n, e.ch = 0);
      }
      function Ba(e, n, i, r) {
        for (var a = 0; a < e.length; ++a) {
          var m = e[a], D = !0;
          if (m.ranges) {
            m.copied || (m = e[a] = m.deepCopy(), m.copied = !0);
            for (var N = 0; N < m.ranges.length; N++)
              Oa(m.ranges[N].anchor, n, i, r), Oa(m.ranges[N].head, n, i, r);
            continue;
          }
          for (var O = 0; O < m.changes.length; ++O) {
            var U = m.changes[O];
            if (i < U.from.line)
              U.from = J(U.from.line + r, U.from.ch), U.to = J(U.to.line + r, U.to.ch);
            else if (n <= U.to.line) {
              D = !1;
              break;
            }
          }
          D || (e.splice(0, a + 1), a = 0);
        }
      }
      function Ha(e, n) {
        var i = n.from.line, r = n.to.line, a = n.text.length - (r - i) - 1;
        Ba(e.done, i, r, a), Ba(e.undone, i, r, a);
      }
      function Dr(e, n, i, r) {
        var a = n, m = n;
        return typeof n == "number" ? m = Te(e, Bt(e, n)) : a = Ve(n), a == null ? null : (r(m, a) && e.cm && bn(e.cm, a, i), m);
      }
      function Ir(e) {
        this.lines = e, this.parent = null;
        for (var n = 0, i = 0; i < e.length; ++i)
          e[i].parent = this, n += e[i].height;
        this.height = n;
      }
      Ir.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        removeInner: function(e, n) {
          for (var i = e, r = e + n; i < r; ++i) {
            var a = this.lines[i];
            this.height -= a.height, Dl(a), at(a, "delete");
          }
          this.lines.splice(e, n);
        },
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        insertInner: function(e, n, i) {
          this.height += i, this.lines = this.lines.slice(0, e).concat(n).concat(this.lines.slice(e));
          for (var r = 0; r < n.length; ++r)
            n[r].parent = this;
        },
        iterN: function(e, n, i) {
          for (var r = e + n; e < r; ++e)
            if (i(this.lines[e]))
              return !0;
        }
      };
      function Rr(e) {
        this.children = e;
        for (var n = 0, i = 0, r = 0; r < e.length; ++r) {
          var a = e[r];
          n += a.chunkSize(), i += a.height, a.parent = this;
        }
        this.size = n, this.height = i, this.parent = null;
      }
      Rr.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, n) {
          this.size -= n;
          for (var i = 0; i < this.children.length; ++i) {
            var r = this.children[i], a = r.chunkSize();
            if (e < a) {
              var m = Math.min(n, a - e), D = r.height;
              if (r.removeInner(e, m), this.height -= D - r.height, a == m && (this.children.splice(i--, 1), r.parent = null), (n -= m) == 0)
                break;
              e = 0;
            } else
              e -= a;
          }
          if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof Ir))) {
            var N = [];
            this.collapse(N), this.children = [new Ir(N)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var n = 0; n < this.children.length; ++n)
            this.children[n].collapse(e);
        },
        insertInner: function(e, n, i) {
          this.size += n.length, this.height += i;
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], m = a.chunkSize();
            if (e <= m) {
              if (a.insertInner(e, n, i), a.lines && a.lines.length > 50) {
                for (var D = a.lines.length % 25 + 25, N = D; N < a.lines.length; ) {
                  var O = new Ir(a.lines.slice(N, N += 25));
                  a.height -= O.height, this.children.splice(++r, 0, O), O.parent = this;
                }
                a.lines = a.lines.slice(0, D), this.maybeSpill();
              }
              break;
            }
            e -= m;
          }
        },
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var n = e.children.splice(e.children.length - 5, 5), i = new Rr(n);
              if (e.parent) {
                e.size -= i.size, e.height -= i.height;
                var a = ce(e.parent.children, e);
                e.parent.children.splice(a + 1, 0, i);
              } else {
                var r = new Rr(e.children);
                r.parent = e, e.children = [r, i], e = r;
              }
              i.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, n, i) {
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], m = a.chunkSize();
            if (e < m) {
              var D = Math.min(n, m - e);
              if (a.iterN(e, D, i))
                return !0;
              if ((n -= D) == 0)
                break;
              e = 0;
            } else
              e -= m;
          }
        }
      };
      var Pr = function(e, n, i) {
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && (this[r] = i[r]);
        this.doc = e, this.node = n;
      };
      Pr.prototype.clear = function() {
        var e = this.doc.cm, n = this.line.widgets, i = this.line, r = Ve(i);
        if (!(r == null || !n)) {
          for (var a = 0; a < n.length; ++a)
            n[a] == this && n.splice(a--, 1);
          n.length || (i.widgets = null);
          var m = gr(this);
          jt(i, Math.max(0, i.height - m)), e && (Pt(e, function() {
            $a(e, i, -m), bn(e, r, "widget");
          }), at(e, "lineWidgetCleared", e, this, r));
        }
      }, Pr.prototype.changed = function() {
        var e = this, n = this.height, i = this.doc.cm, r = this.line;
        this.height = null;
        var a = gr(this) - n;
        !a || (Sn(this.doc, r) || jt(r, r.height + a), i && Pt(i, function() {
          i.curOp.forceUpdate = !0, $a(i, r, a), at(i, "lineWidgetChanged", i, e, Ve(r));
        }));
      }, Qe(Pr);
      function $a(e, n, i) {
        dn(n) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && ki(e, i);
      }
      function Is(e, n, i, r) {
        var a = new Pr(e, i, r), m = e.cm;
        return m && a.noHScroll && (m.display.alignWidgets = !0), Dr(e, n, "widget", function(D) {
          var N = D.widgets || (D.widgets = []);
          if (a.insertAt == null ? N.push(a) : N.splice(Math.min(N.length, Math.max(0, a.insertAt)), 0, a), a.line = D, m && !Sn(e, D)) {
            var O = dn(D) < e.scrollTop;
            jt(D, D.height + gr(a)), O && ki(m, a.height), m.curOp.forceUpdate = !0;
          }
          return !0;
        }), m && at(m, "lineWidgetAdded", m, a, typeof n == "number" ? n : Ve(n)), a;
      }
      var Ua = 0, In = function(e, n) {
        this.lines = [], this.type = n, this.doc = e, this.id = ++Ua;
      };
      In.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, n = e && !e.curOp;
          if (n && Hn(e), Xe(this, "clear")) {
            var i = this.find();
            i && at(this, "clear", i.from, i.to);
          }
          for (var r = null, a = null, m = 0; m < this.lines.length; ++m) {
            var D = this.lines[m], N = vr(D.markedSpans, this);
            e && !this.collapsed ? bn(e, Ve(D), "text") : e && (N.to != null && (a = Ve(D)), N.from != null && (r = Ve(D))), D.markedSpans = yl(D.markedSpans, N), N.from == null && this.collapsed && !Sn(this.doc, D) && e && jt(D, Qn(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var O = 0; O < this.lines.length; ++O) {
              var U = Yt(this.lines[O]), G = Kr(U);
              G > e.display.maxLineLength && (e.display.maxLine = U, e.display.maxLineLength = G, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && bt(e, r, a + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Ia(e.doc)), e && at(e, "markerCleared", e, this, r, a), n && $n(e), this.parent && this.parent.clear();
        }
      }, In.prototype.find = function(e, n) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var i, r, a = 0; a < this.lines.length; ++a) {
          var m = this.lines[a], D = vr(m.markedSpans, this);
          if (D.from != null && (i = J(n ? m : Ve(m), D.from), e == -1))
            return i;
          if (D.to != null && (r = J(n ? m : Ve(m), D.to), e == 1))
            return r;
        }
        return i && { from: i, to: r };
      }, In.prototype.changed = function() {
        var e = this, n = this.find(-1, !0), i = this, r = this.doc.cm;
        !n || !r || Pt(r, function() {
          var a = n.line, m = Ve(n.line), D = Mi(r, m);
          if (D && (Yo(D), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Sn(i.doc, a) && i.height != null) {
            var N = i.height;
            i.height = null;
            var O = gr(i) - N;
            O && jt(a, a.height + O);
          }
          at(r, "markerChanged", r, e);
        });
      }, In.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (!n.maybeHiddenMarkers || ce(n.maybeHiddenMarkers, this) == -1) && (n.maybeUnhiddenMarkers || (n.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, In.prototype.detachLine = function(e) {
        if (this.lines.splice(ce(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (n.maybeHiddenMarkers || (n.maybeHiddenMarkers = [])).push(this);
        }
      }, Qe(In);
      function nr(e, n, i, r, a) {
        if (r && r.shared)
          return Rs(e, n, i, r, a);
        if (e.cm && !e.cm.curOp)
          return lt(e.cm, nr)(e, n, i, r, a);
        var m = new In(e, a), D = ie(n, i);
        if (r && se(r, m, !1), D > 0 || D == 0 && m.clearWhenEmpty !== !1)
          return m;
        if (m.replacedWith && (m.collapsed = !0, m.widgetNode = Y("span", [m.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || m.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (m.widgetNode.insertLeft = !0)), m.collapsed) {
          if (Ro(e, n.line, n, i, m) || n.line != i.line && Ro(e, i.line, n, i, m))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          ml();
        }
        m.addToHistory && Ea(e, { from: n, to: i, origin: "markText" }, e.sel, NaN);
        var N = n.line, O = e.cm, U;
        if (e.iter(N, i.line + 1, function(K) {
          O && m.collapsed && !O.options.lineWrapping && Yt(K) == O.display.maxLine && (U = !0), m.collapsed && N != n.line && jt(K, 0), Al(K, new kr(
            m,
            N == n.line ? n.ch : null,
            N == i.line ? i.ch : null
          ), e.cm && e.cm.curOp), ++N;
        }), m.collapsed && e.iter(n.line, i.line + 1, function(K) {
          Sn(e, K) && jt(K, 0);
        }), m.clearOnEnter && re(m, "beforeCursorEnter", function() {
          return m.clear();
        }), m.readOnly && (gl(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), m.collapsed && (m.id = ++Ua, m.atomic = !0), O) {
          if (U && (O.curOp.updateMaxLine = !0), m.collapsed)
            bt(O, n.line, i.line + 1);
          else if (m.className || m.startStyle || m.endStyle || m.css || m.attributes || m.title)
            for (var G = n.line; G <= i.line; G++)
              bn(O, G, "text");
          m.atomic && Ia(O.doc), at(O, "markerAdded", O, m);
        }
        return m;
      }
      var Mr = function(e, n) {
        this.markers = e, this.primary = n;
        for (var i = 0; i < e.length; ++i)
          e[i].parent = this;
      };
      Mr.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          at(this, "clear");
        }
      }, Mr.prototype.find = function(e, n) {
        return this.primary.find(e, n);
      }, Qe(Mr);
      function Rs(e, n, i, r, a) {
        r = se(r), r.shared = !1;
        var m = [nr(e, n, i, r, a)], D = m[0], N = r.widgetNode;
        return Dn(e, function(O) {
          N && (r.widgetNode = N.cloneNode(!0)), m.push(nr(O, Le(O, n), Le(O, i), r, a));
          for (var U = 0; U < O.linked.length; ++U)
            if (O.linked[U].isParent)
              return;
          D = Me(m);
        }), new Mr(m, D);
      }
      function za(e) {
        return e.findMarks(J(e.first, 0), e.clipPos(J(e.lastLine())), function(n) {
          return n.parent;
        });
      }
      function Ps(e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i], a = r.find(), m = e.clipPos(a.from), D = e.clipPos(a.to);
          if (ie(m, D)) {
            var N = nr(e, m, D, r.primary, r.primary.type);
            r.markers.push(N), N.parent = r;
          }
        }
      }
      function Ms(e) {
        for (var n = function(r) {
          var a = e[r], m = [a.primary.doc];
          Dn(a.primary.doc, function(O) {
            return m.push(O);
          });
          for (var D = 0; D < a.markers.length; D++) {
            var N = a.markers[D];
            ce(m, N.doc) == -1 && (N.parent = null, a.markers.splice(D--, 1));
          }
        }, i = 0; i < e.length; i++)
          n(i);
      }
      var Ns = 0, Ct = function(e, n, i, r, a) {
        if (!(this instanceof Ct))
          return new Ct(e, n, i, r, a);
        i == null && (i = 0), Rr.call(this, [new Ir([new kn("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var m = J(i, 0);
        this.sel = Tn(m), this.history = new ai(null), this.id = ++Ns, this.modeOption = n, this.lineSep = r, this.direction = a == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), qi(this, { from: m, to: m, text: e }), pt(this, Tn(m), Be);
      };
      Ct.prototype = gn(Rr.prototype, {
        constructor: Ct,
        iter: function(e, n, i) {
          i ? this.iterN(e - this.first, n - e, i) : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function(e, n) {
          for (var i = 0, r = 0; r < n.length; ++r)
            i += n[r].height;
          this.insertInner(e - this.first, n, i);
        },
        remove: function(e, n) {
          this.removeInner(e - this.first, n);
        },
        getValue: function(e) {
          var n = Vn(this, this.first, this.first + this.size);
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        setValue: st(function(e) {
          var n = J(this.first, 0), i = this.first + this.size - 1;
          er(this, {
            from: n,
            to: J(i, Te(this, i).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && Ar(this.cm, 0, 0), pt(this, Tn(n), Be);
        }),
        replaceRange: function(e, n, i, r) {
          n = Le(this, n), i = i ? Le(this, i) : n, tr(this, e, n, i, r);
        },
        getRange: function(e, n, i) {
          var r = sn(this, Le(this, e), Le(this, n));
          return i === !1 ? r : i === "" ? r.join("") : r.join(i || this.lineSeparator());
        },
        getLine: function(e) {
          var n = this.getLineHandle(e);
          return n && n.text;
        },
        getLineHandle: function(e) {
          if (V(this, e))
            return Te(this, e);
        },
        getLineNumber: function(e) {
          return Ve(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = Te(this, e)), Yt(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return Le(this, e);
        },
        getCursor: function(e) {
          var n = this.sel.primary(), i;
          return e == null || e == "head" ? i = n.head : e == "anchor" ? i = n.anchor : e == "end" || e == "to" || e === !1 ? i = n.to() : i = n.from(), i;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: st(function(e, n, i) {
          Ta(this, Le(this, typeof e == "number" ? J(e, n || 0) : e), null, i);
        }),
        setSelection: st(function(e, n, i) {
          Ta(this, Le(this, e), Le(this, n || e), i);
        }),
        extendSelection: st(function(e, n, i) {
          si(this, Le(this, e), n && Le(this, n), i);
        }),
        extendSelections: st(function(e, n) {
          Ca(this, ho(this, e), n);
        }),
        extendSelectionsBy: st(function(e, n) {
          var i = mt(this.sel.ranges, e);
          Ca(this, ho(this, i), n);
        }),
        setSelections: st(function(e, n, i) {
          if (!!e.length) {
            for (var r = [], a = 0; a < e.length; a++)
              r[a] = new ke(
                Le(this, e[a].anchor),
                Le(this, e[a].head || e[a].anchor)
              );
            n == null && (n = Math.min(e.length - 1, this.sel.primIndex)), pt(this, Qt(this.cm, r, n), i);
          }
        }),
        addSelection: st(function(e, n, i) {
          var r = this.sel.ranges.slice(0);
          r.push(new ke(Le(this, e), Le(this, n || e))), pt(this, Qt(this.cm, r, r.length - 1), i);
        }),
        getSelection: function(e) {
          for (var n = this.sel.ranges, i, r = 0; r < n.length; r++) {
            var a = sn(this, n[r].from(), n[r].to());
            i = i ? i.concat(a) : a;
          }
          return e === !1 ? i : i.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var n = [], i = this.sel.ranges, r = 0; r < i.length; r++) {
            var a = sn(this, i[r].from(), i[r].to());
            e !== !1 && (a = a.join(e || this.lineSeparator())), n[r] = a;
          }
          return n;
        },
        replaceSelection: function(e, n, i) {
          for (var r = [], a = 0; a < this.sel.ranges.length; a++)
            r[a] = e;
          this.replaceSelections(r, n, i || "+input");
        },
        replaceSelections: st(function(e, n, i) {
          for (var r = [], a = this.sel, m = 0; m < a.ranges.length; m++) {
            var D = a.ranges[m];
            r[m] = { from: D.from(), to: D.to(), text: this.splitLines(e[m]), origin: i };
          }
          for (var N = n && n != "end" && As(this, r, n), O = r.length - 1; O >= 0; O--)
            er(this, r[O]);
          N ? wa(this, N) : this.cm && Jn(this.cm);
        }),
        undo: st(function() {
          di(this, "undo");
        }),
        redo: st(function() {
          di(this, "redo");
        }),
        undoSelection: st(function() {
          di(this, "undo", !0);
        }),
        redoSelection: st(function() {
          di(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, n = 0, i = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++n;
          for (var a = 0; a < e.undone.length; a++)
            e.undone[a].ranges || ++i;
          return { undo: n, redo: i };
        },
        clearHistory: function() {
          var e = this;
          this.history = new ai(this.history), Dn(this, function(n) {
            return n.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: qn(this.history.done),
            undone: qn(this.history.undone)
          };
        },
        setHistory: function(e) {
          var n = this.history = new ai(this.history);
          n.done = qn(e.done.slice(0), null, !0), n.undone = qn(e.undone.slice(0), null, !0);
        },
        setGutterMarker: st(function(e, n, i) {
          return Dr(this, e, "gutter", function(r) {
            var a = r.gutterMarkers || (r.gutterMarkers = {});
            return a[n] = i, !i && Jt(a) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: st(function(e) {
          var n = this;
          this.iter(function(i) {
            i.gutterMarkers && i.gutterMarkers[e] && Dr(n, i, "gutter", function() {
              return i.gutterMarkers[e] = null, Jt(i.gutterMarkers) && (i.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var n;
          if (typeof e == "number") {
            if (!V(this, e) || (n = e, e = Te(this, e), !e))
              return null;
          } else if (n = Ve(e), n == null)
            return null;
          return {
            line: n,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: st(function(e, n, i) {
          return Dr(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[a])
              r[a] = i;
            else {
              if (L(i).test(r[a]))
                return !1;
              r[a] += " " + i;
            }
            return !0;
          });
        }),
        removeLineClass: st(function(e, n, i) {
          return Dr(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass", m = r[a];
            if (m)
              if (i == null)
                r[a] = null;
              else {
                var D = m.match(L(i));
                if (!D)
                  return !1;
                var N = D.index + D[0].length;
                r[a] = m.slice(0, D.index) + (!D.index || N == m.length ? "" : " ") + m.slice(N) || null;
              }
            else
              return !1;
            return !0;
          });
        }),
        addLineWidget: st(function(e, n, i) {
          return Is(this, e, n, i);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, n, i) {
          return nr(this, Le(this, e), Le(this, n), i, i && i.type || "range");
        },
        setBookmark: function(e, n) {
          var i = {
            replacedWith: n && (n.nodeType == null ? n.widget : n),
            insertLeft: n && n.insertLeft,
            clearWhenEmpty: !1,
            shared: n && n.shared,
            handleMouseEvents: n && n.handleMouseEvents
          };
          return e = Le(this, e), nr(this, e, e, i, "bookmark");
        },
        findMarksAt: function(e) {
          e = Le(this, e);
          var n = [], i = Te(this, e.line).markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var a = i[r];
              (a.from == null || a.from <= e.ch) && (a.to == null || a.to >= e.ch) && n.push(a.marker.parent || a.marker);
            }
          return n;
        },
        findMarks: function(e, n, i) {
          e = Le(this, e), n = Le(this, n);
          var r = [], a = e.line;
          return this.iter(e.line, n.line + 1, function(m) {
            var D = m.markedSpans;
            if (D)
              for (var N = 0; N < D.length; N++) {
                var O = D[N];
                !(O.to != null && a == e.line && e.ch >= O.to || O.from == null && a != e.line || O.from != null && a == n.line && O.from >= n.ch) && (!i || i(O.marker)) && r.push(O.marker.parent || O.marker);
              }
            ++a;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(n) {
            var i = n.markedSpans;
            if (i)
              for (var r = 0; r < i.length; ++r)
                i[r].from != null && e.push(i[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var n, i = this.first, r = this.lineSeparator().length;
          return this.iter(function(a) {
            var m = a.text.length + r;
            if (m > e)
              return n = e, !0;
            e -= m, ++i;
          }), Le(this, J(i, n));
        },
        indexFromPos: function(e) {
          e = Le(this, e);
          var n = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var i = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            n += r.text.length + i;
          }), n;
        },
        copy: function(e) {
          var n = new Ct(
            Vn(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return n.scrollTop = this.scrollTop, n.scrollLeft = this.scrollLeft, n.sel = this.sel, n.extend = !1, e && (n.history.undoDepth = this.history.undoDepth, n.setHistory(this.getHistory())), n;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var n = this.first, i = this.first + this.size;
          e.from != null && e.from > n && (n = e.from), e.to != null && e.to < i && (i = e.to);
          var r = new Ct(Vn(this, n, i), e.mode || this.modeOption, n, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], Ps(r, za(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof Ke && (e = e.doc), this.linked)
            for (var n = 0; n < this.linked.length; ++n) {
              var i = this.linked[n];
              if (i.doc == e) {
                this.linked.splice(n, 1), e.unlinkDoc(this), Ms(za(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            Dn(e, function(a) {
              return r.push(a.id);
            }, !0), e.history = new ai(null), e.history.done = qn(this.history.done, r), e.history.undone = qn(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          Dn(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : fr(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: st(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(n) {
            return n.order = null;
          }), this.cm && xs(this.cm));
        })
      }), Ct.prototype.eachLine = Ct.prototype.iter;
      var ja = 0;
      function Ls(e) {
        var n = this;
        if (Wa(n), !(Oe(n, e) || cn(n.display, e))) {
          We(e), f && (ja = +new Date());
          var i = Ln(n, e, !0), r = e.dataTransfer.files;
          if (!(!i || n.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var a = r.length, m = Array(a), D = 0, N = function() {
                ++D == a && lt(n, function() {
                  i = Le(n.doc, i);
                  var _ = {
                    from: i,
                    to: i,
                    text: n.doc.splitLines(
                      m.filter(function(oe) {
                        return oe != null;
                      }).join(n.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  er(n.doc, _), wa(n.doc, Tn(Le(n.doc, i), Le(n.doc, wn(_))));
                })();
              }, O = function(_, oe) {
                if (n.options.allowDropFileTypes && ce(n.options.allowDropFileTypes, _.type) == -1) {
                  N();
                  return;
                }
                var le = new FileReader();
                le.onerror = function() {
                  return N();
                }, le.onload = function() {
                  var de = le.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(de)) {
                    N();
                    return;
                  }
                  m[oe] = de, N();
                }, le.readAsText(_);
              }, U = 0; U < r.length; U++)
                O(r[U], U);
            else {
              if (n.state.draggingText && n.doc.sel.contains(i) > -1) {
                n.state.draggingText(e), setTimeout(function() {
                  return n.display.input.focus();
                }, 20);
                return;
              }
              try {
                var G = e.dataTransfer.getData("Text");
                if (G) {
                  var K;
                  if (n.state.draggingText && !n.state.draggingText.copy && (K = n.listSelections()), ui(n.doc, Tn(i, i)), K)
                    for (var ee = 0; ee < K.length; ++ee)
                      tr(n.doc, "", K[ee].anchor, K[ee].head, "drag");
                  n.replaceSelection(G, "around", "paste"), n.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function Fs(e, n) {
        if (f && (!e.state.draggingText || +new Date() - ja < 100)) {
          Vt(n);
          return;
        }
        if (!(Oe(e, n) || cn(e.display, n)) && (n.dataTransfer.setData("Text", e.getSelection()), n.dataTransfer.effectAllowed = "copyMove", n.dataTransfer.setDragImage && !E)) {
          var i = M("img", null, null, "position: fixed; left: 0; top: 0;");
          i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", y && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), n.dataTransfer.setDragImage(i, 0, 0), y && i.parentNode.removeChild(i);
        }
      }
      function Os(e, n) {
        var i = Ln(e, n);
        if (!!i) {
          var r = document.createDocumentFragment();
          Ui(e, i, r), e.display.dragCursor || (e.display.dragCursor = M("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), k(e.display.dragCursor, r);
        }
      }
      function Wa(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function Va(e) {
        if (!!document.getElementsByClassName) {
          for (var n = document.getElementsByClassName("CodeMirror"), i = [], r = 0; r < n.length; r++) {
            var a = n[r].CodeMirror;
            a && i.push(a);
          }
          i.length && i[0].operation(function() {
            for (var m = 0; m < i.length; m++)
              e(i[m]);
          });
        }
      }
      var ka = !1;
      function Bs() {
        ka || (Hs(), ka = !0);
      }
      function Hs() {
        var e;
        re(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, Va($s);
          }, 100));
        }), re(window, "blur", function() {
          return Va(Xn);
        });
      }
      function $s(e) {
        var n = e.display;
        n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.scrollbarsClipped = !1, e.setSize();
      }
      for (var Rn = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Nr = 0; Nr < 10; Nr++)
        Rn[Nr + 48] = Rn[Nr + 96] = String(Nr);
      for (var ci = 65; ci <= 90; ci++)
        Rn[ci] = String.fromCharCode(ci);
      for (var Lr = 1; Lr <= 12; Lr++)
        Rn[Lr + 111] = Rn[Lr + 63235] = "F" + Lr;
      var pn = {};
      pn.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, pn.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, pn.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, pn.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, pn.default = P ? pn.macDefault : pn.pcDefault;
      function Us(e) {
        var n = e.split(/-(?!$)/);
        e = n[n.length - 1];
        for (var i, r, a, m, D = 0; D < n.length - 1; D++) {
          var N = n[D];
          if (/^(cmd|meta|m)$/i.test(N))
            m = !0;
          else if (/^a(lt)?$/i.test(N))
            i = !0;
          else if (/^(c|ctrl|control)$/i.test(N))
            r = !0;
          else if (/^s(hift)?$/i.test(N))
            a = !0;
          else
            throw new Error("Unrecognized modifier name: " + N);
        }
        return i && (e = "Alt-" + e), r && (e = "Ctrl-" + e), m && (e = "Cmd-" + e), a && (e = "Shift-" + e), e;
      }
      function zs(e) {
        var n = {};
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (/^(name|fallthrough|(de|at)tach)$/.test(i))
              continue;
            if (r == "...") {
              delete e[i];
              continue;
            }
            for (var a = mt(i.split(" "), Us), m = 0; m < a.length; m++) {
              var D = void 0, N = void 0;
              m == a.length - 1 ? (N = a.join(" "), D = r) : (N = a.slice(0, m + 1).join(" "), D = "...");
              var O = n[N];
              if (!O)
                n[N] = D;
              else if (O != D)
                throw new Error("Inconsistent bindings for " + N);
            }
            delete e[i];
          }
        for (var U in n)
          e[U] = n[U];
        return e;
      }
      function rr(e, n, i, r) {
        n = vi(n);
        var a = n.call ? n.call(e, r) : n[e];
        if (a === !1)
          return "nothing";
        if (a === "...")
          return "multi";
        if (a != null && i(a))
          return "handled";
        if (n.fallthrough) {
          if (Object.prototype.toString.call(n.fallthrough) != "[object Array]")
            return rr(e, n.fallthrough, i, r);
          for (var m = 0; m < n.fallthrough.length; m++) {
            var D = rr(e, n.fallthrough[m], i, r);
            if (D)
              return D;
          }
        }
      }
      function Ya(e) {
        var n = typeof e == "string" ? e : Rn[e.keyCode];
        return n == "Ctrl" || n == "Alt" || n == "Shift" || n == "Mod";
      }
      function Ga(e, n, i) {
        var r = e;
        return n.altKey && r != "Alt" && (e = "Alt-" + e), (j ? n.metaKey : n.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (j ? n.ctrlKey : n.metaKey) && r != "Mod" && (e = "Cmd-" + e), !i && n.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function Qa(e, n) {
        if (y && e.keyCode == 34 && e.char)
          return !1;
        var i = Rn[e.keyCode];
        return i == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (i = e.code), Ga(i, e, n));
      }
      function vi(e) {
        return typeof e == "string" ? pn[e] : e;
      }
      function ir(e, n) {
        for (var i = e.doc.sel.ranges, r = [], a = 0; a < i.length; a++) {
          for (var m = n(i[a]); r.length && ie(m.from, Me(r).to) <= 0; ) {
            var D = r.pop();
            if (ie(D.from, m.from) < 0) {
              m.from = D.from;
              break;
            }
          }
          r.push(m);
        }
        Pt(e, function() {
          for (var N = r.length - 1; N >= 0; N--)
            tr(e.doc, "", r[N].from, r[N].to, "+delete");
          Jn(e);
        });
      }
      function no(e, n, i) {
        var r = rt(e.text, n + i, i);
        return r < 0 || r > e.text.length ? null : r;
      }
      function ro(e, n, i) {
        var r = no(e, n.ch, i);
        return r == null ? null : new J(n.line, r, i < 0 ? "after" : "before");
      }
      function io(e, n, i, r, a) {
        if (e) {
          n.doc.direction == "rtl" && (a = -a);
          var m = Pe(i, n.doc.direction);
          if (m) {
            var D = a < 0 ? Me(m) : m[0], N = a < 0 == (D.level == 1), O = N ? "after" : "before", U;
            if (D.level > 0 || n.doc.direction == "rtl") {
              var G = Gn(n, i);
              U = a < 0 ? i.text.length - 1 : 0;
              var K = nn(n, G, U).top;
              U = je(function(ee) {
                return nn(n, G, ee).top == K;
              }, a < 0 == (D.level == 1) ? D.from : D.to - 1, U), O == "before" && (U = no(i, U, 1));
            } else
              U = a < 0 ? D.to : D.from;
            return new J(r, U, O);
          }
        }
        return new J(r, a < 0 ? i.text.length : 0, a < 0 ? "before" : "after");
      }
      function js(e, n, i, r) {
        var a = Pe(n, e.doc.direction);
        if (!a)
          return ro(n, i, r);
        i.ch >= n.text.length ? (i.ch = n.text.length, i.sticky = "before") : i.ch <= 0 && (i.ch = 0, i.sticky = "after");
        var m = xe(a, i.ch, i.sticky), D = a[m];
        if (e.doc.direction == "ltr" && D.level % 2 == 0 && (r > 0 ? D.to > i.ch : D.from < i.ch))
          return ro(n, i, r);
        var N = function(he, Ae) {
          return no(n, he instanceof J ? he.ch : he, Ae);
        }, O, U = function(he) {
          return e.options.lineWrapping ? (O = O || Gn(e, n), qo(e, n, O, he)) : { begin: 0, end: n.text.length };
        }, G = U(i.sticky == "before" ? N(i, -1) : i.ch);
        if (e.doc.direction == "rtl" || D.level == 1) {
          var K = D.level == 1 == r < 0, ee = N(i, K ? 1 : -1);
          if (ee != null && (K ? ee <= D.to && ee <= G.end : ee >= D.from && ee >= G.begin)) {
            var _ = K ? "before" : "after";
            return new J(i.line, ee, _);
          }
        }
        var oe = function(he, Ae, ge) {
          for (var Se = function(Ge, ut) {
            return ut ? new J(i.line, N(Ge, 1), "before") : new J(i.line, Ge, "after");
          }; he >= 0 && he < a.length; he += Ae) {
            var Re = a[he], Ie = Ae > 0 == (Re.level != 1), He = Ie ? ge.begin : N(ge.end, -1);
            if (Re.from <= He && He < Re.to || (He = Ie ? Re.from : N(Re.to, -1), ge.begin <= He && He < ge.end))
              return Se(He, Ie);
          }
        }, le = oe(m + r, r, G);
        if (le)
          return le;
        var de = r > 0 ? G.end : N(G.begin, -1);
        return de != null && !(r > 0 && de == n.text.length) && (le = oe(r > 0 ? 0 : a.length - 1, r, U(de)), le) ? le : null;
      }
      var Fr = {
        selectAll: Ma,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Be);
        },
        killLine: function(e) {
          return ir(e, function(n) {
            if (n.empty()) {
              var i = Te(e.doc, n.head.line).text.length;
              return n.head.ch == i && n.head.line < e.lastLine() ? { from: n.head, to: J(n.head.line + 1, 0) } : { from: n.head, to: J(n.head.line, i) };
            } else
              return { from: n.from(), to: n.to() };
          });
        },
        deleteLine: function(e) {
          return ir(e, function(n) {
            return {
              from: J(n.from().line, 0),
              to: Le(e.doc, J(n.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return ir(e, function(n) {
            return {
              from: J(n.from().line, 0),
              to: n.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return ir(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return { from: r, to: n.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return ir(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
            return { from: n.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(J(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(J(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return Ka(e, n.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return Xa(e, n.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return Ws(e, n.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
          }, Nt);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: i }, "div");
          }, Nt);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? Xa(e, n.head) : r;
          }, Nt);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var n = [], i = e.listSelections(), r = e.options.tabSize, a = 0; a < i.length; a++) {
            var m = i[a].from(), D = ae(e.getLine(m.line), m.ch, r);
            n.push(vt(r - D % r));
          }
          e.replaceSelections(n);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        transposeChars: function(e) {
          return Pt(e, function() {
            for (var n = e.listSelections(), i = [], r = 0; r < n.length; r++)
              if (!!n[r].empty()) {
                var a = n[r].head, m = Te(e.doc, a.line).text;
                if (m) {
                  if (a.ch == m.length && (a = new J(a.line, a.ch - 1)), a.ch > 0)
                    a = new J(a.line, a.ch + 1), e.replaceRange(
                      m.charAt(a.ch - 1) + m.charAt(a.ch - 2),
                      J(a.line, a.ch - 2),
                      a,
                      "+transpose"
                    );
                  else if (a.line > e.doc.first) {
                    var D = Te(e.doc, a.line - 1).text;
                    D && (a = new J(a.line, 1), e.replaceRange(
                      m.charAt(0) + e.doc.lineSeparator() + D.charAt(D.length - 1),
                      J(a.line - 1, D.length - 1),
                      a,
                      "+transpose"
                    ));
                  }
                }
                i.push(new ke(a, a));
              }
            e.setSelections(i);
          });
        },
        newlineAndIndent: function(e) {
          return Pt(e, function() {
            for (var n = e.listSelections(), i = n.length - 1; i >= 0; i--)
              e.replaceRange(e.doc.lineSeparator(), n[i].anchor, n[i].head, "+input");
            n = e.listSelections();
            for (var r = 0; r < n.length; r++)
              e.indentLine(n[r].from().line, null, !0);
            Jn(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function Ka(e, n) {
        var i = Te(e.doc, n), r = Yt(i);
        return r != i && (n = Ve(r)), io(!0, e, r, n, 1);
      }
      function Ws(e, n) {
        var i = Te(e.doc, n), r = Cl(i);
        return r != i && (n = Ve(r)), io(!0, e, i, n, -1);
      }
      function Xa(e, n) {
        var i = Ka(e, n.line), r = Te(e.doc, i.line), a = Pe(r, e.doc.direction);
        if (!a || a[0].level == 0) {
          var m = Math.max(i.ch, r.text.search(/\S/)), D = n.line == i.line && n.ch <= m && n.ch;
          return J(i.line, D ? 0 : m, i.sticky);
        }
        return i;
      }
      function pi(e, n, i) {
        if (typeof n == "string" && (n = Fr[n], !n))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, a = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), a = n(e) != De;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return a;
      }
      function Vs(e, n, i) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var a = rr(n, e.state.keyMaps[r], i, e);
          if (a)
            return a;
        }
        return e.options.extraKeys && rr(n, e.options.extraKeys, i, e) || rr(n, e.options.keyMap, i, e);
      }
      var ks = new ue();
      function Or(e, n, i, r) {
        var a = e.state.keySeq;
        if (a) {
          if (Ya(n))
            return "handled";
          if (/\'$/.test(n) ? e.state.keySeq = null : ks.set(50, function() {
            e.state.keySeq == a && (e.state.keySeq = null, e.display.input.reset());
          }), Ja(e, a + " " + n, i, r))
            return !0;
        }
        return Ja(e, n, i, r);
      }
      function Ja(e, n, i, r) {
        var a = Vs(e, n, r);
        return a == "multi" && (e.state.keySeq = n), a == "handled" && at(e, "keyHandled", e, n, i), (a == "handled" || a == "multi") && (We(i), zi(e)), !!a;
      }
      function Za(e, n) {
        var i = Qa(n, !0);
        return i ? n.shiftKey && !e.state.keySeq ? Or(e, "Shift-" + i, n, function(r) {
          return pi(e, r, !0);
        }) || Or(e, i, n, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return pi(e, r);
        }) : Or(e, i, n, function(r) {
          return pi(e, r);
        }) : !1;
      }
      function Ys(e, n, i) {
        return Or(e, "'" + i + "'", n, function(r) {
          return pi(e, r, !0);
        });
      }
      var oo = null;
      function qa(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && (n.curOp.focus = te(me(n)), !Oe(n, e))) {
          f && c < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var i = e.keyCode;
          n.display.shift = i == 16 || e.shiftKey;
          var r = Za(n, e);
          y && (oo = r ? i : null, !r && i == 88 && !Zt && (P ? e.metaKey : e.ctrlKey) && n.replaceSelection("", null, "cut")), t && !P && !r && i == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), i == 18 && !/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className) && Gs(n);
        }
      }
      function Gs(e) {
        var n = e.display.lineDiv;
        q(n, "CodeMirror-crosshair");
        function i(r) {
          (r.keyCode == 18 || !r.altKey) && ($(n, "CodeMirror-crosshair"), be(document, "keyup", i), be(document, "mouseover", i));
        }
        re(document, "keyup", i), re(document, "mouseover", i);
      }
      function _a(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Oe(this, e);
      }
      function el(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && !(cn(n.display, e) || Oe(n, e) || e.ctrlKey && !e.altKey || P && e.metaKey)) {
          var i = e.keyCode, r = e.charCode;
          if (y && i == oo) {
            oo = null, We(e);
            return;
          }
          if (!(y && (!e.which || e.which < 10) && Za(n, e))) {
            var a = String.fromCharCode(r == null ? i : r);
            a != "\b" && (Ys(n, e, a) || n.display.input.onKeyPress(e));
          }
        }
      }
      var Qs = 400, ao = function(e, n, i) {
        this.time = e, this.pos = n, this.button = i;
      };
      ao.prototype.compare = function(e, n, i) {
        return this.time + Qs > e && ie(n, this.pos) == 0 && i == this.button;
      };
      var Br, Hr;
      function Ks(e, n) {
        var i = +new Date();
        return Hr && Hr.compare(i, e, n) ? (Br = Hr = null, "triple") : Br && Br.compare(i, e, n) ? (Hr = new ao(i, e, n), Br = null, "double") : (Br = new ao(i, e, n), Hr = null, "single");
      }
      function tl(e) {
        var n = this, i = n.display;
        if (!(Oe(n, e) || i.activeTouch && i.input.supportsTouch())) {
          if (i.input.ensurePolled(), i.shift = e.shiftKey, cn(i, e)) {
            S || (i.scroller.draggable = !1, setTimeout(function() {
              return i.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!lo(n, e)) {
            var r = Ln(n, e), a = ur(e), m = r ? Ks(r, a) : "single";
            pe(n).focus(), a == 1 && n.state.selectingText && n.state.selectingText(e), !(r && Xs(n, a, r, m, e)) && (a == 1 ? r ? Zs(n, r, m, e) : St(e) == i.scroller && We(e) : a == 2 ? (r && si(n.doc, r), setTimeout(function() {
              return i.input.focus();
            }, 20)) : a == 3 && (z ? n.display.input.onContextMenu(e) : ji(n)));
          }
        }
      }
      function Xs(e, n, i, r, a) {
        var m = "Click";
        return r == "double" ? m = "Double" + m : r == "triple" && (m = "Triple" + m), m = (n == 1 ? "Left" : n == 2 ? "Middle" : "Right") + m, Or(e, Ga(m, a), a, function(D) {
          if (typeof D == "string" && (D = Fr[D]), !D)
            return !1;
          var N = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), N = D(e, i) != De;
          } finally {
            e.state.suppressEdits = !1;
          }
          return N;
        });
      }
      function Js(e, n, i) {
        var r = e.getOption("configureMouse"), a = r ? r(e, n, i) : {};
        if (a.unit == null) {
          var m = F ? i.shiftKey && i.metaKey : i.altKey;
          a.unit = m ? "rectangle" : n == "single" ? "char" : n == "double" ? "word" : "line";
        }
        return (a.extend == null || e.doc.extend) && (a.extend = e.doc.extend || i.shiftKey), a.addNew == null && (a.addNew = P ? i.metaKey : i.ctrlKey), a.moveOnDrag == null && (a.moveOnDrag = !(P ? i.altKey : i.ctrlKey)), a;
      }
      function Zs(e, n, i, r) {
        f ? setTimeout(ve(na, e), 0) : e.curOp.focus = te(me(e));
        var a = Js(e, i, r), m = e.doc.sel, D;
        e.options.dragDrop && Ai && !e.isReadOnly() && i == "single" && (D = m.contains(n)) > -1 && (ie((D = m.ranges[D]).from(), n) < 0 || n.xRel > 0) && (ie(D.to(), n) > 0 || n.xRel < 0) ? qs(e, r, n, a) : _s(e, r, n, a);
      }
      function qs(e, n, i, r) {
        var a = e.display, m = !1, D = lt(e, function(U) {
          S && (a.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : ji(e)), be(a.wrapper.ownerDocument, "mouseup", D), be(a.wrapper.ownerDocument, "mousemove", N), be(a.scroller, "dragstart", O), be(a.scroller, "drop", D), m || (We(U), r.addNew || si(e.doc, i, null, null, r.extend), S && !E || f && c == 9 ? setTimeout(function() {
            a.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), a.input.focus();
          }, 20) : a.input.focus());
        }), N = function(U) {
          m = m || Math.abs(n.clientX - U.clientX) + Math.abs(n.clientY - U.clientY) >= 10;
        }, O = function() {
          return m = !0;
        };
        S && (a.scroller.draggable = !0), e.state.draggingText = D, D.copy = !r.moveOnDrag, re(a.wrapper.ownerDocument, "mouseup", D), re(a.wrapper.ownerDocument, "mousemove", N), re(a.scroller, "dragstart", O), re(a.scroller, "drop", D), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return a.input.focus();
        }, 20), a.scroller.dragDrop && a.scroller.dragDrop();
      }
      function nl(e, n, i) {
        if (i == "char")
          return new ke(n, n);
        if (i == "word")
          return e.findWordAt(n);
        if (i == "line")
          return new ke(J(n.line, 0), Le(e.doc, J(n.line + 1, 0)));
        var r = i(e, n);
        return new ke(r.from, r.to);
      }
      function _s(e, n, i, r) {
        f && ji(e);
        var a = e.display, m = e.doc;
        We(n);
        var D, N, O = m.sel, U = O.ranges;
        if (r.addNew && !r.extend ? (N = m.sel.contains(i), N > -1 ? D = U[N] : D = new ke(i, i)) : (D = m.sel.primary(), N = m.sel.primIndex), r.unit == "rectangle")
          r.addNew || (D = new ke(i, i)), i = Ln(e, n, !0, !0), N = -1;
        else {
          var G = nl(e, i, r.unit);
          r.extend ? D = eo(D, G.anchor, G.head, r.extend) : D = G;
        }
        r.addNew ? N == -1 ? (N = U.length, pt(
          m,
          Qt(e, U.concat([D]), N),
          { scroll: !1, origin: "*mouse" }
        )) : U.length > 1 && U[N].empty() && r.unit == "char" && !r.extend ? (pt(
          m,
          Qt(e, U.slice(0, N).concat(U.slice(N + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), O = m.sel) : to(m, N, D, gt) : (N = 0, pt(m, new Ht([D], 0), gt), O = m.sel);
        var K = i;
        function ee(ge) {
          if (ie(K, ge) != 0)
            if (K = ge, r.unit == "rectangle") {
              for (var Se = [], Re = e.options.tabSize, Ie = ae(Te(m, i.line).text, i.ch, Re), He = ae(Te(m, ge.line).text, ge.ch, Re), Ge = Math.min(Ie, He), ut = Math.max(Ie, He), Je = Math.min(i.line, ge.line), Mt = Math.min(e.lastLine(), Math.max(i.line, ge.line)); Je <= Mt; Je++) {
                var Tt = Te(m, Je).text, tt = Ze(Tt, Ge, Re);
                Ge == ut ? Se.push(new ke(J(Je, tt), J(Je, tt))) : Tt.length > tt && Se.push(new ke(J(Je, tt), J(Je, Ze(Tt, ut, Re))));
              }
              Se.length || Se.push(new ke(i, i)), pt(
                m,
                Qt(e, O.ranges.slice(0, N).concat(Se), N),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(ge);
            } else {
              var wt = D, ct = nl(e, ge, r.unit), ot = wt.anchor, nt;
              ie(ct.anchor, ot) > 0 ? (nt = ct.head, ot = it(wt.from(), ct.anchor)) : (nt = ct.anchor, ot = ze(wt.to(), ct.head));
              var _e = O.ranges.slice(0);
              _e[N] = eu(e, new ke(Le(m, ot), nt)), pt(m, Qt(e, _e, N), gt);
            }
        }
        var _ = a.wrapper.getBoundingClientRect(), oe = 0;
        function le(ge) {
          var Se = ++oe, Re = Ln(e, ge, !0, r.unit == "rectangle");
          if (!!Re)
            if (ie(Re, K) != 0) {
              e.curOp.focus = te(me(e)), ee(Re);
              var Ie = ni(a, m);
              (Re.line >= Ie.to || Re.line < Ie.from) && setTimeout(lt(e, function() {
                oe == Se && le(ge);
              }), 150);
            } else {
              var He = ge.clientY < _.top ? -20 : ge.clientY > _.bottom ? 20 : 0;
              He && setTimeout(lt(e, function() {
                oe == Se && (a.scroller.scrollTop += He, le(ge));
              }), 50);
            }
        }
        function de(ge) {
          e.state.selectingText = !1, oe = 1 / 0, ge && (We(ge), a.input.focus()), be(a.wrapper.ownerDocument, "mousemove", he), be(a.wrapper.ownerDocument, "mouseup", Ae), m.history.lastSelOrigin = null;
        }
        var he = lt(e, function(ge) {
          ge.buttons === 0 || !ur(ge) ? de(ge) : le(ge);
        }), Ae = lt(e, de);
        e.state.selectingText = Ae, re(a.wrapper.ownerDocument, "mousemove", he), re(a.wrapper.ownerDocument, "mouseup", Ae);
      }
      function eu(e, n) {
        var i = n.anchor, r = n.head, a = Te(e.doc, i.line);
        if (ie(i, r) == 0 && i.sticky == r.sticky)
          return n;
        var m = Pe(a);
        if (!m)
          return n;
        var D = xe(m, i.ch, i.sticky), N = m[D];
        if (N.from != i.ch && N.to != i.ch)
          return n;
        var O = D + (N.from == i.ch == (N.level != 1) ? 0 : 1);
        if (O == 0 || O == m.length)
          return n;
        var U;
        if (r.line != i.line)
          U = (r.line - i.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var G = xe(m, r.ch, r.sticky), K = G - D || (r.ch - i.ch) * (N.level == 1 ? -1 : 1);
          G == O - 1 || G == O ? U = K < 0 : U = K > 0;
        }
        var ee = m[O + (U ? -1 : 0)], _ = U == (ee.level == 1), oe = _ ? ee.from : ee.to, le = _ ? "after" : "before";
        return i.ch == oe && i.sticky == le ? n : new ke(new J(i.line, oe, le), r);
      }
      function rl(e, n, i, r) {
        var a, m;
        if (n.touches)
          a = n.touches[0].clientX, m = n.touches[0].clientY;
        else
          try {
            a = n.clientX, m = n.clientY;
          } catch {
            return !1;
          }
        if (a >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && We(n);
        var D = e.display, N = D.lineDiv.getBoundingClientRect();
        if (m > N.bottom || !Xe(e, i))
          return mn(n);
        m -= N.top - D.viewOffset;
        for (var O = 0; O < e.display.gutterSpecs.length; ++O) {
          var U = D.gutters.childNodes[O];
          if (U && U.getBoundingClientRect().right >= a) {
            var G = _t(e.doc, m), K = e.display.gutterSpecs[O];
            return Ce(e, i, e, G, K.className, n), mn(n);
          }
        }
      }
      function lo(e, n) {
        return rl(e, n, "gutterClick", !0);
      }
      function il(e, n) {
        cn(e.display, n) || tu(e, n) || Oe(e, n, "contextmenu") || z || e.display.input.onContextMenu(n);
      }
      function tu(e, n) {
        return Xe(e, "gutterContextMenu") ? rl(e, n, "gutterContextMenu", !1) : !1;
      }
      function ol(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), mr(e);
      }
      var or = { toString: function() {
        return "CodeMirror.Init";
      } }, al = {}, hi = {};
      function nu(e) {
        var n = e.optionHandlers;
        function i(r, a, m, D) {
          e.defaults[r] = a, m && (n[r] = D ? function(N, O, U) {
            U != or && m(N, O, U);
          } : m);
        }
        e.defineOption = i, e.Init = or, i("value", "", function(r, a) {
          return r.setValue(a);
        }, !0), i("mode", null, function(r, a) {
          r.doc.modeOption = a, Zi(r);
        }, !0), i("indentUnit", 2, Zi, !0), i("indentWithTabs", !1), i("smartIndent", !0), i("tabSize", 4, function(r) {
          Tr(r), mr(r), bt(r);
        }, !0), i("lineSeparator", null, function(r, a) {
          if (r.doc.lineSep = a, !!a) {
            var m = [], D = r.doc.first;
            r.doc.iter(function(O) {
              for (var U = 0; ; ) {
                var G = O.text.indexOf(a, U);
                if (G == -1)
                  break;
                U = G + a.length, m.push(J(D, G));
              }
              D++;
            });
            for (var N = m.length - 1; N >= 0; N--)
              tr(r.doc, a, m[N], J(m[N].line, m[N].ch + a.length));
          }
        }), i("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, a, m) {
          r.state.specialChars = new RegExp(a.source + (a.test("	") ? "" : "|	"), "g"), m != or && r.refresh();
        }), i("specialCharPlaceholder", Pl, function(r) {
          return r.refresh();
        }, !0), i("electricChars", !0), i("inputStyle", I ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), i("spellcheck", !1, function(r, a) {
          return r.getInputField().spellcheck = a;
        }, !0), i("autocorrect", !1, function(r, a) {
          return r.getInputField().autocorrect = a;
        }, !0), i("autocapitalize", !1, function(r, a) {
          return r.getInputField().autocapitalize = a;
        }, !0), i("rtlMoveVisually", !H), i("wholeLineUpdateBefore", !0), i("theme", "default", function(r) {
          ol(r), Cr(r);
        }, !0), i("keyMap", "default", function(r, a, m) {
          var D = vi(a), N = m != or && vi(m);
          N && N.detach && N.detach(r, D), D.attach && D.attach(r, N || null);
        }), i("extraKeys", null), i("configureMouse", null), i("lineWrapping", !1, iu, !0), i("gutters", [], function(r, a) {
          r.display.gutterSpecs = Xi(a, r.options.lineNumbers), Cr(r);
        }, !0), i("fixedGutter", !0, function(r, a) {
          r.display.gutters.style.left = a ? Hi(r.display) + "px" : "0", r.refresh();
        }, !0), i("coverGutterNextToScrollbar", !1, function(r) {
          return Zn(r);
        }, !0), i("scrollbarStyle", "native", function(r) {
          sa(r), Zn(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), i("lineNumbers", !1, function(r, a) {
          r.display.gutterSpecs = Xi(r.options.gutters, a), Cr(r);
        }, !0), i("firstLineNumber", 1, Cr, !0), i("lineNumberFormatter", function(r) {
          return r;
        }, Cr, !0), i("showCursorWhenSelecting", !1, yr, !0), i("resetSelectionOnContextMenu", !0), i("lineWiseCopyCut", !0), i("pasteLinesPerSelection", !0), i("selectionsMayTouch", !1), i("readOnly", !1, function(r, a) {
          a == "nocursor" && (Xn(r), r.display.input.blur()), r.display.input.readOnlyChanged(a);
        }), i("screenReaderLabel", null, function(r, a) {
          a = a === "" ? null : a, r.display.input.screenReaderLabelChanged(a);
        }), i("disableInput", !1, function(r, a) {
          a || r.display.input.reset();
        }, !0), i("dragDrop", !0, ru), i("allowDropFileTypes", null), i("cursorBlinkRate", 530), i("cursorScrollMargin", 0), i("cursorHeight", 1, yr, !0), i("singleCursorHeightPerLine", !0, yr, !0), i("workTime", 100), i("workDelay", 100), i("flattenSpans", !0, Tr, !0), i("addModeClass", !1, Tr, !0), i("pollInterval", 100), i("undoDepth", 200, function(r, a) {
          return r.doc.history.undoDepth = a;
        }), i("historyEventDelay", 1250), i("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), i("maxHighlightLength", 1e4, Tr, !0), i("moveInputWithCursor", !0, function(r, a) {
          a || r.display.input.resetPosition();
        }), i("tabindex", null, function(r, a) {
          return r.display.input.getField().tabIndex = a || "";
        }), i("autofocus", null), i("direction", "ltr", function(r, a) {
          return r.doc.setDirection(a);
        }, !0), i("phrases", null);
      }
      function ru(e, n, i) {
        var r = i && i != or;
        if (!n != !r) {
          var a = e.display.dragFunctions, m = n ? re : be;
          m(e.display.scroller, "dragstart", a.start), m(e.display.scroller, "dragenter", a.enter), m(e.display.scroller, "dragover", a.over), m(e.display.scroller, "dragleave", a.leave), m(e.display.scroller, "drop", a.drop);
        }
      }
      function iu(e) {
        e.options.lineWrapping ? (q(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : ($(e.display.wrapper, "CodeMirror-wrap"), Di(e)), $i(e), bt(e), mr(e), setTimeout(function() {
          return Zn(e);
        }, 100);
      }
      function Ke(e, n) {
        var i = this;
        if (!(this instanceof Ke))
          return new Ke(e, n);
        this.options = n = n ? se(n) : {}, se(al, n, !1);
        var r = n.value;
        typeof r == "string" ? r = new Ct(r, n.mode, null, n.lineSeparator, n.direction) : n.mode && (r.modeOption = n.mode), this.doc = r;
        var a = new Ke.inputStyles[n.inputStyle](this), m = this.display = new ms(e, r, a, n);
        m.wrapper.CodeMirror = this, ol(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), sa(this), this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new ue(),
          keySeq: null,
          specialChars: null
        }, n.autofocus && !I && m.input.focus(), f && c < 11 && setTimeout(function() {
          return i.display.input.reset(!0);
        }, 20), ou(this), Bs(), Hn(this), this.curOp.forceUpdate = !0, ya(this, r), n.autofocus && !I || this.hasFocus() ? setTimeout(function() {
          i.hasFocus() && !i.state.focused && Wi(i);
        }, 20) : Xn(this);
        for (var D in hi)
          hi.hasOwnProperty(D) && hi[D](this, n[D], or);
        da(this), n.finishInit && n.finishInit(this);
        for (var N = 0; N < so.length; ++N)
          so[N](this);
        $n(this), S && n.lineWrapping && getComputedStyle(m.lineDiv).textRendering == "optimizelegibility" && (m.lineDiv.style.textRendering = "auto");
      }
      Ke.defaults = al, Ke.optionHandlers = hi;
      function ou(e) {
        var n = e.display;
        re(n.scroller, "mousedown", lt(e, tl)), f && c < 11 ? re(n.scroller, "dblclick", lt(e, function(O) {
          if (!Oe(e, O)) {
            var U = Ln(e, O);
            if (!(!U || lo(e, O) || cn(e.display, O))) {
              We(O);
              var G = e.findWordAt(U);
              si(e.doc, G.anchor, G.head);
            }
          }
        })) : re(n.scroller, "dblclick", function(O) {
          return Oe(e, O) || We(O);
        }), re(n.scroller, "contextmenu", function(O) {
          return il(e, O);
        }), re(n.input.getField(), "contextmenu", function(O) {
          n.scroller.contains(O.target) || il(e, O);
        });
        var i, r = { end: 0 };
        function a() {
          n.activeTouch && (i = setTimeout(function() {
            return n.activeTouch = null;
          }, 1e3), r = n.activeTouch, r.end = +new Date());
        }
        function m(O) {
          if (O.touches.length != 1)
            return !1;
          var U = O.touches[0];
          return U.radiusX <= 1 && U.radiusY <= 1;
        }
        function D(O, U) {
          if (U.left == null)
            return !0;
          var G = U.left - O.left, K = U.top - O.top;
          return G * G + K * K > 20 * 20;
        }
        re(n.scroller, "touchstart", function(O) {
          if (!Oe(e, O) && !m(O) && !lo(e, O)) {
            n.input.ensurePolled(), clearTimeout(i);
            var U = +new Date();
            n.activeTouch = {
              start: U,
              moved: !1,
              prev: U - r.end <= 300 ? r : null
            }, O.touches.length == 1 && (n.activeTouch.left = O.touches[0].pageX, n.activeTouch.top = O.touches[0].pageY);
          }
        }), re(n.scroller, "touchmove", function() {
          n.activeTouch && (n.activeTouch.moved = !0);
        }), re(n.scroller, "touchend", function(O) {
          var U = n.activeTouch;
          if (U && !cn(n, O) && U.left != null && !U.moved && new Date() - U.start < 300) {
            var G = e.coordsChar(n.activeTouch, "page"), K;
            !U.prev || D(U, U.prev) ? K = new ke(G, G) : !U.prev.prev || D(U, U.prev.prev) ? K = e.findWordAt(G) : K = new ke(J(G.line, 0), Le(e.doc, J(G.line + 1, 0))), e.setSelection(K.anchor, K.head), e.focus(), We(O);
          }
          a();
        }), re(n.scroller, "touchcancel", a), re(n.scroller, "scroll", function() {
          n.scroller.clientHeight && (xr(e, n.scroller.scrollTop), On(e, n.scroller.scrollLeft, !0), Ce(e, "scroll", e));
        }), re(n.scroller, "mousewheel", function(O) {
          return pa(e, O);
        }), re(n.scroller, "DOMMouseScroll", function(O) {
          return pa(e, O);
        }), re(n.wrapper, "scroll", function() {
          return n.wrapper.scrollTop = n.wrapper.scrollLeft = 0;
        }), n.dragFunctions = {
          enter: function(O) {
            Oe(e, O) || Vt(O);
          },
          over: function(O) {
            Oe(e, O) || (Os(e, O), Vt(O));
          },
          start: function(O) {
            return Fs(e, O);
          },
          drop: lt(e, Ls),
          leave: function(O) {
            Oe(e, O) || Wa(e);
          }
        };
        var N = n.input.getField();
        re(N, "keyup", function(O) {
          return _a.call(e, O);
        }), re(N, "keydown", lt(e, qa)), re(N, "keypress", lt(e, el)), re(N, "focus", function(O) {
          return Wi(e, O);
        }), re(N, "blur", function(O) {
          return Xn(e, O);
        });
      }
      var so = [];
      Ke.defineInitHook = function(e) {
        return so.push(e);
      };
      function $r(e, n, i, r) {
        var a = e.doc, m;
        i == null && (i = "add"), i == "smart" && (a.mode.indent ? m = cr(e, n).state : i = "prev");
        var D = e.options.tabSize, N = Te(a, n), O = ae(N.text, null, D);
        N.stateAfter && (N.stateAfter = null);
        var U = N.text.match(/^\s*/)[0], G;
        if (!r && !/\S/.test(N.text))
          G = 0, i = "not";
        else if (i == "smart" && (G = a.mode.indent(m, N.text.slice(U.length), N.text), G == De || G > 150)) {
          if (!r)
            return;
          i = "prev";
        }
        i == "prev" ? n > a.first ? G = ae(Te(a, n - 1).text, null, D) : G = 0 : i == "add" ? G = O + e.options.indentUnit : i == "subtract" ? G = O - e.options.indentUnit : typeof i == "number" && (G = O + i), G = Math.max(0, G);
        var K = "", ee = 0;
        if (e.options.indentWithTabs)
          for (var _ = Math.floor(G / D); _; --_)
            ee += D, K += "	";
        if (ee < G && (K += vt(G - ee)), K != U)
          return tr(a, K, J(n, 0), J(n, U.length), "+input"), N.stateAfter = null, !0;
        for (var oe = 0; oe < a.sel.ranges.length; oe++) {
          var le = a.sel.ranges[oe];
          if (le.head.line == n && le.head.ch < U.length) {
            var de = J(n, U.length);
            to(a, oe, new ke(de, de));
            break;
          }
        }
      }
      var Kt = null;
      function gi(e) {
        Kt = e;
      }
      function uo(e, n, i, r, a) {
        var m = e.doc;
        e.display.shift = !1, r || (r = m.sel);
        var D = +new Date() - 200, N = a == "paste" || e.state.pasteIncoming > D, O = fr(n), U = null;
        if (N && r.ranges.length > 1)
          if (Kt && Kt.text.join(`
`) == n) {
            if (r.ranges.length % Kt.text.length == 0) {
              U = [];
              for (var G = 0; G < Kt.text.length; G++)
                U.push(m.splitLines(Kt.text[G]));
            }
          } else
            O.length == r.ranges.length && e.options.pasteLinesPerSelection && (U = mt(O, function(he) {
              return [he];
            }));
        for (var K = e.curOp.updateInput, ee = r.ranges.length - 1; ee >= 0; ee--) {
          var _ = r.ranges[ee], oe = _.from(), le = _.to();
          _.empty() && (i && i > 0 ? oe = J(oe.line, oe.ch - i) : e.state.overwrite && !N ? le = J(le.line, Math.min(Te(m, le.line).text.length, le.ch + Me(O).length)) : N && Kt && Kt.lineWise && Kt.text.join(`
`) == O.join(`
`) && (oe = le = J(oe.line, 0)));
          var de = {
            from: oe,
            to: le,
            text: U ? U[ee % U.length] : O,
            origin: a || (N ? "paste" : e.state.cutIncoming > D ? "cut" : "+input")
          };
          er(e.doc, de), at(e, "inputRead", e, de);
        }
        n && !N && sl(e, n), Jn(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = K), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function ll(e, n) {
        var i = e.clipboardData && e.clipboardData.getData("Text");
        if (i)
          return e.preventDefault(), !n.isReadOnly() && !n.options.disableInput && n.hasFocus() && Pt(n, function() {
            return uo(n, i, 0, null, "paste");
          }), !0;
      }
      function sl(e, n) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var i = e.doc.sel, r = i.ranges.length - 1; r >= 0; r--) {
            var a = i.ranges[r];
            if (!(a.head.ch > 100 || r && i.ranges[r - 1].head.line == a.head.line)) {
              var m = e.getModeAt(a.head), D = !1;
              if (m.electricChars) {
                for (var N = 0; N < m.electricChars.length; N++)
                  if (n.indexOf(m.electricChars.charAt(N)) > -1) {
                    D = $r(e, a.head.line, "smart");
                    break;
                  }
              } else
                m.electricInput && m.electricInput.test(Te(e.doc, a.head.line).text.slice(0, a.head.ch)) && (D = $r(e, a.head.line, "smart"));
              D && at(e, "electricInput", e, a.head.line);
            }
          }
      }
      function ul(e) {
        for (var n = [], i = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var a = e.doc.sel.ranges[r].head.line, m = { anchor: J(a, 0), head: J(a + 1, 0) };
          i.push(m), n.push(e.getRange(m.anchor, m.head));
        }
        return { text: n, ranges: i };
      }
      function fo(e, n, i, r) {
        e.setAttribute("autocorrect", i ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!n);
      }
      function fl() {
        var e = M("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), n = M("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return S ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), T && (e.style.border = "1px solid black"), n;
      }
      function au(e) {
        var n = e.optionHandlers, i = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            pe(this).focus(), this.display.input.focus();
          },
          setOption: function(r, a) {
            var m = this.options, D = m[r];
            m[r] == a && r != "mode" || (m[r] = a, n.hasOwnProperty(r) && lt(this, n[r])(this, a, D), Ce(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, a) {
            this.state.keyMaps[a ? "push" : "unshift"](vi(r));
          },
          removeKeyMap: function(r) {
            for (var a = this.state.keyMaps, m = 0; m < a.length; ++m)
              if (a[m] == r || a[m].name == r)
                return a.splice(m, 1), !0;
          },
          addOverlay: yt(function(r, a) {
            var m = r.token ? r : e.getMode(this.options, r);
            if (m.startState)
              throw new Error("Overlays may not be stateful.");
            Wt(
              this.state.overlays,
              {
                mode: m,
                modeSpec: r,
                opaque: a && a.opaque,
                priority: a && a.priority || 0
              },
              function(D) {
                return D.priority;
              }
            ), this.state.modeGen++, bt(this);
          }),
          removeOverlay: yt(function(r) {
            for (var a = this.state.overlays, m = 0; m < a.length; ++m) {
              var D = a[m].modeSpec;
              if (D == r || typeof r == "string" && D.name == r) {
                a.splice(m, 1), this.state.modeGen++, bt(this);
                return;
              }
            }
          }),
          indentLine: yt(function(r, a, m) {
            typeof a != "string" && typeof a != "number" && (a == null ? a = this.options.smartIndent ? "smart" : "prev" : a = a ? "add" : "subtract"), V(this.doc, r) && $r(this, r, a, m);
          }),
          indentSelection: yt(function(r) {
            for (var a = this.doc.sel.ranges, m = -1, D = 0; D < a.length; D++) {
              var N = a[D];
              if (N.empty())
                N.head.line > m && ($r(this, N.head.line, r, !0), m = N.head.line, D == this.doc.sel.primIndex && Jn(this));
              else {
                var O = N.from(), U = N.to(), G = Math.max(m, O.line);
                m = Math.min(this.lastLine(), U.line - (U.ch ? 0 : 1)) + 1;
                for (var K = G; K < m; ++K)
                  $r(this, K, r);
                var ee = this.doc.sel.ranges;
                O.ch == 0 && a.length == ee.length && ee[D].from().ch > 0 && to(this.doc, D, new ke(O, ee[D].to()), Be);
              }
            }
          }),
          getTokenAt: function(r, a) {
            return xo(this, r, a);
          },
          getLineTokens: function(r, a) {
            return xo(this, J(r), a, !0);
          },
          getTokenTypeAt: function(r) {
            r = Le(this.doc, r);
            var a = mo(this, Te(this.doc, r.line)), m = 0, D = (a.length - 1) / 2, N = r.ch, O;
            if (N == 0)
              O = a[2];
            else
              for (; ; ) {
                var U = m + D >> 1;
                if ((U ? a[U * 2 - 1] : 0) >= N)
                  D = U;
                else if (a[U * 2 + 1] < N)
                  m = U + 1;
                else {
                  O = a[U * 2 + 2];
                  break;
                }
              }
            var G = O ? O.indexOf("overlay ") : -1;
            return G < 0 ? O : G == 0 ? null : O.slice(0, G - 1);
          },
          getModeAt: function(r) {
            var a = this.doc.mode;
            return a.innerMode ? e.innerMode(a, this.getTokenAt(r).state).mode : a;
          },
          getHelper: function(r, a) {
            return this.getHelpers(r, a)[0];
          },
          getHelpers: function(r, a) {
            var m = [];
            if (!i.hasOwnProperty(a))
              return m;
            var D = i[a], N = this.getModeAt(r);
            if (typeof N[a] == "string")
              D[N[a]] && m.push(D[N[a]]);
            else if (N[a])
              for (var O = 0; O < N[a].length; O++) {
                var U = D[N[a][O]];
                U && m.push(U);
              }
            else
              N.helperType && D[N.helperType] ? m.push(D[N.helperType]) : D[N.name] && m.push(D[N.name]);
            for (var G = 0; G < D._global.length; G++) {
              var K = D._global[G];
              K.pred(N, this) && ce(m, K.val) == -1 && m.push(K.val);
            }
            return m;
          },
          getStateAfter: function(r, a) {
            var m = this.doc;
            return r = Bt(m, r == null ? m.first + m.size - 1 : r), cr(this, r + 1, a).state;
          },
          cursorCoords: function(r, a) {
            var m, D = this.doc.sel.primary();
            return r == null ? m = D.head : typeof r == "object" ? m = Le(this.doc, r) : m = r ? D.from() : D.to(), Gt(this, m, a || "page");
          },
          charCoords: function(r, a) {
            return qr(this, Le(this.doc, r), a || "page");
          },
          coordsChar: function(r, a) {
            return r = Xo(this, r, a || "page"), Fi(this, r.left, r.top);
          },
          lineAtHeight: function(r, a) {
            return r = Xo(this, { top: r, left: 0 }, a || "page").top, _t(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, a, m) {
            var D = !1, N;
            if (typeof r == "number") {
              var O = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > O && (r = O, D = !0), N = Te(this.doc, r);
            } else
              N = r;
            return Zr(this, N, { top: 0, left: 0 }, a || "page", m || D).top + (D ? this.doc.height - dn(N) : 0);
          },
          defaultTextHeight: function() {
            return Qn(this.display);
          },
          defaultCharWidth: function() {
            return Kn(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, a, m, D, N) {
            var O = this.display;
            r = Gt(this, Le(this.doc, r));
            var U = r.bottom, G = r.left;
            if (a.style.position = "absolute", a.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(a), O.sizer.appendChild(a), D == "over")
              U = r.top;
            else if (D == "above" || D == "near") {
              var K = Math.max(O.wrapper.clientHeight, this.doc.height), ee = Math.max(O.sizer.clientWidth, O.lineSpace.clientWidth);
              (D == "above" || r.bottom + a.offsetHeight > K) && r.top > a.offsetHeight ? U = r.top - a.offsetHeight : r.bottom + a.offsetHeight <= K && (U = r.bottom), G + a.offsetWidth > ee && (G = ee - a.offsetWidth);
            }
            a.style.top = U + "px", a.style.left = a.style.right = "", N == "right" ? (G = O.sizer.clientWidth - a.offsetWidth, a.style.right = "0px") : (N == "left" ? G = 0 : N == "middle" && (G = (O.sizer.clientWidth - a.offsetWidth) / 2), a.style.left = G + "px"), m && ns(this, { left: G, top: U, right: G + a.offsetWidth, bottom: U + a.offsetHeight });
          },
          triggerOnKeyDown: yt(qa),
          triggerOnKeyPress: yt(el),
          triggerOnKeyUp: _a,
          triggerOnMouseDown: yt(tl),
          execCommand: function(r) {
            if (Fr.hasOwnProperty(r))
              return Fr[r].call(null, this);
          },
          triggerElectric: yt(function(r) {
            sl(this, r);
          }),
          findPosH: function(r, a, m, D) {
            var N = 1;
            a < 0 && (N = -1, a = -a);
            for (var O = Le(this.doc, r), U = 0; U < a && (O = co(this.doc, O, N, m, D), !O.hitSide); ++U)
              ;
            return O;
          },
          moveH: yt(function(r, a) {
            var m = this;
            this.extendSelectionsBy(function(D) {
              return m.display.shift || m.doc.extend || D.empty() ? co(m.doc, D.head, r, a, m.options.rtlMoveVisually) : r < 0 ? D.from() : D.to();
            }, Nt);
          }),
          deleteH: yt(function(r, a) {
            var m = this.doc.sel, D = this.doc;
            m.somethingSelected() ? D.replaceSelection("", null, "+delete") : ir(this, function(N) {
              var O = co(D, N.head, r, a, !1);
              return r < 0 ? { from: O, to: N.head } : { from: N.head, to: O };
            });
          }),
          findPosV: function(r, a, m, D) {
            var N = 1, O = D;
            a < 0 && (N = -1, a = -a);
            for (var U = Le(this.doc, r), G = 0; G < a; ++G) {
              var K = Gt(this, U, "div");
              if (O == null ? O = K.left : K.left = O, U = dl(this, K, N, m), U.hitSide)
                break;
            }
            return U;
          },
          moveV: yt(function(r, a) {
            var m = this, D = this.doc, N = [], O = !this.display.shift && !D.extend && D.sel.somethingSelected();
            if (D.extendSelectionsBy(function(G) {
              if (O)
                return r < 0 ? G.from() : G.to();
              var K = Gt(m, G.head, "div");
              G.goalColumn != null && (K.left = G.goalColumn), N.push(K.left);
              var ee = dl(m, K, r, a);
              return a == "page" && G == D.sel.primary() && ki(m, qr(m, ee, "div").top - K.top), ee;
            }, Nt), N.length)
              for (var U = 0; U < D.sel.ranges.length; U++)
                D.sel.ranges[U].goalColumn = N[U];
          }),
          findWordAt: function(r) {
            var a = this.doc, m = Te(a, r.line).text, D = r.ch, N = r.ch;
            if (m) {
              var O = this.getHelper(r, "wordChars");
              (r.sticky == "before" || N == m.length) && D ? --D : ++N;
              for (var U = m.charAt(D), G = Ft(U, O) ? function(K) {
                return Ft(K, O);
              } : /\s/.test(U) ? function(K) {
                return /\s/.test(K);
              } : function(K) {
                return !/\s/.test(K) && !Ft(K);
              }; D > 0 && G(m.charAt(D - 1)); )
                --D;
              for (; N < m.length && G(m.charAt(N)); )
                ++N;
            }
            return new ke(J(r.line, D), J(r.line, N));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? q(this.display.cursorDiv, "CodeMirror-overwrite") : $(this.display.cursorDiv, "CodeMirror-overwrite"), Ce(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == te(me(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: yt(function(r, a) {
            Ar(this, r, a);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - tn(this) - this.display.barHeight,
              width: r.scrollWidth - tn(this) - this.display.barWidth,
              clientHeight: Pi(this),
              clientWidth: Mn(this)
            };
          },
          scrollIntoView: yt(function(r, a) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, a == null && (a = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: J(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = a || 0, r.from.line != null ? rs(this, r) : ia(this, r.from, r.to, r.margin);
          }),
          setSize: yt(function(r, a) {
            var m = this, D = function(O) {
              return typeof O == "number" || /^\d+$/.test(String(O)) ? O + "px" : O;
            };
            r != null && (this.display.wrapper.style.width = D(r)), a != null && (this.display.wrapper.style.height = D(a)), this.options.lineWrapping && Go(this);
            var N = this.display.viewFrom;
            this.doc.iter(N, this.display.viewTo, function(O) {
              if (O.widgets) {
                for (var U = 0; U < O.widgets.length; U++)
                  if (O.widgets[U].noHScroll) {
                    bn(m, N, "widget");
                    break;
                  }
              }
              ++N;
            }), this.curOp.forceUpdate = !0, Ce(this, "refresh", this);
          }),
          operation: function(r) {
            return Pt(this, r);
          },
          startOperation: function() {
            return Hn(this);
          },
          endOperation: function() {
            return $n(this);
          },
          refresh: yt(function() {
            var r = this.display.cachedTextHeight;
            bt(this), this.curOp.forceUpdate = !0, mr(this), Ar(this, this.doc.scrollLeft, this.doc.scrollTop), Qi(this.display), (r == null || Math.abs(r - Qn(this.display)) > 0.5 || this.options.lineWrapping) && $i(this), Ce(this, "refresh", this);
          }),
          swapDoc: yt(function(r) {
            var a = this.doc;
            return a.cm = null, this.state.selectingText && this.state.selectingText(), ya(this, r), mr(this), this.display.input.reset(), Ar(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, at(this, "swapDoc", this, a), a;
          }),
          phrase: function(r) {
            var a = this.options.phrases;
            return a && Object.prototype.hasOwnProperty.call(a, r) ? a[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, Qe(e), e.registerHelper = function(r, a, m) {
          i.hasOwnProperty(r) || (i[r] = e[r] = { _global: [] }), i[r][a] = m;
        }, e.registerGlobalHelper = function(r, a, m, D) {
          e.registerHelper(r, a, D), i[r]._global.push({ pred: m, val: D });
        };
      }
      function co(e, n, i, r, a) {
        var m = n, D = i, N = Te(e, n.line), O = a && e.direction == "rtl" ? -i : i;
        function U() {
          var Ae = n.line + O;
          return Ae < e.first || Ae >= e.first + e.size ? !1 : (n = new J(Ae, n.ch, n.sticky), N = Te(e, Ae));
        }
        function G(Ae) {
          var ge;
          if (r == "codepoint") {
            var Se = N.text.charCodeAt(n.ch + (i > 0 ? 0 : -1));
            if (isNaN(Se))
              ge = null;
            else {
              var Re = i > 0 ? Se >= 55296 && Se < 56320 : Se >= 56320 && Se < 57343;
              ge = new J(n.line, Math.max(0, Math.min(N.text.length, n.ch + i * (Re ? 2 : 1))), -i);
            }
          } else
            a ? ge = js(e.cm, N, n, i) : ge = ro(N, n, i);
          if (ge == null)
            if (!Ae && U())
              n = io(a, e.cm, N, n.line, O);
            else
              return !1;
          else
            n = ge;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          G();
        else if (r == "column")
          G(!0);
        else if (r == "word" || r == "group")
          for (var K = null, ee = r == "group", _ = e.cm && e.cm.getHelper(n, "wordChars"), oe = !0; !(i < 0 && !G(!oe)); oe = !1) {
            var le = N.text.charAt(n.ch) || `
`, de = Ft(le, _) ? "w" : ee && le == `
` ? "n" : !ee || /\s/.test(le) ? null : "p";
            if (ee && !oe && !de && (de = "s"), K && K != de) {
              i < 0 && (i = 1, G(), n.sticky = "after");
              break;
            }
            if (de && (K = de), i > 0 && !G(!oe))
              break;
          }
        var he = fi(e, n, m, D, !0);
        return Ne(m, he) && (he.hitSide = !0), he;
      }
      function dl(e, n, i, r) {
        var a = e.doc, m = n.left, D;
        if (r == "page") {
          var N = Math.min(e.display.wrapper.clientHeight, pe(e).innerHeight || a(e).documentElement.clientHeight), O = Math.max(N - 0.5 * Qn(e.display), 3);
          D = (i > 0 ? n.bottom : n.top) + i * O;
        } else
          r == "line" && (D = i > 0 ? n.bottom + 3 : n.top - 3);
        for (var U; U = Fi(e, m, D), !!U.outside; ) {
          if (i < 0 ? D <= 0 : D >= a.height) {
            U.hitSide = !0;
            break;
          }
          D += i * 5;
        }
        return U;
      }
      var Ye = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new ue(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      Ye.prototype.init = function(e) {
        var n = this, i = this, r = i.cm, a = i.div = e.lineDiv;
        a.contentEditable = !0, fo(a, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function m(N) {
          for (var O = N.target; O; O = O.parentNode) {
            if (O == a)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(O.className))
              break;
          }
          return !1;
        }
        re(a, "paste", function(N) {
          !m(N) || Oe(r, N) || ll(N, r) || c <= 11 && setTimeout(lt(r, function() {
            return n.updateFromDOM();
          }), 20);
        }), re(a, "compositionstart", function(N) {
          n.composing = { data: N.data, done: !1 };
        }), re(a, "compositionupdate", function(N) {
          n.composing || (n.composing = { data: N.data, done: !1 });
        }), re(a, "compositionend", function(N) {
          n.composing && (N.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0);
        }), re(a, "touchstart", function() {
          return i.forceCompositionEnd();
        }), re(a, "input", function() {
          n.composing || n.readFromDOMSoon();
        });
        function D(N) {
          if (!(!m(N) || Oe(r, N))) {
            if (r.somethingSelected())
              gi({ lineWise: !1, text: r.getSelections() }), N.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var O = ul(r);
              gi({ lineWise: !0, text: O.text }), N.type == "cut" && r.operation(function() {
                r.setSelections(O.ranges, 0, Be), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (N.clipboardData) {
              N.clipboardData.clearData();
              var U = Kt.text.join(`
`);
              if (N.clipboardData.setData("Text", U), N.clipboardData.getData("Text") == U) {
                N.preventDefault();
                return;
              }
            }
            var G = fl(), K = G.firstChild;
            fo(K), r.display.lineSpace.insertBefore(G, r.display.lineSpace.firstChild), K.value = Kt.text.join(`
`);
            var ee = te(a.ownerDocument);
            fe(K), setTimeout(function() {
              r.display.lineSpace.removeChild(G), ee.focus(), ee == a && i.showPrimarySelection();
            }, 50);
          }
        }
        re(a, "copy", D), re(a, "cut", D);
      }, Ye.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, Ye.prototype.prepareSelection = function() {
        var e = ta(this.cm, !1);
        return e.focus = te(this.div.ownerDocument) == this.div, e;
      }, Ye.prototype.showSelection = function(e, n) {
        !e || !this.cm.display.view.length || ((e.focus || n) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, Ye.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, Ye.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), n = this.cm, i = n.doc.sel.primary(), r = i.from(), a = i.to();
        if (n.display.viewTo == n.display.viewFrom || r.line >= n.display.viewTo || a.line < n.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var m = mi(n, e.anchorNode, e.anchorOffset), D = mi(n, e.focusNode, e.focusOffset);
        if (!(m && !m.bad && D && !D.bad && ie(it(m, D), r) == 0 && ie(ze(m, D), a) == 0)) {
          var N = n.display.view, O = r.line >= n.display.viewFrom && cl(n, r) || { node: N[0].measure.map[2], offset: 0 }, U = a.line < n.display.viewTo && cl(n, a);
          if (!U) {
            var G = N[N.length - 1].measure, K = G.maps ? G.maps[G.maps.length - 1] : G.map;
            U = { node: K[K.length - 1], offset: K[K.length - 2] - K[K.length - 3] };
          }
          if (!O || !U) {
            e.removeAllRanges();
            return;
          }
          var ee = e.rangeCount && e.getRangeAt(0), _;
          try {
            _ = Q(O.node, O.offset, U.offset, U.node);
          } catch {
          }
          _ && (!t && n.state.focused ? (e.collapse(O.node, O.offset), _.collapsed || (e.removeAllRanges(), e.addRange(_))) : (e.removeAllRanges(), e.addRange(_)), ee && e.anchorNode == null ? e.addRange(ee) : t && this.startGracePeriod()), this.rememberSelection();
        }
      }, Ye.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, Ye.prototype.showMultipleSelections = function(e) {
        k(this.cm.display.cursorDiv, e.cursors), k(this.cm.display.selectionDiv, e.selection);
      }, Ye.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, Ye.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var n = e.getRangeAt(0).commonAncestorContainer;
        return Z(this.div, n);
      }, Ye.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || te(this.div.ownerDocument) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, Ye.prototype.blur = function() {
        this.div.blur();
      }, Ye.prototype.getField = function() {
        return this.div;
      }, Ye.prototype.supportsTouch = function() {
        return !0;
      }, Ye.prototype.receivedFocus = function() {
        var e = this, n = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : Pt(this.cm, function() {
          return n.cm.curOp.selectionChanged = !0;
        });
        function i() {
          n.cm.state.focused && (n.pollSelection(), n.polling.set(n.cm.options.pollInterval, i));
        }
        this.polling.set(this.cm.options.pollInterval, i);
      }, Ye.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, Ye.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), n = this.cm;
          if (R && C && this.cm.display.gutterSpecs.length && lu(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var i = mi(n, e.anchorNode, e.anchorOffset), r = mi(n, e.focusNode, e.focusOffset);
            i && r && Pt(n, function() {
              pt(n.doc, Tn(i, r), Be), (i.bad || r.bad) && (n.curOp.selectionChanged = !0);
            });
          }
        }
      }, Ye.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, n = e.display, i = e.doc.sel.primary(), r = i.from(), a = i.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = J(r.line - 1, Te(e.doc, r.line - 1).length)), a.ch == Te(e.doc, a.line).text.length && a.line < e.lastLine() && (a = J(a.line + 1, 0)), r.line < n.viewFrom || a.line > n.viewTo - 1)
          return !1;
        var m, D, N;
        r.line == n.viewFrom || (m = Fn(e, r.line)) == 0 ? (D = Ve(n.view[0].line), N = n.view[0].node) : (D = Ve(n.view[m].line), N = n.view[m - 1].node.nextSibling);
        var O = Fn(e, a.line), U, G;
        if (O == n.view.length - 1 ? (U = n.viewTo - 1, G = n.lineDiv.lastChild) : (U = Ve(n.view[O + 1].line) - 1, G = n.view[O + 1].node.previousSibling), !N)
          return !1;
        for (var K = e.doc.splitLines(su(e, N, G, D, U)), ee = sn(e.doc, J(D, 0), J(U, Te(e.doc, U).text.length)); K.length > 1 && ee.length > 1; )
          if (Me(K) == Me(ee))
            K.pop(), ee.pop(), U--;
          else if (K[0] == ee[0])
            K.shift(), ee.shift(), D++;
          else
            break;
        for (var _ = 0, oe = 0, le = K[0], de = ee[0], he = Math.min(le.length, de.length); _ < he && le.charCodeAt(_) == de.charCodeAt(_); )
          ++_;
        for (var Ae = Me(K), ge = Me(ee), Se = Math.min(
          Ae.length - (K.length == 1 ? _ : 0),
          ge.length - (ee.length == 1 ? _ : 0)
        ); oe < Se && Ae.charCodeAt(Ae.length - oe - 1) == ge.charCodeAt(ge.length - oe - 1); )
          ++oe;
        if (K.length == 1 && ee.length == 1 && D == r.line)
          for (; _ && _ > r.ch && Ae.charCodeAt(Ae.length - oe - 1) == ge.charCodeAt(ge.length - oe - 1); )
            _--, oe++;
        K[K.length - 1] = Ae.slice(0, Ae.length - oe).replace(/^\u200b+/, ""), K[0] = K[0].slice(_).replace(/\u200b+$/, "");
        var Re = J(D, _), Ie = J(U, ee.length ? Me(ee).length - oe : 0);
        if (K.length > 1 || K[0] || ie(Re, Ie))
          return tr(e.doc, K, Re, Ie, "+input"), !0;
      }, Ye.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, Ye.prototype.reset = function() {
        this.forceCompositionEnd();
      }, Ye.prototype.forceCompositionEnd = function() {
        !this.composing || (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, Ye.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, Ye.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && Pt(this.cm, function() {
          return bt(e.cm);
        });
      }, Ye.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, Ye.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || lt(this.cm, uo)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, Ye.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, Ye.prototype.onContextMenu = function() {
      }, Ye.prototype.resetPosition = function() {
      }, Ye.prototype.needsContentAttribute = !0;
      function cl(e, n) {
        var i = Mi(e, n.line);
        if (!i || i.hidden)
          return null;
        var r = Te(e.doc, n.line), a = jo(i, r, n.line), m = Pe(r, e.doc.direction), D = "left";
        if (m) {
          var N = xe(m, n.ch);
          D = N % 2 ? "right" : "left";
        }
        var O = ko(a.map, n.ch, D);
        return O.offset = O.collapse == "right" ? O.end : O.start, O;
      }
      function lu(e) {
        for (var n = e; n; n = n.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(n.className))
            return !0;
        return !1;
      }
      function ar(e, n) {
        return n && (e.bad = !0), e;
      }
      function su(e, n, i, r, a) {
        var m = "", D = !1, N = e.doc.lineSeparator(), O = !1;
        function U(_) {
          return function(oe) {
            return oe.id == _;
          };
        }
        function G() {
          D && (m += N, O && (m += N), D = O = !1);
        }
        function K(_) {
          _ && (G(), m += _);
        }
        function ee(_) {
          if (_.nodeType == 1) {
            var oe = _.getAttribute("cm-text");
            if (oe) {
              K(oe);
              return;
            }
            var le = _.getAttribute("cm-marker"), de;
            if (le) {
              var he = e.findMarks(J(r, 0), J(a + 1, 0), U(+le));
              he.length && (de = he[0].find(0)) && K(sn(e.doc, de.from, de.to).join(N));
              return;
            }
            if (_.getAttribute("contenteditable") == "false")
              return;
            var Ae = /^(pre|div|p|li|table|br)$/i.test(_.nodeName);
            if (!/^br$/i.test(_.nodeName) && _.textContent.length == 0)
              return;
            Ae && G();
            for (var ge = 0; ge < _.childNodes.length; ge++)
              ee(_.childNodes[ge]);
            /^(pre|p)$/i.test(_.nodeName) && (O = !0), Ae && (D = !0);
          } else
            _.nodeType == 3 && K(_.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; ee(n), n != i; )
          n = n.nextSibling, O = !1;
        return m;
      }
      function mi(e, n, i) {
        var r;
        if (n == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[i], !r)
            return ar(e.clipPos(J(e.display.viewTo - 1)), !0);
          n = null, i = 0;
        } else
          for (r = n; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var a = 0; a < e.display.view.length; a++) {
          var m = e.display.view[a];
          if (m.node == r)
            return uu(m, n, i);
        }
      }
      function uu(e, n, i) {
        var r = e.text.firstChild, a = !1;
        if (!n || !Z(r, n))
          return ar(J(Ve(e.line), 0), !0);
        if (n == r && (a = !0, n = r.childNodes[i], i = 0, !n)) {
          var m = e.rest ? Me(e.rest) : e.line;
          return ar(J(Ve(m), m.text.length), a);
        }
        var D = n.nodeType == 3 ? n : null, N = n;
        for (!D && n.childNodes.length == 1 && n.firstChild.nodeType == 3 && (D = n.firstChild, i && (i = D.nodeValue.length)); N.parentNode != r; )
          N = N.parentNode;
        var O = e.measure, U = O.maps;
        function G(de, he, Ae) {
          for (var ge = -1; ge < (U ? U.length : 0); ge++)
            for (var Se = ge < 0 ? O.map : U[ge], Re = 0; Re < Se.length; Re += 3) {
              var Ie = Se[Re + 2];
              if (Ie == de || Ie == he) {
                var He = Ve(ge < 0 ? e.line : e.rest[ge]), Ge = Se[Re] + Ae;
                return (Ae < 0 || Ie != de) && (Ge = Se[Re + (Ae ? 1 : 0)]), J(He, Ge);
              }
            }
        }
        var K = G(D, N, i);
        if (K)
          return ar(K, a);
        for (var ee = N.nextSibling, _ = D ? D.nodeValue.length - i : 0; ee; ee = ee.nextSibling) {
          if (K = G(ee, ee.firstChild, 0), K)
            return ar(J(K.line, K.ch - _), a);
          _ += ee.textContent.length;
        }
        for (var oe = N.previousSibling, le = i; oe; oe = oe.previousSibling) {
          if (K = G(oe, oe.firstChild, -1), K)
            return ar(J(K.line, K.ch + le), a);
          le += oe.textContent.length;
        }
      }
      var et = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new ue(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      et.prototype.init = function(e) {
        var n = this, i = this, r = this.cm;
        this.createField(e);
        var a = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), T && (a.style.width = "0px"), re(a, "input", function() {
          f && c >= 9 && n.hasSelection && (n.hasSelection = null), i.poll();
        }), re(a, "paste", function(D) {
          Oe(r, D) || ll(D, r) || (r.state.pasteIncoming = +new Date(), i.fastPoll());
        });
        function m(D) {
          if (!Oe(r, D)) {
            if (r.somethingSelected())
              gi({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var N = ul(r);
              gi({ lineWise: !0, text: N.text }), D.type == "cut" ? r.setSelections(N.ranges, null, Be) : (i.prevInput = "", a.value = N.text.join(`
`), fe(a));
            } else
              return;
            D.type == "cut" && (r.state.cutIncoming = +new Date());
          }
        }
        re(a, "cut", m), re(a, "copy", m), re(e.scroller, "paste", function(D) {
          if (!(cn(e, D) || Oe(r, D))) {
            if (!a.dispatchEvent) {
              r.state.pasteIncoming = +new Date(), i.focus();
              return;
            }
            var N = new Event("paste");
            N.clipboardData = D.clipboardData, a.dispatchEvent(N);
          }
        }), re(e.lineSpace, "selectstart", function(D) {
          cn(e, D) || We(D);
        }), re(a, "compositionstart", function() {
          var D = r.getCursor("from");
          i.composing && i.composing.range.clear(), i.composing = {
            start: D,
            range: r.markText(D, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), re(a, "compositionend", function() {
          i.composing && (i.poll(), i.composing.range.clear(), i.composing = null);
        });
      }, et.prototype.createField = function(e) {
        this.wrapper = fl(), this.textarea = this.wrapper.firstChild;
        var n = this.cm.options;
        fo(this.textarea, n.spellcheck, n.autocorrect, n.autocapitalize);
      }, et.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, et.prototype.prepareSelection = function() {
        var e = this.cm, n = e.display, i = e.doc, r = ta(e);
        if (e.options.moveInputWithCursor) {
          var a = Gt(e, i.sel.primary().head, "div"), m = n.wrapper.getBoundingClientRect(), D = n.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            n.wrapper.clientHeight - 10,
            a.top + D.top - m.top
          )), r.teLeft = Math.max(0, Math.min(
            n.wrapper.clientWidth - 10,
            a.left + D.left - m.left
          ));
        }
        return r;
      }, et.prototype.showSelection = function(e) {
        var n = this.cm, i = n.display;
        k(i.cursorDiv, e.cursors), k(i.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, et.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var n = this.cm;
          if (this.resetting = !0, n.somethingSelected()) {
            this.prevInput = "";
            var i = n.getSelection();
            this.textarea.value = i, n.state.focused && fe(this.textarea), f && c >= 9 && (this.hasSelection = i);
          } else
            e || (this.prevInput = this.textarea.value = "", f && c >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }, et.prototype.getField = function() {
        return this.textarea;
      }, et.prototype.supportsTouch = function() {
        return !1;
      }, et.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!I || te(this.textarea.ownerDocument) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, et.prototype.blur = function() {
        this.textarea.blur();
      }, et.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, et.prototype.receivedFocus = function() {
        this.slowPoll();
      }, et.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, et.prototype.fastPoll = function() {
        var e = !1, n = this;
        n.pollingFast = !0;
        function i() {
          var r = n.poll();
          !r && !e ? (e = !0, n.polling.set(60, i)) : (n.pollingFast = !1, n.slowPoll());
        }
        n.polling.set(20, i);
      }, et.prototype.poll = function() {
        var e = this, n = this.cm, i = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !n.state.focused || yn(i) && !r && !this.composing || n.isReadOnly() || n.options.disableInput || n.state.keySeq)
          return !1;
        var a = i.value;
        if (a == r && !n.somethingSelected())
          return !1;
        if (f && c >= 9 && this.hasSelection === a || P && /[\uf700-\uf7ff]/.test(a))
          return n.display.input.reset(), !1;
        if (n.doc.sel == n.display.selForContextMenu) {
          var m = a.charCodeAt(0);
          if (m == 8203 && !r && (r = "\u200B"), m == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var D = 0, N = Math.min(r.length, a.length); D < N && r.charCodeAt(D) == a.charCodeAt(D); )
          ++D;
        return Pt(n, function() {
          uo(
            n,
            a.slice(D),
            r.length - D,
            null,
            e.composing ? "*compose" : null
          ), a.length > 1e3 || a.indexOf(`
`) > -1 ? i.value = e.prevInput = "" : e.prevInput = a, e.composing && (e.composing.range.clear(), e.composing.range = n.markText(
            e.composing.start,
            n.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, et.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, et.prototype.onKeyPress = function() {
        f && c >= 9 && (this.hasSelection = null), this.fastPoll();
      }, et.prototype.onContextMenu = function(e) {
        var n = this, i = n.cm, r = i.display, a = n.textarea;
        n.contextMenuPending && n.contextMenuPending();
        var m = Ln(i, e), D = r.scroller.scrollTop;
        if (!m || y)
          return;
        var N = i.options.resetSelectionOnContextMenu;
        N && i.doc.sel.contains(m) == -1 && lt(i, pt)(i.doc, Tn(m), Be);
        var O = a.style.cssText, U = n.wrapper.style.cssText, G = n.wrapper.offsetParent.getBoundingClientRect();
        n.wrapper.style.cssText = "position: static", a.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - G.top - 5) + "px; left: " + (e.clientX - G.left - 5) + `px;
      z-index: 1000; background: ` + (f ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var K;
        S && (K = a.ownerDocument.defaultView.scrollY), r.input.focus(), S && a.ownerDocument.defaultView.scrollTo(null, K), r.input.reset(), i.somethingSelected() || (a.value = n.prevInput = " "), n.contextMenuPending = _, r.selForContextMenu = i.doc.sel, clearTimeout(r.detectingSelectAll);
        function ee() {
          if (a.selectionStart != null) {
            var le = i.somethingSelected(), de = "\u200B" + (le ? a.value : "");
            a.value = "\u21DA", a.value = de, n.prevInput = le ? "" : "\u200B", a.selectionStart = 1, a.selectionEnd = de.length, r.selForContextMenu = i.doc.sel;
          }
        }
        function _() {
          if (n.contextMenuPending == _ && (n.contextMenuPending = !1, n.wrapper.style.cssText = U, a.style.cssText = O, f && c < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = D), a.selectionStart != null)) {
            (!f || f && c < 9) && ee();
            var le = 0, de = function() {
              r.selForContextMenu == i.doc.sel && a.selectionStart == 0 && a.selectionEnd > 0 && n.prevInput == "\u200B" ? lt(i, Ma)(i) : le++ < 10 ? r.detectingSelectAll = setTimeout(de, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(de, 200);
          }
        }
        if (f && c >= 9 && ee(), z) {
          Vt(e);
          var oe = function() {
            be(window, "mouseup", oe), setTimeout(_, 20);
          };
          re(window, "mouseup", oe);
        } else
          setTimeout(_, 50);
      }, et.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, et.prototype.setUneditable = function() {
      }, et.prototype.needsContentAttribute = !1;
      function fu(e, n) {
        if (n = n ? se(n) : {}, n.value = e.value, !n.tabindex && e.tabIndex && (n.tabindex = e.tabIndex), !n.placeholder && e.placeholder && (n.placeholder = e.placeholder), n.autofocus == null) {
          var i = te(e.ownerDocument);
          n.autofocus = i == e || e.getAttribute("autofocus") != null && i == document.body;
        }
        function r() {
          e.value = N.getValue();
        }
        var a;
        if (e.form && (re(e.form, "submit", r), !n.leaveSubmitMethodAlone)) {
          var m = e.form;
          a = m.submit;
          try {
            var D = m.submit = function() {
              r(), m.submit = a, m.submit(), m.submit = D;
            };
          } catch {
          }
        }
        n.finishInit = function(O) {
          O.save = r, O.getTextArea = function() {
            return e;
          }, O.toTextArea = function() {
            O.toTextArea = isNaN, r(), e.parentNode.removeChild(O.getWrapperElement()), e.style.display = "", e.form && (be(e.form, "submit", r), !n.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = a));
          };
        }, e.style.display = "none";
        var N = Ke(
          function(O) {
            return e.parentNode.insertBefore(O, e.nextSibling);
          },
          n
        );
        return N;
      }
      function du(e) {
        e.off = be, e.on = re, e.wheelEventPixels = ys, e.Doc = Ct, e.splitLines = fr, e.countColumn = ae, e.findColumn = Ze, e.isWordChar = Lt, e.Pass = De, e.signal = Ce, e.Line = kn, e.changeEnd = wn, e.scrollbarModel = la, e.Pos = J, e.cmpPos = ie, e.modes = kt, e.mimeModes = An, e.resolveMode = Rt, e.getMode = an, e.modeExtensions = xn, e.extendMode = Wr, e.copyState = ln, e.startState = dr, e.innerMode = En, e.commands = Fr, e.keyMap = pn, e.keyName = Qa, e.isModifierKey = Ya, e.lookupKey = rr, e.normalizeKeyMap = zs, e.StringStream = qe, e.SharedTextMarker = Mr, e.TextMarker = In, e.LineWidget = Pr, e.e_preventDefault = We, e.e_stopPropagation = Ut, e.e_stop = Vt, e.addClass = q, e.contains = Z, e.rmClass = $, e.keyNames = Rn;
      }
      nu(Ke), au(Ke);
      var cu = "iter insert remove copy getEditor constructor".split(" ");
      for (var yi in Ct.prototype)
        Ct.prototype.hasOwnProperty(yi) && ce(cu, yi) < 0 && (Ke.prototype[yi] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(Ct.prototype[yi]));
      return Qe(Ct), Ke.inputStyles = { textarea: et, contenteditable: Ye }, Ke.defineMode = function(e) {
        !Ke.defaults.mode && e != "null" && (Ke.defaults.mode = e), jr.apply(this, arguments);
      }, Ke.defineMIME = Wn, Ke.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), Ke.defineMIME("text/plain", "null"), Ke.defineExtension = function(e, n) {
        Ke.prototype[e] = n;
      }, Ke.defineDocExtension = function(e, n) {
        Ct.prototype[e] = n;
      }, Ke.fromTextArea = fu, du(Ke), Ke.version = "5.65.12", Ke;
    });
  }(codemirror)), codemirror.exports;
}
var codemirrorExports = requireCodemirror();
(function(g, b) {
  (function(l) {
    l(requireCodemirror());
  })(function(l) {
    l.defineMode("javascript", function(o, t) {
      var s = o.indentUnit, u = t.statementIndent, d = t.jsonld, f = t.json || d, c = t.trackScope !== !1, S = t.typescript, p = t.wordCharacters || /[\w$\xa1-\uffff]/, C = function() {
        function V(it) {
          return { type: it, style: "keyword" };
        }
        var X = V("keyword a"), J = V("keyword b"), ie = V("keyword c"), Ne = V("keyword d"), Ue = V("operator"), ze = { type: "atom", style: "atom" };
        return {
          if: V("if"),
          while: X,
          with: X,
          else: J,
          do: J,
          try: J,
          finally: J,
          return: Ne,
          break: Ne,
          continue: Ne,
          new: V("new"),
          delete: ie,
          void: ie,
          throw: ie,
          debugger: V("debugger"),
          var: V("var"),
          const: V("var"),
          let: V("var"),
          function: V("function"),
          catch: V("catch"),
          for: V("for"),
          switch: V("switch"),
          case: V("case"),
          default: V("default"),
          in: Ue,
          typeof: Ue,
          instanceof: Ue,
          true: ze,
          false: ze,
          null: ze,
          undefined: ze,
          NaN: ze,
          Infinity: ze,
          this: V("this"),
          class: V("class"),
          super: V("atom"),
          yield: ie,
          export: V("export"),
          import: V("import"),
          extends: ie,
          await: ie
        };
      }(), A = /[+\-*&%=<>!?|~^@]/, y = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function E(V) {
        for (var X = !1, J, ie = !1; (J = V.next()) != null; ) {
          if (!X) {
            if (J == "/" && !ie)
              return;
            J == "[" ? ie = !0 : ie && J == "]" && (ie = !1);
          }
          X = !X && J == "\\";
        }
      }
      var x, w;
      function T(V, X, J) {
        return x = V, w = J, X;
      }
      function R(V, X) {
        var J = V.next();
        if (J == '"' || J == "'")
          return X.tokenize = I(J), X.tokenize(V, X);
        if (J == "." && V.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return T("number", "number");
        if (J == "." && V.match(".."))
          return T("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(J))
          return T(J);
        if (J == "=" && V.eat(">"))
          return T("=>", "operator");
        if (J == "0" && V.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return T("number", "number");
        if (/\d/.test(J))
          return V.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), T("number", "number");
        if (J == "/")
          return V.eat("*") ? (X.tokenize = P, P(V, X)) : V.eat("/") ? (V.skipToEnd(), T("comment", "comment")) : _t(V, X, 1) ? (E(V), V.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), T("regexp", "string-2")) : (V.eat("="), T("operator", "operator", V.current()));
        if (J == "`")
          return X.tokenize = F, F(V, X);
        if (J == "#" && V.peek() == "!")
          return V.skipToEnd(), T("meta", "meta");
        if (J == "#" && V.eatWhile(p))
          return T("variable", "property");
        if (J == "<" && V.match("!--") || J == "-" && V.match("->") && !/\S/.test(V.string.slice(0, V.start)))
          return V.skipToEnd(), T("comment", "comment");
        if (A.test(J))
          return (J != ">" || !X.lexical || X.lexical.type != ">") && (V.eat("=") ? (J == "!" || J == "=") && V.eat("=") : /[<>*+\-|&?]/.test(J) && (V.eat(J), J == ">" && V.eat(J))), J == "?" && V.eat(".") ? T(".") : T("operator", "operator", V.current());
        if (p.test(J)) {
          V.eatWhile(p);
          var ie = V.current();
          if (X.lastType != ".") {
            if (C.propertyIsEnumerable(ie)) {
              var Ne = C[ie];
              return T(Ne.type, Ne.style, ie);
            }
            if (ie == "async" && V.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return T("async", "keyword", ie);
          }
          return T("variable", "variable", ie);
        }
      }
      function I(V) {
        return function(X, J) {
          var ie = !1, Ne;
          if (d && X.peek() == "@" && X.match(y))
            return J.tokenize = R, T("jsonld-keyword", "meta");
          for (; (Ne = X.next()) != null && !(Ne == V && !ie); )
            ie = !ie && Ne == "\\";
          return ie || (J.tokenize = R), T("string", "string");
        };
      }
      function P(V, X) {
        for (var J = !1, ie; ie = V.next(); ) {
          if (ie == "/" && J) {
            X.tokenize = R;
            break;
          }
          J = ie == "*";
        }
        return T("comment", "comment");
      }
      function F(V, X) {
        for (var J = !1, ie; (ie = V.next()) != null; ) {
          if (!J && (ie == "`" || ie == "$" && V.eat("{"))) {
            X.tokenize = R;
            break;
          }
          J = !J && ie == "\\";
        }
        return T("quasi", "string-2", V.current());
      }
      var H = "([{}])";
      function W(V, X) {
        X.fatArrowAt && (X.fatArrowAt = null);
        var J = V.string.indexOf("=>", V.start);
        if (!(J < 0)) {
          if (S) {
            var ie = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(V.string.slice(V.start, J));
            ie && (J = ie.index);
          }
          for (var Ne = 0, Ue = !1, ze = J - 1; ze >= 0; --ze) {
            var it = V.string.charAt(ze), Bt = H.indexOf(it);
            if (Bt >= 0 && Bt < 3) {
              if (!Ne) {
                ++ze;
                break;
              }
              if (--Ne == 0) {
                it == "(" && (Ue = !0);
                break;
              }
            } else if (Bt >= 3 && Bt < 6)
              ++Ne;
            else if (p.test(it))
              Ue = !0;
            else if (/["'\/`]/.test(it))
              for (; ; --ze) {
                if (ze == 0)
                  return;
                var Le = V.string.charAt(ze - 1);
                if (Le == it && V.string.charAt(ze - 2) != "\\") {
                  ze--;
                  break;
                }
              }
            else if (Ue && !Ne) {
              ++ze;
              break;
            }
          }
          Ue && !Ne && (X.fatArrowAt = ze);
        }
      }
      var j = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0
      };
      function z(V, X, J, ie, Ne, Ue) {
        this.indented = V, this.column = X, this.type = J, this.prev = Ne, this.info = Ue, ie != null && (this.align = ie);
      }
      function L(V, X) {
        if (!c)
          return !1;
        for (var J = V.localVars; J; J = J.next)
          if (J.name == X)
            return !0;
        for (var ie = V.context; ie; ie = ie.prev)
          for (var J = ie.vars; J; J = J.next)
            if (J.name == X)
              return !0;
      }
      function $(V, X, J, ie, Ne) {
        var Ue = V.cc;
        for (B.state = V, B.stream = Ne, B.marked = null, B.cc = Ue, B.style = X, V.lexical.hasOwnProperty("align") || (V.lexical.align = !0); ; ) {
          var ze = Ue.length ? Ue.pop() : f ? De : ce;
          if (ze(J, ie)) {
            for (; Ue.length && Ue[Ue.length - 1].lex; )
              Ue.pop()();
            return B.marked ? B.marked : J == "variable" && L(V, ie) ? "variable-2" : X;
          }
        }
      }
      var B = { state: null, column: null, marked: null, cc: null };
      function k() {
        for (var V = arguments.length - 1; V >= 0; V--)
          B.cc.push(arguments[V]);
      }
      function M() {
        return k.apply(null, arguments), !0;
      }
      function Y(V, X) {
        for (var J = X; J; J = J.next)
          if (J.name == V)
            return !0;
        return !1;
      }
      function Q(V) {
        var X = B.state;
        if (B.marked = "def", !!c) {
          if (X.context) {
            if (X.lexical.info == "var" && X.context && X.context.block) {
              var J = Z(V, X.context);
              if (J != null) {
                X.context = J;
                return;
              }
            } else if (!Y(V, X.localVars)) {
              X.localVars = new ne(V, X.localVars);
              return;
            }
          }
          t.globalVars && !Y(V, X.globalVars) && (X.globalVars = new ne(V, X.globalVars));
        }
      }
      function Z(V, X) {
        if (X)
          if (X.block) {
            var J = Z(V, X.prev);
            return J ? J == X.prev ? X : new q(J, X.vars, !0) : null;
          } else
            return Y(V, X.vars) ? X : new q(X.prev, new ne(V, X.vars), !1);
        else
          return null;
      }
      function te(V) {
        return V == "public" || V == "private" || V == "protected" || V == "abstract" || V == "readonly";
      }
      function q(V, X, J) {
        this.prev = V, this.vars = X, this.block = J;
      }
      function ne(V, X) {
        this.name = V, this.next = X;
      }
      var fe = new ne("this", new ne("arguments", null));
      function me() {
        B.state.context = new q(B.state.context, B.state.localVars, !1), B.state.localVars = fe;
      }
      function pe() {
        B.state.context = new q(B.state.context, B.state.localVars, !0), B.state.localVars = null;
      }
      me.lex = pe.lex = !0;
      function ve() {
        B.state.localVars = B.state.context.vars, B.state.context = B.state.context.prev;
      }
      ve.lex = !0;
      function se(V, X) {
        var J = function() {
          var ie = B.state, Ne = ie.indented;
          if (ie.lexical.type == "stat")
            Ne = ie.lexical.indented;
          else
            for (var Ue = ie.lexical; Ue && Ue.type == ")" && Ue.align; Ue = Ue.prev)
              Ne = Ue.indented;
          ie.lexical = new z(Ne, B.stream.column(), V, null, ie.lexical, X);
        };
        return J.lex = !0, J;
      }
      function ae() {
        var V = B.state;
        V.lexical.prev && (V.lexical.type == ")" && (V.indented = V.lexical.indented), V.lexical = V.lexical.prev);
      }
      ae.lex = !0;
      function ue(V) {
        function X(J) {
          return J == V ? M() : V == ";" || J == "}" || J == ")" || J == "]" ? k() : M(X);
        }
        return X;
      }
      function ce(V, X) {
        return V == "var" ? M(se("vardef", X), Vt, ue(";"), ae) : V == "keyword a" ? M(se("form"), gt, ce, ae) : V == "keyword b" ? M(se("form"), ce, ae) : V == "keyword d" ? B.stream.match(/^\s*$/, !1) ? M() : M(se("stat"), Ze, ue(";"), ae) : V == "debugger" ? M(ue(";")) : V == "{" ? M(se("}"), pe, $e, ae, ve) : V == ";" ? M() : V == "if" ? (B.state.lexical.info == "else" && B.state.cc[B.state.cc.length - 1] == ae && B.state.cc.pop()(), M(se("form"), gt, ce, ae, jn)) : V == "function" ? M(Zt) : V == "for" ? M(se("form"), pe, Ur, ce, ve, ae) : V == "class" || S && X == "interface" ? (B.marked = "keyword", M(se("form", V == "class" ? V : X), jr, ae)) : V == "variable" ? S && X == "declare" ? (B.marked = "keyword", M(ce)) : S && (X == "module" || X == "enum" || X == "type") && B.stream.match(/^\s*\w/, !1) ? (B.marked = "keyword", X == "enum" ? M(Vn) : X == "type" ? M(zr, ue("operator"), re, ue(";")) : M(se("form"), St, ue("{"), se("}"), $e, ae, ae)) : S && X == "namespace" ? (B.marked = "keyword", M(se("form"), De, ce, ae)) : S && X == "abstract" ? (B.marked = "keyword", M(ce)) : M(se("stat"), Ft) : V == "switch" ? M(
          se("form"),
          gt,
          ue("{"),
          se("}", "switch"),
          pe,
          $e,
          ae,
          ae,
          ve
        ) : V == "case" ? M(De, ue(":")) : V == "default" ? M(ue(":")) : V == "catch" ? M(se("form"), me, Fe, ce, ae, ve) : V == "export" ? M(se("stat"), xn, ae) : V == "import" ? M(se("stat"), ln, ae) : V == "async" ? M(ce) : X == "@" ? M(De, ce) : k(se("stat"), De, ue(";"), ae);
      }
      function Fe(V) {
        if (V == "(")
          return M(kt, ue(")"));
      }
      function De(V, X) {
        return Nt(V, X, !1);
      }
      function Be(V, X) {
        return Nt(V, X, !0);
      }
      function gt(V) {
        return V != "(" ? k() : M(se(")"), Ze, ue(")"), ae);
      }
      function Nt(V, X, J) {
        if (B.state.fatArrowAt == B.stream.start) {
          var ie = J ? xt : Wt;
          if (V == "(")
            return M(me, se(")"), je(kt, ")"), ae, ue("=>"), ie, ve);
          if (V == "variable")
            return k(me, St, ue("=>"), ie, ve);
        }
        var Ne = J ? vt : dt;
        return j.hasOwnProperty(V) ? M(Ne) : V == "function" ? M(Zt, Ne) : V == "class" || S && X == "interface" ? (B.marked = "keyword", M(se("form"), An, ae)) : V == "keyword c" || V == "async" ? M(J ? Be : De) : V == "(" ? M(se(")"), Ze, ue(")"), ae, Ne) : V == "operator" || V == "spread" ? M(J ? Be : De) : V == "[" ? M(se("]"), sn, ae, Ne) : V == "{" ? It(Ot, "}", null, Ne) : V == "quasi" ? k(Me, Ne) : V == "new" ? M(gn(J)) : M();
      }
      function Ze(V) {
        return V.match(/[;\}\)\],]/) ? k() : k(De);
      }
      function dt(V, X) {
        return V == "," ? M(Ze) : vt(V, X, !1);
      }
      function vt(V, X, J) {
        var ie = J == !1 ? dt : vt, Ne = J == !1 ? De : Be;
        if (V == "=>")
          return M(me, J ? xt : Wt, ve);
        if (V == "operator")
          return /\+\+|--/.test(X) || S && X == "!" ? M(ie) : S && X == "<" && B.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? M(se(">"), je(re, ">"), ae, ie) : X == "?" ? M(De, ue(":"), Ne) : M(Ne);
        if (V == "quasi")
          return k(Me, ie);
        if (V != ";") {
          if (V == "(")
            return It(Be, ")", "call", ie);
          if (V == ".")
            return M(Jt, ie);
          if (V == "[")
            return M(se("]"), Ze, ue("]"), ae, ie);
          if (S && X == "as")
            return B.marked = "keyword", M(re, ie);
          if (V == "regexp")
            return B.state.lastType = B.marked = "operator", B.stream.backUp(B.stream.pos - B.stream.start - 1), M(Ne);
        }
      }
      function Me(V, X) {
        return V != "quasi" ? k() : X.slice(X.length - 2) != "${" ? M(Me) : M(Ze, mt);
      }
      function mt(V) {
        if (V == "}")
          return B.marked = "string-2", B.state.tokenize = F, M(Me);
      }
      function Wt(V) {
        return W(B.stream, B.state), k(V == "{" ? ce : De);
      }
      function xt(V) {
        return W(B.stream, B.state), k(V == "{" ? ce : Be);
      }
      function gn(V) {
        return function(X) {
          return X == "." ? M(V ? Lt : Xt) : X == "variable" && S ? M(We, V ? vt : dt) : k(V ? Be : De);
        };
      }
      function Xt(V, X) {
        if (X == "target")
          return B.marked = "keyword", M(dt);
      }
      function Lt(V, X) {
        if (X == "target")
          return B.marked = "keyword", M(vt);
      }
      function Ft(V) {
        return V == ":" ? M(ae, ce) : k(dt, ue(";"), ae);
      }
      function Jt(V) {
        if (V == "variable")
          return B.marked = "property", M();
      }
      function Ot(V, X) {
        if (V == "async")
          return B.marked = "property", M(Ot);
        if (V == "variable" || B.style == "keyword") {
          if (B.marked = "property", X == "get" || X == "set")
            return M($t);
          var J;
          return S && B.state.fatArrowAt == B.stream.start && (J = B.stream.match(/^\s*:\s*/, !1)) && (B.state.fatArrowAt = B.stream.pos + J[0].length), M(rt);
        } else {
          if (V == "number" || V == "string")
            return B.marked = d ? "property" : B.style + " property", M(rt);
          if (V == "jsonld-keyword")
            return M(rt);
          if (S && te(X))
            return B.marked = "keyword", M(Ot);
          if (V == "[")
            return M(De, xe, ue("]"), rt);
          if (V == "spread")
            return M(Be, rt);
          if (X == "*")
            return B.marked = "keyword", M(Ot);
          if (V == ":")
            return k(rt);
        }
      }
      function $t(V) {
        return V != "variable" ? k(rt) : (B.marked = "property", M(Zt));
      }
      function rt(V) {
        if (V == ":")
          return M(Be);
        if (V == "(")
          return k(Zt);
      }
      function je(V, X, J) {
        function ie(Ne, Ue) {
          if (J ? J.indexOf(Ne) > -1 : Ne == ",") {
            var ze = B.state.lexical;
            return ze.info == "call" && (ze.pos = (ze.pos || 0) + 1), M(function(it, Bt) {
              return it == X || Bt == X ? k() : k(V);
            }, ie);
          }
          return Ne == X || Ue == X ? M() : J && J.indexOf(";") > -1 ? k(V) : M(ue(X));
        }
        return function(Ne, Ue) {
          return Ne == X || Ue == X ? M() : k(V, ie);
        };
      }
      function It(V, X, J) {
        for (var ie = 3; ie < arguments.length; ie++)
          B.cc.push(arguments[ie]);
        return M(se(X, J), je(V, X), ae);
      }
      function $e(V) {
        return V == "}" ? M() : k(ce, $e);
      }
      function xe(V, X) {
        if (S) {
          if (V == ":")
            return M(re);
          if (X == "?")
            return M(xe);
        }
      }
      function ye(V, X) {
        if (S && (V == ":" || X == "in"))
          return M(re);
      }
      function Pe(V) {
        if (S && V == ":")
          return B.stream.match(/^\s*\w+\s+is\b/, !1) ? M(De, Ee, re) : M(re);
      }
      function Ee(V, X) {
        if (X == "is")
          return B.marked = "keyword", M();
      }
      function re(V, X) {
        if (X == "keyof" || X == "typeof" || X == "infer" || X == "readonly")
          return B.marked = "keyword", M(X == "typeof" ? Be : re);
        if (V == "variable" || X == "void")
          return B.marked = "type", M(Qe);
        if (X == "|" || X == "&")
          return M(re);
        if (V == "string" || V == "number" || V == "atom")
          return M(Qe);
        if (V == "[")
          return M(se("]"), je(re, "]", ","), ae, Qe);
        if (V == "{")
          return M(se("}"), be, ae, Qe);
        if (V == "(")
          return M(je(Xe, ")"), we, Qe);
        if (V == "<")
          return M(je(re, ">"), re);
        if (V == "quasi")
          return k(Oe, Qe);
      }
      function we(V) {
        if (V == "=>")
          return M(re);
      }
      function be(V) {
        return V.match(/[\}\)\]]/) ? M() : V == "," || V == ";" ? M(be) : k(Ce, be);
      }
      function Ce(V, X) {
        if (V == "variable" || B.style == "keyword")
          return B.marked = "property", M(Ce);
        if (X == "?" || V == "number" || V == "string")
          return M(Ce);
        if (V == ":")
          return M(re);
        if (V == "[")
          return M(ue("variable"), ye, ue("]"), Ce);
        if (V == "(")
          return k(qt, Ce);
        if (!V.match(/[;\}\)\],]/))
          return M();
      }
      function Oe(V, X) {
        return V != "quasi" ? k() : X.slice(X.length - 2) != "${" ? M(Oe) : M(re, Et);
      }
      function Et(V) {
        if (V == "}")
          return B.marked = "string-2", B.state.tokenize = F, M(Oe);
      }
      function Xe(V, X) {
        return V == "variable" && B.stream.match(/^\s*[?:]/, !1) || X == "?" ? M(Xe) : V == ":" ? M(re) : V == "spread" ? M(Xe) : k(re);
      }
      function Qe(V, X) {
        if (X == "<")
          return M(se(">"), je(re, ">"), ae, Qe);
        if (X == "|" || V == "." || X == "&")
          return M(re);
        if (V == "[")
          return M(re, ue("]"), Qe);
        if (X == "extends" || X == "implements")
          return B.marked = "keyword", M(re);
        if (X == "?")
          return M(re, ue(":"), re);
      }
      function We(V, X) {
        if (X == "<")
          return M(se(">"), je(re, ">"), ae, Qe);
      }
      function Ut() {
        return k(re, mn);
      }
      function mn(V, X) {
        if (X == "=")
          return M(re);
      }
      function Vt(V, X) {
        return X == "enum" ? (B.marked = "keyword", M(Vn)) : k(St, xe, zt, xi);
      }
      function St(V, X) {
        if (S && te(X))
          return B.marked = "keyword", M(St);
        if (V == "variable")
          return Q(X), M();
        if (V == "spread")
          return M(St);
        if (V == "[")
          return It(Ai, "]");
        if (V == "{")
          return It(ur, "}");
      }
      function ur(V, X) {
        return V == "variable" && !B.stream.match(/^\s*:/, !1) ? (Q(X), M(zt)) : (V == "variable" && (B.marked = "property"), V == "spread" ? M(St) : V == "}" ? k() : V == "[" ? M(De, ue("]"), ue(":"), ur) : M(ue(":"), St, zt));
      }
      function Ai() {
        return k(St, zt);
      }
      function zt(V, X) {
        if (X == "=")
          return M(Be);
      }
      function xi(V) {
        if (V == ",")
          return M(Vt);
      }
      function jn(V, X) {
        if (V == "keyword b" && X == "else")
          return M(se("form", "else"), ce, ae);
      }
      function Ur(V, X) {
        if (X == "await")
          return M(Ur);
        if (V == "(")
          return M(se(")"), fr, ae);
      }
      function fr(V) {
        return V == "var" ? M(Vt, yn) : V == "variable" ? M(yn) : k(yn);
      }
      function yn(V, X) {
        return V == ")" ? M() : V == ";" ? M(yn) : X == "in" || X == "of" ? (B.marked = "keyword", M(De, yn)) : k(De, yn);
      }
      function Zt(V, X) {
        if (X == "*")
          return B.marked = "keyword", M(Zt);
        if (V == "variable")
          return Q(X), M(Zt);
        if (V == "(")
          return M(me, se(")"), je(kt, ")"), ae, Pe, ce, ve);
        if (S && X == "<")
          return M(se(">"), je(Ut, ">"), ae, Zt);
      }
      function qt(V, X) {
        if (X == "*")
          return B.marked = "keyword", M(qt);
        if (V == "variable")
          return Q(X), M(qt);
        if (V == "(")
          return M(me, se(")"), je(kt, ")"), ae, Pe, ve);
        if (S && X == "<")
          return M(se(">"), je(Ut, ">"), ae, qt);
      }
      function zr(V, X) {
        if (V == "keyword" || V == "variable")
          return B.marked = "type", M(zr);
        if (X == "<")
          return M(se(">"), je(Ut, ">"), ae);
      }
      function kt(V, X) {
        return X == "@" && M(De, kt), V == "spread" ? M(kt) : S && te(X) ? (B.marked = "keyword", M(kt)) : S && V == "this" ? M(xe, zt) : k(St, xe, zt);
      }
      function An(V, X) {
        return V == "variable" ? jr(V, X) : Wn(V, X);
      }
      function jr(V, X) {
        if (V == "variable")
          return Q(X), M(Wn);
      }
      function Wn(V, X) {
        if (X == "<")
          return M(se(">"), je(Ut, ">"), ae, Wn);
        if (X == "extends" || X == "implements" || S && V == ",")
          return X == "implements" && (B.marked = "keyword"), M(S ? re : De, Wn);
        if (V == "{")
          return M(se("}"), Rt, ae);
      }
      function Rt(V, X) {
        if (V == "async" || V == "variable" && (X == "static" || X == "get" || X == "set" || S && te(X)) && B.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
          return B.marked = "keyword", M(Rt);
        if (V == "variable" || B.style == "keyword")
          return B.marked = "property", M(an, Rt);
        if (V == "number" || V == "string")
          return M(an, Rt);
        if (V == "[")
          return M(De, xe, ue("]"), an, Rt);
        if (X == "*")
          return B.marked = "keyword", M(Rt);
        if (S && V == "(")
          return k(qt, Rt);
        if (V == ";" || V == ",")
          return M(Rt);
        if (V == "}")
          return M();
        if (X == "@")
          return M(De, Rt);
      }
      function an(V, X) {
        if (X == "!" || X == "?")
          return M(an);
        if (V == ":")
          return M(re, zt);
        if (X == "=")
          return M(Be);
        var J = B.state.lexical.prev, ie = J && J.info == "interface";
        return k(ie ? qt : Zt);
      }
      function xn(V, X) {
        return X == "*" ? (B.marked = "keyword", M(Te, ue(";"))) : X == "default" ? (B.marked = "keyword", M(De, ue(";"))) : V == "{" ? M(je(Wr, "}"), Te, ue(";")) : k(ce);
      }
      function Wr(V, X) {
        if (X == "as")
          return B.marked = "keyword", M(ue("variable"));
        if (V == "variable")
          return k(Be, Wr);
      }
      function ln(V) {
        return V == "string" ? M() : V == "(" ? k(De) : V == "." ? k(dt) : k(En, dr, Te);
      }
      function En(V, X) {
        return V == "{" ? It(En, "}") : (V == "variable" && Q(X), X == "*" && (B.marked = "keyword"), M(qe));
      }
      function dr(V) {
        if (V == ",")
          return M(En, dr);
      }
      function qe(V, X) {
        if (X == "as")
          return B.marked = "keyword", M(En);
      }
      function Te(V, X) {
        if (X == "from")
          return B.marked = "keyword", M(De);
      }
      function sn(V) {
        return V == "]" ? M() : k(je(Be, "]"));
      }
      function Vn() {
        return k(se("form"), St, ue("{"), se("}"), je(jt, "}"), ae, ae);
      }
      function jt() {
        return k(St, zt);
      }
      function Ve(V, X) {
        return V.lastType == "operator" || V.lastType == "," || A.test(X.charAt(0)) || /[,.]/.test(X.charAt(0));
      }
      function _t(V, X, J) {
        return X.tokenize == R && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(X.lastType) || X.lastType == "quasi" && /\{\s*$/.test(V.string.slice(0, V.pos - (J || 0)));
      }
      return {
        startState: function(V) {
          var X = {
            tokenize: R,
            lastType: "sof",
            cc: [],
            lexical: new z((V || 0) - s, 0, "block", !1),
            localVars: t.localVars,
            context: t.localVars && new q(null, null, !1),
            indented: V || 0
          };
          return t.globalVars && typeof t.globalVars == "object" && (X.globalVars = t.globalVars), X;
        },
        token: function(V, X) {
          if (V.sol() && (X.lexical.hasOwnProperty("align") || (X.lexical.align = !1), X.indented = V.indentation(), W(V, X)), X.tokenize != P && V.eatSpace())
            return null;
          var J = X.tokenize(V, X);
          return x == "comment" ? J : (X.lastType = x == "operator" && (w == "++" || w == "--") ? "incdec" : x, $(X, J, x, w, V));
        },
        indent: function(V, X) {
          if (V.tokenize == P || V.tokenize == F)
            return l.Pass;
          if (V.tokenize != R)
            return 0;
          var J = X && X.charAt(0), ie = V.lexical, Ne;
          if (!/^\s*else\b/.test(X))
            for (var Ue = V.cc.length - 1; Ue >= 0; --Ue) {
              var ze = V.cc[Ue];
              if (ze == ae)
                ie = ie.prev;
              else if (ze != jn && ze != ve)
                break;
            }
          for (; (ie.type == "stat" || ie.type == "form") && (J == "}" || (Ne = V.cc[V.cc.length - 1]) && (Ne == dt || Ne == vt) && !/^[,\.=+\-*:?[\(]/.test(X)); )
            ie = ie.prev;
          u && ie.type == ")" && ie.prev.type == "stat" && (ie = ie.prev);
          var it = ie.type, Bt = J == it;
          return it == "vardef" ? ie.indented + (V.lastType == "operator" || V.lastType == "," ? ie.info.length + 1 : 0) : it == "form" && J == "{" ? ie.indented : it == "form" ? ie.indented + s : it == "stat" ? ie.indented + (Ve(V, X) ? u || s : 0) : ie.info == "switch" && !Bt && t.doubleIndentSwitch != !1 ? ie.indented + (/^(?:case|default)\b/.test(X) ? s : 2 * s) : ie.align ? ie.column + (Bt ? 0 : 1) : ie.indented + (Bt ? 0 : s);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: f ? null : "/*",
        blockCommentEnd: f ? null : "*/",
        blockCommentContinue: f ? null : " * ",
        lineComment: f ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: f ? "json" : "javascript",
        jsonldMode: d,
        jsonMode: f,
        expressionAllowed: _t,
        skipExpression: function(V) {
          $(V, "atom", "atom", "true", new l.StringStream("", 2, null));
        }
      };
    }), l.registerHelper("wordChars", "javascript", /[\w$]/), l.defineMIME("text/javascript", "javascript"), l.defineMIME("text/ecmascript", "javascript"), l.defineMIME("application/javascript", "javascript"), l.defineMIME("application/x-javascript", "javascript"), l.defineMIME("application/ecmascript", "javascript"), l.defineMIME("application/json", { name: "javascript", json: !0 }), l.defineMIME("application/x-json", { name: "javascript", json: !0 }), l.defineMIME("application/manifest+json", { name: "javascript", json: !0 }), l.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), l.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), l.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
  });
})();
const Struct_vue_vue_type_style_index_0_lang = "", _sfc_main$5 = defineComponent({
  name: "Struct",
  props: {
    modelValue: [Object, Array, Function],
    title: String,
    defaultValue: {
      require: !1
    },
    validate: Function
  },
  inject: ["designer"],
  data() {
    return {
      editor: null,
      visible: !1,
      err: !1,
      oldVal: null,
      t: this.designer.setupState.t
    };
  },
  watch: {
    modelValue() {
      this.load();
    },
    visible(g) {
      g ? this.load() : this.err = !1;
    }
  },
  methods: {
    load() {
      const g = toJSON(this.modelValue ? deepParseFn(deepCopy(this.modelValue)) : this.defaultValue);
      this.oldVal = g, this.$nextTick(() => {
        this.editor = codemirrorExports(this.$refs.editor, {
          lineNumbers: !0,
          mode: "javascript",
          gutters: ["CodeMirror-lint-markers"],
          lint: !0,
          line: !0,
          tabSize: 2,
          lineWrapping: !0,
          value: g || ""
        });
      });
    },
    onOk() {
      if (this.err)
        return;
      const str = this.editor.getValue();
      let val;
      try {
        val = eval("(function (){return " + str + "}())");
      } catch (g) {
        this.err = ` (${g})`;
        return;
      }
      if (this.validate && this.validate(val) === !1) {
        this.err = !0;
        return;
      }
      this.visible = !1, toJSON(val) !== this.oldVal && this.$emit("update:modelValue", val);
    }
  }
}), _hoisted_1$3 = { class: "_fc_struct" }, _hoisted_2$1 = {
  key: 0,
  ref: "editor"
}, _hoisted_3$1 = { class: "dialog-footer" }, _hoisted_4 = {
  key: 0,
  class: "_fc_err"
};
function _sfc_render$4(g, b, l, o, t, s) {
  const u = resolveComponent("ElButton"), d = resolveComponent("ElDialog");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(u, {
      onClick: b[0] || (b[0] = (f) => g.visible = !0),
      style: { width: "100%" }
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(g.title || g.t("struct.title")), 1)
      ]),
      _: 1
    }),
    createVNode(d, {
      title: g.title || g.t("struct.title"),
      modelValue: g.visible,
      "onUpdate:modelValue": b[2] || (b[2] = (f) => g.visible = f),
      "close-on-click-modal": !1,
      "append-to-body": ""
    }, {
      footer: withCtx(() => [
        createElementVNode("span", _hoisted_3$1, [
          g.err ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(g.t("struct.error")) + toDisplayString(g.err !== !0 ? g.err : ""), 1)) : createCommentVNode("", !0),
          createVNode(u, {
            onClick: b[1] || (b[1] = (f) => g.visible = !1),
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(g.t("struct.cancel")), 1)
            ]),
            _: 1
          }),
          createVNode(u, {
            type: "primary",
            onClick: g.onOk,
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(g.t("struct.submit")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: withCtx(() => [
        g.visible ? (openBlock(), createElementBlock("div", _hoisted_2$1, null, 512)) : createCommentVNode("", !0)
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ]);
}
const Struct = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
function debounce(g, b) {
  var l = null;
  return function(...o) {
    l !== null && clearTimeout(l), l = setTimeout(() => g.call(this, ...o), b);
  };
}
const Fetch_vue_vue_type_style_index_0_lang = "", _sfc_main$4 = defineComponent({
  name: "Fetch",
  props: {
    modelValue: [Object, String],
    to: String
  },
  components: {
    DragForm: designerForm.$form()
  },
  inject: ["designer"],
  computed: {
    formValue() {
      const g = this.modelValue;
      return g ? is.String(g) ? {
        action: g
      } : !g._parse && g.parse ? { ...g, _parse: "" + g.parse } : is.Function(g._parse) ? { ...g, _parse: "" + g._parse } : g : {};
    }
  },
  data() {
    const g = this.designer.setupState.t;
    return {
      api: {},
      fetch: {},
      t: g,
      option: {
        form: {
          labelPosition: "right",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1
      },
      rule: [
        {
          type: "input",
          field: "action",
          title: g("fetch.action") + ": ",
          validate: [{ required: !0, message: g("fetch.actionRequired") }]
        },
        {
          type: "select",
          field: "method",
          title: g("fetch.method") + ": ",
          value: "GET",
          options: [
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" }
          ],
          control: [
            {
              value: "POST",
              rule: [
                {
                  type: "select",
                  field: "dataType",
                  title: g("fetch.dataType") + ": ",
                  value: "FormData",
                  options: [
                    { label: "FormData", value: "FormData" },
                    { label: "JSON", value: "JSON" }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "Struct",
          field: "data",
          title: g("fetch.data") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "headers",
          title: g("fetch.headers") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "input",
          field: "_parse",
          title: g("fetch.parse") + ": ",
          info: g("fetch.parseInfo"),
          value: `function (res){
   return res.data;
}`,
          props: {
            type: "textarea",
            rows: 8
          },
          validate: [{
            validator: (b, l, o) => {
              if (!l)
                return o();
              try {
                this.parseFn(l);
              } catch {
                return o(!1);
              }
              o();
            },
            message: g("fetch.parseValidate")
          }]
        }
      ]
    };
  },
  methods: {
    parseFn(v) {
      return eval(`(function () {
                return ${v}
            })()`);
    },
    _input() {
      this.api.submit((g) => {
        g.to = this.to || "options", g._parse && (g.parse = this.parseFn(g._parse)), this.$emit("update:modelValue", g);
      });
    },
    input: debounce(function() {
      this._input();
    }, 1e3)
  },
  mounted() {
    this._input();
  }
}), _hoisted_1$2 = { class: "_fc_fetch" };
function _sfc_render$3(g, b, l, o, t, s) {
  const u = resolveComponent("DragForm");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(u, {
      api: g.api,
      "onUpdate:api": b[0] || (b[0] = (d) => g.api = d),
      modelValue: g.formValue,
      rule: g.rule,
      option: g.option,
      onChange: g.input
    }, null, 8, ["api", "modelValue", "rule", "option", "onChange"])
  ]);
}
const Fetch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]), Validate_vue_vue_type_style_index_0_lang = "", _sfc_main$3 = defineComponent({
  name: "Validate",
  inject: ["designer"],
  props: {
    modelValue: Array
  },
  components: {
    DragForm: designerForm.$form()
  },
  watch: {
    modelValue(g) {
      this.formValue = this.parseValue(g);
    }
  },
  data() {
    const g = this.designer.setupState.t;
    return {
      formValue: {},
      t: g,
      option: {
        form: {
          labelPosition: "top",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1,
        formData: this.parseValue(this.modelValue)
      },
      rule: [
        {
          type: "select",
          field: "type",
          value: "",
          title: g("validate.type"),
          options: [
            { value: "", label: g("validate.typePlaceholder") },
            { value: "string", label: "String" },
            { value: "array", label: "Array" },
            { value: "number", label: "Number" },
            { value: "integer", label: "Integer" },
            { value: "float", label: "Float" },
            { value: "object", label: "Object" },
            { value: "date", label: "Date" },
            { value: "url", label: "url" },
            { value: "hex", label: "hex" },
            { value: "email", label: "email" }
          ],
          control: [
            {
              handle: (b) => !!b,
              rule: [
                {
                  type: "group",
                  field: "validate",
                  props: {
                    expand: 1,
                    rule: [
                      {
                        type: "select",
                        title: g("validate.trigger"),
                        field: "trigger",
                        value: "change",
                        options: [
                          { label: "change", value: "change" },
                          { label: "submit", value: "submit" },
                          { label: "blur", value: "blur" }
                        ]
                      },
                      {
                        type: "select",
                        title: g("validate.mode"),
                        field: "mode",
                        options: [
                          { value: "required", label: g("validate.modes.required") },
                          { value: "pattern", label: g("validate.modes.pattern") },
                          { value: "min", label: g("validate.modes.min") },
                          { value: "max", label: g("validate.modes.max") },
                          { value: "len", label: g("validate.modes.len") }
                        ],
                        value: "required",
                        control: [
                          {
                            value: "required",
                            rule: [
                              {
                                type: "hidden",
                                field: "required",
                                value: !0
                              }
                            ]
                          },
                          {
                            value: "pattern",
                            rule: [
                              {
                                type: "input",
                                field: "pattern",
                                title: g("validate.modes.pattern")
                              }
                            ]
                          },
                          {
                            value: "min",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "min",
                                title: g("validate.modes.min")
                              }
                            ]
                          },
                          {
                            value: "max",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "max",
                                title: g("validate.modes.max")
                              }
                            ]
                          },
                          {
                            value: "len",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "len",
                                title: g("validate.modes.len")
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: "input",
                        title: g("validate.message"),
                        field: "message",
                        value: "",
                        children: [
                          {
                            type: "span",
                            slot: "append",
                            inject: !0,
                            class: "append-msg",
                            on: {
                              click: (b) => {
                                const l = this.designer.setupState.activeRule.title;
                                this.designer.setupState.activeRule && b.api.setValue("message", g(b.api.form.mode !== "required" ? "validate.autoMode" : "validate.autoRequired", { title: l }));
                              }
                            },
                            children: [g("validate.auto")]
                          }
                        ]
                      }
                    ]
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onInput: function(g) {
      let b = [];
      const { validate: l, type: o } = deepCopy(g);
      o && (!l || !l.length) || (o && (l.forEach((t) => {
        t.type = o;
      }), b = [...l]), this.$emit("update:modelValue", b));
    },
    parseValue(g) {
      let b = {
        validate: g ? [...g] : [],
        type: g.length ? g[0].type : void 0
      };
      return b.validate.forEach((l) => {
        l.mode || Object.keys(l).forEach((o) => {
          ["message", "type", "trigger", "mode"].indexOf(o) < 0 && (l.mode = o);
        });
      }), b;
    }
  }
});
function _sfc_render$2(g, b, l, o, t, s) {
  const u = resolveComponent("DragForm");
  return openBlock(), createBlock(u, {
    class: "_fc-validate",
    rule: g.rule,
    option: g.option,
    modelValue: g.formValue,
    "onUpdate:modelValue": g.onInput
  }, null, 8, ["rule", "option", "modelValue", "onUpdate:modelValue"]);
}
const Validate = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]), _sfc_main$2 = defineComponent({
  name: "DragBox",
  props: ["rule", "tag", "formCreateInject"],
  render(g) {
    const b = { ...g.$props.rule.props, ...g.$attrs };
    let l = b.tag + "-drag drag-box";
    Object.keys(g.$slots).length || (l += " " + b.tag + "-holder"), b.class = l, b.modelValue = [...this.$props.formCreateInject.children];
    const o = {};
    return g.$slots.default && g.$slots.default().forEach((s) => {
      s.key && (o[s.key] = s);
    }), h(resolveComponent("draggable"), b, {
      item: ({ element: t }) => h("div", {}, o[t.__fc__.key + "fc"])
    });
  }
}), Required_vue_vue_type_style_index_0_lang = "", _sfc_main$1 = defineComponent({
  name: "Required",
  props: {
    modelValue: {}
  },
  inject: ["designer"],
  watch: {
    required() {
      this.update();
    },
    requiredMsg() {
      this.update();
    },
    modelValue(g) {
      const b = is.String(g);
      this.required = g === void 0 ? !1 : b ? !0 : !!g, this.requiredMsg = b ? g : "";
    }
  },
  data() {
    const g = is.String(this.modelValue);
    return {
      t: this.designer.setupState.t,
      required: this.modelValue === void 0 ? !1 : g ? !0 : !!this.modelValue,
      requiredMsg: g ? this.modelValue : ""
    };
  },
  methods: {
    update() {
      let g;
      this.required === !1 ? g = !1 : g = this.requiredMsg, this.$emit("update:modelValue", g);
    }
  }
}), _hoisted_1$1 = { class: "_fc-required" };
function _sfc_render$1(g, b, l, o, t, s) {
  const u = resolveComponent("ElSwitch"), d = resolveComponent("ElInput");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(u, {
      modelValue: g.required,
      "onUpdate:modelValue": b[0] || (b[0] = (f) => g.required = f)
    }, null, 8, ["modelValue"]),
    g.required ? (openBlock(), createBlock(d, {
      key: 0,
      modelValue: g.requiredMsg,
      "onUpdate:modelValue": b[1] || (b[1] = (f) => g.requiredMsg = f),
      placeholder: g.t("validate.requiredPlaceholder")
    }, null, 8, ["modelValue", "placeholder"])) : createCommentVNode("", !0)
  ]);
}
const Required = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]), TableOptions_vue_vue_type_style_index_0_scoped_ed69f8be_lang = "", _sfc_main = defineComponent({
  name: "TableOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      column: [{ label: "label", key: "label" }, { label: "value", key: "value" }],
      t: this.designer.setupState.t
    };
  },
  created() {
    Array.isArray(this.modelValue) || this.$emit("input", []);
  },
  methods: {
    onInput(g) {
      g.label && g.value && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.modelValue);
    },
    add() {
      this.modelValue.push(this.column.reduce((g, b) => (g[b.key] = "", g), {}));
    },
    del(g) {
      this.modelValue.splice(g, 1), this.input(this.modelValue);
    }
  }
}), _withScopeId = (g) => (pushScopeId("data-v-ed69f8be"), g = g(), popScopeId(), g), _hoisted_1 = { class: "_fc_table_opt" }, _hoisted_2 = ["onClick"], _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", { class: "fc-icon icon-add" }, null, -1));
function _sfc_render(g, b, l, o, t, s) {
  const u = resolveComponent("el-input"), d = resolveComponent("el-table-column"), f = resolveComponent("el-table"), c = resolveComponent("el-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(f, {
      data: g.modelValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: withCtx(() => [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(g.column, (S, p) => (openBlock(), createBlock(d, {
          key: S.label + p,
          label: S.label
        }, {
          default: withCtx((C) => [
            createVNode(u, {
              size: "small",
              modelValue: C.row[S.key] || "",
              "onUpdate:modelValue": (A) => (C.row[S.key] = A, g.onInput(C.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1032, ["label"]))), 128)),
        createVNode(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: g.t("tableOptions.handle")
        }, {
          default: withCtx((S) => [
            createElementVNode("i", {
              class: "fc-icon icon-delete",
              onClick: (p) => g.del(S.$index)
            }, null, 8, _hoisted_2)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    createVNode(c, {
      link: "",
      type: "primary",
      onClick: g.add
    }, {
      default: withCtx(() => [
        _hoisted_3,
        createTextVNode(" " + toDisplayString(g.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const TableOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed69f8be"]]);
/*!
 * @form-create/component-wangeditor v3.1.12
 * (c) 2018-2022 xaboy
 * Github https://github.com/xaboy/form-create with wangeditor
 * Released under the MIT License.
 */
function ownKeys(g, b) {
  var l = Object.keys(g);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(g);
    b && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(g, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function _objectSpread2(g) {
  for (var b = 1; b < arguments.length; b++) {
    var l = arguments[b] != null ? arguments[b] : {};
    b % 2 ? ownKeys(Object(l), !0).forEach(function(o) {
      _defineProperty(g, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(l)) : ownKeys(Object(l)).forEach(function(o) {
      Object.defineProperty(g, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return g;
}
function _typeof(g) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(b) {
    return typeof b;
  } : _typeof = function(b) {
    return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
  }, _typeof(g);
}
function _defineProperty(g, b, l) {
  return b in g ? Object.defineProperty(g, b, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : g[b] = l, g;
}
function getDefaultExportFromCjs(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var wangEditor = { exports: {} };
(function(g, b) {
  (function(o, t) {
    g.exports = t();
  })(window, function() {
    return function(l) {
      var o = {};
      function t(s) {
        if (o[s])
          return o[s].exports;
        var u = o[s] = { i: s, l: !1, exports: {} };
        return l[s].call(u.exports, u, u.exports, t), u.l = !0, u.exports;
      }
      return t.m = l, t.c = o, t.d = function(s, u, d) {
        t.o(s, u) || Object.defineProperty(s, u, { enumerable: !0, get: d });
      }, t.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, t.t = function(s, u) {
        if (u & 1 && (s = t(s)), u & 8 || u & 4 && _typeof(s) === "object" && s && s.__esModule)
          return s;
        var d = /* @__PURE__ */ Object.create(null);
        if (t.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: s }), u & 2 && typeof s != "string")
          for (var f in s)
            t.d(d, f, function(c) {
              return s[c];
            }.bind(null, f));
        return d;
      }, t.n = function(s) {
        var u = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return t.d(u, "a", u), u;
      }, t.o = function(s, u) {
        return Object.prototype.hasOwnProperty.call(s, u);
      }, t.p = "", t(t.s = 141);
    }([function(l, o) {
      function t(s) {
        return s && s.__esModule ? s : { default: s };
      }
      l.exports = t;
    }, function(l, o, t) {
      l.exports = t(142);
    }, function(l, o, t) {
      t.r(o), t.d(o, "__extends", function() {
        return u;
      }), t.d(o, "__assign", function() {
        return d;
      }), t.d(o, "__rest", function() {
        return f;
      }), t.d(o, "__decorate", function() {
        return c;
      }), t.d(o, "__param", function() {
        return S;
      }), t.d(o, "__metadata", function() {
        return p;
      }), t.d(o, "__awaiter", function() {
        return C;
      }), t.d(o, "__generator", function() {
        return A;
      }), t.d(o, "__createBinding", function() {
        return y;
      }), t.d(o, "__exportStar", function() {
        return E;
      }), t.d(o, "__values", function() {
        return x;
      }), t.d(o, "__read", function() {
        return w;
      }), t.d(o, "__spread", function() {
        return T;
      }), t.d(o, "__spreadArrays", function() {
        return R;
      }), t.d(o, "__spreadArray", function() {
        return I;
      }), t.d(o, "__await", function() {
        return P;
      }), t.d(o, "__asyncGenerator", function() {
        return F;
      }), t.d(o, "__asyncDelegator", function() {
        return H;
      }), t.d(o, "__asyncValues", function() {
        return W;
      }), t.d(o, "__makeTemplateObject", function() {
        return j;
      }), t.d(o, "__importStar", function() {
        return L;
      }), t.d(o, "__importDefault", function() {
        return $;
      }), t.d(o, "__classPrivateFieldGet", function() {
        return B;
      }), t.d(o, "__classPrivateFieldSet", function() {
        return k;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
      var s = function(Y, Q) {
        return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(Z, te) {
          Z.__proto__ = te;
        } || function(Z, te) {
          for (var q in te)
            Object.prototype.hasOwnProperty.call(te, q) && (Z[q] = te[q]);
        }, s(Y, Q);
      };
      function u(M, Y) {
        if (typeof Y != "function" && Y !== null)
          throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
        s(M, Y);
        function Q() {
          this.constructor = M;
        }
        M.prototype = Y === null ? Object.create(Y) : (Q.prototype = Y.prototype, new Q());
      }
      var d = function() {
        return d = Object.assign || function(Q) {
          for (var Z, te = 1, q = arguments.length; te < q; te++) {
            Z = arguments[te];
            for (var ne in Z)
              Object.prototype.hasOwnProperty.call(Z, ne) && (Q[ne] = Z[ne]);
          }
          return Q;
        }, d.apply(this, arguments);
      };
      function f(M, Y) {
        var Q = {};
        for (var Z in M)
          Object.prototype.hasOwnProperty.call(M, Z) && Y.indexOf(Z) < 0 && (Q[Z] = M[Z]);
        if (M != null && typeof Object.getOwnPropertySymbols == "function")
          for (var te = 0, Z = Object.getOwnPropertySymbols(M); te < Z.length; te++)
            Y.indexOf(Z[te]) < 0 && Object.prototype.propertyIsEnumerable.call(M, Z[te]) && (Q[Z[te]] = M[Z[te]]);
        return Q;
      }
      function c(M, Y, Q, Z) {
        var te = arguments.length, q = te < 3 ? Y : Z === null ? Z = Object.getOwnPropertyDescriptor(Y, Q) : Z, ne;
        if ((typeof Reflect > "u" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate == "function")
          q = Reflect.decorate(M, Y, Q, Z);
        else
          for (var fe = M.length - 1; fe >= 0; fe--)
            (ne = M[fe]) && (q = (te < 3 ? ne(q) : te > 3 ? ne(Y, Q, q) : ne(Y, Q)) || q);
        return te > 3 && q && Object.defineProperty(Y, Q, q), q;
      }
      function S(M, Y) {
        return function(Q, Z) {
          Y(Q, Z, M);
        };
      }
      function p(M, Y) {
        if ((typeof Reflect > "u" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(M, Y);
      }
      function C(M, Y, Q, Z) {
        function te(q) {
          return q instanceof Q ? q : new Q(function(ne) {
            ne(q);
          });
        }
        return new (Q || (Q = Promise))(function(q, ne) {
          function fe(ve) {
            try {
              pe(Z.next(ve));
            } catch (se) {
              ne(se);
            }
          }
          function me(ve) {
            try {
              pe(Z.throw(ve));
            } catch (se) {
              ne(se);
            }
          }
          function pe(ve) {
            ve.done ? q(ve.value) : te(ve.value).then(fe, me);
          }
          pe((Z = Z.apply(M, Y || [])).next());
        });
      }
      function A(M, Y) {
        var Q = { label: 0, sent: function() {
          if (q[0] & 1)
            throw q[1];
          return q[1];
        }, trys: [], ops: [] }, Z, te, q, ne;
        return ne = { next: fe(0), throw: fe(1), return: fe(2) }, typeof Symbol == "function" && (ne[Symbol.iterator] = function() {
          return this;
        }), ne;
        function fe(pe) {
          return function(ve) {
            return me([pe, ve]);
          };
        }
        function me(pe) {
          if (Z)
            throw new TypeError("Generator is already executing.");
          for (; Q; )
            try {
              if (Z = 1, te && (q = pe[0] & 2 ? te.return : pe[0] ? te.throw || ((q = te.return) && q.call(te), 0) : te.next) && !(q = q.call(te, pe[1])).done)
                return q;
              switch (te = 0, q && (pe = [pe[0] & 2, q.value]), pe[0]) {
                case 0:
                case 1:
                  q = pe;
                  break;
                case 4:
                  return Q.label++, { value: pe[1], done: !1 };
                case 5:
                  Q.label++, te = pe[1], pe = [0];
                  continue;
                case 7:
                  pe = Q.ops.pop(), Q.trys.pop();
                  continue;
                default:
                  if (q = Q.trys, !(q = q.length > 0 && q[q.length - 1]) && (pe[0] === 6 || pe[0] === 2)) {
                    Q = 0;
                    continue;
                  }
                  if (pe[0] === 3 && (!q || pe[1] > q[0] && pe[1] < q[3])) {
                    Q.label = pe[1];
                    break;
                  }
                  if (pe[0] === 6 && Q.label < q[1]) {
                    Q.label = q[1], q = pe;
                    break;
                  }
                  if (q && Q.label < q[2]) {
                    Q.label = q[2], Q.ops.push(pe);
                    break;
                  }
                  q[2] && Q.ops.pop(), Q.trys.pop();
                  continue;
              }
              pe = Y.call(M, Q);
            } catch (ve) {
              pe = [6, ve], te = 0;
            } finally {
              Z = q = 0;
            }
          if (pe[0] & 5)
            throw pe[1];
          return { value: pe[0] ? pe[1] : void 0, done: !0 };
        }
      }
      var y = Object.create ? function(M, Y, Q, Z) {
        Z === void 0 && (Z = Q), Object.defineProperty(M, Z, { enumerable: !0, get: function() {
          return Y[Q];
        } });
      } : function(M, Y, Q, Z) {
        Z === void 0 && (Z = Q), M[Z] = Y[Q];
      };
      function E(M, Y) {
        for (var Q in M)
          Q !== "default" && !Object.prototype.hasOwnProperty.call(Y, Q) && y(Y, M, Q);
      }
      function x(M) {
        var Y = typeof Symbol == "function" && Symbol.iterator, Q = Y && M[Y], Z = 0;
        if (Q)
          return Q.call(M);
        if (M && typeof M.length == "number")
          return { next: function() {
            return M && Z >= M.length && (M = void 0), { value: M && M[Z++], done: !M };
          } };
        throw new TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function w(M, Y) {
        var Q = typeof Symbol == "function" && M[Symbol.iterator];
        if (!Q)
          return M;
        var Z = Q.call(M), te, q = [], ne;
        try {
          for (; (Y === void 0 || Y-- > 0) && !(te = Z.next()).done; )
            q.push(te.value);
        } catch (fe) {
          ne = { error: fe };
        } finally {
          try {
            te && !te.done && (Q = Z.return) && Q.call(Z);
          } finally {
            if (ne)
              throw ne.error;
          }
        }
        return q;
      }
      function T() {
        for (var M = [], Y = 0; Y < arguments.length; Y++)
          M = M.concat(w(arguments[Y]));
        return M;
      }
      function R() {
        for (var M = 0, Y = 0, Q = arguments.length; Y < Q; Y++)
          M += arguments[Y].length;
        for (var Z = Array(M), te = 0, Y = 0; Y < Q; Y++)
          for (var q = arguments[Y], ne = 0, fe = q.length; ne < fe; ne++, te++)
            Z[te] = q[ne];
        return Z;
      }
      function I(M, Y) {
        for (var Q = 0, Z = Y.length, te = M.length; Q < Z; Q++, te++)
          M[te] = Y[Q];
        return M;
      }
      function P(M) {
        return this instanceof P ? (this.v = M, this) : new P(M);
      }
      function F(M, Y, Q) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Z = Q.apply(M, Y || []), te, q = [];
        return te = {}, ne("next"), ne("throw"), ne("return"), te[Symbol.asyncIterator] = function() {
          return this;
        }, te;
        function ne(ae) {
          Z[ae] && (te[ae] = function(ue) {
            return new Promise(function(ce, Fe) {
              q.push([ae, ue, ce, Fe]) > 1 || fe(ae, ue);
            });
          });
        }
        function fe(ae, ue) {
          try {
            me(Z[ae](ue));
          } catch (ce) {
            se(q[0][3], ce);
          }
        }
        function me(ae) {
          ae.value instanceof P ? Promise.resolve(ae.value.v).then(pe, ve) : se(q[0][2], ae);
        }
        function pe(ae) {
          fe("next", ae);
        }
        function ve(ae) {
          fe("throw", ae);
        }
        function se(ae, ue) {
          ae(ue), q.shift(), q.length && fe(q[0][0], q[0][1]);
        }
      }
      function H(M) {
        var Y, Q;
        return Y = {}, Z("next"), Z("throw", function(te) {
          throw te;
        }), Z("return"), Y[Symbol.iterator] = function() {
          return this;
        }, Y;
        function Z(te, q) {
          Y[te] = M[te] ? function(ne) {
            return (Q = !Q) ? { value: P(M[te](ne)), done: te === "return" } : q ? q(ne) : ne;
          } : q;
        }
      }
      function W(M) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Y = M[Symbol.asyncIterator], Q;
        return Y ? Y.call(M) : (M = typeof x == "function" ? x(M) : M[Symbol.iterator](), Q = {}, Z("next"), Z("throw"), Z("return"), Q[Symbol.asyncIterator] = function() {
          return this;
        }, Q);
        function Z(q) {
          Q[q] = M[q] && function(ne) {
            return new Promise(function(fe, me) {
              ne = M[q](ne), te(fe, me, ne.done, ne.value);
            });
          };
        }
        function te(q, ne, fe, me) {
          Promise.resolve(me).then(function(pe) {
            q({ value: pe, done: fe });
          }, ne);
        }
      }
      function j(M, Y) {
        return Object.defineProperty ? Object.defineProperty(M, "raw", { value: Y }) : M.raw = Y, M;
      }
      var z = Object.create ? function(M, Y) {
        Object.defineProperty(M, "default", { enumerable: !0, value: Y });
      } : function(M, Y) {
        M.default = Y;
      };
      function L(M) {
        if (M && M.__esModule)
          return M;
        var Y = {};
        if (M != null)
          for (var Q in M)
            Q !== "default" && Object.prototype.hasOwnProperty.call(M, Q) && y(Y, M, Q);
        return z(Y, M), Y;
      }
      function $(M) {
        return M && M.__esModule ? M : { default: M };
      }
      function B(M, Y) {
        if (!Y.has(M))
          throw new TypeError("attempted to get private field on non-instance");
        return Y.get(M);
      }
      function k(M, Y, Q) {
        if (!Y.has(M))
          throw new TypeError("attempted to set private field on non-instance");
        return Y.set(M, Q), Q;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(89)), f = s(t(4)), c = s(t(26)), S = s(t(17)), p = s(t(120)), C = s(t(27)), A = s(t(91)), y = s(t(70)), E = s(t(44)), x = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 }), o.DomElement = void 0;
      var w = t(2), T = t(6), R = [];
      function I(z) {
        var L = document.createElement("div");
        L.innerHTML = z;
        var $ = L.children;
        return T.toArray($);
      }
      function P(z) {
        return z ? z instanceof HTMLCollection || z instanceof NodeList : !1;
      }
      function F(z) {
        var L = document.querySelectorAll(z);
        return T.toArray(L);
      }
      function H(z) {
        var L = [], $ = [];
        return (0, d.default)(z) ? L = z : L = z.split(";"), (0, f.default)(L).call(L, function(B) {
          var k, M = (0, c.default)(k = B.split(":")).call(k, function(Y) {
            return (0, S.default)(Y).call(Y);
          });
          M.length === 2 && $.push(M[0] + ":" + M[1]);
        }), $;
      }
      var W = function() {
        function z(L) {
          if (this.elems = [], this.length = this.elems.length, this.dataSource = new p.default(), !!L) {
            if (L instanceof z)
              return L;
            var $ = [], B = L instanceof Node ? L.nodeType : -1;
            if (this.selector = L, B === 1 || B === 9)
              $ = [L];
            else if (P(L))
              $ = T.toArray(L);
            else if (L instanceof Array)
              $ = L;
            else if (typeof L == "string") {
              var k, M = (0, S.default)(k = L.replace(`/
/mg`, "")).call(k);
              (0, C.default)(M).call(M, "<") === 0 ? $ = I(M) : $ = F(M);
            }
            var Y = $.length;
            if (!Y)
              return this;
            for (var Q = 0; Q < Y; Q++)
              this.elems.push($[Q]);
            this.length = Y;
          }
        }
        return (0, u.default)(z.prototype, "id", {
          get: function() {
            return this.elems[0].id;
          },
          enumerable: !1,
          configurable: !0
        }), z.prototype.forEach = function(L) {
          for (var $ = 0; $ < this.length; $++) {
            var B = this.elems[$], k = L.call(B, B, $);
            if (k === !1)
              break;
          }
          return this;
        }, z.prototype.clone = function(L) {
          var $;
          L === void 0 && (L = !1);
          var B = [];
          return (0, f.default)($ = this.elems).call($, function(k) {
            B.push(k.cloneNode(!!L));
          }), j(B);
        }, z.prototype.get = function(L) {
          L === void 0 && (L = 0);
          var $ = this.length;
          return L >= $ && (L = L % $), j(this.elems[L]);
        }, z.prototype.first = function() {
          return this.get(0);
        }, z.prototype.last = function() {
          var L = this.length;
          return this.get(L - 1);
        }, z.prototype.on = function(L, $, B) {
          var k;
          return L ? (typeof $ == "function" && (B = $, $ = ""), (0, f.default)(k = this).call(k, function(M) {
            if (!$) {
              M.addEventListener(L, B);
              return;
            }
            var Y = function(Z) {
              var te = Z.target;
              te.matches($) && B.call(te, Z);
            };
            M.addEventListener(L, Y), R.push({ elem: M, selector: $, fn: B, agentFn: Y });
          })) : this;
        }, z.prototype.off = function(L, $, B) {
          var k;
          return L ? (typeof $ == "function" && (B = $, $ = ""), (0, f.default)(k = this).call(k, function(M) {
            if ($) {
              for (var Y = -1, Q = 0; Q < R.length; Q++) {
                var Z = R[Q];
                if (Z.selector === $ && Z.fn === B && Z.elem === M) {
                  Y = Q;
                  break;
                }
              }
              if (Y !== -1) {
                var te = (0, A.default)(R).call(R, Y, 1)[0].agentFn;
                M.removeEventListener(L, te);
              }
            } else
              M.removeEventListener(L, B);
          })) : this;
        }, z.prototype.attr = function(L, $) {
          var B;
          return $ == null ? this.elems[0].getAttribute(L) || "" : (0, f.default)(B = this).call(B, function(k) {
            k.setAttribute(L, $);
          });
        }, z.prototype.removeAttr = function(L) {
          var $;
          (0, f.default)($ = this).call($, function(B) {
            B.removeAttribute(L);
          });
        }, z.prototype.addClass = function(L) {
          var $;
          return L ? (0, f.default)($ = this).call($, function(B) {
            if (B.className) {
              var k = B.className.split(/\s/);
              k = (0, y.default)(k).call(k, function(M) {
                return !!(0, S.default)(M).call(M);
              }), (0, C.default)(k).call(k, L) < 0 && k.push(L), B.className = k.join(" ");
            } else
              B.className = L;
          }) : this;
        }, z.prototype.removeClass = function(L) {
          var $;
          return L ? (0, f.default)($ = this).call($, function(B) {
            if (!!B.className) {
              var k = B.className.split(/\s/);
              k = (0, y.default)(k).call(k, function(M) {
                return M = (0, S.default)(M).call(M), !(!M || M === L);
              }), B.className = k.join(" ");
            }
          }) : this;
        }, z.prototype.hasClass = function(L) {
          if (!L)
            return !1;
          var $ = this.elems[0];
          if (!$.className)
            return !1;
          var B = $.className.split(/\s/);
          return (0, E.default)(B).call(B, L);
        }, z.prototype.css = function(L, $) {
          var B, k;
          return $ == "" ? k = "" : k = L + ":" + $ + ";", (0, f.default)(B = this).call(B, function(M) {
            var Y, Q = (0, S.default)(Y = M.getAttribute("style") || "").call(Y);
            if (Q) {
              var Z = H(Q);
              Z = (0, c.default)(Z).call(Z, function(te) {
                return (0, C.default)(te).call(te, L) === 0 ? k : te;
              }), k != "" && (0, C.default)(Z).call(Z, k) < 0 && Z.push(k), k == "" && (Z = H(Z)), M.setAttribute("style", Z.join("; "));
            } else
              M.setAttribute("style", k);
          });
        }, z.prototype.getBoundingClientRect = function() {
          var L = this.elems[0];
          return L.getBoundingClientRect();
        }, z.prototype.show = function() {
          return this.css("display", "block");
        }, z.prototype.hide = function() {
          return this.css("display", "none");
        }, z.prototype.children = function() {
          var L = this.elems[0];
          return L ? j(L.children) : null;
        }, z.prototype.childNodes = function() {
          var L = this.elems[0];
          return L ? j(L.childNodes) : null;
        }, z.prototype.replaceChildAll = function(L) {
          for (var $ = this.getNode(), B = this.elems[0]; B.hasChildNodes(); )
            $.firstChild && B.removeChild($.firstChild);
          this.append(L);
        }, z.prototype.append = function(L) {
          var $;
          return (0, f.default)($ = this).call($, function(B) {
            (0, f.default)(L).call(L, function(k) {
              B.appendChild(k);
            });
          });
        }, z.prototype.remove = function() {
          var L;
          return (0, f.default)(L = this).call(L, function($) {
            if ($.remove)
              $.remove();
            else {
              var B = $.parentElement;
              B && B.removeChild($);
            }
          });
        }, z.prototype.isContain = function(L) {
          var $ = this.elems[0], B = L.elems[0];
          return $.contains(B);
        }, z.prototype.getNodeName = function() {
          var L = this.elems[0];
          return L.nodeName;
        }, z.prototype.getNode = function(L) {
          L === void 0 && (L = 0);
          var $;
          return $ = this.elems[L], $;
        }, z.prototype.find = function(L) {
          var $ = this.elems[0];
          return j($.querySelectorAll(L));
        }, z.prototype.text = function(L) {
          if (L) {
            var B;
            return (0, f.default)(B = this).call(B, function(k) {
              k.innerHTML = L;
            });
          } else {
            var $ = this.elems[0];
            return $.innerHTML.replace(/<[^>]+>/g, function() {
              return "";
            });
          }
        }, z.prototype.html = function(L) {
          var $ = this.elems[0];
          return L ? ($.innerHTML = L, this) : $.innerHTML;
        }, z.prototype.val = function() {
          var L, $ = this.elems[0];
          return (0, S.default)(L = $.value).call(L);
        }, z.prototype.focus = function() {
          var L;
          return (0, f.default)(L = this).call(L, function($) {
            $.focus();
          });
        }, z.prototype.prev = function() {
          var L = this.elems[0];
          return j(L.previousElementSibling);
        }, z.prototype.next = function() {
          var L = this.elems[0];
          return j(L.nextElementSibling);
        }, z.prototype.getNextSibling = function() {
          var L = this.elems[0];
          return j(L.nextSibling);
        }, z.prototype.parent = function() {
          var L = this.elems[0];
          return j(L.parentElement);
        }, z.prototype.parentUntil = function(L, $) {
          var B = $ || this.elems[0];
          if (B.nodeName === "BODY")
            return null;
          var k = B.parentElement;
          return k === null ? null : k.matches(L) ? j(k) : this.parentUntil(L, k);
        }, z.prototype.parentUntilEditor = function(L, $, B) {
          var k = B || this.elems[0];
          if (j(k).equal($.$textContainerElem) || j(k).equal($.$toolbarElem))
            return null;
          var M = k.parentElement;
          return M === null ? null : M.matches(L) ? j(M) : this.parentUntilEditor(L, $, M);
        }, z.prototype.equal = function(L) {
          return L instanceof z ? this.elems[0] === L.elems[0] : L instanceof HTMLElement ? this.elems[0] === L : !1;
        }, z.prototype.insertBefore = function(L) {
          var $, B = j(L), k = B.elems[0];
          return k ? (0, f.default)($ = this).call($, function(M) {
            var Y = k.parentNode;
            Y == null || Y.insertBefore(M, k);
          }) : this;
        }, z.prototype.insertAfter = function(L) {
          var $, B = j(L), k = B.elems[0], M = k && k.nextSibling;
          return k ? (0, f.default)($ = this).call($, function(Y) {
            var Q = k.parentNode;
            M ? Q.insertBefore(Y, M) : Q.appendChild(Y);
          }) : this;
        }, z.prototype.data = function(L, $) {
          if ($ != null)
            this.dataSource.set(L, $);
          else
            return this.dataSource.get(L);
        }, z.prototype.getNodeTop = function(L) {
          if (this.length < 1)
            return this;
          var $ = this.parent();
          return L.$textElem.equal(this) || L.$textElem.equal($) ? this : ($.prior = this, $.getNodeTop(L));
        }, z.prototype.getOffsetData = function() {
          var L = this.elems[0];
          return { top: L.offsetTop, left: L.offsetLeft, width: L.offsetWidth, height: L.offsetHeight, parent: L.offsetParent };
        }, z.prototype.scrollTop = function(L) {
          var $ = this.elems[0];
          $.scrollTo({ top: L });
        }, z;
      }();
      o.DomElement = W;
      function j() {
        for (var z = [], L = 0; L < arguments.length; L++)
          z[L] = arguments[L];
        return new ((0, x.default)(W).apply(W, w.__spreadArrays([void 0], z)))();
      }
      o.default = j;
    }, function(l, o, t) {
      l.exports = t(180);
    }, function(l, o, t) {
      var s = t(8), u = t(71).f, d = t(100), f = t(9), c = t(39), S = t(19), p = t(16), C = function(y) {
        var E = function(w, T, R) {
          if (this instanceof y) {
            switch (arguments.length) {
              case 0:
                return new y();
              case 1:
                return new y(w);
              case 2:
                return new y(w, T);
            }
            return new y(w, T, R);
          }
          return y.apply(this, arguments);
        };
        return E.prototype = y.prototype, E;
      };
      l.exports = function(A, y) {
        var E = A.target, x = A.global, w = A.stat, T = A.proto, R = x ? s : w ? s[E] : (s[E] || {}).prototype, I = x ? f : f[E] || (f[E] = {}), P = I.prototype, F, H, W, j, z, L, $, B, k;
        for (j in y)
          F = d(x ? j : E + (w ? "." : "#") + j, A.forced), H = !F && R && p(R, j), L = I[j], H && (A.noTargetGet ? (k = u(R, j), $ = k && k.value) : $ = R[j]), z = H && $ ? $ : y[j], !(H && _typeof(L) === _typeof(z)) && (A.bind && H ? B = c(z, s) : A.wrap && H ? B = C(z) : T && typeof z == "function" ? B = c(Function.call, z) : B = z, (A.sham || z && z.sham || L && L.sham) && S(B, "sham", !0), I[j] = B, T && (W = E + "Prototype", p(f, W) || S(f, W, {}), f[W][j] = z, A.real && P && !P[j] && S(P, j, z)));
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), d = s(t(1)), f = s(t(256)), c = s(t(45)), S = s(t(46)), p = s(t(89)), C = s(t(26));
      (0, d.default)(o, "__esModule", { value: !0 }), o.hexToRgb = o.getRandomCode = o.toArray = o.deepClone = o.isFunction = o.debounce = o.throttle = o.arrForEach = o.forEach = o.replaceSpecialSymbol = o.replaceHtmlSymbol = o.getRandom = o.UA = void 0;
      var A = t(2), y = function() {
        function L() {
          this._ua = navigator.userAgent;
          var $ = this._ua.match(/(Edge?)\/(\d+)/);
          this.isOldEdge = !!($ && $[1] == "Edge" && (0, f.default)($[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
        }
        return L.prototype.isIE = function() {
          return "ActiveXObject" in window;
        }, L.prototype.isWebkit = function() {
          return /webkit/i.test(this._ua);
        }, L;
      }();
      o.UA = new y();
      function E(L) {
        var $;
        return L === void 0 && (L = ""), L + (0, c.default)($ = Math.random().toString()).call($, 2);
      }
      o.getRandom = E;
      function x(L) {
        return L.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
      }
      o.replaceHtmlSymbol = x;
      function w(L) {
        return L.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
      }
      o.replaceSpecialSymbol = w;
      function T(L, $) {
        for (var B in L)
          if (Object.prototype.hasOwnProperty.call(L, B)) {
            var k = $(B, L[B]);
            if (k === !1)
              break;
          }
      }
      o.forEach = T;
      function R(L, $) {
        var B, k, M, Y = L.length || 0;
        for (B = 0; B < Y && (k = L[B], M = $.call(L, k, B), M !== !1); B++)
          ;
      }
      o.arrForEach = R;
      function I(L, $) {
        $ === void 0 && ($ = 200);
        var B = !1;
        return function() {
          for (var k = this, M = [], Y = 0; Y < arguments.length; Y++)
            M[Y] = arguments[Y];
          B || (B = !0, (0, S.default)(function() {
            B = !1, L.call.apply(L, A.__spreadArrays([k], M));
          }, $));
        };
      }
      o.throttle = I;
      function P(L, $) {
        $ === void 0 && ($ = 200);
        var B = 0;
        return function() {
          for (var k = this, M = [], Y = 0; Y < arguments.length; Y++)
            M[Y] = arguments[Y];
          B && window.clearTimeout(B), B = (0, S.default)(function() {
            B = 0, L.call.apply(L, A.__spreadArrays([k], M));
          }, $);
        };
      }
      o.debounce = P;
      function F(L) {
        return typeof L == "function";
      }
      o.isFunction = F;
      function H(L) {
        if ((0, u.default)(L) !== "object" || typeof L == "function" || L === null)
          return L;
        var $;
        (0, p.default)(L) && ($ = []), (0, p.default)(L) || ($ = {});
        for (var B in L)
          Object.prototype.hasOwnProperty.call(L, B) && ($[B] = H(L[B]));
        return $;
      }
      o.deepClone = H;
      function W(L) {
        return (0, c.default)(Array.prototype).call(L);
      }
      o.toArray = W;
      function j() {
        var L;
        return (0, c.default)(L = Math.random().toString(36)).call(L, -5);
      }
      o.getRandomCode = j;
      function z(L) {
        var $ = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(L);
        if ($ == null)
          return null;
        var B = (0, C.default)($).call($, function(Q) {
          return (0, f.default)(Q, 16);
        }), k = B[1], M = B[2], Y = B[3];
        return "rgb(" + k + ", " + M + ", " + Y + ")";
      }
      o.hexToRgb = z;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.EMPTY_P_REGEX = o.EMPTY_P_LAST_REGEX = o.EMPTY_P = o.urlRegex = o.EMPTY_FN = void 0;
      function d() {
      }
      o.EMPTY_FN = d, o.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/, o.EMPTY_P = '<p data-we-empty-p=""><br></p>', o.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, o.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
    }, function(l, o, t) {
      (function(s) {
        var u = function(f) {
          return f && f.Math == Math && f;
        };
        l.exports = u((typeof globalThis > "u" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || u((typeof window > "u" ? "undefined" : _typeof(window)) == "object" && window) || u((typeof self > "u" ? "undefined" : _typeof(self)) == "object" && self) || u(_typeof(s) == "object" && s) || Function("return this")();
      }).call(this, t(145));
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(8), u = t(74), d = t(16), f = t(64), c = t(76), S = t(105), p = u("wks"), C = s.Symbol, A = S ? C : C && C.withoutSetter || f;
      l.exports = function(y) {
        return d(p, y) || (c && d(C, y) ? p[y] = C[y] : p[y] = A("Symbol." + y)), p[y];
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(l, o, t) {
      var s = t(9), u = t(16), d = t(93), f = t(18).f;
      l.exports = function(c) {
        var S = s.Symbol || (s.Symbol = {});
        u(S, c) || f(S, c, { value: d.f(c) });
      };
    }, function(l, o) {
      l.exports = function(t) {
        return _typeof(t) === "object" ? t !== null : typeof t == "function";
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, function(l, o, t) {
      var s = t(9);
      l.exports = function(u) {
        return s[u + "Prototype"];
      };
    }, function(l, o) {
      var t = {}.hasOwnProperty;
      l.exports = function(s, u) {
        return t.call(s, u);
      };
    }, function(l, o, t) {
      l.exports = t(192);
    }, function(l, o, t) {
      var s = t(14), u = t(99), d = t(25), f = t(60), c = Object.defineProperty;
      o.f = s ? c : function(p, C, A) {
        if (d(p), C = f(C, !0), d(A), u)
          try {
            return c(p, C, A);
          } catch {
          }
        if ("get" in A || "set" in A)
          throw TypeError("Accessors not supported");
        return "value" in A && (p[C] = A.value), p;
      };
    }, function(l, o, t) {
      var s = t(14), u = t(18), d = t(48);
      l.exports = s ? function(f, c, S) {
        return u.f(f, c, d(1, S));
      } : function(f, c, S) {
        return f[c] = S, f;
      };
    }, function(l, o, t) {
      var s = function() {
        var R;
        return function() {
          return typeof R > "u" && (R = Boolean(window && document && document.all && !window.atob)), R;
        };
      }(), u = function() {
        var R = {};
        return function(P) {
          if (typeof R[P] > "u") {
            var F = document.querySelector(P);
            if (window.HTMLIFrameElement && F instanceof window.HTMLIFrameElement)
              try {
                F = F.contentDocument.head;
              } catch {
                F = null;
              }
            R[P] = F;
          }
          return R[P];
        };
      }(), d = [];
      function f(T) {
        for (var R = -1, I = 0; I < d.length; I++)
          if (d[I].identifier === T) {
            R = I;
            break;
          }
        return R;
      }
      function c(T, R) {
        for (var I = {}, P = [], F = 0; F < T.length; F++) {
          var H = T[F], W = R.base ? H[0] + R.base : H[0], j = I[W] || 0, z = "".concat(W, " ").concat(j);
          I[W] = j + 1;
          var L = f(z), $ = { css: H[1], media: H[2], sourceMap: H[3] };
          L !== -1 ? (d[L].references++, d[L].updater($)) : d.push({ identifier: z, updater: w($, R), references: 1 }), P.push(z);
        }
        return P;
      }
      function S(T) {
        var R = document.createElement("style"), I = T.attributes || {};
        if (typeof I.nonce > "u") {
          var P = t.nc;
          P && (I.nonce = P);
        }
        if (Object.keys(I).forEach(function(H) {
          R.setAttribute(H, I[H]);
        }), typeof T.insert == "function")
          T.insert(R);
        else {
          var F = u(T.insert || "head");
          if (!F)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          F.appendChild(R);
        }
        return R;
      }
      function p(T) {
        if (T.parentNode === null)
          return !1;
        T.parentNode.removeChild(T);
      }
      var C = function() {
        var R = [];
        return function(P, F) {
          return R[P] = F, R.filter(Boolean).join(`
`);
        };
      }();
      function A(T, R, I, P) {
        var F = I ? "" : P.media ? "@media ".concat(P.media, " {").concat(P.css, "}") : P.css;
        if (T.styleSheet)
          T.styleSheet.cssText = C(R, F);
        else {
          var H = document.createTextNode(F), W = T.childNodes;
          W[R] && T.removeChild(W[R]), W.length ? T.insertBefore(H, W[R]) : T.appendChild(H);
        }
      }
      function y(T, R, I) {
        var P = I.css, F = I.media, H = I.sourceMap;
        if (F ? T.setAttribute("media", F) : T.removeAttribute("media"), H && typeof btoa < "u" && (P += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(H)))), " */")), T.styleSheet)
          T.styleSheet.cssText = P;
        else {
          for (; T.firstChild; )
            T.removeChild(T.firstChild);
          T.appendChild(document.createTextNode(P));
        }
      }
      var E = null, x = 0;
      function w(T, R) {
        var I, P, F;
        if (R.singleton) {
          var H = x++;
          I = E || (E = S(R)), P = A.bind(null, I, H, !1), F = A.bind(null, I, H, !0);
        } else
          I = S(R), P = y.bind(null, I, R), F = function() {
            p(I);
          };
        return P(T), function(j) {
          if (j) {
            if (j.css === T.css && j.media === T.media && j.sourceMap === T.sourceMap)
              return;
            P(T = j);
          } else
            F();
        };
      }
      l.exports = function(T, R) {
        R = R || {}, !R.singleton && typeof R.singleton != "boolean" && (R.singleton = s()), T = T || [];
        var I = c(T, R);
        return function(F) {
          if (F = F || [], Object.prototype.toString.call(F) === "[object Array]") {
            for (var H = 0; H < I.length; H++) {
              var W = I[H], j = f(W);
              d[j].references--;
            }
            for (var z = c(F, R), L = 0; L < I.length; L++) {
              var $ = I[L], B = f($);
              d[B].references === 0 && (d[B].updater(), d.splice(B, 1));
            }
            I = z;
          }
        };
      };
    }, function(l, o, t) {
      l.exports = function(d) {
        var f = [];
        return f.toString = function() {
          return this.map(function(S) {
            var p = s(S, d);
            return S[2] ? "@media ".concat(S[2], " {").concat(p, "}") : p;
          }).join("");
        }, f.i = function(c, S, p) {
          typeof c == "string" && (c = [[null, c, ""]]);
          var C = {};
          if (p)
            for (var A = 0; A < this.length; A++) {
              var y = this[A][0];
              y != null && (C[y] = !0);
            }
          for (var E = 0; E < c.length; E++) {
            var x = [].concat(c[E]);
            p && C[x[0]] || (S && (x[2] ? x[2] = "".concat(S, " and ").concat(x[2]) : x[2] = S), f.push(x));
          }
        }, f;
      };
      function s(d, f) {
        var c = d[1] || "", S = d[3];
        if (!S)
          return c;
        if (f && typeof btoa == "function") {
          var p = u(S), C = S.sources.map(function(A) {
            return "/*# sourceURL=".concat(S.sourceRoot || "").concat(A, " */");
          });
          return [c].concat(C).concat([p]).join(`
`);
        }
        return [c].join(`
`);
      }
      function u(d) {
        var f = btoa(unescape(encodeURIComponent(JSON.stringify(d)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(f);
        return "/*# ".concat(c, " */");
      }
    }, function(l, o, t) {
      var s = t(14), u = t(11), d = t(16), f = Object.defineProperty, c = {}, S = function(C) {
        throw C;
      };
      l.exports = function(p, C) {
        if (d(c, p))
          return c[p];
        C || (C = {});
        var A = [][p], y = d(C, "ACCESSORS") ? C.ACCESSORS : !1, E = d(C, 0) ? C[0] : S, x = d(C, 1) ? C[1] : void 0;
        return c[p] = !!A && !u(function() {
          if (y && !s)
            return !0;
          var w = { length: -1 };
          y ? f(w, 1, { enumerable: !0, get: S }) : w[1] = 1, A.call(w, E, x);
        });
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(95)), c = function(S) {
        d.__extends(p, S);
        function p(C, A) {
          return S.call(this, C, A) || this;
        }
        return p;
      }(f.default);
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3)), p = c.__importDefault(t(95)), C = c.__importDefault(t(133)), A = function(y) {
        c.__extends(E, y);
        function E(x, w, T) {
          var R = y.call(this, x, w) || this;
          T.title = w.i18next.t("menus.dropListMenu." + T.title);
          var I = w.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
          if (I !== "" && T.type === "list") {
            var P;
            (0, d.default)(P = T.list).call(P, function(H) {
              var W = H.$elem, j = S.default(W.children());
              if (j.length > 0) {
                var z = j == null ? void 0 : j.getNodeName();
                z && z === "I" && W.addClass(I);
              }
            });
          }
          var F = new C.default(R, T);
          return R.dropList = F, x.on("click", function() {
            var H;
            w.selection.getRange() != null && (x.css("z-index", w.zIndex.get("menu")), (0, d.default)(H = w.txt.eventHooks.dropListMenuHoverEvents).call(H, function(W) {
              return W();
            }), F.show());
          }).on("mouseleave", function() {
            x.css("z-index", "auto"), F.hideTimeoutId = (0, f.default)(function() {
              F.hide();
            });
          }), R;
        }
        return E;
      }(p.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u) {
        if (!s(u))
          throw TypeError(String(u) + " is not an object");
        return u;
      };
    }, function(l, o, t) {
      l.exports = t(188);
    }, function(l, o, t) {
      l.exports = t(201);
    }, function(l, o, t) {
      var s = t(72), u = t(49);
      l.exports = function(d) {
        return s(u(d));
      };
    }, function(l, o, t) {
      var s = t(49);
      l.exports = function(u) {
        return Object(s(u));
      };
    }, function(l, o, t) {
      var s = t(39), u = t(72), d = t(29), f = t(34), c = t(88), S = [].push, p = function(A) {
        var y = A == 1, E = A == 2, x = A == 3, w = A == 4, T = A == 6, R = A == 5 || T;
        return function(I, P, F, H) {
          for (var W = d(I), j = u(W), z = s(P, F, 3), L = f(j.length), $ = 0, B = H || c, k = y ? B(I, L) : E ? B(I, 0) : void 0, M, Y; L > $; $++)
            if ((R || $ in j) && (M = j[$], Y = z(M, $, W), A)) {
              if (y)
                k[$] = Y;
              else if (Y)
                switch (A) {
                  case 3:
                    return !0;
                  case 5:
                    return M;
                  case 6:
                    return $;
                  case 2:
                    S.call(k, M);
                }
              else if (w)
                return !1;
            }
          return T ? -1 : x || w ? w : k;
        };
      };
      l.exports = {
        forEach: p(0),
        map: p(1),
        filter: p(2),
        some: p(3),
        every: p(4),
        find: p(5),
        findIndex: p(6)
      };
    }, function(l, o, t) {
      l.exports = t(283);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(31)), c = s(t(131));
      (0, u.default)(o, "__esModule", { value: !0 });
      var S = t(2), p = S.__importDefault(t(3)), C = t(7), A = function() {
        function y(E, x) {
          this.menu = E, this.conf = x, this.$container = p.default('<div class="w-e-panel-container"></div>');
          var w = E.editor;
          w.txt.eventHooks.clickEvents.push(y.hideCurAllPanels), w.txt.eventHooks.toolbarClickEvents.push(y.hideCurAllPanels), w.txt.eventHooks.dropListMenuHoverEvents.push(y.hideCurAllPanels);
        }
        return y.prototype.create = function() {
          var E = this, x = this.menu;
          if (!y.createdMenus.has(x)) {
            var w = this.conf, T = this.$container, R = w.width || 300, I = x.editor.$toolbarElem.getBoundingClientRect(), P = x.$elem.getBoundingClientRect(), F = I.height + I.top - P.top, H = (I.width - R) / 2 + I.left - P.left, W = 300;
            Math.abs(H) > W && (P.left < document.documentElement.clientWidth / 2 ? H = -P.width / 2 : H = -R + P.width / 2), T.css("width", R + "px").css("margin-top", F + "px").css("margin-left", H + "px").css("z-index", x.editor.zIndex.get("panel"));
            var j = p.default('<i class="w-e-icon-close w-e-panel-close"></i>');
            T.append(j), j.on("click", function() {
              E.remove();
            });
            var z = p.default('<ul class="w-e-panel-tab-title"></ul>'), L = p.default('<div class="w-e-panel-tab-content"></div>');
            T.append(z).append(L);
            var $ = w.height;
            $ && L.css("height", $ + "px").css("overflow-y", "auto");
            var B = w.tabs || [], k = [], M = [];
            (0, d.default)(B).call(B, function(Q, Z) {
              if (!!Q) {
                var te = Q.title || "", q = Q.tpl || "", ne = p.default('<li class="w-e-item">' + te + "</li>");
                z.append(ne);
                var fe = p.default(q);
                L.append(fe), k.push(ne), M.push(fe), Z === 0 ? (ne.data("active", !0), ne.addClass("w-e-active")) : fe.hide(), ne.on("click", function() {
                  ne.data("active") || ((0, d.default)(k).call(k, function(me) {
                    me.data("active", !1), me.removeClass("w-e-active");
                  }), (0, d.default)(M).call(M, function(me) {
                    me.hide();
                  }), ne.data("active", !0), ne.addClass("w-e-active"), fe.show());
                });
              }
            }), T.on("click", function(Q) {
              Q.stopPropagation();
            }), x.$elem.append(T), (0, d.default)(B).call(B, function(Q, Z) {
              if (!!Q) {
                var te = Q.events || [];
                (0, d.default)(te).call(te, function(q) {
                  var ne, fe = q.selector, me = q.type, pe = q.fn || C.EMPTY_FN, ve = M[Z], se = (ne = q.bindEnter) !== null && ne !== void 0 ? ne : !1, ae = function(ce) {
                    return S.__awaiter(E, void 0, void 0, function() {
                      var Fe;
                      return S.__generator(this, function(De) {
                        switch (De.label) {
                          case 0:
                            return ce.stopPropagation(), [
                              4,
                              pe(ce)
                            ];
                          case 1:
                            return Fe = De.sent(), Fe && this.remove(), [2];
                        }
                      });
                    });
                  };
                  (0, f.default)(ve).call(ve, fe).on(me, ae), se && me === "click" && ve.on("keyup", function(ue) {
                    ue.keyCode == 13 && ae(ue);
                  });
                });
              }
            });
            var Y = (0, f.default)(T).call(T, "input[type=text],textarea");
            Y.length && Y.get(0).focus(), y.hideCurAllPanels(), x.setPanel(this), y.createdMenus.add(x);
          }
        }, y.prototype.remove = function() {
          var E = this.menu, x = this.$container;
          x && x.remove(), y.createdMenus.delete(E);
        }, y.hideCurAllPanels = function() {
          var E;
          y.createdMenus.size !== 0 && (0, d.default)(E = y.createdMenus).call(E, function(x) {
            var w = x.panel;
            w && w.remove();
          });
        }, y.createdMenus = new c.default(), y;
      }();
      o.default = A;
    }, function(l, o) {
      var t = {}.toString;
      l.exports = function(s) {
        return t.call(s).slice(8, -1);
      };
    }, function(l, o, t) {
      var s = t(62), u = Math.min;
      l.exports = function(d) {
        return d > 0 ? u(s(d), 9007199254740991) : 0;
      };
    }, function(l, o, t) {
      var s = t(9), u = t(8), d = function(c) {
        return typeof c == "function" ? c : void 0;
      };
      l.exports = function(f, c) {
        return arguments.length < 2 ? d(s[f]) || d(u[f]) : s[f] && s[f][c] || u[f] && u[f][c];
      };
    }, function(l, o, t) {
      var s = t(81), u = t(18).f, d = t(19), f = t(16), c = t(170), S = t(10), p = S("toStringTag");
      l.exports = function(C, A, y, E) {
        if (C) {
          var x = y ? C : C.prototype;
          f(x, p) || u(x, p, { configurable: !0, value: A }), E && !s && d(x, "toString", c);
        }
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(95)), c = function(S) {
        d.__extends(p, S);
        function p(C, A) {
          return S.call(this, C, A) || this;
        }
        return p.prototype.setPanel = function(C) {
          this.panel = C;
        }, p;
      }(f.default);
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3)), p = function() {
        function C(A, y, E) {
          this.editor = A, this.$targetElem = y, this.conf = E, this._show = !1, this._isInsertTextContainer = !1;
          var x = S.default("<div></div>");
          x.addClass("w-e-tooltip"), this.$container = x;
        }
        return C.prototype.getPositionData = function() {
          var A = this.$container, y = 0, E = 0, x = 20, w = document.documentElement.scrollTop, T = this.$targetElem.getBoundingClientRect(), R = this.editor.$textElem.getBoundingClientRect(), I = this.$targetElem.getOffsetData(), P = S.default(I.parent), F = this.editor.$textElem.elems[0].scrollTop;
          if (this._isInsertTextContainer = P.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
            var H = P.getBoundingClientRect().height, W = I.top, j = I.left, z = I.height, L = W - F;
            L > x + 5 ? (y = L - x - 15, A.addClass("w-e-tooltip-up")) : L + z + x < H ? (y = L + z + 10, A.addClass("w-e-tooltip-down")) : (y = (L > 0 ? L : 0) + x + 10, A.addClass("w-e-tooltip-down")), j < 0 ? E = 0 : E = j;
          } else
            T.top < x || T.top - R.top < x ? (y = T.bottom + w + 5, A.addClass("w-e-tooltip-down")) : (y = T.top + w - x - 15, A.addClass("w-e-tooltip-up")), T.left < 0 ? E = 0 : E = T.left;
          return { top: y, left: E };
        }, C.prototype.appendMenus = function() {
          var A = this, y = this.conf, E = this.editor, x = this.$targetElem, w = this.$container;
          (0, d.default)(y).call(y, function(T, R) {
            var I = T.$elem, P = S.default("<div></div>");
            P.addClass("w-e-tooltip-item-wrapper "), P.append(I), w.append(P), I.on("click", function(F) {
              F.preventDefault();
              var H = T.onClick(E, x);
              H && A.remove();
            });
          });
        }, C.prototype.create = function() {
          var A, y, E = this.editor, x = this.$container;
          this.appendMenus();
          var w = this.getPositionData(), T = w.top, R = w.left;
          x.css("top", T + "px"), x.css("left", R + "px"), x.css("z-index", E.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(x) : S.default("body").append(x), this._show = !0, E.beforeDestroy((0, f.default)(A = this.remove).call(A, this)), E.txt.eventHooks.onBlurEvents.push((0, f.default)(y = this.remove).call(y, this));
        }, C.prototype.remove = function() {
          this.$container.remove(), this._show = !1;
        }, (0, u.default)(C.prototype, "isShow", {
          get: function() {
            return this._show;
          },
          enumerable: !1,
          configurable: !0
        }), C;
      }();
      o.default = p;
    }, function(l, o, t) {
      var s = t(40);
      l.exports = function(u, d, f) {
        if (s(u), d === void 0)
          return u;
        switch (f) {
          case 0:
            return function() {
              return u.call(d);
            };
          case 1:
            return function(c) {
              return u.call(d, c);
            };
          case 2:
            return function(c, S) {
              return u.call(d, c, S);
            };
          case 3:
            return function(c, S, p) {
              return u.call(d, c, S, p);
            };
        }
        return function() {
          return u.apply(d, arguments);
        };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    }, function(l, o, t) {
      var s = t(165), u = t(8), d = t(13), f = t(19), c = t(16), S = t(63), p = t(51), C = u.WeakMap, A, y, E, x = function(W) {
        return E(W) ? y(W) : A(W, {});
      }, w = function(W) {
        return function(j) {
          var z;
          if (!d(j) || (z = y(j)).type !== W)
            throw TypeError("Incompatible receiver, " + W + " required");
          return z;
        };
      };
      if (s) {
        var T = new C(), R = T.get, I = T.has, P = T.set;
        A = function(W, j) {
          return P.call(T, W, j), j;
        }, y = function(W) {
          return R.call(T, W) || {};
        }, E = function(W) {
          return I.call(T, W);
        };
      } else {
        var F = S("state");
        p[F] = !0, A = function(W, j) {
          return f(W, F, j), j;
        }, y = function(W) {
          return c(W, F) ? W[F] : {};
        }, E = function(W) {
          return c(W, F);
        };
      }
      l.exports = { set: A, get: y, has: E, enforce: x, getterFor: w };
    }, function(l, o) {
      l.exports = !0;
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      l.exports = t(213);
    }, function(l, o, t) {
      l.exports = t(261);
    }, function(l, o, t) {
      l.exports = t(265);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createElementFragment = o.createDocumentFragment = o.createElement = o.insertBefore = o.getEndPoint = o.getStartPoint = o.updateRange = o.filterSelectionNodes = void 0;
      var f = t(2), c = t(137), S = f.__importDefault(t(3));
      function p(R) {
        var I = [];
        return (0, d.default)(R).call(R, function(P) {
          var F = P.getNodeName();
          if (F !== c.ListType.OrderedList && F !== c.ListType.UnorderedList)
            I.push(P);
          else if (P.prior)
            I.push(P.prior);
          else {
            var H = P.children();
            H == null || (0, d.default)(H).call(H, function(W) {
              I.push(S.default(W));
            });
          }
        }), I;
      }
      o.filterSelectionNodes = p;
      function C(R, I, P) {
        var F = R.selection, H = document.createRange();
        I.length > 1 ? (H.setStart(I.elems[0], 0), H.setEnd(I.elems[I.length - 1], I.elems[I.length - 1].childNodes.length)) : H.selectNodeContents(I.elems[0]), P && H.collapse(!1), F.saveRange(H), F.restoreSelection();
      }
      o.updateRange = C;
      function A(R) {
        var I;
        return R.prior ? R.prior : S.default((I = R.children()) === null || I === void 0 ? void 0 : I.elems[0]);
      }
      o.getStartPoint = A;
      function y(R) {
        var I;
        return R.prior ? R.prior : S.default((I = R.children()) === null || I === void 0 ? void 0 : I.last().elems[0]);
      }
      o.getEndPoint = y;
      function E(R, I, P) {
        P === void 0 && (P = null), R.parent().elems[0].insertBefore(I, P);
      }
      o.insertBefore = E;
      function x(R) {
        return document.createElement(R);
      }
      o.createElement = x;
      function w() {
        return document.createDocumentFragment();
      }
      o.createDocumentFragment = w;
      function T(R, I, P) {
        return P === void 0 && (P = "li"), (0, d.default)(R).call(R, function(F) {
          var H = x(P);
          H.innerHTML = F.html(), I.appendChild(H), F.remove();
        }), I;
      }
      o.createElementFragment = T;
    }, function(l, o) {
      l.exports = function(t, s) {
        return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: s };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on " + t);
        return t;
      };
    }, function(l, o, t) {
      var s = t(164).charAt, u = t(41), d = t(75), f = "String Iterator", c = u.set, S = u.getterFor(f);
      d(String, "String", function(p) {
        c(this, { type: f, string: String(p), index: 0 });
      }, function() {
        var C = S(this), A = C.string, y = C.index, E;
        return y >= A.length ? { value: void 0, done: !0 } : (E = s(A, y), C.index += E.length, { value: E, done: !1 });
      });
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(106), u = t(80);
      l.exports = Object.keys || function(f) {
        return s(f, u);
      };
    }, function(l, o, t) {
      var s = t(19);
      l.exports = function(u, d, f, c) {
        c && c.enumerable ? u[d] = f : s(u, d, f);
      };
    }, function(l, o, t) {
      t(173);
      var s = t(174), u = t(8), d = t(65), f = t(19), c = t(43), S = t(10), p = S("toStringTag");
      for (var C in s) {
        var A = u[C], y = A && A.prototype;
        y && d(y) !== p && f(y, p, C), c[C] = c.Array;
      }
    }, function(l, o, t) {
      var s = t(33);
      l.exports = Array.isArray || function(d) {
        return s(d) == "Array";
      };
    }, function(l, o, t) {
      var s = t(11), u = t(10), d = t(86), f = u("species");
      l.exports = function(c) {
        return d >= 51 || !s(function() {
          var S = [], p = S.constructor = {};
          return p[f] = function() {
            return { foo: 1 };
          }, S[c](Boolean).foo !== 1;
        });
      };
    }, function(l, o, t) {
      l.exports = t(222);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.ListHandle = void 0;
      var d = t(2), f = d.__importDefault(t(373)), c = function() {
        function S(p) {
          this.options = p, this.selectionRangeElem = new f.default();
        }
        return S;
      }();
      o.ListHandle = c;
    }, function(l, o, t) {
      var s = {}.propertyIsEnumerable, u = Object.getOwnPropertyDescriptor, d = u && !s.call({ 1: 2 }, 1);
      o.f = d ? function(c) {
        var S = u(this, c);
        return !!S && S.enumerable;
      } : s;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u, d) {
        if (!s(u))
          return u;
        var f, c;
        if (d && typeof (f = u.toString) == "function" && !s(c = f.call(u)) || typeof (f = u.valueOf) == "function" && !s(c = f.call(u)) || !d && typeof (f = u.toString) == "function" && !s(c = f.call(u)))
          return c;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(l, o) {
    }, function(l, o) {
      var t = Math.ceil, s = Math.floor;
      l.exports = function(u) {
        return isNaN(u = +u) ? 0 : (u > 0 ? s : t)(u);
      };
    }, function(l, o, t) {
      var s = t(74), u = t(64), d = s("keys");
      l.exports = function(f) {
        return d[f] || (d[f] = u(f));
      };
    }, function(l, o) {
      var t = 0, s = Math.random();
      l.exports = function(u) {
        return "Symbol(" + String(u === void 0 ? "" : u) + ")_" + (++t + s).toString(36);
      };
    }, function(l, o, t) {
      var s = t(81), u = t(33), d = t(10), f = d("toStringTag"), c = u(function() {
        return arguments;
      }()) == "Arguments", S = function(C, A) {
        try {
          return C[A];
        } catch {
        }
      };
      l.exports = s ? u : function(p) {
        var C, A, y;
        return p === void 0 ? "Undefined" : p === null ? "Null" : typeof (A = S(C = Object(p), f)) == "string" ? A : c ? u(C) : (y = u(C)) == "Object" && typeof C.callee == "function" ? "Arguments" : y;
      };
    }, function(l, o, t) {
      var s = t(25), u = t(111), d = t(34), f = t(39), c = t(112), S = t(113), p = function(y, E) {
        this.stopped = y, this.result = E;
      }, C = l.exports = function(A, y, E, x, w) {
        var T = f(y, E, x ? 2 : 1), R, I, P, F, H, W, j;
        if (w)
          R = A;
        else {
          if (I = c(A), typeof I != "function")
            throw TypeError("Target is not iterable");
          if (u(I)) {
            for (P = 0, F = d(A.length); F > P; P++)
              if (H = x ? T(s(j = A[P])[0], j[1]) : T(A[P]), H && H instanceof p)
                return H;
            return new p(!1);
          }
          R = I.call(A);
        }
        for (W = R.next; !(j = W.call(R)).done; )
          if (H = S(R, T, j.value, x), _typeof(H) == "object" && H && H instanceof p)
            return H;
        return new p(!1);
      };
      C.stop = function(A) {
        return new p(!0, A);
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = function(u, d) {
        var f = [][u];
        return !!f && s(function() {
          f.call(null, d || function() {
            throw 1;
          }, 1);
        });
      };
    }, function(l, o) {
      l.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
    }, function(l, o, t) {
      var s = t(60), u = t(18), d = t(48);
      l.exports = function(f, c, S) {
        var p = s(c);
        p in f ? u.f(f, p, d(0, S)) : f[p] = S;
      };
    }, function(l, o, t) {
      l.exports = t(209);
    }, function(l, o, t) {
      var s = t(14), u = t(59), d = t(48), f = t(28), c = t(60), S = t(16), p = t(99), C = Object.getOwnPropertyDescriptor;
      o.f = s ? C : function(y, E) {
        if (y = f(y), E = c(E, !0), p)
          try {
            return C(y, E);
          } catch {
          }
        if (S(y, E))
          return d(!u.f.call(y, E), y[E]);
      };
    }, function(l, o, t) {
      var s = t(11), u = t(33), d = "".split;
      l.exports = s(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(f) {
        return u(f) == "String" ? d.call(f, "") : Object(f);
      } : Object;
    }, function(l, o, t) {
      var s = t(8), u = t(13), d = s.document, f = u(d) && u(d.createElement);
      l.exports = function(c) {
        return f ? d.createElement(c) : {};
      };
    }, function(l, o, t) {
      var s = t(42), u = t(102);
      (l.exports = function(d, f) {
        return u[d] || (u[d] = f !== void 0 ? f : {});
      })("versions", []).push({ version: "3.6.4", mode: s ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    }, function(l, o, t) {
      var s = t(5), u = t(167), d = t(104), f = t(171), c = t(36), S = t(19), p = t(53), C = t(10), A = t(42), y = t(43), E = t(103), x = E.IteratorPrototype, w = E.BUGGY_SAFARI_ITERATORS, T = C("iterator"), R = "keys", I = "values", P = "entries", F = function() {
        return this;
      };
      l.exports = function(H, W, j, z, L, $, B) {
        u(j, W, z);
        var k = function(ve) {
          if (ve === L && te)
            return te;
          if (!w && ve in Q)
            return Q[ve];
          switch (ve) {
            case R:
              return function() {
                return new j(this, ve);
              };
            case I:
              return function() {
                return new j(this, ve);
              };
            case P:
              return function() {
                return new j(this, ve);
              };
          }
          return function() {
            return new j(this);
          };
        }, M = W + " Iterator", Y = !1, Q = H.prototype, Z = Q[T] || Q["@@iterator"] || L && Q[L], te = !w && Z || k(L), q = W == "Array" && Q.entries || Z, ne, fe, me;
        if (q && (ne = d(q.call(new H())), x !== Object.prototype && ne.next && (!A && d(ne) !== x && (f ? f(ne, x) : typeof ne[T] != "function" && S(ne, T, F)), c(ne, M, !0, !0), A && (y[M] = F))), L == I && Z && Z.name !== I && (Y = !0, te = function() {
          return Z.call(this);
        }), (!A || B) && Q[T] !== te && S(Q, T, te), y[W] = te, L)
          if (fe = { values: k(I), keys: $ ? te : k(R), entries: k(P) }, B)
            for (me in fe)
              (w || Y || !(me in Q)) && p(Q, me, fe[me]);
          else
            s({ target: W, proto: !0, forced: w || Y }, fe);
        return fe;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !!Object.getOwnPropertySymbols && !s(function() {
        return !String(Symbol());
      });
    }, function(l, o, t) {
      var s = t(25), u = t(169), d = t(80), f = t(51), c = t(107), S = t(73), p = t(63), C = ">", A = "<", y = "prototype", E = "script", x = p("IE_PROTO"), w = function() {
      }, T = function(W) {
        return A + E + C + W + A + "/" + E + C;
      }, R = function(W) {
        W.write(T("")), W.close();
        var j = W.parentWindow.Object;
        return W = null, j;
      }, I = function() {
        var W = S("iframe"), j = "java" + E + ":", z;
        return W.style.display = "none", c.appendChild(W), W.src = String(j), z = W.contentWindow.document, z.open(), z.write(T("document.F=Object")), z.close(), z.F;
      }, P, F = function() {
        try {
          P = document.domain && new ActiveXObject("htmlfile");
        } catch {
        }
        F = P ? R(P) : I();
        for (var W = d.length; W--; )
          delete F[y][d[W]];
        return F();
      };
      f[x] = !0, l.exports = Object.create || function(W, j) {
        var z;
        return W !== null ? (w[y] = s(W), z = new w(), w[y] = null, z[x] = W) : z = F(), j === void 0 ? z : u(z, j);
      };
    }, function(l, o, t) {
      var s = t(28), u = t(34), d = t(79), f = function(S) {
        return function(p, C, A) {
          var y = s(p), E = u(y.length), x = d(A, E), w;
          if (S && C != C) {
            for (; E > x; )
              if (w = y[x++], w != w)
                return !0;
          } else
            for (; E > x; x++)
              if ((S || x in y) && y[x] === C)
                return S || x || 0;
          return !S && -1;
        };
      };
      l.exports = {
        includes: f(!0),
        indexOf: f(!1)
      };
    }, function(l, o, t) {
      var s = t(62), u = Math.max, d = Math.min;
      l.exports = function(f, c) {
        var S = s(f);
        return S < 0 ? u(S + c, 0) : d(S, c);
      };
    }, function(l, o) {
      l.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, function(l, o, t) {
      var s = t(10), u = s("toStringTag"), d = {};
      d[u] = "z", l.exports = String(d) === "[object z]";
    }, function(l, o) {
      l.exports = function() {
      };
    }, function(l, o) {
      l.exports = function(t, s, u) {
        if (!(t instanceof s))
          throw TypeError("Incorrect " + (u ? u + " " : "") + "invocation");
        return t;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("navigator", "userAgent") || "";
    }, function(l, o, t) {
      var s = t(40), u = function(f) {
        var c, S;
        this.promise = new f(function(p, C) {
          if (c !== void 0 || S !== void 0)
            throw TypeError("Bad Promise constructor");
          c = p, S = C;
        }), this.resolve = s(c), this.reject = s(S);
      };
      l.exports.f = function(d) {
        return new u(d);
      };
    }, function(l, o, t) {
      var s = t(8), u = t(84), d = s.process, f = d && d.versions, c = f && f.v8, S, p;
      c ? (S = c.split("."), p = S[0] + S[1]) : u && (S = u.match(/Edge\/(\d+)/), (!S || S[1] >= 74) && (S = u.match(/Chrome\/(\d+)/), S && (p = S[1]))), l.exports = p && +p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(6), p = f.__importDefault(t(267)), C = f.__importDefault(t(280)), A = f.__importDefault(t(281)), y = f.__importDefault(t(282)), E = f.__importDefault(t(301)), x = f.__importStar(t(416)), w = f.__importDefault(t(417)), T = f.__importDefault(t(418)), R = f.__importDefault(t(419)), I = f.__importStar(t(420)), P = f.__importDefault(t(423)), F = f.__importDefault(t(424)), H = f.__importDefault(t(425)), W = f.__importDefault(t(427)), j = f.__importDefault(t(437)), z = f.__importDefault(t(440)), L = f.__importStar(t(441)), $ = f.__importDefault(t(23)), B = f.__importDefault(t(133)), k = f.__importDefault(t(24)), M = f.__importDefault(t(32)), Y = f.__importDefault(t(37)), Q = f.__importDefault(t(38)), Z = 1, te = function() {
        function q(ne, fe) {
          this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + Z++, this.toolbarSelector = ne, this.textSelector = fe, x.selectorValidator(this), this.config = S.deepClone(p.default), this.$toolbarElem = c.default("<div></div>"), this.$textContainerElem = c.default("<div></div>"), this.$textElem = c.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new C.default(this), this.cmd = new A.default(this), this.txt = new y.default(this), this.menus = new E.default(this), this.zIndex = new F.default(), this.change = new H.default(this), this.history = new W.default(this), this.onSelectionChange = new z.default(this);
          var me = j.default(this), pe = me.disable, ve = me.enable;
          this.disable = pe, this.enable = ve, this.isEnable = !0;
        }
        return q.prototype.initSelection = function(ne) {
          w.default(this, ne);
        }, q.prototype.create = function() {
          this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), R.default(this), x.default(this), this.txt.init(), this.menus.init(), I.default(this), this.initSelection(!0), T.default(this), this.change.observe(), this.history.observe(), L.default(this);
        }, q.prototype.beforeDestroy = function(ne) {
          return this.beforeDestroyHooks.push(ne), this;
        }, q.prototype.destroy = function() {
          var ne, fe = this;
          (0, d.default)(ne = this.beforeDestroyHooks).call(ne, function(me) {
            return me.call(fe);
          }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
        }, q.prototype.fullScreen = function() {
          I.setFullScreen(this);
        }, q.prototype.unFullScreen = function() {
          I.setUnFullScreen(this);
        }, q.prototype.scrollToHead = function(ne) {
          P.default(this, ne);
        }, q.registerMenu = function(ne, fe) {
          !fe || typeof fe != "function" || (q.globalCustomMenuConstructorList[ne] = fe);
        }, q.prototype.registerPlugin = function(ne, fe) {
          L.registerPlugin(ne, fe, this.pluginsFunctionList);
        }, q.registerPlugin = function(ne, fe) {
          L.registerPlugin(ne, fe, q.globalPluginsFunctionList);
        }, q.$ = c.default, q.BtnMenu = $.default, q.DropList = B.default, q.DropListMenu = k.default, q.Panel = M.default, q.PanelMenu = Y.default, q.Tooltip = Q.default, q.globalCustomMenuConstructorList = {}, q.globalPluginsFunctionList = {}, q;
      }();
      o.default = te;
    }, function(l, o, t) {
      var s = t(13), u = t(55), d = t(10), f = d("species");
      l.exports = function(c, S) {
        var p;
        return u(c) && (p = c.constructor, typeof p == "function" && (p === Array || u(p.prototype)) ? p = void 0 : s(p) && (p = p[f], p === null && (p = void 0))), new (p === void 0 ? Array : p)(S === 0 ? 0 : S);
      };
    }, function(l, o, t) {
      l.exports = t(185);
    }, function(l, o, t) {
      var s = t(49), u = t(68), d = "[" + u + "]", f = RegExp("^" + d + d + "*"), c = RegExp(d + d + "*$"), S = function(C) {
        return function(A) {
          var y = String(s(A));
          return C & 1 && (y = y.replace(f, "")), C & 2 && (y = y.replace(c, "")), y;
        };
      };
      l.exports = {
        start: S(1),
        end: S(2),
        trim: S(3)
      };
    }, function(l, o, t) {
      l.exports = t(205);
    }, function(l, o, t) {
      var s = t(227), u = t(230);
      function d(f) {
        return typeof u == "function" && typeof s == "symbol" ? l.exports = d = function(S) {
          return typeof S;
        } : l.exports = d = function(S) {
          return S && typeof u == "function" && S.constructor === u && S !== u.prototype ? "symbol" : typeof S;
        }, d(f);
      }
      l.exports = d;
    }, function(l, o, t) {
      var s = t(10);
      o.f = s;
    }, function(l, o, t) {
      l.exports = t(306);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(32)), S = function() {
        function p(C, A) {
          var y = this;
          this.$elem = C, this.editor = A, this._active = !1, C.on("click", function(E) {
            var x;
            c.default.hideCurAllPanels(), (0, d.default)(x = A.txt.eventHooks.menuClickEvents).call(x, function(w) {
              return w();
            }), E.stopPropagation(), A.selection.getRange() != null && y.clickHandler(E);
          });
        }
        return p.prototype.clickHandler = function(C) {
        }, p.prototype.active = function() {
          this._active = !0, this.$elem.addClass("w-e-active");
        }, p.prototype.unActive = function() {
          this._active = !1, this.$elem.removeClass("w-e-active");
        }, (0, u.default)(p.prototype, "isActive", {
          get: function() {
            return this._active;
          },
          enumerable: !1,
          configurable: !0
        }), p;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(57)), f = s(t(4)), c = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var S = t(2), p = t(6), C = S.__importDefault(t(135)), A = S.__importDefault(t(136)), y = function() {
        function E(x) {
          this.editor = x;
        }
        return E.prototype.insertImg = function(x, w, T) {
          var R = this.editor, I = R.config, P = "validate.", F = function(L, $) {
            return $ === void 0 && ($ = P), R.i18next.t($ + L);
          }, H = w ? 'alt="' + w + '" ' : "", W = T ? 'data-href="' + encodeURIComponent(T) + '" ' : "";
          R.cmd.do("insertHTML", '<img src="' + x + '" ' + H + W + 'style="max-width:100%;" contenteditable="false"/>'), I.linkImgCallback(x, w, T);
          var j = document.createElement("img");
          j.onload = function() {
            j = null;
          }, j.onerror = function() {
            I.customAlert(F("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + F("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + F("\u56FE\u7247\u94FE\u63A5") + ' "' + x + '"\uFF0C' + F("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), j = null;
          }, j.onabort = function() {
            return j = null;
          }, j.src = x;
        }, E.prototype.uploadImg = function(x) {
          var w = this;
          if (!!x.length) {
            var T = this.editor, R = T.config, I = "validate.", P = function(ae) {
              return T.i18next.t(I + ae);
            }, F = R.uploadImgServer, H = R.uploadImgShowBase64, W = R.uploadImgMaxSize, j = W / 1024 / 1024, z = R.uploadImgMaxLength, L = R.uploadFileName, $ = R.uploadImgParams, B = R.uploadImgParamsWithUrl, k = R.uploadImgHeaders, M = R.uploadImgHooks, Y = R.uploadImgTimeout, Q = R.withCredentials, Z = R.customUploadImg;
            if (!(!Z && !F && !H)) {
              var te = [], q = [];
              if (p.arrForEach(x, function(se) {
                if (!!se) {
                  var ae = se.name || se.type.replace("/", "."), ue = se.size;
                  if (!(!ae || !ue)) {
                    var ce = T.config.uploadImgAccept.join("|"), Fe = ".(" + ce + ")$", De = new RegExp(Fe, "i");
                    if (De.test(ae) === !1) {
                      q.push("\u3010" + ae + "\u3011" + P("\u4E0D\u662F\u56FE\u7247"));
                      return;
                    }
                    if (W < ue) {
                      q.push("\u3010" + ae + "\u3011" + P("\u5927\u4E8E") + " " + j + "M");
                      return;
                    }
                    te.push(se);
                  }
                }
              }), q.length) {
                R.customAlert(P("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + q.join(`
`), "warning");
                return;
              }
              if (te.length === 0) {
                R.customAlert(P("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (te.length > z) {
                R.customAlert(P("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + z + P("\u5F20\u56FE\u7247"), "warning");
                return;
              }
              if (Z && typeof Z == "function") {
                var ne;
                Z(te, (0, d.default)(ne = this.insertImg).call(ne, this));
                return;
              }
              var fe = new FormData();
              if ((0, f.default)(te).call(te, function(se, ae) {
                var ue = L || se.name;
                te.length > 1 && (ue = ue + (ae + 1)), fe.append(ue, se);
              }), F) {
                var me = F.split("#");
                F = me[0];
                var pe = me[1] || "";
                (0, f.default)(p).call(p, $, function(se, ae) {
                  B && ((0, c.default)(F).call(F, "?") > 0 ? F += "&" : F += "?", F = F + se + "=" + ae), fe.append(se, ae);
                }), pe && (F += "#" + pe);
                var ve = C.default(F, { timeout: Y, formData: fe, headers: k, withCredentials: !!Q, beforeSend: function(ae) {
                  if (M.before)
                    return M.before(ae, T, te);
                }, onTimeout: function(ae) {
                  R.customAlert(P("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), M.timeout && M.timeout(ae, T);
                }, onProgress: function(ae, ue) {
                  var ce = new A.default(T);
                  ue.lengthComputable && (ae = ue.loaded / ue.total, ce.show(ae));
                }, onError: function(ae) {
                  R.customAlert(P("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", P("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + P("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + ae.status), M.error && M.error(ae, T);
                }, onFail: function(ae, ue) {
                  R.customAlert(P("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", P("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + P("\u8FD4\u56DE\u7ED3\u679C") + ": ") + ue), M.fail && M.fail(ae, T, ue);
                }, onSuccess: function(ae, ue) {
                  if (M.customInsert) {
                    var ce;
                    M.customInsert((0, d.default)(ce = w.insertImg).call(ce, w), ue, T);
                    return;
                  }
                  if (ue.errno != "0") {
                    R.customAlert(P("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", P("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + P("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + ue.errno), M.fail && M.fail(ae, T, ue);
                    return;
                  }
                  var Fe = ue.data;
                  (0, f.default)(Fe).call(Fe, function(De) {
                    typeof De == "string" ? w.insertImg(De) : w.insertImg(De.url, De.alt, De.href);
                  }), M.success && M.success(ae, T, ue);
                } });
                typeof ve == "string" && R.customAlert(ve, "error");
                return;
              }
              H && p.arrForEach(x, function(se) {
                var ae = w, ue = new FileReader();
                ue.readAsDataURL(se), ue.onload = function() {
                  if (!!this.result) {
                    var ce = this.result.toString();
                    ae.insertImg(ce, ce);
                  }
                };
              });
            }
          }
        }, E;
      }();
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(410)), f = s(t(4)), c = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 }), o.dealTextNode = o.isAllTodo = o.isTodo = o.getCursorNextNode = void 0;
      function S(E) {
        return E.length ? E.attr("class") === "w-e-todo" : !1;
      }
      o.isTodo = S;
      function p(E) {
        var x = E.selection.getSelectionRangeTopNodes();
        if (x.length !== 0)
          return (0, d.default)(x).call(x, function(w) {
            return S(w);
          });
      }
      o.isAllTodo = p;
      function C(E, x, w) {
        var T;
        if (!!E.hasChildNodes()) {
          var R = E.cloneNode(), I = !1;
          x.nodeValue === "" && (I = !0);
          var P = [];
          return (0, f.default)(T = E.childNodes).call(T, function(F) {
            if (!A(F, x) && I && (R.appendChild(F.cloneNode(!0)), F.nodeName !== "BR" && P.push(F)), A(F, x)) {
              if (F.nodeType === 1) {
                var H = C(F, x, w);
                H && H.textContent !== "" && (R == null || R.appendChild(H));
              }
              if (F.nodeType === 3 && x.isEqualNode(F)) {
                var W = y(F, w);
                R.textContent = W;
              }
              I = !0;
            }
          }), (0, f.default)(P).call(P, function(F) {
            var H = F;
            H.remove();
          }), R;
        }
      }
      o.getCursorNextNode = C;
      function A(E, x) {
        return E.nodeType === 3 ? E.nodeValue === x.nodeValue : E.contains(x);
      }
      function y(E, x, w) {
        w === void 0 && (w = !0);
        var T = E.nodeValue, R = T == null ? void 0 : (0, c.default)(T).call(T, 0, x);
        if (T = T == null ? void 0 : (0, c.default)(T).call(T, x), !w) {
          var I = T;
          T = R, R = I;
        }
        return E.nodeValue = R, T;
      }
      o.dealTextNode = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(430), f = function() {
        function c(S) {
          this.maxSize = S, this.isRe = !1, this.data = new d.CeilStack(S), this.revokeData = new d.CeilStack(S);
        }
        return (0, u.default)(c.prototype, "size", {
          get: function() {
            return [this.data.size, this.revokeData.size];
          },
          enumerable: !1,
          configurable: !0
        }), c.prototype.resetMaxSize = function(S) {
          this.data.resetMax(S), this.revokeData.resetMax(S);
        }, c.prototype.save = function(S) {
          return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(S), this;
        }, c.prototype.revoke = function(S) {
          !this.isRe && (this.isRe = !0);
          var p = this.data.outstack();
          return p ? (this.revokeData.instack(p), S(p), !0) : !1;
        }, c.prototype.restore = function(S) {
          !this.isRe && (this.isRe = !0);
          var p = this.revokeData.outstack();
          return p ? (this.data.instack(p), S(p), !0) : !1;
        }, c;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(14), u = t(11), d = t(73);
      l.exports = !s && !u(function() {
        return Object.defineProperty(d("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(l, o, t) {
      var s = t(11), u = /#|\.prototype\./, d = function(A, y) {
        var E = c[f(A)];
        return E == p ? !0 : E == S ? !1 : typeof y == "function" ? s(y) : !!y;
      }, f = d.normalize = function(C) {
        return String(C).replace(u, ".").toLowerCase();
      }, c = d.data = {}, S = d.NATIVE = "N", p = d.POLYFILL = "P";
      l.exports = d;
    }, function(l, o, t) {
      var s = t(102), u = Function.toString;
      typeof s.inspectSource != "function" && (s.inspectSource = function(d) {
        return u.call(d);
      }), l.exports = s.inspectSource;
    }, function(l, o, t) {
      var s = t(8), u = t(166), d = "__core-js_shared__", f = s[d] || u(d, {});
      l.exports = f;
    }, function(l, o, t) {
      var s = t(104), u = t(19), d = t(16), f = t(10), c = t(42), S = f("iterator"), p = !1, C = function() {
        return this;
      }, A, y, E;
      [].keys && (E = [].keys(), "next" in E ? (y = s(s(E)), y !== Object.prototype && (A = y)) : p = !0), A == null && (A = {}), !c && !d(A, S) && u(A, S, C), l.exports = { IteratorPrototype: A, BUGGY_SAFARI_ITERATORS: p };
    }, function(l, o, t) {
      var s = t(16), u = t(29), d = t(63), f = t(168), c = d("IE_PROTO"), S = Object.prototype;
      l.exports = f ? Object.getPrototypeOf : function(p) {
        return p = u(p), s(p, c) ? p[c] : typeof p.constructor == "function" && p instanceof p.constructor ? p.constructor.prototype : p instanceof Object ? S : null;
      };
    }, function(l, o, t) {
      var s = t(76);
      l.exports = s && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
    }, function(l, o, t) {
      var s = t(16), u = t(28), d = t(78).indexOf, f = t(51);
      l.exports = function(c, S) {
        var p = u(c), C = 0, A = [], y;
        for (y in p)
          !s(f, y) && s(p, y) && A.push(y);
        for (; S.length > C; )
          s(p, y = S[C++]) && (~d(A, y) || A.push(y));
        return A;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("document", "documentElement");
    }, function(l, o, t) {
      var s = t(8);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(53);
      l.exports = function(u, d, f) {
        for (var c in d)
          f && f.unsafe && u[c] ? u[c] = d[c] : s(u, c, d[c], f);
        return u;
      };
    }, function(l, o, t) {
      var s = t(35), u = t(18), d = t(10), f = t(14), c = d("species");
      l.exports = function(S) {
        var p = s(S), C = u.f;
        f && p && !p[c] && C(p, c, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, function(l, o, t) {
      var s = t(10), u = t(43), d = s("iterator"), f = Array.prototype;
      l.exports = function(c) {
        return c !== void 0 && (u.Array === c || f[d] === c);
      };
    }, function(l, o, t) {
      var s = t(65), u = t(43), d = t(10), f = d("iterator");
      l.exports = function(c) {
        if (c != null)
          return c[f] || c["@@iterator"] || u[s(c)];
      };
    }, function(l, o, t) {
      var s = t(25);
      l.exports = function(u, d, f, c) {
        try {
          return c ? d(s(f)[0], f[1]) : d(f);
        } catch (p) {
          var S = u.return;
          throw S !== void 0 && s(S.call(u)), p;
        }
      };
    }, function(l, o, t) {
      var s = t(10), u = s("iterator"), d = !1;
      try {
        var f = 0, c = { next: function() {
          return { done: !!f++ };
        }, return: function() {
          d = !0;
        } };
        c[u] = function() {
          return this;
        }, Array.from(c, function() {
          throw 2;
        });
      } catch {
      }
      l.exports = function(S, p) {
        if (!p && !d)
          return !1;
        var C = !1;
        try {
          var A = {};
          A[u] = function() {
            return { next: function() {
              return { done: C = !0 };
            } };
          }, S(A);
        } catch {
        }
        return C;
      };
    }, function(l, o, t) {
      var s = t(25), u = t(40), d = t(10), f = d("species");
      l.exports = function(c, S) {
        var p = s(c).constructor, C;
        return p === void 0 || (C = s(p)[f]) == null ? S : u(C);
      };
    }, function(l, o, t) {
      var s = t(8), u = t(11), d = t(33), f = t(39), c = t(107), S = t(73), p = t(117), C = s.location, A = s.setImmediate, y = s.clearImmediate, E = s.process, x = s.MessageChannel, w = s.Dispatch, T = 0, R = {}, I = "onreadystatechange", P, F, H, W = function(B) {
        if (R.hasOwnProperty(B)) {
          var k = R[B];
          delete R[B], k();
        }
      }, j = function(B) {
        return function() {
          W(B);
        };
      }, z = function(B) {
        W(B.data);
      }, L = function(B) {
        s.postMessage(B + "", C.protocol + "//" + C.host);
      };
      (!A || !y) && (A = function(B) {
        for (var k = [], M = 1; arguments.length > M; )
          k.push(arguments[M++]);
        return R[++T] = function() {
          (typeof B == "function" ? B : Function(B)).apply(void 0, k);
        }, P(T), T;
      }, y = function(B) {
        delete R[B];
      }, d(E) == "process" ? P = function(B) {
        E.nextTick(j(B));
      } : w && w.now ? P = function(B) {
        w.now(j(B));
      } : x && !p ? (F = new x(), H = F.port2, F.port1.onmessage = z, P = f(H.postMessage, H, 1)) : s.addEventListener && typeof postMessage == "function" && !s.importScripts && !u(L) && C.protocol !== "file:" ? (P = L, s.addEventListener("message", z, !1)) : I in S("script") ? P = function(B) {
        c.appendChild(S("script"))[I] = function() {
          c.removeChild(this), W(B);
        };
      } : P = function(B) {
        setTimeout(j(B), 0);
      }), l.exports = { set: A, clear: y };
    }, function(l, o, t) {
      var s = t(84);
      l.exports = /(iphone|ipod|ipad).*applewebkit/i.test(s);
    }, function(l, o, t) {
      var s = t(25), u = t(13), d = t(85);
      l.exports = function(f, c) {
        if (s(f), u(c) && c.constructor === f)
          return c;
        var S = d.f(f), p = S.resolve;
        return p(c), S.promise;
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return { error: !1, value: t() };
        } catch (s) {
          return { error: !0, value: s };
        }
      };
    }, function(l, o, t) {
      l.exports = t(197);
    }, function(l, o, t) {
      var s = t(5), u = t(8), d = t(122), f = t(11), c = t(19), S = t(66), p = t(83), C = t(13), A = t(36), y = t(18).f, E = t(30).forEach, x = t(14), w = t(41), T = w.set, R = w.getterFor;
      l.exports = function(I, P, F) {
        var H = I.indexOf("Map") !== -1, W = I.indexOf("Weak") !== -1, j = H ? "set" : "add", z = u[I], L = z && z.prototype, $ = {}, B;
        if (!x || typeof z != "function" || !(W || L.forEach && !f(function() {
          new z().entries().next();
        })))
          B = F.getConstructor(P, I, H, j), d.REQUIRED = !0;
        else {
          B = P(function(M, Y) {
            T(p(M, B, I), { type: I, collection: new z() }), Y != null && S(Y, M[j], M, H);
          });
          var k = R(I);
          E(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(M) {
            var Y = M == "add" || M == "set";
            M in L && !(W && M == "clear") && c(B.prototype, M, function(Q, Z) {
              var te = k(this).collection;
              if (!Y && W && !C(Q))
                return M == "get" ? void 0 : !1;
              var q = te[M](Q === 0 ? 0 : Q, Z);
              return Y ? this : q;
            });
          }), W || y(B.prototype, "size", { configurable: !0, get: function() {
            return k(this).collection.size;
          } });
        }
        return A(B, I, !1, !0), $[I] = B, s({ global: !0, forced: !0 }, $), W || F.setStrong(B, I, H), B;
      };
    }, function(l, o, t) {
      var s = t(51), u = t(13), d = t(16), f = t(18).f, c = t(64), S = t(200), p = c("meta"), C = 0, A = Object.isExtensible || function() {
        return !0;
      }, y = function(I) {
        f(I, p, { value: {
          objectID: "O" + ++C,
          weakData: {}
        } });
      }, E = function(I, P) {
        if (!u(I))
          return _typeof(I) == "symbol" ? I : (typeof I == "string" ? "S" : "P") + I;
        if (!d(I, p)) {
          if (!A(I))
            return "F";
          if (!P)
            return "E";
          y(I);
        }
        return I[p].objectID;
      }, x = function(I, P) {
        if (!d(I, p)) {
          if (!A(I))
            return !0;
          if (!P)
            return !1;
          y(I);
        }
        return I[p].weakData;
      }, w = function(I) {
        return S && T.REQUIRED && A(I) && !d(I, p) && y(I), I;
      }, T = l.exports = { REQUIRED: !1, fastKey: E, getWeakData: x, onFreeze: w };
      s[p] = !0;
    }, function(l, o, t) {
      var s = t(18).f, u = t(77), d = t(109), f = t(39), c = t(83), S = t(66), p = t(75), C = t(110), A = t(14), y = t(122).fastKey, E = t(41), x = E.set, w = E.getterFor;
      l.exports = { getConstructor: function(R, I, P, F) {
        var H = R(function(L, $) {
          c(L, H, I), x(L, { type: I, index: u(null), first: void 0, last: void 0, size: 0 }), A || (L.size = 0), $ != null && S($, L[F], L, P);
        }), W = w(I), j = function($, B, k) {
          var M = W($), Y = z($, B), Q, Z;
          return Y ? Y.value = k : (M.last = Y = { index: Z = y(B, !0), key: B, value: k, previous: Q = M.last, next: void 0, removed: !1 }, M.first || (M.first = Y), Q && (Q.next = Y), A ? M.size++ : $.size++, Z !== "F" && (M.index[Z] = Y)), $;
        }, z = function($, B) {
          var k = W($), M = y(B), Y;
          if (M !== "F")
            return k.index[M];
          for (Y = k.first; Y; Y = Y.next)
            if (Y.key == B)
              return Y;
        };
        return d(H.prototype, {
          clear: function() {
            for (var $ = this, B = W($), k = B.index, M = B.first; M; )
              M.removed = !0, M.previous && (M.previous = M.previous.next = void 0), delete k[M.index], M = M.next;
            B.first = B.last = void 0, A ? B.size = 0 : $.size = 0;
          },
          delete: function($) {
            var B = this, k = W(B), M = z(B, $);
            if (M) {
              var Y = M.next, Q = M.previous;
              delete k.index[M.index], M.removed = !0, Q && (Q.next = Y), Y && (Y.previous = Q), k.first == M && (k.first = Y), k.last == M && (k.last = Q), A ? k.size-- : B.size--;
            }
            return !!M;
          },
          forEach: function($) {
            for (var B = W(this), k = f($, arguments.length > 1 ? arguments[1] : void 0, 3), M; M = M ? M.next : B.first; )
              for (k(M.value, M.key, this); M && M.removed; )
                M = M.previous;
          },
          has: function($) {
            return !!z(this, $);
          }
        }), d(H.prototype, P ? {
          get: function($) {
            var B = z(this, $);
            return B && B.value;
          },
          set: function($, B) {
            return j(this, $ === 0 ? 0 : $, B);
          }
        } : {
          add: function($) {
            return j(this, $ = $ === 0 ? 0 : $, $);
          }
        }), A && s(H.prototype, "size", { get: function() {
          return W(this).size;
        } }), H;
      }, setStrong: function(R, I, P) {
        var F = I + " Iterator", H = w(I), W = w(F);
        p(R, I, function(j, z) {
          x(this, { type: F, target: j, state: H(j), kind: z, last: void 0 });
        }, function() {
          for (var j = W(this), z = j.kind, L = j.last; L && L.removed; )
            L = L.previous;
          return !j.target || !(j.last = L = L ? L.next : j.state.first) ? (j.target = void 0, { value: void 0, done: !0 }) : z == "keys" ? { value: L.key, done: !1 } : z == "values" ? { value: L.value, done: !1 } : { value: [L.key, L.value], done: !1 };
        }, P ? "entries" : "values", !P, !0), C(I);
      } };
    }, function(l, o, t) {
      var s = t(12);
      s("iterator");
    }, function(l, o, t) {
      var s = t(106), u = t(80), d = u.concat("length", "prototype");
      o.f = Object.getOwnPropertyNames || function(c) {
        return s(c, d);
      };
    }, function(l, o) {
      o.f = Object.getOwnPropertySymbols;
    }, function(l, o, t) {
      l.exports = t(268);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { zIndex: 1e4 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { focus: !0, height: 300, placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587", zIndexFullScreen: 10002, showFullScreen: !0 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.getPasteImgs = o.getPasteHtml = o.getPasteText = void 0;
      var f = t(2), c = t(6), S = f.__importDefault(t(292));
      function p(y) {
        var E = y.clipboardData, x = "";
        return E == null ? x = window.clipboardData && window.clipboardData.getData("text") : x = E.getData("text/plain"), c.replaceHtmlSymbol(x);
      }
      o.getPasteText = p;
      function C(y, E, x) {
        E === void 0 && (E = !0), x === void 0 && (x = !1);
        var w = y.clipboardData, T = "";
        if (w && (T = w.getData("text/html")), !T) {
          var R = p(y);
          if (!R)
            return "";
          T = "<p>" + R + "</p>";
        }
        return T = T.replace(/<(\d)/gm, function(I, P) {
          return "&lt;" + P;
        }), T = T.replace(/<(\/?meta.*?)>/gim, ""), T = S.default(T, E, x), T;
      }
      o.getPasteHtml = C;
      function A(y) {
        var E, x = [], w = p(y);
        if (w)
          return x;
        var T = (E = y.clipboardData) === null || E === void 0 ? void 0 : E.items;
        return T && (0, d.default)(c).call(c, T, function(R, I) {
          var P = I.type;
          /image/i.test(P) && x.push(I.getAsFile());
        }), x;
      }
      o.getPasteImgs = A;
    }, function(l, o, t) {
      l.exports = t(294);
    }, function(l, o, t) {
      l.exports = t(310);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3)), p = t(7), C = function() {
        function A(y, E) {
          var x = this;
          this.hideTimeoutId = 0, this.menu = y, this.conf = E;
          var w = S.default('<div class="w-e-droplist"></div>'), T = S.default("<p>" + E.title + "</p>");
          T.addClass("w-e-dp-title"), w.append(T);
          var R = E.list || [], I = E.type || "list", P = E.clickHandler || p.EMPTY_FN, F = S.default('<ul class="' + (I === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
          (0, d.default)(R).call(R, function(H) {
            var W = H.$elem, j = H.value, z = S.default('<li class="w-e-item"></li>');
            W && (z.append(W), F.append(z), z.on("click", function(L) {
              P(j), L.stopPropagation(), x.hideTimeoutId = (0, f.default)(function() {
                x.hide();
              });
            }));
          }), w.append(F), w.on("mouseleave", function() {
            x.hideTimeoutId = (0, f.default)(function() {
              x.hide();
            });
          }), this.$container = w, this.rendered = !1, this._show = !1;
        }
        return A.prototype.show = function() {
          this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
          var y = this.menu, E = y.$elem, x = this.$container;
          if (!this._show) {
            if (this.rendered)
              x.show();
            else {
              var w = E.getBoundingClientRect().height || 0, T = this.conf.width || 100;
              x.css("margin-top", w + "px").css("width", T + "px"), E.append(x), this.rendered = !0;
            }
            this._show = !0;
          }
        }, A.prototype.hide = function() {
          var y = this.$container;
          !this._show || (y.hide(), this._show = !1);
        }, (0, u.default)(A.prototype, "isShow", { get: function() {
          return this._show;
        }, enumerable: !1, configurable: !0 }), A;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var c = f.selection.getSelectionContainerElem();
        return c != null && c.length ? c.getNodeName() === "A" : !1;
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), d = s(t(1)), f = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var c = t(6);
      function S(p, C) {
        var A = new XMLHttpRequest();
        if (A.open("POST", p), A.timeout = C.timeout || 10 * 1e3, A.ontimeout = function() {
          console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), C.onTimeout && C.onTimeout(A);
        }, A.upload && (A.upload.onprogress = function(E) {
          var x = E.loaded / E.total;
          C.onProgress && C.onProgress(x, E);
        }), C.headers && (0, f.default)(c).call(c, C.headers, function(E, x) {
          A.setRequestHeader(E, x);
        }), A.withCredentials = !!C.withCredentials, C.beforeSend) {
          var y = C.beforeSend(A);
          if (y && (0, u.default)(y) === "object" && y.prevent)
            return y.msg;
        }
        return A.onreadystatechange = function() {
          if (A.readyState === 4) {
            var E = A.status;
            if (!(E < 200) && !(E >= 300 && E < 400)) {
              if (E >= 400) {
                console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + E), C.onError && C.onError(A);
                return;
              }
              var x = A.responseText, w;
              if ((0, u.default)(x) !== "object")
                try {
                  w = JSON.parse(x);
                } catch {
                  console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", x), C.onFail && C.onFail(A, x);
                  return;
                }
              else
                w = x;
              C.onSuccess(A, w);
            }
          }
        }, A.send(C.formData || null), A;
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(342)), f = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3)), p = function() {
        function C(A) {
          this.editor = A, this.$textContainer = A.$textContainerElem, this.$bar = S.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }
        return C.prototype.show = function(A) {
          var y = this;
          if (!this.isShow) {
            this.isShow = !0;
            var E = this.$bar, x = this.$textContainer;
            x.append(E), (0, d.default)() - this.time > 100 && A <= 1 && (E.css("width", A * 100 + "%"), this.time = (0, d.default)());
            var w = this.timeoutId;
            w && clearTimeout(w), this.timeoutId = (0, f.default)(function() {
              y.hide();
            }, 500);
          }
        }, C.prototype.hide = function() {
          var A = this.$bar;
          A.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }, C;
      }();
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.ListType = void 0;
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(24)), S = t(47), p = d.__importStar(t(371)), C;
      (function(y) {
        y.OrderedList = "OL", y.UnorderedList = "UL";
      })(C = o.ListType || (o.ListType = {}));
      var A = function(y) {
        d.__extends(E, y);
        function E(x) {
          var w = this, T = f.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), R = { width: 130, title: "\u5E8F\u5217", type: "list", list: [{ $elem: f.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + x.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`), value: C.UnorderedList }, { $elem: f.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + x.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`), value: C.OrderedList }], clickHandler: function(P) {
            w.command(P);
          } };
          return w = y.call(this, T, x, R) || this, w;
        }
        return E.prototype.command = function(x) {
          var w = this.editor, T = w.selection.getSelectionContainerElem();
          T !== void 0 && (this.handleSelectionRangeNodes(x), this.tryChangeActive());
        }, E.prototype.validator = function(x, w, T) {
          return !(!x.length || !w.length || T.equal(x) || T.equal(w));
        }, E.prototype.handleSelectionRangeNodes = function(x) {
          var w = this.editor, T = w.selection, R = x.toLowerCase(), I = T.getSelectionContainerElem(), P = T.getSelectionStartElem().getNodeTop(w), F = T.getSelectionEndElem().getNodeTop(w);
          if (!!this.validator(P, F, w.$textElem)) {
            var H = T.getRange(), W = H == null ? void 0 : H.collapsed;
            w.$textElem.equal(I) || (I = I.getNodeTop(w));
            var j = { editor: w, listType: x, listTarget: R, $selectionElem: I, $startElem: P, $endElem: F }, z;
            this.isOrderElem(I) ? z = p.ClassType.Wrap : this.isOrderElem(P) && this.isOrderElem(F) ? z = p.ClassType.Join : this.isOrderElem(P) ? z = p.ClassType.StartJoin : this.isOrderElem(F) ? z = p.ClassType.EndJoin : z = p.ClassType.Other;
            var L = new p.default(p.createListHandle(z, j, H));
            S.updateRange(w, L.getSelectionRangeElem(), !!W);
          }
        }, E.prototype.isOrderElem = function(x) {
          var w = x.getNodeName();
          return w === C.OrderedList || w === C.UnorderedList;
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(c.default);
      o.default = A;
    }, function(l, o, t) {
      l.exports = t(395);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var c = f.selection.getSelectionContainerElem();
        return c != null && c.length ? !!(c.getNodeName() == "CODE" || c.getNodeName() == "PRE" || c.parent().getNodeName() == "CODE" || c.parent().getNodeName() == "PRE" || /hljs/.test(c.parent().attr("class"))) : !1;
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 }), o.todo = void 0;
      var f = t(2), c = f.__importDefault(t(3)), S = function() {
        function C(A) {
          var y;
          this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = c.default(this.template), this.$child = (y = A == null ? void 0 : A.childNodes()) === null || y === void 0 ? void 0 : y.clone(!0);
        }
        return C.prototype.init = function() {
          var A = this.$child, y = this.getInputContainer();
          A && A.insertAfter(y);
        }, C.prototype.getInput = function() {
          var A = this.$todo, y = (0, d.default)(A).call(A, "input");
          return y;
        }, C.prototype.getInputContainer = function() {
          var A = this.getInput().parent();
          return A;
        }, C.prototype.getTodo = function() {
          return this.$todo;
        }, C;
      }();
      o.todo = S;
      function p(C) {
        var A = new S(C);
        return A.init(), A;
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2);
      t(146), t(148), t(152), t(154), t(156), t(158), t(160);
      var f = d.__importDefault(t(87));
      d.__exportStar(t(442), o);
      try {
      } catch {
        throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
      }
      o.default = f.default;
    }, function(l, o, t) {
      var s = t(143);
      l.exports = s;
    }, function(l, o, t) {
      t(144);
      var s = t(9), u = s.Object, d = l.exports = function(c, S, p) {
        return u.defineProperty(c, S, p);
      };
      u.defineProperty.sham && (d.sham = !0);
    }, function(l, o, t) {
      var s = t(5), u = t(14), d = t(18);
      s({ target: "Object", stat: !0, forced: !u, sham: !u }, { defineProperty: d.f });
    }, function(l, o) {
      var t;
      t = function() {
        return this;
      }();
      try {
        t = t || new Function("return this")();
      } catch {
        (typeof window > "u" ? "undefined" : _typeof(window)) === "object" && (t = window);
      }
      l.exports = t;
    }, function(l, o, t) {
      var s = t(20), u = t(147);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(149);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21), u = t(150), d = t(151);
      o = s(!1);
      var f = u(d);
      o.push([l.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + f + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      l.exports = function(s, u) {
        return u || (u = {}), s = s && s.__esModule ? s.default : s, typeof s != "string" ? s : (/^['"].*['"]$/.test(s) && (s = s.slice(1, -1)), u.hash && (s += u.hash), /["'() \t\n]/.test(s) || u.needQuotes ? '"'.concat(s.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : s);
      };
    }, function(l, o, t) {
      t.r(o), o.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }, function(l, o, t) {
      var s = t(20), u = t(153);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(155);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(157);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(159);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(161));
      Element.prototype.matches || (Element.prototype.matches = function(d) {
        var f = this.ownerDocument.querySelectorAll(d), c = f.length;
        for (c; c >= 0 && f.item(c) !== this; c--)
          ;
        return c > -1;
      }), u.default || (window.Promise = u.default);
    }, function(l, o, t) {
      l.exports = t(162);
    }, function(l, o, t) {
      var s = t(163);
      l.exports = s;
    }, function(l, o, t) {
      t(61), t(50), t(54), t(175), t(178), t(179);
      var s = t(9);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(62), u = t(49), d = function(c) {
        return function(S, p) {
          var C = String(u(S)), A = s(p), y = C.length, E, x;
          return A < 0 || A >= y ? c ? "" : void 0 : (E = C.charCodeAt(A), E < 55296 || E > 56319 || A + 1 === y || (x = C.charCodeAt(A + 1)) < 56320 || x > 57343 ? c ? C.charAt(A) : E : c ? C.slice(A, A + 2) : (E - 55296 << 10) + (x - 56320) + 65536);
        };
      };
      l.exports = {
        codeAt: d(!1),
        charAt: d(!0)
      };
    }, function(l, o, t) {
      var s = t(8), u = t(101), d = s.WeakMap;
      l.exports = typeof d == "function" && /native code/.test(u(d));
    }, function(l, o, t) {
      var s = t(8), u = t(19);
      l.exports = function(d, f) {
        try {
          u(s, d, f);
        } catch {
          s[d] = f;
        }
        return f;
      };
    }, function(l, o, t) {
      var s = t(103).IteratorPrototype, u = t(77), d = t(48), f = t(36), c = t(43), S = function() {
        return this;
      };
      l.exports = function(p, C, A) {
        var y = C + " Iterator";
        return p.prototype = u(s, { next: d(1, A) }), f(p, y, !1, !0), c[y] = S, p;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        function u() {
        }
        return u.prototype.constructor = null, Object.getPrototypeOf(new u()) !== u.prototype;
      });
    }, function(l, o, t) {
      var s = t(14), u = t(18), d = t(25), f = t(52);
      l.exports = s ? Object.defineProperties : function(S, p) {
        d(S);
        for (var C = f(p), A = C.length, y = 0, E; A > y; )
          u.f(S, E = C[y++], p[E]);
        return S;
      };
    }, function(l, o, t) {
      var s = t(81), u = t(65);
      l.exports = s ? {}.toString : function() {
        return "[object " + u(this) + "]";
      };
    }, function(l, o, t) {
      var s = t(25), u = t(172);
      l.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var d = !1, f = {}, c;
        try {
          c = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, c.call(f, []), d = f instanceof Array;
        } catch {
        }
        return function(p, C) {
          return s(p), u(C), d ? c.call(p, C) : p.__proto__ = C, p;
        };
      }() : void 0);
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u) {
        if (!s(u) && u !== null)
          throw TypeError("Can't set " + String(u) + " as a prototype");
        return u;
      };
    }, function(l, o, t) {
      var s = t(28), u = t(82), d = t(43), f = t(41), c = t(75), S = "Array Iterator", p = f.set, C = f.getterFor(S);
      l.exports = c(Array, "Array", function(A, y) {
        p(this, {
          type: S,
          target: s(A),
          index: 0,
          kind: y
        });
      }, function() {
        var A = C(this), y = A.target, E = A.kind, x = A.index++;
        return !y || x >= y.length ? (A.target = void 0, { value: void 0, done: !0 }) : E == "keys" ? { value: x, done: !1 } : E == "values" ? { value: y[x], done: !1 } : { value: [x, y[x]], done: !1 };
      }, "values"), d.Arguments = d.Array, u("keys"), u("values"), u("entries");
    }, function(l, o) {
      l.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, function(l, o, t) {
      var s = t(5), u = t(42), d = t(8), f = t(35), c = t(108), S = t(53), p = t(109), C = t(36), A = t(110), y = t(13), E = t(40), x = t(83), w = t(33), T = t(101), R = t(66), I = t(114), P = t(115), F = t(116).set, H = t(176), W = t(118), j = t(177), z = t(85), L = t(119), $ = t(41), B = t(100), k = t(10), M = t(86), Y = k("species"), Q = "Promise", Z = $.get, te = $.set, q = $.getterFor(Q), ne = c, fe = d.TypeError, me = d.document, pe = d.process, ve = f("fetch"), se = z.f, ae = se, ue = w(pe) == "process", ce = !!(me && me.createEvent && d.dispatchEvent), Fe = "unhandledrejection", De = "rejectionhandled", Be = 0, gt = 1, Nt = 2, Ze = 1, dt = 2, vt, Me, mt, Wt, xt = B(Q, function() {
        var $e = T(ne) !== String(ne);
        if (!$e && (M === 66 || !ue && typeof PromiseRejectionEvent != "function") || u && !ne.prototype.finally)
          return !0;
        if (M >= 51 && /native code/.test(ne))
          return !1;
        var xe = ne.resolve(1), ye = function(re) {
          re(function() {
          }, function() {
          });
        }, Pe = xe.constructor = {};
        return Pe[Y] = ye, !(xe.then(function() {
        }) instanceof ye);
      }), gn = xt || !I(function($e) {
        ne.all($e).catch(function() {
        });
      }), Xt = function(xe) {
        var ye;
        return y(xe) && typeof (ye = xe.then) == "function" ? ye : !1;
      }, Lt = function(xe, ye, Pe) {
        if (!ye.notified) {
          ye.notified = !0;
          var Ee = ye.reactions;
          H(function() {
            for (var re = ye.value, we = ye.state == gt, be = 0; Ee.length > be; ) {
              var Ce = Ee[be++], Oe = we ? Ce.ok : Ce.fail, Et = Ce.resolve, Xe = Ce.reject, Qe = Ce.domain, We, Ut, mn;
              try {
                Oe ? (we || (ye.rejection === dt && $t(xe, ye), ye.rejection = Ze), Oe === !0 ? We = re : (Qe && Qe.enter(), We = Oe(re), Qe && (Qe.exit(), mn = !0)), We === Ce.promise ? Xe(fe("Promise-chain cycle")) : (Ut = Xt(We)) ? Ut.call(We, Et, Xe) : Et(We)) : Xe(re);
              } catch (Vt) {
                Qe && !mn && Qe.exit(), Xe(Vt);
              }
            }
            ye.reactions = [], ye.notified = !1, Pe && !ye.rejection && Jt(xe, ye);
          });
        }
      }, Ft = function(xe, ye, Pe) {
        var Ee, re;
        ce ? (Ee = me.createEvent("Event"), Ee.promise = ye, Ee.reason = Pe, Ee.initEvent(xe, !1, !0), d.dispatchEvent(Ee)) : Ee = { promise: ye, reason: Pe }, (re = d["on" + xe]) ? re(Ee) : xe === Fe && j("Unhandled promise rejection", Pe);
      }, Jt = function(xe, ye) {
        F.call(d, function() {
          var Pe = ye.value, Ee = Ot(ye), re;
          if (Ee && (re = L(function() {
            ue ? pe.emit("unhandledRejection", Pe, xe) : Ft(Fe, xe, Pe);
          }), ye.rejection = ue || Ot(ye) ? dt : Ze, re.error))
            throw re.value;
        });
      }, Ot = function(xe) {
        return xe.rejection !== Ze && !xe.parent;
      }, $t = function(xe, ye) {
        F.call(d, function() {
          ue ? pe.emit("rejectionHandled", xe) : Ft(De, xe, ye.value);
        });
      }, rt = function(xe, ye, Pe, Ee) {
        return function(re) {
          xe(ye, Pe, re, Ee);
        };
      }, je = function(xe, ye, Pe, Ee) {
        ye.done || (ye.done = !0, Ee && (ye = Ee), ye.value = Pe, ye.state = Nt, Lt(xe, ye, !0));
      }, It = function $e(xe, ye, Pe, Ee) {
        if (!ye.done) {
          ye.done = !0, Ee && (ye = Ee);
          try {
            if (xe === Pe)
              throw fe("Promise can't be resolved itself");
            var re = Xt(Pe);
            re ? H(function() {
              var we = { done: !1 };
              try {
                re.call(Pe, rt($e, xe, we, ye), rt(je, xe, we, ye));
              } catch (be) {
                je(xe, we, be, ye);
              }
            }) : (ye.value = Pe, ye.state = gt, Lt(xe, ye, !1));
          } catch (we) {
            je(xe, { done: !1 }, we, ye);
          }
        }
      };
      xt && (ne = function(xe) {
        x(this, ne, Q), E(xe), vt.call(this);
        var ye = Z(this);
        try {
          xe(rt(It, this, ye), rt(je, this, ye));
        } catch (Pe) {
          je(this, ye, Pe);
        }
      }, vt = function(xe) {
        te(this, { type: Q, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: Be, value: void 0 });
      }, vt.prototype = p(ne.prototype, {
        then: function(xe, ye) {
          var Pe = q(this), Ee = se(P(this, ne));
          return Ee.ok = typeof xe == "function" ? xe : !0, Ee.fail = typeof ye == "function" && ye, Ee.domain = ue ? pe.domain : void 0, Pe.parent = !0, Pe.reactions.push(Ee), Pe.state != Be && Lt(this, Pe, !1), Ee.promise;
        },
        catch: function(xe) {
          return this.then(void 0, xe);
        }
      }), Me = function() {
        var xe = new vt(), ye = Z(xe);
        this.promise = xe, this.resolve = rt(It, xe, ye), this.reject = rt(je, xe, ye);
      }, z.f = se = function(xe) {
        return xe === ne || xe === mt ? new Me(xe) : ae(xe);
      }, !u && typeof c == "function" && (Wt = c.prototype.then, S(c.prototype, "then", function(xe, ye) {
        var Pe = this;
        return new ne(function(Ee, re) {
          Wt.call(Pe, Ee, re);
        }).then(xe, ye);
      }, { unsafe: !0 }), typeof ve == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
        fetch: function(xe) {
          return W(ne, ve.apply(d, arguments));
        }
      }))), s({ global: !0, wrap: !0, forced: xt }, { Promise: ne }), C(ne, Q, !1, !0), A(Q), mt = f(Q), s({ target: Q, stat: !0, forced: xt }, {
        reject: function(xe) {
          var ye = se(this);
          return ye.reject.call(void 0, xe), ye.promise;
        }
      }), s({ target: Q, stat: !0, forced: u || xt }, {
        resolve: function(xe) {
          return W(u && this === mt ? ne : this, xe);
        }
      }), s({ target: Q, stat: !0, forced: gn }, {
        all: function(xe) {
          var ye = this, Pe = se(ye), Ee = Pe.resolve, re = Pe.reject, we = L(function() {
            var be = E(ye.resolve), Ce = [], Oe = 0, Et = 1;
            R(xe, function(Xe) {
              var Qe = Oe++, We = !1;
              Ce.push(void 0), Et++, be.call(ye, Xe).then(function(Ut) {
                We || (We = !0, Ce[Qe] = Ut, --Et || Ee(Ce));
              }, re);
            }), --Et || Ee(Ce);
          });
          return we.error && re(we.value), Pe.promise;
        },
        race: function(xe) {
          var ye = this, Pe = se(ye), Ee = Pe.reject, re = L(function() {
            var we = E(ye.resolve);
            R(xe, function(be) {
              we.call(ye, be).then(Pe.resolve, Ee);
            });
          });
          return re.error && Ee(re.value), Pe.promise;
        }
      });
    }, function(l, o, t) {
      var s = t(8), u = t(71).f, d = t(33), f = t(116).set, c = t(117), S = s.MutationObserver || s.WebKitMutationObserver, p = s.process, C = s.Promise, A = d(p) == "process", y = u(s, "queueMicrotask"), E = y && y.value, x, w, T, R, I, P, F, H;
      E || (x = function() {
        var j, z;
        for (A && (j = p.domain) && j.exit(); w; ) {
          z = w.fn, w = w.next;
          try {
            z();
          } catch (L) {
            throw w ? R() : T = void 0, L;
          }
        }
        T = void 0, j && j.enter();
      }, A ? R = function() {
        p.nextTick(x);
      } : S && !c ? (I = !0, P = document.createTextNode(""), new S(x).observe(P, { characterData: !0 }), R = function() {
        P.data = I = !I;
      }) : C && C.resolve ? (F = C.resolve(void 0), H = F.then, R = function() {
        H.call(F, x);
      }) : R = function() {
        f.call(s, x);
      }), l.exports = E || function(W) {
        var j = { fn: W, next: void 0 };
        T && (T.next = j), w || (w = j, R()), T = j;
      };
    }, function(l, o, t) {
      var s = t(8);
      l.exports = function(u, d) {
        var f = s.console;
        f && f.error && (arguments.length === 1 ? f.error(u) : f.error(u, d));
      };
    }, function(l, o, t) {
      var s = t(5), u = t(40), d = t(85), f = t(119), c = t(66);
      s({ target: "Promise", stat: !0 }, { allSettled: function(p) {
        var C = this, A = d.f(C), y = A.resolve, E = A.reject, x = f(function() {
          var w = u(C.resolve), T = [], R = 0, I = 1;
          c(p, function(P) {
            var F = R++, H = !1;
            T.push(void 0), I++, w.call(C, P).then(function(W) {
              H || (H = !0, T[F] = { status: "fulfilled", value: W }, --I || y(T));
            }, function(W) {
              H || (H = !0, T[F] = { status: "rejected", reason: W }, --I || y(T));
            });
          }), --I || y(T);
        });
        return x.error && E(x.value), A.promise;
      } });
    }, function(l, o, t) {
      var s = t(5), u = t(42), d = t(108), f = t(11), c = t(35), S = t(115), p = t(118), C = t(53), A = !!d && f(function() {
        d.prototype.finally.call({ then: function() {
        } }, function() {
        });
      });
      s({ target: "Promise", proto: !0, real: !0, forced: A }, { finally: function(E) {
        var x = S(this, c("Promise")), w = typeof E == "function";
        return this.then(w ? function(T) {
          return p(x, E()).then(function() {
            return T;
          });
        } : E, w ? function(T) {
          return p(x, E()).then(function() {
            throw T;
          });
        } : E);
      } }), !u && typeof d == "function" && !d.prototype.finally && C(d.prototype, "finally", c("Promise").prototype.finally);
    }, function(l, o, t) {
      t(54);
      var s = t(181), u = t(65), d = Array.prototype, f = { DOMTokenList: !0, NodeList: !0 };
      l.exports = function(c) {
        var S = c.forEach;
        return c === d || c instanceof Array && S === d.forEach || f.hasOwnProperty(u(c)) ? s : S;
      };
    }, function(l, o, t) {
      var s = t(182);
      l.exports = s;
    }, function(l, o, t) {
      t(183);
      var s = t(15);
      l.exports = s("Array").forEach;
    }, function(l, o, t) {
      var s = t(5), u = t(184);
      s({ target: "Array", proto: !0, forced: [].forEach != u }, { forEach: u });
    }, function(l, o, t) {
      var s = t(30).forEach, u = t(67), d = t(22), f = u("forEach"), c = d("forEach");
      l.exports = !f || !c ? function(p) {
        return s(this, p, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }, function(l, o, t) {
      var s = t(186);
      l.exports = s;
    }, function(l, o, t) {
      t(187);
      var s = t(9);
      l.exports = s.Array.isArray;
    }, function(l, o, t) {
      var s = t(5), u = t(55);
      s({ target: "Array", stat: !0 }, { isArray: u });
    }, function(l, o, t) {
      var s = t(189);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(190), u = Array.prototype;
      l.exports = function(d) {
        var f = d.map;
        return d === u || d instanceof Array && f === u.map ? s : f;
      };
    }, function(l, o, t) {
      t(191);
      var s = t(15);
      l.exports = s("Array").map;
    }, function(l, o, t) {
      var s = t(5), u = t(30).map, d = t(56), f = t(22), c = d("map"), S = f("map");
      s({ target: "Array", proto: !0, forced: !c || !S }, { map: function(C) {
        return u(this, C, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(193);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(194), u = String.prototype;
      l.exports = function(d) {
        var f = d.trim;
        return typeof d == "string" || d === u || d instanceof String && f === u.trim ? s : f;
      };
    }, function(l, o, t) {
      t(195);
      var s = t(15);
      l.exports = s("String").trim;
    }, function(l, o, t) {
      var s = t(5), u = t(90).trim, d = t(196);
      s({ target: "String", proto: !0, forced: d("trim") }, { trim: function() {
        return u(this);
      } });
    }, function(l, o, t) {
      var s = t(11), u = t(68), d = "\u200B\x85\u180E";
      l.exports = function(f) {
        return s(function() {
          return !!u[f]() || d[f]() != d || u[f].name !== f;
        });
      };
    }, function(l, o, t) {
      var s = t(198);
      l.exports = s;
    }, function(l, o, t) {
      t(199), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Map;
    }, function(l, o, t) {
      var s = t(121), u = t(123);
      l.exports = s("Map", function(d) {
        return function() {
          return d(this, arguments.length ? arguments[0] : void 0);
        };
      }, u);
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, function(l, o, t) {
      var s = t(202);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(203), u = Array.prototype;
      l.exports = function(d) {
        var f = d.indexOf;
        return d === u || d instanceof Array && f === u.indexOf ? s : f;
      };
    }, function(l, o, t) {
      t(204);
      var s = t(15);
      l.exports = s("Array").indexOf;
    }, function(l, o, t) {
      var s = t(5), u = t(78).indexOf, d = t(67), f = t(22), c = [].indexOf, S = !!c && 1 / [1].indexOf(1, -0) < 0, p = d("indexOf"), C = f("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: S || !p || !C }, { indexOf: function(y) {
        return S ? c.apply(this, arguments) || 0 : u(this, y, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(206);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(207), u = Array.prototype;
      l.exports = function(d) {
        var f = d.splice;
        return d === u || d instanceof Array && f === u.splice ? s : f;
      };
    }, function(l, o, t) {
      t(208);
      var s = t(15);
      l.exports = s("Array").splice;
    }, function(l, o, t) {
      var s = t(5), u = t(79), d = t(62), f = t(34), c = t(29), S = t(88), p = t(69), C = t(56), A = t(22), y = C("splice"), E = A("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), x = Math.max, w = Math.min, T = 9007199254740991, R = "Maximum allowed length exceeded";
      s({ target: "Array", proto: !0, forced: !y || !E }, { splice: function(P, F) {
        var H = c(this), W = f(H.length), j = u(P, W), z = arguments.length, L, $, B, k, M, Y;
        if (z === 0 ? L = $ = 0 : z === 1 ? (L = 0, $ = W - j) : (L = z - 2, $ = w(x(d(F), 0), W - j)), W + L - $ > T)
          throw TypeError(R);
        for (B = S(H, $), k = 0; k < $; k++)
          M = j + k, M in H && p(B, k, H[M]);
        if (B.length = $, L < $) {
          for (k = j; k < W - $; k++)
            M = k + $, Y = k + L, M in H ? H[Y] = H[M] : delete H[Y];
          for (k = W; k > W - $ + L; k--)
            delete H[k - 1];
        } else if (L > $)
          for (k = W - $; k > j; k--)
            M = k + $ - 1, Y = k + L - 1, M in H ? H[Y] = H[M] : delete H[Y];
        for (k = 0; k < L; k++)
          H[k + j] = arguments[k + 2];
        return H.length = W - $ + L, B;
      } });
    }, function(l, o, t) {
      var s = t(210);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(211), u = Array.prototype;
      l.exports = function(d) {
        var f = d.filter;
        return d === u || d instanceof Array && f === u.filter ? s : f;
      };
    }, function(l, o, t) {
      t(212);
      var s = t(15);
      l.exports = s("Array").filter;
    }, function(l, o, t) {
      var s = t(5), u = t(30).filter, d = t(56), f = t(22), c = d("filter"), S = f("filter");
      s({ target: "Array", proto: !0, forced: !c || !S }, { filter: function(C) {
        return u(this, C, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(214);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(215), u = t(217), d = Array.prototype, f = String.prototype;
      l.exports = function(c) {
        var S = c.includes;
        return c === d || c instanceof Array && S === d.includes ? s : typeof c == "string" || c === f || c instanceof String && S === f.includes ? u : S;
      };
    }, function(l, o, t) {
      t(216);
      var s = t(15);
      l.exports = s("Array").includes;
    }, function(l, o, t) {
      var s = t(5), u = t(78).includes, d = t(82), f = t(22), c = f("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: !c }, { includes: function(p) {
        return u(this, p, arguments.length > 1 ? arguments[1] : void 0);
      } }), d("includes");
    }, function(l, o, t) {
      t(218);
      var s = t(15);
      l.exports = s("String").includes;
    }, function(l, o, t) {
      var s = t(5), u = t(219), d = t(49), f = t(221);
      s({ target: "String", proto: !0, forced: !f("includes") }, { includes: function(S) {
        return !!~String(d(this)).indexOf(u(S), arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(220);
      l.exports = function(u) {
        if (s(u))
          throw TypeError("The method doesn't accept regular expressions");
        return u;
      };
    }, function(l, o, t) {
      var s = t(13), u = t(33), d = t(10), f = d("match");
      l.exports = function(c) {
        var S;
        return s(c) && ((S = c[f]) !== void 0 ? !!S : u(c) == "RegExp");
      };
    }, function(l, o, t) {
      var s = t(10), u = s("match");
      l.exports = function(d) {
        var f = /./;
        try {
          "/./"[d](f);
        } catch {
          try {
            return f[u] = !1, "/./"[d](f);
          } catch {
          }
        }
        return !1;
      };
    }, function(l, o, t) {
      var s = t(223);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(224), u = Function.prototype;
      l.exports = function(d) {
        var f = d.bind;
        return d === u || d instanceof Function && f === u.bind ? s : f;
      };
    }, function(l, o, t) {
      t(225);
      var s = t(15);
      l.exports = s("Function").bind;
    }, function(l, o, t) {
      var s = t(5), u = t(226);
      s({ target: "Function", proto: !0 }, { bind: u });
    }, function(l, o, t) {
      var s = t(40), u = t(13), d = [].slice, f = {}, c = function(p, C, A) {
        if (!(C in f)) {
          for (var y = [], E = 0; E < C; E++)
            y[E] = "a[" + E + "]";
          f[C] = Function("C,a", "return new C(" + y.join(",") + ")");
        }
        return f[C](p, A);
      };
      l.exports = Function.bind || function(p) {
        var C = s(this), A = d.call(arguments, 1), y = function() {
          var x = A.concat(d.call(arguments));
          return this instanceof y ? c(C, x.length, x) : C.apply(p, x);
        };
        return u(C.prototype) && (y.prototype = C.prototype), y;
      };
    }, function(l, o, t) {
      l.exports = t(228);
    }, function(l, o, t) {
      var s = t(229);
      l.exports = s;
    }, function(l, o, t) {
      t(124), t(50), t(54);
      var s = t(93);
      l.exports = s.f("iterator");
    }, function(l, o, t) {
      l.exports = t(231);
    }, function(l, o, t) {
      var s = t(232);
      t(251), t(252), t(253), t(254), t(255), l.exports = s;
    }, function(l, o, t) {
      t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(124), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
      var s = t(9);
      l.exports = s.Symbol;
    }, function(l, o, t) {
      var s = t(5), u = t(11), d = t(55), f = t(13), c = t(29), S = t(34), p = t(69), C = t(88), A = t(56), y = t(10), E = t(86), x = y("isConcatSpreadable"), w = 9007199254740991, T = "Maximum allowed index exceeded", R = E >= 51 || !u(function() {
        var H = [];
        return H[x] = !1, H.concat()[0] !== H;
      }), I = A("concat"), P = function(W) {
        if (!f(W))
          return !1;
        var j = W[x];
        return j !== void 0 ? !!j : d(W);
      }, F = !R || !I;
      s({ target: "Array", proto: !0, forced: F }, { concat: function(W) {
        var j = c(this), z = C(j, 0), L = 0, $, B, k, M, Y;
        for ($ = -1, k = arguments.length; $ < k; $++)
          if (Y = $ === -1 ? j : arguments[$], P(Y)) {
            if (M = S(Y.length), L + M > w)
              throw TypeError(T);
            for (B = 0; B < M; B++, L++)
              B in Y && p(z, L, Y[B]);
          } else {
            if (L >= w)
              throw TypeError(T);
            p(z, L++, Y);
          }
        return z.length = L, z;
      } });
    }, function(l, o, t) {
      var s = t(5), u = t(8), d = t(35), f = t(42), c = t(14), S = t(76), p = t(105), C = t(11), A = t(16), y = t(55), E = t(13), x = t(25), w = t(29), T = t(28), R = t(60), I = t(48), P = t(77), F = t(52), H = t(125), W = t(235), j = t(126), z = t(71), L = t(18), $ = t(59), B = t(19), k = t(53), M = t(74), Y = t(63), Q = t(51), Z = t(64), te = t(10), q = t(93), ne = t(12), fe = t(36), me = t(41), pe = t(30).forEach, ve = Y("hidden"), se = "Symbol", ae = "prototype", ue = te("toPrimitive"), ce = me.set, Fe = me.getterFor(se), De = Object[ae], Be = u.Symbol, gt = d("JSON", "stringify"), Nt = z.f, Ze = L.f, dt = W.f, vt = $.f, Me = M("symbols"), mt = M("op-symbols"), Wt = M("string-to-symbol-registry"), xt = M("symbol-to-string-registry"), gn = M("wks"), Xt = u.QObject, Lt = !Xt || !Xt[ae] || !Xt[ae].findChild, Ft = c && C(function() {
        return P(Ze({}, "a", { get: function() {
          return Ze(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(Ee, re, we) {
        var be = Nt(De, re);
        be && delete De[re], Ze(Ee, re, we), be && Ee !== De && Ze(De, re, be);
      } : Ze, Jt = function(re, we) {
        var be = Me[re] = P(Be[ae]);
        return ce(be, { type: se, tag: re, description: we }), c || (be.description = we), be;
      }, Ot = p ? function(Ee) {
        return _typeof(Ee) == "symbol";
      } : function(Ee) {
        return Object(Ee) instanceof Be;
      }, $t = function(re, we, be) {
        re === De && $t(mt, we, be), x(re);
        var Ce = R(we, !0);
        return x(be), A(Me, Ce) ? (be.enumerable ? (A(re, ve) && re[ve][Ce] && (re[ve][Ce] = !1), be = P(be, { enumerable: I(0, !1) })) : (A(re, ve) || Ze(re, ve, I(1, {})), re[ve][Ce] = !0), Ft(re, Ce, be)) : Ze(re, Ce, be);
      }, rt = function(re, we) {
        x(re);
        var be = T(we), Ce = F(be).concat(ye(be));
        return pe(Ce, function(Oe) {
          (!c || It.call(be, Oe)) && $t(re, Oe, be[Oe]);
        }), re;
      }, je = function(re, we) {
        return we === void 0 ? P(re) : rt(P(re), we);
      }, It = function(re) {
        var we = R(re, !0), be = vt.call(this, we);
        return this === De && A(Me, we) && !A(mt, we) ? !1 : be || !A(this, we) || !A(Me, we) || A(this, ve) && this[ve][we] ? be : !0;
      }, $e = function(re, we) {
        var be = T(re), Ce = R(we, !0);
        if (!(be === De && A(Me, Ce) && !A(mt, Ce))) {
          var Oe = Nt(be, Ce);
          return Oe && A(Me, Ce) && !(A(be, ve) && be[ve][Ce]) && (Oe.enumerable = !0), Oe;
        }
      }, xe = function(re) {
        var we = dt(T(re)), be = [];
        return pe(we, function(Ce) {
          !A(Me, Ce) && !A(Q, Ce) && be.push(Ce);
        }), be;
      }, ye = function(re) {
        var we = re === De, be = dt(we ? mt : T(re)), Ce = [];
        return pe(be, function(Oe) {
          A(Me, Oe) && (!we || A(De, Oe)) && Ce.push(Me[Oe]);
        }), Ce;
      };
      if (S || (Be = function() {
        if (this instanceof Be)
          throw TypeError("Symbol is not a constructor");
        var re = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), we = Z(re), be = function Ce(Oe) {
          this === De && Ce.call(mt, Oe), A(this, ve) && A(this[ve], we) && (this[ve][we] = !1), Ft(this, we, I(1, Oe));
        };
        return c && Lt && Ft(De, we, { configurable: !0, set: be }), Jt(we, re);
      }, k(Be[ae], "toString", function() {
        return Fe(this).tag;
      }), k(Be, "withoutSetter", function(Ee) {
        return Jt(Z(Ee), Ee);
      }), $.f = It, L.f = $t, z.f = $e, H.f = W.f = xe, j.f = ye, q.f = function(Ee) {
        return Jt(te(Ee), Ee);
      }, c && (Ze(Be[ae], "description", { configurable: !0, get: function() {
        return Fe(this).description;
      } }), f || k(De, "propertyIsEnumerable", It, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !S, sham: !S }, { Symbol: Be }), pe(F(gn), function(Ee) {
        ne(Ee);
      }), s({ target: se, stat: !0, forced: !S }, {
        for: function(re) {
          var we = String(re);
          if (A(Wt, we))
            return Wt[we];
          var be = Be(we);
          return Wt[we] = be, xt[be] = we, be;
        },
        keyFor: function(re) {
          if (!Ot(re))
            throw TypeError(re + " is not a symbol");
          if (A(xt, re))
            return xt[re];
        },
        useSetter: function() {
          Lt = !0;
        },
        useSimple: function() {
          Lt = !1;
        }
      }), s({ target: "Object", stat: !0, forced: !S, sham: !c }, {
        create: je,
        defineProperty: $t,
        defineProperties: rt,
        getOwnPropertyDescriptor: $e
      }), s({ target: "Object", stat: !0, forced: !S }, {
        getOwnPropertyNames: xe,
        getOwnPropertySymbols: ye
      }), s({ target: "Object", stat: !0, forced: C(function() {
        j.f(1);
      }) }, { getOwnPropertySymbols: function(re) {
        return j.f(w(re));
      } }), gt) {
        var Pe = !S || C(function() {
          var Ee = Be();
          return gt([Ee]) != "[null]" || gt({ a: Ee }) != "{}" || gt(Object(Ee)) != "{}";
        });
        s({ target: "JSON", stat: !0, forced: Pe }, {
          stringify: function(re, we, be) {
            for (var Ce = [re], Oe = 1, Et; arguments.length > Oe; )
              Ce.push(arguments[Oe++]);
            if (Et = we, !(!E(we) && re === void 0 || Ot(re)))
              return y(we) || (we = function(Qe, We) {
                if (typeof Et == "function" && (We = Et.call(this, Qe, We)), !Ot(We))
                  return We;
              }), Ce[1] = we, gt.apply(null, Ce);
          }
        });
      }
      Be[ae][ue] || B(Be[ae], ue, Be[ae].valueOf), fe(Be, se), Q[ve] = !0;
    }, function(l, o, t) {
      var s = t(28), u = t(125).f, d = {}.toString, f = (typeof window > "u" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], c = function(p) {
        try {
          return u(p);
        } catch {
          return f.slice();
        }
      };
      l.exports.f = function(p) {
        return f && d.call(p) == "[object Window]" ? c(p) : u(s(p));
      };
    }, function(l, o, t) {
      var s = t(12);
      s("asyncIterator");
    }, function(l, o) {
    }, function(l, o, t) {
      var s = t(12);
      s("hasInstance");
    }, function(l, o, t) {
      var s = t(12);
      s("isConcatSpreadable");
    }, function(l, o, t) {
      var s = t(12);
      s("match");
    }, function(l, o, t) {
      var s = t(12);
      s("matchAll");
    }, function(l, o, t) {
      var s = t(12);
      s("replace");
    }, function(l, o, t) {
      var s = t(12);
      s("search");
    }, function(l, o, t) {
      var s = t(12);
      s("species");
    }, function(l, o, t) {
      var s = t(12);
      s("split");
    }, function(l, o, t) {
      var s = t(12);
      s("toPrimitive");
    }, function(l, o, t) {
      var s = t(12);
      s("toStringTag");
    }, function(l, o, t) {
      var s = t(12);
      s("unscopables");
    }, function(l, o, t) {
      var s = t(36);
      s(Math, "Math", !0);
    }, function(l, o, t) {
      var s = t(8), u = t(36);
      u(s.JSON, "JSON", !0);
    }, function(l, o, t) {
      var s = t(12);
      s("asyncDispose");
    }, function(l, o, t) {
      var s = t(12);
      s("dispose");
    }, function(l, o, t) {
      var s = t(12);
      s("observable");
    }, function(l, o, t) {
      var s = t(12);
      s("patternMatch");
    }, function(l, o, t) {
      var s = t(12);
      s("replaceAll");
    }, function(l, o, t) {
      l.exports = t(257);
    }, function(l, o, t) {
      var s = t(258);
      l.exports = s;
    }, function(l, o, t) {
      t(259);
      var s = t(9);
      l.exports = s.parseInt;
    }, function(l, o, t) {
      var s = t(5), u = t(260);
      s({ global: !0, forced: parseInt != u }, { parseInt: u });
    }, function(l, o, t) {
      var s = t(8), u = t(90).trim, d = t(68), f = s.parseInt, c = /^[+-]?0[Xx]/, S = f(d + "08") !== 8 || f(d + "0x16") !== 22;
      l.exports = S ? function(C, A) {
        var y = u(String(C));
        return f(y, A >>> 0 || (c.test(y) ? 16 : 10));
      } : f;
    }, function(l, o, t) {
      var s = t(262);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(263), u = Array.prototype;
      l.exports = function(d) {
        var f = d.slice;
        return d === u || d instanceof Array && f === u.slice ? s : f;
      };
    }, function(l, o, t) {
      t(264);
      var s = t(15);
      l.exports = s("Array").slice;
    }, function(l, o, t) {
      var s = t(5), u = t(13), d = t(55), f = t(79), c = t(34), S = t(28), p = t(69), C = t(10), A = t(56), y = t(22), E = A("slice"), x = y("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), w = C("species"), T = [].slice, R = Math.max;
      s({ target: "Array", proto: !0, forced: !E || !x }, { slice: function(P, F) {
        var H = S(this), W = c(H.length), j = f(P, W), z = f(F === void 0 ? W : F, W), L, $, B;
        if (d(H) && (L = H.constructor, typeof L == "function" && (L === Array || d(L.prototype)) ? L = void 0 : u(L) && (L = L[w], L === null && (L = void 0)), L === Array || L === void 0))
          return T.call(H, j, z);
        for ($ = new (L === void 0 ? Array : L)(R(z - j, 0)), B = 0; j < z; j++, B++)
          j in H && p($, B, H[j]);
        return $.length = B, $;
      } });
    }, function(l, o, t) {
      t(266);
      var s = t(9);
      l.exports = s.setTimeout;
    }, function(l, o, t) {
      var s = t(5), u = t(8), d = t(84), f = [].slice, c = /MSIE .\./.test(d), S = function(C) {
        return function(A, y) {
          var E = arguments.length > 2, x = E ? f.call(arguments, 2) : void 0;
          return C(E ? function() {
            (typeof A == "function" ? A : Function(A)).apply(this, x);
          } : A, y);
        };
      };
      s({ global: !0, bind: !0, forced: c }, {
        setTimeout: S(u.setTimeout),
        setInterval: S(u.setInterval)
      });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(127));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(272)), S = f.__importDefault(t(273)), p = f.__importDefault(t(128)), C = f.__importDefault(t(274)), A = f.__importDefault(t(275)), y = f.__importDefault(t(276)), E = f.__importDefault(t(129)), x = f.__importDefault(t(277)), w = f.__importDefault(t(278)), T = f.__importDefault(t(279)), R = (0, d.default)(
        {},
        c.default,
        S.default,
        p.default,
        A.default,
        C.default,
        y.default,
        E.default,
        x.default,
        w.default,
        T.default,
        { linkCheck: function(P, F) {
          return !0;
        } }
      );
      o.default = R;
    }, function(l, o, t) {
      var s = t(269);
      l.exports = s;
    }, function(l, o, t) {
      t(270);
      var s = t(9);
      l.exports = s.Object.assign;
    }, function(l, o, t) {
      var s = t(5), u = t(271);
      s({ target: "Object", stat: !0, forced: Object.assign !== u }, { assign: u });
    }, function(l, o, t) {
      var s = t(14), u = t(11), d = t(52), f = t(126), c = t(59), S = t(29), p = t(72), C = Object.assign, A = Object.defineProperty;
      l.exports = !C || u(function() {
        if (s && C({ b: 1 }, C(A({}, "a", { enumerable: !0, get: function() {
          A(this, "b", { value: 3, enumerable: !1 });
        } }), { b: 2 })).b !== 1)
          return !0;
        var y = {}, E = {}, x = Symbol(), w = "abcdefghijklmnopqrst";
        return y[x] = 7, w.split("").forEach(function(T) {
          E[T] = T;
        }), C({}, y)[x] != 7 || d(C({}, E)).join("") != w;
      }) ? function(E, x) {
        for (var w = S(E), T = arguments.length, R = 1, I = f.f, P = c.f; T > R; )
          for (var F = p(arguments[R++]), H = I ? d(F).concat(I(F)) : d(F), W = H.length, j = 0, z; W > j; )
            z = H[j++], (!s || P.call(F, z)) && (w[z] = F[z]);
        return w;
      } : C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = {
        menus: [
          "head",
          "bold",
          "fontSize",
          "fontName",
          "italic",
          "underline",
          "strikeThrough",
          "indent",
          "lineHeight",
          "foreColor",
          "backColor",
          "link",
          "list",
          "todo",
          "justify",
          "quote",
          "emoticon",
          "image",
          "video",
          "table",
          "code",
          "splitLine",
          "undo",
          "redo"
        ],
        fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
        fontSizes: { "x-small": { name: "10px", value: "1" }, small: { name: "13px", value: "2" }, normal: { name: "16px", value: "3" }, large: { name: "18px", value: "4" }, "x-large": { name: "24px", value: "5" }, "xx-large": { name: "32px", value: "6" }, "xxx-large": { name: "48px", value: "7" } },
        colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
        languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
        languageTab: "\u3000\u3000\u3000\u3000",
        emotions: [{
          title: "\u8868\u60C5",
          type: "emoji",
          content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
        }, {
          title: "\u624B\u52BF",
          type: "emoji",
          content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
        }],
        lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
        undoLimit: 20,
        indentation: "2em",
        showMenuTooltips: !0,
        menuTooltipPosition: "up"
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      function f(c, S, p) {
        window.alert(c), p && console.error("wangEditor: " + p);
      }
      o.default = { onchangeTimeout: 200, onchange: null, onfocus: d.EMPTY_FN, onblur: d.EMPTY_FN, onCatalogChange: null, customAlert: f };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = {
        pasteFilterStyle: !0,
        pasteIgnoreImg: !1,
        pasteTextHandle: function(f) {
          return f;
        }
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { styleWithCSS: !1 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      o.default = {
        linkImgCheck: function(c, S, p) {
          return !0;
        },
        showLinkImg: !0,
        showLinkImgAlt: !0,
        showLinkImgHref: !0,
        linkImgCallback: d.EMPTY_FN,
        uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
        uploadImgServer: "",
        uploadImgShowBase64: !1,
        uploadImgMaxSize: 5 * 1024 * 1024,
        uploadImgMaxLength: 100,
        uploadFileName: "",
        uploadImgParams: {},
        uploadImgParamsWithUrl: !1,
        uploadImgHeaders: {},
        uploadImgHooks: {},
        uploadImgTimeout: 10 * 1e3,
        withCredentials: !1,
        customUploadImg: null,
        uploadImgFromMedia: null
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { lang: "zh-CN", languages: { "zh-CN": { wangEditor: { \u91CD\u7F6E: "\u91CD\u7F6E", \u63D2\u5165: "\u63D2\u5165", \u9ED8\u8BA4: "\u9ED8\u8BA4", \u521B\u5EFA: "\u521B\u5EFA", \u4FEE\u6539: "\u4FEE\u6539", \u5982: "\u5982", \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587", menus: { title: { \u6807\u9898: "\u6807\u9898", \u52A0\u7C97: "\u52A0\u7C97", \u5B57\u53F7: "\u5B57\u53F7", \u5B57\u4F53: "\u5B57\u4F53", \u659C\u4F53: "\u659C\u4F53", \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF", \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF", \u7F29\u8FDB: "\u7F29\u8FDB", \u884C\u9AD8: "\u884C\u9AD8", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u80CC\u666F\u8272: "\u80CC\u666F\u8272", \u94FE\u63A5: "\u94FE\u63A5", \u5E8F\u5217: "\u5E8F\u5217", \u5BF9\u9F50: "\u5BF9\u9F50", \u5F15\u7528: "\u5F15\u7528", \u8868\u60C5: "\u8868\u60C5", \u56FE\u7247: "\u56FE\u7247", \u89C6\u9891: "\u89C6\u9891", \u8868\u683C: "\u8868\u683C", \u4EE3\u7801: "\u4EE3\u7801", \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF", \u6062\u590D: "\u6062\u590D", \u64A4\u9500: "\u64A4\u9500", \u5168\u5C4F: "\u5168\u5C4F", \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F", \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898", \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7", \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53", \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB", \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F", \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8", \u5E8F\u5217: "\u5E8F\u5217", head: { \u6B63\u6587: "\u6B63\u6587" }, indent: { \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB", \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB" }, justify: { \u9760\u5DE6: "\u9760\u5DE6", \u5C45\u4E2D: "\u5C45\u4E2D", \u9760\u53F3: "\u9760\u53F3", \u4E24\u7AEF: "\u4E24\u7AEF" }, list: { \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868", \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868" } }, panelMenus: { emoticon: { \u9ED8\u8BA4: "\u9ED8\u8BA4", \u65B0\u6D6A: "\u65B0\u6D6A", emoji: "emoji", \u624B\u52BF: "\u624B\u52BF" }, image: { \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247", \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247", \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E", \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5" }, link: { \u94FE\u63A5: "\u94FE\u63A5", \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57", \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5", \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5" }, video: { \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891" }, table: { \u884C: "\u884C", \u5217: "\u5217", \u7684: "\u7684", \u8868\u683C: "\u8868\u683C", \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C", \u5220\u9664\u884C: "\u5220\u9664\u884C", \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217", \u5220\u9664\u5217: "\u5220\u9664\u5217", \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934", \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934", \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C", \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C" }, code: { \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801", \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801", \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801" } } }, validate: { \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247", \u5927\u4E8E: "\u5927\u4E8E", \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5", \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247", \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF", \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5", \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7", \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF" } } }, en: { wangEditor: { \u91CD\u7F6E: "reset", \u63D2\u5165: "insert", \u9ED8\u8BA4: "default", \u521B\u5EFA: "create", \u4FEE\u6539: "edit", \u5982: "like", \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text", menus: { title: { \u6807\u9898: "head", \u52A0\u7C97: "bold", \u5B57\u53F7: "font size", \u5B57\u4F53: "font family", \u659C\u4F53: "italic", \u4E0B\u5212\u7EBF: "underline", \u5220\u9664\u7EBF: "strikethrough", \u7F29\u8FDB: "indent", \u884C\u9AD8: "line heihgt", \u6587\u5B57\u989C\u8272: "font color", \u80CC\u666F\u8272: "background", \u94FE\u63A5: "link", \u5E8F\u5217: "numbered list", \u5BF9\u9F50: "align", \u5F15\u7528: "quote", \u8868\u60C5: "emoticons", \u56FE\u7247: "image", \u89C6\u9891: "media", \u8868\u683C: "table", \u4EE3\u7801: "code", \u5206\u5272\u7EBF: "split line", \u6062\u590D: "undo", \u64A4\u9500: "redo", \u5168\u5C4F: "fullscreen", \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen", \u5F85\u529E\u4E8B\u9879: "todo" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "title", \u80CC\u666F\u989C\u8272: "background", \u6587\u5B57\u989C\u8272: "font color", \u8BBE\u7F6E\u5B57\u53F7: "font size", \u8BBE\u7F6E\u5B57\u4F53: "font family", \u8BBE\u7F6E\u7F29\u8FDB: "indent", \u5BF9\u9F50\u65B9\u5F0F: "align", \u8BBE\u7F6E\u884C\u9AD8: "line heihgt", \u5E8F\u5217: "list", head: { \u6B63\u6587: "text" }, indent: { \u589E\u52A0\u7F29\u8FDB: "indent", \u51CF\u5C11\u7F29\u8FDB: "outdent" }, justify: { \u9760\u5DE6: "left", \u5C45\u4E2D: "center", \u9760\u53F3: "right", \u4E24\u7AEF: "justify" }, list: { \u65E0\u5E8F\u5217\u8868: "unordered", \u6709\u5E8F\u5217\u8868: "ordered" } }, panelMenus: { emoticon: { \u8868\u60C5: "emoji", \u624B\u52BF: "gesture" }, image: { \u4E0A\u4F20\u56FE\u7247: "upload image", \u7F51\u7EDC\u56FE\u7247: "network image", \u56FE\u7247\u5730\u5740: "image link", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt", \u8DF3\u8F6C\u94FE\u63A5: "hyperlink" }, link: { \u94FE\u63A5: "link", \u94FE\u63A5\u6587\u5B57: "link text", \u53D6\u6D88\u94FE\u63A5: "unlink", \u67E5\u770B\u94FE\u63A5: "view links" }, video: { \u63D2\u5165\u89C6\u9891: "insert video", \u4E0A\u4F20\u89C6\u9891: "upload local video" }, table: { \u884C: "rows", \u5217: "columns", \u7684: " ", \u8868\u683C: "table", \u6DFB\u52A0\u884C: "insert row", \u5220\u9664\u884C: "delete row", \u6DFB\u52A0\u5217: "insert column", \u5220\u9664\u5217: "delete column", \u8BBE\u7F6E\u8868\u5934: "set header", \u53D6\u6D88\u8868\u5934: "cancel header", \u63D2\u5165\u8868\u683C: "insert table", \u5220\u9664\u8868\u683C: "delete table" }, code: { \u5220\u9664\u4EE3\u7801: "delete code", \u4FEE\u6539\u4EE3\u7801: "edit code", \u63D2\u5165\u4EE3\u7801: "insert code" } } }, validate: { \u5F20\u56FE\u7247: "images", \u5927\u4E8E: "greater than", \u56FE\u7247\u94FE\u63A5: "image link", \u4E0D\u662F\u56FE\u7247: "is not image", \u8FD4\u56DE\u7ED3\u679C: "return results", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error", \u89C6\u9891\u94FE\u63A5: "video link", \u4E0D\u662F\u89C6\u9891: "is not video", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed", \u4E2A\u89C6\u9891: "videos", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error" } } } } };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function f() {
        return !!(d.UA.isIE() || d.UA.isOldEdge);
      }
      o.default = { compatibleMode: f, historyMaxSize: 30 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      o.default = {
        onlineVideoCheck: function(c) {
          return !0;
        },
        onlineVideoCallback: d.EMPTY_FN,
        showLinkVideo: !0,
        uploadVideoAccept: ["mp4"],
        uploadVideoServer: "",
        uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
        uploadVideoName: "",
        uploadVideoParams: {},
        uploadVideoParamsWithUrl: !1,
        uploadVideoHeaders: {},
        uploadVideoHooks: {},
        uploadVideoTimeout: 1e3 * 60 * 60 * 2,
        withVideoCredentials: !1,
        customUploadVideo: null,
        customInsertVideo: null
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(6), p = t(7), C = function() {
        function A(y) {
          this._currentRange = null, this.editor = y;
        }
        return A.prototype.getRange = function() {
          return this._currentRange;
        }, A.prototype.saveRange = function(y) {
          if (y) {
            this._currentRange = y;
            return;
          }
          var E = window.getSelection();
          if (E.rangeCount !== 0) {
            var x = E.getRangeAt(0), w = this.getSelectionContainerElem(x);
            if (!!(w != null && w.length) && !(w.attr("contenteditable") === "false" || w.parentUntil("[contenteditable=false]"))) {
              var T = this.editor, R = T.$textElem;
              if (R.isContain(w)) {
                if (R.elems[0] === w.elems[0]) {
                  var I;
                  if ((0, d.default)(I = R.html()).call(I) === p.EMPTY_P) {
                    var P = R.children(), F = P == null ? void 0 : P.last();
                    T.selection.createRangeByElem(F, !0, !0), T.selection.restoreSelection();
                  }
                }
                this._currentRange = x;
              }
            }
          }
        }, A.prototype.collapseRange = function(y) {
          y === void 0 && (y = !1);
          var E = this._currentRange;
          E && E.collapse(y);
        }, A.prototype.getSelectionText = function() {
          var y = this._currentRange;
          return y ? y.toString() : "";
        }, A.prototype.getSelectionContainerElem = function(y) {
          var E;
          E = y || this._currentRange;
          var x;
          if (E)
            return x = E.commonAncestorContainer, c.default(x.nodeType === 1 ? x : x.parentNode);
        }, A.prototype.getSelectionStartElem = function(y) {
          var E;
          E = y || this._currentRange;
          var x;
          if (E)
            return x = E.startContainer, c.default(x.nodeType === 1 ? x : x.parentNode);
        }, A.prototype.getSelectionEndElem = function(y) {
          var E;
          E = y || this._currentRange;
          var x;
          if (E)
            return x = E.endContainer, c.default(x.nodeType === 1 ? x : x.parentNode);
        }, A.prototype.isSelectionEmpty = function() {
          var y = this._currentRange;
          return !!(y && y.startContainer && y.startContainer === y.endContainer && y.startOffset === y.endOffset);
        }, A.prototype.restoreSelection = function() {
          var y = window.getSelection(), E = this._currentRange;
          y && E && (y.removeAllRanges(), y.addRange(E));
        }, A.prototype.createEmptyRange = function() {
          var y = this.editor, E = this.getRange(), x;
          if (!!E && !!this.isSelectionEmpty())
            try {
              S.UA.isWebkit() ? (y.cmd.do("insertHTML", "&#8203;"), E.setEnd(E.endContainer, E.endOffset + 1), this.saveRange(E)) : (x = c.default("<strong>&#8203;</strong>"), y.cmd.do("insertElem", x), this.createRangeByElem(x, !0));
            } catch {
            }
        }, A.prototype.createRangeByElems = function(y, E) {
          var x = window.getSelection ? window.getSelection() : document.getSelection();
          x == null || x.removeAllRanges();
          var w = document.createRange();
          w.setStart(y, 0), w.setEnd(E, E.childNodes.length || 1), this.saveRange(w), this.restoreSelection();
        }, A.prototype.createRangeByElem = function(y, E, x) {
          if (!!y.length) {
            var w = y.elems[0], T = document.createRange();
            x ? T.selectNodeContents(w) : T.selectNode(w), E != null && (T.collapse(E), E || (this.saveRange(T), this.editor.selection.moveCursor(w))), this.saveRange(T);
          }
        }, A.prototype.getSelectionRangeTopNodes = function() {
          var y, E, x, w = (y = this.getSelectionStartElem()) === null || y === void 0 ? void 0 : y.getNodeTop(this.editor), T = (E = this.getSelectionEndElem()) === null || E === void 0 ? void 0 : E.getNodeTop(this.editor);
          return x = this.recordSelectionNodes(c.default(w), c.default(T)), x;
        }, A.prototype.moveCursor = function(y, E) {
          var x, w = this.getRange(), T = y.nodeType === 3 ? (x = y.nodeValue) === null || x === void 0 ? void 0 : x.length : y.childNodes.length;
          (S.UA.isFirefox || S.UA.isIE()) && T !== 0 && (y.nodeType === 3 || y.childNodes[T - 1].nodeName === "BR") && (T = T - 1);
          var R = E != null ? E : T;
          !w || y && (w.setStart(y, R), w.setEnd(y, R), this.restoreSelection());
        }, A.prototype.getCursorPos = function() {
          var y = window.getSelection();
          return y == null ? void 0 : y.anchorOffset;
        }, A.prototype.clearWindowSelectionRange = function() {
          var y = window.getSelection();
          y && y.removeAllRanges();
        }, A.prototype.recordSelectionNodes = function(y, E) {
          var x = [], w = !0;
          try {
            for (var T = y, R = this.editor.$textElem; w; ) {
              var I = T == null ? void 0 : T.getNodeTop(this.editor);
              I.getNodeName() === "BODY" && (w = !1), I.length > 0 && (x.push(c.default(T)), (E == null ? void 0 : E.equal(I)) || R.equal(I) ? w = !1 : T = I.getNextSibling());
            }
          } catch {
            w = !1;
          }
          return x;
        }, A.prototype.setRangeToElem = function(y) {
          var E = this.getRange();
          E == null || E.setStart(y, 0), E == null || E.setEnd(y, 0);
        }, A;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = function() {
        function S(p) {
          this.editor = p;
        }
        return S.prototype.do = function(p, C) {
          var A = this.editor;
          A.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
          var y = A.selection;
          if (!!y.getRange()) {
            switch (y.restoreSelection(), p) {
              case "insertHTML":
                this.insertHTML(C);
                break;
              case "insertElem":
                this.insertElem(C);
                break;
              default:
                this.execCommand(p, C);
                break;
            }
            A.menus.changeActive(), y.saveRange(), y.restoreSelection();
          }
        }, S.prototype.insertHTML = function(p) {
          var C = this.editor, A = C.selection.getRange();
          if (A != null) {
            if (this.queryCommandSupported("insertHTML"))
              this.execCommand("insertHTML", p);
            else if (A.insertNode) {
              if (A.deleteContents(), f.default(p).elems.length > 0)
                A.insertNode(f.default(p).elems[0]);
              else {
                var y = document.createElement("p");
                y.appendChild(document.createTextNode(p)), A.insertNode(y);
              }
              C.selection.collapseRange();
            }
          }
        }, S.prototype.insertElem = function(p) {
          var C = this.editor, A = C.selection.getRange();
          A != null && A.insertNode && (A.deleteContents(), A.insertNode(p.elems[0]));
        }, S.prototype.execCommand = function(p, C) {
          document.execCommand(p, !1, C);
        }, S.prototype.queryCommandValue = function(p) {
          return document.queryCommandValue(p);
        }, S.prototype.queryCommandState = function(p) {
          return document.queryCommandState(p);
        }, S.prototype.queryCommandSupported = function(p) {
          return document.queryCommandSupported(p);
        }, S;
      }();
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31)), f = s(t(4)), c = s(t(17)), S = s(t(27)), p = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var C = t(2), A = C.__importDefault(t(3)), y = C.__importDefault(t(287)), E = t(6), x = C.__importDefault(t(299)), w = C.__importDefault(t(300)), T = t(7), R = function() {
        function I(P) {
          this.editor = P, this.eventHooks = { onBlurEvents: [], changeEvents: [], dropEvents: [], clickEvents: [], keydownEvents: [], keyupEvents: [], tabUpEvents: [], tabDownEvents: [], enterUpEvents: [], enterDownEvents: [], deleteUpEvents: [], deleteDownEvents: [], pasteEvents: [], linkClickEvents: [], codeClickEvents: [], textScrollEvents: [], toolbarClickEvents: [], imgClickEvents: [], imgDragBarMouseDownEvents: [], tableClickEvents: [], menuClickEvents: [], dropListMenuHoverEvents: [], splitLineEvents: [], videoClickEvents: [] };
        }
        return I.prototype.init = function() {
          this._saveRange(), this._bindEventHooks(), y.default(this);
        }, I.prototype.togglePlaceholder = function() {
          var P, F = this.html(), H = (0, d.default)(P = this.editor.$textContainerElem).call(P, ".placeholder");
          H.hide(), !this.editor.isComposing && (!F || F === " ") && H.show();
        }, I.prototype.clear = function() {
          this.html(T.EMPTY_P);
        }, I.prototype.html = function(P) {
          var F = this.editor, H = F.$textElem;
          if (P == null) {
            var W = H.html();
            W = W.replace(/\u200b/gm, ""), W = W.replace(/<p><\/p>/gim, ""), W = W.replace(T.EMPTY_P_LAST_REGEX, ""), W = W.replace(T.EMPTY_P_REGEX, "<p>");
            var j = W.match(/<(img|br|hr|input)[^>]*>/gi);
            return j !== null && (0, f.default)(j).call(j, function(z) {
              z.match(/\/>/) || (W = W.replace(z, z.substring(0, z.length - 1) + "/>"));
            }), W;
          }
          P = (0, c.default)(P).call(P), P === "" && (P = T.EMPTY_P), (0, S.default)(P).call(P, "<") !== 0 && (P = "<p>" + P + "</p>"), H.html(P), F.initSelection();
        }, I.prototype.setJSON = function(P) {
          var F = w.default(P).children(), H = this.editor, W = H.$textElem;
          !F || W.replaceChildAll(F);
        }, I.prototype.getJSON = function() {
          var P = this.editor, F = P.$textElem;
          return x.default(F);
        }, I.prototype.text = function(P) {
          var F = this.editor, H = F.$textElem;
          if (P == null) {
            var W = H.text();
            return W = W.replace(/\u200b/gm, ""), W;
          }
          H.text("<p>" + P + "</p>"), F.initSelection();
        }, I.prototype.append = function(P) {
          var F = this.editor;
          (0, S.default)(P).call(P, "<") !== 0 && (P = "<p>" + P + "</p>"), this.html(this.html() + P), F.initSelection();
        }, I.prototype._saveRange = function() {
          var P = this.editor, F = P.$textElem, H = A.default(document);
          function W() {
            P.selection.saveRange(), P.menus.changeActive();
          }
          F.on("keyup", W);
          function j() {
            W(), F.off("click", j);
          }
          F.on("click", j);
          function z() {
            W(), H.off("mouseup", z);
          }
          function L() {
            H.on("mouseup", z), F.off("mouseleave", L);
          }
          F.on("mousedown", function() {
            F.on("mouseleave", L);
          }), F.on("mouseup", function($) {
            F.off("mouseleave", L), (0, p.default)(function() {
              var B = P.selection, k = B.getRange();
              k !== null && W();
            }, 0);
          });
        }, I.prototype._bindEventHooks = function() {
          var P = this.editor, F = P.$textElem, H = this.eventHooks;
          F.on("click", function(j) {
            var z = H.clickEvents;
            (0, f.default)(z).call(z, function(L) {
              return L(j);
            });
          }), F.on("keyup", function(j) {
            if (j.keyCode === 13) {
              var z = H.enterUpEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on("keyup", function(j) {
            var z = H.keyupEvents;
            (0, f.default)(z).call(z, function(L) {
              return L(j);
            });
          }), F.on("keydown", function(j) {
            var z = H.keydownEvents;
            (0, f.default)(z).call(z, function(L) {
              return L(j);
            });
          }), F.on("keyup", function(j) {
            if (!(j.keyCode !== 8 && j.keyCode !== 46)) {
              var z = H.deleteUpEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on("keydown", function(j) {
            if (!(j.keyCode !== 8 && j.keyCode !== 46)) {
              var z = H.deleteDownEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on("paste", function(j) {
            if (!E.UA.isIE()) {
              j.preventDefault();
              var z = H.pasteEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on("keydown", function(j) {
            (P.isFocus || P.isCompatibleMode) && (j.ctrlKey || j.metaKey) && j.keyCode === 90 && (j.preventDefault(), j.shiftKey ? P.history.restore() : P.history.revoke());
          }), F.on("keyup", function(j) {
            if (j.keyCode === 9) {
              j.preventDefault();
              var z = H.tabUpEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on("keydown", function(j) {
            if (j.keyCode === 9) {
              j.preventDefault();
              var z = H.tabDownEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on(
            "scroll",
            E.throttle(function(j) {
              var z = H.textScrollEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }, 100)
          );
          function W(j) {
            j.preventDefault();
          }
          A.default(document).on("dragleave", W).on("drop", W).on("dragenter", W).on("dragover", W), P.beforeDestroy(function() {
            A.default(document).off("dragleave", W).off("drop", W).off("dragenter", W).off("dragover", W);
          }), F.on("drop", function(j) {
            j.preventDefault();
            var z = H.dropEvents;
            (0, f.default)(z).call(z, function(L) {
              return L(j);
            });
          }), F.on("click", function(j) {
            var z = null, L = j.target, $ = A.default(L);
            if ($.getNodeName() === "A")
              z = $;
            else {
              var B = $.parentUntil("a");
              B != null && (z = B);
            }
            if (!!z) {
              var k = H.linkClickEvents;
              (0, f.default)(k).call(k, function(M) {
                return M(z);
              });
            }
          }), F.on("click", function(j) {
            var z = null, L = j.target, $ = A.default(L);
            if ($.getNodeName() === "IMG" && !$.elems[0].getAttribute("data-emoji") && (j.stopPropagation(), z = $), !!z) {
              var B = H.imgClickEvents;
              (0, f.default)(B).call(B, function(k) {
                return k(z);
              });
            }
          }), F.on("click", function(j) {
            var z = null, L = j.target, $ = A.default(L);
            if ($.getNodeName() === "PRE")
              z = $;
            else {
              var B = $.parentUntil("pre");
              B !== null && (z = B);
            }
            if (!!z) {
              var k = H.codeClickEvents;
              (0, f.default)(k).call(k, function(M) {
                return M(z);
              });
            }
          }), F.on("click", function(j) {
            var z = null, L = j.target, $ = A.default(L);
            if ($.getNodeName() === "HR" && (z = $), !!z) {
              P.selection.createRangeByElem(z), P.selection.restoreSelection();
              var B = H.splitLineEvents;
              (0, f.default)(B).call(B, function(k) {
                return k(z);
              });
            }
          }), P.$toolbarElem.on("click", function(j) {
            var z = H.toolbarClickEvents;
            (0, f.default)(z).call(z, function(L) {
              return L(j);
            });
          }), P.$textContainerElem.on("mousedown", function(j) {
            var z = j.target, L = A.default(z);
            if (L.hasClass("w-e-img-drag-rb")) {
              var $ = H.imgDragBarMouseDownEvents;
              (0, f.default)($).call($, function(B) {
                return B();
              });
            }
          }), F.on("click", function(j) {
            var z = null, L = j.target;
            if (z = A.default(L).parentUntilEditor("TABLE", P, L), !!z) {
              var $ = H.tableClickEvents;
              (0, f.default)($).call($, function(B) {
                return B(z, j);
              });
            }
          }), F.on("keydown", function(j) {
            if (j.keyCode === 13) {
              var z = H.enterDownEvents;
              (0, f.default)(z).call(z, function(L) {
                return L(j);
              });
            }
          }), F.on("click", function(j) {
            var z = null, L = j.target, $ = A.default(L);
            if ($.getNodeName() === "VIDEO" && (j.stopPropagation(), z = $), !!z) {
              var B = H.videoClickEvents;
              (0, f.default)(B).call(B, function(k) {
                return k(z);
              });
            }
          });
        }, I;
      }();
      o.default = R;
    }, function(l, o, t) {
      var s = t(284);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(285), u = Array.prototype;
      l.exports = function(d) {
        var f = d.find;
        return d === u || d instanceof Array && f === u.find ? s : f;
      };
    }, function(l, o, t) {
      t(286);
      var s = t(15);
      l.exports = s("Array").find;
    }, function(l, o, t) {
      var s = t(5), u = t(30).find, d = t(82), f = t(22), c = "find", S = !0, p = f(c);
      c in [] && Array(1)[c](function() {
        S = !1;
      }), s({ target: "Array", proto: !0, forced: S || !p }, { find: function(A) {
        return u(this, A, arguments.length > 1 ? arguments[1] : void 0);
      } }), d(c);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(288)), c = d.__importStar(t(289)), S = d.__importDefault(t(290)), p = d.__importDefault(t(291)), C = d.__importDefault(t(298));
      function A(y) {
        var E = y.editor, x = y.eventHooks;
        f.default(E, x.enterUpEvents, x.enterDownEvents), c.default(E, x.deleteUpEvents, x.deleteDownEvents), c.cutToKeepP(E, x.keyupEvents), S.default(E, x.tabDownEvents), p.default(E, x.pasteEvents), C.default(E, x.imgClickEvents);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(7), S = f.__importDefault(t(3));
      function p(C, A, y) {
        function E(T) {
          var R, I = S.default(c.EMPTY_P);
          if (I.insertBefore(T), (0, d.default)(R = T.html()).call(R, "<img") >= 0) {
            I.remove();
            return;
          }
          C.selection.createRangeByElem(I, !0, !0), C.selection.restoreSelection(), T.remove();
        }
        function x() {
          var T = C.$textElem, R = C.selection.getSelectionContainerElem(), I = R.parent();
          if (I.html() === "<code><br></code>") {
            E(I);
            return;
          }
          if (R.getNodeName() === "FONT" && R.text() === "" && R.attr("face") === "monospace") {
            E(I);
            return;
          }
          if (!!I.equal(T)) {
            var P = R.getNodeName();
            P === "P" && R.attr("data-we-empty-p") === null || R.text() || E(R);
          }
        }
        A.push(x);
        function w(T) {
          var R;
          C.selection.saveRange((R = getSelection()) === null || R === void 0 ? void 0 : R.getRangeAt(0));
          var I = C.selection.getSelectionContainerElem();
          I.id === C.textElemId && (T.preventDefault(), C.cmd.do("insertHTML", "<p><br></p>"));
        }
        y.push(w);
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17)), f = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 }), o.cutToKeepP = void 0;
      var c = t(2), S = t(7), p = c.__importDefault(t(3));
      function C(y, E, x) {
        function w() {
          var R = y.$textElem, I = y.$textElem.html(), P = y.$textElem.text(), F = (0, d.default)(I).call(I), H = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', S.EMPTY_P];
          /^\s*$/.test(P) && (!F || (0, f.default)(H).call(H, F)) && (R.html(S.EMPTY_P), y.selection.createRangeByElem(R, !1, !0), y.selection.restoreSelection(), y.selection.moveCursor(R.getNode(), 0));
        }
        E.push(w);
        function T(R) {
          var I, P = y.$textElem, F = (0, d.default)(I = P.html().toLowerCase()).call(I);
          if (F === S.EMPTY_P) {
            R.preventDefault();
            return;
          }
        }
        x.push(T);
      }
      function A(y, E) {
        function x(w) {
          var T;
          if (w.keyCode === 88) {
            var R = y.$textElem, I = (0, d.default)(T = R.html().toLowerCase()).call(T);
            if (!I || I === "<br>") {
              var P = p.default(S.EMPTY_P);
              R.html(" "), R.append(P), y.selection.createRangeByElem(P, !1, !0), y.selection.restoreSelection(), y.selection.moveCursor(P.getNode(), 0);
            }
          }
        }
        E.push(x);
      }
      o.cutToKeepP = A, o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f, c) {
        function S() {
          if (!!f.cmd.queryCommandSupported("insertHTML")) {
            var p = f.selection.getSelectionContainerElem();
            if (!!p) {
              var C = p.parent(), A = p.getNodeName(), y = C.getNodeName();
              A == "CODE" || y === "CODE" || y === "PRE" || /hljs/.test(y) ? f.cmd.do("insertHTML", f.config.languageTab) : f.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
          }
        }
        c.push(S);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(130), c = t(6), S = t(7);
      function p(x) {
        var w, T = (0, d.default)(w = x.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(w), R = document.createElement("div");
        return R.innerHTML = T, R.innerHTML.replace(/<p><\/p>/gim, "");
      }
      function C(x) {
        var w = x.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
        return w;
      }
      function A(x) {
        var w;
        if (x === "")
          return !1;
        var T = document.createElement("div");
        return T.innerHTML = x, ((w = T.firstChild) === null || w === void 0 ? void 0 : w.nodeName) === "P";
      }
      function y(x) {
        if (!(x != null && x.length))
          return !1;
        var w = x.elems[0];
        return w.nodeName === "P" && w.innerHTML === "<br>";
      }
      function E(x, w) {
        function T(R) {
          var I = x.config, P = I.pasteFilterStyle, F = I.pasteIgnoreImg, H = I.pasteTextHandle, W = f.getPasteHtml(R, P, F), j = f.getPasteText(R);
          j = j.replace(/\n/gm, "<br>");
          var z = x.selection.getSelectionContainerElem();
          if (!!z) {
            var L = z == null ? void 0 : z.getNodeName(), $ = z == null ? void 0 : z.getNodeTop(x), B = "";
            if ($.elems[0] && (B = $ == null ? void 0 : $.getNodeName()), L === "CODE" || B === "PRE") {
              H && c.isFunction(H) && (j = "" + (H(j) || "")), x.cmd.do("insertHTML", C(j));
              return;
            }
            if (S.urlRegex.test(j) && P) {
              H && c.isFunction(H) && (j = "" + (H(j) || ""));
              var k = S.urlRegex.exec(j)[0], M = j.replace(S.urlRegex, "");
              return x.cmd.do("insertHTML", '<a href="' + k + '" target="_blank">' + k + "</a>" + M);
            }
            if (!!W)
              try {
                H && c.isFunction(H) && (W = "" + (H(W) || ""));
                var Y = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(W);
                if (Y && P)
                  x.cmd.do("insertHTML", "" + p(j));
                else {
                  var Q = p(W);
                  if (A(Q)) {
                    var Z = x.$textElem;
                    if (x.cmd.do("insertHTML", Q), Z.equal(z)) {
                      x.selection.createEmptyRange();
                      return;
                    }
                    y($) && $.remove();
                  } else {
                    var te = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;
                    te.test(Q) || x.cmd.do("insertHTML", Q);
                  }
                }
              } catch {
                H && c.isFunction(H) && (j = "" + (H(j) || "")), x.cmd.do("insertHTML", "" + p(j));
              }
          }
        }
        w.push(T);
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17)), f = s(t(4)), c = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var S = t(2), p = t(293), C = S.__importDefault(t(297));
      function A(T) {
        var R = /<span>.*?<\/span>/gi, I = /<span>(.*?)<\/span>/;
        return T.replace(R, function(P) {
          var F = P.match(I);
          return F == null ? "" : F[1];
        });
      }
      function y(T, R) {
        var I;
        return T = (0, d.default)(I = T.toLowerCase()).call(I), !!(p.IGNORE_TAGS.has(T) || R && T === "img");
      }
      function E(T, R) {
        var I = "";
        I = "<" + T;
        var P = [];
        (0, f.default)(R).call(R, function(H) {
          P.push(H.name + '="' + H.value + '"');
        }), P.length > 0 && (I = I + " " + P.join(" "));
        var F = p.EMPTY_TAGS.has(T);
        return I = I + (F ? "/" : "") + ">", I;
      }
      function x(T) {
        return "</" + T + ">";
      }
      function w(T, R, I) {
        R === void 0 && (R = !0), I === void 0 && (I = !1);
        var P = [], F = "";
        function H(L) {
          L = (0, d.default)(L).call(L), L && (p.EMPTY_TAGS.has(L) || (F = L));
        }
        function W() {
          F = "";
        }
        var j = new C.default();
        j.parse(T, { startElement: function($, B) {
          if (H($), !y($, I)) {
            var k = p.NECESSARY_ATTRS.get($) || [], M = [];
            (0, f.default)(B).call(B, function(Q) {
              var Z = Q.name;
              if (Z === "style") {
                R || M.push(Q);
                return;
              }
              (0, c.default)(k).call(k, Z) !== !1 && M.push(Q);
            });
            var Y = E($, M);
            P.push(Y);
          }
        }, characters: function($) {
          !$ || y(F, I) || P.push($);
        }, endElement: function($) {
          if (!y($, I)) {
            var B = x($);
            P.push(B), W();
          }
        }, comment: function($) {
          H($);
        } });
        var z = P.join("");
        return z = A(z), z;
      }
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(131)), f = s(t(120));
      (0, u.default)(o, "__esModule", { value: !0 }), o.TOP_LEVEL_TAGS = o.EMPTY_TAGS = o.NECESSARY_ATTRS = o.IGNORE_TAGS = void 0, o.IGNORE_TAGS = new d.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), o.NECESSARY_ATTRS = new f.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), o.EMPTY_TAGS = new d.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), o.TOP_LEVEL_TAGS = new d.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
    }, function(l, o, t) {
      var s = t(295);
      l.exports = s;
    }, function(l, o, t) {
      t(296), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Set;
    }, function(l, o, t) {
      var s = t(121), u = t(123);
      l.exports = s("Set", function(d) {
        return function() {
          return d(this, arguments.length ? arguments[0] : void 0);
        };
      }, u);
    }, function(l, o) {
      function t() {
      }
      t.prototype = {
        handler: null,
        startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
        endTagRe: /^<\/([^>\s]+)[^>]*>/m,
        attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
        parse: function(u, d) {
          d && (this.contentHandler = d);
          for (var f, c, S, p = !1, C = this; u.length > 0; )
            u.substring(0, 4) == "<!--" ? (S = u.indexOf("-->"), S != -1 ? (this.contentHandler.comment(u.substring(4, S)), u = u.substring(S + 3), p = !1) : p = !0) : u.substring(0, 2) == "</" ? this.endTagRe.test(u) ? (f = RegExp.lastMatch, c = RegExp.rightContext, f.replace(this.endTagRe, function() {
              return C.parseEndTag.apply(C, arguments);
            }), u = c, p = !1) : p = !0 : u.charAt(0) == "<" && (this.startTagRe.test(u) ? (f = RegExp.lastMatch, c = RegExp.rightContext, f.replace(this.startTagRe, function() {
              return C.parseStartTag.apply(C, arguments);
            }), u = c, p = !1) : p = !0), p && (S = u.indexOf("<"), S == -1 ? (this.contentHandler.characters(u), u = "") : (this.contentHandler.characters(u.substring(0, S)), u = u.substring(S))), p = !0;
        },
        parseStartTag: function(u, d, f) {
          var c = this.parseAttributes(d, f);
          this.contentHandler.startElement(d, c);
        },
        parseEndTag: function(u, d) {
          this.contentHandler.endElement(d);
        },
        parseAttributes: function(u, d) {
          var f = this, c = [];
          return d.replace(this.attrRe, function(S, p, C, A, y, E, x, w) {
            c.push(f.parseAttribute(u, S, p, C, A, y, E, x, w));
          }), c;
        },
        parseAttribute: function(u, d, f) {
          var c = "";
          arguments[7] ? c = arguments[8] : arguments[5] ? c = arguments[6] : arguments[3] && (c = arguments[4]);
          var S = !c && !arguments[3];
          return { name: f, value: S ? null : c };
        }
      }, l.exports = t;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f, c) {
        function S(p) {
          f.selection.createRangeByElem(p), f.selection.restoreSelection();
        }
        c.push(S);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(6), S = f.__importDefault(t(3));
      function p(C) {
        var A = [], y = C.childNodes() || [];
        return (0, d.default)(y).call(y, function(E) {
          var x, w = E.nodeType;
          if (w === 3 && (x = E.textContent || "", x = c.replaceHtmlSymbol(x)), w === 1) {
            x = {}, x = x, x.tag = E.nodeName.toLowerCase();
            for (var T = [], R = E.attributes, I = R.length || 0, P = 0; P < I; P++) {
              var F = R[P];
              T.push({ name: F.name, value: F.value });
            }
            x.attrs = T, x.children = p(S.default(E));
          }
          x && A.push(x);
        }), A;
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), d = s(t(1)), f = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3));
      function p(C, A) {
        A === void 0 && (A = document.createElement("div"));
        var y = A;
        return (0, f.default)(C).call(C, function(E) {
          var x;
          if (typeof E == "string" && (x = document.createTextNode(E)), (0, u.default)(E) === "object") {
            var w;
            x = document.createElement(E.tag), (0, f.default)(w = E.attrs).call(w, function(T) {
              S.default(x).attr(T.name, T.value);
            }), E.children && E.children.length > 0 && p(E.children, x.getRootNode());
          }
          x && y.appendChild(x);
        }), S.default(y);
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(89)), f = s(t(70)), c = s(t(44)), S = s(t(302)), p = s(t(4)), C = s(t(94)), A = s(t(132)), y = s(t(46)), E = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 });
      var x = t(2), w = x.__importDefault(t(87)), T = x.__importDefault(t(314)), R = x.__importDefault(t(3)), I = function() {
        function P(F) {
          this.editor = F, this.menuList = [], this.constructorList = T.default;
        }
        return P.prototype.extend = function(F, H) {
          !H || typeof H != "function" || (this.constructorList[F] = H);
        }, P.prototype.init = function() {
          var F, H, W = this, j = this.editor.config, z = j.excludeMenus;
          (0, d.default)(z) === !1 && (z = []), j.menus = (0, f.default)(F = j.menus).call(F, function(Z) {
            return (0, c.default)(z).call(z, Z) === !1;
          });
          var L = (0, S.default)(w.default.globalCustomMenuConstructorList);
          L = (0, f.default)(L).call(L, function(Z) {
            return (0, c.default)(z).call(z, Z);
          }), (0, p.default)(L).call(L, function(Z) {
            delete w.default.globalCustomMenuConstructorList[Z];
          }), (0, p.default)(H = j.menus).call(H, function(Z) {
            var te = W.constructorList[Z];
            W._initMenuList(Z, te);
          });
          for (var $ = 0, B = (0, C.default)(w.default.globalCustomMenuConstructorList); $ < B.length; $++) {
            var k = B[$], M = k[0], Y = k[1], Q = Y;
            this._initMenuList(M, Q);
          }
          this._addToToolbar(), j.showMenuTooltips && this._bindMenuTooltips();
        }, P.prototype._initMenuList = function(F, H) {
          var W;
          if (!(H == null || typeof H != "function"))
            if ((0, A.default)(W = this.menuList).call(W, function(z) {
              return z.key === F;
            }))
              console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + F);
            else {
              var j = new H(this.editor);
              j.key = F, this.menuList.push(j);
            }
        }, P.prototype._bindMenuTooltips = function() {
          var F = this.editor, H = F.$toolbarElem, W = F.config, j = W.menuTooltipPosition, z = R.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + j + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
          z.css("visibility", "hidden"), H.append(z), z.css("z-index", F.zIndex.get("tooltip"));
          var L = 0;
          function $() {
            L && clearTimeout(L);
          }
          function B() {
            $(), z.css("visibility", "hidden");
          }
          H.on("mouseover", function(k) {
            var M = k.target, Y = R.default(M), Q, Z;
            if (Y.isContain(H)) {
              B();
              return;
            }
            if (Y.parentUntil(".w-e-droplist") != null)
              B();
            else if (Y.attr("data-title"))
              Q = Y.attr("data-title"), Z = Y;
            else {
              var te = Y.parentUntil(".w-e-menu");
              te != null && (Q = te.attr("data-title"), Z = te);
            }
            if (Q && Z) {
              $();
              var q = Z.getOffsetData();
              z.text(F.i18next.t("menus.title." + Q));
              var ne = z.getOffsetData(), fe = q.left + q.width / 2 - ne.width / 2;
              z.css("left", fe + "px"), j === "up" ? z.css("top", q.top - ne.height - 8 + "px") : j === "down" && z.css("top", q.top + q.height + 8 + "px"), L = (0, y.default)(function() {
                z.css("visibility", "visible");
              }, 200);
            } else
              B();
          }).on("mouseleave", function() {
            B();
          });
        }, P.prototype._addToToolbar = function() {
          var F, H = this.editor, W = H.$toolbarElem;
          (0, p.default)(F = this.menuList).call(F, function(j) {
            var z = j.$elem;
            z && W.append(z);
          });
        }, P.prototype.menuFind = function(F) {
          for (var H = this.menuList, W = 0, j = H.length; W < j; W++)
            if (H[W].key === F)
              return H[W];
          return H[0];
        }, P.prototype.changeActive = function() {
          var F;
          (0, p.default)(F = this.menuList).call(F, function(H) {
            var W;
            (0, y.default)((0, E.default)(W = H.tryChangeActive).call(W, H), 100);
          });
        }, P;
      }();
      o.default = I;
    }, function(l, o, t) {
      l.exports = t(303);
    }, function(l, o, t) {
      var s = t(304);
      l.exports = s;
    }, function(l, o, t) {
      t(305);
      var s = t(9);
      l.exports = s.Object.keys;
    }, function(l, o, t) {
      var s = t(5), u = t(29), d = t(52), f = t(11), c = f(function() {
        d(1);
      });
      s({ target: "Object", stat: !0, forced: c }, { keys: function(p) {
        return d(u(p));
      } });
    }, function(l, o, t) {
      var s = t(307);
      l.exports = s;
    }, function(l, o, t) {
      t(308);
      var s = t(9);
      l.exports = s.Object.entries;
    }, function(l, o, t) {
      var s = t(5), u = t(309).entries;
      s({ target: "Object", stat: !0 }, { entries: function(f) {
        return u(f);
      } });
    }, function(l, o, t) {
      var s = t(14), u = t(52), d = t(28), f = t(59).f, c = function(p) {
        return function(C) {
          for (var A = d(C), y = u(A), E = y.length, x = 0, w = [], T; E > x; )
            T = y[x++], (!s || f.call(A, T)) && w.push(p ? [T, A[T]] : A[T]);
          return w;
        };
      };
      l.exports = {
        entries: c(!0),
        values: c(!1)
      };
    }, function(l, o, t) {
      var s = t(311);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(312), u = Array.prototype;
      l.exports = function(d) {
        var f = d.some;
        return d === u || d instanceof Array && f === u.some ? s : f;
      };
    }, function(l, o, t) {
      t(313);
      var s = t(15);
      l.exports = s("Array").some;
    }, function(l, o, t) {
      var s = t(5), u = t(30).some, d = t(67), f = t(22), c = d("some"), S = f("some");
      s({ target: "Array", proto: !0, forced: !c || !S }, { some: function(C) {
        return u(this, C, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(315)), c = d.__importDefault(t(316)), S = d.__importDefault(t(321)), p = d.__importDefault(t(326)), C = d.__importDefault(t(327)), A = d.__importDefault(t(328)), y = d.__importDefault(t(329)), E = d.__importDefault(t(331)), x = d.__importDefault(t(333)), w = d.__importDefault(t(334)), T = d.__importDefault(t(337)), R = d.__importDefault(t(338)), I = d.__importDefault(t(339)), P = d.__importDefault(t(350)), F = d.__importDefault(t(365)), H = d.__importDefault(t(369)), W = d.__importDefault(t(137)), j = d.__importDefault(t(378)), z = d.__importDefault(t(380)), L = d.__importDefault(t(381)), $ = d.__importDefault(t(382)), B = d.__importDefault(t(401)), k = d.__importDefault(t(406)), M = d.__importDefault(t(409));
      o.default = { bold: f.default, head: c.default, italic: p.default, link: S.default, underline: C.default, strikeThrough: A.default, fontName: y.default, fontSize: E.default, justify: x.default, quote: w.default, backColor: T.default, foreColor: R.default, video: I.default, image: P.default, indent: F.default, emoticon: H.default, list: W.default, lineHeight: j.default, undo: z.default, redo: L.default, table: $.default, code: B.default, splitLine: k.default, todo: M.default };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), c = d.__importDefault(t(3)), S = function(p) {
        d.__extends(C, p);
        function C(A) {
          var y = this, E = c.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
          return y = p.call(this, E, A) || this, y;
        }
        return C.prototype.clickHandler = function() {
          var A = this.editor, y = A.selection.isSelectionEmpty();
          y && A.selection.createEmptyRange(), A.cmd.do("bold"), y && (A.selection.collapseRange(), A.selection.restoreSelection());
        }, C.prototype.tryChangeActive = function() {
          var A = this.editor;
          A.cmd.queryCommandState("bold") ? this.active() : this.unActive();
        }, C;
      }(f.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(27)), f = s(t(31)), c = s(t(4)), S = s(t(317)), p = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var C = t(2), A = C.__importDefault(t(24)), y = C.__importDefault(t(3)), E = t(6), x = t(7), w = function(T) {
        C.__extends(R, T);
        function R(I) {
          var P = this, F = y.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), H = { width: 100, title: "\u8BBE\u7F6E\u6807\u9898", type: "list", list: [{ $elem: y.default("<h1>H1</h1>"), value: "<h1>" }, { $elem: y.default("<h2>H2</h2>"), value: "<h2>" }, { $elem: y.default("<h3>H3</h3>"), value: "<h3>" }, { $elem: y.default("<h4>H4</h4>"), value: "<h4>" }, { $elem: y.default("<h5>H5</h5>"), value: "<h5>" }, { $elem: y.default("<p>" + I.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"), value: "<p>" }], clickHandler: function(z) {
            P.command(z);
          } };
          P = T.call(this, F, I, H) || this;
          var W = I.config.onCatalogChange;
          return W && (P.oldCatalogs = [], P.addListenerCatalog(), P.getCatalogs()), P;
        }
        return R.prototype.command = function(I) {
          var P = this.editor, F = P.selection.getSelectionContainerElem();
          if (F && P.$textElem.equal(F))
            this.setMultilineHead(I);
          else {
            var H;
            if ((0, d.default)(H = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(H, y.default(F).getNodeName()) > -1)
              return;
            P.cmd.do("formatBlock", I);
          }
          I !== "<p>" && this.addUidForSelectionElem();
        }, R.prototype.addUidForSelectionElem = function() {
          var I = this.editor, P = I.selection.getSelectionContainerElem(), F = E.getRandomCode();
          y.default(P).attr("id", F);
        }, R.prototype.addListenerCatalog = function() {
          var I = this, P = this.editor;
          P.txt.eventHooks.changeEvents.push(function() {
            I.getCatalogs();
          });
        }, R.prototype.getCatalogs = function() {
          var I = this.editor, P = this.editor.$textElem, F = I.config.onCatalogChange, H = (0, f.default)(P).call(P, "h1,h2,h3,h4,h5"), W = [];
          (0, c.default)(H).call(H, function(j, z) {
            var L = y.default(j), $ = L.attr("id"), B = L.getNodeName(), k = L.text();
            $ || ($ = E.getRandomCode(), L.attr("id", $)), k && W.push({ tag: B, id: $, text: k });
          }), (0, S.default)(this.oldCatalogs) !== (0, S.default)(W) && (this.oldCatalogs = W, F && F(W));
        }, R.prototype.setMultilineHead = function(I) {
          var P = this, F, H, W = this.editor, j = W.selection, z = (F = j.getSelectionContainerElem()) === null || F === void 0 ? void 0 : F.elems[0], L = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], $ = y.default(j.getSelectionStartElem()), B = y.default(j.getSelectionEndElem());
          B.elems[0].outerHTML === y.default(x.EMPTY_P).elems[0].outerHTML && !B.elems[0].nextSibling && (B = B.prev());
          var k = [];
          k.push($.getNodeTop(W));
          var M = [], Y = (H = j.getRange()) === null || H === void 0 ? void 0 : H.commonAncestorContainer.childNodes;
          Y == null || (0, c.default)(Y).call(Y, function(te, q) {
            te === k[0].getNode() && M.push(q), te === B.getNodeTop(W).getNode() && M.push(q);
          });
          for (var Q = 0; k[Q].getNode() !== B.getNodeTop(W).getNode(); ) {
            if (!k[Q].elems[0])
              return;
            var Z = y.default(k[Q].next().getNode());
            k.push(Z), Q++;
          }
          k == null || (0, c.default)(k).call(k, function(te, q) {
            if (!P.hasTag(te, L)) {
              var ne = y.default(I), fe = te.parent().getNode();
              ne.html("" + te.html()), fe.insertBefore(ne.getNode(), te.getNode()), te.remove();
            }
          }), j.createRangeByElems(z.children[M[0]], z.children[M[1]]);
        }, R.prototype.hasTag = function(I, P) {
          var F = this, H;
          if (!I)
            return !1;
          if ((0, p.default)(P).call(P, I == null ? void 0 : I.getNodeName()))
            return !0;
          var W = !1;
          return (H = I.children()) === null || H === void 0 || (0, c.default)(H).call(H, function(j) {
            W = F.hasTag(y.default(j), P);
          }), W;
        }, R.prototype.tryChangeActive = function() {
          var I = this.editor, P = /^h/i, F = I.cmd.queryCommandValue("formatBlock");
          P.test(F) ? this.active() : this.unActive();
        }, R;
      }(A.default);
      o.default = w;
    }, function(l, o, t) {
      l.exports = t(318);
    }, function(l, o, t) {
      var s = t(319);
      l.exports = s;
    }, function(l, o, t) {
      t(320);
      var s = t(9);
      s.JSON || (s.JSON = { stringify: JSON.stringify }), l.exports = function(d, f, c) {
        return s.JSON.stringify.apply(null, arguments);
      };
    }, function(l, o, t) {
      var s = t(5), u = t(35), d = t(11), f = u("JSON", "stringify"), c = /[\uD800-\uDFFF]/g, S = /^[\uD800-\uDBFF]$/, p = /^[\uDC00-\uDFFF]$/, C = function(E, x, w) {
        var T = w.charAt(x - 1), R = w.charAt(x + 1);
        return S.test(E) && !p.test(R) || p.test(E) && !S.test(T) ? "\\u" + E.charCodeAt(0).toString(16) : E;
      }, A = d(function() {
        return f("\uDF06\uD834") !== '"\\udf06\\ud834"' || f("\uDEAD") !== '"\\udead"';
      });
      f && s({ target: "JSON", stat: !0, forced: A }, {
        stringify: function(E, x, w) {
          var T = f.apply(null, arguments);
          return typeof T == "string" ? T.replace(c, C) : T;
        }
      });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(37)), S = f.__importDefault(t(3)), p = f.__importDefault(t(322)), C = f.__importDefault(t(134)), A = f.__importDefault(t(32)), y = f.__importDefault(t(324)), E = t(7), x = function(w) {
        f.__extends(T, w);
        function T(R) {
          var I = this, P = S.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
          return I = w.call(this, P, R) || this, y.default(R), I;
        }
        return T.prototype.clickHandler = function() {
          var R = this.editor, I, P = R.selection.getSelectionContainerElem(), F = R.$textElem, H = F.html(), W = (0, d.default)(H).call(H);
          if (W === E.EMPTY_P) {
            var j = F.children();
            R.selection.createRangeByElem(j, !0, !0), P = R.selection.getSelectionContainerElem();
          }
          if (!(P && R.$textElem.equal(P)))
            if (this.isActive) {
              if (I = R.selection.getSelectionContainerElem(), !I)
                return;
              this.createPanel(I.text(), I.attr("href"));
            } else
              R.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(R.selection.getSelectionText(), "");
        }, T.prototype.createPanel = function(R, I) {
          var P = p.default(this.editor, R, I), F = new A.default(this, P);
          F.create();
        }, T.prototype.tryChangeActive = function() {
          var R = this.editor;
          C.default(R) ? this.active() : this.unActive();
        }, T;
      }(c.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(6), S = f.__importDefault(t(3)), p = f.__importDefault(t(134)), C = t(323);
      function A(y, E, x) {
        var w = c.getRandom("input-link"), T = c.getRandom("input-text"), R = c.getRandom("btn-ok"), I = c.getRandom("btn-del"), P = p.default(y) ? "inline-block" : "none", F;
        function H() {
          if (!!p.default(y)) {
            var $ = y.selection.getSelectionContainerElem();
            !$ || (y.selection.createRangeByElem($), y.selection.restoreSelection(), F = $);
          }
        }
        function W($, B) {
          var k = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
          $ = $.replace(k, ""), p.default(y) && H(), y.cmd.do("insertHTML", '<a href="' + B + '" target="_blank">' + $ + "</a>");
        }
        function j() {
          if (!!p.default(y)) {
            H();
            var $ = F.text();
            y.cmd.do("insertHTML", "<span>" + $ + "</span>");
          }
        }
        function z($, B) {
          var k = y.config.linkCheck($, B);
          if (k !== void 0) {
            if (k === !0)
              return !0;
            y.config.customAlert(k, "warning");
          }
          return !1;
        }
        var L = {
          width: 300,
          height: 0,
          tabs: [{
            title: y.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
            tpl: `<div>
                        <input
                            id="` + T + `"
                            type="text"
                            class="block"
                            value="` + E + `"
                            placeholder="` + y.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + w + `"
                            type="text"
                            class="block"
                            value="` + x + `"
                            placeholder="` + y.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + R + `" class="right">
                                ` + y.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + I + '" class="gray right" style="display:' + P + `">
                                ` + y.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + R, type: "click", fn: function() {
                var B, k, M, Y;
                y.selection.restoreSelection();
                var Q = y.selection.getSelectionRangeTopNodes()[0].getNode(), Z = window.getSelection(), te = S.default("#" + w), q = S.default("#" + T), ne = (0, d.default)(B = te.val()).call(B), fe = (0, d.default)(k = q.val()).call(k), me = "";
                Z && !(Z != null && Z.isCollapsed) && (me = (M = C.insertHtml(Z, Q)) === null || M === void 0 ? void 0 : (0, d.default)(M).call(M));
                var pe = me == null ? void 0 : me.replace(/<.*?>/g, ""), ve = (Y = pe == null ? void 0 : pe.length) !== null && Y !== void 0 ? Y : 0;
                if (ve <= fe.length) {
                  var se = fe.substring(0, ve), ae = fe.substring(ve);
                  pe === se && (fe = me + ae);
                }
                if (!!ne && (fe || (fe = ne), !!z(fe, ne)))
                  return W(fe, ne), !0;
              }, bindEnter: !0 },
              { selector: "#" + I, type: "click", fn: function() {
                return j(), !0;
              } }
            ]
          }]
        };
        return L;
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.insertHtml = o.createPartHtml = o.makeHtmlString = o.getTopNode = void 0;
      function f(y, E) {
        var x = y, w = y;
        do {
          if (x.textContent === E)
            break;
          w = x, x.parentNode && (x = x == null ? void 0 : x.parentNode);
        } while ((x == null ? void 0 : x.nodeName) !== "P");
        return w;
      }
      o.getTopNode = f;
      function c(y, E) {
        var x = y.nodeName, w = "";
        if (y.nodeType === 3 || /^(h|H)[1-6]$/.test(x))
          return E;
        if (y.nodeType === 1) {
          var T = y.getAttribute("style"), R = y.getAttribute("face"), I = y.getAttribute("color");
          T && (w = w + (' style="' + T + '"')), R && (w = w + (' face="' + R + '"')), I && (w = w + (' color="' + I + '"'));
        }
        return x = x.toLowerCase(), "<" + x + w + ">" + E + "</" + x + ">";
      }
      o.makeHtmlString = c;
      function S(y, E, x, w) {
        var T, R = (T = E.textContent) === null || T === void 0 ? void 0 : T.substring(x, w), I = E, P = "";
        do
          P = c(I, R != null ? R : ""), R = P, I = I == null ? void 0 : I.parentElement;
        while (I && I.textContent !== y);
        return P;
      }
      o.createPartHtml = S;
      function p(y, E) {
        var x, w, T, R, I, P = y.anchorNode, F = y.focusNode, H = y.anchorOffset, W = y.focusOffset, j = (x = E.textContent) !== null && x !== void 0 ? x : "", z = C(E), L = "", $ = "", B = "", k = "", M = P, Y = F, Q = P;
        if (P != null && P.isEqualNode(F != null ? F : null)) {
          var Z = S(j, P, H, W);
          return Z = A(z, Z), Z;
        }
        for (P && ($ = S(j, P, H != null ? H : 0)), F && (k = S(j, F, 0, W)), P && (M = f(P, j)), F && (Y = f(F, j)), Q = (w = M == null ? void 0 : M.nextSibling) !== null && w !== void 0 ? w : P; !(Q != null && Q.isEqualNode(Y != null ? Y : null)); ) {
          var te = Q == null ? void 0 : Q.nodeName;
          if (te === "#text")
            B = B + (Q == null ? void 0 : Q.textContent);
          else {
            var q = (R = (T = Q == null ? void 0 : Q.firstChild) === null || T === void 0 ? void 0 : T.parentElement) === null || R === void 0 ? void 0 : R.innerHTML;
            Q && (B = B + c(Q, q != null ? q : ""));
          }
          var ne = (I = Q == null ? void 0 : Q.nextSibling) !== null && I !== void 0 ? I : Q;
          if (ne === Q)
            break;
          Q = ne;
        }
        return L = "" + $ + B + k, L = A(z, L), L;
      }
      o.insertHtml = p;
      function C(y) {
        for (var E, x = (E = y.textContent) !== null && E !== void 0 ? E : "", w = []; (y == null ? void 0 : y.textContent) === x; )
          y.nodeName !== "P" && y.nodeName !== "TABLE" && w.push(y), y = y.childNodes[0];
        return w;
      }
      function A(y, E) {
        return (0, d.default)(y).call(y, function(x) {
          E = c(x, E);
        }), E;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(325));
      function c(S) {
        f.default(S);
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(38));
      function S(C) {
        var A;
        function y(x) {
          var w = [{ $elem: f.default("<span>" + C.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(R, I) {
            var P = I.attr("href");
            return window.open(P, "_target"), !0;
          } }, { $elem: f.default("<span>" + C.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"), onClick: function(R, I) {
            var P, F;
            R.selection.createRangeByElem(I), R.selection.restoreSelection();
            var H = I.childNodes();
            if ((H == null ? void 0 : H.getNodeName()) === "IMG") {
              var W = (F = (P = R.selection.getSelectionContainerElem()) === null || P === void 0 ? void 0 : P.children()) === null || F === void 0 ? void 0 : F.elems[0].children[0];
              R.cmd.do("insertHTML", `<img 
                                src=` + (W == null ? void 0 : W.getAttribute("src")) + ` 
                                style=` + (W == null ? void 0 : W.getAttribute("style")) + ">");
            } else {
              var j = I.text();
              R.cmd.do("insertHTML", "<span>" + j + "</span>");
            }
            return !0;
          } }];
          A = new c.default(C, x, w), A.create();
        }
        function E() {
          A && (A.remove(), A = null);
        }
        return { showLinkTooltip: y, hideLinkTooltip: E };
      }
      function p(C) {
        var A = S(C), y = A.showLinkTooltip, E = A.hideLinkTooltip;
        C.txt.eventHooks.linkClickEvents.push(y), C.txt.eventHooks.clickEvents.push(E), C.txt.eventHooks.keyupEvents.push(E), C.txt.eventHooks.toolbarClickEvents.push(E), C.txt.eventHooks.menuClickEvents.push(E), C.txt.eventHooks.textScrollEvents.push(E);
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), c = d.__importDefault(t(3)), S = function(p) {
        d.__extends(C, p);
        function C(A) {
          var y = this, E = c.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
          return y = p.call(this, E, A) || this, y;
        }
        return C.prototype.clickHandler = function() {
          var A = this.editor, y = A.selection.isSelectionEmpty();
          y && A.selection.createEmptyRange(), A.cmd.do("italic"), y && (A.selection.collapseRange(), A.selection.restoreSelection());
        }, C.prototype.tryChangeActive = function() {
          var A = this.editor;
          A.cmd.queryCommandState("italic") ? this.active() : this.unActive();
        }, C;
      }(f.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), c = d.__importDefault(t(3)), S = function(p) {
        d.__extends(C, p);
        function C(A) {
          var y = this, E = c.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
          return y = p.call(this, E, A) || this, y;
        }
        return C.prototype.clickHandler = function() {
          var A = this.editor, y = A.selection.isSelectionEmpty();
          y && A.selection.createEmptyRange(), A.cmd.do("underline"), y && (A.selection.collapseRange(), A.selection.restoreSelection());
        }, C.prototype.tryChangeActive = function() {
          var A = this.editor;
          A.cmd.queryCommandState("underline") ? this.active() : this.unActive();
        }, C;
      }(f.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), c = d.__importDefault(t(3)), S = function(p) {
        d.__extends(C, p);
        function C(A) {
          var y = this, E = c.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
          return y = p.call(this, E, A) || this, y;
        }
        return C.prototype.clickHandler = function() {
          var A = this.editor, y = A.selection.isSelectionEmpty();
          y && A.selection.createEmptyRange(), A.cmd.do("strikeThrough"), y && (A.selection.collapseRange(), A.selection.restoreSelection());
        }, C.prototype.tryChangeActive = function() {
          var A = this.editor;
          A.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
        }, C;
      }(f.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(24)), c = d.__importDefault(t(3)), S = d.__importDefault(t(330)), p = function(C) {
        d.__extends(A, C);
        function A(y) {
          var E = this, x = c.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), w = new S.default(y.config.fontNames), T = { width: 100, title: "\u8BBE\u7F6E\u5B57\u4F53", type: "list", list: w.getItemList(), clickHandler: function(I) {
            E.command(I);
          } };
          return E = C.call(this, x, y, T) || this, E;
        }
        return A.prototype.command = function(y) {
          var E, x = this.editor, w = x.selection.isSelectionEmpty(), T = (E = x.selection.getSelectionContainerElem()) === null || E === void 0 ? void 0 : E.elems[0];
          if (T != null) {
            var R = (T == null ? void 0 : T.nodeName.toLowerCase()) !== "p", I = (T == null ? void 0 : T.getAttribute("face")) === y;
            if (w) {
              if (R && !I) {
                var P = x.selection.getSelectionRangeTopNodes();
                x.selection.createRangeByElem(P[0]), x.selection.moveCursor(P[0].elems[0]);
              }
              x.selection.setRangeToElem(T), x.selection.createEmptyRange();
            }
            x.cmd.do("fontName", y), w && (x.selection.collapseRange(), x.selection.restoreSelection());
          }
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(f.default);
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = function() {
        function p(C) {
          var A = this;
          this.itemList = [], (0, d.default)(C).call(C, function(y) {
            var E = typeof y == "string" ? y : y.value, x = typeof y == "string" ? y : y.name;
            A.itemList.push({ $elem: c.default(`<p style="font-family:'` + E + `'">` + x + "</p>"), value: x });
          });
        }
        return p.prototype.getItemList = function() {
          return this.itemList;
        }, p;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(24)), c = d.__importDefault(t(3)), S = d.__importDefault(t(332)), p = function(C) {
        d.__extends(A, C);
        function A(y) {
          var E = this, x = c.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), w = new S.default(y.config.fontSizes), T = { width: 160, title: "\u8BBE\u7F6E\u5B57\u53F7", type: "list", list: w.getItemList(), clickHandler: function(I) {
            E.command(I);
          } };
          return E = C.call(this, x, y, T) || this, E;
        }
        return A.prototype.command = function(y) {
          var E, x = this.editor, w = x.selection.isSelectionEmpty(), T = (E = x.selection.getSelectionContainerElem()) === null || E === void 0 ? void 0 : E.elems[0];
          T != null && (x.cmd.do("fontSize", y), w && (x.selection.collapseRange(), x.selection.restoreSelection()));
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(f.default);
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = function() {
        function S(p) {
          this.itemList = [];
          for (var C in p) {
            var A = p[C];
            this.itemList.push({ $elem: f.default('<p style="font-size:' + C + '">' + A.name + "</p>"), value: A.value });
          }
        }
        return S.prototype.getItemList = function() {
          return this.itemList;
        }, S;
      }();
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(24)), p = c.__importDefault(t(3)), C = ["LI"], A = ["UL", "BLOCKQUOTE"], y = function(E) {
        c.__extends(x, E);
        function x(w) {
          var T = this, R = p.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), I = { width: 100, title: "\u5BF9\u9F50\u65B9\u5F0F", type: "list", list: [{ $elem: p.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + w.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`), value: "left" }, { $elem: p.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + w.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`), value: "center" }, { $elem: p.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + w.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`), value: "right" }, { $elem: p.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + w.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`), value: "justify" }], clickHandler: function(F) {
            T.command(F);
          } };
          return T = E.call(this, R, w, I) || this, T;
        }
        return x.prototype.command = function(w) {
          var T = this.editor, R = T.selection, I = R.getSelectionContainerElem();
          R.saveRange();
          var P = T.selection.getSelectionRangeTopNodes();
          if (I != null && I.length)
            if (this.isSpecialNode(I, P[0]) || this.isSpecialTopNode(P[0])) {
              var F = this.getSpecialNodeUntilTop(I, P[0]);
              if (F == null)
                return;
              p.default(F).css("text-align", w);
            } else
              (0, d.default)(P).call(P, function(H) {
                H.css("text-align", w);
              });
          R.restoreSelection();
        }, x.prototype.getSpecialNodeUntilTop = function(w, T) {
          for (var R = w.elems[0], I = T.elems[0]; R != null; ) {
            if ((0, f.default)(C).call(C, R == null ? void 0 : R.nodeName) !== -1 || R.parentNode === I)
              return R;
            R = R.parentNode;
          }
          return R;
        }, x.prototype.isSpecialNode = function(w, T) {
          var R = this.getSpecialNodeUntilTop(w, T);
          return R == null ? !1 : (0, f.default)(C).call(C, R.nodeName) !== -1;
        }, x.prototype.isSpecialTopNode = function(w) {
          var T;
          return w == null ? !1 : (0, f.default)(A).call(A, (T = w.elems[0]) === null || T === void 0 ? void 0 : T.nodeName) !== -1;
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(S.default);
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = f.__importDefault(t(23)), p = f.__importDefault(t(335)), C = f.__importDefault(t(336)), A = t(7), y = function(E) {
        f.__extends(x, E);
        function x(w) {
          var T = this, R = c.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
          return T = E.call(this, R, w) || this, p.default(w), T;
        }
        return x.prototype.clickHandler = function() {
          var w, T, R = this.editor, I = R.selection.isSelectionEmpty(), P = R.selection.getSelectionRangeTopNodes(), F = P[P.length - 1], H = this.getTopNodeName();
          if (H === "BLOCKQUOTE") {
            var W = c.default(F.childNodes()), j = W.length, z = F;
            (0, d.default)(W).call(W, function(k) {
              var M = c.default(k);
              M.insertAfter(z), z = M;
            }), F.remove(), R.selection.moveCursor(W.elems[j - 1]), this.tryChangeActive();
          } else {
            var L = C.default(P);
            if (R.$textElem.equal(F)) {
              var $ = (w = R.selection.getSelectionContainerElem()) === null || w === void 0 ? void 0 : w.elems[0];
              R.selection.createRangeByElems($.children[0], $.children[0]), P = R.selection.getSelectionRangeTopNodes(), L = C.default(P), F.append(L);
            } else
              L.insertAfter(F);
            this.delSelectNode(P);
            var B = (T = L.childNodes()) === null || T === void 0 ? void 0 : T.last().getNode();
            if (B == null)
              return;
            B.textContent ? R.selection.moveCursor(B) : R.selection.moveCursor(B, 0), this.tryChangeActive(), c.default(A.EMPTY_P).insertAfter(L);
            return;
          }
          I && (R.selection.collapseRange(), R.selection.restoreSelection());
        }, x.prototype.tryChangeActive = function() {
          var w, T = this.editor, R = (w = T.selection.getSelectionRangeTopNodes()[0]) === null || w === void 0 ? void 0 : w.getNodeName();
          R === "BLOCKQUOTE" ? this.active() : this.unActive();
        }, x.prototype.getTopNodeName = function() {
          var w = this.editor, T = w.selection.getSelectionRangeTopNodes()[0], R = T == null ? void 0 : T.getNodeName();
          return R;
        }, x.prototype.delSelectNode = function(w) {
          (0, d.default)(w).call(w, function(T) {
            T.remove();
          });
        }, x;
      }(S.default);
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(7), c = d.__importDefault(t(3));
      function S(p) {
        function C(A) {
          var y, E = p.selection.getSelectionContainerElem(), x = p.selection.getSelectionRangeTopNodes()[0];
          if ((x == null ? void 0 : x.getNodeName()) === "BLOCKQUOTE") {
            if (E.getNodeName() === "BLOCKQUOTE") {
              var w = (y = E.childNodes()) === null || y === void 0 ? void 0 : y.getNode();
              p.selection.moveCursor(w);
            }
            if (E.text() === "") {
              A.preventDefault(), E.remove();
              var T = c.default(f.EMPTY_P);
              T.insertAfter(x), p.selection.moveCursor(T.getNode(), 0);
            }
            x.text() === "" && x.remove();
          }
        }
        p.txt.eventHooks.enterDownEvents.push(C);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3));
      function S(p) {
        var C = c.default("<blockquote></blockquote>");
        return (0, d.default)(p).call(p, function(A) {
          C.append(A.clone(!0));
        }), C;
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(24)), S = f.__importDefault(t(3)), p = t(6), C = function(A) {
        f.__extends(y, A);
        function y(E) {
          var x, w = this, T = S.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), R = {
            width: 120,
            title: "\u80CC\u666F\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(x = E.config.colors).call(x, function(I) {
              return { $elem: S.default('<i style="color:' + I + ';" class="w-e-icon-paint-brush"></i>'), value: I };
            }),
            clickHandler: function(P) {
              w.command(P);
            }
          };
          return w = A.call(this, T, E, R) || this, w;
        }
        return y.prototype.command = function(E) {
          var x, w = this.editor, T = w.selection.isSelectionEmpty(), R = (x = w.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          if (R != null) {
            var I = (R == null ? void 0 : R.nodeName.toLowerCase()) !== "p", P = R == null ? void 0 : R.style.backgroundColor, F = p.hexToRgb(E) === P;
            if (T) {
              if (I && !F) {
                var H = w.selection.getSelectionRangeTopNodes();
                w.selection.createRangeByElem(H[0]), w.selection.moveCursor(H[0].elems[0]);
              }
              w.selection.createEmptyRange();
            }
            w.cmd.do("backColor", E), T && (w.selection.collapseRange(), w.selection.restoreSelection());
          }
        }, y.prototype.tryChangeActive = function() {
        }, y;
      }(c.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(24)), S = f.__importDefault(t(3)), p = function(C) {
        f.__extends(A, C);
        function A(y) {
          var E, x = this, w = S.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), T = {
            width: 120,
            title: "\u6587\u5B57\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(E = y.config.colors).call(E, function(R) {
              return { $elem: S.default('<i style="color:' + R + ';" class="w-e-icon-pencil2"></i>'), value: R };
            }),
            clickHandler: function(I) {
              x.command(I);
            }
          };
          return x = C.call(this, w, y, T) || this, x;
        }
        return A.prototype.command = function(y) {
          var E, x = this.editor, w = x.selection.isSelectionEmpty(), T = (E = x.selection.getSelectionContainerElem()) === null || E === void 0 ? void 0 : E.elems[0];
          if (T != null) {
            var R = x.selection.getSelectionText();
            if (T.nodeName === "A" && T.textContent === R) {
              var I = S.default("<span>&#8203;</span>").getNode();
              T.appendChild(I);
            }
            x.cmd.do("foreColor", y), w && (x.selection.collapseRange(), x.selection.restoreSelection());
          }
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(c.default);
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(32)), S = d.__importDefault(t(37)), p = d.__importDefault(t(340)), C = d.__importDefault(t(346)), A = function(y) {
        d.__extends(E, y);
        function E(x) {
          var w = this, T = f.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
          return w = y.call(this, T, x) || this, C.default(x), w;
        }
        return E.prototype.clickHandler = function() {
          this.createPanel("");
        }, E.prototype.createPanel = function(x) {
          var w = p.default(this.editor, x), T = new c.default(this, w);
          T.create();
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(S.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(6), S = f.__importDefault(t(3)), p = f.__importDefault(t(341)), C = t(7);
      function A(y, E) {
        var x = y.config, w = new p.default(y), T = c.getRandom("input-iframe"), R = c.getRandom("btn-ok"), I = c.getRandom("input-upload"), P = c.getRandom("btn-local-ok");
        function F(z) {
          y.cmd.do("insertHTML", z + C.EMPTY_P), y.config.onlineVideoCallback(z);
        }
        function H(z) {
          var L = y.config.onlineVideoCheck(z);
          return L === !0 ? !0 : (typeof L == "string" && y.config.customAlert(L, "error"), !1);
        }
        var W = [{
          title: y.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
          tpl: `<div class="w-e-up-video-container">
                    <div id="` + P + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + I + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
          events: [
            { selector: "#" + P, type: "click", fn: function() {
              var L = S.default("#" + I), $ = L.elems[0];
              if ($)
                $.click();
              else
                return !0;
            } },
            { selector: "#" + I, type: "change", fn: function() {
              var L = S.default("#" + I), $ = L.elems[0];
              if (!$)
                return !0;
              var B = $.files;
              return B.length && w.uploadVideo(B), !0;
            } }
          ]
        }, {
          title: y.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
          tpl: `<div>
                    <input 
                        id="` + T + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + y.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + R + `" class="right">
                            ` + y.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
          events: [
            { selector: "#" + R, type: "click", fn: function() {
              var L, $ = S.default("#" + T), B = (0, d.default)(L = $.val()).call(L);
              if (!!B && !!H(B))
                return F(B), !0;
            }, bindEnter: !0 }
          ]
        }], j = {
          width: 300,
          height: 0,
          tabs: []
        };
        return window.FileReader && (x.uploadVideoServer || x.customUploadVideo) && j.tabs.push(W[0]), x.showLinkVideo && j.tabs.push(W[1]), j;
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(132)), f = s(t(57)), c = s(t(4)), S = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var p = t(2), C = t(6), A = p.__importDefault(t(135)), y = p.__importDefault(t(136)), E = t(7), x = t(6), w = function() {
        function T(R) {
          this.editor = R;
        }
        return T.prototype.uploadVideo = function(R) {
          var I = this;
          if (!!R.length) {
            var P = this.editor, F = P.config, H = "validate.", W = function(ce) {
              return P.i18next.t(H + ce);
            }, j = F.uploadVideoServer, z = F.uploadVideoMaxSize, L = z / 1024, $ = F.uploadVideoName, B = F.uploadVideoParams, k = F.uploadVideoParamsWithUrl, M = F.uploadVideoHeaders, Y = F.uploadVideoHooks, Q = F.uploadVideoTimeout, Z = F.withVideoCredentials, te = F.customUploadVideo, q = F.uploadVideoAccept, ne = [], fe = [];
            if (C.arrForEach(R, function(ue) {
              var ce = ue.name, Fe = ue.size / 1024 / 1024;
              if (!(!ce || !Fe)) {
                if (!(q instanceof Array)) {
                  fe.push("\u3010" + q + "\u3011" + W("uploadVideoAccept \u4E0D\u662FArray"));
                  return;
                }
                if (!(0, d.default)(q).call(q, function(De) {
                  return De === ce.split(".")[ce.split(".").length - 1];
                })) {
                  fe.push("\u3010" + ce + "\u3011" + W("\u4E0D\u662F\u89C6\u9891"));
                  return;
                }
                if (L < Fe) {
                  fe.push("\u3010" + ce + "\u3011" + W("\u5927\u4E8E") + " " + L + "M");
                  return;
                }
                ne.push(ue);
              }
            }), fe.length) {
              F.customAlert(W("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + fe.join(`
`), "warning");
              return;
            }
            if (ne.length === 0) {
              F.customAlert(W("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (te && typeof te == "function") {
              var me;
              te(ne, (0, f.default)(me = this.insertVideo).call(me, this));
              return;
            }
            var pe = new FormData();
            if ((0, c.default)(ne).call(ne, function(ue, ce) {
              var Fe = $ || ue.name;
              ne.length > 1 && (Fe = Fe + (ce + 1)), pe.append(Fe, ue);
            }), j) {
              var ve = j.split("#");
              j = ve[0];
              var se = ve[1] || "";
              (0, c.default)(C).call(C, B, function(ue, ce) {
                k && ((0, S.default)(j).call(j, "?") > 0 ? j += "&" : j += "?", j = j + ue + "=" + ce), pe.append(ue, ce);
              }), se && (j += "#" + se);
              var ae = A.default(j, { timeout: Q, formData: pe, headers: M, withCredentials: !!Z, beforeSend: function(ce) {
                if (Y.before)
                  return Y.before(ce, P, ne);
              }, onTimeout: function(ce) {
                F.customAlert(W("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), Y.timeout && Y.timeout(ce, P);
              }, onProgress: function(ce, Fe) {
                var De = new y.default(P);
                Fe.lengthComputable && (ce = Fe.loaded / Fe.total, De.show(ce));
              }, onError: function(ce) {
                F.customAlert(W("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", W("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + W("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + ce.status), Y.error && Y.error(ce, P);
              }, onFail: function(ce, Fe) {
                F.customAlert(W("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", W("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + W("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Fe), Y.fail && Y.fail(ce, P, Fe);
              }, onSuccess: function(ce, Fe) {
                if (Y.customInsert) {
                  var De;
                  Y.customInsert((0, f.default)(De = I.insertVideo).call(De, I), Fe, P);
                  return;
                }
                if (Fe.errno != "0") {
                  F.customAlert(W("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", W("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + W("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Fe.errno), Y.fail && Y.fail(ce, P, Fe);
                  return;
                }
                var Be = Fe.data;
                I.insertVideo(Be.url), Y.success && Y.success(ce, P, Fe);
              } });
              typeof ae == "string" && F.customAlert(ae, "error");
            }
          }
        }, T.prototype.insertVideo = function(R) {
          var I = this.editor, P = I.config, F = "validate.", H = function(z, L) {
            return L === void 0 && (L = F), I.i18next.t(L + z);
          };
          if (!P.customInsertVideo)
            x.UA.isFirefox ? I.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + R + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : I.cmd.do("insertHTML", '<video src="' + R + '" controls="controls" style="max-width:100%"></video>' + E.EMPTY_P);
          else {
            P.customInsertVideo(R);
            return;
          }
          var W = document.createElement("video");
          W.onload = function() {
            W = null;
          }, W.onerror = function() {
            P.customAlert(H("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + H("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + H("\u89C6\u9891\u94FE\u63A5") + ' "' + R + '"\uFF0C' + H("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), W = null;
          }, W.onabort = function() {
            return W = null;
          }, W.src = R;
        }, T;
      }();
      o.default = w;
    }, function(l, o, t) {
      l.exports = t(343);
    }, function(l, o, t) {
      var s = t(344);
      l.exports = s;
    }, function(l, o, t) {
      t(345);
      var s = t(9);
      l.exports = s.Date.now;
    }, function(l, o, t) {
      var s = t(5);
      s({ target: "Date", stat: !0 }, { now: function() {
        return new Date().getTime();
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(347)), c = d.__importDefault(t(349));
      function S(p) {
        f.default(p), c.default(p);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(38)), S = d.__importDefault(t(348));
      function p(A) {
        var y, E = function(R, I) {
          return I === void 0 && (I = ""), A.i18next.t(I + R);
        };
        function x(T) {
          var R = [{ $elem: f.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(P, F) {
            return F.remove(), !0;
          } }, { $elem: f.default("<span>100%</span>"), onClick: function(P, F) {
            return F.attr("width", "100%"), F.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>50%</span>"), onClick: function(P, F) {
            return F.attr("width", "50%"), F.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>30%</span>"), onClick: function(P, F) {
            return F.attr("width", "30%"), F.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>" + E("\u91CD\u7F6E") + "</span>"), onClick: function(P, F) {
            return F.removeAttr("width"), F.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>" + E("menus.justify.\u9760\u5DE6") + "</span>"), onClick: function(P, F) {
            return S.default(F, "left"), !0;
          } }, { $elem: f.default("<span>" + E("menus.justify.\u5C45\u4E2D") + "</span>"), onClick: function(P, F) {
            return S.default(F, "center"), !0;
          } }, { $elem: f.default("<span>" + E("menus.justify.\u9760\u53F3") + "</span>"), onClick: function(P, F) {
            return S.default(F, "right"), !0;
          } }];
          y = new c.default(A, T, R), y.create();
        }
        function w() {
          y && (y.remove(), y = null);
        }
        return { showVideoTooltip: x, hideVideoTooltip: w };
      }
      o.createShowHideFn = p;
      function C(A) {
        var y = p(A), E = y.showVideoTooltip, x = y.hideVideoTooltip;
        A.txt.eventHooks.videoClickEvents.push(E), A.txt.eventHooks.clickEvents.push(x), A.txt.eventHooks.keyupEvents.push(x), A.txt.eventHooks.toolbarClickEvents.push(x), A.txt.eventHooks.menuClickEvents.push(x), A.txt.eventHooks.textScrollEvents.push(x), A.txt.eventHooks.changeEvents.push(x);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3));
      function S(C, A) {
        var y = ["P"], E = p(C, y);
        E && c.default(E).css("text-align", A);
      }
      o.default = S;
      function p(C, A) {
        for (var y, E = C.elems[0]; E != null; ) {
          if ((0, d.default)(A).call(A, E == null ? void 0 : E.nodeName))
            return E;
          if (((y = E == null ? void 0 : E.parentNode) === null || y === void 0 ? void 0 : y.nodeName) === "BODY")
            return null;
          E = E.parentNode;
        }
        return E;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function f(c) {
        if (!!d.UA.isFirefox) {
          var S = c.txt, p = c.selection, C = S.eventHooks.keydownEvents;
          C.push(function(A) {
            var y = p.getSelectionContainerElem();
            if (y) {
              var E = y.getNodeTop(c), x = E.length && E.prev().length ? E.prev() : null;
              x && x.attr("data-we-video-p") && p.getCursorPos() === 0 && A.keyCode === 8 && x.remove();
            }
          });
        }
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(7), S = f.__importDefault(t(3)), p = f.__importDefault(t(32)), C = f.__importDefault(t(37)), A = f.__importDefault(t(351)), y = f.__importDefault(t(364)), E = function(x) {
        f.__extends(w, x);
        function w(T) {
          var R = this, I = S.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), P = y.default(T);
          if (P.onlyUploadConf) {
            var F;
            I = P.onlyUploadConf.$elem, (0, d.default)(F = P.onlyUploadConf.events).call(F, function(H) {
              var W = H.type, j = H.fn || c.EMPTY_FN;
              I.on(W, function(z) {
                z.stopPropagation(), j(z);
              });
            });
          }
          return R = x.call(this, I, T) || this, R.imgPanelConfig = P, A.default(T), R;
        }
        return w.prototype.clickHandler = function() {
          this.imgPanelConfig.onlyUploadConf || this.createPanel();
        }, w.prototype.createPanel = function() {
          var T = this.imgPanelConfig, R = new p.default(this, T);
          this.setPanel(R), R.create();
        }, w.prototype.tryChangeActive = function() {
        }, w;
      }(C.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(352)), c = d.__importDefault(t(353)), S = d.__importDefault(t(354)), p = d.__importDefault(t(362)), C = d.__importDefault(t(363));
      function A(y) {
        f.default(y), c.default(y), S.default(y), p.default(y), C.default(y);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(130), c = d.__importDefault(t(96));
      function S(y, E) {
        var x = y.config, w = x.pasteFilterStyle, T = x.pasteIgnoreImg, R = f.getPasteHtml(E, w, T);
        if (R)
          return !0;
        var I = f.getPasteText(E);
        return !!I;
      }
      function p(y, E) {
        for (var x, w = ((x = E.clipboardData) === null || x === void 0 ? void 0 : x.types) || [], T = 0; T < w.length; T++) {
          var R = w[T];
          if (R === "Files")
            return !0;
        }
        return !1;
      }
      function C(y, E) {
        if (!(!p(E, y) && S(E, y))) {
          var x = f.getPasteImgs(y);
          if (!!x.length) {
            var w = new c.default(E);
            w.uploadImg(x);
          }
        }
      }
      function A(y) {
        y.txt.eventHooks.pasteEvents.unshift(function(E) {
          C(E, y);
        });
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(96));
      function c(S) {
        function p(C) {
          var A = C.dataTransfer && C.dataTransfer.files;
          if (!(!A || !A.length)) {
            var y = new f.default(S);
            y.uploadImg(A);
          }
        }
        S.txt.eventHooks.dropEvents.push(p);
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31)), f = s(t(355));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var c = t(2), S = c.__importDefault(t(3));
      t(360);
      var p = t(6);
      function C(w, T, R, I, P) {
        w.attr("style", "width:" + T + "px; height:" + R + "px; left:" + I + "px; top:" + P + "px;");
      }
      function A(w, T) {
        var R = S.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
        return R.hide(), T.append(R), R;
      }
      function y(w, T, R) {
        var I = w.getBoundingClientRect(), P = R.getBoundingClientRect(), F = P.width.toFixed(2), H = P.height.toFixed(2);
        (0, d.default)(T).call(T, ".w-e-img-drag-show-size").text(F + "px * " + H + "px"), C(T, (0, f.default)(F), (0, f.default)(H), P.left - I.left, P.top - I.top), T.show();
      }
      function E(w) {
        var T = w.$textContainerElem, R, I = A(w, T);
        function P(W, j) {
          W.on("click", function(z) {
            z.stopPropagation();
          }), W.on("mousedown", ".w-e-img-drag-rb", function(z) {
            if (z.preventDefault(), !R)
              return;
            var L = z.clientX, $ = z.clientY, B = j.getBoundingClientRect(), k = R.getBoundingClientRect(), M = k.width, Y = k.height, Q = k.left - B.left, Z = k.top - B.top, te = M / Y, q = M, ne = Y, fe = S.default(document);
            function me() {
              fe.off("mousemove", pe), fe.off("mouseup", ve);
            }
            function pe(se) {
              se.stopPropagation(), se.preventDefault(), q = M + (se.clientX - L), ne = Y + (se.clientY - $), q / ne != te && (ne = q / te), q = (0, f.default)(q.toFixed(2)), ne = (0, f.default)(ne.toFixed(2)), (0, d.default)(W).call(W, ".w-e-img-drag-show-size").text(q.toFixed(2).replace(".00", "") + "px * " + ne.toFixed(2).replace(".00", "") + "px"), C(W, q, ne, Q, Z);
            }
            fe.on("mousemove", pe);
            function ve() {
              R.attr("width", q + ""), R.attr("height", ne + "");
              var se = R.getBoundingClientRect();
              C(W, q, ne, se.left - B.left, se.top - B.top), me();
            }
            fe.on("mouseup", ve), fe.on("mouseleave", me);
          });
        }
        function F(W) {
          if (p.UA.isIE())
            return !1;
          W && (R = W, y(T, I, R));
        }
        function H() {
          (0, d.default)(T).call(T, ".w-e-img-drag-mask").hide();
        }
        return P(I, T), S.default(document).on("click", H), w.beforeDestroy(function() {
          S.default(document).off("click", H);
        }), { showDrag: F, hideDrag: H };
      }
      o.createShowHideFn = E;
      function x(w) {
        var T = E(w), R = T.showDrag, I = T.hideDrag;
        w.txt.eventHooks.imgClickEvents.push(R), w.txt.eventHooks.textScrollEvents.push(I), w.txt.eventHooks.keyupEvents.push(I), w.txt.eventHooks.toolbarClickEvents.push(I), w.txt.eventHooks.menuClickEvents.push(I), w.txt.eventHooks.changeEvents.push(I);
      }
      o.default = x;
    }, function(l, o, t) {
      l.exports = t(356);
    }, function(l, o, t) {
      var s = t(357);
      l.exports = s;
    }, function(l, o, t) {
      t(358);
      var s = t(9);
      l.exports = s.parseFloat;
    }, function(l, o, t) {
      var s = t(5), u = t(359);
      s({ global: !0, forced: parseFloat != u }, { parseFloat: u });
    }, function(l, o, t) {
      var s = t(8), u = t(90).trim, d = t(68), f = s.parseFloat, c = 1 / f(d + "-0") !== -1 / 0;
      l.exports = c ? function(p) {
        var C = u(String(p)), A = f(C);
        return A === 0 && C.charAt(0) == "-" ? -0 : A;
      } : f;
    }, function(l, o, t) {
      var s = t(20), u = t(361);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(38));
      function S(C) {
        var A, y = function(T, R) {
          return R === void 0 && (R = ""), C.i18next.t(R + T);
        };
        function E(w) {
          var T = [{ $elem: f.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(I, P) {
            return I.selection.createRangeByElem(P), I.selection.restoreSelection(), I.cmd.do("delete"), !0;
          } }, { $elem: f.default("<span>30%</span>"), onClick: function(I, P) {
            return P.attr("width", "30%"), P.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>50%</span>"), onClick: function(I, P) {
            return P.attr("width", "50%"), P.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>100%</span>"), onClick: function(I, P) {
            return P.attr("width", "100%"), P.removeAttr("height"), !0;
          } }];
          T.push({ $elem: f.default("<span>" + y("\u91CD\u7F6E") + "</span>"), onClick: function(I, P) {
            return P.removeAttr("width"), P.removeAttr("height"), !0;
          } }), w.attr("data-href") && T.push({ $elem: f.default("<span>" + y("\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(I, P) {
            var F = P.attr("data-href");
            return F && (F = decodeURIComponent(F), window.open(F, "_target")), !0;
          } }), A = new c.default(C, w, T), A.create();
        }
        function x() {
          A && (A.remove(), A = null);
        }
        return { showImgTooltip: E, hideImgTooltip: x };
      }
      o.createShowHideFn = S;
      function p(C) {
        var A = S(C), y = A.showImgTooltip, E = A.hideImgTooltip;
        C.txt.eventHooks.imgClickEvents.push(y), C.txt.eventHooks.clickEvents.push(E), C.txt.eventHooks.keyupEvents.push(E), C.txt.eventHooks.toolbarClickEvents.push(E), C.txt.eventHooks.menuClickEvents.push(E), C.txt.eventHooks.textScrollEvents.push(E), C.txt.eventHooks.imgDragBarMouseDownEvents.push(E), C.txt.eventHooks.changeEvents.push(E);
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var c = f.txt, S = f.selection, p = c.eventHooks.keydownEvents;
        p.push(function(C) {
          var A = S.getSelectionContainerElem(), y = S.getRange();
          if (!(!y || !A || C.keyCode !== 8 || !S.isSelectionEmpty())) {
            var E = y.startContainer, x = y.startOffset, w = null;
            if (x === 0)
              for (; E !== A.elems[0] && A.elems[0].contains(E) && E.parentNode && !w; ) {
                if (E.previousSibling) {
                  w = E.previousSibling;
                  break;
                }
                E = E.parentNode;
              }
            else
              E.nodeType !== 3 && (w = E.childNodes[x - 1]);
            if (!!w) {
              for (var T = w; T.childNodes.length; )
                T = T.childNodes[T.childNodes.length - 1];
              T instanceof HTMLElement && T.tagName === "IMG" && (T.remove(), C.preventDefault());
            }
          }
        });
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3)), p = t(6), C = c.__importDefault(t(96));
      function A(y) {
        var E, x = y.config, w = new C.default(y), T = p.getRandom("up-trigger-id"), R = p.getRandom("up-file-id"), I = p.getRandom("input-link-url"), P = p.getRandom("input-link-url-alt"), F = p.getRandom("input-link-url-href"), H = p.getRandom("btn-link"), W = "menus.panelMenus.image.", j = function(te, q) {
          return q === void 0 && (q = W), y.i18next.t(q + te);
        };
        function z(Z, te, q) {
          var ne = x.linkImgCheck(Z);
          return ne === !0 ? !0 : (typeof ne == "string" && x.customAlert(ne, "error"), !1);
        }
        var L = x.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', $ = (0, d.default)(E = x.uploadImgAccept).call(E, function(Z) {
          return "image/" + Z;
        }).join(","), B = function(te, q, ne) {
          return '<div class="' + te + '" data-title="' + ne + `">
            <div id="` + T + `" class="w-e-up-btn">
                <i class="` + q + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + R + '" type="file" ' + L + ' accept="' + $ + `"/>
            </div>
        </div>`;
        }, k = [
          { selector: "#" + T, type: "click", fn: function() {
            var te = x.uploadImgFromMedia;
            if (te && typeof te == "function")
              return te(), !0;
            var q = S.default("#" + R), ne = q.elems[0];
            if (ne)
              ne.click();
            else
              return !0;
          } },
          { selector: "#" + R, type: "change", fn: function() {
            var te = S.default("#" + R), q = te.elems[0];
            if (!q)
              return !0;
            var ne = q.files;
            return ne != null && ne.length && w.uploadImg(ne), q && (q.value = ""), !0;
          } }
        ], M = [`<input
            id="` + I + `"
            type="text"
            class="block"
            placeholder="` + j("\u56FE\u7247\u5730\u5740") + '"/>'];
        x.showLinkImgAlt && M.push(`
        <input
            id="` + P + `"
            type="text"
            class="block"
            placeholder="` + j("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), x.showLinkImgHref && M.push(`
        <input
            id="` + F + `"
            type="text"
            class="block"
            placeholder="` + j("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
        var Y = [
          {
            title: j("\u4E0A\u4F20\u56FE\u7247"),
            tpl: B("w-e-up-img-container", "w-e-icon-upload2", ""),
            events: k
          },
          { title: j("\u7F51\u7EDC\u56FE\u7247"), tpl: `<div>
                    ` + M.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + H + '" class="right">' + j("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + H, type: "click", fn: function() {
            var te, q = S.default("#" + I), ne = (0, f.default)(te = q.val()).call(te);
            if (!!ne) {
              var fe;
              if (x.showLinkImgAlt) {
                var me;
                fe = (0, f.default)(me = S.default("#" + P).val()).call(me);
              }
              var pe;
              if (x.showLinkImgHref) {
                var ve;
                pe = (0, f.default)(ve = S.default("#" + F).val()).call(ve);
              }
              if (!!z(ne))
                return w.insertImg(ne, fe, pe), !0;
            }
          }, bindEnter: !0 }] }
        ], Q = { width: 300, height: 0, tabs: [], onlyUploadConf: { $elem: S.default(B("w-e-menu", "w-e-icon-image", "\u56FE\u7247")), events: k } };
        return window.FileReader && (x.uploadImgShowBase64 || x.uploadImgServer || x.customUploadImg || x.uploadImgFromMedia) && Q.tabs.push(Y[0]), x.showLinkImg && (Q.tabs.push(Y[1]), Q.onlyUploadConf = void 0), Q;
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = f.__importDefault(t(24)), p = f.__importDefault(t(366)), C = function(A) {
        f.__extends(y, A);
        function y(E) {
          var x = this, w = c.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), T = { width: 130, title: "\u8BBE\u7F6E\u7F29\u8FDB", type: "list", list: [{ $elem: c.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + E.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`), value: "increase" }, { $elem: c.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + E.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`), value: "decrease" }], clickHandler: function(I) {
            x.command(I);
          } };
          return x = A.call(this, w, E, T) || this, x;
        }
        return y.prototype.command = function(E) {
          var x = this.editor, w = x.selection.getSelectionContainerElem();
          if (w && x.$textElem.equal(w)) {
            var T = x.selection.getSelectionRangeTopNodes();
            T.length > 0 && (0, d.default)(T).call(T, function(R) {
              p.default(c.default(R), E, x);
            });
          } else
            w && w.length > 0 && (0, d.default)(w).call(w, function(R) {
              p.default(c.default(R), E, x);
            });
          x.selection.restoreSelection(), this.tryChangeActive();
        }, y.prototype.tryChangeActive = function() {
          var E = this.editor, x = E.selection.getSelectionStartElem(), w = c.default(x).getNodeTop(E);
          w.length <= 0 || (w.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
        }, y;
      }(S.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(367)), p = c.__importDefault(t(368)), C = /^(\d+)(\w+)$/, A = /^(\d+)%$/;
      function y(x) {
        var w = x.config.indentation;
        if (typeof w == "string") {
          if (C.test(w)) {
            var T, R = (0, d.default)(T = (0, f.default)(w).call(w).match(C)).call(T, 1, 3), I = R[0], P = R[1];
            return { value: Number(I), unit: P };
          } else if (A.test(w))
            return { value: Number((0, f.default)(w).call(w).match(A)[1]), unit: "%" };
        } else if (w.value !== void 0 && w.unit)
          return w;
        return { value: 2, unit: "em" };
      }
      function E(x, w, T) {
        var R = x.getNodeTop(T), I = /^(P|H[0-9]*)$/;
        I.test(R.getNodeName()) && (w === "increase" ? S.default(R, y(T)) : w === "decrease" && p.default(R, y(T)));
      }
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(c, S) {
        var p = c.elems[0];
        if (p.style.paddingLeft === "")
          c.css("padding-left", S.value + S.unit);
        else {
          var C = p.style.paddingLeft, A = (0, d.default)(C).call(C, 0, C.length - S.unit.length), y = Number(A) + S.value;
          c.css("padding-left", "" + y + S.unit);
        }
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(c, S) {
        var p = c.elems[0];
        if (p.style.paddingLeft !== "") {
          var C = p.style.paddingLeft, A = (0, d.default)(C).call(C, 0, C.length - S.unit.length), y = Number(A) - S.value;
          y > 0 ? c.css("padding-left", "" + y + S.unit) : c.css("padding-left", "");
        }
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(37)), S = d.__importDefault(t(32)), p = d.__importDefault(t(370)), C = function(A) {
        d.__extends(y, A);
        function y(E) {
          var x = this, w = f.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
          return x = A.call(this, w, E) || this, x;
        }
        return y.prototype.createPanel = function() {
          var E = p.default(this.editor), x = new S.default(this, E);
          x.create();
        }, y.prototype.clickHandler = function() {
          this.createPanel();
        }, y.prototype.tryChangeActive = function() {
        }, y;
      }(c.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26)), f = s(t(70)), c = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var S = t(2), p = S.__importDefault(t(3));
      function C(A) {
        var y = A.config.emotions;
        function E(T) {
          var R = [];
          if (T.type == "image") {
            var I;
            R = (0, d.default)(I = T.content).call(I, function(F) {
              return typeof F == "string" ? "" : '<span  title="' + F.alt + `">
                    <img class="eleImg" data-emoji="` + F.alt + '" style src="' + F.src + '" alt="[' + F.alt + `]">
                </span>`;
            }), R = (0, f.default)(R).call(R, function(F) {
              return F !== "";
            });
          } else {
            var P;
            R = (0, d.default)(P = T.content).call(P, function(F) {
              return '<span class="eleImg" title="' + F + '">' + F + "</span>";
            });
          }
          return R.join("").replace(/&nbsp;/g, "");
        }
        var x = (0, d.default)(y).call(y, function(T) {
          return {
            title: A.i18next.t("menus.panelMenus.emoticon." + T.title),
            tpl: "<div>" + E(T) + "</div>",
            events: [{ selector: ".eleImg", type: "click", fn: function(I) {
              var P = p.default(I.target), F = P.getNodeName(), H;
              if (F === "IMG") {
                var W;
                H = (0, c.default)(W = P.parent().html()).call(W);
              } else
                H = "<span>" + P.html() + "</span>";
              return A.cmd.do("insertHTML", H), !0;
            } }]
          };
        }), w = { width: 300, height: 230, tabs: x };
        return w;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createListHandle = o.ClassType = void 0;
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(372)), S = d.__importDefault(t(374)), p = d.__importDefault(t(375)), C = d.__importDefault(t(376)), A = d.__importDefault(t(377)), y;
      (function(T) {
        T.Wrap = "WrapListHandle", T.Join = "JoinListHandle", T.StartJoin = "StartJoinListHandle", T.EndJoin = "EndJoinListHandle", T.Other = "OtherListHandle";
      })(y = o.ClassType || (o.ClassType = {}));
      var E = { WrapListHandle: c.default, JoinListHandle: S.default, StartJoinListHandle: p.default, EndJoinListHandle: C.default, OtherListHandle: A.default };
      function x(T, R, I) {
        if (T === y.Other && I === void 0)
          throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
        return T !== y.Other ? new E[T](R) : new E[T](R, I);
      }
      o.createListHandle = x;
      var w = function() {
        function T(R) {
          this.handle = R, this.handle.exec();
        }
        return T.prototype.getSelectionRangeElem = function() {
          return f.default(this.handle.selectionRangeElem.get());
        }, T;
      }();
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(58), p = t(47), C = function(A) {
        f.__extends(y, A);
        function y(E) {
          return A.call(this, E) || this;
        }
        return y.prototype.exec = function() {
          var E = this.options, x = E.listType, w = E.listTarget, T = E.$selectionElem, R = E.$startElem, I = E.$endElem, P, F = [], H = T == null ? void 0 : T.getNodeName(), W = R.prior, j = I.prior;
          if (!R.prior && !I.prior || !(W != null && W.prev().length) && !(j != null && j.next().length)) {
            var z;
            (0, d.default)(z = T == null ? void 0 : T.children()).call(z, function(Q) {
              F.push(c.default(Q));
            }), H === x ? P = p.createElementFragment(
              F,
              p.createDocumentFragment(),
              "p"
            ) : (P = p.createElement(w), (0, d.default)(F).call(F, function(Q) {
              P.appendChild(Q.elems[0]);
            })), this.selectionRangeElem.set(P), p.insertBefore(T, P, T.elems[0]), T.remove();
          } else {
            for (var L = W; L.length; )
              F.push(L), j != null && j.equal(L) ? L = c.default(void 0) : L = L.next();
            var $ = W.prev(), B = j.next();
            if (H === x ? P = p.createElementFragment(
              F,
              p.createDocumentFragment(),
              "p"
            ) : (P = p.createElement(w), (0, d.default)(F).call(F, function(Q) {
              P.append(Q.elems[0]);
            })), $.length && B.length) {
              for (var k = []; B.length; )
                k.push(B), B = B.next();
              var M = p.createElement(H);
              (0, d.default)(k).call(k, function(Q) {
                M.append(Q.elems[0]);
              }), c.default(M).insertAfter(T), this.selectionRangeElem.set(P);
              var Y = T.next();
              Y.length ? p.insertBefore(T, P, Y.elems[0]) : T.parent().elems[0].append(P);
            } else if (!$.length)
              this.selectionRangeElem.set(P), p.insertBefore(T, P, T.elems[0]);
            else {
              this.selectionRangeElem.set(P);
              var Y = T.next();
              Y.length ? p.insertBefore(T, P, Y.elems[0]) : T.parent().elems[0].append(P);
            }
          }
        }, y;
      }(S.ListHandle);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = function() {
        function c() {
          this._element = null;
        }
        return c.prototype.set = function(S) {
          if (S instanceof DocumentFragment) {
            var p, C = [];
            (0, d.default)(p = S.childNodes).call(p, function(A) {
              C.push(A);
            }), S = C;
          }
          this._element = S;
        }, c.prototype.get = function() {
          return this._element;
        }, c.prototype.clear = function() {
          this._element = null;
        }, c;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(58), p = t(47), C = function(A) {
        f.__extends(y, A);
        function y(E) {
          return A.call(this, E) || this;
        }
        return y.prototype.exec = function() {
          var E, x, w, T, R, I, P, F = this.options, H = F.editor, W = F.listType, j = F.listTarget, z = F.$startElem, L = F.$endElem, $, B = H.selection.getSelectionRangeTopNodes(), k = z == null ? void 0 : z.getNodeName(), M = L == null ? void 0 : L.getNodeName();
          if (k === M)
            if (B.length > 2)
              if (B.shift(), B.pop(), $ = p.createElementFragment(
                p.filterSelectionNodes(B),
                p.createDocumentFragment()
              ), k === W)
                (E = L.children()) === null || E === void 0 || (0, d.default)(E).call(E, function(se) {
                  $.append(se);
                }), L.remove(), this.selectionRangeElem.set($), z.elems[0].append($);
              else {
                for (var Y = document.createDocumentFragment(), Q = document.createDocumentFragment(), Z = p.getStartPoint(z); Z.length; ) {
                  var te = Z.elems[0];
                  Z = Z.next(), Y.append(te);
                }
                for (var q = p.getEndPoint(L), ne = []; q.length; )
                  ne.unshift(q.elems[0]), q = q.prev();
                (0, d.default)(ne).call(ne, function(se) {
                  Q.append(se);
                });
                var fe = p.createElement(j);
                fe.append(Y), fe.append($), fe.append(Q), $ = fe, this.selectionRangeElem.set($), c.default(fe).insertAfter(z), !(!((x = z.children()) === null || x === void 0) && x.length) && z.remove(), !(!((w = L.children()) === null || w === void 0) && w.length) && L.remove();
              }
            else {
              B.length = 0;
              for (var Z = p.getStartPoint(z); Z.length; )
                B.push(Z), Z = Z.next();
              for (var q = p.getEndPoint(L), ne = []; q.length; )
                ne.unshift(q), q = q.prev();
              B.push.apply(B, ne), k === W ? ($ = p.createElementFragment(B, p.createDocumentFragment(), "p"), this.selectionRangeElem.set($), p.insertBefore(z, $, L.elems[0])) : ($ = p.createElement(j), (0, d.default)(B).call(B, function(ce) {
                $.append(ce.elems[0]);
              }), this.selectionRangeElem.set($), c.default($).insertAfter(z)), !(!((T = z.children()) === null || T === void 0) && T.length) && L.remove(), !(!((R = L.children()) === null || R === void 0) && R.length) && L.remove();
            }
          else {
            for (var me = [], q = p.getEndPoint(L); q.length; )
              me.unshift(q), q = q.prev();
            for (var pe = [], Z = p.getStartPoint(z); Z.length; )
              pe.push(Z), Z = Z.next();
            if ($ = p.createDocumentFragment(), B.shift(), B.pop(), (0, d.default)(pe).call(pe, function(ue) {
              return $.append(ue.elems[0]);
            }), $ = p.createElementFragment(
              p.filterSelectionNodes(B),
              $
            ), (0, d.default)(me).call(me, function(ue) {
              return $.append(ue.elems[0]);
            }), this.selectionRangeElem.set($), k === W)
              z.elems[0].append($), !(!((I = L.children()) === null || I === void 0) && I.length) && L.remove();
            else if (!((P = L.children()) === null || P === void 0) && P.length) {
              var ve = L.children();
              p.insertBefore(ve, $, ve.elems[0]);
            } else
              L.elems[0].append($);
          }
        }, y;
      }(S.ListHandle);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(58), p = t(47), C = function(A) {
        f.__extends(y, A);
        function y(E) {
          return A.call(this, E) || this;
        }
        return y.prototype.exec = function() {
          var E, x = this.options, w = x.editor, T = x.listType, R = x.listTarget, I = x.$startElem, P, F = w.selection.getSelectionRangeTopNodes(), H = I == null ? void 0 : I.getNodeName();
          F.shift();
          for (var W = [], j = p.getStartPoint(I); j.length; )
            W.push(j), j = j.next();
          H === T ? (P = p.createDocumentFragment(), (0, d.default)(W).call(W, function(z) {
            return P.append(z.elems[0]);
          }), P = p.createElementFragment(
            p.filterSelectionNodes(F),
            P
          ), this.selectionRangeElem.set(P), I.elems[0].append(P)) : (P = p.createElement(R), (0, d.default)(W).call(W, function(z) {
            return P.append(z.elems[0]);
          }), P = p.createElementFragment(
            p.filterSelectionNodes(F),
            P
          ), this.selectionRangeElem.set(P), c.default(P).insertAfter(I), !(!((E = I.children()) === null || E === void 0) && E.length) && I.remove());
        }, y;
      }(S.ListHandle);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(58), p = t(47), C = function(A) {
        f.__extends(y, A);
        function y(E) {
          return A.call(this, E) || this;
        }
        return y.prototype.exec = function() {
          var E, x, w = this.options, T = w.editor, R = w.listType, I = w.listTarget, P = w.$endElem, F, H = T.selection.getSelectionRangeTopNodes(), W = P == null ? void 0 : P.getNodeName();
          H.pop();
          for (var j = [], z = p.getEndPoint(P); z.length; )
            j.unshift(z), z = z.prev();
          if (W === R)
            if (F = p.createElementFragment(
              p.filterSelectionNodes(H),
              p.createDocumentFragment()
            ), (0, d.default)(j).call(j, function(B) {
              return F.append(B.elems[0]);
            }), this.selectionRangeElem.set(F), !((E = P.children()) === null || E === void 0) && E.length) {
              var L = P.children();
              p.insertBefore(L, F, L.elems[0]);
            } else
              P.elems[0].append(F);
          else {
            var $ = p.filterSelectionNodes(H);
            $.push.apply($, j), F = p.createElementFragment(
              $,
              p.createElement(I)
            ), this.selectionRangeElem.set(F), c.default(F).insertBefore(P), !(!((x = P.children()) === null || x === void 0) && x.length) && P.remove();
          }
        }, y;
      }(S.ListHandle);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(58), c = t(47), S = function(p) {
        d.__extends(C, p);
        function C(A, y) {
          var E = p.call(this, A) || this;
          return E.range = y, E;
        }
        return C.prototype.exec = function() {
          var A = this.options, y = A.editor, E = A.listTarget, x = y.selection.getSelectionRangeTopNodes(), w = c.createElementFragment(
            c.filterSelectionNodes(x),
            c.createElement(E)
          );
          this.selectionRangeElem.set(w), this.range.insertNode(w);
        }, C;
      }(f.ListHandle);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(24)), p = c.__importDefault(t(3)), C = c.__importDefault(t(379)), A = t(6), y = function(E) {
        c.__extends(x, E);
        function x(w) {
          var T = this, R = p.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), I = new C.default(w, w.config.lineHeights), P = { width: 100, title: "\u8BBE\u7F6E\u884C\u9AD8", type: "list", list: I.getItemList(), clickHandler: function(H) {
            w.selection.saveRange(), T.command(H);
          } };
          return T = E.call(this, R, w, P) || this, T;
        }
        return x.prototype.command = function(w) {
          var T = this, R, I = window.getSelection ? window.getSelection() : document.getSelection(), P = ["P"], F = this.editor, H = "";
          F.selection.restoreSelection();
          var W = p.default(F.selection.getSelectionContainerElem());
          if (!!(W != null && W.length)) {
            var j = p.default(F.selection.getSelectionContainerElem()), z = p.default(F.selection.getSelectionStartElem()).elems[0], L = "", $ = [], B = "";
            if (W && F.$textElem.equal(W)) {
              var k = A.UA.isIE(), M = [], Y = [], Q = [], Z = p.default(F.selection.getSelectionStartElem()), te = p.default(F.selection.getSelectionEndElem()), q = (R = F.selection.getRange()) === null || R === void 0 ? void 0 : R.commonAncestorContainer.childNodes;
              Y.push(this.getDom(Z.elems[0])), q == null || (0, d.default)(q).call(q, function(ve, se) {
                ve === T.getDom(Z.elems[0]) && M.push(se), ve === T.getDom(te.elems[0]) && M.push(se);
              });
              var ne = 0, fe = void 0;
              for (Q.push(this.getDom(Z.elems[0])); Y[ne] !== this.getDom(te.elems[0]); )
                fe = p.default(Y[ne].nextElementSibling).elems[0], (0, f.default)(P).call(P, p.default(fe).getNodeName()) !== -1 && Q.push(fe), Y.push(fe), ne++;
              if (p.default(Y[0]).getNodeName() !== "P") {
                ne = 0;
                for (var me = 0; me < Y.length; me++)
                  if (p.default(Y[me]).getNodeName() === "P") {
                    ne = me;
                    break;
                  }
                if (ne === 0)
                  return;
                for (var pe = 0; pe !== ne; )
                  Y.shift(), pe++;
              }
              this.setRange(Y[0], Y[Y.length - 1]), (0, d.default)(Y).call(Y, function(ve) {
                L = ve.getAttribute("style"), $ = L ? L.split(";") : [], B = T.styleProcessing($), p.default(ve).getNodeName() === "P" && w && (B += w ? "line-height:" + w + ";" : ""), k ? p.default(ve).css("line-height", w) : H += "<" + p.default(ve).getNodeName().toLowerCase() + ' style="' + B + '">' + ve.innerHTML + "</" + p.default(ve).getNodeName().toLowerCase() + ">";
              }), H && this.action(H, F), z = j.elems[0], this.setRange(z.children[M[0]], z.children[M[1]]);
              return;
            }
            if (z = this.getDom(z), (0, f.default)(P).call(P, p.default(z).getNodeName()) !== -1) {
              if (L = z.getAttribute("style"), $ = L ? L.split(";") : [], I == null || I.selectAllChildren(z), F.selection.saveRange(), !w) {
                L && (B = this.styleProcessing($), B === "" ? H = "<" + p.default(z).getNodeName().toLowerCase() + ">" + z.innerHTML + "</" + p.default(z).getNodeName().toLowerCase() + ">" : H = "<" + p.default(z).getNodeName().toLowerCase() + ' style="' + B + '">' + z.innerHTML + "</" + p.default(z).getNodeName().toLowerCase() + ">", this.action(H, F));
                return;
              }
              L ? B = this.styleProcessing($) + ("line-height:" + w + ";") : B = "line-height:" + w + ";", H = "<" + p.default(z).getNodeName().toLowerCase() + ' style="' + B + '">' + z.innerHTML + "</" + p.default(z).getNodeName().toLowerCase() + ">", p.default(z).getNodeName() === "BLOCKQUOTE" || A.UA.isIE() ? p.default(z).css("line-height", w) : this.action(H, F);
            }
          }
        }, x.prototype.getDom = function(w) {
          var T = p.default(w).elems[0];
          if (!T.parentNode)
            return T;
          function R(I, P) {
            var F = p.default(I.parentNode);
            return P.$textElem.equal(F) ? I : R(F.elems[0], P);
          }
          return T = R(T, this.editor), T;
        }, x.prototype.action = function(w, T) {
          T.cmd.do("insertHTML", w);
        }, x.prototype.styleProcessing = function(w) {
          var T = "";
          return (0, d.default)(w).call(w, function(R) {
            R !== "" && (0, f.default)(R).call(R, "line-height") === -1 && (T = T + R + ";");
          }), T;
        }, x.prototype.setRange = function(w, T) {
          var R = this.editor, I = window.getSelection ? window.getSelection() : document.getSelection();
          I == null || I.removeAllRanges();
          var P = document.createRange(), F = w, H = T;
          P.setStart(F, 0), P.setEnd(H, 1), I == null || I.addRange(P), R.selection.saveRange(), I == null || I.removeAllRanges(), R.selection.restoreSelection();
        }, x.prototype.tryChangeActive = function() {
          var w = this.editor, T = w.selection.getSelectionContainerElem();
          if (!(T && w.$textElem.equal(T))) {
            var R = p.default(w.selection.getSelectionStartElem());
            if (R.length !== 0) {
              R = this.getDom(R.elems[0]);
              var I = R.getAttribute("style") ? R.getAttribute("style") : "";
              I && (0, f.default)(I).call(I, "line-height") !== -1 ? this.active() : this.unActive();
            }
          }
        }, x;
      }(S.default);
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = function() {
        function p(C, A) {
          var y = this;
          this.itemList = [{ $elem: c.default("<span>" + C.i18next.t("\u9ED8\u8BA4") + "</span>"), value: "" }], (0, d.default)(A).call(A, function(E) {
            y.itemList.push({ $elem: c.default("<span>" + E + "</span>"), value: E });
          });
        }
        return p.prototype.getItemList = function() {
          return this.itemList;
        }, p;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(23)), S = function(p) {
        d.__extends(C, p);
        function C(A) {
          var y = this, E = f.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
          return y = p.call(this, E, A) || this, y;
        }
        return C.prototype.clickHandler = function() {
          var A = this.editor;
          A.history.revoke();
          var y = A.$textElem.children();
          if (!!(y != null && y.length)) {
            var E = y.last();
            A.selection.createRangeByElem(E, !1, !0), A.selection.restoreSelection();
          }
        }, C.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
        }, C;
      }(c.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(23)), S = function(p) {
        d.__extends(C, p);
        function C(A) {
          var y = this, E = f.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
          return y = p.call(this, E, A) || this, y;
        }
        return C.prototype.clickHandler = function() {
          var A = this.editor;
          A.history.restore();
          var y = A.$textElem.children();
          if (!!(y != null && y.length)) {
            var E = y.last();
            A.selection.createRangeByElem(E, !1, !0), A.selection.restoreSelection();
          }
        }, C.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
        }, C;
      }(c.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(37)), c = d.__importDefault(t(3)), S = d.__importDefault(t(383)), p = d.__importDefault(t(32)), C = d.__importDefault(t(392)), A = function(y) {
        d.__extends(E, y);
        function E(x) {
          var w = this, T = c.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
          return w = y.call(this, T, x) || this, C.default(x), w;
        }
        return E.prototype.clickHandler = function() {
          this.createPanel();
        }, E.prototype.createPanel = function() {
          var x = S.default(this.editor), w = new p.default(this, x);
          w.create();
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(f.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(384));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(6), S = f.__importDefault(t(3));
      t(389);
      var p = f.__importDefault(t(391));
      function C(y) {
        return y > 0 && (0, d.default)(y);
      }
      function A(y) {
        var E = new p.default(y), x = c.getRandom("w-col-id"), w = c.getRandom("w-row-id"), T = c.getRandom("btn-link"), R = "menus.panelMenus.table.", I = function(W) {
          return y.i18next.t(W);
        }, P = [{ title: I(R + "\u63D2\u5165\u8868\u683C"), tpl: `<div>
                    <div class="w-e-table">
                        <span>` + I("\u521B\u5EFA") + `</span>
                        <input id="` + w + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + I(R + "\u884C") + `</span>
                        <input id="` + x + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (I(R + "\u5217") + I(R + "\u7684") + I(R + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + T + '" class="right">' + I("\u63D2\u5165") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + T, type: "click", fn: function() {
          var W = Number(S.default("#" + x).val()), j = Number(S.default("#" + w).val());
          return C(j) && C(W) ? (E.createAction(j, W), !0) : (y.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
        }, bindEnter: !0 }] }], F = { width: 330, height: 0, tabs: [] };
        return F.tabs.push(P[0]), F;
      }
      o.default = A;
    }, function(l, o, t) {
      l.exports = t(385);
    }, function(l, o, t) {
      var s = t(386);
      l.exports = s;
    }, function(l, o, t) {
      t(387);
      var s = t(9);
      l.exports = s.Number.isInteger;
    }, function(l, o, t) {
      var s = t(5), u = t(388);
      s({ target: "Number", stat: !0 }, { isInteger: u });
    }, function(l, o, t) {
      var s = t(13), u = Math.floor;
      l.exports = function(f) {
        return !s(f) && isFinite(f) && u(f) === f;
      };
    }, function(l, o, t) {
      var s = t(20), u = t(390);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(7), c = d.__importDefault(t(3)), S = function() {
        function p(C) {
          this.editor = C;
        }
        return p.prototype.createAction = function(C, A) {
          var y = this.editor, E = c.default(y.selection.getSelectionContainerElem()), x = c.default(E.elems[0]).parentUntilEditor("UL", y), w = c.default(E.elems[0]).parentUntilEditor("OL", y);
          if (!(x || w)) {
            var T = this.createTableHtml(C, A);
            y.cmd.do("insertHTML", T);
          }
        }, p.prototype.createTableHtml = function(C, A) {
          for (var y = "", E = "", x = 0; x < C; x++) {
            E = "";
            for (var w = 0; w < A; w++)
              x === 0 ? E = E + "<th></th>" : E = E + "<td></td>";
            y = y + "<tr>" + E + "</tr>";
          }
          var T = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + y + ("</tbody></table>" + f.EMPTY_P);
          return T;
        }, p;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(393)), c = t(400);
      function S(p) {
        f.default(p), c.bindEventKeyboardEvent(p), c.bindClickEvent(p);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(38)), S = d.__importDefault(t(394)), p = d.__importDefault(t(399)), C = t(7);
      function A(w) {
        var T;
        function R(P) {
          var F = new p.default(w), H = "menus.panelMenus.table.", W = function(L, $) {
            return $ === void 0 && ($ = H), w.i18next.t($ + L);
          }, j = [{
            $elem: f.default("<span>" + W("\u5220\u9664\u8868\u683C") + "</span>"),
            onClick: function(L, $) {
              return L.selection.createRangeByElem($), L.selection.restoreSelection(), L.cmd.do("insertHTML", C.EMPTY_P), !0;
            }
          }, { $elem: f.default("<span>" + W("\u6DFB\u52A0\u884C") + "</span>"), onClick: function(L, $) {
            var B = y(L);
            if (B)
              return !0;
            var k = f.default(L.selection.getSelectionStartElem()), M = F.getRowNode(k.elems[0]);
            if (!M)
              return !0;
            var Y = Number(F.getCurrentRowIndex($.elems[0], M)), Q = F.getTableHtml($.elems[0]), Z = F.getTableHtml(S.default.ProcessingRow(f.default(Q), Y).elems[0]);
            return Z = x($, Z), L.selection.createRangeByElem($), L.selection.restoreSelection(), L.cmd.do("insertHTML", Z), !0;
          } }, { $elem: f.default("<span>" + W("\u5220\u9664\u884C") + "</span>"), onClick: function(L, $) {
            var B = y(L);
            if (B)
              return !0;
            var k = f.default(L.selection.getSelectionStartElem()), M = F.getRowNode(k.elems[0]);
            if (!M)
              return !0;
            var Y = Number(F.getCurrentRowIndex($.elems[0], M)), Q = F.getTableHtml($.elems[0]), Z = S.default.DeleteRow(f.default(Q), Y).elems[0].children[0].children.length, te = "";
            return L.selection.createRangeByElem($), L.selection.restoreSelection(), Z === 0 ? te = C.EMPTY_P : te = F.getTableHtml(S.default.DeleteRow(f.default(Q), Y).elems[0]), te = x($, te), L.cmd.do("insertHTML", te), !0;
          } }, { $elem: f.default("<span>" + W("\u6DFB\u52A0\u5217") + "</span>"), onClick: function(L, $) {
            var B = y(L);
            if (B)
              return !0;
            var k = f.default(L.selection.getSelectionStartElem()), M = F.getCurrentColIndex(k.elems[0]), Y = F.getTableHtml($.elems[0]), Q = F.getTableHtml(S.default.ProcessingCol(f.default(Y), M).elems[0]);
            return Q = x($, Q), L.selection.createRangeByElem($), L.selection.restoreSelection(), L.cmd.do("insertHTML", Q), !0;
          } }, { $elem: f.default("<span>" + W("\u5220\u9664\u5217") + "</span>"), onClick: function(L, $) {
            var B = y(L);
            if (B)
              return !0;
            var k = f.default(L.selection.getSelectionStartElem()), M = F.getCurrentColIndex(k.elems[0]), Y = F.getTableHtml($.elems[0]), Q = S.default.DeleteCol(f.default(Y), M), Z = Q.elems[0].children[0].children[0].children.length, te = "";
            return L.selection.createRangeByElem($), L.selection.restoreSelection(), Z === 0 ? te = C.EMPTY_P : te = F.getTableHtml(Q.elems[0]), te = x($, te), L.cmd.do("insertHTML", te), !0;
          } }, { $elem: f.default("<span>" + W("\u8BBE\u7F6E\u8868\u5934") + "</span>"), onClick: function(L, $) {
            var B = y(L);
            if (B)
              return !0;
            var k = f.default(L.selection.getSelectionStartElem()), M = F.getRowNode(k.elems[0]);
            if (!M)
              return !0;
            var Y = Number(F.getCurrentRowIndex($.elems[0], M));
            Y !== 0 && (Y = 0);
            var Q = F.getTableHtml($.elems[0]), Z = F.getTableHtml(S.default.setTheHeader(f.default(Q), Y, "th").elems[0]);
            return Z = x($, Z), L.selection.createRangeByElem($), L.selection.restoreSelection(), L.cmd.do("insertHTML", Z), !0;
          } }, { $elem: f.default("<span>" + W("\u53D6\u6D88\u8868\u5934") + "</span>"), onClick: function(L, $) {
            var B = f.default(L.selection.getSelectionStartElem()), k = F.getRowNode(B.elems[0]);
            if (!k)
              return !0;
            var M = Number(F.getCurrentRowIndex($.elems[0], k));
            M !== 0 && (M = 0);
            var Y = F.getTableHtml($.elems[0]), Q = F.getTableHtml(S.default.setTheHeader(f.default(Y), M, "td").elems[0]);
            return Q = x($, Q), L.selection.createRangeByElem($), L.selection.restoreSelection(), L.cmd.do("insertHTML", Q), !0;
          } }];
          T = new c.default(w, P, j), T.create();
        }
        function I() {
          T && (T.remove(), T = null);
        }
        return { showTableTooltip: R, hideTableTooltip: I };
      }
      function y(w) {
        var T = w.selection.getSelectionStartElem(), R = w.selection.getSelectionEndElem();
        return (T == null ? void 0 : T.elems[0]) !== (R == null ? void 0 : R.elems[0]);
      }
      function E(w) {
        var T = A(w), R = T.showTableTooltip, I = T.hideTableTooltip;
        w.txt.eventHooks.tableClickEvents.push(R), w.txt.eventHooks.clickEvents.push(I), w.txt.eventHooks.keyupEvents.push(I), w.txt.eventHooks.toolbarClickEvents.push(I), w.txt.eventHooks.menuClickEvents.push(I), w.txt.eventHooks.textScrollEvents.push(I);
      }
      o.default = E;
      function x(w, T) {
        var R = w.elems[0].nextSibling;
        return (!R || R.innerHTML === "<br>") && (T += "" + C.EMPTY_P), T;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45)), f = s(t(91)), c = s(t(4)), S = s(t(138));
      (0, u.default)(o, "__esModule", { value: !0 });
      var p = t(2), C = p.__importDefault(t(3));
      function A(I, P) {
        for (var F = R(I), H = (0, d.default)(Array.prototype).apply(F.children), W = H[0].children.length, j = document.createElement("tr"), z = 0; z < W; z++) {
          var L = document.createElement("td");
          j.appendChild(L);
        }
        return (0, f.default)(H).call(H, P + 1, 0, j), T(F, H), C.default(F.parentNode);
      }
      function y(I, P) {
        for (var F = R(I), H = (0, d.default)(Array.prototype).apply(F.children), W = function(L) {
          var $, B = [];
          for ((0, c.default)($ = (0, S.default)(H[L].children)).call($, function(Y) {
            B.push(Y);
          }); H[L].children.length !== 0; )
            H[L].removeChild(H[L].children[0]);
          var k = C.default(B[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
          (0, f.default)(B).call(B, P + 1, 0, k);
          for (var M = 0; M < B.length; M++)
            H[L].appendChild(B[M]);
        }, j = 0; j < H.length; j++)
          W(j);
        return T(F, H), C.default(F.parentNode);
      }
      function E(I, P) {
        var F = R(I), H = (0, d.default)(Array.prototype).apply(F.children);
        return (0, f.default)(H).call(H, P, 1), T(F, H), C.default(F.parentNode);
      }
      function x(I, P) {
        for (var F = R(I), H = (0, d.default)(Array.prototype).apply(F.children), W = function(L) {
          var $, B = [];
          for ((0, c.default)($ = (0, S.default)(H[L].children)).call($, function(M) {
            B.push(M);
          }); H[L].children.length !== 0; )
            H[L].removeChild(H[L].children[0]);
          (0, f.default)(B).call(B, P, 1);
          for (var k = 0; k < B.length; k++)
            H[L].appendChild(B[k]);
        }, j = 0; j < H.length; j++)
          W(j);
        return T(F, H), C.default(F.parentNode);
      }
      function w(I, P, F) {
        for (var H = R(I), W = (0, d.default)(Array.prototype).apply(H.children), j = W[P].children, z = document.createElement("tr"), L = function(k) {
          var M, Y = document.createElement(F), Q = j[k];
          (0, c.default)(M = (0, S.default)(Q.childNodes)).call(M, function(Z) {
            Y.appendChild(Z);
          }), z.appendChild(Y);
        }, $ = 0; $ < j.length; $++)
          L($);
        return (0, f.default)(W).call(W, P, 1, z), T(H, W), C.default(H.parentNode);
      }
      function T(I, P) {
        for (; I.children.length !== 0; )
          I.removeChild(I.children[0]);
        for (var F = 0; F < P.length; F++)
          I.appendChild(P[F]);
      }
      function R(I) {
        var P = I.elems[0].children[0];
        return P.nodeName === "COLGROUP" && (P = I.elems[0].children[I.elems[0].children.length - 1]), P;
      }
      o.default = { ProcessingRow: A, ProcessingCol: y, DeleteRow: E, DeleteCol: x, setTheHeader: w };
    }, function(l, o, t) {
      var s = t(396);
      l.exports = s;
    }, function(l, o, t) {
      t(50), t(397);
      var s = t(9);
      l.exports = s.Array.from;
    }, function(l, o, t) {
      var s = t(5), u = t(398), d = t(114), f = !d(function(c) {
        Array.from(c);
      });
      s({ target: "Array", stat: !0, forced: f }, { from: u });
    }, function(l, o, t) {
      var s = t(39), u = t(29), d = t(113), f = t(111), c = t(34), S = t(69), p = t(112);
      l.exports = function(A) {
        var y = u(A), E = typeof this == "function" ? this : Array, x = arguments.length, w = x > 1 ? arguments[1] : void 0, T = w !== void 0, R = p(y), I = 0, P, F, H, W, j, z;
        if (T && (w = s(w, x > 2 ? arguments[2] : void 0, 2)), R != null && !(E == Array && f(R)))
          for (W = R.call(y), j = W.next, F = new E(); !(H = j.call(W)).done; I++)
            z = T ? d(W, w, [H.value, I], !0) : H.value, S(F, I, z);
        else
          for (P = c(y.length), F = new E(P); P > I; I++)
            z = T ? w(y[I], I) : y[I], S(F, I, z);
        return F.length = I, F;
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(138));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(3)), p = function() {
        function C(A) {
          this.editor = A;
        }
        return C.prototype.getRowNode = function(A) {
          var y, E = S.default(A).elems[0];
          return E.parentNode && (E = (y = S.default(E).parentUntil("TR", E)) === null || y === void 0 ? void 0 : y.elems[0]), E;
        }, C.prototype.getCurrentRowIndex = function(A, y) {
          var E, x = 0, w = A.children[0];
          return w.nodeName === "COLGROUP" && (w = A.children[A.children.length - 1]), (0, d.default)(E = (0, f.default)(w.children)).call(E, function(T, R) {
            T === y && (x = R);
          }), x;
        }, C.prototype.getCurrentColIndex = function(A) {
          var y, E, x = 0, w = S.default(A).getNodeName() === "TD" || S.default(A).getNodeName() === "TH" ? A : (E = S.default(A).parentUntil("TD", A)) === null || E === void 0 ? void 0 : E.elems[0], T = S.default(w).parent();
          return (0, d.default)(y = (0, f.default)(T.elems[0].children)).call(y, function(R, I) {
            R === w && (x = I);
          }), x;
        }, C.prototype.getTableHtml = function(A) {
          var y = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + S.default(A).html() + "</table>";
          return y;
        }, C;
      }();
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.bindEventKeyboardEvent = o.bindClickEvent = void 0;
      var d = t(2), f = d.__importDefault(t(3));
      function c(C) {
        if (!C.length)
          return !1;
        var A = C.elems[0];
        return A.nodeName === "P" && A.innerHTML === "<br>";
      }
      function S(C) {
        function A(y, E) {
          if (E.detail >= 3) {
            var x = window.getSelection();
            if (x) {
              var w = x.focusNode, T = x.anchorNode, R = f.default(T == null ? void 0 : T.parentElement);
              if (!y.isContain(f.default(w))) {
                var I = R.elems[0].tagName === "TD" ? R : R.parentUntilEditor("td", C);
                if (I) {
                  var P = C.selection.getRange();
                  P == null || P.setEnd(I.elems[0], I.elems[0].childNodes.length), C.selection.restoreSelection();
                }
              }
            }
          }
        }
        C.txt.eventHooks.tableClickEvents.push(A);
      }
      o.bindClickEvent = S;
      function p(C) {
        var A = C.txt, y = C.selection, E = A.eventHooks.keydownEvents;
        E.push(function(x) {
          C.selection.saveRange();
          var w = y.getSelectionContainerElem();
          if (w) {
            var T = w.getNodeTop(C), R = T.length && T.prev().length ? T.prev() : null;
            if (R && R.getNodeName() === "TABLE" && y.isSelectionEmpty() && y.getCursorPos() === 0 && x.keyCode === 8) {
              var I = T.next(), P = !!I.length;
              P && c(T) && (T.remove(), C.selection.setRangeToElem(I.elems[0])), x.preventDefault();
            }
          }
        });
      }
      o.bindEventKeyboardEvent = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 }), o.formatCodeHtml = void 0;
      var f = t(2), c = f.__importDefault(t(37)), S = f.__importDefault(t(3)), p = t(6), C = f.__importDefault(t(402)), A = f.__importDefault(t(139)), y = f.__importDefault(t(32)), E = f.__importDefault(t(403));
      function x(T, R) {
        if (!R)
          return R;
        return R = P(R), R = I(R), R = p.replaceSpecialSymbol(R), R;
        function I(F) {
          var H = F.match(/<pre[\s|\S]+?\/pre>/g);
          return H === null || (0, d.default)(H).call(H, function(W) {
            F = F.replace(W, W.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
          }), F;
        }
        function P(F) {
          var H, W = F.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
          if (!W || !W.length)
            return F;
          for (var j = (0, d.default)(H = p.deepClone(W)).call(H, function(L) {
            return L = L.replace(/<span\sclass="hljs[^>]+>/, ""), L.replace(/<\/span>/, "");
          }), z = 0; z < W.length; z++)
            F = F.replace(W[z], j[z]);
          return P(F);
        }
      }
      o.formatCodeHtml = x;
      var w = function(T) {
        f.__extends(R, T);
        function R(I) {
          var P = this, F = S.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
          return P = T.call(this, F, I) || this, E.default(I), P;
        }
        return R.prototype.insertLineCode = function(I) {
          var P = this.editor, F = S.default("<code>" + I + "</code>");
          P.cmd.do("insertElem", F), P.selection.createRangeByElem(F, !1), P.selection.restoreSelection();
        }, R.prototype.clickHandler = function() {
          var I = this.editor, P = I.selection.getSelectionText();
          this.isActive || (I.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(P));
        }, R.prototype.createPanel = function(I, P) {
          var F = C.default(this.editor, I, P), H = new y.default(this, F);
          H.create();
        }, R.prototype.tryChangeActive = function() {
          var I = this.editor;
          A.default(I) ? this.active() : this.unActive();
        }, R;
      }(c.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = t(6), S = f.__importDefault(t(3)), p = f.__importDefault(t(139)), C = t(7);
      function A(y, E, x) {
        var w, T = c.getRandom("input-iframe"), R = c.getRandom("select"), I = c.getRandom("btn-ok");
        function P(j) {
          var z, L = p.default(y);
          L && F();
          var $ = (z = y.selection.getSelectionStartElem()) === null || z === void 0 ? void 0 : z.elems[0].innerHTML;
          $ && y.cmd.do("insertHTML", C.EMPTY_P), y.cmd.do("insertHTML", j);
          var B = y.selection.getSelectionStartElem(), k = B == null ? void 0 : B.getNodeTop(y);
          (k == null ? void 0 : k.getNextSibling().elems.length) === 0 && S.default(C.EMPTY_P).insertAfter(k);
        }
        function F() {
          if (!!p.default(y)) {
            var j = y.selection.getSelectionStartElem(), z = j == null ? void 0 : j.getNodeTop(y);
            !z || (y.selection.createRangeByElem(z), y.selection.restoreSelection());
          }
        }
        var H = function(z) {
          return y.i18next.t(z);
        }, W = {
          width: 500,
          height: 0,
          tabs: [{
            title: H("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
            tpl: `<div>
                        <select name="" id="` + R + `">
                            ` + (0, d.default)(w = y.config.languageType).call(w, function(j) {
              return "<option " + (x == j ? "selected" : "") + ' value ="' + j + '">' + j + "</option>";
            }) + `
                        </select>
                        <textarea id="` + T + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + E.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + I + '" class="right">' + (p.default(y) ? H("\u4FEE\u6539") : H("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + I, type: "click", fn: function() {
                var z, L, $ = document.getElementById(T), B = S.default("#" + R), k = B.val(), M = $.value;
                if (y.highlight ? z = y.highlight.highlightAuto(M).value : z = "<xmp>" + M + "</xmp>", !!M)
                  return p.default(y) ? !1 : (L = '<pre><code class="' + k + '">' + z + "</code></pre>", P(L), !0);
              } }
            ]
          }]
        };
        return W;
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(404)), c = d.__importDefault(t(405));
      function S(p) {
        f.default(p), c.default(p);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(38));
      function S(C) {
        var A;
        function y(x) {
          var w = "menus.panelMenus.code.", T = function(P, F) {
            return F === void 0 && (F = w), C.i18next.t(F + P);
          }, R = [{ $elem: f.default("<span>" + T("\u5220\u9664\u4EE3\u7801") + "</span>"), onClick: function(P, F) {
            return F.remove(), !0;
          } }];
          A = new c.default(C, x, R), A.create();
        }
        function E() {
          A && (A.remove(), A = null);
        }
        return { showCodeTooltip: y, hideCodeTooltip: E };
      }
      o.createShowHideFn = S;
      function p(C) {
        var A = S(C), y = A.showCodeTooltip, E = A.hideCodeTooltip;
        C.txt.eventHooks.codeClickEvents.push(y), C.txt.eventHooks.clickEvents.push(E), C.txt.eventHooks.toolbarClickEvents.push(E), C.txt.eventHooks.menuClickEvents.push(E), C.txt.eventHooks.textScrollEvents.push(E);
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(7), c = d.__importDefault(t(3));
      function S(p) {
        var C = p.$textElem, A = p.selection, y = p.txt, E = y.eventHooks.keydownEvents;
        E.push(function(x) {
          var w;
          if (x.keyCode === 40) {
            var T = A.getSelectionContainerElem(), R = (w = C.children()) === null || w === void 0 ? void 0 : w.last();
            if ((T == null ? void 0 : T.elems[0].tagName) === "XMP" && (R == null ? void 0 : R.elems[0].tagName) === "PRE") {
              var I = c.default(f.EMPTY_P);
              C.append(I);
            }
          }
        }), E.push(function(x) {
          p.selection.saveRange();
          var w = A.getSelectionContainerElem();
          if (w) {
            var T = w.getNodeTop(p), R = T == null ? void 0 : T.prev(), I = T == null ? void 0 : T.getNextSibling();
            if (R.length && (R == null ? void 0 : R.getNodeName()) === "PRE" && I.length === 0 && A.getCursorPos() === 0 && x.keyCode === 8) {
              var P = c.default(f.EMPTY_P);
              C.append(P);
            }
          }
        });
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), c = d.__importDefault(t(3)), S = d.__importDefault(t(407)), p = t(6), C = t(7), A = function(y) {
        d.__extends(E, y);
        function E(x) {
          var w = this, T = c.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
          return w = y.call(this, T, x) || this, S.default(x), w;
        }
        return E.prototype.clickHandler = function() {
          var x = this.editor, w = x.selection.getRange(), T = x.selection.getSelectionContainerElem();
          if (!!(T != null && T.length)) {
            var R = c.default(T.elems[0]), I = R.parentUntil("TABLE", T.elems[0]), P = R.children();
            R.getNodeName() !== "CODE" && (I && c.default(I.elems[0]).getNodeName() === "TABLE" || P && P.length !== 0 && c.default(P.elems[0]).getNodeName() === "IMG" && !(w != null && w.collapsed) || this.createSplitLine());
          }
        }, E.prototype.createSplitLine = function() {
          var x = "<hr/>" + C.EMPTY_P;
          p.UA.isFirefox && (x = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", x);
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(f.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(408));
      function c(S) {
        f.default(S);
      }
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = d.__importDefault(t(38));
      function S(C) {
        var A;
        function y(x) {
          var w = [{ $elem: f.default("<span>" + C.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"), onClick: function(R, I) {
            return R.selection.createRangeByElem(I), R.selection.restoreSelection(), R.cmd.do("delete"), !0;
          } }];
          A = new c.default(C, x, w), A.create();
        }
        function E() {
          A && (A.remove(), A = null);
        }
        return { showSplitLineTooltip: y, hideSplitLineTooltip: E };
      }
      function p(C) {
        var A = S(C), y = A.showSplitLineTooltip, E = A.hideSplitLineTooltip;
        C.txt.eventHooks.splitLineEvents.push(y), C.txt.eventHooks.clickEvents.push(E), C.txt.eventHooks.keyupEvents.push(E), C.txt.eventHooks.toolbarClickEvents.push(E), C.txt.eventHooks.menuClickEvents.push(E), C.txt.eventHooks.textScrollEvents.push(E);
      }
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = f.__importDefault(t(23)), p = t(97), C = f.__importDefault(t(415)), A = f.__importDefault(t(140)), y = function(E) {
        f.__extends(x, E);
        function x(w) {
          var T = this, R = c.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
          return T = E.call(this, R, w) || this, C.default(w), T;
        }
        return x.prototype.clickHandler = function() {
          var w = this.editor;
          p.isAllTodo(w) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
        }, x.prototype.tryChangeActive = function() {
          p.isAllTodo(this.editor) ? this.active() : this.unActive();
        }, x.prototype.setTodo = function() {
          var w = this.editor, T = w.selection.getSelectionRangeTopNodes();
          (0, d.default)(T).call(T, function(R) {
            var I, P = R == null ? void 0 : R.getNodeName();
            if (P === "P") {
              var F = A.default(R), H = F.getTodo(), W = (I = H.children()) === null || I === void 0 ? void 0 : I.getNode();
              H.insertAfter(R), w.selection.moveCursor(W), R.remove();
            }
          }), this.tryChangeActive();
        }, x.prototype.cancelTodo = function() {
          var w = this.editor, T = w.selection.getSelectionRangeTopNodes();
          (0, d.default)(T).call(T, function(R) {
            var I, P, F, H = (P = (I = R.childNodes()) === null || I === void 0 ? void 0 : I.childNodes()) === null || P === void 0 ? void 0 : P.clone(!0), W = c.default("<p></p>");
            W.append(H), W.insertAfter(R), (F = W.childNodes()) === null || F === void 0 || F.get(0).remove(), w.selection.moveCursor(W.getNode()), R.remove();
          });
        }, x;
      }(S.default);
      o.default = y;
    }, function(l, o, t) {
      l.exports = t(411);
    }, function(l, o, t) {
      var s = t(412);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(413), u = Array.prototype;
      l.exports = function(d) {
        var f = d.every;
        return d === u || d instanceof Array && f === u.every ? s : f;
      };
    }, function(l, o, t) {
      t(414);
      var s = t(15);
      l.exports = s("Array").every;
    }, function(l, o, t) {
      var s = t(5), u = t(30).every, d = t(67), f = t(22), c = d("every"), S = f("every");
      s({ target: "Array", proto: !0, forced: !c || !S }, { every: function(C) {
        return u(this, C, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3)), S = t(97), p = f.__importDefault(t(140)), C = t(97), A = t(7);
      function y(E) {
        function x(I) {
          var P, F;
          if (S.isAllTodo(E)) {
            I.preventDefault();
            var H = E.selection, W = H.getSelectionRangeTopNodes()[0], j = (P = W.childNodes()) === null || P === void 0 ? void 0 : P.get(0), z = (F = window.getSelection()) === null || F === void 0 ? void 0 : F.anchorNode, L = H.getRange();
            if (!(L != null && L.collapsed)) {
              var $ = L == null ? void 0 : L.commonAncestorContainer.childNodes, B = L == null ? void 0 : L.startContainer, k = L == null ? void 0 : L.endContainer, M = L == null ? void 0 : L.startOffset, Y = L == null ? void 0 : L.endOffset, Q = 0, Z = 0, te = [];
              $ == null || (0, d.default)($).call($, function(ce, Fe) {
                ce.contains(B) && (Q = Fe), ce.contains(k) && (Z = Fe);
              }), Z - Q > 1 && ($ == null || (0, d.default)($).call($, function(ce, Fe) {
                Fe <= Q || Fe >= Z || te.push(ce);
              }), (0, d.default)(te).call(te, function(ce) {
                ce.remove();
              })), C.dealTextNode(B, M), C.dealTextNode(k, Y, !1), E.selection.moveCursor(k, 0);
            }
            if (W.text() === "") {
              var q = c.default(A.EMPTY_P);
              q.insertAfter(W), H.moveCursor(q.getNode()), W.remove();
              return;
            }
            var ne = H.getCursorPos(), fe = S.getCursorNextNode(j == null ? void 0 : j.getNode(), z, ne), me = p.default(c.default(fe)), pe = me.getInputContainer(), ve = pe.parent().getNode(), se = me.getTodo(), ae = pe.getNode().nextSibling;
            if ((j == null ? void 0 : j.text()) === "" && (j == null || j.append(c.default("<br>"))), se.insertAfter(W), !ae || (ae == null ? void 0 : ae.textContent) === "") {
              if ((ae == null ? void 0 : ae.nodeName) !== "BR") {
                var ue = c.default("<br>");
                ue.insertAfter(pe);
              }
              H.moveCursor(ve, 1);
            } else
              H.moveCursor(ve);
          }
        }
        function w(I) {
          var P, F;
          if (S.isAllTodo(E)) {
            var H = E.selection, W = H.getSelectionRangeTopNodes()[0], j = (P = W.childNodes()) === null || P === void 0 ? void 0 : P.getNode(), z = c.default("<p></p>"), L = z.getNode(), $ = (F = window.getSelection()) === null || F === void 0 ? void 0 : F.anchorNode, B = H.getCursorPos(), k = $.previousSibling;
            if (W.text() === "") {
              I.preventDefault();
              var M = c.default(A.EMPTY_P);
              M.insertAfter(W), W.remove(), H.moveCursor(M.getNode(), 0);
              return;
            }
            if ((k == null ? void 0 : k.nodeName) === "SPAN" && k.childNodes[0].nodeName === "INPUT" && B === 0) {
              var Y;
              I.preventDefault(), j == null || (0, d.default)(Y = j.childNodes).call(Y, function(Q, Z) {
                Z !== 0 && L.appendChild(Q.cloneNode(!0));
              }), z.insertAfter(W), W.remove();
            }
          }
        }
        function T() {
          var I = E.selection, P = I.getSelectionRangeTopNodes()[0];
          P && C.isTodo(P) && P.text() === "" && (c.default(A.EMPTY_P).insertAfter(P), P.remove());
        }
        function R(I) {
          I && I.target instanceof HTMLInputElement && I.target.type === "checkbox" && (I.target.checked ? I.target.setAttribute("checked", "true") : I.target.removeAttribute("checked"));
        }
        E.txt.eventHooks.enterDownEvents.push(x), E.txt.eventHooks.deleteUpEvents.push(T), E.txt.eventHooks.deleteDownEvents.push(w), E.txt.eventHooks.clickEvents.push(R);
      }
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.selectorValidator = void 0;
      var d = t(2), f = d.__importDefault(t(3)), c = t(6), S = t(7), p = d.__importDefault(t(129)), C = { border: "1px solid #c9d8db", toolbarBgColor: "#FFF", toolbarBottomBorder: "1px solid #EEE" };
      function A(E) {
        var x = E.toolbarSelector, w = f.default(x), T = E.textSelector, R = E.config, I = R.height, P = E.i18next, F = f.default("<div></div>"), H = f.default("<div></div>"), W, j, z = null;
        T == null ? (j = w.children(), w.append(F).append(H), F.css("background-color", C.toolbarBgColor).css("border", C.border).css("border-bottom", C.toolbarBottomBorder), H.css("border", C.border).css("border-top", "none").css("height", I + "px")) : (w.append(F), z = f.default(T).children(), f.default(T).append(H), j = H.children()), W = f.default("<div></div>"), W.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
        var L, $ = E.config.placeholder;
        $ !== p.default.placeholder ? L = f.default("<div>" + $ + "</div>") : L = f.default("<div>" + P.t($) + "</div>"), L.addClass("placeholder"), j && j.length ? (W.append(j), L.hide()) : W.append(f.default(S.EMPTY_P)), z && z.length && (W.append(z), L.hide()), H.append(W), H.append(L), F.addClass("w-e-toolbar").css("z-index", E.zIndex.get("toolbar")), H.addClass("w-e-text-container"), H.css("z-index", E.zIndex.get()), W.addClass("w-e-text");
        var B = c.getRandom("toolbar-elem");
        F.attr("id", B);
        var k = c.getRandom("text-elem");
        W.attr("id", k);
        var M = H.getBoundingClientRect().height, Y = W.getBoundingClientRect().height;
        M !== Y && W.css("min-height", M + "px"), E.$toolbarElem = F, E.$textContainerElem = H, E.$textElem = W, E.toolbarElemId = B, E.textElemId = k;
      }
      o.default = A;
      function y(E) {
        var x = "data-we-id", w = /^wangEditor-\d+$/, T = E.textSelector, R = E.toolbarSelector, I = { bar: f.default("<div></div>"), text: f.default("<div></div>") };
        if (R == null)
          throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
        if (I.bar = f.default(R), !I.bar.elems.length)
          throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + R);
        if (w.test(I.bar.attr(x)))
          throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        if (T) {
          if (I.text = f.default(T), !I.text.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + T);
          if (w.test(I.text.attr(x)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        }
        I.bar.attr(x, E.id), I.text.attr(x, E.id), E.beforeDestroy(function() {
          I.bar.removeAttr(x), I.text.removeAttr(x);
        });
      }
      o.selectorValidator = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), c = t(7);
      function S(p, C) {
        var A = p.$textElem, y = A.children();
        if (!y || !y.length) {
          A.append(f.default(c.EMPTY_P)), S(p);
          return;
        }
        var E = y.last();
        if (C) {
          var x = E.html().toLowerCase(), w = E.getNodeName();
          if (x !== "<br>" && x !== "<br/>" || w !== "P") {
            A.append(f.default(c.EMPTY_P)), S(p);
            return;
          }
        }
        p.selection.createRangeByElem(E, !1, !0), p.config.focus ? p.selection.restoreSelection() : p.selection.clearWindowSelectionRange();
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3));
      function S(x) {
        p(x), C(x), A(x);
      }
      function p(x) {
        x.txt.eventHooks.changeEvents.push(function() {
          var w = x.config.onchange;
          if (w) {
            var T = x.txt.html() || "";
            x.isFocus = !0, w(T);
          }
          x.txt.togglePlaceholder();
        });
      }
      function C(x) {
        x.isFocus = !1;
        function w(T) {
          var R = T.target, I = c.default(R), P = x.$textElem, F = x.$toolbarElem, H = P.isContain(I), W = F.isContain(I), j = F.elems[0] == T.target;
          if (H)
            x.isFocus || E(x), x.isFocus = !0;
          else {
            if (W && !j || !x.isFocus)
              return;
            y(x), x.isFocus = !1;
          }
        }
        document.activeElement === x.$textElem.elems[0] && x.config.focus && (E(x), x.isFocus = !0), c.default(document).on("click", w), x.beforeDestroy(function() {
          c.default(document).off("click", w);
        });
      }
      function A(x) {
        x.$textElem.on("compositionstart", function() {
          x.isComposing = !0, x.txt.togglePlaceholder();
        }).on("compositionend", function() {
          x.isComposing = !1, x.txt.togglePlaceholder();
        });
      }
      function y(x) {
        var w, T = x.config, R = T.onblur, I = x.txt.html() || "";
        (0, d.default)(w = x.txt.eventHooks.onBlurEvents).call(w, function(P) {
          return P();
        }), R(I);
      }
      function E(x) {
        var w = x.config, T = w.onfocus, R = x.txt.html() || "";
        T(R);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var c = f.config, S = c.lang, p = c.languages;
        if (f.i18next != null) {
          try {
            f.i18next.init({ ns: "wangEditor", lng: S, defaultNS: "wangEditor", resources: p });
          } catch (C) {
            throw new Error("i18next:" + C);
          }
          return;
        }
        f.i18next = { t: function(A) {
          var y = A.split(".");
          return y[y.length - 1];
        } };
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 }), o.setUnFullScreen = o.setFullScreen = void 0;
      var f = t(2), c = f.__importDefault(t(3));
      t(421);
      var S = "w-e-icon-fullscreen", p = "w-e-icon-fullscreen_exit", C = "w-e-full-screen-editor";
      o.setFullScreen = function(y) {
        var E = c.default(y.toolbarSelector), x = y.$textContainerElem, w = y.$toolbarElem, T = (0, d.default)(w).call(w, "i." + S), R = y.config;
        T.removeClass(S), T.addClass(p), E.addClass(C), E.css("z-index", R.zIndexFullScreen);
        var I = w.getBoundingClientRect();
        x.css("height", "calc(100% - " + I.height + "px)");
      }, o.setUnFullScreen = function(y) {
        var E = c.default(y.toolbarSelector), x = y.$textContainerElem, w = y.$toolbarElem, T = (0, d.default)(w).call(w, "i." + p), R = y.config;
        T.removeClass(p), T.addClass(S), E.removeClass(C), E.css("z-index", "auto"), x.css("height", R.height + "px");
      };
      var A = function(E) {
        if (!E.textSelector && !!E.config.showFullScreen) {
          var x = E.$toolbarElem, w = c.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + S + `"></i>
        </div>`);
          w.on("click", function(T) {
            var R, I = (0, d.default)(R = c.default(T.currentTarget)).call(R, "i");
            I.hasClass(S) ? (w.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), o.setFullScreen(E)) : (w.attr("data-title", "\u5168\u5C4F"), o.setUnFullScreen(E));
          }), x.append(w);
        }
      };
      o.default = A;
    }, function(l, o, t) {
      var s = t(20), u = t(422);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = function(S, p) {
        var C, A = S.isEnable ? S.$textElem : (0, d.default)(C = S.$textContainerElem).call(C, ".w-e-content-mantle"), y = (0, d.default)(A).call(A, "[id='" + p + "']"), E = y.getOffsetData().top;
        A.scrollTop(E);
      };
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(128)), c = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 }, S = function() {
        function p() {
          this.tier = c, this.baseZIndex = f.default.zIndex;
        }
        return p.prototype.get = function(C) {
          return C && this.tier[C] ? this.baseZIndex + this.tier[C] : this.baseZIndex;
        }, p.prototype.init = function(C) {
          this.baseZIndex == f.default.zIndex && (this.baseZIndex = C.config.zIndex);
        }, p;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(70)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var c = t(2), S = c.__importDefault(t(426)), p = t(6), C = t(7);
      function A(E, x) {
        return (0, d.default)(E).call(E, function(w) {
          var T = w.type, R = w.target, I = w.attributeName;
          return T != "attributes" || T == "attributes" && (I == "contenteditable" || R != x);
        });
      }
      var y = function(E) {
        c.__extends(x, E);
        function x(w) {
          var T = E.call(this, function(R, I) {
            var P;
            if (R = A(R, I.target), (P = T.data).push.apply(P, R), w.isCompatibleMode)
              T.asyncSave();
            else if (!w.isComposing)
              return T.asyncSave();
          }) || this;
          return T.editor = w, T.data = [], T.asyncSave = C.EMPTY_FN, T;
        }
        return x.prototype.save = function() {
          this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
        }, x.prototype.emit = function() {
          var w;
          (0, f.default)(w = this.editor.txt.eventHooks.changeEvents).call(w, function(T) {
            return T();
          });
        }, x.prototype.observe = function() {
          var w = this;
          E.prototype.observe.call(this, this.editor.$textElem.elems[0]);
          var T = this.editor.config.onchangeTimeout;
          this.asyncSave = p.debounce(function() {
            w.save();
          }, T), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
            w.asyncSave();
          });
        }, x;
      }(S.default);
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function f(c, S) {
          var p = this;
          this.options = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, characterData: !0, characterDataOldValue: !0 }, this.callback = function(C) {
            c(C, p);
          }, this.observer = new MutationObserver(this.callback), S && (this.options = S);
        }
        return (0, u.default)(f.prototype, "target", { get: function() {
          return this.node;
        }, enumerable: !1, configurable: !0 }), f.prototype.observe = function(c) {
          this.node instanceof Node || (this.node = c, this.connect());
        }, f.prototype.connect = function() {
          if (this.node)
            return this.observer.observe(this.node, this.options), this;
          throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
        }, f.prototype.disconnect = function() {
          var c = this.observer.takeRecords();
          c.length && this.callback(c), this.observer.disconnect();
        }, f;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(428)), c = d.__importDefault(t(435)), S = d.__importDefault(t(436)), p = function() {
        function C(A) {
          this.editor = A, this.content = new f.default(A), this.scroll = new c.default(A), this.range = new S.default(A);
        }
        return (0, u.default)(C.prototype, "size", {
          get: function() {
            return this.scroll.size;
          },
          enumerable: !1,
          configurable: !0
        }), C.prototype.observe = function() {
          this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
        }, C.prototype.save = function(A) {
          A.length && (this.content.save(A), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
        }, C.prototype.revoke = function() {
          this.editor.change.disconnect();
          var A = this.content.revoke();
          A && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), A && this.editor.change.emit();
        }, C.prototype.restore = function() {
          this.editor.change.disconnect();
          var A = this.content.restore();
          A && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), A && this.editor.change.emit();
        }, C;
      }();
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(429)), c = d.__importDefault(t(433)), S = function() {
        function p(C) {
          this.editor = C;
        }
        return p.prototype.observe = function() {
          this.editor.isCompatibleMode ? this.cache = new c.default(this.editor) : this.cache = new f.default(this.editor), this.cache.observe();
        }, p.prototype.save = function(C) {
          this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(C);
        }, p.prototype.revoke = function() {
          var C;
          return (C = this.cache) === null || C === void 0 ? void 0 : C.revoke();
        }, p.prototype.restore = function() {
          var C;
          return (C = this.cache) === null || C === void 0 ? void 0 : C.restore();
        }, p;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(98)), c = d.__importDefault(t(431)), S = t(432), p = function(C) {
        d.__extends(A, C);
        function A(y) {
          var E = C.call(this, y.config.historyMaxSize) || this;
          return E.editor = y, E;
        }
        return A.prototype.observe = function() {
          this.resetMaxSize(this.editor.config.historyMaxSize);
        }, A.prototype.compile = function(y) {
          return this.save(c.default(y)), this;
        }, A.prototype.revoke = function() {
          return C.prototype.revoke.call(this, function(y) {
            S.revoke(y);
          });
        }, A.prototype.restore = function() {
          return C.prototype.restore.call(this, function(y) {
            S.restore(y);
          });
        }, A;
      }(f.default);
      o.default = p;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.CeilStack = void 0;
      var d = function() {
        function f(c) {
          c === void 0 && (c = 0), this.data = [], this.max = 0, this.reset = !1, c = Math.abs(c), c && (this.max = c);
        }
        return f.prototype.resetMax = function(c) {
          c = Math.abs(c), !this.reset && !isNaN(c) && (this.max = c, this.reset = !0);
        }, (0, u.default)(f.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), f.prototype.instack = function(c) {
          return this.data.unshift(c), this.max && this.size > this.max && (this.data.length = this.max), this;
        }, f.prototype.outstack = function() {
          return this.data.shift();
        }, f.prototype.clear = function() {
          return this.data.length = 0, this;
        }, f;
      }();
      o.CeilStack = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 }), o.compliePosition = o.complieNodes = o.compileValue = o.compileType = void 0;
      var c = t(6);
      function S(w) {
        switch (w) {
          case "childList":
            return "node";
          case "attributes":
            return "attr";
          default:
            return "text";
        }
      }
      o.compileType = S;
      function p(w) {
        switch (w.type) {
          case "attributes":
            return w.target.getAttribute(w.attributeName) || "";
          case "characterData":
            return w.target.textContent;
          default:
            return "";
        }
      }
      o.compileValue = p;
      function C(w) {
        var T = {};
        return w.addedNodes.length && (T.add = c.toArray(w.addedNodes)), w.removedNodes.length && (T.remove = c.toArray(w.removedNodes)), T;
      }
      o.complieNodes = C;
      function A(w) {
        var T;
        return w.previousSibling ? T = { type: "before", target: w.previousSibling } : w.nextSibling ? T = { type: "after", target: w.nextSibling } : T = { type: "parent", target: w.target }, T;
      }
      o.compliePosition = A;
      var y = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
      function E(w) {
        var T = [], R = !1, I = [];
        return (0, d.default)(w).call(w, function(P, F) {
          var H = { type: S(P.type), target: P.target, attr: P.attributeName || "", value: p(P) || "", oldValue: P.oldValue || "", nodes: C(P), position: A(P) };
          if (T.push(H), !!c.UA.isFirefox) {
            if (R && P.addedNodes.length && P.addedNodes[0].nodeType == 1) {
              var W = P.addedNodes[0], j = { type: "node", target: W, attr: "", value: "", oldValue: "", nodes: { add: [R] }, position: { type: "parent", target: W } };
              (0, f.default)(y).call(y, W.nodeName) != -1 ? (j.nodes.add = c.toArray(W.childNodes), T.push(j)) : R.nodeType == 3 ? (x(W, I) && (j.nodes.add = c.toArray(W.childNodes)), T.push(j)) : (0, f.default)(y).call(y, P.target.nodeName) == -1 && x(W, I) && (j.nodes.add = c.toArray(W.childNodes), T.push(j));
            }
            H.type == "node" && P.removedNodes.length == 1 ? (R = P.removedNodes[0], I.push(R)) : (R = !1, I.length = 0);
          }
        }), T;
      }
      o.default = E;
      function x(w, T) {
        for (var R = 0, I = T.length - 1; I > 0 && w.contains(T[I]); I--)
          R++;
        return R;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(94));
      (0, u.default)(o, "__esModule", { value: !0 }), o.restore = o.revoke = void 0;
      function c(I, P) {
        var F = I.position.target;
        switch (I.position.type) {
          case "before":
            F.nextSibling ? (F = F.nextSibling, (0, d.default)(P).call(P, function(H) {
              I.target.insertBefore(H, F);
            })) : (0, d.default)(P).call(P, function(H) {
              I.target.appendChild(H);
            });
            break;
          case "after":
            (0, d.default)(P).call(P, function(H) {
              I.target.insertBefore(H, F);
            });
            break;
          default:
            (0, d.default)(P).call(P, function(H) {
              F.appendChild(H);
            });
            break;
        }
      }
      function S(I) {
        for (var P = 0, F = (0, f.default)(I.nodes); P < F.length; P++) {
          var H = F[P], W = H[0], j = H[1];
          switch (W) {
            case "add":
              (0, d.default)(j).call(j, function(z) {
                I.target.removeChild(z);
              });
              break;
            default: {
              c(I, j);
              break;
            }
          }
        }
      }
      function p(I) {
        var P = I.target;
        I.oldValue == null ? P.removeAttribute(I.attr) : P.setAttribute(I.attr, I.oldValue);
      }
      function C(I) {
        I.target.textContent = I.oldValue;
      }
      var A = { node: S, text: C, attr: p };
      function y(I) {
        for (var P = I.length - 1; P > -1; P--) {
          var F = I[P];
          A[F.type](F);
        }
      }
      o.revoke = y;
      function E(I) {
        for (var P = 0, F = (0, f.default)(I.nodes); P < F.length; P++) {
          var H = F[P], W = H[0], j = H[1];
          switch (W) {
            case "add": {
              c(I, j);
              break;
            }
            default: {
              (0, d.default)(j).call(j, function(z) {
                z.parentNode.removeChild(z);
              });
              break;
            }
          }
        }
      }
      function x(I) {
        I.target.textContent = I.value;
      }
      function w(I) {
        I.target.setAttribute(I.attr, I.value);
      }
      var T = { node: E, text: x, attr: w };
      function R(I) {
        for (var P = 0, F = I; P < F.length; P++) {
          var H = F[P];
          T[H.type](H);
        }
      }
      o.restore = R;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(434), f = function() {
        function c(S) {
          this.editor = S, this.data = new d.TailChain();
        }
        return c.prototype.observe = function() {
          this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
        }, c.prototype.save = function() {
          return this.data.insertLast(this.editor.$textElem.html()), this;
        }, c.prototype.revoke = function() {
          var S = this.data.prev();
          return S ? (this.editor.$textElem.html(S), !0) : !1;
        }, c.prototype.restore = function() {
          var S = this.data.next();
          return S ? (this.editor.$textElem.html(S), !0) : !1;
        }, c;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(91));
      (0, u.default)(o, "__esModule", { value: !0 }), o.TailChain = void 0;
      var f = function() {
        function c() {
          this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
        }
        return c.prototype.resetMax = function(S) {
          S = Math.abs(S), S && (this.max = S);
        }, (0, u.default)(c.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), c.prototype.insertLast = function(S) {
          if (this.isRe) {
            var p;
            (0, d.default)(p = this.data).call(p, this.point + 1), this.isRe = !1;
          }
          for (this.data.push(S); this.max && this.size > this.max; )
            this.data.shift();
          return this.point = this.size - 1, this;
        }, c.prototype.current = function() {
          return this.data[this.point];
        }, c.prototype.prev = function() {
          if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
            this.point = 0;
            return;
          }
          return this.current();
        }, c.prototype.next = function() {
          if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
            this.point = this.size - 1;
            return;
          }
          return this.current();
        }, c;
      }();
      o.TailChain = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(98)), c = function(S) {
        d.__extends(p, S);
        function p(C) {
          var A = S.call(this, C.config.historyMaxSize) || this;
          return A.editor = C, A.last = 0, A.target = C.$textElem.elems[0], A;
        }
        return p.prototype.observe = function() {
          var C = this;
          this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
            C.last = C.target.scrollTop;
          }), this.resetMaxSize(this.editor.config.historyMaxSize);
        }, p.prototype.save = function() {
          return S.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
        }, p.prototype.revoke = function() {
          var C = this;
          return S.prototype.revoke.call(this, function(A) {
            C.target.scrollTop = A[0];
          });
        }, p.prototype.restore = function() {
          var C = this;
          return S.prototype.restore.call(this, function(A) {
            C.target.scrollTop = A[1];
          });
        }, p;
      }(f.default);
      o.default = c;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(98)), c = d.__importDefault(t(3)), S = t(6);
      function p(A) {
        return { start: [A.startContainer, A.startOffset], end: [A.endContainer, A.endOffset], root: A.commonAncestorContainer, collapsed: A.collapsed };
      }
      var C = function(A) {
        d.__extends(y, A);
        function y(E) {
          var x = A.call(this, E.config.historyMaxSize) || this;
          return x.editor = E, x.lastRange = p(document.createRange()), x.root = E.$textElem.elems[0], x.updateLastRange = S.debounce(function() {
            x.lastRange = p(x.rangeHandle);
          }, E.config.onchangeTimeout), x;
        }
        return (0, u.default)(y.prototype, "rangeHandle", {
          get: function() {
            var x = document.getSelection();
            return x && x.rangeCount ? x.getRangeAt(0) : document.createRange();
          },
          enumerable: !1,
          configurable: !0
        }), y.prototype.observe = function() {
          var E = this;
          this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
          function x() {
            var T = E.rangeHandle;
            (E.root === T.commonAncestorContainer || E.root.contains(T.commonAncestorContainer)) && (E.editor.isComposing || E.updateLastRange());
          }
          function w(T) {
            (T.key == "Backspace" || T.key == "Delete") && E.updateLastRange();
          }
          c.default(document).on("selectionchange", x), this.editor.beforeDestroy(function() {
            c.default(document).off("selectionchange", x);
          }), E.editor.$textElem.on("keydown", w);
        }, y.prototype.save = function() {
          var E = p(this.rangeHandle);
          return A.prototype.save.call(this, [this.lastRange, E]), this.lastRange = E, this;
        }, y.prototype.set = function(E) {
          try {
            if (E) {
              var x = this.rangeHandle;
              return x.setStart.apply(x, E.start), x.setEnd.apply(x, E.end), this.editor.menus.changeActive(), !0;
            }
          } catch {
            return !1;
          }
          return !1;
        }, y.prototype.revoke = function() {
          var E = this;
          return A.prototype.revoke.call(this, function(x) {
            E.set(x[0]);
          });
        }, y.prototype.restore = function() {
          var E = this;
          return A.prototype.restore.call(this, function(x) {
            E.set(x[1]);
          });
        }, y;
      }(f.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), c = f.__importDefault(t(3));
      t(438);
      function S(p) {
        var C = !1, A, y;
        p.txt.eventHooks.changeEvents.push(function() {
          C && (0, d.default)(A).call(A, ".w-e-content-preview").html(p.$textElem.html());
        });
        function E() {
          if (!C) {
            p.$textElem.hide();
            var w = p.zIndex.get("textContainer"), T = p.txt.html();
            A = c.default('<div class="w-e-content-mantle" style="z-index:' + w + `">
                <div class="w-e-content-preview w-e-text">` + T + `</div>
            </div>`), p.$textContainerElem.append(A);
            var R = p.zIndex.get("menu");
            y = c.default('<div class="w-e-menue-mantle" style="z-index:' + R + '"></div>'), p.$toolbarElem.append(y), C = !0, p.isEnable = !1;
          }
        }
        function x() {
          !C || (A.remove(), y.remove(), p.$textElem.show(), C = !1, p.isEnable = !0);
        }
        return { disable: E, enable: x };
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(20), u = t(439);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function f(c) {
          var S = this;
          this.editor = c;
          var p = function() {
            var A = document.activeElement;
            A === c.$textElem.elems[0] && S.emit();
          };
          window.document.addEventListener("selectionchange", p), this.editor.beforeDestroy(function() {
            window.document.removeEventListener("selectionchange", p);
          });
        }
        return f.prototype.emit = function() {
          var c, S = this.editor.config.onSelectionChange;
          if (S) {
            var p = this.editor.selection;
            p.saveRange(), p.isSelectionEmpty() || S({
              text: p.getSelectionText(),
              html: (c = p.getSelectionContainerElem()) === null || c === void 0 ? void 0 : c.elems[0].innerHTML,
              selection: p
            });
          }
        }, f;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(127)), f = s(t(94)), c = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.registerPlugin = void 0;
      var S = t(2), p = S.__importDefault(t(87)), C = t(6);
      function A(E, x, w) {
        if (!E)
          throw new TypeError("name is not define");
        if (!x)
          throw new TypeError("options is not define");
        if (!x.intention)
          throw new TypeError("options.intention is not define");
        if (x.intention && typeof x.intention != "function")
          throw new TypeError("options.intention is not function");
        w[E] && console.warn("plugin " + E + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), w[E] = x;
      }
      o.registerPlugin = A;
      function y(E) {
        var x = (0, d.default)({}, C.deepClone(p.default.globalPluginsFunctionList), C.deepClone(E.pluginsFunctionList)), w = (0, f.default)(x);
        (0, c.default)(w).call(w, function(T) {
          var R = T[0], I = T[1];
          console.info("plugin " + R + " initializing");
          var P = I.intention, F = I.config;
          P(E, F), console.info("plugin " + R + " initialization complete");
        });
      }
      o.default = y;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
    }]).default;
  });
})(wangEditor);
var WangEditor = /* @__PURE__ */ getDefaultExportFromCjs(wangEditor.exports), NAME = "fcEditor", uni = 1, _extends = Object.assign || function(g) {
  for (var b, l = 1; l < arguments.length; l++)
    for (var o in b = arguments[l], b)
      Object.prototype.hasOwnProperty.call(b, o) && (g[o] = b[o]);
  return g;
}, FcEditor = defineComponent({
  name: NAME,
  props: {
    modelValue: String,
    init: Function,
    disabled: Boolean,
    config: Object
  },
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  data: function g() {
    return {
      editor: {},
      uni: uni++
    };
  },
  watch: {
    disabled: function g() {
      this.enable();
    },
    modelValue: function g(b) {
      b !== this.editor.txt.html() && this.editor.txt.html(b);
    }
  },
  methods: {
    enable: function g() {
      this.disabled ? this.editor.disable() : this.editor.enable();
    },
    result: function g() {
      this.$emit("update:modelValue", this.editor.txt.html());
    }
  },
  mounted: function g() {
    var b = this;
    this.$nextTick(function() {
      b.editor = new WangEditor("#editor".concat(b.uni)), b.editor.config.zIndex = 2, b.config && _extends(b.editor.config, b.config), b.init && b.init(b.editor), b.editor.create(), b.enable(), b.editor.txt.html(b.modelValue);
    });
  },
  render: function g() {
    var b = _objectSpread2({}, this.$attrs);
    return delete b.id, createVNode("div", mergeProps(b, {
      onInput: this.result,
      id: "editor".concat(this.uni),
      style: "line-height: normal;"
    }), null);
  },
  beforeDestroy: function g() {
    this.editor && this.editor.destroy(), this.editor = null;
  }
});
const index = "";
designerForm.component("draggable", draggableComponent);
designerForm.component("DragTool", DragTool);
designerForm.component("DragBox", _sfc_main$2);
designerForm.component("Validate", Validate);
designerForm.component("Struct", Struct);
designerForm.component("Fetch", Fetch);
designerForm.component("Required", Required);
designerForm.component("TableOptions", TableOptions);
designerForm.component("FcEditor", FcEditor);
viewForm.component("FcEditor", FcEditor);
designerForm.register("_fc", {
  init(g, b) {
    b._id = uniqueId(), g.repeat && (b.field = uniqueId()), g.value && (b.effect._fc = !1);
  }
});
designerForm.register("_fc_tool", {
  init(g, b) {
    b.props.unique = uniqueId();
  }
});
const install = function(g) {
  g.component("FcDesigner", FcDesigner);
};
FcDesigner.install = install;
FcDesigner.makeOptionsRule = makeOptionsRule;
FcDesigner.formCreate = viewForm;
FcDesigner.designerForm = designerForm;
export {
  FcDesigner as default,
  designerForm,
  viewForm as formCreate,
  install
};
