        var string = "";
        var nums = new Array();
        var maths = new Array();
        var resultList = [];
        function showScreen(){
            document.getElementById("userIn").innerText = string;
        }
        document.getElementById("clear").onclick = function () {
            string = "";
            nums = new Array();
            maths = new Array();
            document.getElementById("userIn").innerHTML = "<span class=\"text-gray\">Sample Calculator</span>";
            document.getElementById("mathResult").innerHTML = "<span class=\"text-gray\">Let's Go</span>";
        }
        document.getElementById("back").onclick = function () {
            if( string ){
                string = new String(string).substring(0,string.length-1)
            }
            showScreen();
        }
        document.getElementById("dot").onclick = function () {
            string = string + ".";
            showScreen();
        }
        document.getElementById("minus").onclick = function(){
            if (string) {
                string = parseInt(string) * (-1);
            }
            showScreen();
        }
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
        for (i = 0; i < 10; i++) {
            document.getElementById("num"+i).onclick = (function (i) {
                return function () {
                    string = string + i;
                    showScreen();
                }
            })(i);
        }

        function showCalcList() {
            var fragment = document.createDocumentFragment();
            resultList.forEach(item => {
                const calcItem = document.createElement("div");
                calcItem.innerHTML = item;
                fragment.appendChild(calcItem);
            })
            var calcListElement = document.getElementById("calcList");
            calcListElement.innerHTML = '';
            calcListElement.appendChild(fragment);
            
        }
        document.getElementById("result").onclick = function () {
            var result;
            let left = '';
            var calcListItem = "";
            if (nums.length == 0) {
                result = string;
            }else {
                nums.push(string);
                for (var i = 0; i < nums.length - 1; i++) {
                    var right = nums[i + 1];
                    var math = maths[i];
                    if (i == 0) {
                        result = nums[0];
                        left = nums[0];
                    }
                    switch (math) {
                        case 1:
                            result = parseFloat(result) + parseFloat(right);
                            calcListItem = `${left} + ${right} = ${result}`;
                            break;
                        case 2:
                            result = parseFloat(result) - parseFloat(right);
                            calcListItem = `${left} - ${right} = ${result}`;
                            break;
                        case 3:
                            result = parseFloat(result) * parseFloat(right);
                            calcListItem = `${left} * ${right} = ${result}`;
                            break;
                        case 4:
                            try {
                                result = parseFloat(result) / parseFloat(right);
                                calcListItem = `${left} / ${right} = ${result}`;
                            } catch (error) {
                                
                            }
                            
                            break;
                    }
                }
            }
            document.getElementById("mathResult").innerText = result;
            string = "";
            nums = new Array();
            maths = new Array();
            resultList.push(calcListItem);
            showCalcList();
        }