<template>
  <div class="goods-purchase">
    <ul>
      <li class="item title">
        <div class="label">发货方式：</div>
        <div class="info">13123</div>
      </li>
      <li class="item">
        <div class="label">发货人：</div>
        <div class="info">13123</div>
      </li>
      <li class="item itemOther">
        <div class="left">
          <div class="item">
            <div class="label">发货时间：</div>
            <div class="info">2022-07-31 20:00:00</div>
          </div>
          <div class="item">
            <div class="label">运单号：</div>
            <div class="info">中通快递</div>
          </div>
          <div class="item">
            <el-image
              style="width: 100px; height: 100px"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            />
            <div class="otherInfo">
              <div class="title">日系书柜</div>
              <span class="count">x1</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="label">物流状态：</div>
            <div class="info link">已发货</div>
          </div>

          <div class="line">2022-11-12 08:12:12</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.goods-purchase {
  width: 100%;
  border: 1px solid #dddfe5;
  box-sizing: border-box;
  padding: 20px;

  .item {
    display: flex;
    margin-bottom: 20px;
    font-size: 14px;
    &.title {
      font-weight: 500;
    }
    .label {
      width: 100px;
    }

    .otherInfo {
      padding-left: 10px;

      .count {
        display: block;
        margin-top: 10px;
        color: #777;
      }
    }
  }

  .itemOther {
    display: flex;
    margin-bottom: 0;

    .left {
      flex: 1;
    }

    .right {
      flex: 1;
      overflow: hidden;

      .label {
        width: 80px;
      }

      .info {
        color: blue;
      }

      .line {
        height: 100%;
        padding-left: 30px;
        padding-top: 5px;
        position: relative;
        color: #999;
      }
      .line::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 0;
        width: 2px;
        height: 100%;
        background-color: #ccc;
      }

      .line::after {
        content: '';
        position: absolute;
        left: 6px;
        top: 10px;
        width: 8px;
        height: 8px;
        background-color: #e2643b;
        border: 1px solid #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>
