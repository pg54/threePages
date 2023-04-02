<template>
  <div class="image-radio-group">
    <div
      class="image-radio-button"
      v-for="(item, index) in radioItems"
      :key="index"
    >
      <label :id="index">
        <input
          :id="index"
          type="radio"
          :name="radioGroupName"
          :value="item.value"
          v-model="selectedValue"
          @change="onChange"
        />
        <img :src="item.imageUrl" :alt="item.imageAlt" />
        <span>{{ item.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    radioGroupName: {
      type: String,
      default: 'image-radio-group'
    },
    radioItems: {
      type: Array,
      default: () => []
    },
    arr: [
      {
        imgUrl: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660884810229919.png',
        num: 100,
        price: '3.99',
      },
      {
        imgUrl: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660884810229919.png',
        num: 100,
        price: '3.99',
      },
      {
        imgUrl: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660884810229919.png',
        num: 100,
        price: '3.99',
      },
      {
        imgUrl: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660884810229919.png',
        num: 100,
        price: '3.99',
      }
    ]
  },
  data() {
    return {
      selectedValue: ''
    };
  },
  methods: {
    onChange() {
      this.$emit('input', this.selectedValue);
    }
  }
};

</script>

<style scoped>
.image-radio-group {
  display: flex;
  flex-wrap: wrap;
}

.image-radio-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

input[type='radio'] {
  display: none;
}

label {
  cursor: pointer;
}

label img {
  width: 100px;
  height: 100px;
}

label span {
  display: block;
  text-align: center;
}
</style>
