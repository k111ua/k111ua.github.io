# k1t
## todo-list
* button(done) 
* form(done)
* siderNav(done)
* upload(done)
* breadcrumb(done)
* popup(done)
* pagination(done)
* step
* tab
* tree
* mainLayout
* infoCard
## 依赖
* VScode(或任意编辑器配置less编译即可)
* jquery
* 部分元素功能通过引入layui来实现（实现跨浏览器统一渲染）
    * dropdown
    * datepicker
    * checkbox-group
    * radio-group
    * tab
    * pagination
    * upload
## 使用
* 使用时尽量避免添加行内样式
* k1t.css作为依赖需要最后引用来实现覆盖layui样式
* 统一确定的附加元素无需在dom中书写，比如必填项的*号，表单中标签尾的冒号，注释中的“注：”前缀，范围录入组件中间的“～”或者“-”，等等，只需要使用对应的样式即可
    * class="rangel-label"会自动生成“～”
    * class="label required"会自动生成红色“*”和尾部的冒号
* 配置（setting.less）
    * 颜色
    * 圆角
    * 贴图路径
## 鸣谢
* antDesign
* materialDesign
* iconfont.cn