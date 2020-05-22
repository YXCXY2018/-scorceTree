
//获取当前链接的QueryString值
String.prototype.queryString = function (name, is_hashtag) {
    var url = this.replace(new RegExp('(.*)\\?'), '?');
    url = is_hashtag == true ? url.replace(new RegExp('(.*)#'), '') : url.replace(new RegExp('#(.*)'), '');

    if (url.trim().length <= 0) {
        return '';
    }

    var reg = new RegExp('(^|&)' + name.toLocaleLowerCase() + '=([^&]*)(&|$)', "i");

    var r = (url).replace(RegExp('(.*)\\?', 'gi'), '').match(reg);
    if (r != undefined) {
        return decodeURIComponent(r[2]);
    }

    return '';
}

//获取文本字节长度
String.prototype.getLength = function () {
    return this.trim().replace(/[^\u0000-\u00ff]/g, "**").length;
}

//在某位置插入值
String.prototype.insert = function (length, value) {
    return this.substr(0, length) + value + this.substr(length, this.length);
};

//去除左右空格
String.prototype.trim = function (char) {
    char = char != undefined && char.length > 0 ? '\\' + char : '\\s';

    return this == 'undefined' || this == undefined || this == null || this == 'null' ? '' : this.replace(new RegExp('(^' + char + '*)|(' + char + '*$)', 'gi'), '')
};

//字符串格式化
String.prototype.format = function (array) {
    var input = this;

    for (var i in array) {
        input = input.replace(new RegExp('\\{' + i + '\\}', 'gi'), array[i]);
    }

    return input;
};

//返回正整数
String.prototype.toInt = function () {
    var number = new RegExp('([-0-9.]+)', 'gi').exec(this);
    number = number == undefined || isNaN(parseInt(parseFloat(number[0]))) ? 0 : parseInt(parseFloat(number[0]));


    return number;
};

//返回正整数
String.prototype.toFloat = function () {
    var number = new RegExp('([-0-9.]+)', 'gi').exec(this);
    number = number == undefined || isNaN(parseFloat(number[0])) ? 0 : parseFloat(number[0]);

    return number;
};

String.prototype.toPrice = function () {
    return this.match(new RegExp('^\\d+\\.?\\d{0,2}', 'g'));
}

//返回正整数
Number.prototype.toInt = function () {
    return this.toString().toInt();
};

//字符串转JSON
String.prototype.toJSON = function () {
    try {
        //去除毫秒
        var input = this.replace(new RegExp('"([0-9]{4}\-[0-9]{2}\-[0-9]{2} [0-9]{2}\:[0-9]{2}\:[0-9]{2})\.([0-9]+)"', 'gi'), '"$1"');

        return eval('(' + input + ')');
    } catch (e) {
        return null;
    }
};

//字符串转MD5
String.prototype.toMD5 = function () {
    return $.md5(this || '');
};

//字符串Base64加密
String.prototype.base64Encode = function () {
    return Base64.encode(this);
};

//字符串Base64解密
String.prototype.base64Decode = function () {
    return Base64.decode(this);
};

//验证是否为域名
String.prototype.isDomain = function () {
    var input = this;
    input = input.replace(new RegExp('(http://|https://|www.)', 'gi'), '').trim();

    if (input.indexOf('/') != -1 && input.indexOf('/') != input.length - 1) {
        return false;
    }

    input = input.indexOf('/') != -1 ? input.substr(0, input.indexOf('/')).trim() : input;

    return input.length > 0 && new RegExp('([a-z]+)(\\.)([a-z]+)', 'gi').test(input);
};

//验证是否为URL
String.prototype.isURL = function () {
    var strRegex = '^(https|http|ftp|rtsp|mms)?://' +
        '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' +
        '(([0-9]{1,3}\.){3}[0-9]{1,3}' +
        '|' +
        '([0-9a-z_!~*\'()-]+\.)*' +
        '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' +
        '[a-z]{2,6})' +
        '(:[0-9]{1,4})?' +
        '((/?)|' +
        '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)';
    return new RegExp(strRegex).test(this.trim());
};

