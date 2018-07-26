
/**
 * js对象Date
 */
class dateTest {

    /**
     * 测试
     */
    static test() {        
        let time1 = dateTest.getTodayPeriod();
        let time2 = dateTest.get24Hours();
        return {
            getTodayPeriod: time1,
            get24Hours: time2
        }        
    }  

    /**
     * 获取当天的开始时间和当前时间
     */
    static getTodayPeriod() {
        try {
            let startTime = new Date(new Date(new Date().toLocaleDateString()).getTime()); 
            let endTime = new Date();        
            return { 
                success: true,
                data: {
                    startTime: startTime,
                    endTime: endTime
                }                
            }
        } catch (error) {
            return {
                success: false,
                message: error
            }
        }        
    }

    /**
     * 获取当天时间节点后一个小时的，前面的24小时，时间点以及时间段
     */
    static get24Hours() {
        try {
            let nowHours = new Date().getHours();
            let nextHoursTimeStamp = new Date(new Date().toLocaleDateString() + ` ${nowHours}:00:00`).getTime() + 3600000;
            let timeArray = [];
            let timeShowArray = [];
            for(let i = 0; i <= 24; i++) {
                timeArray.unshift(new Date(nextHoursTimeStamp - i * 3600000));
                if(i < 24) {
                    timeShowArray.unshift(new Date(nextHoursTimeStamp - i * 3600000).getHours() + 'h');
                }
            }     
            return { 
                success: true,
                data: {
                    timeArray: timeArray,
                    timeShowArray: timeShowArray
                }                
            }
        } catch (error) {
            return {
                success: false,
                message: error
            }
        }        
    }
}

module.exports = dateTest;