function checkOnlyOne(checkbox) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}