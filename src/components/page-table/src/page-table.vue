<template>
  <div class="page-content">
    <ul class="container">
      <li class="title item color item3">
        <template v-for="item in config" :key="item.name">
          <div class="menuItem">
            {{ item.label }}
          </div>
        </template>
      </li>

      <template v-for="item in data" :key="item.id">
        <li class="item2 color">
          <slot name="title">
            <div class="">SPU ID：{{ item.id }}</div>
          </slot>
        </li>

        <li class="item1">
          <div class="content item">
            <div class="infoItem" :class="{ line: item.isLine }">
              <div class="top">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="item.imgUrl"
                  fit="cover"
                />
                <div class="info">
                  <span>{{ item.name }}</span>
                  <span class="other">{{ item.other }}</span>
                </div>
              </div>
              <div class="bottom" v-if="item.otherOptions">
                {{ item.otherOptions.oname }}
              </div>
            </div>
            <div class="infoItem">
              <div class="top">¥{{ item.price }}</div>
              <div class="bottom" v-if="item.otherOptions">
                ¥{{ item.otherOptions.oprice }}/次
              </div>
            </div>
            <div class="infoItem">
              <div class="top">{{ item.count }}</div>
              <div class="bottom" v-if="item.otherOptions">
                {{ item.otherOptions.ocount }}
              </div>
            </div>
            <div class="infoItem" :class="{ line: item.isLine }">
              <div class="top">¥{{ item.total }}</div>
              <div class="bottom" v-if="item.otherOptions">
                ¥{{ item.otherOptions.ototal }}
              </div>
            </div>
            <div class="infoItem status" :class="{ line: item.clink }">
              <div class="top" :class="{ top1: item.otherOptions }">
                <template v-if="item.cstatus === 3">已发货</template>
              </div>
            </div>
            <div
              class="infoItem"
              v-if="item.clink"
              :class="{ line: item.clink }"
            >
              <div class="top" :class="{ top1: item.otherOptions }">
                <a href="#">{{ item.clink }}</a>
              </div>
            </div>
            <div class="infoItem" :class="{ line: item.clink }">
              <div class="top" :class="{ top1: item.otherOptions }"></div>
            </div>
            <div
              class="infoItem"
              v-if="item.oerate"
              :class="{ line: item.clink }"
            >
              <a href="#">查看采购单</a>
              <a href="#">更换采购单</a>
            </div>
          </div>
        </li>

        <li class="tips" v-if="item.tips">
          买家备注：
          <span>{{ item.tips }}</span>
        </li>
      </template>
    </ul>

    <div class="totalPrice" v-if="name !== 'logistics'">
      <div class="tprice">商品总价：<span class="num">¥850</span></div>
      <div class="sprice">实收金额：<span class="num">¥850</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import {
  IContentConfig,
  IDataConfig
} from '@/views/main/goods/goods-main/types'

defineProps({
  config: {
    type: Array as PropType<IContentConfig[]>
  },
  data: {
    type: Array as PropType<IDataConfig[]>
  },
  name: {
    type: String
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding-top: 20px;

  .container {
    .title {
      height: 50px;
      line-height: 50px;
      font-weight: 500;
    }

    .color {
      background-color: #f0f0f5;
      margin-bottom: 10px;
    }

    .item2 {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      margin-top: 20px;
    }
    .item {
      display: flex;
      box-sizing: border-box;

      .menuItem {
        flex: 1;
        box-sizing: border-box;
        padding: 0 10px;
        &:first-child {
          min-width: 300px;
        }
      }
    }

    .item1 {
      height: auto;
      margin-top: -10px;
      border: 1px solid #f0f0f5;
      .content {
        display: flex;
        align-items: center;
        padding: 0;
        height: auto;
        .infoItem {
          display: flex;
          flex-direction: column;
          flex: 1;
          box-sizing: border-box;
          font-size: 14px;
          height: auto;

          .top {
            display: flex;
            align-items: center;
            height: 100px;
            padding: 10px;
          }

          .top1 {
            height: 140px;
          }

          &:first-child {
            min-width: 300px;
            .info {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              margin-left: 10px;

              span {
                color: blue;
              }

              .other {
                font-size: 12px;
                color: #999;
              }
            }
          }

          .bottom {
            box-sizing: border-box;
            padding: 10px;
            height: 40px;
            border-top: 1px dotted #f0f0f5;
          }
        }
        .line {
          border-right: 1px solid #f0f0f5;
        }

        a {
          font-size: 12px;
          line-height: 20px;
          padding-left: 10px;
        }

        .status {
          color: blue;
        }
      }
    }

    .tips {
      height: 40px;
      line-height: 40px;
      // margin-top: -10px;
      font-size: 14px;
      padding: 0 30px;
      color: red;
      background-color: #faeceb;
      border: 1px solid #f0f0f5;
    }
  }

  .totalPrice {
    padding: 30px;
    text-align: right;

    .tprice {
      font-size: 14px;
      .num {
        padding-left: 80px;
      }
    }

    .sprice {
      margin-top: 20px;
      font-size: 18px;
      font-weight: 500;

      .num {
        font-size: 30px;
        padding-left: 40px;
        color: #ed722e;
      }
    }
  }
}
</style>
