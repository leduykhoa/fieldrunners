//
//  Shader.fsh
//
//  Created by Jamie Gotch on 1/7/10.
//  Copyright 2010 Subatomic Studios, LLC. All rights reserved.
//

precision mediump float;
varying lowp vec4 vColor;
varying highp vec2 vTexCoord0;

uniform lowp sampler2D uSceneTexture;
uniform lowp sampler2D uDistortionTexture;

void main()
{
  vec4 sample = texture2D(uSceneTexture, vTexCoord0.st);
  sample.rgb += vColor.rgb;
  gl_FragColor = sample;
}
