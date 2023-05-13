<template>
    <!-- Add the container-fluid and p-0 classes to remove padding -->
    <div class="container-fluid p-0" id="contact">
        <!-- Add the row and g-0 classes to remove gutters -->
        <div class="row g-0">
            <!-- Left column -->
            <!-- Add the d-flex, align-items-center, and justify-content-center classes to center content -->
            <div class="col-md-6 d-flex align-items-center justify-content-center text-center">
                <!-- Compelling text -->
                <div>
                    <h3>Let's work together!</h3>
                    <p class="text-white">
                        I am always looking for new challenges and opportunities to grow. If you have a project in mind or
                        just want to say hi, don't hesitate to get in touch. I would love to hear from you!
                    </p>
                </div>
            </div>

            <!-- Right column -->
            <!-- Add the col-md-6 and p-md-5 classes for padding on larger screens -->
            <div class="col-md-6 p-md-5">
                <!-- Contact form heading -->
                <h2 class="text-center">Contact me</h2>

                <!-- Contact form -->
                <form action="#" method="#" id="#">
                    <!-- Name input -->
                    <div class="mb-3">
                        <label for="#" class="form-label text-white">Name</label>
                        <input type="#" name="#" id="#" required class="form-control">
                    </div>

                    <!-- Email input -->
                    <div class="mb-3">
                        <label for="#" class="form-label text-white">Email</label>
                        <input type="#" name="#" id="#" required class="form-control">
                    </div>

                    <!-- Message input -->
                    <div class="mb-3">
                        <label for="#" class="form-label text-white">Message</label>
                        <textarea name="#" id="#" required rows="#" class="form-control"></textarea>
                    </div>

                    <!-- Submit button -->
                    <!-- Add the btn-primary and rounded-pill classes for styling -->
                    <button type="#" name="#" id="#" value="#" class="btn btn-primary w-100 rounded-pill">Send
                        message</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Contact"
}
</script>
  
  