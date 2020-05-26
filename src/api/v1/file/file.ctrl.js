const model = require("../../../model/index");

exports.sendFile = async (ctx) => {
    try {
        const body = ctx.request.body;

        if (body.file == null || body.recNumber) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: "파일 또는 recNumber가 포함되지 않았습니다."
            }
            return;
        }

        // TODO


    } catch (ex) {
        ctx.status = 500;
        ctx.body = {
            status: 500,
            message: '서버 오류'
        };
        console.log(ex);
    }
}