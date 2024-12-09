<template>
  <section class="large" id="contact">
    <form action="https://formspree.io/f/xwkjqkae" method="POST" class="validate" target="_self" name="contactform" id="contactform">
      <div>
        <h2>Get to know each other?</h2>
        <p>Thanks for checking out my website. If you have any questions feel free to reach out to me. You can contact me below or via the <a href="/#socials" class="link">socials</a> at the bottom.</p>
        <div class="field-group">
          <label for="email">Email Address <span>(required)</span></label>
          <input type="email" name="email" id="email" value="" class="required email" required="required">
          <label for="textarea">Question <span>(required)</span></label>
          <textarea type="textarea" name="message" id="textarea" class="required email" required="required" rows="5" data-lt-tmp-id="lt-880404" spellcheck="false" data-gramm="false"></textarea>
          <button type="submit" id="btnsubmit" class="button">Send question</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
