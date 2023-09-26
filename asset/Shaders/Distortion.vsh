//
//  Shader.vsh
//
//  Created by Jamie Gotch on 1/7/10.
//  Copyright 2010 Subatomic Studios, LLC. All rights reserved.
//

attribute vec4 aPosition;
attribute lowp vec4 aColor;
attribute vec2 aTexCoord0;

varying lowp vec4 vColor;
varying highp vec2 vTexCoord0;

uniform mat4 uModelViewProjectionMatrix;

void main()
{
    gl_Position = uModelViewProjectionMatrix * vec4(aPosition.xy, 0.0, 1.0);
	vTexCoord0 = aTexCoord0;
	vColor = aColor;
}
