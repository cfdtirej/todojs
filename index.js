// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
}


// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    const div = document.createElement('div'); // divタグを生成
    div.className = 'list-row'; // 生成したdivタグにclass="list-row"をつける
    
    const li = document.createElement('li'); // liタグを生成
    li.innerText = text; // テキストボックスの値をliタグに付与

    // 完了ボタンの作成
    const completeButton = document.createElement('button'); // buttonタグ生成
    completeButton.innerText = '完了'; // 生成したbuttonタグに'完了'を付与
    completeButton.addEventListener('click', () => {
        deleteFromIncompleteList(completeButton.parentNode);
        const addTarget = completeButton.parentNode; // 完了リストに追加する要素
        const text = addTarget.firstElementChild.innerText; // ToDoのテキストを取得
        addTarget.textContent = null;

        const li = document.createElement('li');
        li.innerText = text;
        
        const backButton = document.createElement('button');
        backButton.innerText = '戻す';
        backButton.addEventListener('click', () => {
            const deleteTarget = backButton.parentNode;
            document.getElementById('complete-list').removeChild(deleteTarget); // 戻すボタンの親タグを完了リストから削除

            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });

        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        document.getElementById('complete-list').appendChild(addTarget); // addTargetを完了リストに追加
    });

    // 削除ボタンの作成
    const deleteButton = document.createElement('button'); // buttonタグ生成
    deleteButton.innerText = '削除'; // 生成したbuttonタグに'削除'を付与
    deleteButton.addEventListener('click', () => {
        // 削除ボタンが押された時、親タグを未完了リストから削除
        deleteFromIncompleteList(deleteButton.parentNode)
    });

    div.appendChild(li); // divタグの子要素にliを追加
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById('incomplete-list').appendChild(div); // 未完了リストに追加
}


const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value; // テキストボックスの値を取得
    document.getElementById('add-text').value = ''; // テキストボックスの値を削除

    createIncompleteList(inputText);
};


document.getElementById('add-button').addEventListener('click', () => onClickAdd());
