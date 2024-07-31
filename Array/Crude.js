var Id =document.getElementById('id')
var Name = document.getElementById('name')
var qty = document.getElementById('qty')
var price = document.getElementById('price')
var total = document.getElementById('total')
var btnAdd =  document.getElementById('add_product')
var index = 0;
index +=1
Id.value =index
// var btn =  document.getElementById('add-product').addEventListener('click', () => {
//     console.log(Id.value , Name.value , qty.value , price.value);
// })
itemList = [
    // {
        // id:11,
        // Name: 'coca',
        // qyt: 2,
        // price:1,
        // total:2

    // },
    // {
        // id:12,
        // Name: 'sting',
        // qyt: 4,
        // price:1,
        // total:4
    // },
    // {
        // id:13,
        // Name: 'beer',
        // qyt: 10,
        // price:2,   
        // total:20
    // },
]
const sum = () =>{
    document.getElementById('total')
}
getData = ()=>{
    var txt = ''
    txt += `
        <tr class="text-center" style="font-weight:bold;">
            <td>ID</td>
            <td>Name</td>
            <td>QYT</td>
            <td>Price</td>
            <td>Total</td>
            <td>Action</td>
        </tr>
    `
    itemList.forEach(item => {
        txt += `
        <tr class="text-center">
            <td>${item.id}</td>
            <td>${item.Name}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
            <td>$${item.total}</td>
            <td>
            <input type="button" id="btnUpdate" class="btn btn-success" value="Update">
            <input type="button" id="btnDelete" class="btn btn-danger" value="Delete">
            </td>
        </tr>`
    })
    
    document.querySelector('.table').innerHTML = txt;
    // btn Delete
    var btnDelete = document.querySelectorAll('.btndelete');
    btnDelete.forEach((e,i)=>{
        e.addEventListener('click',function(){
            Swal.fire({
                title: "Delete Success",
                text: "Delete Data Success...",
                icon: "Success"
            });
            itemList.splice(i,1);
            getData();
        })
    })

}
qty.addEventListener('keyup' ,() =>{
    total.value = (qty.value * price.value).toFixed(2)
})
price.addEventListener('keyup', ()=>{
    total.value = (qty.value * price.value).toFixed(2)
})
getData();
btnAdd.addEventListener('click' ,function(){
    itemList.push({
        'id':Id.value,
        'Name':Name.value,
        'qty':qty.value,
        'price':price.value,
        'total':total.value
    })    
    index +=1
    Id.value =index
    getData();
    clearField();
});
clearField =()=>{
    Name.value = '',
    qty.value = '',
    price.value = '',
    total.value = ''
}