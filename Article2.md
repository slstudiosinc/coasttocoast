# CSS Pseudo Overlay

<pre>
.hero.overlay--full::before{
    background: rgba(0, 0, 0, 0.25);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
}
</pre>

<style>
pre{
  color:#fff;
}
</style>
