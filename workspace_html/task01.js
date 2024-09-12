const button = document.getElementById('add_text');
const output = document.getElementById('out_text')
button.addEventListener('click',()=>{
  const input = prompt("추가할 할일을 입력하세요");
  if (input){
    const new_text = document.createElement('div');
    new_text.innerHTML=`${input} <button class="delete_button">삭제</button>`;
    output.appendChild(new_text);
    new_text.querySelector('.delete_button').addEventListener('click',()=>{
      new_text.remove();
    });
  }
});
