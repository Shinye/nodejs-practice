var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.listen(3000, function(){
    console.log("starting express server on port 3000!!!!");
}); // 3000번 포트를 접속하는거

app.use(express.static('public')) // use : 야 나 이거 쓸랭!!
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// public폴더에 들어있는 모든 파일들을 static파일들로 간주해 아래와 같이 url 라우팅 
// 을 처리하지 않아도 파일을 불러오는데 문제가 없도록 해주는 함수.

// url routing!!
app.get('/',function(req,res){
    //res.send('<h1>hello!!</h1>');
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', function(req,res){
    // get : req.param('email')
    console.log(req.body.email); // email: 'nicole9111@naver.com' 의 형식으로 나오기때문에
    res.send("<h1>hello "+req.body.email+"</h1>");
    
});

