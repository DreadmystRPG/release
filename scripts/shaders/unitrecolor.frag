uniform sampler2D texture;
uniform float colorR;
uniform float colorG;
uniform float colorB;
uniform float colorA;

void main() 
{	
	vec4 pixel = texture2D(texture, gl_TexCoord[0].xy);
	
	pixel.r = colorR;
	pixel.g = colorG;
	pixel.b = colorB;	
	pixel.a *= colorA;
	
	gl_FragColor = pixel;	
}