var _iconEle = document.getElementsByClassName('hrn-icons'),
    _count = 0,
    _totalIconChildren = _iconEle[0].children.length,
    _passed = false;

function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function toogleHeaderMenu(_this) {
    if (hasClass(_this, 'change')) {
        _this.classList.remove('change');
        document.body.style.overflowY = 'auto';
        document.getElementsByClassName('hrn-heading-overflow-list')[0].style.visibility = 'hidden';
        document.getElementsByClassName('hrn-heading-overflow-list')[0].style.width = 0;
    } else {
        _this.classList.add('change');
        document.body.style.overflowY = 'hidden';
        document.getElementsByClassName('hrn-heading-overflow-list')[0].style.visibility = 'visible';
        document.getElementsByClassName('hrn-heading-overflow-list')[0].style.width = 100 + "%";
    }
}


for (i in _iconEle[0].children) {
    _iconEle[0].children[i].onmouseover = function() {
        _passed = true;
        for (var i = 0; i < _iconEle[0].children.length; i++) {
            _iconEle[0].children[i].classList.remove('active');
        }

    }
    _iconEle[0].children[i].onmouseout = function() {
        _passed = false;
    }
}

setInterval(function() {
    if (!_passed) {
        if (_count === _totalIconChildren) {
            _count = 0;
        }
        for (var i = 0; i < _iconEle[0].children.length; i++) {
            if (i !== _count) {
                _iconEle[0].children[i].classList.remove('active');
            } else {
                _iconEle[0].children[i].classList.add('active');
            }
        }
        _count++;
    }
}, 1000);