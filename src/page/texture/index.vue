<template>
  <div class="container">
    <div>
      <button class="gold">gold 金</button>
      <button class="silver">silver 银</button>
      <button class="bronze">bronze 铜</button>
      <button class="titanium">titanium 钛</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: inline;
}
button {
  padding: 2px;
  width: 250px;
  height: 250px;
  border-radius: 12px;
  border: groove 1px transparent;
}
.gold {
  box-shadow: inset 0 0 0 1px #eedc00, inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.5);
  background:
    conic-gradient(#edc800,#e3b600,#f3cf00,#ffe800,#ffe900,#ffeb00,#ffe000,#ebc500,#e0b100,#f1cc00,#fcdc00,#d4c005fb,#fad900,#eec200,#e7b900,#f7d300,#ffe800,#ffe300,#f5d100,#e6b900,#e3b600,#f4d000,#ffe400,#ebc600,#e3b600,#f6d500,#ffe900,#ffe90a,#edc800) content-box,
    linear-gradient(#f6d600, #f6d600) padding-box,
    radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box;
}
.silver {
  box-shadow: inset 0 0 0 1px #c9c9c9, inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 -1px 2px rgba(0, 0, 0, 0.5);
  background: conic-gradient(#d7d7d7, #c3c3c3, #cccccc, #c6c6c6, #d3d3d3, #d8d8d8, #d5d5d5, #d8d8d8, #d3d3d3, #c5c5c5, #c0c0c0, #bfbfbf, #d0d0d0, #d9d9d9, #d1d1d1, #c5c5c5, #c8c8c8, #d7d7d7, #d5d5d5, #cdcdcd, #c4c4c4, #d9d9d9, #cecece, #c5c5c5, #c5c5c5, #cdcdcd, #d8d8d8, #d9d9d9, #d7d7d7) content-box, linear-gradient(#d4d4d4, #d4d4d4) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box;
}
.bronze {
  box-shadow: inset 0 0 0 1px #bc7e6b, inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 -1px 2px rgba(0, 0, 0, 0.5);
  background: conic-gradient(#d95641, #b14439, #b2453a, #d25645, #d56847, #d05441, #b85137, #b2453a, #c34f40, #df4647, #a94338, #c94943, #c85442, #a4413c, #d9543a, #d1564e, #ab4338, #bb4a3c, #dc5843, #b94839, #aa4237, #c24e42, #ce523f, #ab4338, #dd5944, #ca4d33, #ab4338, #cb503e, #d95641) content-box, linear-gradient(#ad3b36, #ad3b36) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box;
}
.titanium {
  box-shadow: inset 0 0 0 1px #c7aca0, inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 -1px 2px rgba(0, 0, 0, 0.5);
  background: conic-gradient(#e6c9bf, #d2b5aa, #cbaea3, #d4b5ab, #e5c3bd, #d9c0b4, #d9bcb1, #c5a399, #e3c6bc, #e7cac0, #dec0b5, #d3b6ab, #cfada1, #d4b6ac, #e2c6c0, #e2c6c0, #d2b1a6, #d2b1a6, #d1b4a9, #e1c4ba, #e5c9be, #dec1b6, #d3b6ab, #ceb0a6, #cfada3, #d2b5aa, #dabdb2, #e5c9be, #e6c9bf) content-box, linear-gradient(#e5c9be, #e5c9be) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box;
}
</style>
