class Sphere{
  constructor(color=null){
    this.type = 'sphere';
    // this.position = [0.0, 0.0, 0.0];
    this.color = [1.0, 1.0, 1.0, 1.0];
    if(color){
      this.color = color;
    }
    // this.size = 5.0;
    // this.segments = 10;
    this.matrix = new Matrix4();

    this.buffer = null;
    // this.verts32 = new Float32Array([]);

    this.textureNum = -2;
  }

  render(){
    // var xy = this.position;
    var rgba = this.color;
    // var size = this.size;

    gl.uniform1i(u_whichTexture, this.textureNum);

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    var d = Math.PI/10.0;
    var dd = Math.PI/10.0;

    for (var t = 0; t < Math.PI; t += d) {
      for (var r = 0; r < 2*Math.PI; r += d) {
        var p1 = [Math.sin(t)*Math.cos(r), Math.sin(t)*Math.sin(r), Math.cos(t)];
        var p2 = [Math.sin(t+dd)*Math.cos(r), Math.sin(t+dd)*Math.sin(r), Math.cos(t+dd)];
        var p3 = [Math.sin(t)*Math.cos(r+dd), Math.sin(t)*Math.sin(r+dd), Math.cos(t)];
        var p4 = [Math.sin(t+dd)*Math.cos(r+dd), Math.sin(t+dd)*Math.sin(r+dd), Math.cos(t+dd)];

        var v = [];
        var uv = [];
        v = v.concat(p1);
        v = v.concat(p2);
        v = v.concat(p4);
        uv = uv.concat([0,0]);
        uv = uv.concat([0,0]);
        uv = uv.concat([0,0]);

        gl.uniform4f(u_FragColor, 1, 1, 1, 1);
        drawTriangle3DUVNormal(v, uv, v);

        v = [];
        uv = [];
        v = v.concat(p1);
        v = v.concat(p4);
        v = v.concat(p3);
        uv = uv.concat([0,0]);
        uv = uv.concat([0,0]);
        uv = uv.concat([0,0]);

        gl.uniform4f(u_FragColor, 1, 0, 0, 1);
        drawTriangle3DUVNormal(v, uv, v);
      }
    }

    // var allVerts = [];
    // var allUVs = [];
    // var allNormals = [];



    // drawTriangle3DUVNormal(allVerts, allUVs, allNormals);

  }

}
