const model = require("../../../model/index");

exports.urlUpload = async (ctx) => {
    try {
        const body = ctx.request.body;

        if (body.filesUrl == null || body.id == null || body.fileNum == null || body.fileExt == null || body.fileEigenValue == null) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: "파일에 대한 정보가 포함되지 않았습니다."
            }
            
            return;
        }
        
        const relevant = await model.fileInfo.create({
            senderId: body.id,
            fileEigenValue: body.fileEigenValue,
            filesUrl: body.filesUrl,
            fileNumbered: body.fileNum,
            fileExt: body.fileExt
        });

        ctx.status = 200;
        ctx.body = {
            data: {
                status: 200,
                message: "파일이 성공적으로 업로드 되었습니다.",
                data : {
                    idx: relevant.idx,
                    fileEigenValue: body.fileEigenValue,
                    senderId: body.id,
                    filesUrl: body.filesUrl,
                    fileExt: body.fileExt,
                    fileNumbered: body.fileNum
                }
            }
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
