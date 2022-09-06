const content = {
  judul: 'Nyoba dulu ae!',
  isi: 'Coba dulu ae!',
  adalagi: 'Ini juga coba!',
  active: true
}

const app = new Vue({
  el: '#app',
  data: content,
  methods: {
    getname: function() {
      return 'Wel-come ' + this.judul
    },
    judulUbah: function(judulBaru) {
      this.judul = judulBaru
    }
  }
})
