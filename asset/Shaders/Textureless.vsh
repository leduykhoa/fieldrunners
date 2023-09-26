// 
//  Textureless.vsh
// 
//  Created by Michael "Z" Goddard on 2011/07/29.
//  Copyright 2011 Gradient Studios, LLC. 
//  

attribute vec4 aPosition;
attribute vec4 aColor;

varying vec4 vColor;

uniform mat4 uModelViewProjectionMatrix;

void main()
{
  gl_Position = uModelViewProjectionMatrix * vec4(aPosition.xy, 0.0, 1.0);
  vColor = aColor;
}
