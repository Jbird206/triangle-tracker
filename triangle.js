class Triangle {
  constructor(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}






checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "not a triangle";
    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
      return "scalene triangle";
    }  else if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
      return "equilateral triangle";
    } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
        return "isosceles triangle";
    }
  }
};

// class Rectangle { 
//   constructor(side1, side2, side3, side4) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
//   this.side4 = side4;
// }



// IsSquare() {
//     if ((this.side1 === this.side2)&& ((this.side2 === this.side3)) && ((this.side3 === this.side4)) && ((this.side4 === this.side1))) {
//     return "this is a square";
//     } else if ((this.side1 === this.side3) && ((this.side2 === this.side4)) && ((this.side1 !== this.side2)) && ((this.side2 !== this.side3))) {
//       return "this is not a square";
//     }
//   }  
// }


