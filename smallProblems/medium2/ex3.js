function triangle (angle1, angle2, angle3) {

  let triangleType;
  if (isValidTriangle (angle1, angle2, angle3)) {
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
      triangleType = 'right';
    } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
      triangleType = 'acute';
    } else{
      triangleType = 'obtuse';
    }
  } else {
    triangleType = 'invalid';
  }

  console.log (triangleType);

  return triangleType;
}

function isValidTriangle (angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3 !== 180) || angle1 <= 0 || angle2 <= 0 || angle3 <= 0){
    return false;
  } 
  
  return true;
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"