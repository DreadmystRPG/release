uniform sampler2D texture;

mat4 brightnessMatrix( float b)
{
    return mat4( 1, 0, 0, 0,
                 0, 1, 0, 0,
                 0, 0, 1, 0,
                 b, b, b, 1 );
}

mat4 contrastMatrix( float c )
{
	float t = ( 1.0 - c) / 2.0;
    
    return mat4( c, 0, 0, 0,
                 0, c, 0, 0,
                 0, 0, c, 0,
                 t, t, t, 1 );

}

mat4 saturationMatrix( float saturation )
{
    vec3 luminance = vec3( 0.3086, 0.6094, 0.0820 );
    
    float oneMinusSat = 1.0 - saturation;
    
    vec3 red = vec3( luminance.x * oneMinusSat );
    red+= vec3( saturation, 0, 0 );
    
    vec3 green = vec3( luminance.y * oneMinusSat );
    green += vec3( 0, saturation, 0 );
    
    vec3 blue = vec3( luminance.z * oneMinusSat );
    blue += vec3( 0, 0, saturation );
    
    return mat4( red,     0,
                 green,   0,
                 blue,    0,
                 0, 0, 0, 1 );
}

void main( out vec4 fragColor, in vec2 fragCoord ) 
{
	const float brightness = 0.0;
	const float contrast = 1.15;
	const float saturation = 1.05;
	
	vec4 color = texture2D(texture, gl_TexCoord[0].xy);
    
	fragColor =  brightnessMatrix( brightness ) *
        		contrastMatrix( contrast ) * 
        		saturationMatrix( saturation ) *
        		color;

}