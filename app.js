document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchButton').addEventListener('click', function() {

        $.ajax({
            url: 'superheroes.php',
            type: 'get',
            success: function(data) {
                alert(data);
            },
            error: function(err) {
                alert(err);
            }
        })
        });
  });
