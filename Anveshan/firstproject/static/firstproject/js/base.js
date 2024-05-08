$(document).ready(function () {

    $('#searchbar').click(function () {
        retrieve_names();
    });

    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    });

    let players;

    function retrieve_names() {
        $.ajax({
            type: 'POST',
            url: '/search/member/',
            data: {},
            async: !1,
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                put_names_to_var(data);
            },
        });
    }

    function put_names_to_var(data) {
        players = data['players'];
        autocomplete(document.getElementById("searchbar"), players);
    }

    function autocomplete(inp, arr) {
        let currentFocus;
        inp.addEventListener("input", function (e) {
            let a,b,i,val = this.value;
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;
            a = document.createElement("div");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].substr(0, val.length).toUpperCase() === val.toUpperCase()){
                    b = document.createElement("div");
                    b.innerHTML = "<strong>" + arr[i][0].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i][0].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i][0] + "'>";
                    b.addEventListener("click", function (e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });

        inp.addEventListener("keydown",function (e) {
            let x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode === 40) {
                currentFocus ++;
                addActive(x);
            }
            else if (e.keyCode === 38) {
                currentFocus --;
                addActive(x);
            }
            else if (e.keyCode === 13) {
                e.preventDefault();
                if (currentFocus > -1){
                    if (x) x[currentFocus].click();
                }
            }

        });

        function addActive(x) {
            if (!x) {
                return false;
            }
            removeActive(x);
            if (currentFocus >= x.length){
                currentFocus = 0;
            }
            if (currentFocus < 0) {
                currentFocus = (x.length - 1);
            }
            x[currentFocus].classList.add("autocomplete-active");
        }

        function removeActive(x) {
            for (let i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }

        function closeAllLists(elmnt) {
            let x = document.getElementsByClassName("autocomplete-items");
            for (let i = 0; i < x.length; i++) {
                if (elmnt !==x[i] && elmnt !== inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }
});
