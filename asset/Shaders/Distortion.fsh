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
  //vec4 distortionMapSample = texture2D(uDistortionTexture, vTexCoord0);
//  distortionMapSample.xyz = (distortionMapSample.xyz * 2.0) - 1.0;
  //distortionMapSample -= vec4(128.0 / 255.0, 128.0 / 255.0, 255.0 / 255.0, 0.0);
  //distortionMapSample *= 2.0;
  
  //const float kDistortionStrength = 0.02;
  //vec2 distortionTexCoords = vTexCoord0 + (distortionMapSample.xy * kDistortionStrength);
  
  // vec4 sceneMapSample = texture2D(uSceneTexture, vTexCoord0) * vColor; 
  //gl_FragColor = vec4(sceneMapSample.rgba);
  //gl_FragColor *= vColor;
  gl_FragColor = texture2D(uSceneTexture, vTexCoord0.st) * vColor;

  

/*
  // tone mapping
  gl_FragColor = vec4(texture2D(uSceneTexture, vTexCoord0).rgb, 1.0);    
  gl_FragColor.r = texture2D(uDistortionTexture, gl_FragColor.rr).r;
  gl_FragColor.g = texture2D(uDistortionTexture, gl_FragColor.gg).g;
  gl_FragColor.b = texture2D(uDistortionTexture, gl_FragColor.bb).b;
  gl_FragColor.a = 1.0;
  */
}
