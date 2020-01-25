"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class File {
    constructor(url) {
        this.url = url;
    }
    static stream(communicationParams) {
        const range = communicationParams.Request.query.Range;
        fs.stat(communicationParams.Source, (statErr, statInfo) => {
            if (statErr) {
                console.log(statErr);
            }
            else {
                if (range) {
                    sendFileData("mp4", {
                        start: range.replace("bytes=", "").split("-")[0],
                        end: range.replace("bytes=", "").split("-")[1]
                    });
                }
                else {
                    sendFileData("mp4");
                }
                // File interpretation
                function sendFileData(type, params) {
                    if (type.toLowerCase() === "mp4") {
                        const file = fs.createReadStream(communicationParams.Source, params ? {
                            start: parseInt(params.start, 10),
                            end: parseInt(params.end, 10)
                        } : "");
                        if (params) {
                            communicationParams.Response.writeHead(206, {
                                "Content-Length": (params.end - params.start) + 1,
                                "Content-Type": "video/mp4",
                            });
                            file.pipe(communicationParams.Response);
                        }
                        else {
                            communicationParams.Response.writeHead(200, {
                                "Content-Length": statInfo.size,
                                "Content-Type": "video/mp4",
                            });
                            file.pipe(communicationParams.Response);
                        }
                    }
                    else if (type.toLowerCase() === "png") {
                        console.log("some other file");
                    }
                }
            }
        });
    }
}
exports.File = File;
//# sourceMappingURL=fileService.js.map