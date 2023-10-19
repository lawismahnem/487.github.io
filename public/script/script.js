$('.body-container').each(function () {
    $(this).html($(this).html().replace(/(\")/g, '<span style="color: red;">$1</span>'));
});