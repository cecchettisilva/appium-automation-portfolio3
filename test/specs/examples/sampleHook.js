describe("Test hooks example", ()=>{

    before(async ()=>{
        console.log("Before suite")
    })
    after(()=>{
        console.log("After suite")
    })
    beforeEach(()=>{
        console.log("before each method")
    })
    afterEach(()=>{
        console.log("after each method")
    })

        it("test case 1", ()=>{
            console.log("Test case one ")
        })

        it("test case 2",()=>{
            console.log("Test case two")
        })
})