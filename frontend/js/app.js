let lists = [
  {
    title: 'list name1',
    cards:[
      {title: 'card name1-1'},
      {title: 'card name1-2'}
    ]
  },
  {
    title: 'list name2',
    cards:[
      {title: 'card name2-1'},
      {title: 'card name2-2'}
    ]
  },
]

console.log(lists)

window.onload = () => {
  draw_elements()
}

function draw_card(list_key, card_key, value){

  return document.querySelector('#card-list' + list_key).insertAdjacentHTML( 'afterbegin',
    `<div class="card-contents" draggable="true">` + value.title +`</div>`
  )

}

function draw_list(key, value){
  console.log('value', value)
  return document.querySelector('#lists').insertAdjacentHTML( 'afterbegin',

    `<div class="list">
      <div class="card">
        <div class="card-header">
          <input type="text" value="` + value.title + `" class="card-header-title">
        </div>
        <div class="card-list" id="card-list` + key + `">
        </div>

        <div class="btn-container">
          <button class="btn btn-card-add">add another card</button>
        </div>

      </div>
    </div>`

  )
}

function draw_elements(){
  for( let list_key in lists){
    draw_list(list_key, lists[list_key])
    let cards = lists[list_key].cards

    for( let card_key in cards){
      draw_card(list_key, card_key, cards[card_key])
    }

  }
}

function add_list(){
  console.log('click add_list')
}

function add_card(){
  console.log('click add_card')
}

function click_card(){
  console.log('click click_card')
}
