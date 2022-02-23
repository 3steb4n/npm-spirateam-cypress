const callFunctionUpdateTestRun = require("../../npm-spirateam-cypress") 

const request = {
    user: {
        username: "esteban.gomez",
        apiKey: "{D59E9599-001F-4DA1-B561-62133F60AA35}"
    },
    stateTest: "failed",
    idProject: 37,
    idTestCase: 29619
}

callFunctionUpdateTestRun(request);