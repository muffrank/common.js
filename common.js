/*
    author: Muhammad Umar Farooq
    Version: 1.0
    URL: https://github.com/qualitybits/common.js
 */
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};
Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

function localData(geyKey) {
    var localData = {};
    localLength = localStorage.length;
    for (var i = 0; i < localLength; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        localData[key] = JSON.parse(value);
    }
    if (geyKey != undefined) {
        var keys = geyKey.split('.');
        var newData = localData;
        $.each(keys, function(i, k) {
            newData = newData[k]
        });
        localData = newData;
    }
    return localData;
}
Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function keyPareValue(data, keysArray) {
    var result = [];
    $.each(data, function(i, d) {
        var row = [];
        $.each(keysArray, function(kI, k) {
            obj = {};
            obj[k] = d[kI];
            row.push(obj);
        });
        result.push(row);
    });
    return result;
}

function loadAjax(ajaxUrl, method, params, callback, extraParams, Token) {
    $('.loading').show();
    var headers = {};
    if (Token != undefined) {
        headers = {
            "Authorization": 'Token ' + Token
        }
    }
    $.ajax({
        url: ajaxUrl,
        method: method,
        data: params,
        headers: headers,
        success: function(response) {
            $('.loading').hide();
            callback({
                data: response,
                status: true,
                params: params,
                extraParams: extraParams
            })
        },
        error: function(error) {
            $('.loading').hide();
            callback({
                data: error,
                status: false,
                params: params,
                extraParams: extraParams
            })
        }
    });
}

function triggerBinding(config) {
    switch (config.elType) {
        case 'selectBox':
            var el = $(config.el);
            $.each(config.data, function(i, d) {
                var optionTemplate = $('<option value=""></option>');
                optionTemplate.val(d[el.data('value')]);
                optionTemplate.text(d[el.data('text')]);
                $(el).append(optionTemplate);
            });
            break;
        case 'list':
            var el = $(config.el);
            $.each(config.data, function(i, d) {
                var optionTemplate = config.haveTemp ? $($(config.template).html()).clone() : $('<option value=""></option>');
                console.log(optionTemplate);
                optionTemplate.find('.'+el.data('text')).text(d[el.data('text')]);
                $(el).append(optionTemplate);
            });
            break;
        default:
            //code
            break;
    }
}
