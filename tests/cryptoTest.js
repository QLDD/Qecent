var crypto = require('crypto');
var buffer = require('buffer');

/**
 * 加密、解密
 */
class cryptoTest {

    /**
     * 测试
     */
    static test() {
        let data = 'hello world';
        let secretKey = '9d3d84fe0a276547';
        let resultAES_e = cryptoTest.encry(data, secretKey);
        let resultAES_d = cryptoTest.decry(resultAES_e, secretKey);
        let resultMD5 = cryptoTest.md5(data);
        let result_sha1 = cryptoTest.sha1(data);        
        return {
            success: true,
            data: {
                AES_e: resultAES_e,
                AES_d: resultAES_d,
                MD5: resultMD5,
                sha1: result_sha1
            }
        }
    }

     /**
     * AES加密
     * @param {string} data 需要加密的内容
     * @param {string} secretKey 加密密码
     * javascript 默认是 PKCS7Padding 填充
     */
    static encry(data, secretKey) {
        const algorithm = 'aes-128-ecb'; //aes：AES加密; 128: 数据块128位; ecb: 加密模式 ECB 
        const inputEncoding = 'utf8'; //字符集: utf8
        const outputEncoding = 'hex'; //输出: hex
        const iv = ''; //偏移量
        try {
            let cipher = crypto.createCipheriv(algorithm, secretKey, iv);
            let result = cipher.update(data, inputEncoding, outputEncoding) + cipher.final(outputEncoding);
            return result;
        } catch (error) {
            console.log('AES加密异常：' + error);
            return;
        }
    }
    
    /**
     * AES解密
     * @param {string} data 需要解密的内容
     * @param {string} secretKey 解密密码
     */
    static decry(data, secretKey) {
        const algorithm = 'aes-128-ecb';
        const inputEncoding = 'hex';
        const outputEncoding = 'utf8';
        const iv = '';                
        try {
            let decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
            let result = decipher.update(data, inputEncoding, outputEncoding) + decipher.final(outputEncoding);
            return result;
        } catch (error) {
            console.log('AES解密异常：' + error);
            return;
        }
    }

    /**
     * MD5加密
     * @param {string} data 需要加密的内容
     */
    static md5(data) {        
        try {
            let bufferData = new buffer.Buffer(data);
            let binary = bufferData.toString('binary');
            //console.log(crypto.getHashes()); 返回支持的哈希算法名数组。
            //1、md5WithRSAEncryption --> md5  
            //2、binary：默认编码方式是'utf8'，有 'utf8', 'ascii' 或 'binary'。
            //3、digest：计算传入的数据的哈希摘要。encoding 可以是 'hex', 'binary' 或 'base64'，如果没有指定encoding ，将返回 buffer
            let result = crypto.createHash('md5WithRSAEncryption').update(binary).digest('hex');
            return result;
        } catch (error) {
            console.log('MD5加密异常：' + error);
            return;
        }        
    }

    /**
     * sha1加密 (加密固定，不可逆)
     * @param {string} data 需要加密的内容
     */
    static sha1(data) {        
        try {
            let result = crypto.createHash("sha1").update(data).digest('hex');
            return result;
        } catch (error) {
            console.log('sha1加密异常：' + error);
            return;
        }
    }
}

module.exports = cryptoTest;