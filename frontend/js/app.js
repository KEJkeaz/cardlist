let lists = [
  {
    title: 'list name3',
    cards:[
    ]
  },
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
    `<div class="card-contents" id="card` + list_key +`-` + card_key +`" draggable="true" ondrag="drag_card(` + list_key +`,` + card_key +`)">` + value.title +`</div>`
  )

}

function draw_list(key, value){
  console.log('value', value)

  return document.querySelector('#lists').insertAdjacentHTML( 'afterbegin',

    `<div class="list hidden-add-card" id="list` + key + `" draggable="true" ondrag="drag_list(` + key + `)">
      <div class="card">
        <div class="card-header">
          <input type="text" value="` + value.title + `" class="card-header-title">
        </div>
        <div class="card-list" id="card-list` + key + `">
        </div>
        
        <div class="btn-container" id="container` + key + `">
          <div class="textarea-wrap">
            <textarea class=" add-card-textarea">textarea</textarea>
          </div>
          <div class="btn-wrap">
            <button class="btn btn-card-add" onclick="add_card(` + key + `)">add card</button>
            <button class="btn " onclick="hidden_add_card(` + key + `)">cancel</button>
          </div>
         
          
          <button class="btn btn-card-add" onclick="show_add_card(` + key + `)">add another card</button>
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
function drag_list(){
  console.log('drag_list')
  this.addEventListener('dragover', function(e) {
    console.log('this.event', e)

    let target = e.target;
    console.log(target)
    let droppable  = target.classList.contains('list');

    console.log(droppable)

  });

}
function add_card(id) {
  // 카드 데이터 추가
  console.log(id)
  console.log(lists[id].cards)
  let title_con = {title: 'test111'}
  lists[id].cards.push(title_con)

  console.log('lists11', lists)
}

function show_add_card(id){
  // 카드 추가 영역 보여지게 처리
  let container= document.getElementById('list'+id);
  container.classList.remove("hidden-add-card");
  console.log('show_add_card', id)

  // draw_add_card(id)
}

function hidden_add_card(id){
  // 카드 추가 영역 보이지 않게 처리
  let container= document.getElementById('list'+id);
  container.classList.add("hidden-add-card");

  console.log('hidden_add_card', id)

}



function show_add_list(id){
  // 리스트 추가 영역 보여지게 처리

  let container= document.getElementById(id);
  container.classList.remove("hidden-add-list");

  container.querySelector('.card-header-title').focus();

  console.log('clicked')
}

function hidden_add_list(id){
  // 리스트 추가 영역 보이지않게 처리
  let container= document.getElementById(id);
  container.classList.add("hidden-add-list");
  console.log(333)

}

function add_list(id){
  // 리스트 데이터 추가
  let container= document.getElementById(id);
  let val = container.querySelector('.card-header-title');

  let title_val = 'test'

  console.log(val)
  console.log('click add_list')
  let list_form = {
    title: title_val,
    cards:[

    ]
  }
  lists.push(list_form)

  console.log('add_list lists', lists)

  hidden_add_list(id)
  // draw_elements()


}

function drag_card(list_key, card_key){
  // 카드 드래그 이벤트
  console.log('list_key', list_key)
  console.log('list_key', card_key)
  console.log('drag drag_card')
  this.addEventListener('dragover', function(e) {
    console.log('this.event', e)

    let target = e.target;
    console.log(target)
    let droppable  = target.classList.contains('card-list');

    console.log(droppable)
  });
}
