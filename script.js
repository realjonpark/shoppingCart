
$(function (shoppinglist) {
  
$(function (shoppinglist) {
  
  function addItemElement(item) {
    return `
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  }

  $("#js-shopping-list-form").submit((event) => {
    event.preventDefault();
    
    const inputValue = $("#shopping-list-entry").val();
    
    $(".shopping-list").append(addItemElement(inputValue));
  });
  
});

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});