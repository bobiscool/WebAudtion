#以下是比较扯的地方

1.制作Ro组件的时候,由于无法做出像设计一样的环形active来,所以用了一个watch,来实时监听now变换,并切换class(好猥琐的用法)

2. 对于一些只能script引入的库。。
> cannot read property 'on' of undefined snapsvg
> 解决办法
`var Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );`


> npm i imports-loader
 
