var id =document.getElementById('id')
var name =document.getElementById('name')
var qty =document.getElementById('qty')
var price =document.getElementById('price')
var total =document.getElementById('total')
var btnadd =document.getElementById('btnadd')
var btnupdate =document.getElementById('btnupdate')

btnadd.style.display=`flex`
btnupdate.style.display='none'
var index=0;
index++;
id.value = index;
itemList=[
    {
      'Id' : 1010,
      'name' : 'coca',
      'qty' : '5',
      'price' : 1.1,
      'total' : 300
    },
    // {
    //    'Id' : 1010,
    //    'name' : 'coca',
    //    'qty' : '5',
    //    'price' : 1.1,
    //    'total' : 300
    // },
    // {
    //    'Id' : 1010,
    //    'name' : 'coca',
    //    'qty' : '5',
    //    'price' : 1.1,
    //    'total' : 300
    // },
         
];
getData=()=>
{
    var txt=''
    txt +=`
        <tr>
            <th>Name</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
        </tr>

    `
    itemList.forEach(item => {
    txt +=`
        <td>
            <td>${item.Id}</td>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
            <td>${item.total}</td>
            <td>
                <input type="button" id="btnedit" value="Edit" class="btn btn-warning">
                <input type="button" id="btndelete" value="Delete" class="btn btn-danger">
            </td>

        <td>
    
    `
    });
    document.querySelector('.total').innerHTML =txt;

    //Update
    function mouseClick()
    {
        var update = document.querySelectorAll('.btnupdate');
        update.forEach((e,i) => {
            e.addEventListener('click',function(){
                id.value  = itemList[i]['id'];
                Name.value  = itemList[i]['name'];
                qty.value  = itemList[i]['qty'];
                price.value  = itemList[i]['price'];
                total.value  = itemList[i]['total'];
                index=i;
                btnadd.style.display = 'none';
                btnupdate.style.display='flex';
            })
        });
    }
    mouseClick();
}
getData();

//Btn Update
btnupdate.addEventListener('click',function(){
    Swal.flire({
        title: "Success",
        text: "Update Data Success...",
        icon: "success"
    });
    itemList[index]['Id'] =id.value;
    itemList[index]['name'] =Name.value;
    itemList[index]['qty'] =qty.value;
    itemList[index]['price'] =price.value;
    itemList[index]['total'] =total.value;
    // console.log(itemList[index]);
    getData();
    clearField();
    btnupdate.style.display = 'none';
    btnadd.style.display = 'flex';
})

qty.addEventListener('keyup',function(){
    total.value = qty.value * price.value;
})
price.addEventListener('keyup',function(){
    total.value = qty=value * price.value
})
// add data to table
    btnadd.addEventListener('click',function(){
        // alert(123)
        if(id.value !="" && Name.value !="" && qty.value !="" && price !="" && total.value !="")
        {
            Swal.flire({
                title: "Success",
                text: "Add Data Success...",
                icon: "success"
            });
            itemList.push(
                {
                    'Id' : id.value,
                    'name' : Name.value,
                    'qty' : qty.value,
                    'price' : price.value,
                    'total' : total,

                }
            );
            index = index+1;
            id.value = index;
            getData();
            clearField()
        }
        else{
            Swal.flire({
                title: "Error",
                text: "Add Data Not Success...",
                icon: "error"
            });
        }
    });
clearField=()=>{
    Name.value ="";
    qty.value ="";
    price.value ="";
    total.value ="";
}


