/**
 * 查询字符串转对象
 * @param str
 */
interface queryObj {
    [key: string]: string
}

export function queryUrlToObj(str: string): queryObj{
    if (str) {
        return {}
    }

    let obj: queryObj = {};

    let indexof = str.indexOf('?')
    let newStrs = decodeURIComponent(str.slice(indexof + 1))

    let arr2 = newStrs.split("&");
    for(let i=0 ; i < arr2.length; i++){
        let res = arr2[i].split("=");
        obj[res[0]] = res[1];
    }
    return obj;
}

/**
 * 将英文的星期转为中文
 * @param name
 * @returns {string}
 * @constructor
 */
type ENWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
export function ENWeekToCN(name: ENWeek): string {
    if (!name) {
        return ''
    }
    let cn = ''
    switch (name) {
        case 'monday':
            cn = '周一'
            break
        case 'tuesday':
            cn = '周二'
            break
        case 'wednesday':
            cn = '周三'
            break
        case 'thursday':
            cn = '周四'
            break
        case 'friday':
            cn = '周五'
            break
        case 'saturday':
            cn = '周六'
            break
        case 'sunday':
            cn = '周日'
            break
        default:
            cn = ''
            break
    }
    return cn
}

/**
 * 获取指定长度的字符串
 * @param len
 * @param str
 * @returns {string}
 */
const randomStr: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789' // 随机所需的字符串
export function randomStrLen(len: number = 30, str: string = randomStr): string {
    const strArr: string[] = []
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor((Math.random() * str.length))
        strArr.push(str[randomIndex])
    }
    return strArr.join('')
}

/**
 * 获取 参数 的类型
 * @param data
 * return  string  参考 'Number' 'Object' 等
 */
export function getType(data: any): string {
    return Object.prototype.toString.call(data).substring(8).split(/]/)[0]
}

/**
 * 深度比较数据是否相等， 未处理循环引用， 如果出现循环引用， 导致死循环且超出堆栈大小
 * @param leftValue
 * @param rightValue
 */
export function deepCompare(leftValue: any, rightValue: any): boolean {
    if (arguments.length < 2) throw "Incorrect number of parameters";
    let sourceType = getType(leftValue);
    if (sourceType !== getType(rightValue)) return false;
    // Not objects and arrays
    if (sourceType !== "Array" && sourceType !== "Object" && sourceType !== "Set" && sourceType !== "Map") {
        if (sourceType === "Number" && leftValue.toString() === "NaN") {
            return rightValue.toString() === "NaN"
        }
        if (sourceType === "Date" || sourceType === "RegExp") {
            return leftValue.toString() === rightValue.toString()
        }
        return leftValue === rightValue
    } else if (sourceType === "Array") {
        if (leftValue.length !== rightValue.length) return false;
        if (leftValue.length === 0) return true;
        for (let i = 0; i < leftValue.length; i++) {
            if (!deepCompare(leftValue[i], rightValue[i])) return false;
        }
    } else if (sourceType === "Object") {
        let sourceKeyList = Reflect.ownKeys(leftValue);
        let compareKeyList = Reflect.ownKeys(rightValue);
        let key;
        if (sourceKeyList.length !== compareKeyList.length) return false;
        for (let i = 0; i < sourceKeyList.length; i++) {
            key = sourceKeyList[i];
            if (key !== compareKeyList[i]) return false;
            if (!deepCompare(leftValue[key], rightValue[key])) return false;
        }
    } else if (sourceType === "Set" || sourceType === "Map") {
        // 把 Set Map 转为 Array
        if (!deepCompare(Array.from(leftValue), Array.from(rightValue))) return false;
    }
    return true;
}
