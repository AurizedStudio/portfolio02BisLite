var winArray = [];
var isProcessing = false;
function openWindow(url, target) {
  try {
    if (isProcessing == true) {
      return false;
    }
    isProcessing = true;
    linkWin = winArray[target];
    if (linkWin != null && linkWin.closed == false) {
      linkWin.close();
      linkWin = null;
    }
    linkWin = window.open(url,target);
    winArray[target] = linkWin;
    return false;
  } catch(e) {
  } finally {
    setTimeout(function(){isProcessing = false;}, 1000);
  }
}

var NOT_PROBLEM_CLASS = "check-Result-NotProblem";
var CHECK_RESULT_PROBLEM = "check-Result-Problem";
var NOT_PROBLEM_SUM_CLASS = "upper-Cell-Zero";
var CHECK_RESULT_PROBLEM_SUM = "select-Cell-Sum-NotZero";
var NOT_PROBLEM_SUM_AVE = "select-Cell-Average-Zero";
var CHECK_RESULT_PROBLEM_AVE = "select-Cell-Average-NotZero";
var VIEW_RANK_NUM = 5;
var SELECT_ELEMENT_PREFIX = "summary-Result-Select-Rank";
var DATA_SUM_KEY = "sum";
var DATA_AVE_KEY = "average";
var COUNT_ZERO = "0件";

addEventListenerObj(window, "load", initSelect);

function initSelect() {
    if (typeof selectData === "undefined") {
        return;
    }

    var selectElement;
    for (var i=0; i<VIEW_RANK_NUM; i++) {
        selectElement = document.getElementById(SELECT_ELEMENT_PREFIX + (i+1));

        if (selectElement != null) {
            addEventListenerObj(selectElement, "change", onChangeSelect);
            selectItem(selectElement, selectData.initialSelectItem[i]);
        }

    }

}

function onChangeSelect(e) {
    var selectElement = getEventSource(e);

    if (selectElement == null || selectData == null) {
        return;
    }

    var value = selectElement.value;
    var rank = selectElement.id.substring(SELECT_ELEMENT_PREFIX.length);
    changeData(selectData.data, value, rank);

    selectElement.title = selectElement.options[selectElement.selectedIndex].title;
}

function selectItem(element, item) {
    var index = -1;
    for (var i=0; i < element.options.length; i++) {
        if (element.options[i].text == item) {
            index = i;
            break;
        }
    }

    if (index != -1) {
        element.selectedIndex = index;
    }
}


function changeData(data, value, rank) {
    var str;
    for (var key in data) {
        str = data[key][value];

        if (str == null) {
            str = COUNT_ZERO;
        }

        tdElement = document.getElementById(key + "_rank" + rank);

        if (tdElement == null) {
            continue;
        }

        childNodes = tdElement.childNodes;

        if (childNodes == null || childNodes.length == 0) {
            tdElement.appendChild(document.createTextNode(str));
        } else {
            childNodes.item(0).nodeValue = str;
        }

        if (key == DATA_SUM_KEY) {
            if (str == COUNT_ZERO) {
                changeCSS(tdElement, CHECK_RESULT_PROBLEM_SUM, NOT_PROBLEM_SUM_CLASS);
            } else if (str != COUNT_ZERO) {
                changeCSS(tdElement, NOT_PROBLEM_SUM_CLASS, CHECK_RESULT_PROBLEM_SUM);
            }
        } else if (key == DATA_AVE_KEY) {
            if (str == COUNT_ZERO) {
                changeCSS(tdElement, CHECK_RESULT_PROBLEM_AVE, NOT_PROBLEM_SUM_AVE);
            } else if (str != COUNT_ZERO) {
                changeCSS(tdElement, NOT_PROBLEM_SUM_AVE, CHECK_RESULT_PROBLEM_AVE);
            }
        } else {
            if (str == COUNT_ZERO) {
                changeCSS(tdElement, CHECK_RESULT_PROBLEM, NOT_PROBLEM_CLASS);
            } else if (str != COUNT_ZERO) {
                changeCSS(tdElement, NOT_PROBLEM_CLASS, CHECK_RESULT_PROBLEM);
            }
        }
    }

}

function changeCSS(element, prevName, nextName) {
    if (element == null) {
        return;
    }

    if (!isExistClass(element.className, nextName)) {
        element.className = element.className + " " + nextName;
    }
    if (isExistClass(element.className, prevName)) {
        element.className = removeClassName(element.className, prevName);
    }
}

function getEventSource(e) {
    var obj;
    if (e && e.target) {
        obj = e.target;
    } else if (window.event) {
        obj = window.event.srcElement;
    }

    return obj;
}

function addEventListenerObj(obj, event, func) {
    if (obj.addEventListener) {
        obj.addEventListener(event, func);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + event, func);
    }
}

function isExistClass(className, targetClass){
    var classArray = className.split(" ");

    for (var i=0; i<classArray.length; i++) {
        if (classArray[i] == targetClass) {
            return true;
        }
    }

    return false;
}

function removeClassName(className, targetClass) {
    var classArray = className.split(" ");
    var newArray = [];

    for (var i=0; i<classArray.length; i++) {
        if ( classArray[i] != targetClass) {
            newArray.push(classArray[i]);
        }
    }

    return newArray.join(" ");
}
