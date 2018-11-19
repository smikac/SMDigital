<template>
  <div>
    <template v-if="grams.length > 0">
      <div v-for="gram in grams" :key="gram.id">
        <a href="https://www.instagram.com/p/BjXplo-ASdr/">
          <img :src="gram.images.low_resolution.url" :alt="gram.text" />
        </a>
      </div>
    </template>           
  </div>
</template>

<script>
export default {   
    data () {
        return {
          access_token: "442454824.1677ed0.05e258309fc245268438a661a5f8a573",
          url: "https://api.instagram.com/v1/users/self/media/recent/",
          username: "sashamikac",
          grams: [],
          next_url: "",
          error: false
        }
    },
    created(){
      axios.get(this.url + "?access_token=" + this.access_token)
            .then(({data}) => {
              this.grams = data.data
              this.username = data.data[0].user.username
              this.next_url = data.pagination.next_url
            })
            .catch(function (error) {
              console.log(error)
              this.error = true
            });    
    }      
}
</script>

<style lang="scss">

</style>
