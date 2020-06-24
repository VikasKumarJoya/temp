var form = document.querySelector('#addForm');
form.addEventListener('submit',runEvent);//add item to list

function runEvent(e){
  e.preventDefault();
  console.log('running');
  var text=document.querySelector('#item').value;
  var listItem=document.createElement('li');
  listItem.className='list-group-item';
  listItem.innerHTML=text+' <button class="btn btn-danger btn-sm float-right delete">X</button>';
  
  var list=document.querySelector('#list');
  list.appendChild(listItem);
  listItem.children[0].addEventListener('click',removeItem);
  console.log(listItem.innerHTML);
  console.log(listItem);
}

var listDelete=document.getElementsByClassName('delete');
for(var i=0;i<listDelete.length;i++){
  listDelete[i].addEventListener('click',removeItem);//delete btn event
}

function removeItem(e){
  console.log("delete clicked");
   var list=document.querySelector('#list');
   var li=e.target.parentElement;
   list.removeChild(li);

}

var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterFunction);

function filterFunction(e){
  var text=e.target.value.toLowerCase();
  var itemList=document.querySelector('#list');
  var items=itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
  console.log(items);
}