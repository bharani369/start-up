async function fetchP() {
  const r = await fetch('https://gwttspeed.blogspot.com/2026/06/blog-post_894.html');
  const t = await r.text();
  console.log(t);
}
fetchP();
