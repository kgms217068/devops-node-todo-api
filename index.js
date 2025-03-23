const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
    res.send("hello, devops!");
})

app.get('/todos',(req,res) => {
    res.json(todos);
})

app.post('/todos', (req,res)=>{
    const todo = req.body.todo;
    if (todo) {
        todos.push(todo);
        res.status(201).json({message: '추가 완료'});
    } else {
        res.status(400).json({error:'내용이 필요해요'});
    }
    
});

app.listen(port, ()=> {
    console.log(`http://localhost:${port} 에서 서버 실행 중`);
})