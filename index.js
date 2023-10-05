export default class Logger
{
    constructor(loggerName) {
        this.name = loggerName;
    }

    output(...values) {
        console.log(this.name, ...values);
    }
}