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
  // list card draw

  return document.querySelector('#card-list' + list_key).insertAdjacentHTML( 'afterbegin',
    `<div class="card-contents" id="card` + list_key +`-` + card_key +`" draggable="true" ondrag="drag_card(` + list_key +`,` + card_key +`)">` + value.title +`</div>`
  )

}

function draw_list(key, value){
  // list html draw

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
  // 화면 list, card draw
  for( let list_key in lists){

    draw_list(list_key, lists[list_key])
    let cards = lists[list_key].cards

    for( let card_key in cards){
      draw_card(list_key, card_key, cards[card_key])
    }

  }
}
function drag_list(){
  //list drag 이벤트 처리
  this.addEventListener('dragover', function(e) {
    let target = e.target;
    let droppable  = target.classList.contains('list');

  });

}
function add_card(id) {
  // 카드 데이터 추가
  let title_con = {title: 'test111'}

  lists[id].cards.push(title_con)

}

function show_add_card(id){
  // 카드 추가 영역 보여지게 처리
  let container= document.getElementById('list'+id);

  container.classList.remove("hidden-add-card");

  // draw_add_card(id)
}

function hidden_add_card(id){
  // 카드 추가 영역 보이지 않게 처리
  let container= document.getElementById('list'+id);

  container.classList.add("hidden-add-card");

}



function show_add_list(id){
  // 리스트 추가 영역 보여지게 처리
  let container= document.getElementById(id);

  container.classList.remove("hidden-add-list");
  container.querySelector('.card-header-title').focus();
}

function hidden_add_list(id){
  // 리스트 추가 영역 보이지않게 처리
  let container= document.getElementById(id);
  container.classList.add("hidden-add-list");
}

function add_list(id){
  // 리스트 데이터 추가
  let container= document.getElementById(id);
  let val = container.querySelector('.card-header-title');

  let title_val = 'test'

  let list_form = {
    title: title_val,
    cards:[

    ]
  }
  lists.push(list_form)

  hidden_add_list(id)

}

function drag_card(list_key, card_key){
  // 카드 드래그 이벤트
  this.addEventListener('dragover', function(e) {
    let target = e.target;
    let droppable  = target.classList.contains('card-list');

  });
}
