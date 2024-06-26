class Triangle{
  constructor(){
    this.type = 'triangle';
    this.position = [0.0, 0.0, 0.0];
    this.color = [1.0, 1.0, 1.0, 1.0];
    this.size = 5.0;

    this.buffer = null;
    this.uvBuffer = null;
    this.normalBuffer = null;
  }

  render(){
    var xy = this.position;
    var rgba = this.color;
    var size = this.size;
  
    // Pass the position of a point to a_Position variable
    // gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
  
    gl.uniform1f(u_Size, size);

    // gl.drawArrays(gl.POINTS, 0, 1);
    var d = this.size/200.0;
    drawTriangle([xy[0], xy[1], xy[0]+d, xy[1], xy[0], xy[1]+d])
  }

}



function drawTriangle(vertices) {
  // var vertices = new Float32Array([
  //   0, 0.5,   -0.5, -0.5,   0.5, -0.5
  // ]);
  var n = 3; // The number of vertices

  // Create a buffer object
  if (this.buffer == null) {
    this.buffer = gl.createBuffer();
    if (!this.buffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  // gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // if (a_Position < 0) {
  //   console.log('Failed to get the storage location of a_Position');
  //   return -1;
  // }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  gl.drawArrays(gl.TRIANGLES, 0, n);

  // return n;
}

function drawTriangle3D(vertices) {
  // var vertices = new Float32Array([
  //   0, 0.5,   -0.5, -0.5,   0.5, -0.5
  // ]);
  // var n = 3; // The number of vertices
  var n = vertices.length/3;

  // Create a buffer object
  if (this.buffer == null) {
    this.buffer = gl.createBuffer();
    if (!this.buffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  // gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // if (a_Position < 0) {
  //   console.log('Failed to get the storage location of a_Position');
  //   return -1;
  // }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  gl.drawArrays(gl.TRIANGLES, 0, n);

  // return n;
}

function drawTriangle3DUV(vertices, uv) {
  // var n = 3; // The number of vertices
  var n = vertices.length/3;

  // Create a buffer object
  if (this.buffer == null) {
    this.buffer = gl.createBuffer();
    if (!this.buffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  // gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // if (a_Position < 0) {
  //   console.log('Failed to get the storage location of a_Position');
  //   return -1;
  // }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  // create a buffer object for UV
  if (this.uvBuffer == null) {
    this.uvBuffer = gl.createBuffer();
    if (!this.uvBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);

  // write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_UV variable
  gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_UV variable
  gl.enableVertexAttribArray(a_UV);

  gl.drawArrays(gl.TRIANGLES, 0, n);

  // return n;
}

function drawTriangle3DUVNormal(vertices, uv, normals) {
  // console.log('positions: ', vertices)
  // console.log('uv: ', uv)
  // console.log('normals: ', normals)
  // var n = 3; // The number of vertices
  var n = vertices.length/3;

  // Create a buffer object
  if (this.buffer == null) {
    this.buffer = gl.createBuffer();
    if (!this.buffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  // gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // if (a_Position < 0) {
  //   console.log('Failed to get the storage location of a_Position');
  //   return -1;
  // }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  // create a buffer object for UV
  if (this.uvBuffer == null) {
    this.uvBuffer = gl.createBuffer();
    if (!this.uvBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);

  // write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_UV variable
  gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_UV variable
  gl.enableVertexAttribArray(a_UV);

  // create a buffer object for normals
  if (this.normalBuffer == null) {
    this.normalBuffer = gl.createBuffer();
    if (!this.normalBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }
  }


  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);

  // write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_Normal variable
  gl.vertexAttribPointer(a_Normal, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Normal variable
  gl.enableVertexAttribArray(a_Normal);

  // console.log('a_Normal: ', a_Normal)
  // console.log('a_Position: ', a_Position)
  // console.log('a_UV: ', a_UV)

  gl.drawArrays(gl.TRIANGLES, 0, n);

  // return n;
}