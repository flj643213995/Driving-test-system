$(document).ready(function() {

    var qst = [
        "中华文明历史悠久，中华文化博大精深。在中国一草一木皆有神。那么，请问，从2000前至今的中国美女中，谁最美？",
        "有一种信仰叫做，我只信你。那么，请问，对于逗逗王国中，这个‘你’指的是谁？",
        "晴对雨，霞对虹，大漠对苍穹。那么，牛对什么？",
        "如果逗逗王国的新晋驾驶员必须要买一辆车送给国王，那么你认为逗逗国王会喜欢哪一辆？"
    ];


    var ans = [
        {"A":"杨玉环", "B":"樊灵洁", "C":"西施", "D":"彭丽媛"},
        {"A":"樊灵洁", "B":"逗逗", "C":"国王", "D":"妈妈"},
        {"A":"羊", "B":"草", "C":"琴", "D":"月亮"},
        {"A":"飞鸽牌自行车", "B":"艾玛电动车", "C":"smart", "D":"法拉利"}
    ];

    // 第几个题目的下标
    var index = 0;

    function showQue(index) {
        $('#question').text((index+1) + "、" + qst[index]);
        // 答案的下标
        var i = 0;
        var x = ["A","B","C","D"];
        var radioSpan = $('#answer input + span');
        for (x[i] in ans[index]) {
            radioSpan.eq(i).text(x[i] + '、' + ans[index][x[i]]);
            i++;
        }

    }

    // 可以在CSS中设置这些样式，在这里用 removeAttr 移除 display 的属性
    $('.start').click(function() {
        $('.content').css('display', 'block');
        $('.btn').css('display', 'inline-block');
        $('.btn').css('position', 'fixed');
        $('.btn').css('bottom', '70px');
        $('.btn').css('margin-left', '450px');
        $('.btn').css('margin-bottom', '40px');
        $('#last').css('margin-right', '150px');
        $('#next').css('margin-right', '150px');
        $('.chu').css('display', 'none');

        showQue(index);

    });


    $('#last').click(function() {
        index--;
        if (index < 0) {
            alert("已经到第一题了！");
            index = 0;
        }
        showQue(index);
    });


    $('#next').click(function() {
        index++;
        if (index > 3) {
            alert("没有更多题目了！");
            index = 3;
        }
        showQue(index);
    });


    $('#subm').click(function() {
        self.location='result.html';
    });

    $('#again').click(function() {
        self.location='apple.html';
    });

    $('#out').click(function() {
        self.location='out.html';
    });




});
