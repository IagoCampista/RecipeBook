$(document).ready(function (){
    $('.delete-recipe').on('click', function() {
        console.log("cliclou hein");
        const recipeId = $(this).data('id');
        $.ajax({
            url: `/delete/${recipeId}`,
            type: 'DELETE',
            success: function() {
                location.reload();
            },
            error: function(xhr, status, error) {
                console.error('Error deleting recipe:', error);
            }
        });
        return false; // Prevent form submission
    });
});