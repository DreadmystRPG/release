uniform sampler2D texture;
uniform float brightness;
uniform float alpha;

mat4 brightnessMatrix( float b)
{
    return mat4( 1, 0, 0, 0,
                 0, 1, 0, 0,
                 0, 0, 1, 0,
                 b, b, b, 1 );
}

void main() 
{	
	vec4 color = texture2D(texture, gl_TexCoord[0].xy);
    
	gl_FragColor =  brightnessMatrix( brightness ) *
        		color;
				
	gl_FragColor.a *= alpha;

}