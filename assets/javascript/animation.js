// animations for the title text (name and initials)

$('#period').textillate({
  // enable looping
  loop: false,
  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 10000,
  // sets the initial delay before starting the animation
  // (note that depending on the in effect you may need to manually apply
  // visibility: hidden to the element before running this plugin)
  initialDelay: 00,
  // set whether or not to automatically start animating
  autoStart: true,
  // in animation settings
  in: {
    // set the effect name
    effect: 'fadeInDownBig',
    // set the delay factor applied to each consecutive character
    delayScale: 1.5,
    // set the delay between each character
    delay: 500,
    // set to true to animate all the characters at the same time
    sync: false,
    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,
    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,
    // callback that executes once the animation has finished
    callback: function () {
      $('#period').textillate('out');
    },
  },
  out: {
    effect: 'bounceOutLeft',
    callback: function () {
      $('.first-row').remove();
    },
  },
});

$('#j').textillate({
  loop: false,
  minDisplayTime: 2000,
  initialDelay: 00,
  in: {
    effect: 'bounceInRight',
    // delayScale: 1.5,
    // set the delay between each character
    delay: 500,
    // set to true to animate all the characters at the same time
    sync: false,
    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,
    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,
    callback: function () {
      $('#j').textillate('out');
    },
  },
  out: {
    effect: 'bounceOutUp',
    callback: function () {
      $('#s').remove();
    },
  },
  callback: function () {},
  type: 'char',
});

$('#s').textillate({
  loop: false,
  minDisplayTime: 2000,
  initialDelay: 00,
  autoStart: true,

  in: {
    effect: 'bounceInRight',
    // delayScale: 1,
    // set the delay between each character
    delay: 500,
    // set to true to animate all the characters at the same time
    sync: false,
    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,
    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,
    callback: function () {
      $('#s').textillate('out');
    },
  },
  out: {
    effect: 'bounceOutDown',
    // delayScale: 1.5,
    delay: 500,
    // sync: false,
    // shuffle: true,
    reverse: true,
    callback: function () {
      $('#s').remove();
    },
  },
  callback: function () {
    // $('#s').remove();
  },
  type: 'char',
});

$('#first').textillate({
  loop: false,
  minDisplayTime: 4000,
  initialDelay: 1000,
  autoStart: true,

  in: {
    effect: 'bounceInDown',
    delayScale: 1.5,
    // set the delay between each character
    delay: 120,
    // set to true to animate all the characters at the same time
    sync: false,
    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,
    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,
  },
});

$('#last').textillate({
  loop: false,
  minDisplayTime: 4000,
  initialDelay: 1000,
  autoStart: true,

  in: {
    effect: 'bounceInDown',
    delayScale: 1.5,
    // set the delay between each character
    delay: 120,
    // set to true to animate all the characters at the same time
    sync: false,
    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,
    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,
  },
});


