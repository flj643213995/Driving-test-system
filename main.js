$(document).ready(function() {

    var qst = [
        "中华文明历史悠久，中华文化博大精深。在中国一草一木皆有神。那么，请问，从2000前至今的中国美女中，谁最美？",
        "有一种信仰叫做，我只信你。那么，请问，对于逗逗王国中，这个‘你’指的是谁？",
        "晴对雨，霞对虹，大漠对苍穹。那么，牛对什么？",
        "如果逗逗王国的新晋驾驶员必须要买一辆车送给国王，那么你认为逗逗国王会喜欢哪一辆？"
    ];


    var ans = {
        "0":[
                {"A":"杨玉环"}, {"B":"樊灵洁"}, {"C":"西施"}, {"D":"彭丽媛"}
            ],
        "1":[
                {"A":"樊灵洁"}, {"B":"逗逗"}, {"C":"国王"}, {"D":"妈妈"}
            ],
        "2":[
                {"A":"羊"}, {"B":"草"}, {"C":"琴"}, {"D":"月亮"}
            ],
        "3":[
                {"A":"飞鸽牌自行车"}, {"B":"艾玛电动车"}, {"C":"smart"}, {"D":"法拉利"}
            ]
    };


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



        var timu = qst[0];
        $('#question').append(timu);

        var daan = ans[0][0];
        $('#a').text(daan);
        $('#b').text("樊灵洁");


    });







});
