
const crypto = require('crypto');

//第一项对应提交的r值 第二项对应提交的部分ts值
const sha1_data = Math.random().toString(36).substr(2, 10) + '_' + Date.now() + '_50ab426dd3929d11f076517a7990d8a4f00e3543_'
const aes_key = sha1Hash(sha1_data).slice(0,16);
const aes_iv = 'e6fdeb13ca5ccef4'
console.log('aes_key', aes_key,'aes_iv',aes_iv);


function sha1Hash(data) {
  const hash = crypto.createHash('sha1');
  hash.update(data);
  return hash.digest('hex');
}

function aes_encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

function first_encrypt(data){
    _map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    random_num = Math.floor(Math.random()*64)
    base64_str = _map.slice(random_num,64) + _map.slice(0,random_num)
    console.log("base64_str-->",base64_str)

    base64_str = ''

    aa = JSON.stringify(data)
    final_str = base64_str[0];
    q_num = aa.length % 3;
    for(var i=0;i<aa.length-q_num;i+=3){
        code_num1 = aa.charCodeAt(i)
        code_num2 = aa.charCodeAt(i+1)
        code_num3 = aa.charCodeAt(i+2)
        sum = (code_num1<<16) + (code_num2<<8) + code_num3;
        cat_num1 = (sum>>18) & 63
        cat_num2 = (sum>>12) & 63
        cat_num3 = (sum>>6) & 63
        cat_num4 = sum & 63;
        final_str += (base64_str.charAt(cat_num1) + base64_str.charAt(cat_num2) + base64_str.charAt(cat_num3) + base64_str.charAt(cat_num4))
    }
    if (q_num === 1){
        code_num1 = aa.charCodeAt(i)
        sum = code_num1<<16
        cat_num1 = (sum>>18) & 63
        cat_num2 = (sum>>12) & 63
        final_str += (base64_str.charAt(cat_num1) + base64_str.charAt(cat_num2) + '==')
    }else if(q_num === 2){
        code_num1 = aa.charCodeAt(i)
        code_num2 = aa.charCodeAt(i+1)
        sum = (code_num1<<16) + (code_num2<<8);
        cat_num1 = (sum>>18) & 63
        cat_num2 = (sum>>12) & 63
        cat_num3 = (sum>>6) & 63
        final_str += (base64_str.charAt(cat_num1) + base64_str.charAt(cat_num2) + base64_str.charAt(cat_num3) + '=')
    }
    return final_str
}


data = {"cid":"ci-01-f7e995f58d01-30fcc287--ec86","bid":"bi-01-8017a6f58d01-ee4e156b-3138385f313665-5b9c","caid":"","t":[[851,219,2],[852,219,102],[854,219,110],[856,219,118],[859,219,126],[861,219,134],[864,219,142],[867,219,150],[870,219,158],[873,219,166],[876,219,174],[878,219,182],[881,219,190],[883,219,198],[885,219,205],[887,219,214],[889,219,221],[891,219,230],[892,219,238],[893,219,246],[895,219,253],[896,219,262],[898,219,278],[899,219,294],[900,219,302],[902,219,318],[903,219,326],[904,219,334],[906,219,342],[907,219,350],[908,219,357],[910,219,366],[912,219,374],[916,219,382],[920,219,389],[926,219,398],[933,219,406],[941,219,414],[950,219,421],[958,219,430],[966,219,437],[974,219,446],[979,219,453],[984,219,462],[987,219,470],[989,219,478],[991,219,486],[992,219,494],[993,219,502],[995,219,510],[996,219,526],[997,219,542],[998,219,558],[999,219,582],[1000,219,598],[1001,219,614],[1002,219,622],[1003,219,637],[1004,219,653],[1005,219,990],[1006,219,998],[1007,219,1006],[1008,219,1014],[1009,219,1021],[1011,219,1030],[1013,219,1038],[1014,219,1046],[1016,219,1054],[1017,219,1062],[1020,219,1070],[1021,219,1078],[1023,219,1086],[1024,219,1094],[1026,219,1102],[1028,219,1110],[1030,219,1118],[1031,219,1126],[1032,219,1134],[1033,219,1142],[1034,219,1158],[1035,219,1166],[1036,219,1190],[1037,219,1238],[1038,219,1254],[1039,219,1262],[1040,219,1270],[1041,219,1285],[1042,219,1301],[1043,219,1334]],"it":0,"x":233,"ctype":"b_track_match"}
encrypt_data1 = first_encrypt(data)
encrypt_data2 = aes_encrypt(encrypt_data1,aes_key,aes_iv)
console.log(encrypt_data2)


