const utils = require("./utils")
// @ponicode
describe("utils.replaceStr", () => {
    test("0", () => {
        let callFunction = () => {
            utils.replaceStr("C:\\\\path\\to\\folder\\")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.replaceStr(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.replaceStr("C:\\\\path\\to\\file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.replaceStr("/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.replaceStr("path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.replaceStr(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
