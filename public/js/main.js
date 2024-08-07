$(document).ready(function (){
    $('.delete-recipe').on('click', function() {
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

    $('.edit-recipe').on('click', function() {
        $('#edit-form-name').val($(this).data('name'));
        $('#edit-form-ingredients').val($(this).data('ingredients'));
        $('#edit-form-directions').val($(this).data('directions'));
        $('#edit-form-id').val($(this).data('id'));
    });
});

