async function getData(url) {
    let res = await fetch(url);
    let out = await res.json();
    return out;
}

function showData(...args) {
    console.log(args[0]);
    for (let key in args[0]) {
        if (key == 'strMeal') {
            document.getElementById('title').textContent = args[0][key];
        } else if (key == 'strMealThumb') {
            document.getElementById('image').setAttribute('src',args[0][key]);
        } else {
            let text = document.createElement('p');
            text.textContent = args[0][key];
            document.getElementById('text').append(text);
        }
        // console.log(key,args[0][key]);
    }
}
export {getData,showData};