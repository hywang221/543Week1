        //定义变量存储用户当前输入（即上一个运算符之后，下一个运算符之前）的内容
        var string = "";
        //数组用来存储用户在一次运算结束前的所有的数字
        var nums = new Array();
        //数组用来存储运算符
        var maths = new Array();
        //函数：显示当前输入
        function showScreen(){
            document.getElementById("userIn").innerText = string;
        }
        //清除按钮功能：清除屏幕内容，并重置数据(当前输入内容,运算符,运算符之前的内容)
        document.getElementById("clear").onclick = function () {
            string = "";
            nums = new Array();
            maths = new Array();
            document.getElementById("userIn").innerHTML = "<div class=\"text\">简易的计算器</div>";
            document.getElementById("mathResult").innerHTML = "<div class=\"text\">by keats_Coder</div>";
        }
        //退格按钮功能：删除当前输入栏最后一个输入的数字
        document.getElementById("back").onclick = function () {
            if( string ){
                string = new String(string).substring(0,string.length-1)
            }
            showScreen();
        }
        //小数点
        document.getElementById("dot").onclick = function () {
            string = string + ".";
            showScreen();
        }
        //正负号
        document.getElementById("minus").onclick = function(){
            if (string) {
                string = parseInt(string) * (-1);
            }
            showScreen();
        }
        //运算符功能，1 --> +; 2 --> -; 3 --> *; 4 --> /
        for (var i = 1; i <= 4; i++) {
            document.getElementById("operator"+i).onclick = (function (i){
                return function() {
                    maths.push(i);
                    nums.push(string);
                    string = "";
                    showScreen();
                }
            })(i);
        }
        //数字按钮
        for (i = 0; i < 10; i++) {
            document.getElementById("num"+i).onclick = (function (i) {
                return function () {
                    string = string + i;
                    showScreen();
                }
            })(i);
        }
        //等号按钮。运算并显示结果
        document.getElementById("result").onclick = function () {
            //定义变量-结果
            var result;
            //如果用户参与运算的只有一个
            if (nums.length == 0) {
                result = string;
            }else {
                //将最后一个数存入数组
                nums.push(string);
                //取出数组中的值进行运算
                for (var i = 0; i < nums.length - 1; i++) {
                    var right = nums[i + 1];
                    var math = maths[i];
                    if (i == 0) {
                        result = nums[0];
                    }
                    switch (math) {
                        case 1:
                            result = parseFloat(result) + parseFloat(right);
                            break;
                        case 2:
                            result = parseFloat(result) - parseFloat(right);
                            break;
                        case 3:
                            result = parseFloat(result) * parseFloat(right);
                            break;
                        case 4:
                            result = parseFloat(result) / parseFloat(right);
                            break;
                    }
                }
            }
            //将结果安排到结果栏
            document.getElementById("mathResult").innerText = result;
            //重置计算器
            string = "";
            nums = new Array();
            maths = new Array();
        }