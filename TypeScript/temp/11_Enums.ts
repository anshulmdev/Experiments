enum loadingOptions {
    before = "beforeLoading",
    ongoing = "loading",
    after = "loaded"
}


const state = (state: loadingOptions): boolean => { return state === "loading" };

console.log(state(loadingOptions["after"]));
console.log(state(loadingOptions["ongoing"]));