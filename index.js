const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const removeBtn = document.getElementById('removeBtn')
const list = document.getElementById('list')

const listContent = []

function render() {
    let htmlstr = '' 

    listContent.forEach(function (item) {
        // console.log('item', item);
        htmlstr = htmlstr + `
        <div class="item">
            <div>
                <p>內容 :${item.content}</p>
                <p>時間 :${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })

    list.innerHTML = htmlstr
}

addedBtn.addEventListener('click', function () {
    // console.log(content.value);
    // console.log(date.value);
    // console.log(time.value);

    // listContent.push({
    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value,
    })
    // console.log(listContent);

    render()
})

removeBtn.addEventListener('click', function() {
    // listContent.pop()
    listContent.shift()

    render()
})