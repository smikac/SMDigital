<template>
  <div class="instagram"> 
    <template v-if="posts.length > 0">
      <div class="post" v-for="post in posts" :key="post.id">
          <img :src="post.images.low_resolution.url" :alt="post.text" />
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
          posts: [],
          next_url: "",
          error: false
        }
    },
    created(){
      axios.get(this.url + "?access_token=" + this.access_token)
            .then(({data}) => {
              var posts = data.data;
              this.posts = posts.filter(post => post.tags.includes("amsterdam"));
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
.instagram{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  justify-content: space-around; /* align horizontal */
  align-items: center;
  .post{

  }
}
</style>
