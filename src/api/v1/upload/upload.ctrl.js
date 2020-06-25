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
    } catch (ex) {
        ctx.status = 500;
        ctx.body = {
            status: 500,
            message: '서버 오류'
        };
        console.log(ex);
    }
}

exports.getFiles = async (ctx) => {
    try {
        const { fileEigenValue } = ctx.params;

        if (!fileEigenValue) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                message: '파일 고유 번호가 없습니다.'
            }
            return;
        }

        let files = await model.fileInfo.findAll({
            where : {
                fileEigenValue : fileEigenValue,
            }
        });

        if (!files) {
            ctx.status = 404;
            ctx.body = {
                status: 404,
                message: '고유 번호와 매칭되는 파일이 없습니다.'
            }
            return;
        }

        let fileUrlList = new Array;
        for (let i = 0; i < files.length; i ++) {
            fileUrlList.push(files[i].fileExt + "/" + files[i].filesUrl);
        }

        ctx.status = 200;
        ctx.body = {
            status: 200,
            message: '파일 다운 URL 조회 성공',
            data: fileUrlList
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