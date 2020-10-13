uniform sampler2D texture;
uniform float brightness;

mat4 brightnessMatrix( float b)
{
    return mat4( 1, 0, 0, 0,
                 0, 1, 0, 0,
                 0, 0, 1, 0,
                 b, b, b, 1 );
}

void main( out vec4 fragColor, in vec2 fragCoord ) 
{	
	vec4 color = texture2D(texture, gl_TexCoord[0].xy);
    
	fragColor =  brightnessMatrix( brightness ) *
        		color;

}