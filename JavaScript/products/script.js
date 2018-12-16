let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function() {
    let element = document.createElement('tr');
    let description = document.querySelector('form input[name=description]').value;
    let quantity = document.querySelector('form input[name=quantity]').value;
    element.innerHTML = `<td>${description}</td><td><input value="${quantity}"></td><td><input type="button" value="Remove"></td>`;
    let change = element.getElementsByTagName('input')[0];
    change.addEventListener('change',updateTotal);
    let table = document.getElementById('products');
    table.append(element);

    let remove = element.querySelector('input[type=button]');
    remove.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
        updateTotal();
    });
    updateTotal();
    event.preventDefault();
});

function updateTotal(){
    let total = 0;
    let lines = document.querySelectorAll('table tr');
    for(let i =0;i<lines.length;i++){
        let input = lines[i].getElementsByTagName('input')[0];
        if (input != null)
        total += Number(input.value);
    }
    let span = document.getElementById('total');
    span.innerHTML = total;
}