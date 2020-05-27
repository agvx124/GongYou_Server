const model = require("../../../model/index");

exports.postImageUpload = async (ctx) => {
    try {
        const body = ctx.request.body;

        if (ctx.files == null) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: "파일이 포함되지 않았습니다."
            }
            console.log(ctx.files, body.recNumber);
            return;
        }
        else {
            console.log(ctx.files);
            return;
        }


    } catch (ex) {
        ctx.status = 500;
        ctx.body = {
            status: 500,
            message: '서버 오류'
        };
        console.log(ex);
    }
}

exports.postVideoUpload = async (ctx) => {
    try {
        const body = ctx.request.body;

        if (body.file == null || body.recNumber == null) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: "파일 또는 recNumber가 포함되지 않았습니다."
            }
            return;
        }
        else if (body.file) {
            
        }


    } catch (ex) {
        ctx.status = 500;
        ctx.body = {
            status: 500,
            message: '서버 오류'
        };
        console.log(ex);
    }
}

exports.postAudioUpload = async (ctx) => {
    try {
        const body = ctx.request.body;

        if (body.file == null || body.recNumber == null) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: "파일 또는 recNumber가 포함되지 않았습니다."
            }
            return;
        }
        else if (body.file) {
            
        }


    } catch (ex) {
        ctx.status = 500;
        ctx.body = {
            status: 500,
            message: '서버 오류'
        };
        console.log(ex);
    }
}

exports.postFileUpload = async (ctx) => {
    try {
        const body = ctx.request.body;

        if (body.file == null || body.recNumber == null) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: "파일 또는 recNumber가 포함되지 않았습니다."
            }
            return;
        }
        else if (body.file) {
            
        }


    } catch (ex) {
        ctx.status = 500;
        ctx.body = {
            status: 500,
            message: '서버 오류'
        };
        console.log(ex);
    }
}