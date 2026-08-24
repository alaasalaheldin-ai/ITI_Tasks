
var childWindow = null;

function logMsg(text) {
    var logDiv = document.getElementById("log");
    logDiv.innerHTML = text + "<br>" + logDiv.innerHTML;
}


function isChildReady() {
    if (childWindow == null || childWindow.closed) {
        logMsg("خطأ: لازم تفتح صفحة الـ Child الأول (زرار 2)");
        return false;
    }
    return true;
}


function closeParent() {
    logMsg("تم تنفيذ: window.close()");
    window.close();

}

function openChild() {
    childWindow = window.open("", "childWindow", "width=500,height=600,left=250,top=150");

    var childHTML = "";
    childHTML += "<!DOCTYPE html><html lang='ar' dir='rtl'><head><meta charset='UTF-8'>";
    childHTML += "<title>Child Page</title></head><body>";
    childHTML += "<h1>Child Page</h1>";
    childHTML += "<input type='button' value='إغلاق صفحة Parent' onclick='closeParentPage()'>";
    childHTML += "<div style='height:900px'>محتوى طويل لتجربة الـ Scroll</div>";
    childHTML += "<script>";
    childHTML += "function closeParentPage(){";
    childHTML += "  if(window.opener !== null && window.opener.closed == false){";
    childHTML += "    window.opener.close();";
    childHTML += "  } else {";
    childHTML += "    alert('مفيش اتصال بصفحة Parent');";
    childHTML += "  }";
    childHTML += "}";
    childHTML += "<" + "/script>";
    childHTML += "</body></html>";

    childWindow.document.write(childHTML);
    childWindow.document.close(); 
    logMsg("تم فتح صفحة Child");
}

// ============ 3- إغلاق صفحة الـ Child ============
function closeChild() {
    if (isChildReady() == false) {
        return;
    }
    childWindow.close();
    logMsg("تم تنفيذ: childWindow.close()");
}

// ============ 4- scrollTo للـ Child ============
function scrollToChild() {
    if (isChildReady() == false) {
        return;
    }
    childWindow.scrollTo(0, 400);
    logMsg("تم تنفيذ: childWindow.scrollTo(0, 400)");
}

// ============ 5- scrollBy للـ Child ============
function scrollByChild() {
    if (isChildReady() == false) {
        return;
    }
    childWindow.scrollBy(0, 100);
    logMsg("تم تنفيذ: childWindow.scrollBy(0, 100)");
}

// ============ 6- moveBy للـ Child ============
function moveByChild() {
    if (isChildReady() == false) {
        return;
    }
    childWindow.moveBy(40, 40);
    logMsg("تم تنفيذ: childWindow.moveBy(40, 40)");
}

// ============ 7- focus على الـ Child ============
function focusChild() {
    if (isChildReady() == false) {
        return;
    }
    childWindow.focus();
    logMsg("تم تنفيذ: childWindow.focus()");
}