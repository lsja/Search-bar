document.getElementById('SelectOption').addEventListener('change', function () {
    val = $("#SelectOption").val();

    console.log(val);
    if (val === 'Jamaica') {
        window.open('https://languesolinternational.com', '_blank');
    }
    if (val === 'Contact') {
        window.open('contact.php', '_blank');
    }
    if (val === 'Sitemap') {
        window.open('sitemap.php', '_blank');
    }
});
