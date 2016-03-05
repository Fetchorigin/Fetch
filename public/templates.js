var templates = {};

templates.user = [
  '<div class="userRequest">',
    '<h4> <%= request %></h4>',
    '<p>Status: <%= status %></p>',
    '<p>Driver: <%= driverId %></p>',
<<<<<<< HEAD
    '<div class="deleteButton">Completed</div>',
<<<<<<< HEAD
    '<div class="deleteButton" data-id=<%= id %> >Cancel</div>',
=======
=======
    '<div class="completeButton" data-id= <%= id %>>Complete</div>',
>>>>>>> 6554aa6de4cb0e238e9f73065582fa53b4d19b7f
    '<div class="deleteButton" data-id= <%= id %>>Cancel</div>',
>>>>>>> 76a9e01547997dd095f0e141234a921e69ccc3ba
  '</div>'
].join("");

  templates.accepted = [
    '<div class="acceptedRequest">',
      '<h4> <%= request %></h4>',
      '<p>  <%= userId %></p>',
    '</div>',
   ].join("");

 templates.request = [
   '<div class="openRequest">',
    '<h4> <%= request %></h4>',
     '<p> <%= userId %></p>',
     '<div class="acceptButton">Accept</div>',
   '</div>',
  ].join("");
