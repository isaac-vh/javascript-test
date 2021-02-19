(() => {




    function dosearch() {
        let ctails = document.search;
        let searchLocation = ctails.querySelector('input[name="mart"]:checked').value;
        window.location.href = searchLocation + (ctails.search.value);
        return false;
    }


    let coName = document.getElementById('search-form').content.cloneNode(true);
    let cocktails = `https://www.thecocktaildb.com/api/json/v1/1/search.php/${coName}/`;
        fetch (cocktails)
            .then(res = res.json()
            ).then ((data) =>{
            if (cocktails === 'mart') {
                document.getElementById('number-drinks-found').innerText = data.length;
                document.getElementById('search-categories').innerHTML = '';
                console.log(cocktails);
            }.catch (err => {
                alert('No cocktails found with this name!');
                console.log(err);
            });
            for (i = 0; i < cocktails.coName.length; i++) {
                x += cocktails.coName[i];
            }

        })




})();
