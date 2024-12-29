<template>
  <section class="large" id="wedstock">
    <form
        action="https://formspree.io/f/xwkjqkae"
        method="POST"
        class="validate"
        target="_self"
        name="contactform"
        id="contactform"
    >
      <div>
        <h2>Contact Us</h2>
        <div class="field-group">
          <label for="name">Name <span>(required)</span></label>
          <input
              type="text"
              name="name"
              id="name"
              class="required"
              required="required"
          />
          <label for="email">Email Address <span>(required)</span></label>
          <input
              type="email"
              name="email"
              id="email"
              class="required email"
              required="required"
          />
          <label for="remarks">Remarks <span>(required)</span></label>
          <textarea
              name="remarks"
              id="remarks"
              class="required"
              required="required"
              rows="5"
          ></textarea>
          <button type="submit" id="btnsubmit" class="button">
            Send
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import './WedStock.css';

export default {
  name: "WedStock",
};
</script>

<style scoped>
/* Add your styles here */
</style>
