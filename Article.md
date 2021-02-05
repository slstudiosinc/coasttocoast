# Linking Figma with Storybook

<pre>
export const myStory = () => <Button>Hello, World!</Button>myStory.story = {
parameters: {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/.....'
  }
}
}
</pre>

<style>
pre{
  color:#fff;
}
</style>
