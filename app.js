document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchButton').addEventListener('click', function() {

        var searchQuery = $('#search').val();
        //searchQuery = encodeURIComponent(searchQuery);
        $.ajax({
            url: 'superheroes.php',
            type: 'get',
            data:{query: searchQuery},
            success: function(data) {
                $('#result').html(data);
            },
            error: function(err) {
                alert(err);
            }
        })
        });
  });
