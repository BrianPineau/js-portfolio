<?php

    // Message Vars
    $msg = '';
    $msgClass = '';

    // Check For Submit
      if(filter_has_var(INPUT_POST, 'submit')){
        // Get Form Data
        $name = htmlspechialchars($_POST['name']);
        $email = htmlspechialchars($_POST['email']);
        $message = htmlspechialchars($_POST['message']);

        // Check Required Fields
        if(!empty($email) && !empty($name) && !empty($message)) {
          // Passed
          //  Check Email
          if(filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            //  Failed
            $msg = 'Please use a valid email';
            $msgClass = 'alert-danger';
          } else {
            //  Passed
            //  Recipient Email  Where you want stuff to go
            $toEmail = 'pinoub@gmail.com';
            $subject = 'Contact Request From '.$name;
            $body = '<h2>Contact Request</h2>
              <h4>Name</h4><p>'.$name.'</p>
              <h4>Email</h4><p>'.$email.'</p>
              <h4>Message</h4><p>'.$message.'</p>
            ';

            //  Email Headers
            $headers = "MIME-VERSION: 1.0" ."\r\n";
            $headers .="Content-Type: text/html; charset=UTF-8" . " \r\n";

            //Additional Headers
            $headers .= "From: " .$name. "<".$email.">". "\r\n";

            if(mail($toEmail, $subject, $body, $headers)){
              //  Email Sent
              $msg = 'Your email has been sent';
              $msgClass = 'alert-success';
            } else {
              $msg = 'Your email was not sent';
              $msgClass = 'alert-danger';
            }
          }
        } else {
          // Failed
          $msg = 'Please fill in all Fields';
          $msgClass = 'alert-danger';
        }
      }
    ?>


    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <h1 class="navbar-brand">Contact Me</h1>
        </div>
      </div>
    </nav>
  
    <div class="container">
    <?php if($msg != ''): ?>
      <div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
    <?php endif;  ?>
      <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <div class="form-group">
          <label>name</label>
          <input type="text" name="name" class="form-control" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" name="email" class="form-control" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
        </div>
        <div class="form-group">
          <label>Message</label>  
          <textarea name="<?php echo isset($_POST['message']) ? $message : ''; ?>" class="form-control"></textarea>
        </div>
        <br>
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>