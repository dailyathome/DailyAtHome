export class Calander {
    public static months = [
        { val: '01', name: 'Jan' },
        { val: '02', name: 'Feb' },
        { val: '03', name: 'Mar' },
        { val: '04', name: 'Apr' },
        { val: '05', name: 'May' },
        { val: '06', name: 'Jun' },
        { val: '07', name: 'Jul' },
        { val: '08', name: 'Aug' },
        { val: '09', name: 'Sep' },
        { val: '10', name: 'Oct' },
        { val: '11', name: 'Nov' },
        { val: '12', name: 'Dec' }
    ];

    public static getNextNYears(n: number) {        
        var today = new Date();
        var year = today.getFullYear();
        var nxtNyears = [year];
        for (var i = year + n; i > year; i--) {
            nxtNyears.push(i);
        }
        return nxtNyears;
    }
    public static getCurrentYear() {
        var today = new Date();
        return  today.getFullYear();
    }
    public static getMonth() {
        var today = new Date();
        var month = today.getMonth() + 1;
        if (month < 10) {
            return  '0' + month;
        }
    }
}