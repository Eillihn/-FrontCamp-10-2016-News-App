class CustomJsonLoader {

    static parse(source) {
        let sourceObj = JSON.parse(source);

        Object.keys(sourceObj).forEach((key) => typeof sourceObj[key] === 'number' && delete sourceObj[key]);

        return JSON.stringify(sourceObj);
    }
}

module.exports = (source) => CustomJsonLoader.parse(source);