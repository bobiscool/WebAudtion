/**
 * Created by mac WuYiPing on 17/3/20.
 *
 * 以下 是我拿来 计算svg一些图形点位的 。。。  妈蛋 老是忘记 svg语法
 *
 */



var drawArc= function(angleOffset,angle,outer,inner,width) {
  var startAngle = angleOffset;
  var outerRadius = outer;
  var innerRadius = inner;
  var startAngleDegree = Math.PI * startAngle / 180;
  var endAngleDegree = Math.PI * (startAngle + angle) / 180;
  var center = width / 2;

  var p1 = pointOnCircle(outerRadius, endAngleDegree);
  var p2 = pointOnCircle(outerRadius, startAngleDegree);
  var p3 = pointOnCircle(innerRadius, startAngleDegree);
  var p4 = pointOnCircle(innerRadius, endAngleDegree);

  var path = 'M' + p1.x + ',' + p1.y;
  var largeArcFlag = ( angle < 180 ? 0 : 1);
  path += ' A' + outerRadius + ',' + outerRadius + ' 0 ' + largeArcFlag + ' 0 ' + p2.x + ',' + p2.y;
  path += 'L' + p3.x + ',' + p3.y;
  path += ' A' + innerRadius + ',' + innerRadius + ' 0 ' + largeArcFlag + ' 1 ' + p4.x + ',' + p4.y;
  path += 'L' + p1.x + ',' + p1.y;
  return path;

  function pointOnCircle(radius, angle) {
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  }

}

  module.exports=drawArc;
