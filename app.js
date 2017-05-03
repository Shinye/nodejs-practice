var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // 바디에 적힌 데이터들을 파싱해줌


app.listen(3000, function(){
    console.log("starting express server on port 3000!!!!");
}); // 3000번 포트를 접속하는거

app.use(express.static('public')); // use : 야 나 이거 쓸랭!!
app.use(bodyParser.json()); // 바디 안의 json 형태의 데이터를 json으로 파싱한다?
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs') // 나 view engine은 ejs쓸래!!!

// public폴더에 들어있는 모든 파일들을 static파일들로 간주해 아래와 같이 url 라우팅
// 을 처리하지 않아도 파일을 불러오는데 문제가 없도록 해주는 함수.

// url routing!!
app.get('/',function(req,res){
    //res.send('<h1>hello!!</h1>');
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', function(req,res){ // HTTP POST요청으로 이 URL의(첫번째 인자) 내용을 가져오도록 만든다.
    // get : req.param('email')
    console.log(req.body.email); // email: 'nicole9111@naver.com' 의 형식으로 나오기때문에
    //res.send("<h1>hello "+req.body.email+"</h1>");
    res.render('email.ejs', {'email' : req.body.email})
});

app.post('/ajax_send_email', function(req,res){
  var responseData = {'result':'ok', 'email':req.body.email};
  res.json(responseData);
});
