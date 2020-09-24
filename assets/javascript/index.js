// popover assignment to every data-toggle with a value of popover;
$('[data-toggle="popover"]').popover();

// scroll to functions for the arrows in the first tile parallax;

$('#tech-arrow').click(function () {
  // alert('you clicked the arrow');
  //   $('#tech-container').scrollIntoView({
  //     behavior: "smooth",
  //     block: "start"
  //   })
  $('html, body').animate(
    {
      scrollTop: $('#tech-container').offset().top,
    },
    2000
  );
});

$('#tech-arrow').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#tech-container').offset().top,
    },
    2000
  );
});

$('#project-arrow').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#project-container').offset().top,
      },
      1500
    );
  });

$('#email-icon').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#email-container').offset().top,
    },
    5000
  );
});
