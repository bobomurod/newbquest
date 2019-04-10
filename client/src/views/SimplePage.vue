<template>
    <div>
        <h1>
            Simple Page
        </h1>
        <div class="form-group">
          <label for="">Interactive form</label>
          <input 
            type="text" 
            name="" id="" 
            class="form-control" 
            placeholder="" 
            aria-describedby="helpId" 
            @keyDown="typing()"
            >
          <small id="helpId" class="text-muted">Help text</small>
        </div>
    </div>
</template>

<script>
export default {
  name: 'simplepage',
  data: () => ({
      interactiveInput: null
  }),
  methods: {
      typing(){
          console.log("typing...")
      }
  }
};
</script>

<style>

</style>
