<template>
  <div class="container">
    <div class="text">
      <p>立体文字</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$bg: #ccc;
$white: #fff;
$text: #eee;
$shadow: #000;
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
  background: $bg;
}
.text {
  font-size: 8em;
  font-weight: 900;
  color: $white;
  transform: rotate(-25deg) skew(25deg);
  text-shadow:
    -1px 1px 0 $text,
    -2px 2px 0 $text,
    -3px 3px 0 $text,
    -4px 4px 0 $text,
    -5px 5px 0 $text,
    -6px 6px 0 $text,
    -7px 7px 0 $text,
    -8px 8px 0 $text,
    -9px 9px 0 $text,
    -10px 10px 0 $text,
    -11px 11px 0 $text,
    -12px 12px 0 $text,
    -13px 13px 0 $text,
    -14px 14px 0 $text,
    -15px 15px 0 $text,
    -16px 16px 0 $text,
    -17px 17px 0 $text,
    -18px 18px 20px $shadow;
}
</style>
