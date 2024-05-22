function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.profile_pictures img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};




document.addEventListener("DOMContentLoaded", function () {

    function handleSearchForm(event) {
        event.preventDefault();

        var query = document.getElementById("searchInput").value.toLowerCase();

        if (query === "neonbeat") {
            window.location.href = "./Neonbeat/neonbeat.html";
        } else if (query === "wlop") {
            window.location.href = "./wlop/wlop.html";
        } else if (query === "eren") {
            window.location.href = "eren/eren.html";
        } else if (query === "artbyo3", "o3") {
            window.location.href = "Atder/profile.html";
        } else {

            alert("No results found for '" + query + "'");
        }
    }


    document.getElementById("searchForm").addEventListener("submit", handleSearchForm);


    function closeDropdown(event) {
        if (!event.target.matches('.profile_pictures img')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }


    window.onclick = closeDropdown;
});





document.addEventListener("DOMContentLoaded", function () {


    document.getElementById("publicar-btn").addEventListener("click", function () {
        document.getElementById("formulario-container").style.display = "block";
    });

});