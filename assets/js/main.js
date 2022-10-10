Vue.component('footer-component', {
  template: `
    <footer id="footer" class="mt-4">
      <p>{{ cr }}</p>
    </footer>
  `,
  data: function() {
    return {
      cr: '@copyright 2022 - Vue.js'
    }
  }

})

const content = {
  toko: 'nyoba dulu ae!',
  store: ' store',
  imgProduk: 'assets/img/earphone.jfif',
  namaProduk: 'Earphone Xiaomi Terbaru',
  deskProduk: 'All in Eartip Earphone. Kabel lebih panjang untuk kemudahan dan kenyamanan menelpon dan mendengarkan lagu favorit kamu.',
  stock: 3,
  cart: 0,
  nav: 'beranda',
  type: ['Wireless', 'Wired'],
  typeBaru: "",
  bilangan: [1, 2, 3, 4, 5, 6],
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
    },
    bilangangenap: function(data) {
      return data.filter(angka => {
        return angka % 2 == 0
      })
    },
    menuNavigasi: function(data) {
      this.nav = data
    },
    sumbit: function() {
      this.type.push(this.typeBaru)
      this.typeBaru = ""
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
