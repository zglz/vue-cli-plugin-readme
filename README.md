<div align="center">
    ![](/logo-l.png)
  <h1>Vue-Cli-Plugin-Readme</h1>
  <p>我们可以在任何源码中写 markdown，并且提供了一个可交互的markdown管理客户端。</p>
</div>


<h2 align="center">视频教程</h2>
[视频地址](https://www.bilibili.com/video/BV1fM4y1V7uv): https://www.bilibili.com/video/BV1fM4y1V7uv


![](http://csdn.19991223.com/img/screenshot.png)


启动项目后，终端会提示一个地址：http://localhost:80

<h2 align="center">使用方式</h2>

1. 两种创建记录的语法

    书写一条记录语法会在客户端生成一个记录。

    - 类HTML注释语法

    ```
        <!--## 
        #{1 - type - title}# 
        markdown
        ###-->
    ```

    - 类JavaScript注释语法

    ```
        <!--## 
        #{1 - type - title}# 
        markdown
        ###-->
    ```

2. 关联记录
   
   通过标题最后一个参数去关联父记录的id

   ![](http://csdn.19991223.com/img/associatedrecord.png)



3. 删除记录
   
   ![](http://csdn.19991223.com/img/del.png)



4. 更新源码
   
   ![](http://csdn.19991223.com/img/update.png)


5. 与已有 markdown 进行整合

   通过设置 `base:'BASE-README'` 与已有 markdown 进行整合
   
   ![](http://csdn.19991223.com/img/base.png)



<h2 align="center">原理图</h2>

![](./doc/images/framework.jpg)


<h2 align="center">VScode代码片段</h2>

 ```
 "JS readme-webpack-plugin template syntax1": {
      "scope": "",
      "prefix": "#",
      "body": [
        "/*#### \n #{1 - todo - title}# \n markdown \n ####*/"
      ],
      "description": ""
},

"HTML readme-webpack-plugin template syntax2": {
      "scope": "",
      "prefix": "#",
      "body": [
        "<!--## \n #{1 - todo - title}# \n markdown \n ###-->"
      ],
      "description": ""
}

 ```