//验证是否为Email
String.prototype.isEmail = function () {
    var reg = /^((\"[^\"\f\n\r\t\v\b]+\")|([\w\!\#\$\%\&'\*\+\-\~\/\^\`\|\{\}]+(\.[\w\!\#\$\%\&'\*\+\-\~\/\^\`\|\{\}]+)*))@((\[(((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9]))\.((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9]))\.((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9]))\.((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9])))\])|(((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9]))\.((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9]))\.((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9]))\.((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]?[0-9])))|((([A-Za-z0-9\-])+\.)+[A-Za-z\-]+))$/;
    return reg.test(this.trim());
};

//验证是否为手机
String.prototype.isPhone = function () {
    var reg = /^1[0-9]{10}$/;
    return reg.test(this.trim());
};

//验证是否为手机/电话
String.prototype.isTelephone = function () {
    telephone = /^0\d{10}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^0\d{10}-\d{0,4}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^0\d{2}-\d{8}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^0\d{2}-\d{8}-\d{0,4}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^0\d{3}-\d{7,8}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^0\d{3}-\d{7,8}-\d{0,4}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^400\d{7}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^400-\d{3}-\d{4}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    telephone = /^1[0-9]{10}$/;

    if (telephone.test(this.trim())) {
        return true;
    }

    return false;
};

//验证是否为价格
String.prototype.isPrice = function () {
    var reg;
    if (this.indexOf('0') == 0 && this.length > 1) {
        //0开头的数字串
        reg = /^[0]{1}[.]{1}[0-9]{1,2}$/;
    } else {
        //非0开头的数字
        reg = /^[1-9]{1}[0-9]{0,17}[.]{0,1}[0-9]{0,2}$/;
    }

    return reg.test(this);
};

//转换首字母大写
String.prototype.toTitleCase = function () {
    var inputs = this.toString().split(' ');

    if (inputs.length == 1) {
        return this;
    }

    var output = '';
    for (var i = 0; i < inputs.length; i++) {
        var firstChar = inputs[i].substring(0, 1);

        if (new RegExp('[a-z]+', 'gi').test(firstChar)) {
            output += firstChar.toLocaleUpperCase() + inputs[i].substring(1, inputs[i].length) + ' ';
        }
    }
    return output.trim();
};

//返回首字母
String.prototype.toFirstLetter = function () {
    var inputs = this.toString().split(' ');

    var output = '';
    for (var i = 0; i < inputs.length; i++) {
        output += inputs[i].substring(0, 1);
    }
    return output.trim();
};

//时间格式化
String.prototype.toDate = function () {
    var input = this;
    input = input.replace(RegExp('\\.(.*)', 'gi'), '');
    input = input.replace(RegExp('-', 'gi'), '/');
    input = input.replace(RegExp('年|月', 'gi'), '/');
    input = input.replace(RegExp('日', 'gi'), '');
    input = input.replace(RegExp('T', 'gi'), ' ');
    return new Date(input);
};

//检测是否为时间
String.prototype.isDate = function () {
    var input = this;
    input = input == undefined ? '' : input.toString().toDate();
    return new Date(input) != 'Invalid Date' && new Date(input) != 'NaN';
};

//首字母大写
String.prototype.toFirstUpperCase = function () {
    var input = this || '';

    return input.toLocaleLowerCase().replace(/\b([\w|'|_]+)\b/g, function (word) {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    });
};

//删除HTML
String.prototype.removeHTML = function () {
    return this.replace(/<[^>]+>/gi, '');
}

String.prototype.uploadHtmlImg = function () {
    var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;

    var srcs = [];

    while (match = reg.exec(this)) {
        if (srcs.grep(function (item) {
                return item == match[2]
            }).length <= 0) {
            srcs.push(match[2]);
        }
    }

    console.log(srcs)
}

//补位0
Number.prototype.prefixInteger = function (n) {
    return this.toString().length > n ? this.toString() : (Array(n).join(0) + this).slice(-n);
}

//检测是否为时间
Date.prototype.isDate = function () {
    return this != 'Invalid Date';
};

//时间格式化
Date.prototype.toDate = function () {
    return this;
};

//重写json.stringify
Date.prototype.toJSON = function () {
    return this.format('yyyy-MM-dd HH:mm:ss');
}

//时间格式化
Date.prototype.format = function (format) {
    var obj = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'H+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var item in obj) {
        if (new RegExp('(' + item + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? obj[item] : ('00' + obj[item]).substr(('' + obj[item]).length));
        }
    }

    return format;
};

//时间戳
Date.prototype.timestamp = function () {
    return parseInt(new Date().getTime() / 1000);
};

//时间戳
Date.prototype.toTimestamp = function () {
    return parseInt(this.getTime() / 1000);
};

//返回当月天数
Date.prototype.countDays = function () {
    var date = this.format('yyyy-MM-dd HH:mm:ss').toDate();

    date.setMonth(date.getMonth() + 1);
    date.setDate(0);

    return date.getDate();
};

//返回周几（数字，周一为起始日）
Date.prototype.weekByMonday = function () {
    return this.getDay() == 0 ? 7 : this.getDay();
};

//时间加
Date.prototype.dateAdd = function (format, input) {
    var date = this.format('yyyy-MM-dd HH:mm:ss').toDate();

    switch (format) {
        case 'year':
        case 'yyyy':
        case 'yy':
            date.setYear(date.getFullYear() + input);
            break;
        case 'MM':
            date.setMonth(date.getMonth() + input);
            break;
        case 'dd':
            date.setDate(date.getDate() + input);
            break;
        case 'HH':
            date.setHours(date.getHours() + input);
            break;
        case 'mm':
            date.setMinutes(date.getMinutes() + input);
            break;
        case 'ss':
            date.setSeconds(date.getSeconds() + input);
            break;
    }

    return date;
};

//过滤筛选
Array.prototype.grep = function (func, is_undefined) {
    var list = $.grep(this, func);

    return list.length <= 0 && is_undefined == true ? undefined : list;
}

//过滤筛选
Array.prototype.move = function (index, size) {
    if (index + size < 0 || index + size > this.length - 1) {
        return this;
    }

    var a = this[index];
    var b = this[index + size];

    this[index] = b;
    this[index + size] = a;

    this.push(a);
    this.splice(this.length - 1, 1);

    return this;
}

//数组对象去重
Array.prototype.distinctArrayObj = function(arr, key) {
  //key 进行比对的key值
  var obj = {};
  arr = arr.reduce(function (item, next) {
    obj[next[key]] ? '' : obj[next[key]] = true && item.push(next);
    return item;
  }, []);
  return arr 
}

//数组去重
Array.prototype.distinct = function () {
    var arr = this,
        result = [],
        len = arr.length;
    arr.forEach(function (v, i, arr) { //这里利用map，filter方法也可以实现
        var bool = arr.indexOf(v, i + 1); //从传入参数的下一个索引值开始寻找是否存在重复
        if (bool === -1) {
            result.push(v);
        }
    })
    return result;
};

//转换JSON为字符串
function convertJsonString(obj, isClear) {
    var jsonStr = '';

    var array = [];

    function convert_obj(input) {
        switch (Object.prototype.toString.apply(input).toLocaleLowerCase()) {
            case '[object date]':
                {
                    return '"' + input.format('yyyy-MM-dd HH:mm:ss.000') + '"';
                }
                break;
            case '[object number]':
                {
                    return input.toString();
                }
                break;
            default:
                if ((input || '').toString().trim().length == 19 && input.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/)) {
                    return input.toString() + '.000';
                }

                if (input != undefined) {
                    return JSON.stringify(input).trim('"'); //input.toString().replace(new RegExp('"(.*?)"', 'gi'), '\\"$1\\"')
                }

                return undefined;
                break;
        }
    }

    switch (Object.prototype.toString.apply(obj).toLocaleLowerCase()) {
        case '[object array]':
            {
                for (var i = 0; i < obj.length; i++) {
                    array.push(typeof (obj[i]) === 'object' ? convertJsonString(obj[i], isClear) : (typeof (obj[i]) === 'string' ? '"{0}"' : '{0}').format([convert_obj(obj[i])]));
                }
                jsonStr = '[' + array.join(',') + ']';
            }
            break;
        case '[object object]':
            {
                for (var i in obj) {
                    if (typeof (obj[i]) == 'function') {
                        continue;
                    }

                    array.push('"{0}":{1}'.format([i, typeof (obj[i]) === 'object' ? convertJsonString(obj[i], isClear) : '"' + convert_obj(obj[i]) + '"']));
                }
                jsonStr = '{' + array.join(',') + '}';
            }
            break;
        case '[object namednodemap]':
            {
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].name == undefined) {
                        continue;
                    }
                    array.push('"{0}":{1}'.format([obj[i].name, typeof (obj[i].value) === 'object' ? convertJsonString(obj[i].value, isClear) : '"' + convert_obj(obj[i].value) + '"']));
                }
                jsonStr = '{' + array.join(',') + '}';
            }
            break;
        default:
            jsonStr = convert_obj(obj);
            break;
    }

    if (isClear != false && jsonStr != undefined) {
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:"null"', 'gi'), '');
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:"null"', 'gi'), '');

        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:"undefined"', 'gi'), '');
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:"undefined"', 'gi'), '');

        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:undefined', 'gi'), '');
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:undefined', 'gi'), '');

        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:{}', 'gi'), '');
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:{}', 'gi'), '');

        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:\\[\\]', 'gi'), '');
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:\\[\\]', 'gi'), '');

        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:\\"\\"', 'gi'), '');
        jsonStr = jsonStr.replace(new RegExp('(,|)[\"a-zA-Z0-9_]+:\\"\\"', 'gi'), '');

        jsonStr = jsonStr.replace(new RegExp('\\{(,|)', 'gi'), '{');
        jsonStr = jsonStr.replace(new RegExp('(,|)\\}', 'gi'), '}');

        jsonStr = jsonStr == '{}' ? undefined : jsonStr;
    }

    return jsonStr;
};

//深拷贝
function deepCopy(obj) {
    var result = {};

    if (obj.constructor == Array) {
        result = [];
    }

    for (var key in obj) {
        result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }

    return result;
}
