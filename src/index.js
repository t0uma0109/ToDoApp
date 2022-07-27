import "./styles.css";

const input = document.querySelector("input");

//登録ボタン押下
const addTodoBtn = document.querySelector("#add-todo-btn");

addTodoBtn.addEventListener("click", function () {
  //ulタグ取得
  const ul = document.querySelector(".todo-list-area");
  console.log(ul);

  //liタグ作成aaa
  const li = document.createElement("li");
  li.classList.add("todo-list");

  //pタグ作成
  const p = document.createElement("p");
  p.textContent = input.value;
  console.log(p);

  //ul.appendChild(li);
  li.appendChild(p);

  const compleateBtn = document.createElement("button");
  compleateBtn.textContent = "登録";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";

  //liにぶち込む
  li.appendChild(compleateBtn);
  li.appendChild(deleteBtn);

  ul.appendChild(li);

  //evt.target.style.visibility

  console.log(ul);

  deleteBtn.addEventListener("click", () => {
    const parent = deleteBtn.parentNode;
    ul.removeChild(parent);
  });
});

{
  /* <ul class="todo-list-area">
          <li class="todo-list">
            <p>Todo1</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li class="todo-list">
            <p>Todo1</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul> */
}
