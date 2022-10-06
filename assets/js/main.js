const content = {
  toko: '<strong>nyoba dulu ae!</strong>',
  store: ' store',
  imgProduk: 'assets/img/earphone.jfif',
  namaProduk: 'Earphone Xiaomi Terbaru',
  deskProduk: 'All in Eartip Earphone. Kabel lebih panjang untuk kemudahan dan kenyamanan menelpon dan mendengarkan lagu favorit kamu.',
  stock: 3,
  cart: 0,
  ready: true
}

const app = new Vue({
  el: '#app',
  data: content,
  methods: {
    getname: function() {
      return this.toko
    },
    tokoUbah: function(tokoBaru) {
      this.toko = judulBaru
    }
  },
  computed: {
    totalBayar: function() {
      return 'Rp' + this.cart * 450000
    },
    isDisabledAdd: function() {
      if(this.stock==0) {
        return true
      }
      else {
        return false
      }
    },
    isDisabledRemove: function() {
      if(this.cart==0) {
        return true
      }
      else {
        return false
      }
    },
    active: function() {
      return this.ready ? 'Ready' : 'Sold Out'
    },
    namaStore: function() {
      return this.toko.toUpperCase() + this.store.toUpperCase()
    }
  }
})
