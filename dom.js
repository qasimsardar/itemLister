var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItem);

//Function add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element

  var li = document.createElement('li');

  li.className = 'list-group-item';

  //Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  //Create del button element

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('x'));
  li.appendChild(deleteBtn);

  //Apend li to the list
  itemList.appendChild(li);

}


//Function to remove item
function removeItem(e){
  if (e.target.classList.contains('delete')){
    if(confirm("Are you sure?")){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItem(e){
  //converts lowercase
  var text = e.target.value.toLowerCase();
  
  //Get all li
  var items = itemList.getElementsByTagName('li');

  // Convert to array

  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  });
   
}