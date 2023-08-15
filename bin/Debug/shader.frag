#version 330 core
out vec4 color;
in vec2 tCoord;

uniform sampler2D ourTexture;
uniform vec4 oColor;


void main()
{
    color = oColor * texture(ourTexture, tCoord);
}
