$('#period').textillate({
	// enable looping
	loop: false,

	// sets the minimum display time for each text before it is replaced
	minDisplayTime: 2000,

	// sets the initial delay before starting the animation
	// (note that depending on the in effect you may need to manually apply
	// visibility: hidden to the element before running this plugin)
	initialDelay: 0,

	// set whether or not to automatically start animating
	autoStart: true,

	// in animation settings
	in: {
		// set the effect name
		effect: 'fadeInUpBig',

		// set the delay factor applied to each consecutive character
		delayScale: 1.5,

		// set the delay between each character
		delay: 50,

		// set to true to animate all the characters at the same time
		sync: false,

		// randomize the character sequence
		// (note that shuffle doesn't make sense with sync = true)
		shuffle: false,

		// reverse the character sequence
		// (note that reverse doesn't make sense with sync = true)
		reverse: false

		// callback that executes once the animation has finished
		// callback: function() {}
	},
	callback: function() {
		$('#period').hide();
	}
});

$('#j').textillate({
	loop: false,
	minDisplayTime: 2000,
	initialDelay: 100,
	autoStart: true,

	in: {
		effect: 'bounceInRight',
		delayScale: 1.5,
		// set the delay between each character
		delay: 50,
		// set to true to animate all the characters at the same time
		sync: false,
		// randomize the character sequence
		// (note that shuffle doesn't make sense with sync = true)
		shuffle: true,
		// reverse the character sequence
		// (note that reverse doesn't make sense with sync = true)
		reverse: false
	}
});

$('#s-hide').textillate({
	loop: false,
	minDisplayTime: 2000,
	initialDelay: 100,
	autoStart: true,

	in: {
		effect: 'bounceInRight',
		delayScale: 1.5,
		// set the delay between each character
		delay: 50,
		// set to true to animate all the characters at the same time
		sync: false,
		// randomize the character sequence
		// (note that shuffle doesn't make sense with sync = true)
		shuffle: true,
		// reverse the character sequence
		// (note that reverse doesn't make sense with sync = true)
		reverse: false
	},
	out: {
		effect: 'hinge',
		delayScale: 1.5,
		delay: 200,
		sync: false,
		shuffle: true,
		reverse: false
	},
	callback: function() {
		$('#s-hide').hide();
	},
	type: 'char'
});

$('#first').textillate({
	loop: false,
	minDisplayTime: 2000,
	initialDelay: 1000,
	autoStart: true,

	in: {
		effect: 'bounceInDown',
		delayScale: 1.5,
		// set the delay between each character
		delay: 1000,
		// set to true to animate all the characters at the same time
		sync: false,
		// randomize the character sequence
		// (note that shuffle doesn't make sense with sync = true)
		shuffle: true,
		// reverse the character sequence
		// (note that reverse doesn't make sense with sync = true)
		reverse: false
	}
});

$('#last').textillate({
	loop: false,
	minDisplayTime: 2000,
	initialDelay: 1000,
	autoStart: true,

	in: {
		effect: 'bounceInDown',
		delayScale: 1.5,
		// set the delay between each character
		delay: 100,
		// set to true to animate all the characters at the same time
		sync: false,
		// randomize the character sequence
		// (note that shuffle doesn't make sense with sync = true)
		shuffle: true,
		// reverse the character sequence
		// (note that reverse doesn't make sense with sync = true)
		reverse: false
	}
});

function sHide() {
	$('#s-hide').hide();
	// delay here
}
