const content = {
  toko: 'Nyoba dulu ae!',
  namaProduk: 'Earphone Xiaomi Terbaru',
  adalagi: 'Ini juga coba!',
  active: true
}

const app = new Vue({
  el: '#app',
  data: content,
  methods: {
    getname: function() {
      return this.toko + ' store'
    },
    tokoUbah: function(tokoBaru) {
      this.toko = judulBaru
    }
  }
})
