<template>
  <div>
     <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <div v-if="succesMessage" class="alert alert-success" role="alert">
      {{ succesMessage }}
    </div>
    <form @submit.prevent="create">
  <fieldset>
    <legend>Create shop</legend>
    <div class="form-group row">
      <div class="col-sm-10">
        <input 
          v-model="shop.name"
          type="text" 
          class="form-control-plaintext" 
          id="shopName" 
          placeholder="your shop name"
          required>
      </div>
      <div class="col-sm-10">
        <input 
          v-model="shop.title"
          type="text" 
          class="form-control-plaintext" 
          id="shopTitle" 
          placeholder="your shop title"
          required>
      </div>
      <div class="col-sm-10">
        <input 
          v-model="shop.subdomain"
          type="text" 
          class="form-control-plaintext" 
          id="shopSubdomain" 
          placeholder="your shop subdomain"
          required>
      </div>
    </div>
    <!-- <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div> -->
    <div class="form-group">
    </div>
    <div class="form-group">
      
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Example textarea</label>
      <textarea class="form-control" id="exampleTextarea" v-model="shop.about" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
      <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
    </div>
    <fieldset class="form-group">
      <legend>Radio buttons</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
          Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Option two can be something else and selecting it will deselect option one
        </label>
      </div>
      <div class="form-check disabled">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="">
          Option three is disabled
        </label>
      </div>
    </fieldset>
    <fieldset class="form-group">
      <legend>Checkboxes</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" checked="">
          Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div class="form-check disabled">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" disabled="">
          Option two is disabled
        </label>
      </div>
    </fieldset>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
  </div>
</template>

<script>
  const CREATE_SHOP_API ='http://localhost:5000/shops/create';
export default {
  name: 'Create_shop',
  data: () => ({
    errorMessage: '',
    succesMessage: '',
    shop: {
      name: '',
      title: '',
      domain: '',
      about: '',
    }
  }),
  methods: {
    create() {
      const body = {
        shop: this.shop
      }
      fetch(CREATE_SHOP_API, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
             authorization: `Bearer ${localStorage.token}`
          },
      }).
        then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((error) => {
              this.errorMessage = error;
              throw new Error(error.message);
            });
          }
        }).
          then((shop) => {
            this.succesMessage = "Shop created"
            console.log(shop)
          })
    }
  }
}
</script>

<style>

</style>
