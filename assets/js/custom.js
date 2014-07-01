$("#criteria").on('input', function(){
  var criteria = $("#criteria").val();
  if (criteria) {
    $.get(
    '/addressbook/search',
    {criteria: criteria}
    ).done(function(data){
      var rows = '';
      $.each(data, function(index, obj){
        rows = rows + '<div class="row lead">'+
            '<div class="col-md-12">'+
              '<span>Name: '+ obj.name+ '</span><br>'+
              '<span>Phone: '+ obj.phone+ '</span><br>'+
              '<span>Address: '+ obj.address+ '</span>'+
            '</div>'+
          '</div><br>';
      });

      $("#results").html(rows);
    }).fail(function(res){
        console.log("Error: " + res.getResponseHeader("error"));
    });
    }
});